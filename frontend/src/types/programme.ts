import type { MediaAsset } from "./media";
import type { SEO } from "./seo";

export type Programme = {
  id: number;
  slug: string;
  title: string;
  college: { slug: string; title: string };
  level: number;
  funding: { type: string; label: string };
  duration: { months?: number | null; label?: string };
  summary: string;
  description?: string;
  deliveryMode: string;
  delivery?: { mode: string; schedule?: string };
  image?: MediaAsset | null;
  isFeatured: boolean;
  modules?: { id: number; title: string; summary?: string; sortOrder: number }[];
  certifications?: { id: number; title: string; awardingBody?: string; url?: string }[];
  eligibility?: { id: number; text: string }[];
  cta?: { label: string; href: string };
  seo?: SEO;
};

export type College = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description?: string;
  image?: MediaAsset | null;
  seo?: SEO;
};
