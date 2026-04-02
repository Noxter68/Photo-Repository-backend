import { ConfigService } from '@nestjs/config';
export declare class MailService {
    private config;
    private resend;
    private fromEmail;
    constructor(config: ConfigService);
    sendLicenseKey(email: string, licenseKey: string): Promise<void>;
}
