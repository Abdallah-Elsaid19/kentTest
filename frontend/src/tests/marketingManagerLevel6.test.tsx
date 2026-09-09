import { resolvedFixture, cmsTestClient } from "./cmsFixtures";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToStaticMarkup } from "./cmsFixtures";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import MarketingManagerLevel6Page from "@/pages/MarketingManagerLevel6Page/page";
import { curriculumData as curriculumDataTemplate, enquiryData as enquiryDataTemplate, faqs as faqsTemplate, heroData as heroDataTemplate, pageNavigation as pageNavigationTemplate, programmeStats as programmeStatsTemplate } from "@/pages/MarketingManagerLevel6Page/data";
import { FigmaTestimonialsSection } from "@/pages/home/components/FigmaTestimonialsSection";
import ProgrammeInterestDialog from "@/components/programme/ProgrammeInterestDialog";
import { buildProgrammeInterestPayload } from "@/components/programme/programmeInterest";
import sourceInventory from "./fixtures/marketingManagerSource.json";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));
vi.mock("@/features/content/queries", () => ({ useEvents: () => ({ data: { items: [] }, isLoading: false, isError: false }) }));

function plainText(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/\s+/g, " ").trim();
}
const renderPage = () => renderToStaticMarkup(<QueryClientProvider client={cmsTestClient()}><MemoryRouter><MarketingManagerLevel6Page /></MemoryRouter></QueryClientProvider>);

describe("Marketing Manager Level 6 source fidelity", () => {
  it("includes every official programme content block except testimonials replaced with the home section", () => {
    const html = plainText(renderPage());
    const removedByRequest = new Set(["trust: !", "trust: Limited places", "hero kbc-l6-hero: Limited places"]);
    const missing = sourceInventory.filter((section) => section.section !== "learner-testimonials").flatMap((section) => section.blocks.filter((block) => !removedByRequest.has(`${section.section}: ${block}`) && !html.includes(block)).map((block) => `${section.section}: ${block}`));
    expect(missing).toEqual([]);
  });

  it("has one H1, unique IDs, valid section links and testimonials before FAQs", () => {
    const html = renderPage();
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of pageNavigation) expect(ids).toContain(item.href.slice(1));
    const sectionOrder = ["employers", "events", "recognition", "partners", "testimonials", "faq"];
    for (let index = 1; index < sectionOrder.length; index++) {
      expect(html.indexOf(`id="${sectionOrder[index]}"`)).toBeGreaterThan(html.indexOf(`id="${sectionOrder[index - 1]}"`));
    }
    expect(html.indexOf('id="testimonials"')).toBeLessThan(html.indexOf('id="faq"'));
    expect(html.indexOf('id="testimonials"')).toBeLessThan(html.indexOf('id="next-step"'));
    for (const match of html.matchAll(/aria-(?:labelledby|controls)="([^"]+)"/g)) {
      for (const id of match[1].split(" ")) expect(ids).toContain(id);
    }
  });

  it("preserves four complete curriculum modules and six FAQs, and reuses the unchanged home testimonials", () => {
    expect(curriculumData.modules.map((module) => module.title)).toEqual(["Strategy and Planning", "Customer Journey Optimisation", "Commercial Intelligence", "AI in Marketing"]);
    expect(curriculumData.modules.map((module) => module.items.length)).toEqual([4, 4, 4, 4]);
    expect(programmeStats).toHaveLength(3);
    expect(faqs).toHaveLength(6);
    const html = renderPage();
    const core = html.slice(0, html.indexOf('id="events"')) + html.slice(html.indexOf('id="faq"'));
    expect(core).not.toMatch(/Level 4|18 months|50-credit|CIM Certificate|Customer and Brand Leadership/);
    expect(html).toContain("Completion of this apprenticeship does not automatically confer chartered status.");
    expect(html).toContain(renderToStaticMarkup(<FigmaTestimonialsSection />));
    expect(html).toContain('href="mailto:Office@Kentbusinesscollege.org?subject=Marketing%20Manager%20Level%206%20Apprenticeship%20enquiry"');
    expect(html).not.toContain(">Download the catalogue<");
  });

  it("renders the complete two-step source enquiry using the existing contact dialog", () => {
    const html = plainText(renderToStaticMarkup(<QueryClientProvider client={cmsTestClient()}><MemoryRouter><ProgrammeInterestDialog data={enquiryData} cohort={heroData.cohorts[0].label} cohorts={heroData.cohorts} onClose={() => undefined} /></MemoryRouter></QueryClientProvider>));
    for (const step of enquiryData.enquiry.steps) {
      expect(html).toContain(step.title);
      for (const field of step.fields) expect(html).toContain(field.label);
    }
    expect(html).toContain(enquiryData.enquiry.consent);
    expect(html).toContain(enquiryData.enquiry.note);
  });

  it("preserves employment, eligibility, help topics and questions in the contact payload", () => {
    const form = new FormData();
    for (const [key, value] of Object.entries({ name: "Test Learner", email: "test@example.com", organisation: "Example", jobTitle: "Marketing Manager", cohort: "September 2026 intake", preferredContact: "Email", location: "Maidstone", workplaceEngland: "Unsure", employerSupport: "Currently discussing it", message: "Please review my employer support.", consent: "on" })) form.set(key, value);
    form.append("helpWith", "Checking eligibility");
    form.append("helpWith", "Apprenticeship funding");
    const result = buildProgrammeInterestPayload(form, enquiryData.programme, "/marketing-manager-level-6", "test-token", enquiryData.enquiry.steps.flatMap<{ name: string; label: string }>((step) => step.fields));
    expect(result.interest).toBe("Marketing Manager Level 6 Apprenticeship");
    expect(result.consent).toBe(true);
    expect(result.message).toContain("Main workplace location: Maidstone");
    expect(result.message).toContain("Is your main workplace in England?: Unsure");
    expect(result.message).toContain("Currently discussing it");
    expect(result.message).toContain("Checking eligibility, Apprenticeship funding");
    expect(result.message).toContain("Please review my employer support.");
    expect(result.phone).toBe("");
  });
});

const { curriculumData, enquiryData, faqs, heroData, pageNavigation, programmeStats } = resolvedFixture({ curriculumData: curriculumDataTemplate, enquiryData: enquiryDataTemplate, faqs: faqsTemplate, heroData: heroDataTemplate, pageNavigation: pageNavigationTemplate, programmeStats: programmeStatsTemplate });
