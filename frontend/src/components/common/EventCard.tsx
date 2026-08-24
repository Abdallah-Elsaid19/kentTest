import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { ArrowLink } from "@/components/navigation";

export interface EventCardProps {
  imageSrc: string;
  imageAlt?: string;
  category?: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  title: string;
  detailsTo: string;
  bookingUrl?: string;
}

export function EventCard({
  imageSrc,
  imageAlt = "",
  category,
  date,
  startTime,
  endTime,
  location,
  title,
  detailsTo,
  bookingUrl,
}: EventCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e0e8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(36,16,45,.11)] motion-reduce:transition-none">
      <div className="event-card-media relative h-[195px] shrink-0 overflow-hidden bg-slate-100">
        <img className="relative z-[1] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" />
        {category && <span className="absolute bottom-3.5 left-4 rounded-md bg-[#F5C94F] px-2.5 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#2c1e2f]">{category}</span>}
      </div>
      <div className="grid min-h-[300px] flex-1 grid-rows-[92px_92px_1fr] p-[22px] sm:min-h-[360px] sm:grid-rows-[92px_132px_1fr] xl:min-h-[300px] xl:grid-rows-[92px_92px_1fr]">
        <h3 className="h-full border-b border-[#e7e1e8] pb-5 font-heading text-xl font-semibold leading-[1.15] text-kbc-purple-950">{title}</h3>
        <div className="grid h-full grid-cols-2 gap-x-4 pt-5 text-sm font-medium leading-snug text-slate-600 sm:grid-rows-[64px_44px] sm:text-[13px] xl:grid-rows-[48px_24px] xl:gap-x-5 xl:text-sm">
          <div className="flex min-w-0 items-center gap-2.5">
            <MapPin className="h-[18px] w-[18px] shrink-0 text-slate-400" aria-hidden="true" />
            <span>{location}</span>
          </div>
          <div className="flex min-w-0 items-center gap-2.5">
            <CalendarDays className="h-[18px] w-[18px] shrink-0 text-slate-400" aria-hidden="true" />
            <span>{date}</span>
          </div>
          <div className="flex min-w-0 items-center gap-2.5">
            <Clock3 className="h-[18px] w-[18px] shrink-0 text-slate-400" aria-hidden="true" />
            <span>Start at {startTime}</span>
          </div>
          <div className="flex min-w-0 items-center gap-2.5">
            <Clock3 className="h-[18px] w-[18px] shrink-0 text-slate-400" aria-hidden="true" />
            <span>Ends at {endTime}</span>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-3 self-end border-t border-[#e7e1e8] pt-4">
          <ArrowLink className="!min-h-10 !p-0 !text-sm !text-[#4B176D] hover:!text-[#371050]" to={detailsTo}>View details</ArrowLink>
          {bookingUrl && <a className="events-gold-button inline-flex min-h-10 items-center justify-center rounded-lg border border-[#F5C94F] bg-[#F5C94F] px-4 py-2.5 text-center text-xs font-bold text-[#4B176D] transition-colors hover:text-white" href={bookingUrl} target="_blank" rel="noreferrer">Secure your seat</a>}
        </div>
      </div>
    </article>
  );
}
