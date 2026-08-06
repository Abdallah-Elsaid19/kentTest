import { z } from "zod";

const text = z.string().trim().min(1);
const safeHref = text.refine((value) => (/^\/(?!\/)/.test(value) || /^https:\/\//.test(value)), "Unsafe link target");
const cta = z.object({ label: text, href: safeHref });
const details = z.object({ id: text, label: text, value: text });
const stat = z.object({ id: text, value: text, label: text });
const numberedCard = z.object({ id: text, number: text, title: text, body: text });
const titledCard = z.object({ id: text, title: text, body: text });

const schemas = {
  aboutHero: z.object({ eyebrow: text, heading: text, highlight: text, body: text, image: z.object({ src: safeHref, alt: text }), glance: z.array(details).min(1), stats: z.array(stat).min(1), primaryCta: cta, secondaryCta: cta }),
  aboutOverview: z.object({ eyebrow: text, heading: text, description: text, items: z.array(numberedCard).min(1) }),
  aboutPrinciples: z.object({ eyebrow: text, heading: text, items: z.array(numberedCard).min(1) }),
  aboutDomains: z.object({ eyebrow: text, heading: text, description: text, items: z.array(z.object({ id: text, number: text, initials: text, title: text, body: text, offerings: z.array(text).min(1), linkLabel: text, href: safeHref, tone: text })).min(1) }),
  aboutLearning: z.object({ eyebrow: text, heading: text, description: text, steps: z.array(numberedCard).min(1) }),
  aboutSupport: z.object({ eyebrow: text, heading: text, description: text, items: z.array(titledCard.extend({ features: z.array(text).min(1) })).min(1) }),
  aboutPurpose: z.object({ eyebrow: text, heading: text, vision: z.object({ label: text, title: text, body: text }), mission: z.object({ label: text, title: text, body: text }) }),
  aboutValues: z.object({ eyebrow: text, heading: text, items: z.array(numberedCard).min(1) }),
  aboutTimeline: z.object({ eyebrow: text, heading: text, description: text, items: z.array(z.object({ id: text, year: text, title: text, body: text })).min(1) }),
  aboutIdentity: z.object({ eyebrow: text, heading: text, description: text, items: z.array(z.object({ id: text, symbol: text, title: text, body: text })).min(1) }),
  aboutImpact: z.object({ eyebrow: text, heading: text, description: text, stats: z.array(stat).min(1) }),
  aboutExperts: z.object({ eyebrow: text, heading: text, description: text, cta }),
  aboutJourneys: z.object({ eyebrow: text, heading: text, description: text, items: z.array(z.object({ id: text, audience: text, title: text, body: text, cta })).min(1) }),
  aboutPartners: z.object({ eyebrow: text, heading: text, description: text, items: z.array(z.object({ id: text, name: text, image: safeHref.optional() })).min(1), cta }),
  aboutFinalCta: z.object({ eyebrow: text, heading: text, body: text, primaryCta: cta, secondaryCta: cta }),
  aboutContact: z.object({ eyebrow: text, heading: text, description: text, cta }),
} as const;

export type AboutSectionType = keyof typeof schemas;
export type AboutSection = { id: number; type: AboutSectionType; sortOrder: number; data: Record<string, unknown> };

export function parseAboutSections(sections: Array<{ id: number; type: string; sortOrder: number; data: Record<string, unknown> }>) {
  return sections.flatMap((section): AboutSection[] => {
    const schema = schemas[section.type as AboutSectionType];
    if (!schema) return [];
    const parsed = schema.safeParse(section.data);
    return parsed.success ? [{ ...section, type: section.type as AboutSectionType, data: parsed.data }] : [];
  });
}

export const asText = (value: unknown) => typeof value === "string" ? value : "";
export const asObjects = (value: unknown) => Array.isArray(value) ? value.filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object") : [];
export const asObject = (value: unknown) => value && typeof value === "object" ? value as Record<string, unknown> : {};
