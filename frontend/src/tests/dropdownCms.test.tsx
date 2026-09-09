vi.mock("@/pages/AboutPage/animations/initHero3d", () => ({ initHero3d: () => undefined }));
vi.mock("@/pages/AboutPage/animations/initFluidMask", () => ({ initFluidMask: () => undefined }));
vi.mock("@/pages/AboutPage/animations/initMain", () => ({ initMain: () => undefined }));
import { renderToReadableStream } from "react-dom/server";
﻿import { isValidElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { createMemoryRouter, RouterProvider, type RouteObject } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { primaryNavigation } from "@/data/navigation";
import { pageRegistry } from "@/features/cms/pageRegistry";
import { contentBindings } from "@/features/cms/publicContent";
import { cmsDocuments, cmsTestClient } from "./cmsFixtures";

vi.mock("@/components/layout/Header", () => ({ Header: () => null }));
vi.mock("@/components/layout/Footer", () => ({ Footer: () => null }));
vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));
vi.hoisted(() => { vi.stubGlobal("__BASE_PATH__", "/"); });
vi.mock("react-router-dom", async original => ({ ...await original<typeof import("react-router-dom")>(), createBrowserRouter: (routes: RouteObject[]) => ({ routes }) }));
import { router } from "@/router/router";

const excludedLabels = new Set(["Careers", "Employer Agreement", "Book Info Session"]);
describe("dropdown CMS coverage", () => {
  it("covers every current eligible dropdown route once and excludes explicit exclusions", () => {
    const eligible = new Set(primaryNavigation.flatMap(group => group.children || []).filter(item => !item.external && !excludedLabels.has(item.label)).map(item => item.href.split(/[?#]/)[0]));
    expect(new Set(Object.values(pageRegistry).map(page => page.route))).toEqual(eligible);
    expect(Object.keys(pageRegistry)).toHaveLength(23);
    for (const route of ["/employer-agreement", "/book-session", "/careers", "/college-of-leadership", "/explore-jobs"]) expect(Object.values(pageRegistry).some(page => page.route === route)).toBe(false);
  });
  it.each(Object.entries(pageRegistry))("renders %s using published database content without unresolved bindings", async (key, page) => {
    const client = cmsTestClient();
    const memory = createMemoryRouter(router.routes, { initialEntries: [page.route] });
    const stream = await renderToReadableStream(<QueryClientProvider client={client}><HelmetProvider><RouterProvider router={memory} /></HelmetProvider></QueryClientProvider>);
    await stream.allReady;
    const html = await new Response(stream).text();
    expect(html).not.toContain("{{cms:");
    expect(html).not.toContain("{{cms-missing:");
    expect(html).not.toContain("Loading page content");
    expect(html).not.toContain("temporarily unavailable");
    expect(html.length).toBeGreaterThan(2000);
    expect(cmsDocuments[key].sections.length).toBeGreaterThan(0);
    memory.dispose(); client.clear();
  });
  it("uses current published copy, preserves templates, and removes inactive visual sections", () => {
    const document = { page: "faq", sections: [{ key: "faq.hero", section: "hero", content: { title: "Published FAQ heading" } }] };
    const binding = contentBindings({ faq: document });
    const template = { title: "{{cms:faq.hero.title}}" };
    expect(binding.resolve(template).title).toBe("Published FAQ heading");
    expect(template.title).toBe("{{cms:faq.hero.title}}");
    const rendered = binding.render(<section><h1>{binding.text("faq.hero.title")}</h1></section>);
    expect(isValidElement(rendered)).toBe(true);
    const inactive = contentBindings({ faq: { page: "faq", sections: [] } });
    expect(inactive.render(<section><h1>{inactive.text("faq.hero.title")}</h1></section>)).toBeNull();
  });
});
