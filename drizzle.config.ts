import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Next.js keeps secrets in .env.local; dotenv only reads .env by default.
config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required (set it in .env.local)");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
