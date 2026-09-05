import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { useEvents } from "@/features/content/queries";
import type { Event } from "@/types/event";
import { fallbackEvents } from "./data";

const fallbackImages = [
  "/assets/images/figma-home/marketing-event.png",
  "/assets/images/figma-home/project-speaker.png",
  "/assets/images/figma-home/workplace-teaching.png",
];

function formatEventDate(value: string) {
  const date = new Date(value);

  return {
    day: new Intl.DateTimeFormat("en-GB", { day: "2-digit", timeZone: "Europe/London" }).format(date),
    month: new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "Europe/London" }).format(date),
    full: new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Europe/London",
    }).format(date),
  };
}

function getEventImage(event: Event, index: number) {
  return event.imageFeaturedUrl || event.image?.url || fallbackImages[index % fallbackImages.length];
}

function getEventLocation(event: Event) {
  return event.isOnline
    ? "Online"
    : event.location || event.address || "Kent Business College";
}

function getEventPath(event: Event) {
  return event.id >= 0 ? `/events/${event.slug}` : "/events";
}

export function FigmaUpcomingEventsSection() {
  const upcoming = useEvents("?status=upcoming&perPage=3");
  const events: Event[] = upcoming.data?.items?.length
    ? upcoming.data.items.slice(0, 3)
    : fallbackEvents;
  const featured = events[0];
  const compactEvents = events.slice(1, 3);

  if (!featured) return null;

  const featuredDate = formatEventDate(featured.startAt);

  return (
    <section
      className="relative overflow-hidden bg-[#f8f4fa] py-16 sm:py-20 xl:py-[118px]"
      aria-labelledby="home-upcoming-events-title"
    >
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full border border-[#401B8C]/10" />
      <div className="pointer-events-none absolute -right-20 bottom-16 size-64 rounded-full border border-[#401B8C]/10" />

      <div className="figma-shell relative">
        <div className="mb-10 lg:mb-14">
          <FigmaSectionHeading
            id="home-upcoming-events-title"
            eyebrow="What's on"
            title={<>Upcoming events,<br />all in one place.</>}
            description="Explore the next workshops, information sessions and professional events from Kent Business College."
            align="center"
          />
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.4fr_.6fr]">
          <Link
            className="group relative grid min-h-[440px] overflow-hidden rounded-[22px] border border-[#401B8C]/15 bg-white shadow-[0_20px_55px_rgba(64,27,140,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(64,27,140,0.16)] sm:grid-cols-2"
            to={getEventPath(featured)}
          >
            <div className="relative min-h-[260px] overflow-hidden bg-[#401B8C] sm:min-h-full">
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                src={getEventImage(featured, 0)}
                alt={featured.image?.altText || ""}
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#401B8C]/35 via-transparent to-transparent" />
              <span className="absolute left-0 top-5 rounded-r-md bg-[#401B8C] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] !text-white shadow-lg">
                Featured
              </span>
            </div>

            <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-10">
              <div className="flex w-fit items-center gap-2 rounded-lg bg-[#401B8C] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] !text-white">
                <CalendarDays aria-hidden="true" size={15} />
                <time dateTime={featured.startAt}>{featuredDate.full}</time>
              </div>
              <h3 className="mt-6 text-[clamp(27px,2vw,38px)] font-semibold leading-[1.08] tracking-tight !text-kbc-dark-950">
                {featured.title}
              </h3>
              <p className="mt-4 flex items-center gap-2 text-sm !text-[#401B8C]">
                <MapPin aria-hidden="true" size={16} />{getEventLocation(featured)}
              </p>
              <p className="mt-6 line-clamp-3 text-sm leading-relaxed !text-kbc-dark-500 sm:text-[15px]">
                {featured.summary || "Join Kent Business College for practical insight, professional learning and useful guidance for your next step."}
              </p>

              <span className="mt-9 inline-flex w-fit items-center gap-3 rounded-lg bg-[#401B8C] px-5 py-3 text-sm font-semibold !text-white transition-colors group-hover:bg-[#2F1468]">
                Reserve your place <ArrowRight aria-hidden="true" size={17} />
              </span>
            </div>
          </Link>

          <div className="grid gap-5 xl:grid-rows-2">
            {compactEvents.map((event) => {
              const date = formatEventDate(event.startAt);

              return (
                <Link
                  className="group grid min-h-[220px] grid-cols-[minmax(0,1fr)_72px] gap-5 rounded-[18px] border border-[#401B8C]/15 bg-white p-5 shadow-[0_12px_35px_rgba(64,27,140,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#401B8C]/30 hover:shadow-[0_20px_50px_rgba(64,27,140,0.14)] sm:p-6"
                  key={event.id}
                  to={getEventPath(event)}
                >
                  <div className="flex h-full min-w-0 flex-col">
                    <span className="w-fit rounded-md bg-[#401B8C] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] !text-white">
                      {event.categories[0]?.name || "Professional event"}
                    </span>
                    <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight !text-kbc-dark-950 sm:text-lg">
                      {event.title}
                    </h3>
                    <p className="mt-auto flex items-center gap-1.5 pt-5 text-xs !text-kbc-dark-500">
                      <MapPin aria-hidden="true" size={13} />
                      <span className="line-clamp-1">{getEventLocation(event)}</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <time
                      className="flex size-[58px] flex-col items-center justify-center rounded-xl bg-[#401B8C] text-center shadow-sm"
                      dateTime={event.startAt}
                    >
                      <strong className="text-xl font-semibold leading-none !text-white">{date.day}</strong>
                      <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-kbc-gold-400">{date.month}</span>
                    </time>
                    <span className="grid size-9 place-items-center rounded-md bg-[#401B8C] !text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#2F1468]">
                      <ArrowRight aria-hidden="true" size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-end sm:mt-8">
          <ArrowLink className="!text-sm !font-semibold !leading-5 !text-[#401B8C] hover:!text-[#2F1468]" to="/events" direction="up-right">
            View all events
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
