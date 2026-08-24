import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { ArrowLink } from "@/components/navigation";

export interface FeaturedEventCardProps {
  imageSrc: string;
  imageAlt?: string;
  category?: string;
  date: string;
  time: string;
  location: string;
  title: string;
  summary?: string;
  detailsTo: string;
  bookingUrl?: string;
  tag?: string;
}

export function FeaturedEventCard({
  imageSrc,
  imageAlt = "",
  category,
  date,
  time,
  location,
  title,
  summary,
  detailsTo,
  bookingUrl,
  tag = "Featured",
}: FeaturedEventCardProps) {
  return (
    <article className="mb-7 grid overflow-hidden rounded-2xl bg-[#4B176D] text-white shadow-[0_24px_54px_rgba(35,16,44,.2)] lg:grid-cols-[1.05fr_.95fr]">
      <div className="event-card-media relative min-h-[220px] overflow-hidden bg-[#17101c] lg:min-h-[320px]">
        <span className="absolute left-[18px] top-[18px] z-10 rounded-lg bg-kbc-gold-500 px-[13px] py-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#2c1e2f]">{tag}</span>
        <img className="absolute inset-0 z-[1] h-full w-full object-cover" src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-col p-7 lg:p-9">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white/85"><CalendarDays className="h-3.5 w-3.5 text-kbc-gold-500" aria-hidden="true" />{date}</span>
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white/85"><Clock3 className="h-3.5 w-3.5 text-kbc-gold-500" aria-hidden="true" />{time}</span>
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white/85"><MapPin className="h-3.5 w-3.5 text-kbc-gold-500" aria-hidden="true" />{location}</span>
        </div>
        {category && <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-kbc-gold-500">{category}</p>}
        <h3 className="mt-3 font-heading text-[clamp(30px,3vw,42px)] font-semibold leading-[1.1] text-white">{title}</h3>
        {summary && <p className="mt-3.5 text-base leading-relaxed text-white/75">{summary}</p>}
        <div className="mt-auto flex w-full flex-wrap items-center justify-between gap-3 pt-7">
          <ArrowLink className="!text-sm" to={detailsTo} tone="inverse">View details</ArrowLink>
          {bookingUrl && <a className="events-gold-button inline-flex min-h-12 items-center justify-center rounded-lg border border-kbc-gold-500 bg-kbc-gold-500 px-5 py-3 text-sm font-bold text-[#4B176D] transition-colors hover:text-white" href={bookingUrl} target="_blank" rel="noreferrer">Secure your seat</a>}
        </div>
      </div>
    </article>
  );
}
