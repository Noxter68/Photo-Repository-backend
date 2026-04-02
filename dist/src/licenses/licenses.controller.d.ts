import { ConfigService } from '@nestjs/config';
import { LicensesService } from './licenses.service';
import { ActivateDto } from './dto/activate.dto';
import { GenerateDto } from './dto/generate.dto';
export declare class LicensesController {
    private licensesService;
    private configService;
    constructor(licensesService: LicensesService, configService: ConfigService);
    activate(dto: ActivateDto): Promise<{
        valid: boolean;
        message: string;
    }>;
    verify(dto: ActivateDto): Promise<{
        valid: boolean;
    }>;
    deactivate(dto: ActivateDto): Promise<{
        message: string;
    }>;
    generate(dto: GenerateDto, apiKey: string): Promise<{
        key: string;
        email: string;
        maxMachines: number;
    }>;
    listAll(apiKey: string): Promise<({
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
    revoke(key: string, apiKey: string): Promise<{
        message: string;
    }>;
    private validateAdmin;
}
