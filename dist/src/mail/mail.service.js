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
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const resend_1 = require("resend");
let MailService = class MailService {
    config;
    resend;
    fromEmail;
    constructor(config) {
        this.config = config;
        this.resend = new resend_1.Resend(this.config.get('RESEND_API_KEY'));
        this.fromEmail = this.config.get('FROM_EMAIL') ?? 'noreply@photo-organizer.com';
    }
    async sendLicenseKey(email, licenseKey) {
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
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map