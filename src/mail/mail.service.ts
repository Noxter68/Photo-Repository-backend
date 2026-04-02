import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private resend: Resend;
  private fromEmail: string;
  private downloadUrl: string;

  constructor(private config: ConfigService) {
    this.resend = new Resend(this.config.get<string>('RESEND_API_KEY'));
    this.fromEmail = this.config.get<string>('FROM_EMAIL') ?? 'noreply@photo-organizer.com';
    this.downloadUrl = this.config.get<string>('DOWNLOAD_URL') ?? '#';
  }

  async sendLicenseKey(email: string, licenseKey: string, customerName?: string) {
    const greeting = customerName ? `Bonjour ${customerName},` : 'Bonjour,';

    const { data, error } = await this.resend.emails.send({
      from: this.fromEmail,
      to: email,
      subject: 'Votre clé de licence Photo Organizer',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #1a1a1a; margin-bottom: 8px;">Merci pour votre achat !</h1>
          <p style="color: #666; font-size: 15px; margin-bottom: 24px;">${greeting}<br>Voici votre clé de licence pour Photo Organizer :</p>

          <div style="background: #f4f4f5; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
            <span style="font-size: 28px; font-weight: 700; letter-spacing: 4px; color: #1a1a1a; font-family: monospace;">
              ${licenseKey}
            </span>
          </div>

          <p style="color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
            Ouvrez l'application, entrez cette clé pour l'activer.<br>
            Vous pouvez utiliser cette clé sur 2 machines maximum.
          </p>

          <div style="text-align: center; margin-bottom: 32px;">
            <a href="${this.downloadUrl}" style="display: inline-block; background: #155DFC; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">
              Télécharger Photo Organizer
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;">
          <p style="color: #999; font-size: 12px; line-height: 1.5;">
            Conservez cet email, il contient votre clé de licence.<br>
            Si vous perdez l'application, utilisez le bouton ci-dessus pour la retélécharger.<br>
            En cas de problème, contactez-nous en répondant à cet email.
          </p>
        </div>
      `,
    });

    if (error) {
      this.logger.error(`Failed to send license email to ${email}: ${JSON.stringify(error)}`);
      throw new Error(`Email send failed: ${error.message}`);
    }

    this.logger.log(`License email sent to ${email} (resend id: ${data?.id})`);
  }
}
