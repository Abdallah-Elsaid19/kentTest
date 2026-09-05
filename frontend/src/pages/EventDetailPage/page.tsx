import "@/styles/events-page.css";
import "@/styles/event-detail-page.css";

import DOMPurify from "dompurify";
import { ArrowUpRight, CalendarDays, ChevronLeft, Clock3, Images, MapPin, Ticket, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { environment } from "@/app/environment";
import { EventCountdown } from "@/components/common/EventCountdown";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState } from "@/components/ui/AsyncState";
import { useEvent } from "@/features/content/queries";
import { buildEventSchema, eventCategory, eventLocationLabel } from "@/pages/EventsPage/components/eventFormatting";
import type { Event } from "@/types/event";

const FALLBACK_IMAGE = "/assets/images/figma-home/workplace-teaching.png";

type EventMediaItem = {
  src: string;
  alt: string;
};

function prepareEventContent(description: string, coverUrl: string, coverAlt: string) {
  const sanitized = DOMPurify.sanitize(description || "");
  const media: EventMediaItem[] = [];
  const seenSources = new Set<string>();
  const addMedia = (src: string, alt: string) => {
    const normalizedSource = src.trim();
    if (!normalizedSource || seenSources.has(normalizedSource)) return;
    seenSources.add(normalizedSource);
    media.push({ src: normalizedSource, alt: alt.trim() });
  };

  addMedia(coverUrl, coverAlt);
  if (typeof DOMParser === "undefined") return { descriptionHtml: sanitized, media };

  const document = new DOMParser().parseFromString(sanitized, "text/html");
  document.querySelectorAll("img").forEach((image) => {
    const figure = image.closest("figure");
    const caption = figure?.querySelector("figcaption")?.textContent || "";
    addMedia(image.getAttribute("src") || "", image.getAttribute("alt") || caption);
    if (figure) figure.remove();
    else image.remove();
  });

  return { descriptionHtml: document.body.innerHTML, media };
}

function eventDateParts(event: Event) {
  const start = new Date(event.startAt);
  const end = new Date(event.endAt);
  const options = { timeZone: event.timezone };
  return {
    fullDate: new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "2-digit", month: "long", year: "numeric", ...options }).format(start),
    day: new Intl.DateTimeFormat("en-GB", { day: "2-digit", ...options }).format(start),
    month: new Intl.DateTimeFormat("en-GB", { month: "short", ...options }).format(start),
    year: new Intl.DateTimeFormat("en-GB", { year: "numeric", ...options }).format(start),
    startTime: new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", ...options }).format(start),
    endTime: new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", ...options }).format(end),
  };
}

function EventDetailLoading() {
  return (
    <div className="event-detail-page kbc-figma-home" role="status" aria-live="polite">
      <section className="event-detail-hero">
        <div className="figma-shell event-detail-hero__grid animate-pulse motion-reduce:animate-none">
          <div>
            <div className="h-4 w-28 rounded bg-white/15" />
            <div className="mt-16 h-4 w-24 rounded bg-white/15" />
            <div className="mt-5 h-16 w-full max-w-xl rounded bg-white/15" />
            <div className="mt-5 h-5 w-4/5 rounded bg-white/10" />
          </div>
          <div className="min-h-[330px] rounded-2xl bg-white/10" />
        </div>
      </section>
      <span className="sr-only">Loading event details…</span>
    </div>
  );
}

export default function EventDetailPage() {
  const query = useEvent(useParams().eventSlug || "");
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const preparedContent = useMemo(
    () => prepareEventContent(
      query.data?.description || "",
      query.data?.image?.url || "",
      query.data?.image?.altText || query.data?.title || "Event media",
    ),
    [query.data?.description, query.data?.image?.altText, query.data?.image?.url, query.data?.title],
  );

  useEffect(() => {
    if (!isMediaOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMediaOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMediaOpen]);

  if (query.isLoading) return <EventDetailLoading />;
  if (query.isError || !query.data) return <ErrorState message="Event not found." />;

  const item = query.data;
  const date = eventDateParts(item);
  const category = eventCategory(item) || "Kent Business College event";
  const location = eventLocationLabel(item);
  const description = preparedContent.descriptionHtml;
  const eventMedia = preparedContent.media;
  const isBookable = item.status === "upcoming" && Boolean(item.bookingUrl);
  const eventSeo = {
    ...item.seo,
    schema: [...(item.seo?.schema || []), buildEventSchema(item, environment.VITE_SITE_URL)],
  };

  return (
    <>
      <RouteMeta seo={eventSeo} fallbackTitle={item.title} fallbackDescription={item.summary} />
      <div className="event-detail-page events-page kbc-figma-home">
        <section className="event-detail-hero" aria-labelledby="event-detail-title">
          <img
            className="event-detail-hero__background"
            src={item.image?.url || FALLBACK_IMAGE}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <div className="event-detail-hero__overlay" aria-hidden="true" />
          <div className="figma-shell event-detail-hero__grid">
            <div className="event-detail-hero__copy">
              <Link className="event-detail-back-link" to="/events"><ChevronLeft aria-hidden="true" />All events</Link>
              <p className="event-detail-eyebrow">{category}</p>
              <h1 id="event-detail-title">{item.title}</h1>
              {item.summary && <p className="event-detail-hero__summary">{item.summary}</p>}
              <div className="event-detail-hero__meta" aria-label="Event summary information">
                <span><CalendarDays aria-hidden="true" />{date.day} {date.month} {date.year}</span>
                <span><Clock3 aria-hidden="true" />{date.startTime} – {date.endTime}</span>
                <span><MapPin aria-hidden="true" />{location}</span>
              </div>
              <div className="event-detail-hero__actions">
                {isBookable && item.bookingUrl ? (
                  <a href={item.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Register on Eventbrite <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span>Registration closed</span>
                )}
                <Link to="/book-session">Book a consultation</Link>
              </div>
            </div>
            <EventCountdown className="event-detail-hero__countdown" eventTime={item.startAt} />
          </div>
        </section>

        <section className="event-detail-content">
          <div className="figma-shell event-detail-content__grid">
            <article className="event-detail-article">
              <p className="event-detail-eyebrow">Event programme</p>
              <h2>About this event</h2>
              <div className="event-detail-rule" />
              {description
                ? <div className="event-detail-rich-text" dangerouslySetInnerHTML={{ __html: description }} />
                : <p className="event-detail-empty-copy">{item.summary || "More event information will be available soon."}</p>}

              {item.speakers?.length ? (
                <section className="event-detail-subsection" aria-labelledby="event-speakers-title">
                  <p className="event-detail-eyebrow">Meet the experts</p>
                  <h2 id="event-speakers-title">Speakers</h2>
                  <div className="event-detail-speakers">
                    {item.speakers.map(({ person, role }) => (
                      <div key={person.id} className="event-detail-speaker">
                        <strong>{person.name}</strong>
                        <span>{role || person.jobTitle}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {item.agenda?.length ? (
                <section className="event-detail-subsection" aria-labelledby="event-agenda-title">
                  <p className="event-detail-eyebrow">Plan your day</p>
                  <h2 id="event-agenda-title">Event agenda</h2>
                  <ol className="event-detail-agenda">
                    {item.agenda.map((agenda) => (
                      <li key={agenda.id}>
                        <time>{new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: item.timezone }).format(new Date(agenda.startsAt))}</time>
                        <div><strong>{agenda.title}</strong>{agenda.description && <p>{agenda.description}</p>}</div>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}
            </article>

            <aside className="event-detail-registration" aria-labelledby="event-registration-title">
              <p className="event-detail-eyebrow">Registration</p>
              <h2 id="event-registration-title">{isBookable ? "Secure your place" : "Event information"}</h2>
              <p>{isBookable ? "Registration and ticket availability are managed securely through Eventbrite." : "Review the event details and its official Eventbrite listing."}</p>
              <ul>
                <li><CalendarDays aria-hidden="true" /><span>{date.fullDate}</span></li>
                <li><Clock3 aria-hidden="true" /><span>{date.startTime} – {date.endTime}</span></li>
                <li><MapPin aria-hidden="true" /><span>{location}</span></li>
              </ul>
              {item.bookingUrl ? (
                <a className="event-detail-register-button" href={item.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Ticket aria-hidden="true" />{isBookable ? "Register on Eventbrite" : "View on Eventbrite"}<ArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <Link className="event-detail-register-button" to="/book-session"><Ticket aria-hidden="true" />Ask about this event</Link>
              )}
              {eventMedia.length ? (
                <button
                  className="mt-4 flex w-full items-center gap-2 rounded-lg border border-[#401B8C] bg-[#f6f0f8] px-4 py-3 text-sm text-[#401B8C] transition-[background-color,border-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#F5C94F] hover:bg-[#F5C94F] hover:text-[#351442] hover:shadow-[0_12px_24px_rgba(38,13,50,.28)] focus:outline-none focus:ring-2 focus:ring-[#401B8C] motion-reduce:hover:translate-y-0"
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setIsMediaOpen(true)}
                >
                  <Images aria-hidden="true" />
                  <span>Media about this event</span>
                </button>
              ) : null}
              <small>Booking opens securely in a new tab.</small>
            </aside>
          </div>
        </section>

        {isMediaOpen ? (
          <div
            className="event-media-modal"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsMediaOpen(false);
            }}
          >
            <section
              className="event-media-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="event-media-title"
            >
              <header className="event-media-dialog__header">
                <div>
                  <p className="event-detail-eyebrow">Event media</p>
                  <h2 id="event-media-title">Media about this event</h2>
                  <p className="event-media-dialog__subtitle">{item.title}</p>
                </div>
                <button ref={closeButtonRef} type="button" aria-label="Close media gallery" onClick={() => setIsMediaOpen(false)}>
                  <X aria-hidden="true" />
                </button>
              </header>
              <div className="event-media-dialog__gallery">
                {eventMedia.map((media, index) => (
                  <figure key={`${media.src}-${index}`}>
                    <img
                      src={media.src}
                      alt={media.alt || `${item.title} media ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </>
  );
}
