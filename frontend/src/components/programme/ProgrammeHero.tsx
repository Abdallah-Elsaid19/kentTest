import { ArrowRight, BadgeCheck, BriefcaseBusiness, Check, Download } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProgrammeInterestData } from "./ProgrammeInterestDialog";

import { CollegeHeroSurface } from "@/components/college/CollegeHeroSurface";
import { shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";

export type ProgrammeHeroData = {
  titleId: string;
  hero: { eyebrow: string; title: string; accent: string; lead: string; fundingTitle: string; fundingDescription: string; audience: string; catalogue: string; image: string };
  cohorts: readonly { id: string; label: string; upcoming: boolean }[];
  highlights: readonly { title: string; description: string }[];
  commitments: readonly { label: string; description: string }[];
  marks?: readonly { name: string; image: string }[];
  secondaryAction?: { label: string; to: string };
  cohortAction?: { label: string; to: string };
  interest?: ProgrammeInterestData;
};

const ProgrammeInterestDialog = lazy(() => import("./ProgrammeInterestDialog"));

function HeroActions({ hero, secondaryAction, className = "" }: Pick<ProgrammeHeroData, "hero" | "secondaryAction"> & { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
    <div className="flex w-full flex-col justify-center gap-3 sm:flex-row sm:flex-wrap xl:justify-start">
      <NavigationButton to="/book-session" variant="accent" className="w-full gap-3 !bg-[var(--color-gold)] !text-primary-dark hover:!bg-kbc-gold-300 sm:w-auto">
        Book an information session <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </NavigationButton>
      <NavigationButton to={secondaryAction?.to ?? "/funding-eligibility"} variant="inverse" className="w-full gap-3 sm:w-auto">
        {secondaryAction?.label ?? "Check funding eligibility"} <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </NavigationButton>
    </div>
    <a href={hero.catalogue} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-[var(--color-gold)] focus-visible:outline-offset-4 focus-visible:outline-white">
      Download Catalogue <Download className="size-4" aria-hidden="true" />
    </a>
    </div>
  );
}

export function ProgrammeHero({ titleId, hero, cohorts, highlights: heroProgrammeHighlights, commitments: heroProgrammeCommitments, marks: accreditationMarks = [], secondaryAction, cohortAction, interest }: ProgrammeHeroData) {
  const navigate = useNavigate();
  const [selectedCohort, setSelectedCohort] = useState(cohorts.find((cohort) => cohort.upcoming)?.id ?? cohorts[0]?.id ?? "");
  const [interestOpen, setInterestOpen] = useState(false);

  return (
    <>
      <CollegeHeroSurface image={hero.image} titleId={titleId} overlay="light">
        <div className={`${shell} grid items-start gap-10 pb-8 sm:gap-12 xl:grid-cols-[minmax(0,1fr)_560px] xl:gap-7`}>
          <div className="mx-auto flex min-w-0 max-w-[760px] flex-col items-center text-center xl:mx-0 xl:items-start xl:text-left">
            <p className="relative mb-6 w-fit pb-4 text-xs font-bold uppercase leading-5 tracking-widest text-[var(--color-gold)] after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:h-[11px] after:w-[190px] after:-translate-x-1/2 after:rounded-t-[50%] after:border-t-[1.5px] after:border-current">{hero.eyebrow}</p>
            <h1 id={titleId} className="w-full break-words text-5xl font-medium leading-none tracking-tight text-white sm:text-[68px] lg:text-[82px] xl:text-[68px] 2xl:text-[74px]">
              {hero.title} <span className="text-[var(--color-gold)]">{hero.accent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{hero.lead}</p>
            <div className="mt-7 flex w-full max-w-2xl items-start gap-3 border-y border-white/20 py-5 text-left">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
              <p className="text-sm leading-6 text-white/75"><strong className="block font-semibold text-white">{hero.fundingTitle}</strong>{hero.fundingDescription}</p>
            </div>
            <HeroActions hero={hero} secondaryAction={secondaryAction} className="mt-7 hidden xl:block" />
            <p className="mt-6 flex max-w-2xl items-start gap-2 text-left text-sm leading-6 text-white/65"><BriefcaseBusiness className="mt-0.5 size-4 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />{hero.audience}</p>
          </div>

          <aside className="rounded-[30px] border border-white/20 bg-white/[.055] p-5 shadow-[0_28px_80px_rgba(9,2,20,.3)] backdrop-blur-md sm:p-6 xl:w-full xl:max-w-[560px] xl:justify-self-end [@media(min-width:1400px)]:!w-[600px] [@media(min-width:1400px)]:!max-w-none [@media(min-width:1400px)]:translate-x-8" aria-label="Choose your preferred start date">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-kbc-gold-300">Upcoming cohorts</p>
            <h2 className="mt-2 text-[26px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[30px] xl:whitespace-nowrap">Choose your preferred start date</h2>
            <p className="mt-1.5 text-xs leading-5 text-white/60 sm:text-sm">{interest ? "Select an intake to register your interest." : "Select your preferred intake to book an information session."}</p>

            <div className="mt-4 grid grid-cols-3 gap-2.5" role="group" aria-label="Preferred cohort">
              {cohorts.map((cohort) => {
                const selected = selectedCohort === cohort.id;
                return (
                  <button
                    type="button"
                    key={cohort.id}
                    onClick={() => { setSelectedCohort(cohort.id); if (cohortAction) navigate(cohortAction.to); else if (interest) setInterestOpen(true); }}
                    aria-pressed={selected}
                    className={`group relative flex min-h-[88px] flex-col items-center justify-center overflow-visible rounded-xl border px-2 py-3 text-center transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-500 ${selected ? "border-kbc-gold-500 bg-white/[.065] shadow-[0_0_0_1px_rgba(214,176,78,.12)]" : "border-white/15 bg-kbc-purple-950/25 hover:border-kbc-gold-500 hover:bg-white/[.065]"}`}
                  >
                    {cohort.upcoming && <span className="absolute -right-1 -top-3 rounded-full bg-kbc-gold-400 px-3 py-1 text-[10px] font-bold uppercase text-kbc-purple-950">Next</span>}
                    <span className="flex flex-col items-center transition-opacity duration-200 group-hover:opacity-0">
                      <span className="text-sm font-bold text-white sm:text-base">{cohort.label}</span>
                      {cohort.upcoming && <span className="mt-2 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.04em] text-kbc-gold-300 sm:text-[10px]"><span className="size-1.5 rounded-full bg-kbc-gold-400" />Upcoming cohort</span>}
                    </span>
                    <span className="pointer-events-none absolute inset-3 flex items-center justify-center text-xs font-bold leading-4 text-kbc-gold-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:text-sm">
                      {cohortAction?.label ?? (interest ? "Save your place" : <>Book information<br className="hidden sm:block" /> session</>)} <ArrowRight className="ml-1 size-4 shrink-0" aria-hidden="true" />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {heroProgrammeHighlights.map((item) => (
                <article className="rounded-xl border border-white/10 bg-kbc-purple-950/25 p-3" key={item.title}>
                  <h3 className="text-sm font-bold leading-5 text-white sm:text-base">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-4 text-white/60">{item.description}</p>
                </article>
              ))}
            </div>

            <ul className="mt-4 space-y-3 border-y border-white/15 py-4">
              {heroProgrammeCommitments.map((item) => (
                <li className="grid grid-cols-[20px_1fr] gap-2.5 text-[11px] leading-[1.55] text-white/65 sm:text-xs" key={item.label}>
                  <span className="grid size-5 place-items-center rounded-md bg-primary text-white"><Check className="size-3.5" strokeWidth={2.2} aria-hidden="true" /></span>
                  <p><strong className="text-white">{item.label}</strong> {item.description}</p>
                </li>
              ))}
            </ul>

            {accreditationMarks.length > 0 && <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.1em] text-white/55">Accredited & recognised by</p>}
            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {accreditationMarks.map((mark) => (
                <div className="flex items-center justify-center" key={mark.name}>
                  <img src={mark.image} alt={mark.name} decoding="async" className="h-[100px] w-[140px] max-w-full object-contain" />
                </div>
              ))}
            </div>
          </aside>
          <HeroActions hero={hero} secondaryAction={secondaryAction} className="mx-auto max-w-[760px] text-center xl:hidden" />
        </div>
      </CollegeHeroSurface>
      {interest && interestOpen && <Suspense fallback={<p role="status" className="fixed inset-x-4 bottom-4 z-50 rounded-lg bg-white p-4 text-center text-primary shadow-lg">Loading registration form…</p>}><ProgrammeInterestDialog data={interest} cohort={cohorts.find((cohort) => cohort.id === selectedCohort)?.label ?? ""} cohorts={cohorts} onClose={() => setInterestOpen(false)} /></Suspense>}
    </>
  );
}
