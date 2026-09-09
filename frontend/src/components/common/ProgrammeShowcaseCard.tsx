import { Clock3, Eye, GraduationCap } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ArrowLink } from "@/components/navigation";
import { shouldUseAnchor } from "@/components/navigation/linkTarget";

export interface ProgrammeShowcaseCardProps {
  discipline: string;
  title: string;
  level?: string;
  duration?: string;
  description: string;
  image: string;
  href: string;
  details?: ReactNode;
  metadata?: ReactNode;
  college?: string;
  programmeType?: string;
  imageAlt?: string;
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
  metadata,
  college,
  programmeType,
  imageAlt,
  linkLabel = "Explore programme",
}: ProgrammeShowcaseCardProps) {
  const imageLinkClass = "relative block aspect-[16/10] overflow-hidden bg-[#24103b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-kbc-gold-500";
  const imageContent = <>
    <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none" src={image} alt={imageAlt ?? `${title} learning at Kent Business College`} loading="lazy" decoding="async" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a30]/70 via-transparent to-transparent" aria-hidden="true" />
    <span className="absolute bottom-5 left-5 right-5 w-fit rounded-full border border-white/20 bg-[#24103b]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5C94F] backdrop-blur-sm">
      {discipline}
    </span>
  </>;
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e4ddec] bg-white shadow-[0_12px_32px_rgba(35,13,63,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(35,13,63,0.13)] motion-reduce:transform-none motion-reduce:transition-none">
      {shouldUseAnchor(href)
        ? <a className={imageLinkClass} href={href} aria-label={`Explore ${title}`}>{imageContent}</a>
        : <Link className={imageLinkClass} to={href} aria-label={`Explore ${title}`}>{imageContent}</Link>}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {college && <p className="mb-3 text-xs font-medium leading-5 text-primary">{college}</p>}
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#17131d]">{title}</h3>
        {(level || duration || programmeType) && <ul className="mt-5 flex flex-wrap gap-4 border-y border-[#eee8f3] py-4 text-xs font-medium text-[#675f70]" aria-label={`${title} programme details`}>
          {level && <li className="flex items-center gap-2"><GraduationCap className="size-4 text-primary" aria-hidden="true" />{level}</li>}
          {duration && <li className="flex items-center gap-2"><Clock3 className="size-4 text-primary" aria-hidden="true" />{duration}</li>}
          {programmeType && <li>{programmeType}</li>}
        </ul>}
        <p className="mt-5 text-sm leading-7 text-[#716a7a]">{description}</p>
        {metadata}
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <ArrowLink className="rounded-sm text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4" to={href} ariaLabel={`${linkLabel}: ${title}`}>{linkLabel}</ArrowLink>
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
