import { ArrowRight, Check, Mail, ShieldCheck } from "lucide-react";

import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeCardGrid, ProgrammeChecklist } from "@/components/programme/ProgrammeGrids";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { assessmentData, benefitsData, entryFundingData, finalCtaData, securityData } from "../data";

export function BenefitsSection() {
  return (
    <ProgrammeSection {...benefitsData}>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {benefitsData.groups.map((group, groupIndex) => (
          <article className={`rounded-2xl p-7 sm:p-9 ${groupIndex === 0 ? "bg-primary-dark text-white" : "border border-kbc-purple-100 bg-kbc-purple-50"}`} key={group.title}>
            <h3 className={`text-3xl font-semibold ${groupIndex === 0 ? "text-white" : "text-kbc-purple-950"}`}>{group.title}</h3>
            <ol className={`mt-7 divide-y ${groupIndex === 0 ? "divide-white/15" : "divide-kbc-purple-100"}`}>
              {group.items.map((item, index) => (
                <li className="grid grid-cols-[36px_1fr] gap-4 py-5 first:pt-0 last:pb-0" key={item.title}>
                  <span className={`grid size-9 place-items-center rounded-lg text-xs font-bold ${groupIndex === 0 ? "bg-white/10 text-kbc-gold-300" : "bg-white text-primary"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <div><h4 className={`text-lg font-semibold ${groupIndex === 0 ? "text-white" : "text-kbc-purple-950"}`}>{item.title}</h4><p className={`mt-2 text-sm leading-6 ${groupIndex === 0 ? "text-white/65" : "text-[var(--color-muted)]"}`}>{item.description}</p></div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </ProgrammeSection>
  );
}

export function AssessmentSection() {
  return (
    <ProgrammeSection {...assessmentData} tone="soft" pattern="ibis-wreath">
      <ProgrammeCardGrid items={assessmentData.steps} columns={4} editorial dividers />
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 sm:p-9">
          <h3 className="text-2xl font-semibold text-kbc-purple-950">Assessment approach</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">Assessment is based on practical evidence created throughout the programme.</p>
          <ProgrammeChecklist items={assessmentData.approach} />
        </article>
        <article className="relative isolate overflow-hidden rounded-2xl bg-primary-dark p-7 text-white sm:p-9">
          <ShieldCheck className="size-8 text-kbc-gold-500" aria-hidden="true" />
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-kbc-gold-300">Certificate award</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">{assessmentData.certificate.title}</h3>
          <p className="mt-5 text-sm leading-7 text-white/65">{assessmentData.certificate.description}</p>
        </article>
      </div>
    </ProgrammeSection>
  );
}

export function EntryFundingSection() {
  return (
    <ProgrammeSection {...entryFundingData}>
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <article className="rounded-2xl bg-primary-dark p-7 text-white sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-gold-300">{entryFundingData.primary.eyebrow}</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">{entryFundingData.primary.title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/65">{entryFundingData.primary.description}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">{entryFundingData.primary.checks.map((check) => <li className="flex items-center gap-3 text-sm text-white/75" key={check}><Check className="size-4 shrink-0 text-kbc-gold-500" aria-hidden="true" />{check}</li>)}</ul>
          <NavigationButton className="mt-8 w-full gap-2 sm:w-auto" to="/funding-eligibility" variant="accent">Check apprenticeship eligibility <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
        </article>
        <div className="grid gap-5">
          {entryFundingData.routes.map((route) => <article className="rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-6 sm:p-7" key={route.title}><h3 className="text-xl font-semibold text-kbc-purple-950">{route.title}</h3><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{route.description}</p></article>)}
        </div>
      </div>
    </ProgrammeSection>
  );
}

export function SecuritySection() {
  return (
    <ProgrammeSection {...securityData} tone="dark" pattern="horse-growth">
      <ProgrammeCardGrid items={securityData.items} editorial inverse />
      <p className="mt-8 flex items-start gap-3 border-l-2 border-kbc-gold-500 pl-5 text-sm leading-7 text-white/65"><ShieldCheck className="mt-1 size-5 shrink-0 text-kbc-gold-500" aria-hidden="true" />Employer data requires explicit permission, approved access and human review before external communication or write-back.</p>
    </ProgrammeSection>
  );
}

export function FinalCtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="ai-final-cta-title">
      <div className={shell}>
        <CollegeCtaPanel id="ai-final-cta-title" {...finalCtaData} actions={<>
          <NavigationButton to="/book-session" variant="accent" className="w-full gap-2">Book an information session <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
          <NavigationButton to="/funding-eligibility" variant="inverse" className="w-full gap-2">Check eligibility <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
        </>}>
          <a className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white/75 underline decoration-white/25 underline-offset-4 transition hover:text-kbc-gold-300" href="mailto:office@kentbusinesscollege.org"><Mail className="size-4" aria-hidden="true" />Email the course team</a>
        </CollegeCtaPanel>
      </div>
    </section>
  );
}
