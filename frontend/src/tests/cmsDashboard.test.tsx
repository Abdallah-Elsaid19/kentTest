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
  return schema.format === "url" ? schema.mediaKind === "video" ? "/example.webm" : schema.mediaKind === "image" ? "/example.png" : "/example" : "CMS test content";
}
function render(path: string, currentSession: AdminSession = session) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  client.setQueryData(["cms-session"], currentSession);
  client.setQueryData(["cms", "collections"], { items: [{ key: "home", title: "Home Content", total: 15, live: 12, drafts: 3, inactive: 2, route: "/", group: "Home" }, { key: "faq", title: "FAQ", total: 2, live: 2, drafts: 1, inactive: 0, route: "/faq", group: "Information", status: "draft", publishState: "Live with draft changes", sectionNames: ["Questions"], updatedAt: "2026-09-09T10:00:00Z", updatedByName: "test-admin" }] });
  const content = example(homeContract.hero) as Record<string, unknown>;
  const entry: ContentEntry = { key: "home.hero", page: "home", section: "hero", title: "Hero", sortOrder: 1, content, publishedContent: content, status: "draft", isActive: true, hasDraft: true, version: 7, createdAt: "2026-09-08T10:00:00Z", updatedAt: "2026-09-08T12:00:00Z", publishedAt: "2026-09-08T10:00:00Z", updatedByName: "test-admin" };
  client.setQueryData(["cms", "entry", "home.hero"], entry);
  client.setQueryData(["cms", "history", "home.hero", 7], { items: [{ version: 7, action: "draft", actorName: "test-admin", createdAt: entry.updatedAt }] });
  const faqEntry: ContentEntry = { ...entry, key: "faq.questions", page: "faq", section: "questions", title: "Questions", content: { question: "Saved FAQ question" }, schema: { type: "object", properties: { question: { type: "string", title: "Question text" } }, required: ["question"] } };
  client.setQueryData(["cms", "entry", "faq.questions"], faqEntry);
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
    expect(html).toContain("Upload image");
    expect(html).toContain("Upload video");
    expect(html).toContain('class="cms-media-preview cms-media-preview--image"');
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
  it("shows page-level metadata and grouped navigation in All Content", () => {
    const html = render("/dashboard/content");
    expect(html).toContain("2 managed pages");
    expect(html).toContain('class="cms-nav-group"');
    expect(html).toContain("Information");
    expect(html).toContain("Live with draft changes");
    expect(html).toContain('href="/dashboard/content?collection=faq"');
    expect(html).toContain('href="/dashboard/preview/faq"');
    expect(html).toContain("Filter by group");
    expect(html).not.toContain("Employer Agreement");
  });
  it("renders non-Home field schemas through the existing editor", () => {
    const html = render("/dashboard/content/faq.questions");
    expect(html).toContain("Question text");
    expect(html).toContain("Saved FAQ question");
    expect(html).toContain("Save draft");
    expect(html).toContain('href="/dashboard/content?collection=faq"');
    expect(html).not.toContain("Home Content / Edit section");
  });
  it("previews the real public route through the protected draft request", () => {
    const html = render("/dashboard/preview/faq.questions");
    expect(html).toContain('src="/faq?cmsPreview=faq.questions"');
    expect(html).toContain("Saved draft preview");
  });

});
