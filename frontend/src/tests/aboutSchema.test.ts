import { describe, expect, it } from "vitest";

import { fallbackAboutPage } from "@/pages/AboutPage/fallback";
import { parseAboutSections } from "@/pages/AboutPage/schema";

describe("About page section contract", () => {
  it("keeps validated About sections and ignores unsupported content", () => {
    const result = parseAboutSections([
      {
        id: 1,
        type: "aboutHero",
        sortOrder: 10,
        data: {
          eyebrow: "Who we are",
          heading: "Knowledge that moves",
          highlight: "people forward.",
          body: "Approved body copy.",
          image: { src: "/assets/images/figma-home/hero-group.png", alt: "Professionals learning together" },
          glance: [{ id: "provider", label: "Provider", value: "UKPRN 10093689" }],
          stats: [{ id: "learners", value: "500+", label: "Students enrolled" }],
          primaryCta: { label: "Explore", href: "/programmes" },
          secondaryCta: { label: "Experts", href: "/our-experts" },
        },
      },
      { id: 2, type: "unapprovedSection", sortOrder: 20, data: {} },
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].type).toBe("aboutHero");
    expect(result[0].data.primaryCta).toEqual({ label: "Explore", href: "/programmes" });
  });

  it("drops malformed CMS data instead of rendering it", () => {
    const result = parseAboutSections([{ id: 1, type: "aboutHero", sortOrder: 10, data: { heading: "Missing fields" } }]);
    expect(result).toEqual([]);
  });

  it("keeps the approved About page available when the API is offline", () => {
    const result = parseAboutSections(fallbackAboutPage.sections);

    expect(result).toHaveLength(14);
    expect(result[0].type).toBe("aboutHero");
    expect(result.at(-1)?.type).toBe("aboutFinalCta");
  });
});
