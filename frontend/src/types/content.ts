import type { MediaAsset } from "./media";
import type { SEO } from "./seo";

export type PageSection = { id: number; type: string; sortOrder: number; data: Record<string, unknown> };
export type ContentPage = { id: number; slug: string; title: string; summary?: string; sections: PageSection[]; seo?: SEO; updatedAt: string };

export type Story = {
  id: number; slug: string; title: string; storyType: string; summary?: string; body?: string;
  person?: { slug: string; name: string } | null; programme?: { slug: string; title: string } | null;
  employer?: string; role?: string; quote?: string; image?: MediaAsset | null; isFeatured: boolean; seo?: SEO; publishedAt?: string;
};

export type Article = {
  id: number; slug: string; title: string; summary?: string; body?: string;
  author?: { slug: string; name: string } | null; categories: { slug: string; name: string }[];
  tags: { slug: string; name: string }[]; image?: MediaAsset | null; isFeatured: boolean; seo?: SEO; publishedAt?: string;
};
