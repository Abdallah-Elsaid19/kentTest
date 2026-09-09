import { resolvedFixture, cmsTestClient } from "./cmsFixtures";
import { renderToStaticMarkup } from "./cmsFixtures";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import MarketingExecutiveLevel4Page from "@/pages/MarketingExecutiveLevel4Page/page";
import { curriculumJourney as curriculumJourneyTemplate, faqs as faqsTemplate, heroData as heroDataTemplate, pageNavigation as pageNavigationTemplate } from "@/pages/MarketingExecutiveLevel4Page/data";
import { testimonials } from "@/pages/home/components/data";
import { marketingSourceBlocks } from "./fixtures/marketingExecutiveSource";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));
vi.mock("@/features/content/queries", () => ({ useEvents: () => ({ data: { items: [] }, isLoading: false, isError: false }) }));

function renderPage() {
  return renderToStaticMarkup(<QueryClientProvider client={cmsTestClient()}><MemoryRouter><MarketingExecutiveLevel4Page /></MemoryRouter></QueryClientProvider>);
}

function normalise(text: string) {
  return text.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
}

describe("Marketing Executive Level 4 source fidelity", () => {
  it("renders every independently extracted official content block in full", () => {
    const text = normalise(renderPage());
    for (const block of marketingSourceBlocks) expect(text, block).toContain(normalise(block));
  });

  it("has one H1, unique IDs, and working section and FAQ targets", () => {
    const html = renderPage();
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of pageNavigation) expect(ids).toContain(item.href.slice(1));
    for (const match of html.matchAll(/(?:aria-controls|aria-labelledby)="([^"]+)"/g)) expect(ids).toContain(match[1]);
    const sectionPositions = ["employers", "events", "recognition", "partners", "testimonials", "faq"].map((id) => html.indexOf(`id="${id}"`));
    expect(sectionPositions).toEqual([...sectionPositions].sort((a, b) => a - b));
  });

  it("preserves the curriculum and FAQs and uses the home testimonials before the FAQ", () => {
    expect(curriculumJourney.modules.map((item) => item.eyebrow)).toEqual(["Months 2-5", "Months 6-9", "Later learning stage"]);
    expect(curriculumJourney.modules.every((item) => item.items.length === 5)).toBe(true);
    expect(curriculumJourney.milestones).toHaveLength(4);
    expect(faqs).toHaveLength(6);
    expect(heroData.hero.catalogue).toMatch(/^https:\/\/kentbusinesscollege.com\/wp-content\/.+\.pdf$/);
    const html = renderPage();
    expect(html).toContain(heroData.hero.catalogue);
    expect(html.indexOf('id="testimonials"')).toBeLessThan(html.indexOf('id="faq"'));
    expect(html).toContain('aria-label="Previous review"');
    expect(html).toContain('aria-label="Next review"');
    expect(normalise(html)).toContain(testimonials[0].quote);
    expect(html.match(/aria-label="Show /g)).toHaveLength(testimonials.length);
  });

  it("keeps programme facts separate from the explicitly requested shared sections", () => {
    const rendered = renderPage().replace(/<div id="testimonials"[\s\S]*?<\/section><\/div>/, "");
    // The user explicitly requested the Project Management events, recognition and partners.
    const html = rendered.slice(0, rendered.indexOf('id="events"')) + rendered.slice(rendered.indexOf('<section id="faq"'));
    expect(html).not.toMatch(/PMP|PMI|APM|Associate Project Manager|370 hours|12.month programme|October 2026|95%|£350/);
    expect(normalise(html)).toContain("It does not itself confer Chartered Marketer status.");
    expect(html).toContain("September 2026 intake");
  });
});

const { curriculumJourney, faqs, heroData, pageNavigation } = resolvedFixture({ curriculumJourney: curriculumJourneyTemplate, faqs: faqsTemplate, heroData: heroDataTemplate, pageNavigation: pageNavigationTemplate });
