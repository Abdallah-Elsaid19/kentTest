import { z } from "zod";

const apiBaseUrlSchema = z.union([
  z.string().url(),
  z.string().regex(/^\/(?!\/)/, "API base URL must be an absolute URL or a root-relative path."),
]);

const environmentSchema = z.object({
  VITE_API_BASE_URL: apiBaseUrlSchema.default("/api/v1"),
  VITE_SITE_URL: z.string().url().default("https://localhost:5173"),
  VITE_TURNSTILE_SITE_KEY: z.string().optional().default(""),
  VITE_COMMERCE_ENABLED: z.enum(["true", "false"]).default("false"),
});

export const environment = environmentSchema.parse(import.meta.env);
