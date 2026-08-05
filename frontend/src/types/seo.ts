import type { MediaAsset } from "./media";

export type SEO = {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  openGraph?: { title?: string; description?: string; image?: MediaAsset | null };
  twitterCard?: string;
  schema?: Record<string, unknown>[];
};
