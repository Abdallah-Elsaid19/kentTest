import { renderToStaticMarkup } from "react-dom/server";
import { QueryClient } from "@tanstack/react-query";
import { publishedSectionQueryOptions } from "@/features/cms/queries";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { HomeSections } from "@/pages/home/page";
import { homeContract, homeValidators, parseHomeDocument, safeContentUrl, type FieldSchema } from "@/features/cms/schema";
import type { HomeContent } from "@/features/cms/homeTypes";
import { FigmaUpcomingEventsSection } from "@/pages/home/components/FigmaUpcomingEventsSection";

vi.mock("@/features/content/queries", () => ({ useEvents: () => ({ data: { items: [] }, isPending: false, isError: false }) }));
function fixture(schema: FieldSchema): unknown {
  if (schema.type === "object") return Object.fromEntries(Object.entries(schema.properties!).filter(([key]) => schema.required?.includes(key)).map(([key, child]) => [key, fixture(child)]));
  if (schema.type === "array") return Array.from({ length: schema.minItems! }, () => fixture(schema.items!));
  if (schema.type === "boolean") return true;
  if (schema.type === "number") return schema.minimum;
  return schema.enum?.[0] ?? (schema.format === "url" ? "/test-asset" : "API supplied content");
}
describe("database-backed Home content", () => {
  it("fetches only a shared section, reuses concurrent requests and refreshes after publishing", async () => {
    const content = fixture(homeContract.recognition);
    const request = vi.spyOn(globalThis, "fetch").mockImplementation(async () => new Response(JSON.stringify({ page: "home", sections: [{ section: "recognition", content }] })));
    const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    try {
      const options = publishedSectionQueryOptions("recognition");
      const [first, second] = await Promise.all([client.fetchQuery(options), client.fetchQuery(options)]);
      expect(first).toEqual({ recognition: content });
      expect(second).toEqual(first);
      expect(request).toHaveBeenCalledTimes(1);
      expect(request.mock.calls[0][0]).toMatch(/\/content\/home\/\?section=recognition$/);
      await client.fetchQuery(options);
      expect(request).toHaveBeenCalledTimes(1);
      await client.invalidateQueries({ queryKey: ["cms-public"] });
      await client.fetchQuery(options);
      expect(request).toHaveBeenCalledTimes(2);
    } finally {
      client.clear();
      request.mockRestore();
    }
  });
  it("accepts hidden shared sections without metadata but rejects unrelated or malformed content", () => {
    expect(parseHomeDocument({ page: "home", sections: [] }, "recognition")).toEqual({});
    expect(() => parseHomeDocument({ page: "home", sections: [{ section: "hero", content: fixture(homeContract.hero) }] }, "recognition")).toThrow();
    expect(() => parseHomeDocument({ page: "home", sections: [{ section: "recognition", content: {} }] }, "recognition")).toThrow();
  });
  it("renders API content and omits inactive sections without falling back to local copy", () => {
    const hero = fixture(homeContract.hero) as HomeContent["hero"];
    hero.copy.heading = "A heading supplied by Django";
    hero.copy.text = "A published highlight";
    const document = parseHomeDocument({ page: "home", sections: [{ section: "metadata", content: fixture(homeContract.metadata) }, { section: "hero", content: hero }] });
    const html = renderToStaticMarkup(<MemoryRouter><HomeSections content={document} preview /></MemoryRouter>);
    expect(html).toContain("A heading supplied by Django");
    expect(html).toContain("A published highlight");
    expect(html).not.toContain("Build skills that move");
    expect(html).not.toContain("figma-portfolio");
    expect(html).not.toContain("Learner testimonials");
  });
  it("rejects malformed API payloads, missing metadata and unknown sections", () => {
    expect(() => parseHomeDocument({ page: "home", sections: [] })).toThrow();
    expect(() => parseHomeDocument({ page: "home", sections: [{ section: "hero", content: { copy: "invalid" } }] })).toThrow();
    expect(() => parseHomeDocument({ page: "home", sections: [{ section: "arbitraryHtml", content: {} }] })).toThrow();
  });
  it("validates nested card counts and unsafe destination URLs", () => {
    const hero = fixture(homeContract.hero) as HomeContent["hero"];
    hero.copy.to = "javascript:alert(1)";
    expect(homeValidators.hero.safeParse(hero).success).toBe(false);
    expect(homeValidators.support.safeParse({ supportItems: "invalid" }).success).toBe(false);
    for (const url of ["javascript:alert(1)", "//evil.example", "/\\evil.example", "https://user:pass@example.com", " https://example.com", "data:text/html,test"]) expect(safeContentUrl(url)).toBe(false);
    for (const url of ["/programmes", "/funding#details", "#programmes", "https://example.com/image.png"]) expect(safeContentUrl(url)).toBe(true);
  });
  it("does not fabricate Home events when the database has no upcoming events", () => {
    const html = renderToStaticMarkup(<MemoryRouter><FigmaUpcomingEventsSection databaseOnly /></MemoryRouter>);
    expect(html).not.toContain("Fully Funded CIM Level 4");
    expect(html).not.toContain("Reserve your place");
  });
});
