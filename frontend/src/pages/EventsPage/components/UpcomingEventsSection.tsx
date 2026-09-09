import { useCmsBindings } from "@/features/cms/publicContent";
import { useSearchParams } from "react-router-dom";
import { EventCard } from "@/components/common/EventCard";
import { FeaturedEventCard } from "@/components/common/FeaturedEventCard";
import { NavigationButton } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { useEvents } from "@/features/content/queries";
import type { Event } from "@/types/event";
import { eventCategory, eventExcerpt, eventLocationLabel, formatEventCardDate, formatEventCardTime, formatEventDate, formatEventTime } from "./eventFormatting";
import { EventsLoadingSkeleton } from "./EventsLoadingSkeleton";

const FALLBACK_IMAGE = "/assets/images/figma-home/workplace-teaching.png";

export function UpcomingEventsSection() {
  const cms = useCmsBindings(["events"]);
  const cmsValues = cms.resolve({ FALLBACK_IMAGE });

  const [params, setParams] = useSearchParams();
  const status = params.get("status") === "ended" ? "ended" : "upcoming";
  const changeStatus = (nextStatus: "upcoming" | "ended") => {
    setParams({ status: nextStatus }, { preventScrollReset: true, replace: true });
  };
  const query = useEvents(`?status=${status}&perPage=13`);
  const items = query.data?.items || [];
  const [featured, ...rest] = status === "upcoming" ? items : [undefined, ...items];

  return cms.render((
    <section id="upcoming-events" aria-labelledby="upcoming-events-title">
      <div className="figma-shell">
        <div className="events-heading-row">
          <FigmaSectionHeading id="upcoming-events-title" eyebrow={cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.eyebrow_001")} title={cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.title_002")} description={cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.description_003")} align="left" />
          <div className="events-tabs" role="tablist" aria-label={cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.aria_label_004")}>
            <button type="button" role="tab" aria-selected={status === "upcoming"} onClick={() => changeStatus("upcoming")}>{cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_005")}</button>
            <button type="button" role="tab" aria-selected={status === "ended"} onClick={() => changeStatus("ended")}>{cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_006")}</button>
          </div>
        </div>

        {query.isLoading && <EventsLoadingSkeleton />}

        {query.isError && (
          <div className="events-strip">
            <div className="events-strip__inner">
              <div><h3>{cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_007")}</h3><p>{cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_008")}</p></div>
              <NavigationButton className="figma-btn figma-btn--gold" to={cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.to_009")}>{cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_010")}</NavigationButton>
            </div>
          </div>
        )}

        {!query.isLoading && !query.isError && items.length === 0 && (
          <div className="events-strip">
            <div className="events-strip__inner">
              <div>
                <h3>{status === "upcoming" ? cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_011") : cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_012")}</h3>
                <p>{status === "upcoming" ? cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_013") : cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_014")}</p>
              </div>
              {status === "upcoming" && <NavigationButton className="figma-btn figma-btn--gold" to={cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.to_015")}>{cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_016")}</NavigationButton>}
            </div>
          </div>
        )}

        {!query.isLoading && !query.isError && featured && (
          <FeaturedEventCard
            imageSrc={featured.imageFeaturedUrl || featured.image?.url || cmsValues.FALLBACK_IMAGE}
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
                imageSrc={event.image?.url || cmsValues.FALLBACK_IMAGE}
                imageAlt={event.image?.altText || ""}
                category={eventCategory(event)}
                date={formatEventCardDate(event.startAt, event.timezone)}
                startTime={formatEventCardTime(event.startAt, event.timezone)}
                endTime={formatEventCardTime(event.endAt, event.timezone)}
                location={event.isOnline ? cms.text("events.pages_events_page_components_upcoming_ev_upcoming_events_section.text_017") : eventLocationLabel(event)}
                title={event.title}
                detailsTo={`/events/${event.slug}`}
                bookingUrl={event.status === "upcoming" ? event.bookingUrl : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  ));
}
