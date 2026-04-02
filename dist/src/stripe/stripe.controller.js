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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const stripe_1 = __importDefault(require("stripe"));
const licenses_service_1 = require("../licenses/licenses.service");
const mail_service_1 = require("../mail/mail.service");
let StripeController = class StripeController {
    config;
    licensesService;
    mailService;
    stripe;
    webhookSecret;
    constructor(config, licensesService, mailService) {
        this.config = config;
        this.licensesService = licensesService;
        this.mailService = mailService;
        this.stripe = new stripe_1.default(this.config.get('STRIPE_SECRET_KEY'));
        this.webhookSecret = this.config.get('STRIPE_WEBHOOK_SECRET');
    }
    async handleWebhook(req, signature) {
        let event;
        try {
            event = this.stripe.webhooks.constructEvent(req.rawBody, signature, this.webhookSecret);
        }
        catch (err) {
            throw new common_1.BadRequestException(`Webhook signature verification failed`);
        }
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const customer = session.customer_details;
            const email = customer?.email ?? session.customer_email;
            if (!email) {
                console.error('No email found in checkout session:', session.id);
                return { received: true };
            }
            const name = customer?.name ?? undefined;
            const phone = customer?.phone ?? undefined;
            const country = customer?.address?.country ?? undefined;
            const license = await this.licensesService.generate(email, 2, {
                name,
                phone,
                country,
                stripeSessionId: session.id,
            });
            await this.mailService.sendLicenseKey(email, license.key);
            console.log(`License ${license.key} generated for ${name ?? email} and sent to ${email}`);
        }
        return { received: true };
    }
};
exports.StripeController = StripeController;
__decorate([
    (0, common_1.Post)('webhook'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)('stripe-signature')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StripeController.prototype, "handleWebhook", null);
exports.StripeController = StripeController = __decorate([
    (0, common_1.Controller)('stripe'),
    __metadata("design:paramtypes", [config_1.ConfigService,
        licenses_service_1.LicensesService,
        mail_service_1.MailService])
], StripeController);
//# sourceMappingURL=stripe.controller.js.map