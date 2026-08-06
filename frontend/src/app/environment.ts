import { z } from "zod";

const environmentSchema = z.object({
  VITE_API_BASE_URL: z.string().url().default("http://localhost:8001/api/v1"),
  VITE_SITE_URL: z.string().url().default("http://localhost:5173"),
  VITE_TURNSTILE_SITE_KEY: z.string().optional().default(""),
  VITE_COMMERCE_ENABLED: z.enum(["true", "false"]).default("false"),
});

export const environment = environmentSchema.parse(import.meta.env);
