import { Quote, Star } from "lucide-react";
import { ProgrammeSection, type ProgrammeSectionData } from "./ProgrammeSection";

export type ProgrammeTestimonial = {
  name: string;
  quote: string;
  role: string;
  company?: string;
  programme?: string;
  image?: string;
  rating?: number;
  tags?: readonly string[];
};
export type ProgrammeTestimonialsData = ProgrammeSectionData & { items: readonly ProgrammeTestimonial[] };

function Attribution({ item, featured }: { item: ProgrammeTestimonial; featured: boolean }) {
  return <figcaption className={`relative mt-7 flex flex-wrap items-center gap-3 border-t pt-6 ${featured ? "border-white/15" : "border-kbc-purple-100"}`}>
    {item.image ? <img src={item.image} alt="" width={48} height={48} loading="lazy" decoding="async" className="size-12 shrink-0 rounded-full object-cover object-top" /> : featured && <span className="grid size-11 place-items-center rounded-full bg-kbc-gold-500 text-sm font-bold text-[var(--color-ink)]">{item.name.split(" ").map((part) => part[0]).join("")}</span>}
    <div className="min-w-0 flex-1"><p className={`font-semibold ${featured ? "text-white" : "text-[var(--color-ink)]"}`}>{item.name}</p><p className={`mt-1 text-xs leading-5 ${featured ? "text-white/75" : "text-[var(--color-muted)]"}`}>{item.role}{item.company && <> · {item.company}</>}</p></div>
    {item.programme && featured && <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase text-kbc-gold-300">{item.programme}</span>}
    {item.rating !== undefined && <span className={`flex w-full gap-1 sm:w-auto ${featured ? "text-kbc-gold-300" : "text-kbc-gold-700"}`} role="img" aria-label={`${item.rating} out of 5 stars`}>{Array.from({ length: item.rating }, (_, i) => <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />)}</span>}
    {item.tags && <ul className="flex w-full flex-wrap gap-2">{item.tags.map((tag) => <li key={tag} className={`rounded-full px-3 py-1 text-xs leading-5 ${featured ? "bg-white/10 text-kbc-gold-300" : "bg-white text-primary"}`}>{tag}</li>)}</ul>}
  </figcaption>;
}

export function ProgrammeTestimonials({ data }: { data: ProgrammeTestimonialsData }) {
  const [featured, ...secondary] = data.items;
  if (!featured) return null;
  return <ProgrammeSection {...data}>
    <figure className="relative mt-12 overflow-hidden rounded-2xl bg-primary-dark p-7 text-white sm:p-10 lg:p-12">
      <Quote className="absolute right-7 top-7 size-20 text-[var(--color-gold)]/15" aria-hidden="true" />
      <blockquote className="relative max-w-5xl text-lg font-medium leading-8 text-white sm:text-xl sm:leading-9">“{featured.quote}”</blockquote>
      <Attribution item={featured} featured />
    </figure>
    <div className="mt-5 grid gap-5 md:grid-cols-2">
      {secondary.map((item) => <figure className="flex flex-col rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-7" key={item.name}>
        <Quote className="size-7 text-primary" aria-hidden="true" />
        <blockquote className="mt-5 flex-1 text-sm leading-7 text-[var(--color-muted)]">“{item.quote}”</blockquote>
        <Attribution item={item} featured={false} />
      </figure>)}
    </div>
  </ProgrammeSection>;
}
