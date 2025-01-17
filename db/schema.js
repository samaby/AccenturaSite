import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  uuid,
} from "drizzle-orm/pg-core";

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),

  firstName: varchar("first_name", { length: 256 }).notNull(),
  lastName: varchar("last_name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  // Added SSN field - should be encrypted in production
  ssn: varchar("ssn", { length: 11 }).notNull(),
  // Added driver's license fields
  driverLicenseFrontUrl: text("driver_license_front_url").notNull(),
  driverLicenseBackUrl: text("driver_license_back_url").notNull(),
  resumeUrl: text("resume_url"),
  coverLetter: text("cover_letter"),
  linkedinUrl: text("linkedin_url"),
  portfolioUrl: text("portfolio_url"),
  status: varchar("status", { length: 50 }).default("pending").notNull(),
  // Add created_by field
  createdBy: uuid("created_by"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
