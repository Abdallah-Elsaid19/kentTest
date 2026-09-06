import { Clock3, Eye, GraduationCap } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ArrowLink } from "@/components/navigation";

export interface ProgrammeShowcaseCardProps {
  discipline: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  image: string;
  href: string;
  details?: ReactNode;
  linkLabel?: string;
}

export function ProgrammeShowcaseCard({
  discipline,
  title,
  level,
  duration,
  description,
  image,
  href,
  details,
  linkLabel = "Explore programme",
}: ProgrammeShowcaseCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e4ddec] bg-white shadow-[0_12px_32px_rgba(35,13,63,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(35,13,63,0.13)] motion-reduce:transform-none motion-reduce:transition-none">
      <Link className="relative block aspect-[16/10] overflow-hidden bg-[#24103b]" to={href} aria-label={`Explore ${title}`}>
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none" src={image} alt={`${title} learning at Kent Business College`} loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a30]/70 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#24103b]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5C94F] backdrop-blur-sm">
          {discipline}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#17131d]">{title}</h3>
        <ul className="mt-5 flex flex-wrap gap-4 border-y border-[#eee8f3] py-4 text-xs font-medium text-[#675f70]" aria-label={`${title} programme details`}>
          <li className="flex items-center gap-2"><GraduationCap className="size-4 text-primary" aria-hidden="true" />{level}</li>
          <li className="flex items-center gap-2"><Clock3 className="size-4 text-primary" aria-hidden="true" />{duration}</li>
        </ul>
        <p className="mt-5 text-sm leading-7 text-[#716a7a]">{description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <ArrowLink className="text-sm" to={href}>{linkLabel}</ArrowLink>
          {details && (
            <details className="group/details relative shrink-0">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full bg-[#f7f4fa] text-primary transition-colors hover:bg-[#eee8f3] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Programme details</span>
                <Eye className="size-4" aria-hidden="true" />
              </summary>
              <div className="absolute bottom-12 right-0 z-20 max-h-[360px] w-[min(420px,calc(100vw-90px))] overflow-y-auto rounded-xl border border-[#e4ddec] bg-[#f7f4fa] p-4 shadow-[0_16px_40px_rgba(35,13,63,0.16)]">
                {details}
              </div>
            </details>
          )}
        </div>
      </div>
    </article>
  );
}
