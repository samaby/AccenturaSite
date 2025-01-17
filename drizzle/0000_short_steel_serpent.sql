CREATE TABLE "applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_id" varchar(256) NOT NULL,
	"first_name" varchar(256) NOT NULL,
	"last_name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"resume_url" text,
	"cover_letter" text,
	"linkedin_url" text,
	"portfolio_url" text,
	"status" varchar(50) DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
