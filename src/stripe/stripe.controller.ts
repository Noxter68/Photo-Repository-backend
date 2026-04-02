import {
  Controller,
  Post,
  Req,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import Stripe from 'stripe';
import { LicensesService } from '../licenses/licenses.service';
import { MailService } from '../mail/mail.service';

@Controller('stripe')
export class StripeController {
  private stripe: Stripe;
  private webhookSecret: string;

  constructor(
    private config: ConfigService,
    private licensesService: LicensesService,
    private mailService: MailService,
  ) {
    this.stripe = new Stripe(this.config.get<string>('STRIPE_SECRET_KEY')!);
    this.webhookSecret = this.config.get<string>('STRIPE_WEBHOOK_SECRET')!;
  }

  @Post('webhook')
  async handleWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string,
  ) {
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(
        req.rawBody!,
        signature,
        this.webhookSecret,
      );
    } catch (err) {
      throw new BadRequestException(`Webhook signature verification failed`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const customer = session.customer_details;
      const email = customer?.email ?? session.customer_email;

      if (!email) {
        console.error('[WEBHOOK] No email found in checkout session:', session.id);
        return { received: true };
      }

      // Check if this session was already processed (Stripe retries on failure)
      const existing = await this.licensesService.findBySessionId(session.id);
      if (existing) {
        console.log(`[WEBHOOK] ⏭ Session ${session.id} already processed, skipping`);
        return { received: true };
      }

      // Extract customer info from Stripe
      const name = customer?.name ?? undefined;
      const phone = customer?.phone ?? undefined;
      const country = customer?.address?.country ?? undefined;

      // Generate license key with customer info
      const license = await this.licensesService.generate(email, 2, {
        name,
        phone,
        country,
        stripeSessionId: session.id,
      });

      // Send license key by email
      try {
        await this.mailService.sendLicenseKey(email, license.key, name);
        console.log(`[WEBHOOK] ✅ Checkout completed | session=${session.id} | email=${email} | name=${name ?? 'N/A'} | key=${license.key}`);
      } catch (err) {
        console.error(`[WEBHOOK] ⚠ License ${license.key} generated but email failed for ${email}:`, err);
      }
    }

    return { received: true };
  }
}
