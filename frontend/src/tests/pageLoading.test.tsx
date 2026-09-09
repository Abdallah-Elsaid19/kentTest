import { renderToStaticMarkup } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ManagedPage } from "@/features/cms/publicContent";

function render(client: QueryClient) {
  return renderToStaticMarkup(<QueryClientProvider client={client}><MemoryRouter><ManagedPage page="faq"><p>Published FAQ content</p></ManagedPage></MemoryRouter></QueryClientProvider>);
}

describe("page loading stability", () => {
  it("reserves a full viewport until initial content arrives", () => {
    const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    try {
      const html = render(client);
      expect(html).toContain("min-h-screen");
      expect(html).toContain("Loading page content");
      expect(html).not.toContain("Published FAQ content");
    } finally { client.clear(); }
  });

  it("keeps published content visible if a background refresh fails", () => {
    const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    try {
      const queryKey = ["cms-public", "page", "faq"];
      client.setQueryData(queryKey, { page: "faq", sections: [{ key: "faq.copy", section: "copy", content: { title: "Published" } }] });
      client.getQueryCache().find({ queryKey })!.setState({ error: new Error("Temporary network failure"), status: "error", fetchStatus: "idle" });
      const html = render(client);
      expect(html).toContain("Published FAQ content");
      expect(html).not.toContain('role="status"');
      expect(html).not.toContain("temporarily unavailable");
    } finally { client.clear(); }
  });

  it("still shows an error when no published content could be loaded", () => {
    const client = new QueryClient({ defaultOptions: { queries: { retry: false, retryOnMount: false } } });
    try {
      client.getQueryCache().build(client, { queryKey: ["cms-public", "page", "faq"] }).setState({ error: new Error("Offline"), status: "error", fetchStatus: "idle" });
      expect(render(client)).toContain("temporarily unavailable");
    } finally { client.clear(); }
  });
});
