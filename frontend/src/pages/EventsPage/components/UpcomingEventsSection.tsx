import { useSearchParams } from "react-router-dom";
import { EventCard } from "@/components/common/EventCard";
import { FeaturedEventCard } from "@/components/common/FeaturedEventCard";
import { NavigationButton } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { useEvents } from "@/features/content/queries";
import type { Event } from "@/types/event";
import { eventCategory, eventExcerpt, eventLocationLabel, formatEventCardDate, formatEventCardTime, formatEventDate, formatEventTime } from "./eventFormatting";

const FALLBACK_IMAGE = "/assets/images/figma-home/workplace-teaching.png";

export function UpcomingEventsSection() {
  const [params, setParams] = useSearchParams();
  const status = params.get("status") === "ended" ? "ended" : "upcoming";
  const changeStatus = (nextStatus: "upcoming" | "ended") => {
    setParams({ status: nextStatus }, { preventScrollReset: true, replace: true });
  };
  const query = useEvents(`?status=${status}&perPage=13`);
  const items = query.data?.items || [];
  const [featured, ...rest] = status === "upcoming" ? items : [undefined, ...items];

  return (
    <section id="upcoming-events" aria-labelledby="upcoming-events-title">
      <div className="figma-shell">
        <div className="events-heading-row">
          <FigmaSectionHeading id="upcoming-events-title" eyebrow="What's on" title="Upcoming Events" description="Discover upcoming workshops, information sessions, professional development events and networking opportunities from Kent Business College." />
          <div className="events-tabs" role="tablist" aria-label="Event status">
            <button type="button" role="tab" aria-selected={status === "upcoming"} onClick={() => changeStatus("upcoming")}>Upcoming Events</button>
            <button type="button" role="tab" aria-selected={status === "ended"} onClick={() => changeStatus("ended")}>Past Events</button>
          </div>
        </div>

        {query.isLoading && <p className="!text-sm" style={{ color: "var(--figma-muted)" }}>Loading events…</p>}

        {query.isError && (
          <div className="events-strip">
            <div className="events-strip__inner">
              <div><h3>We couldn't load events right now</h3><p>Please try again shortly, or speak with our team about upcoming sessions.</p></div>
              <NavigationButton className="figma-btn figma-btn--gold" to="/book-session">Book a consultation</NavigationButton>
            </div>
          </div>
        )}

        {!query.isLoading && !query.isError && items.length === 0 && (
          <div className="events-strip">
            <div className="events-strip__inner">
              <div>
                <h3>{status === "upcoming" ? "No upcoming events are currently available" : "No past events to show yet"}</h3>
                <p>{status === "upcoming" ? "Please check back soon or speak with our team about future sessions." : "Past sessions will appear here once they have taken place."}</p>
              </div>
              {status === "upcoming" && <NavigationButton className="figma-btn figma-btn--gold" to="/book-session">Book a consultation</NavigationButton>}
            </div>
          </div>
        )}

        {!query.isLoading && !query.isError && featured && (
          <FeaturedEventCard
            imageSrc={featured.image?.url || FALLBACK_IMAGE}
            imageAlt={featured.image?.altText || ""}
            category={eventCategory(featured)}
            date={formatEventDate(featured.startAt, featured.timezone)}
            time={formatEventTime(featured.startAt, featured.timezone)}
            location={eventLocationLabel(featured)}
            title={featured.title}
            summary={featured.summary ? eventExcerpt(featured, 220) : undefined}
            detailsTo={`/events/${featured.slug}`}
            bookingUrl={featured.bookingUrl}
          />
        )}

        {!query.isLoading && !query.isError && rest.filter(Boolean).length > 0 && (
          <div className="events-grid">
            {rest.filter((event): event is Event => Boolean(event)).map((event) => (
              <EventCard
                key={event.id}
                imageSrc={event.image?.url || FALLBACK_IMAGE}
                imageAlt={event.image?.altText || ""}
                category={eventCategory(event)}
                date={formatEventCardDate(event.startAt, event.timezone)}
                startTime={formatEventCardTime(event.startAt, event.timezone)}
                endTime={formatEventCardTime(event.endAt, event.timezone)}
                location={event.isOnline ? "Online event" : eventLocationLabel(event)}
                title={event.title}
                detailsTo={`/events/${event.slug}`}
                bookingUrl={event.status === "upcoming" ? event.bookingUrl : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
