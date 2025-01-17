ALTER TABLE "applications" ADD COLUMN "ssn" varchar(11) NOT NULL;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "driver_license_front_url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "driver_license_back_url" text NOT NULL;