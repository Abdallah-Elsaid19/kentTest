import type { Event } from "@/types/event";

export function formatEventDate(value: string, timeZone?: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric", timeZone }).format(new Date(value));
}

export function formatEventTime(value: string, timeZone?: string) {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone }).format(new Date(value));
}

export function formatEventCardDate(value: string, timeZone?: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone }).format(new Date(value));
}

export function formatEventCardTime(value: string, timeZone?: string) {
  return new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "2-digit", hour12: true, timeZone }).format(new Date(value)).toLowerCase();
}

export function eventCategory(event: Event) {
  return event.categories?.[0]?.name;
}

export function eventLocationLabel(event: Event) {
  if (event.isOnline) return "Online";
  return event.location || event.address || "Kent Business College";
}

export function eventExcerpt(event: Event, max = 160) {
  const text = (event.summary || "").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export function buildEventSchema(event: Event, siteUrl: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.startAt,
    endDate: event.endAt,
    eventStatus: event.status === "cancelled" ? "https://schema.org/EventCancelled" : "https://schema.org/EventScheduled",
    eventAttendanceMode: event.isOnline ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
    location: event.isOnline
      ? { "@type": "VirtualLocation", url: event.bookingUrl || `${siteUrl}/events/${event.slug}` }
      : { "@type": "Place", name: event.location || "Kent Business College", address: event.address || undefined },
    image: event.image?.url || undefined,
    description: event.summary || undefined,
    organizer: { "@type": "Organization", name: "Kent Business College", url: siteUrl },
    url: `${siteUrl}/events/${event.slug}`,
  };
}
