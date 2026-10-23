import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

// Mirrors JobType / AccentTone in src/types/index.ts
export const jobTypeEnum = pgEnum("job_type", [
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
]);

export const accentToneEnum = pgEnum("accent_tone", [
  "violet",
  "teal",
  "coral",
  "sunshine",
]);

// Mirrors the Job interface and src/data/sample-jobs.ts
export const jobs = pgTable("jobs", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  type: jobTypeEnum("type").notNull(),
  category: text("category").notNull(),
  salaryRange: text("salary_range").notNull(),
  postedLabel: text("posted_label").notNull(),
  description: text("description").notNull(),
  highlights: text("highlights").array().notNull().default([]),
  accent: accentToneEnum("accent").notNull().default("violet"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
