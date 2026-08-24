import type { MediaAsset } from "./media";
import type { SEO } from "./seo";

export type Person = {
  id: number;
  slug: string;
  name: string;
  jobTitle?: string;
  bio?: string;
  photo?: MediaAsset | null;
  linkedinUrl?: string;
  roles?: string[];
};

export type Event = {
  id: number;
  slug: string;
  title: string;
  status: "upcoming" | "ended" | "cancelled";
  startAt: string;
  endAt: string;
  timezone: string;
  location?: string;
  address?: string;
  isOnline: boolean;
  bookingUrl?: string;
  categories: { slug: string; name: string }[];
  summary?: string;
  description?: string;
  image?: MediaAsset | null;
  imageFeaturedUrl?: string;
  speakers?: { person: Person; role?: string }[];
  agenda?: { id: number; title: string; description?: string; startsAt: string; endsAt: string; speaker?: Person | null }[];
  seo?: SEO;
};
