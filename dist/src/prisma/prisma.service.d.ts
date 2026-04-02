import { OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../../generated/prisma/client.js';
export declare class PrismaService implements OnModuleDestroy {
    private pool;
    client: InstanceType<typeof PrismaClient>;
    constructor(configService: ConfigService);
    get license(): import("../../generated/prisma/models.js").LicenseDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get activation(): import("../../generated/prisma/models.js").ActivationDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    onModuleDestroy(): Promise<void>;
}
