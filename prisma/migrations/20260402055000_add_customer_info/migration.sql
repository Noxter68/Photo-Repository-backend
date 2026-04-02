ALTER TABLE "licenses" ADD COLUMN "name" TEXT;
ALTER TABLE "licenses" ADD COLUMN "phone" TEXT;
ALTER TABLE "licenses" ADD COLUMN "country" TEXT;
ALTER TABLE "licenses" ADD COLUMN "stripeSessionId" TEXT;
CREATE UNIQUE INDEX "licenses_stripeSessionId_key" ON "licenses"("stripeSessionId");
