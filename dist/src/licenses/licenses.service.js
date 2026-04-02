"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicensesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const license_key_util_1 = require("./license-key.util");
let LicensesService = class LicensesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generate(email, maxMachines, extra) {
        let key;
        do {
            key = (0, license_key_util_1.generateLicenseKey)();
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
    async activate(key, machineId) {
        const license = await this.prisma.license.findUnique({
            where: { key },
            include: { activations: true },
        });
        if (!license) {
            throw new common_1.NotFoundException('License key not found');
        }
        if (!license.active) {
            throw new common_1.ForbiddenException('License has been revoked');
        }
        const existing = license.activations.find((a) => a.machineId === machineId);
        if (existing) {
            await this.prisma.activation.update({
                where: { id: existing.id },
                data: { lastSeen: new Date() },
            });
            return { valid: true, message: 'Already activated on this machine' };
        }
        if (license.activations.length >= license.maxMachines) {
            throw new common_1.BadRequestException(`Machine limit reached (${license.maxMachines}). Deactivate another machine first.`);
        }
        await this.prisma.activation.create({
            data: { licenseId: license.id, machineId },
        });
        return { valid: true, message: 'License activated successfully' };
    }
    async verify(key, machineId) {
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
        await this.prisma.activation.update({
            where: { id: activation.id },
            data: { lastSeen: new Date() },
        });
        return { valid: true };
    }
    async deactivate(key, machineId) {
        const license = await this.prisma.license.findUnique({
            where: { key },
            include: { activations: true },
        });
        if (!license) {
            throw new common_1.NotFoundException('License key not found');
        }
        const activation = license.activations.find((a) => a.machineId === machineId);
        if (!activation) {
            throw new common_1.NotFoundException('No activation found for this machine');
        }
        await this.prisma.activation.delete({ where: { id: activation.id } });
        return { message: 'Machine deactivated' };
    }
    async listAll() {
        return this.prisma.license.findMany({
            include: { activations: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async revoke(key) {
        const license = await this.prisma.license.findUnique({ where: { key } });
        if (!license)
            throw new common_1.NotFoundException('License not found');
        await this.prisma.license.update({
            where: { key },
            data: { active: false },
        });
        return { message: 'License revoked' };
    }
};
exports.LicensesService = LicensesService;
exports.LicensesService = LicensesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LicensesService);
//# sourceMappingURL=licenses.service.js.map