import { ArrowRight, ArrowUpRight, Building2, Check, CircleHelp, Info } from "lucide-react";

import { NavigationButton } from "@/components/navigation";

import { eligibilityGroups, employerBenefits, kbcFundBenefits, setupSteps } from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";

export function FundingSection() {
  return (
    <section id="funding" className={`${section} bg-[var(--color-soft)]`} aria-labelledby="apm-funding-title">
      <div className={shell}>
        <SectionHeading
          id="apm-funding-title"
          eyebrow="Funding routes for eligible learners"
          title="Apprenticeship funding and wider professional development support"
          description="KBC confirms programme suitability, apprenticeship eligibility, employer support and the most appropriate route before enrolment."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-purple-600">Department for Education</p>
              <span className="rounded-full bg-kbc-purple-50 px-3 py-1.5 text-[10px] font-bold uppercase text-primary">DfE funded</span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold text-[var(--color-ink)]">Levy and non-levy employer funding</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>Eligible apprenticeship training costs may be funded through the employer’s levy arrangements</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span><strong>95% for non-levy employers</strong> with 5% employer contribution</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>Education and training delivery</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>End-Point Assessment costs and coaching services</span></li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>Learning materials and portfolio support</span></li>
            </ul>
            <p className="mt-6 rounded-2xl bg-kbc-purple-50 p-5 text-sm leading-6 text-kbc-purple-800">Current non-levy employer contribution example: <strong>£350 total</strong>, or <strong>£35 per month for 10 months</strong>.</p>
          </article>

          <article className="rounded-2xl border border-kbc-gold-300 bg-kbc-gold-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-gold-900">Kent Business College Fund</p>
              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase text-kbc-gold-900">Separate from DfE funding</span>
            </div>
            <p className="mt-5 text-5xl font-semibold text-kbc-gold-800">£1,000</p>
            <h3 className="mt-7 text-xl font-semibold text-[var(--color-ink)]">Additional professional development support</h3>
            <ul className="mt-5 grid gap-x-5 gap-y-2.5 text-sm leading-6 text-[var(--color-muted)] sm:grid-cols-2">
              {kbcFundBenefits.map((item) => <li className="flex gap-2" key={item}><Check className="mt-1 size-4 shrink-0 text-kbc-gold-800" aria-hidden="true" />{item}</li>)}
            </ul>
            <p className="mt-5 text-xs leading-5 text-[var(--color-muted)]">Selected KBC Fund benefits are limited to the first 10 eligible learners per applicable cohort where specified.</p>
            <NavigationButton className="mt-6 w-full gap-2 sm:w-auto" to="/funding-eligibility" variant="accent">See full funding details <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
          </article>
        </div>
        <p className="mt-6 flex items-start gap-3 rounded-2xl border border-kbc-purple-100 bg-white/80 p-5 text-xs leading-6 text-[var(--color-muted)]">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          Funding is subject to current rules, learner eligibility, employer agreement, prior-learning review, residency and work-location checks, programme suitability and written confirmation.
        </p>
      </div>
    </section>
  );
}

export function EligibilitySection() {
  return (
    <section id="eligibility" className={`${section} bg-white`} aria-labelledby="apm-eligibility-title">
      <div className={`${shell} grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16`}>
        <div>
          <SectionHeading
            centered={false}
            id="apm-eligibility-title"
            eyebrow="DfE funding eligibility"
            title="Could this funded route work for you?"
            description="Funding eligibility depends on learner circumstances, paid employment and employer participation."
          />
          <div className="mt-8 grid gap-3">
            <NavigationButton to="/funding-eligibility" className="gap-2 sm:justify-self-start">Check my eligibility <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
            <NavigationButton
              to="mailto:office@kentbusinesscollege.org?subject=Funding%20advice%20enquiry%20%E2%80%94%20Associate%20Project%20Manager%20Level%204"
              external
              variant="secondary"
              className="gap-2 sm:justify-self-start"
              ariaLabel="Email a funding adviser at office@kentbusinesscollege.org"
            >
              Speak to a funding adviser <ArrowUpRight className="size-4" aria-hidden="true" />
            </NavigationButton>
          </div>
          <p className="mt-5 text-xs leading-5 text-[var(--color-muted)]">Initial guidance only. Final eligibility and funding are confirmed through formal assessment.</p>
        </div>
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {eligibilityGroups.map((group) => (
            <article className="border-t border-kbc-purple-200 pt-5" key={group.number}>
              <div className="flex items-center gap-3"><span className="text-sm font-bold text-primary">{group.number}</span><h3 className="text-lg font-semibold text-[var(--color-ink)]">{group.title}</h3></div>
              <ul className="mt-4 space-y-2">{group.points.map((point) => <li className="flex items-start gap-2 text-sm leading-6 text-[var(--color-muted)]" key={point}><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-kbc-gold-500" />{point}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="rounded-2xl bg-kbc-purple-50 p-6 lg:col-start-2">
          <h3 className="text-xl font-semibold text-[var(--color-ink)]">Professional development at any stage of your career</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">Apprenticeships are professional, work-based training programmes for eligible employees. They are not restricted by age, seniority or maximum salary; the programme must be suitable for the learner’s role and development needs.</p>
        </div>
      </div>
    </section>
  );
}

export function EmployerSection() {
  return (
    <section id="employers" className={`${section} bg-primary-dark text-white`} aria-labelledby="apm-employers-title">
      <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16`}>
        <div>
          <SectionHeading
            id="apm-employers-title"
            eyebrow="For employers"
            title="Develop project capability without taking people away from the work"
            description="Use the programme to develop employees already contributing to projects, strengthen core project-management capability and connect learning directly to organisational responsibilities."
            inverse
          />
          <div className="mt-8 grid gap-3">
            <NavigationButton to="/employer-agreement" variant="accent" className="gap-2 sm:justify-self-start">Discuss this programme for your team <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
            <NavigationButton to="/contact" variant="inverse" className="gap-2 sm:justify-self-start">Speak to an employer adviser <ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
          </div>
        </div>
        <div className="grid gap-4">
          {employerBenefits.map((benefit, index) => (
            <article className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-white/15 bg-white/[.06] p-5 sm:p-6" key={benefit.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-kbc-gold-500 text-sm font-bold text-[var(--color-ink)]">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 className="text-lg font-semibold text-white">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-white/65">{benefit.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SetupSection() {
  return (
    <section id="setup" className={`${section} bg-kbc-purple-50`} aria-labelledby="apm-setup-title">
      <div className={shell}>
        <SectionHeading
          id="apm-setup-title"
          eyebrow="For employers"
          title="Setting up the funded route"
          description="Four clear steps to enrol your team through the Apprenticeship Service. KBC supports you at every stage."
        />
        <ol className="mt-12 grid gap-5 lg:grid-cols-2">
          {setupSteps.map((step) => (
            <li className="rounded-2xl border border-kbc-purple-100 bg-white p-6 shadow-sm sm:p-7" key={step.number}>
              <div className="flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">{step.number}</span><div><h3 className="text-xl font-semibold text-[var(--color-ink)]">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p></div></div>
              {"cta" in step && step.cta && (
                <NavigationButton className="mt-6 w-full gap-2 sm:w-auto" to={step.cta.href} external={"external" in step.cta ? step.cta.external : false} newTab={"external" in step.cta ? step.cta.external : false}>
                  {step.cta.label} {"external" in step.cta && step.cta.external ? <ArrowUpRight className="size-4" aria-hidden="true" /> : <ArrowRight className="size-4" aria-hidden="true" />}
                </NavigationButton>
              )}
              {"ukprn" in step && step.ukprn && (
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-kbc-gold-50 p-4"><Building2 className="size-5 shrink-0 text-kbc-gold-800" aria-hidden="true" /><p className="text-xs leading-5 text-kbc-purple-800"><strong className="block text-sm text-[var(--color-ink)]">KBC UKPRN: {step.ukprn}</strong>Enter this number when adding KBC to your Apprenticeship Service account.</p></div>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-kbc-purple-100 bg-white p-6">
          <CircleHelp className="size-6 shrink-0 text-primary" aria-hidden="true" />
          <div><h3 className="font-semibold text-[var(--color-ink)]">Need help with the Apprenticeship Service?</h3><p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">KBC can guide you through creating an account, adding KBC as a training provider, and understanding your levy balance. <a href="/contact" className="font-semibold text-primary underline underline-offset-4 hover:text-primary-dark">Speak to our employer team</a> for personalised support.</p></div>
        </div>
      </div>
    </section>
  );
}
