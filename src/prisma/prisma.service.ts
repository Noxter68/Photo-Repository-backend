import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class PrismaService implements OnModuleDestroy {
  private pool: Pool;
  public client: InstanceType<typeof PrismaClient>;

  constructor(configService: ConfigService) {
    const connectionString = configService.get<string>('DATABASE_URL');
    this.pool = new Pool({ connectionString });
    const adapter = new PrismaPg(this.pool);
    this.client = new PrismaClient({ adapter } as any);
  }

  get license() {
    return this.client.license;
  }

  get activation() {
    return this.client.activation;
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
