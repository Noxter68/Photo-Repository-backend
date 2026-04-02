import { PrismaService } from '../prisma/prisma.service';
export declare class LicensesService {
    private prisma;
    constructor(prisma: PrismaService);
    generate(email: string, maxMachines: number, extra?: {
        name?: string;
        phone?: string;
        country?: string;
        stripeSessionId?: string;
    }): Promise<{
        key: string;
        email: string;
        maxMachines: number;
    }>;
    activate(key: string, machineId: string): Promise<{
        valid: boolean;
        message: string;
    }>;
    verify(key: string, machineId: string): Promise<{
        valid: boolean;
    }>;
    deactivate(key: string, machineId: string): Promise<{
        message: string;
    }>;
    listAll(): Promise<({
        activations: {
            id: string;
            licenseId: string;
            machineId: string;
            activatedAt: Date;
            lastSeen: Date;
        }[];
    } & {
        id: string;
        key: string;
        email: string;
        name: string | null;
        phone: string | null;
        country: string | null;
        stripeSessionId: string | null;
        maxMachines: number;
        active: boolean;
        createdAt: Date;
    })[]>;
    revoke(key: string): Promise<{
        message: string;
    }>;
}
