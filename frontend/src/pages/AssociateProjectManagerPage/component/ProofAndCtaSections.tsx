import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { ArrowRight, Info } from "lucide-react";

import { NavigationButton } from "@/components/navigation";

import { hero, recognition } from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";

export function RecognitionSection() {
  return (
    <section id="recognition" className={`${section} bg-kbc-purple-50`} aria-labelledby="apm-recognition-title">
      <div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16`}>
        <div>
          <SectionHeading
            id="apm-recognition-title"
            eyebrow="Professional standards & progression"
            title="Professional development connected to recognised practice"
            description="Selected KBC programme elements connect learning with relevant professional standards, qualifications and progression opportunities."
          />
          <p className="mt-7 flex items-start gap-3 rounded-2xl border border-kbc-purple-100 bg-white p-5 text-xs leading-6 text-[var(--color-muted)]"><Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />Professional qualifications, membership and Chartered progression remain subject to relevant body requirements.</p>
        </div>
        <div className="grid gap-4">
          {recognition.map((item) => (
            <article className="grid grid-cols-[64px_1fr] gap-5 rounded-2xl border border-kbc-purple-100 bg-white p-5 sm:p-6" key={item.name}>
              <span className="grid size-16 place-items-center rounded-xl bg-primary-dark text-sm font-bold text-[var(--color-gold)]">{item.mark}</span>
              <div><div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.name}</h3><span className="rounded-full bg-kbc-gold-100 px-3 py-1 text-[10px] font-bold uppercase text-kbc-gold-900">{item.relationship}</span></div><p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="apm-next-steps" className={`${section} bg-white`} aria-labelledby="apm-final-title">
      <div className={shell}>
        <CollegeCtaPanel
          id="apm-final-title"
          eyebrow="Take the next step"
          title="Discover whether this Level 4 route is right for you"
        >
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/[.06] p-6 text-left sm:flex-row">
            <div><p className="font-semibold text-white">Developing someone in your team?</p><p className="mt-1 text-sm text-white/55">Discuss the programme as an employer route.</p></div>
            <div className="grid w-full shrink-0 gap-3 sm:w-auto">
              <NavigationButton to="/employer-agreement" variant="inverse" className="w-full gap-2">Speak to KBC as an employer <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
              <NavigationButton to="/funding-eligibility" variant="accent" className="w-full justify-between gap-2 px-6">Check funding eligibility <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></NavigationButton>
            </div>
          </div>
          <div className="mt-8 text-xs leading-5 text-white/50"><p>Start windows: September, January and April</p><p className="mt-1">{hero.availability}</p></div>
        </CollegeCtaPanel>
      </div>
    </section>
  );
}
