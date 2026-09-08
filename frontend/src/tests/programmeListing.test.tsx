import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { currentIntake, programmes } from "@/data/programmes";
import ProgrammeListingPage from "@/pages/ProgrammeListingPage/page";
import { clearProgrammeFilters, filterProgrammes, updateProgrammeFilters } from "@/pages/ProgrammeListingPage/filters";
import routerSource from "@/router/router.tsx?raw";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));
const ids = (query = "") => filterProgrammes(programmes, new URLSearchParams(query)).map((programme) => programme.id);
const render = (query = "") => renderToStaticMarkup(<MemoryRouter initialEntries={[`/programmes${query}`]}><ProgrammeListingPage /></MemoryRouter>);

describe("verified programme discovery", () => {
  it("includes each verified offering once and excludes embedded pathways and modules", () => {
    expect(ids()).toEqual(["associate-project-manager", "project-controls-professional", "marketing-executive", "marketing-manager", "ai-project-controls"]);
    for (const key of ["id", "slug", "href", "sourceUrl"] as const) expect(new Set(programmes.map((programme) => programme[key])).size).toBe(programmes.length);
  });

  it("combines College, level, type and case-insensitive multi-word search", () => {
    expect(ids("college=marketing")).toEqual(["marketing-executive", "marketing-manager"]);
    expect(ids("college=leadership")).toEqual([]);
    expect(ids("college=project-controls")).toEqual(["associate-project-manager", "project-controls-professional", "ai-project-controls"]);
    expect(ids("level=4")).toEqual(["associate-project-manager", "marketing-executive"]);
    expect(ids("level=6")).toEqual(["project-controls-professional", "marketing-manager"]);
    expect(ids("level=7")).toEqual([]);
    expect(ids("search=%20cIm%20")).toEqual(["marketing-executive", "marketing-manager"]);
    expect(ids("search=ChPP")).toEqual(["project-controls-professional"]);
    expect(ids("search=OTHM")).toEqual([]);
    expect(ids("college=marketing&level=6&search=CIM%20digital&type=apprenticeship")).toEqual(["marketing-manager"]);
    expect(ids("type=certificate")).toEqual(["ai-project-controls"]);
    expect(ids("q=dashboards")).toEqual(["ai-project-controls"]);
    expect(ids("search=astronomy")).toEqual([]);
    expect(ids("college=leadership&level=4")).toEqual([]);
    expect(ids("level=invalid")).toEqual([]);
  });

  it("updates and clears URL filters without losing unrelated parameters", () => {
    const original = new URLSearchParams("college=marketing&level=4&q=old&page=2&utm_source=email");
    const next = updateProgrammeFilters(original, "search", "CIM");
    expect(next.get("college")).toBe("marketing");
    expect(next.has("q")).toBe(false);
    expect(next.has("page")).toBe(false);
    expect(original.get("q")).toBe("old");
    expect(ids(clearProgrammeFilters(next).toString())).toHaveLength(5);
    expect(clearProgrammeFilters(next).toString()).toBe("utm_source=email");
    expect(updateProgrammeFilters(next, "level", "").has("level")).toBe(false);
  });

  it("never shows expired intakes or guesses absent facts", () => {
    expect(currentIntake(programmes[0], "2026-09-08")).toBe("September");
    expect(currentIntake(programmes[0], "2026-10-01")).toBeUndefined();
    expect(currentIntake({ ...programmes[4], nextIntake: undefined }, "2026-09-08")).toBeUndefined();
    expect(programmes[0].duration).toBe("12 months");
    expect(programmes[1].duration).toBe("27 months");
    expect(programmes[2].duration).toBe("12 months");
    expect(programmes[3].duration).toBe("16 months");
    expect(programmes[4].duration).toBe("4 months");
    expect(programmes[4].fundingLabel).toBeUndefined();
    expect(programmes[4].level).toBeUndefined();
  });

  it("maps implemented local routes", () => {
    for (const programme of programmes) {
      expect(programme.imageAlt).toBeTruthy();
      if (programme.href.startsWith("/")) expect(routerSource).toContain(`path: "${programme.href.slice(1)}"`);
    }
  });

  it("renders a single H1, semantic cards, labelled filters and crawlable links", () => {
    const html = render();
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html.match(/<article\b/g)).toHaveLength(5);
    expect(html).not.toContain("MBA Diploma Level 7");
    expect(html).not.toContain('<option value="7">');
    expect(html).not.toContain('<option value="leadership">');
    expect(html).not.toContain('<option value="qualification">');
    expect(html).toContain('type="search"');
    expect(html).toContain('for="programme-search"');
    expect(html).toContain('aria-live="polite"');
    expect(html).not.toContain('href="#"');
    expect(html).not.toMatch(/<li[^>]*>Apprenticeship<\/li>/);
    for (const programme of programmes) expect(html).toContain(`href="${programme.href}"`);
    expect(render("?college=marketing&level=6").match(/<article\b/g)).toHaveLength(1);
    const empty = render("?search=astronomy");
    expect(empty).toContain("No programmes match your current filters.");
    expect(empty).toContain("Clear filters");
    expect(empty).not.toContain("<article");
  });
});
