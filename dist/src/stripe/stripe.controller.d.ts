import type { RawBodyRequest } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { LicensesService } from '../licenses/licenses.service';
import { MailService } from '../mail/mail.service';
export declare class StripeController {
    private config;
    private licensesService;
    private mailService;
    private stripe;
    private webhookSecret;
    constructor(config: ConfigService, licensesService: LicensesService, mailService: MailService);
    handleWebhook(req: RawBodyRequest<Request>, signature: string): Promise<{
        received: boolean;
    }>;
}
