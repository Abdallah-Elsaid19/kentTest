import { ArrowRight, Award, BadgeCheck, BriefcaseBusiness, Check, Download, UserRoundCheck } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProgrammeInterestData } from "./ProgrammeInterestDialog";

import { CollegeHeroSurface } from "@/components/college/CollegeHeroSurface";
import { shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";

export type ProgrammeHeroData = {
  titleId: string;
  layout?: "split" | "left";
  hero: { eyebrow: string; title: string; accent: string; titleSuffix?: string; badge?: string; lead: string; fundingTitle: string; fundingDescription: string; audience: string; audienceLabel?: string; catalogue: string; catalogueLabel?: string; image: string };
  cohorts: readonly { id: string; label: string; upcoming: boolean }[];
  highlights: readonly { title: string; description: string; marker?: string }[];
  commitments: readonly { label: string; description: string }[];
  marks?: readonly { name: string; image: string }[];
  secondaryAction?: { label: string; to: string };
  primaryAction?: { label: string; to: string };
  actionNote?: string;
  cohortAction?: { label: string; to: string };
  cohortEyebrow?: string | null;
  cohortTitle?: string;
  cohortTitleAsBadge?: boolean;
  cohortDescription?: string | null;
  qualificationImage?: { name: string; image: string };
  longTitle?: boolean;
  mobileActionsAfterLead?: boolean;
  audienceTabletAlign?: "left" | "center";
  audienceBeforeActions?: boolean;
  interest?: ProgrammeInterestData;
  overlay?: "default" | "light" | "clear";
};

const ProgrammeInterestDialog = lazy(() => import("./ProgrammeInterestDialog"));

function HeroActions({ hero, primaryAction, secondaryAction, actionNote, align = "center", className = "" }: Pick<ProgrammeHeroData, "hero" | "primaryAction" | "secondaryAction" | "actionNote"> & { align?: "left" | "center"; className?: string }) {
  return (
    <div className={`w-full ${className}`}>
    <div className={`flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap ${align === "left" ? "justify-start" : "justify-center xl:justify-start"}`}>
      <NavigationButton to={primaryAction?.to ?? "/book-session"} variant="accent" className="w-full gap-3 !bg-[var(--color-gold)] !text-primary-dark hover:!bg-kbc-gold-300 sm:w-auto">
        {primaryAction?.label ?? "Book an information session"} <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </NavigationButton>
      <NavigationButton to={secondaryAction?.to ?? "/funding-eligibility"} variant="inverse" className="w-full gap-3 sm:w-auto">
        {secondaryAction?.label ?? "Check funding eligibility"} <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </NavigationButton>
    </div>
    {hero.catalogue && <a href={hero.catalogue} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-[var(--color-gold)] focus-visible:outline-offset-4 focus-visible:outline-white">
      {hero.catalogueLabel ?? "Download Catalogue"} <Download className="size-4" aria-hidden="true" />
    </a>}
    {actionNote && <p className="mt-3 text-xs leading-6 text-white/75">{actionNote}</p>}
    </div>
  );
}

export function ProgrammeHero({ titleId, layout = "split", hero, cohorts, highlights: heroProgrammeHighlights, commitments: heroProgrammeCommitments, marks: accreditationMarks = [], primaryAction, secondaryAction, actionNote, cohortAction, cohortEyebrow, cohortTitle, cohortTitleAsBadge = false, cohortDescription, qualificationImage, longTitle = false, mobileActionsAfterLead = false, audienceTabletAlign = "center", audienceBeforeActions = false, interest, overlay = "light" }: ProgrammeHeroData) {
  const navigate = useNavigate();
  const [selectedCohort, setSelectedCohort] = useState(cohorts.find((cohort) => cohort.upcoming)?.id ?? cohorts[0]?.id ?? "");
  const [interestOpen, setInterestOpen] = useState(false);
  const leftAligned = layout === "left";
  const badge = hero.badge && <p className={leftAligned ? "mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-kbc-gold-500/15 px-3 py-1.5 text-xs font-semibold uppercase leading-5 text-kbc-gold-200 sm:text-sm" : "mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white"}>{leftAligned && <span className="size-2 shrink-0 rounded-full bg-kbc-gold-400" aria-hidden="true" />}{hero.badge}</p>;
  const audience = <p className={leftAligned ? "mt-6 max-w-[860px] text-lg font-semibold leading-relaxed text-white sm:text-xl lg:text-2xl" : `mt-6 flex max-w-2xl items-start gap-2 text-left text-sm leading-6 text-white/65 ${audienceTabletAlign === "left" ? "sm:max-xl:w-full" : ""}`}>{!leftAligned && <BriefcaseBusiness className="mt-0.5 size-4 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />}<span>{hero.audienceLabel && <strong className="block font-semibold text-white">{hero.audienceLabel}</strong>}{hero.audience}</span></p>;

  return (
    <>
      <CollegeHeroSurface image={hero.image} titleId={titleId} overlay={overlay}>
        <div className={`${shell} ${leftAligned ? "pb-8" : "grid items-start gap-10 pb-8 sm:gap-12 xl:grid-cols-[minmax(0,1fr)_560px] xl:gap-7"}`}>
          <div className={`flex min-w-0 flex-col ${leftAligned ? "max-w-[1000px] items-start text-left" : "mx-auto max-w-[760px] items-center text-center xl:mx-0 xl:items-start xl:text-left"} ${overlay === "clear" ? "[text-shadow:0_2px_14px_rgba(20,5,40,.75)]" : ""}`}>
            {leftAligned && badge}
            <p className={leftAligned ? "mb-4 text-sm font-bold uppercase leading-6 tracking-widest text-[var(--color-gold)] sm:text-base lg:text-lg" : "relative mb-6 w-fit pb-4 text-xs font-bold uppercase leading-5 tracking-widest text-[var(--color-gold)] after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:h-[11px] after:w-[190px] after:-translate-x-1/2 after:rounded-t-[50%] after:border-t-[1.5px] after:border-current"}>{hero.eyebrow}</p>
            {!leftAligned && badge}
            <h1 id={titleId} className={`w-full break-words leading-none tracking-tight text-white ${leftAligned ? "text-[44px] font-semibold sm:text-[64px] lg:text-[80px] xl:text-[90px]" : longTitle ? "text-4xl font-medium sm:text-6xl lg:text-[68px] xl:text-6xl 2xl:text-[68px]" : "text-5xl font-medium sm:text-[68px] lg:text-[82px] xl:text-[68px] 2xl:text-[74px]"}`}>
              {hero.title} <span className="text-[var(--color-gold)]">{hero.accent}</span>{hero.titleSuffix && <> {hero.titleSuffix}</>}
            </h1>
            <p className={leftAligned ? "mt-6 text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-[28px]" : "mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"}>{hero.lead}</p>
            {leftAligned && audience}
            {!leftAligned && mobileActionsAfterLead && <HeroActions hero={hero} primaryAction={primaryAction} secondaryAction={secondaryAction} actionNote={actionNote} className="mt-7 xl:hidden" />}
            <div className={leftAligned ? "mt-8 w-full text-left" : "mt-7 flex w-full max-w-2xl items-start gap-3 border-y border-white/20 py-5 text-left"}>
              {!leftAligned && <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />}
              <p className="text-sm leading-6 text-white/90"><strong className={leftAligned ? "mb-3 block text-2xl font-bold leading-tight text-[var(--color-gold)] sm:text-3xl lg:text-4xl" : "block font-semibold text-white"}>{hero.fundingTitle}</strong>{hero.fundingDescription}</p>
            </div>
            {!leftAligned && !audienceBeforeActions && <HeroActions hero={hero} primaryAction={primaryAction} secondaryAction={secondaryAction} actionNote={actionNote} className="mt-7 hidden xl:block" />}
            {!leftAligned && audience}
            {!leftAligned && audienceBeforeActions && <HeroActions hero={hero} primaryAction={primaryAction} secondaryAction={secondaryAction} actionNote={actionNote} className="mt-7 hidden xl:block" />}
            {leftAligned && <>
              <HeroActions hero={hero} primaryAction={primaryAction} secondaryAction={secondaryAction} actionNote={actionNote} align="left" className="mt-9" />
              <ul className="mt-7 grid max-w-[860px] gap-x-8 gap-y-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">{heroProgrammeCommitments.map((item, index) => {
                const Icon = [BadgeCheck, Award, UserRoundCheck][index % 3];
                return <li className="flex items-start gap-3 text-sm leading-6 text-white sm:text-base" key={item.label}><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-kbc-gold-500/15 text-kbc-gold-400"><Icon className="size-4" aria-hidden="true" /></span><p><strong className="block font-semibold">{item.label}</strong>{item.description}</p></li>;
              })}</ul>
            </>}
          </div>

          {!leftAligned && <aside className="rounded-[30px] border border-white/20 bg-white/[.055] p-5 shadow-[0_28px_80px_rgba(9,2,20,.3)] backdrop-blur-md sm:p-6 xl:w-full xl:max-w-[560px] xl:justify-self-end [@media(min-width:1400px)]:!w-[600px] [@media(min-width:1400px)]:!max-w-none [@media(min-width:1400px)]:translate-x-8" aria-label={cohortTitle ?? "Choose your preferred start date"}>
            {cohortEyebrow !== null && <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-kbc-gold-300">{cohortEyebrow ?? "Upcoming cohorts"}</p>}
            <h2 className={cohortTitleAsBadge ? "mx-auto flex w-fit max-w-full justify-center rounded-full bg-kbc-gold-400 px-4 py-2 text-center text-xs font-semibold leading-5 text-kbc-purple-950 sm:text-sm sm:leading-6" : "mt-2 text-[26px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[30px]"}>{cohortTitle ?? "Choose your preferred start date"}</h2>
            {cohortDescription !== null && <p className="mt-1.5 text-xs leading-5 text-white/60 sm:text-sm">{cohortDescription ?? (interest ? "Select an intake to register your interest." : "Select your preferred intake to book an information session.")}</p>}
            {qualificationImage && <img src={qualificationImage.image} alt={qualificationImage.name} width={200} height={200} decoding="async" className="mx-auto mt-5 h-40 w-40 object-contain sm:h-48 sm:w-48" />}

            {cohorts.length > 0 && <div className={`mt-4 grid gap-2.5 ${cohorts.length === 1 ? "grid-cols-1" : "grid-cols-3"}`} role="group" aria-label="Preferred cohort">
              {cohorts.map((cohort) => {
                const selected = selectedCohort === cohort.id;
                return (
                  <button
                    type="button"
                    aria-label={cohortAction ? `${cohortAction.label}: ${cohort.label}` : undefined}
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
                      {cohortAction?.label ?? "Save your place"} <ArrowRight className="ml-1 size-4 shrink-0" aria-hidden="true" />
                    </span>
                  </button>
                );
              })}
            </div>}

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {heroProgrammeHighlights.map((item) => (
                <article className="rounded-xl border border-white/10 bg-kbc-purple-950/25 p-3" key={item.title}>
                  {item.marker && <p className="mb-2 text-xs font-bold text-kbc-gold-300">{item.marker}</p>}
                  <h3 className="text-sm font-bold leading-5 text-white sm:text-base">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-4 text-white/60">{item.description}</p>
                </article>
              ))}
            </div>

            {heroProgrammeCommitments.length > 0 && <ul className="mt-4 space-y-3 border-y border-white/15 py-4">
              {heroProgrammeCommitments.map((item) => (
                <li className="grid grid-cols-[20px_1fr] gap-2.5 text-[11px] leading-[1.55] text-white/65 sm:text-xs" key={item.label}>
                  <span className="grid size-5 place-items-center rounded-md bg-primary text-white"><Check className="size-3.5" strokeWidth={2.2} aria-hidden="true" /></span>
                  <p><strong className="text-white">{item.label}</strong> {item.description}</p>
                </li>
              ))}
            </ul>}

            {accreditationMarks.length > 0 && <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.1em] text-white/55">Accredited & recognised by</p>}
            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {accreditationMarks.map((mark) => (
                <div className="flex items-center justify-center" key={mark.name}>
                  <img src={mark.image} alt={mark.name} decoding="async" className="h-[100px] w-[140px] max-w-full object-contain" />
                </div>
              ))}
            </div>
          </aside>}
          {!leftAligned && !mobileActionsAfterLead && <HeroActions hero={hero} primaryAction={primaryAction} secondaryAction={secondaryAction} actionNote={actionNote} className="mx-auto max-w-[760px] text-center xl:hidden" />}
        </div>
      </CollegeHeroSurface>
      {leftAligned && heroProgrammeHighlights.length > 0 && <div className="border-b border-kbc-purple-100 bg-kbc-purple-50 py-8"><div className={shell}><dl className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">{heroProgrammeHighlights.map(item => <div key={item.title}><dt className="font-semibold text-primary-dark">{item.title}</dt><dd className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</dd></div>)}</dl></div></div>}
      {interest && interestOpen && <Suspense fallback={<p role="status" className="fixed inset-x-4 bottom-4 z-50 rounded-lg bg-white p-4 text-center text-primary shadow-lg">Loading registration form…</p>}><ProgrammeInterestDialog data={interest} cohort={cohorts.find((cohort) => cohort.id === selectedCohort)?.label ?? ""} cohorts={cohorts} onClose={() => setInterestOpen(false)} /></Suspense>}
    </>
  );
}
