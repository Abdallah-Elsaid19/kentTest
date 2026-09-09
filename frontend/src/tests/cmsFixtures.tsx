import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToStaticMarkup as render } from "react-dom/server";
import type { ReactNode } from "react";
import snapshot from "../../../backend/apps/cms/migrations/0004_import_dropdown_pages.py?raw";
import { contentBindings, type PageDocument } from "@/features/cms/publicContent";

const entries = JSON.parse(snapshot.replace(/\r\n/g, "\n").split("ENTRIES = json.loads(r'''\n")[1].split("\n''')")[0]) as { page: string; key: string; section: string; content: Record<string, unknown> }[];
export const cmsDocuments: Record<string, PageDocument> = {};
for (const entry of entries) {
  cmsDocuments[entry.page] ??= { page: entry.page, sections: [] };
  cmsDocuments[entry.page].sections.push(entry);
}
export const resolvedFixture = contentBindings(cmsDocuments).resolve;
export function cmsTestClient() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false, staleTime: Infinity } } });
  for (const [key, document] of Object.entries(cmsDocuments)) client.setQueryData(["cms-public", "page", key], document);
  return client;
}
export function renderToStaticMarkup(node: ReactNode) {
  const client = cmsTestClient();
  try { return render(<QueryClientProvider client={client}>{node}</QueryClientProvider>); }
  finally { client.clear(); }
}
