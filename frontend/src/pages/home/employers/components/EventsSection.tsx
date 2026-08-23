import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEvents } from "@/features/content/queries";
import type { Event } from "@/types/event";
import { fallbackEvents } from "../data";
import { CarouselControls, SectionHeading } from "./SectionHeading";

function eventDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Europe/London" }).format(new Date(value));
}

function eventTime(value: string) {
  return new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Europe/London" }).format(new Date(value)).toLowerCase();
}

export function EventsSection() {
  const [tab, setTab] = useState<"upcoming" | "ended">("upcoming");
  const upcoming = useEvents("?status=upcoming&perPage=12");
  const ended = useEvents("?status=ended&perPage=12");
  const scroller = useRef<HTMLDivElement>(null);
  const events: Event[] = tab === "upcoming"
    ? (upcoming.data?.items?.length ? upcoming.data.items : fallbackEvents)
    : (ended.data?.items || []);
  return (
    <section className="kbc-section kbc-events" aria-labelledby="events-title">
      <div className="kbc-container">
        <div className="kbc-heading-row"><SectionHeading title="Upcoming Events" description="Discover our Upcoming Events" align="left" /><CarouselControls scroller={scroller} label="events" /></div>
        <div className="kbc-event-tabs" role="tablist" aria-label="Choose event status">
          <button role="tab" type="button" aria-selected={tab === "upcoming"} className={tab === "upcoming" ? "is-active" : ""} onClick={() => setTab("upcoming")}>Upcoming Events</button>
          <button role="tab" type="button" aria-selected={tab === "ended"} className={tab === "ended" ? "is-active" : ""} onClick={() => setTab("ended")}>Ended Events</button>
        </div>
        {events.length ? <div className="kbc-horizontal-cards kbc-event-track" ref={scroller} tabIndex={0} aria-live="polite">
          {events.map((event) => {
            const isFallback = event.id < 0;
            return (
              <article className="kbc-event-card" key={event.id}>
                <div className="kbc-event-card__date"><span>{eventDate(event.startAt)}</span><strong>{event.isOnline ? "Online" : "In person"}</strong></div>
                <h3>{event.title}</h3>
                <ul>
                  <li><Clock3 aria-hidden="true" />Start at {eventTime(event.startAt)}</li>
                  <li><Clock3 aria-hidden="true" />Ends at {eventTime(event.endAt)}</li>
                  <li><MapPin aria-hidden="true" />{event.isOnline ? "Online event" : event.address || event.location || "Kent Business College"}</li>
                </ul>
                <div className="kbc-event-card__actions">
                  {event.bookingUrl && <a className="kbc-button kbc-button--primary" href={event.bookingUrl} target="_blank" rel="noreferrer">Secure Your Seat</a>}
                  {isFallback ? <Link className="kbc-arrow-link" to="/events">More Details <ArrowRight size={16} aria-hidden="true" /></Link> : <Link className="kbc-arrow-link" to={`/events/${event.slug}`}>More Details <ArrowRight size={16} aria-hidden="true" /></Link>}
                </div>
              </article>
            );
          })}
        </div> : <p className="kbc-empty-state">No ended events are available yet.</p>}
      </div>
    </section>
  );
}
