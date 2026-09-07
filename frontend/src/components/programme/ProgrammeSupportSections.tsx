import { ArrowRight, ArrowUpRight, Info, ShieldCheck } from "lucide-react";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { section, shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeChecklist, type ProgrammeItem } from "./ProgrammeGrids";
import { ProgrammeSection, type ProgrammeSectionData } from "./ProgrammeSection";

export function ProgrammeOutputs({ data }: { data: ProgrammeSectionData & { items: readonly string[]; image?: string; imageAlt?: string; note?: string } }) {
  return <ProgrammeSection {...data}>
    <div className={`mt-12 grid gap-8 ${data.image ? "lg:grid-cols-[1.15fr_.85fr] lg:items-center" : ""}`}>
      <ul className={`grid gap-3 sm:grid-cols-2 ${data.image ? "" : "lg:grid-cols-3"}`}>{data.items.map((item, index) => <li className="flex items-center gap-4 rounded-2xl border border-kbc-purple-100 bg-white p-5 transition hover:border-kbc-gold-500 hover:shadow-md" key={item}>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-kbc-purple-50 text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-semibold leading-6 text-[var(--color-ink)]">{item}</span>
      </li>)}</ul>
      {data.image && <img src={data.image} alt={data.imageAlt ?? ""} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[3/4]" />}
    </div>
    {data.note && <p className="mt-6 flex items-start gap-3 text-xs leading-6 text-[var(--color-muted)]"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{data.note}</p>}
  </ProgrammeSection>;
}

export function ProgrammeFunding({ data }: { data: ProgrammeSectionData & { items: readonly (ProgrammeItem & { amount: string })[]; note: string } }) {
  return <ProgrammeSection {...data} tone="soft">
    <div className="mt-12 grid gap-6 lg:grid-cols-2">{data.items.map((item, index) => <article className={`rounded-2xl border p-6 sm:p-8 ${index === 0 ? "border-kbc-purple-100 bg-white" : "border-kbc-gold-300 bg-kbc-gold-50"}`} key={item.title}>
      <h3 className="text-xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
      <p className={`mt-6 text-5xl font-semibold tracking-tight ${index === 0 ? "text-primary" : "text-kbc-gold-800"}`}>{item.amount}</p>
      <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
      {item.items && <ProgrammeChecklist items={item.items} />}
    </article>)}</div>
    <p className="mt-6 flex items-start gap-3 rounded-2xl border border-kbc-purple-100 bg-white/80 p-5 text-xs leading-6 text-[var(--color-muted)]"><Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{data.note}</p>
    <div className="mt-8 flex justify-center"><NavigationButton to="/funding-eligibility" className="w-full gap-2 sm:w-auto">Check funding eligibility <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton></div>
  </ProgrammeSection>;
}

export function ProgrammeAlternativeRoute({ data }: { data: { title: string; paragraphs: readonly string[] } }) {
  return <section aria-labelledby="alternative-route-title" className="bg-white pb-16 sm:pb-20 lg:pb-28"><div className={shell}>
    <CollegeCtaPanel id="alternative-route-title" eyebrow="Need an alternative route?" title={data.title} description={data.paragraphs[0]} actions={<NavigationButton to="/book-session" variant="accent" className="w-full gap-2">Book an information session <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>}>
      {data.paragraphs.slice(1).map((paragraph) => <p key={paragraph} className="mt-6 max-w-3xl text-sm leading-7 text-white/70">{paragraph}</p>)}
    </CollegeCtaPanel>
  </div></section>;
}

export function ProgrammeNextSteps({ data }: { data: ProgrammeSectionData & { items: readonly { title: string; description: string; action: { label: string; to: string } }[] } }) {
  return <section id={data.id} className={`${section} bg-white sm:!scroll-mt-64`} aria-labelledby={`${data.id}-title`}><div className={shell}>
    <CollegeCtaPanel id={`${data.id}-title`} eyebrow={data.eyebrow} title={data.title} description={data.description}>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{data.items.map((item, index) => <article className="flex min-w-0 flex-col border-t border-white/20 pt-6" key={item.title}>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-white/70">{item.description}</p>
        <NavigationButton className="mt-6 w-full gap-2" to={item.action.to} variant={index === 0 ? "accent" : "inverse"} newTab={item.action.to.startsWith("https:")}>{item.action.label}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></NavigationButton>
      </article>)}</div>
    </CollegeCtaPanel>
  </div></section>;
}
