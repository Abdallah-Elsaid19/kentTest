import { renderToStaticMarkup } from "react-dom/server";
import { lazy } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { MainLayout } from "@/components/layout/MainLayout";

vi.mock("@/components/layout/Header", () => ({ Header: () => <header>Header</header> }));
vi.mock("@/components/layout/Footer", () => ({ Footer: () => <footer id="siteFooter">Footer</footer> }));

const DelayedPage = lazy(() => new Promise<{ default: () => React.ReactNode }>(() => {}));

function render(path: string) {
  const router = createMemoryRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <p>Home loading</p> },
      { path: "other", element: <p>Other page</p> },
      { path: "faq", element: <p>FAQ loading</p> },
      { path: "delayed", element: <DelayedPage /> },
    ],
  }], { initialEntries: [path] });
  const html = renderToStaticMarkup(<RouterProvider router={router} />);
  router.dispose();
  return html;
}

describe("Main layout footer", () => {
  it("does not render the footer before Home reports that it is ready", () => {
    expect(render("/")).not.toContain('id="siteFooter"');
  });

  it("continues to render the footer immediately on other pages", () => {
    expect(render("/other")).toContain('id="siteFooter"');
  });

  it("waits for dropdown page content as well as Home before rendering the footer", () => {
    const html = render("/faq");
    expect(html).toContain("<header>Header</header>");
    expect(html).toContain("FAQ loading");
    expect(html).not.toContain('id="siteFooter"');
    expect(html).toContain("min-h-screen");
  });

  it("keeps the header and a full-height main while a route module loads, without the footer", () => {
    const html = render("/delayed");
    expect(html).toContain("<header>Header</header>");
    expect(html).toContain('id="main-content"');
    expect(html).toContain('role="status"');
    expect(html).toContain("min-h-screen");
    expect(html).not.toContain('id="siteFooter"');
  });
});
