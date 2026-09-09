import { resolvedFixture } from "./cmsFixtures";
import { isValidElement } from "react";
import { matchRoutes, type RouteObject } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { newsArticles as newsArticleTemplates } from "@/pages/BlogPage/data";

vi.hoisted(() => { vi.stubGlobal("__BASE_PATH__", "/"); });
vi.mock("@/components/layout/MainLayout", () => ({ MainLayout: () => null }));
vi.mock("react-router-dom", async importOriginal => ({
  ...await importOriginal<typeof import("react-router-dom")>(),
  createBrowserRouter: (routes: RouteObject[]) => ({ routes }),
}));

import { router } from "@/router/router";

describe("News URL integration", () => {
  it("resolves the requested listing and every source article", () => {
    for (const path of ["/blogs-and-news", ...newsArticles.map(article => article.href)]) {
      const match = matchRoutes(router.routes, path)?.at(-1);
      expect(match?.route.path).not.toBe("*");
      expect(isValidElement(match?.route.element)).toBe(true);
    }
  });

  it.each(["/blog", "/news", "/blogsandnews"])("redirects %s to the requested listing", async path => {
    const route = matchRoutes(router.routes, path)!.at(-1)!.route;
    if (typeof route.loader !== "function") throw new Error("Missing redirect loader");
    const url = new URL(path, "https://example.test");
    const response = await route.loader({ request: new Request(url), url, pattern: path, params: {}, context: {} }) as Response;
    expect(response.headers.get("Location")).toBe("/blogs-and-news");
  });

  it.each(["/news", "/blogsandnews"])("redirects %s detail paths and preserves existing API article routes", async prefix => {
    const path = `${prefix}/${newsArticles[0].id}`;
    const match = matchRoutes(router.routes, path)!.at(-1)!;
    if (typeof match.route.loader !== "function") throw new Error("Missing redirect loader");
    const url = new URL(path, "https://example.test");
    const response = await match.route.loader({ request: new Request(url), url, pattern: `${prefix}/:articleSlug`, params: match.params, context: {} }) as Response;
    expect(response.headers.get("Location")).toBe(newsArticles[0].href);
    expect(matchRoutes(router.routes, "/blog/existing-article")!.at(-1)!.route.path).toBe("blog/:articleSlug");
  });
});

const newsArticles = resolvedFixture(newsArticleTemplates);
