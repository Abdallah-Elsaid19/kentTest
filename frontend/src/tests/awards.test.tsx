import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import AwardsPage from "@/pages/AwardsPage/page";
import { HeroSection as FundingHero } from "@/pages/FundingEligibilityPage/components/HeroSection";
import source from "./fixtures/awards-source.json";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));

const repairPunctuation = (text: string) => text.replaceAll("KBC\uFFFDs", "KBC’s").replaceAll(" \uFFFD ", " — ");
const plainText = (markup: string) => markup.replace(/<[^>]+>/g, " ").replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replace(/\s+/g, " ");

describe("Awards reference fidelity", () => {
  it("renders every source block, recognition, scope note and action without substitute copy", () => {
    const markup = renderToStaticMarkup(<MemoryRouter><AwardsPage /></MemoryRouter>);
    const text = plainText(markup);
    const expectCopy = (copy: string) => expect(text).toContain(repairPunctuation(copy));

    [...source.copy, ...source.eyebrows, ...source.actions, source.heroTitle].forEach(expectCopy);
    source.groups.forEach(({ title, description }) => [title, description].forEach(expectCopy));
    source.recognitions.forEach(({ categoryLabel, title, awardingBody, year, description }) => {
      [categoryLabel, title, awardingBody, year, description].forEach(expectCopy);
    });
    source.benefits.forEach(({ title, copy }) => [title, copy].forEach(expectCopy));
    source.filters.forEach(({ label }) => expectCopy(label));

    expect(markup.match(/<h1\b/g)).toHaveLength(1);
    expect(markup.match(/<h4\b/g)).toHaveLength(8);
    expect(markup.match(/<article\b/g)).toHaveLength(11);
    expect(markup.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(markup.match(/aria-pressed="false"/g)).toHaveLength(4);
    expect(markup).toContain('href="/#programmes"');
    expect(markup).toContain('href="/employers"');
    expect(markup).toContain('href="/contact"');
    expect(markup).toContain('src="/assets/images/awards/recognition-hero.jpg"');
    expect(text).not.toContain("\uFFFD");
    expect(text).not.toContain("Funding route navigator");
  });

  it("preserves Funding hero content and anchor when sharing its surface", () => {
    const markup = renderToStaticMarkup(<MemoryRouter><FundingHero /></MemoryRouter>);
    const text = plainText(markup);
    expect(markup).toContain('id="funding-overview"');
    expect(markup).toContain('aria-labelledby="funding-title"');
    expect(markup.match(/<h1\b/g)).toHaveLength(1);
    expect(text).toContain("Find the right funding route for your professional development");
    expect(text).toContain("Funding route navigator");
    expect(markup).toContain('href="#eligibility-checker"');
    expect(markup).toContain('src="/assets/images/professional-development-employers.png"');
  });
});
