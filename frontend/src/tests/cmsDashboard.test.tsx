import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToStaticMarkup } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Dashboard from "@/features/cms/Dashboard";
import type { AdminSession, ContentEntry } from "@/features/cms/api";
import { homeContract, type FieldSchema } from "@/features/cms/schema";

const session: AdminSession = { csrfToken: "test-token", user: { username: "test-admin", name: "Test Admin", isAdmin: true, canManageMedia: true, canManageUsers: false } };
function example(schema: FieldSchema): unknown {
  if (schema.type === "object") return Object.fromEntries(Object.entries(schema.properties!).map(([key, child]) => [key, example(child)]));
  if (schema.type === "array") return [];
  if (schema.type === "boolean") return false;
  if (schema.type === "number") return 0;
  return schema.format === "url" ? "/example" : "CMS test content";
}
function render(path: string, currentSession: AdminSession = session) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  client.setQueryData(["cms-session"], currentSession);
  client.setQueryData(["cms", "collections"], { items: [{ key: "home", title: "Home Content", total: 15, live: 12, drafts: 3, inactive: 2 }] });
  const content = example(homeContract.hero) as Record<string, unknown>;
  const entry: ContentEntry = { key: "home.hero", page: "home", section: "hero", title: "Hero", sortOrder: 1, content, publishedContent: content, status: "draft", isActive: true, hasDraft: true, version: 7, createdAt: "2026-09-08T10:00:00Z", updatedAt: "2026-09-08T12:00:00Z", publishedAt: "2026-09-08T10:00:00Z", updatedByName: "test-admin" };
  client.setQueryData(["cms", "entry", "home.hero"], entry);
  client.setQueryData(["cms", "history", "home.hero", 7], { items: [{ version: 7, action: "draft", actorName: "test-admin", createdAt: entry.updatedAt }] });
  const router = createMemoryRouter([{ path: "/dashboard/*", element: <Dashboard /> }], { initialEntries: [path] });
  const html = renderToStaticMarkup(<QueryClientProvider client={client}><HelmetProvider><RouterProvider router={router} /></HelmetProvider></QueryClientProvider>);
  router.dispose(); client.clear();
  return html;
}

describe("CMS dashboard routes", () => {
  it("shows accessible credential fields before login", () => {
    const html = render("/dashboard", { csrfToken: "test-token", user: null });
    expect(html).toContain('for="cms-username"');
    expect(html).toContain('autoComplete="current-password"');
    expect(html).not.toContain("Content dashboard");
  });
  it("renders database collection totals and authorized administration links", () => {
    const html = render("/dashboard");
    expect(html).toContain("15 sections · 12 live · 3 with drafts");
    expect(html).toContain("Home Content");
    expect(html).toContain('href="/admin/media_library/mediaasset/"');
    expect(html).not.toContain('href="/admin/users/user/"');
    expect(html).toContain("Test Admin");
  });
  it("renders the editor, version history and draft/publication actions", () => {
    const html = render("/dashboard/content/home.hero");
    expect(html).toContain("Save draft");
    expect(html).toContain("Publish");
    expect(html).toContain("Main heading");
    expect(html).toContain("Version history");
    expect(html).toContain("Live · draft changes");
    expect(html).toContain('href="/dashboard/preview/home.hero"');
  });
  it("makes View mode read-only", () => {
    const html = render("/dashboard/content/home.hero?view=1");
    expect(html).toContain("Edit content");
    expect(html).toContain("disabled");
    expect(html).not.toContain(">Save draft<");
  });
});
