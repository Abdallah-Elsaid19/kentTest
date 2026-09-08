import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { apiGet } from "@/services/api/apiClient";
import { parseHomeDocument } from "@/features/cms/schema";
import { HomeSections } from "@/pages/home/page";

// Explicit opt-in only. The normal suite does not contact or modify Neon.
const expected = import.meta.env.VITE_CMS_ACCEPTANCE_EXPECTED;
it.skipIf(!expected)("renders the published Neon response through the real React API client", async () => {
  const document = parseHomeDocument(await apiGet("/content/home/"));
  expect(document.hero?.copy.heading).toBe(expected);
  const html = renderToStaticMarkup(<QueryClientProvider client={new QueryClient()}><MemoryRouter><HomeSections content={document} preview /></MemoryRouter></QueryClientProvider>);
  expect(html).toContain(expected);
  expect(html).toContain("recognition-standards-title");
  expect(html).toContain("kbc-experience-title");
  expect(html).toContain("home-hero-heading");
}, 30_000);
