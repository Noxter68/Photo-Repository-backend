import {
  Injectable,
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { generateLicenseKey } from './license-key.util';

@Injectable()
export class LicensesService {
  constructor(private prisma: PrismaService) {}

  /** Generate a new license key (called by admin or Stripe webhook) */
  async generate(
    email: string,
    maxMachines: number,
    extra?: { name?: string; phone?: string; country?: string; stripeSessionId?: string },
  ) {
    let key: string;
    // Ensure uniqueness
    do {
      key = generateLicenseKey();
    } while (await this.prisma.license.findUnique({ where: { key } }));

    const license = await this.prisma.license.create({
      data: {
        key,
        email,
        maxMachines,
        name: extra?.name,
        phone: extra?.phone,
        country: extra?.country,
        stripeSessionId: extra?.stripeSessionId,
      },
    });

    return { key: license.key, email: license.email, maxMachines: license.maxMachines };
  }

  /** Activate a license on a machine */
  async activate(key: string, machineId: string) {
    const license = await this.prisma.license.findUnique({
      where: { key },
      include: { activations: true },
    });

    if (!license) {
      throw new NotFoundException('License key not found');
    }

    if (!license.active) {
      throw new ForbiddenException('License has been revoked');
    }

    // Check if this machine is already activated
    const existing = license.activations.find((a) => a.machineId === machineId);
    if (existing) {
      // Update lastSeen and return success
      await this.prisma.activation.update({
        where: { id: existing.id },
        data: { lastSeen: new Date() },
      });
      return { valid: true, message: 'Already activated on this machine' };
    }

    // Check machine limit
    if (license.activations.length >= license.maxMachines) {
      throw new BadRequestException(
        `Machine limit reached (${license.maxMachines}). Deactivate another machine first.`,
      );
    }

    await this.prisma.activation.create({
      data: { licenseId: license.id, machineId },
    });

    return { valid: true, message: 'License activated successfully' };
  }

  /** Verify a license is still valid for a machine */
  async verify(key: string, machineId: string) {
    const license = await this.prisma.license.findUnique({
      where: { key },
      include: { activations: true },
    });

    if (!license || !license.active) {
      return { valid: false };
    }

    const activation = license.activations.find((a) => a.machineId === machineId);
    if (!activation) {
      return { valid: false };
    }

    // Update lastSeen
    await this.prisma.activation.update({
      where: { id: activation.id },
      data: { lastSeen: new Date() },
    });

    return { valid: true };
  }

  /** Deactivate a machine slot */
  async deactivate(key: string, machineId: string) {
    const license = await this.prisma.license.findUnique({
      where: { key },
      include: { activations: true },
    });

    if (!license) {
      throw new NotFoundException('License key not found');
    }

    const activation = license.activations.find((a) => a.machineId === machineId);
    if (!activation) {
      throw new NotFoundException('No activation found for this machine');
    }

    await this.prisma.activation.delete({ where: { id: activation.id } });

    return { message: 'Machine deactivated' };
  }

  /** Admin: list all licenses */
  async listAll() {
    return this.prisma.license.findMany({
      include: { activations: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  /** Admin: revoke a license */
  async revoke(key: string) {
    const license = await this.prisma.license.findUnique({ where: { key } });
    if (!license) throw new NotFoundException('License not found');

    await this.prisma.license.update({
      where: { key },
      data: { active: false },
    });

    return { message: 'License revoked' };
  }
}
