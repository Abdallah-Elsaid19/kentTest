import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowRight, ArrowUpRight, Building2, Check, CircleHelp, Info } from "lucide-react";

import { NavigationButton } from "@/components/navigation";

import { eligibilityGroups, employerBenefits, kbcFundBenefits, setupSteps } from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";

export function FundingSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, kbcFundBenefits });

  return cms.render((
    <section id="funding" className={`${cmsValues.section} bg-[var(--color-soft)]`} aria-labelledby="apm-funding-title">
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-funding-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.eyebrow_001")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.title_002")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.description_003")}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-purple-600">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_004")}</p>
              <span className="rounded-full bg-kbc-purple-50 px-3 py-1.5 text-[10px] font-bold uppercase text-primary">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_005")}</span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold text-[var(--color-ink)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_006")}</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_007")}</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span><strong>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_008")}</strong> {cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_009")}</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_010")}</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_011")}</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_012")}</span></li>
            </ul>
            <p className="mt-6 rounded-2xl bg-kbc-purple-50 p-5 text-sm leading-6 text-kbc-purple-800">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_013")}<strong>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_014")}</strong>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_015")}<strong>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_016")}</strong>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_017")}</p>
          </article>

          <article className="rounded-2xl border border-kbc-gold-300 bg-kbc-gold-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-gold-900">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_018")}</p>
              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase text-kbc-gold-900">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_019")}</span>
            </div>
            <p className="mt-5 text-5xl font-semibold text-kbc-gold-800">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_020")}</p>
            <h3 className="mt-7 text-xl font-semibold text-[var(--color-ink)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_021")}</h3>
            <ul className="mt-5 grid gap-x-5 gap-y-2.5 text-sm leading-6 text-[var(--color-muted)] sm:grid-cols-2">
              {cmsValues.kbcFundBenefits.map((item) => <li className="flex gap-2" key={item}><Check className="mt-1 size-4 shrink-0 text-kbc-gold-800" aria-hidden="true" />{item}</li>)}
            </ul>
            <p className="mt-5 text-xs leading-5 text-[var(--color-muted)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_022")}</p>
            <NavigationButton className="mt-6 w-full gap-2 sm:w-auto" to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.to_023")} variant="accent">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_024")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
          </article>
        </div>
        <p className="mt-6 flex items-start gap-3 rounded-2xl border border-kbc-purple-100 bg-white/80 p-5 text-xs leading-6 text-[var(--color-muted)]">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          {cms.text("programme_apm_l4.pages_associate_project_manager_page_com_funding_section.text_025")}</p>
      </div>
    </section>
  ));
}

export function EligibilitySection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, eligibilityGroups });

  return cms.render((
    <section id="eligibility" className={`${cmsValues.section} bg-white`} aria-labelledby="apm-eligibility-title">
      <div className={`${cmsValues.shell} grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16`}>
        <div>
          <SectionHeading
            centered={false}
            id="apm-eligibility-title"
            eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.eyebrow_026")}
            title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.title_027")}
            description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.description_028")}
          />
          <div className="mt-8 grid gap-3">
            <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.to_029")} className="gap-2 sm:justify-self-start">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.text_030")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
            <NavigationButton
              to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.to_031")}
              external
              variant="secondary"
              className="gap-2 sm:justify-self-start"
              ariaLabel="Email a funding adviser at office@kentbusinesscollege.org"
            >
              {cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.text_032")}<ArrowUpRight className="size-4" aria-hidden="true" />
            </NavigationButton>
          </div>
          <p className="mt-5 text-xs leading-5 text-[var(--color-muted)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.text_033")}</p>
        </div>
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {cmsValues.eligibilityGroups.map((group) => (
            <article className="border-t border-kbc-purple-200 pt-5" key={group.number}>
              <div className="flex items-center gap-3"><span className="text-sm font-bold text-primary">{group.number}</span><h3 className="text-lg font-semibold text-[var(--color-ink)]">{group.title}</h3></div>
              <ul className="mt-4 space-y-2">{group.points.map((point) => <li className="flex items-start gap-2 text-sm leading-6 text-[var(--color-muted)]" key={point}><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-kbc-gold-500" />{point}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="rounded-2xl bg-kbc-purple-50 p-6 lg:col-start-2">
          <h3 className="text-xl font-semibold text-[var(--color-ink)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.text_034")}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section.text_035")}</p>
        </div>
      </div>
    </section>
  ));
}

export function EmployerSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, employerBenefits });

  return cms.render((
    <section id="employers" className={`${cmsValues.section} bg-primary-dark text-white`} aria-labelledby="apm-employers-title">
      <div className={`${cmsValues.shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16`}>
        <div>
          <SectionHeading
            id="apm-employers-title"
            eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_employer_section.eyebrow_036")}
            title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_employer_section.title_037")}
            description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_employer_section.description_038")}
            inverse
          />
          <div className="mt-8 grid gap-3">
            <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_employer_section.to_039")} variant="accent" className="gap-2 sm:justify-self-start">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_employer_section.text_040")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
            <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_employer_section.to_041")} variant="inverse" className="gap-2 sm:justify-self-start">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_employer_section.text_042")}<ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
          </div>
        </div>
        <div className="grid gap-4">
          {cmsValues.employerBenefits.map((benefit, index) => (
            <article className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-white/15 bg-white/[.06] p-5 sm:p-6" key={benefit.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-kbc-gold-500 text-sm font-bold text-[var(--color-ink)]">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 className="text-lg font-semibold text-white">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-white/65">{benefit.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  ));
}

export function SetupSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, setupSteps });

  return cms.render((
    <section id="setup" className={`${cmsValues.section} bg-kbc-purple-50`} aria-labelledby="apm-setup-title">
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-setup-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.eyebrow_043")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.title_044")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.description_045")}
        />
        <ol className="mt-12 grid gap-5 lg:grid-cols-2">
          {cmsValues.setupSteps.map((step) => (
            <li className="rounded-2xl border border-kbc-purple-100 bg-white p-6 shadow-sm sm:p-7" key={step.number}>
              <div className="flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">{step.number}</span><div><h3 className="text-xl font-semibold text-[var(--color-ink)]">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p></div></div>
              {"cta" in step && step.cta && (
                <NavigationButton className="mt-6 w-full gap-2 sm:w-auto" to={step.cta.href} external={"external" in step.cta ? step.cta.external : false} newTab={"external" in step.cta ? step.cta.external : false}>
                  {step.cta.label} {"external" in step.cta && step.cta.external ? <ArrowUpRight className="size-4" aria-hidden="true" /> : <ArrowRight className="size-4" aria-hidden="true" />}
                </NavigationButton>
              )}
              {"ukprn" in step && step.ukprn && (
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-kbc-gold-50 p-4"><Building2 className="size-5 shrink-0 text-kbc-gold-800" aria-hidden="true" /><p className="text-xs leading-5 text-kbc-purple-800"><strong className="block text-sm text-[var(--color-ink)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.text_046")}{step.ukprn}</strong>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.text_047")}</p></div>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-kbc-purple-100 bg-white p-6">
          <CircleHelp className="size-6 shrink-0 text-primary" aria-hidden="true" />
          <div><h3 className="font-semibold text-[var(--color-ink)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.text_048")}</h3><p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.text_049")}<a href={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.href_050")} className="font-semibold text-primary underline underline-offset-4 hover:text-primary-dark">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.text_051")}</a> {cms.text("programme_apm_l4.pages_associate_project_manager_page_com_setup_section.text_052")}</p></div>
        </div>
      </div>
    </section>
  ));
}
