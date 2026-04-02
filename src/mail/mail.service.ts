import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private resend: Resend;
  private fromEmail: string;

  constructor(private config: ConfigService) {
    this.resend = new Resend(this.config.get<string>('RESEND_API_KEY'));
    this.fromEmail = this.config.get<string>('FROM_EMAIL') ?? 'noreply@photo-organizer.com';
  }

  async sendLicenseKey(email: string, licenseKey: string) {
    await this.resend.emails.send({
      from: this.fromEmail,
      to: email,
      subject: 'Votre clé de licence Photo Organizer',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #1a1a1a; margin-bottom: 8px;">Merci pour votre achat !</h1>
          <p style="color: #666; font-size: 15px; margin-bottom: 32px;">Voici votre clé de licence pour Photo Organizer :</p>

          <div style="background: #f4f4f5; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
            <span style="font-size: 28px; font-weight: 700; letter-spacing: 4px; color: #1a1a1a; font-family: monospace;">
              ${licenseKey}
            </span>
          </div>

          <p style="color: #666; font-size: 14px; line-height: 1.6;">
            Ouvrez l'application, entrez cette clé pour l'activer.<br>
            Vous pouvez utiliser cette clé sur 2 machines maximum.
          </p>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;">
          <p style="color: #999; font-size: 12px;">
            Conservez cet email, il contient votre clé de licence.
          </p>
        </div>
      `,
    });
  }
}
