import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import ProjectControlsProfessionalLevel6Page from "@/pages/ProjectControlsProfessionalLevel6Page/page";
import { heroData, pageNavigation, pathwayData, faqs, fundingData, outputsData, coachData, workloadData } from "@/pages/ProjectControlsProfessionalLevel6Page/data";
import { HeroSection } from "@/pages/AssociateProjectManagerPage/component/HeroSection";
import { WorkloadSection } from "@/pages/AssociateProjectManagerPage/component/LearningSupportSections";
import { buildProgrammeInterestPayload } from "@/components/programme/programmeInterest";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));
vi.mock("@/features/content/queries", () => ({ useEvents: () => ({ data: { items: [] }, isLoading: false, isError: false }) }));

function renderPage() {
  return renderToStaticMarkup(<MemoryRouter><ProjectControlsProfessionalLevel6Page /></MemoryRouter>);
}

describe("Project Controls Professional Level 6", () => {
  it("renders the complete programme with a single H1 and valid in-page navigation", () => {
    const html = renderPage();
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html).toContain(heroData.hero.image);
    expect(html).toContain("Project Controls Professional");
    for (const item of pageNavigation) expect(html).toContain(`id="${item.href.slice(1)}"`);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
    expect(html).not.toMatch(/Associate Project Manager|Level 4|370 hours|12-month programme/);
  });

  it("retains all three complete pathways and their distinct qualification owners", () => {
    const html = renderPage();
    expect(pathwayData.routes.map((route) => route.name)).toEqual(["Operational Pathway", "Strategic Pathway", "Chartered Pathway"]);
    for (const route of pathwayData.routes) {
      expect(route.modules).toHaveLength(6);
      for (const module of route.modules) {
        expect(html).toContain(module.title);
        expect(html).toContain(module.body);
      }
    }
    expect(pathwayData.routes[0].modules[0].credits).toBe("2 credits");
    expect(pathwayData.routes[0].modules[0].duration).toBe("8 months");
    expect(pathwayData.routes[2].modules.every((module) => module.credits === "1 credit")).toBe(true);
  });

  it("preserves the source workload, funding, people, outputs and complete FAQ data", () => {
    expect(workloadData.stats.map((stat) => stat.value)).toEqual(["860 hours", "2 hours", "8 hours"]);
    expect(workloadData.hours.reduce((hours, item) => hours + Number.parseInt(item.hours), 0)).toBe(8);
    expect(fundingData.items.map((item) => item.amount)).toEqual(["£27,000", "£7,000"]);
    expect(outputsData.items).toHaveLength(12);
    expect(coachData.people).toHaveLength(4);
    expect(faqs).toHaveLength(12);
    expect(faqs.find((faq) => faq.question.includes("Chartered Project Professional status"))?.answer).toContain("does not automatically confer");
    const html = renderPage();
    for (const person of coachData.people) expect(html).toContain(person.name);
    for (const output of outputsData.items) expect(html).toContain(output);
  });

  it("keeps Level 4-specific content when using the extracted shared components", () => {
    const html = renderToStaticMarkup(<MemoryRouter><HeroSection /><WorkloadSection /></MemoryRouter>);
    expect(html).toContain("Associate Project Manager");
    expect(html).toContain("370 hours");
    expect(html).toContain("12 months");
    expect(html).not.toContain("860 hours");
    expect(html).not.toContain("27 months");
  });

  it("retains programme, cohort, job title and consent in the existing contact API payload", () => {
    const form = new FormData();
    for (const [key, value] of Object.entries({ name: " Test Learner ", email: "test@example.com", phone: "0123456789", organisation: "Example", jobTitle: "Planner", cohort: "April", consent: "on" })) form.set(key, value);
    const payload = buildProgrammeInterestPayload(form, "Project Controls Professional Level 6", "/project-controls-professional-level-6", "test-token");
    expect(payload.name).toBe("Test Learner");
    expect(payload.interest).toBe("Project Controls Professional Level 6");
    expect(payload.message).toContain("Preferred cohort: April");
    expect(payload.message).toContain("Job title: Planner");
    expect(payload.consent).toBe(true);
    expect(payload.captchaToken).toBe("test-token");
    form.delete("consent");
    expect(buildProgrammeInterestPayload(form, payload.interest, payload.sourcePage, "").consent).toBe(false);
  });
});
