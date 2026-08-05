import type { MediaAsset } from "./media";

export type SiteSettings = {
  organisationName: string;
  tagline?: string;
  logo?: MediaAsset | null;
  alternateLogo?: MediaAsset | null;
  contact?: { email?: string; phone?: string; address?: string };
  socialLinks?: Record<string, string>;
  externalLinks?: { microsoftBookings?: string; lms?: string; aptem?: string; employerDashboard?: string };
  privacyPolicyUrl?: string;
  termsUrl?: string;
  cookiePolicyUrl?: string;
  defaultSeoTitle?: string;
  defaultSeoDescription?: string;
  defaultOpenGraphImage?: MediaAsset | null;
};

export type NavigationItem = {
  id: number;
  label: string;
  path: string;
  external: boolean;
  accessibleLabel?: string;
  children: NavigationItem[];
};

export type Navigation = { header: NavigationItem[]; footer: NavigationItem[]; utility: NavigationItem[] };
