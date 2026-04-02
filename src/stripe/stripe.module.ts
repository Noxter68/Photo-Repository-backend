import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { LicensesModule } from '../licenses/licenses.module';

@Module({
  imports: [LicensesModule],
  controllers: [StripeController],
})
export class StripeModule {}
