import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useEvents } from "@/features/content/queries";
import { FigmaUpcomingEventsSection } from "@/pages/home/components/FigmaUpcomingEventsSection";
import type { Event } from "@/types/event";

vi.mock("@/features/content/queries", () => ({ useEvents: vi.fn() }));

const programmeEvent: Event = {
  id: 42,
  slug: "project-management-ai-information-session",
  title: "Project Management Professional with AI Dashboards and Agents",
  status: "upcoming",
  startAt: "2026-09-17T13:00:00+01:00",
  endAt: "2026-09-17T15:00:00+01:00",
  timezone: "Europe/London",
  isOnline: true,
  categories: [],
};

function setEvents(items: Event[], state = {}) {
  vi.mocked(useEvents).mockReturnValue({
    data: { items }, isLoading: false, isError: false, ...state,
  } as ReturnType<typeof useEvents>);
}

function render(search: string | undefined = '"project manag"') {
  return renderToStaticMarkup(
    <MemoryRouter><FigmaUpcomingEventsSection id="events" search={search} /></MemoryRouter>,
  );
}

describe("programme events in the shared section", () => {
  beforeEach(() => vi.clearAllMocks());

  it("requests matching upcoming events before server pagination and links to their details", () => {
    setEvents([programmeEvent]);
    const html = render();
    const params = new URLSearchParams(vi.mocked(useEvents).mock.calls[0][0]);
    expect(params.get("status")).toBe("upcoming");
    expect(params.get("search")).toBe('"project manag"');
    expect(params.get("perPage")).toBe("3");
    expect(html).toContain(`/events/${programmeEvent.slug}`);
    expect(html).toContain('aria-labelledby="events-title"');
    expect(html).not.toContain("xl:grid-cols-[1.4fr_.6fr]");
  });

  it("shows an empty state instead of unrelated fallback events", () => {
    setEvents([]);
    const html = render();
    expect(html).toContain("No upcoming events for this programme");
    expect(html).not.toContain("CIM Level 4");
    expect(html).not.toContain("ChPP");
    expect(html).toContain('href="/book-session"');
  });

  it("shows loading and failure states without fabricated events", () => {
    setEvents([], { isLoading: true });
    expect(render()).toContain("Loading programme events");
    setEvents([], { isError: true });
    const html = render();
    expect(html).toContain("load programme events right now");
    expect(html).not.toContain("Reserve your place");
  });

  it("keeps the existing unfiltered section behaviour for other pages", () => {
    setEvents([]);
    const html = renderToStaticMarkup(<MemoryRouter><FigmaUpcomingEventsSection /></MemoryRouter>);
    expect(useEvents).toHaveBeenCalledWith("?status=upcoming&perPage=3");
    expect(html).toContain("CIM Level 4");
  });
});
