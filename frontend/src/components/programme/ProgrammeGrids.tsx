import type { ReactNode } from "react";
import { Check, HeartHandshake, BriefcaseBusiness, Network } from "lucide-react";
import { CollegeFeatureCard } from "@/components/college/CollegeFeatureCard";
import { CoachCard, type CoachCardProps } from "@/components/common/CoachCard";
import { card } from "@/components/college/layout";
import { ProgrammeSection, type ProgrammeSectionData } from "./ProgrammeSection";

export type ProgrammeItem = { title: string; description?: string; items?: readonly string[]; tags?: readonly string[] };

export function ProgrammeChecklist({ items, inverse = false, primaryChecks = false }: { items: readonly string[]; inverse?: boolean; primaryChecks?: boolean }) {
  return <ul className="mt-5 space-y-3">{items.map((item) => <li className={`flex items-start gap-3 text-sm leading-6 ${inverse ? "text-white/75" : "text-[var(--color-muted)]"}`} key={item}><Check className={`mt-1 size-4 shrink-0 ${inverse && !primaryChecks ? "text-kbc-gold-300" : "text-primary"}`} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export function ProgrammeCardGrid({ items, columns = 3, editorial = false, inverse = false }: { items: readonly ProgrammeItem[]; columns?: 2 | 3 | 4; editorial?: boolean; inverse?: boolean }) {
  const grid = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return <div className={`mt-12 grid ${editorial ? "gap-x-8" : "gap-5"} ${grid}`}>
    {items.map((item, index) => {
      const contents = <>{item.description && <p>{item.description}</p>}{item.items && <ProgrammeChecklist items={item.items} inverse={inverse} />}{item.tags && <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className={`rounded-full px-3 py-1 text-xs ${inverse ? "bg-white/10 text-kbc-gold-300" : "bg-kbc-purple-50 text-primary"}`}>{tag}</span>)}</div>}</>;
      if (editorial) return <CollegeFeatureCard marker={String(index + 1).padStart(2, "0")} title={item.title} inverse={inverse} key={item.title}>{contents}</CollegeFeatureCard>;
      return <article className={`${card} group transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none`} key={item.title}>
        <span className="grid size-11 place-items-center rounded-xl bg-[#f0eafb] text-xs font-bold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
        <div className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{contents}</div>
      </article>;
    })}
  </div>;
}

const benefitIcons = [HeartHandshake, BriefcaseBusiness, Network];

export function ProgrammeBenefits({ data, primaryChecks = false }: { data: ProgrammeSectionData & { items: readonly ProgrammeItem[] }; primaryChecks?: boolean }) {
  return <ProgrammeSection {...data}>
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {data.items.map((item, index) => {
        const Icon = benefitIcons[index % benefitIcons.length];
        return <article className={`rounded-2xl p-7 ${index === 0 ? "bg-primary-dark text-white" : "border border-kbc-purple-100 bg-kbc-purple-50"}`} key={item.title}>
          <Icon className={`size-8 ${index === 0 ? "text-[var(--color-gold)]" : "text-primary"}`} aria-hidden="true" />
          <h3 className={`mt-6 text-2xl font-semibold ${index === 0 ? "text-white" : "text-[var(--color-ink)]"}`}>{item.title}</h3>
          <p className={`mt-3 text-sm leading-6 ${index === 0 ? "text-white/65" : "text-[var(--color-muted)]"}`}>{item.description}</p>
          {item.items && <ProgrammeChecklist items={item.items} inverse={index === 0} primaryChecks={primaryChecks} />}
        </article>;
      })}
    </div>
  </ProgrammeSection>;
}

export type PartnerSector = { title: string; logos: readonly { name: string; image: string }[] };

export function ProgrammePartners({ data }: { data: ProgrammeSectionData & { sectors: readonly PartnerSector[] } }) {
  return <ProgrammeSection {...data} tone="soft">
    <div className="mt-10 space-y-7">{data.sectors.map((sector) => <div key={sector.title}>
      <h3 className="text-base font-semibold text-[var(--color-ink)]">{sector.title}</h3>
      <ul className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">{sector.logos.map((logo) => <li className="flex h-28 items-center justify-center rounded-lg border border-kbc-purple-100 bg-white p-4 shadow-[0_8px_20px_rgba(39,14,73,0.04)] sm:h-32" key={logo.name}>
        <img className="h-20 w-28 max-w-full object-contain sm:h-24 sm:w-32" src={logo.image} alt={logo.name} loading="lazy" decoding="async" />
      </li>)}</ul>
    </div>)}</div>
  </ProgrammeSection>;
}

export function ProgrammePeople({ data, children }: { data: ProgrammeSectionData & { people: readonly (CoachCardProps & { tags?: readonly string[] })[] }; children?: ReactNode }) {
  return <ProgrammeSection {...data} tone="soft">
    <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${data.people.length > 4 ? "xl:grid-cols-3" : "lg:grid-cols-4"}`}>
      {data.people.map((person) => <div key={person.name}><CoachCard {...person} />{person.tags && <p className="mt-3 px-2 text-xs leading-6 text-primary">{person.tags.join(" · ")}</p>}</div>)}
    </div>
    {children}
  </ProgrammeSection>;
}
