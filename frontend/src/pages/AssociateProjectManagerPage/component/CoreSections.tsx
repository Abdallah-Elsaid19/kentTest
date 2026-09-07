import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { trustedOrganisationLogos } from "@/components/common/trustedLogos";

import { aiLayers, audienceProfiles, capabilities, curriculumPhases, trustFacts } from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";

export function TrustedSection() {
  return (
    <section className="bg-kbc-purple-50 py-14 sm:py-16" aria-labelledby="apm-trusted-title">
      <div className={shell}>
        <SectionHeading
          id="apm-trusted-title"
          eyebrow="Trusted by leading organisations"
          title="Develop alongside professionals"
          description="KBC programmes are trusted by organisations across energy, automotive, logistics and engineering — developing project capability without taking people away from their roles."
          centered
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {trustedOrganisationLogos.slice(0, 12).map((logo) => (
            <div className="flex min-h-24 items-center justify-center rounded-2xl border border-kbc-purple-100 bg-white p-4" key={logo.name}>
              <img src={logo.image} alt={logo.name} loading="lazy" decoding="async" className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Programme summary">
          {trustFacts.map((fact) => (
            <li className="rounded-full border border-kbc-purple-200 bg-white px-4 py-2 text-xs font-semibold text-kbc-purple-800" key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section id="audience" className={`${section} bg-white`} aria-labelledby="apm-audience-title">
      <div className={`${shell} grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20`}>
        <div>
          <SectionHeading
            id="apm-audience-title"
            eyebrow="Built for working professionals"
            title="Build on the project experience you already have"
            description="This programme is designed for professionals already contributing to projects who want a more structured approach to project delivery, stronger workplace capability and further professional development."
          />
          <blockquote className="mt-10 rounded-3xl bg-kbc-purple-950 p-7 text-white shadow-[0_22px_55px_rgba(33,17,38,.18)] sm:p-9">
            <p className="text-2xl font-semibold leading-tight sm:text-3xl">You do not need to step away from work to develop further.</p>
            <footer className="mt-5 border-l-2 border-kbc-gold-500 pl-4 text-sm leading-6 text-white/65">Learning is applied directly to real professional responsibilities.</footer>
          </blockquote>
        </div>
        <div className="divide-y divide-kbc-purple-100 border-y border-kbc-purple-100">
          {audienceProfiles.map((profile) => (
            <article className="group grid grid-cols-[42px_1fr_auto] gap-4 py-7 sm:gap-6 sm:py-8" key={profile.number}>
              <span className="pt-1 text-sm font-bold text-primary">{profile.number}</span>
              <div>
                <h3 className="text-xl font-semibold leading-snug text-kbc-purple-950 sm:text-2xl">{profile.title}</h3>
                <p className="mt-3 text-sm leading-7 text-kbc-dark-600">{profile.description}</p>
              </div>
              <span className="grid size-9 place-items-center rounded-full border border-kbc-purple-100 text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section id="outcomes" className={`${section} bg-kbc-purple-50`} aria-labelledby="apm-outcomes-title">
      <div className={shell}>
        <SectionHeading
          id="apm-outcomes-title"
          eyebrow="Workplace outcomes"
          title="Develop capability you can apply immediately"
          description="A structured capability map built around the disciplines that matter in day-to-day project delivery."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-kbc-purple-100 bg-kbc-purple-100 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <article className="group min-h-56 bg-white p-6 transition hover:bg-kbc-gold-50 sm:p-7" key={capability.number}>
              <span className="text-xs font-bold text-primary">{capability.number}</span>
              <h3 className="mt-10 text-xl font-semibold text-kbc-purple-950">{capability.title}</h3>
              <p className="mt-3 text-sm leading-6 text-kbc-dark-600">{capability.description}</p>
              <span className="mt-6 block h-1 w-10 rounded-full bg-kbc-gold-500 transition-all group-hover:w-16" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AiSection() {
  return (
    <section className={`${section} relative isolate overflow-hidden bg-kbc-purple-950 text-white`} aria-labelledby="apm-ai-title">
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[520px] rounded-full bg-primary/35 blur-3xl" aria-hidden="true" />
      <div className={shell}>
        <SectionHeading
          id="apm-ai-title"
          eyebrow="Project Management + AI"
          title="Professional project management with practical AI application"
          description="Develop core project-management capability while exploring practical ways AI tools can support project visibility, reporting and workflow."
          inverse
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {aiLayers.map((layer) => (
            <article className="rounded-3xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-sm sm:p-8" key={layer.number}>
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-kbc-gold-500/45 text-xs font-bold text-kbc-gold-500">{layer.number}</span>
                <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <li className="rounded-full border border-white/15 bg-white/[.06] px-3 py-2 text-xs font-medium text-white/75" key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 flex max-w-4xl items-start gap-3 border-l-2 border-kbc-gold-500 pl-4 text-xs leading-6 text-white/55">
          <Sparkles className="mt-1 size-4 shrink-0 text-kbc-gold-500" aria-hidden="true" />
          Professional examinations and credentials remain subject to the requirements and assessment of the relevant professional body.
        </p>
      </div>
    </section>
  );
}

export function CurriculumSection() {
  return (
    <section id="curriculum" className={`${section} bg-white`} aria-labelledby="apm-curriculum-title">
      <div className={shell}>
        <SectionHeading id="apm-curriculum-title" eyebrow="Programme content" title="What you study across the programme" />
        <ol className="mt-12 grid gap-5">
          {curriculumPhases.map((phase) => (
            <li className="grid gap-5 rounded-3xl border border-kbc-purple-100 bg-white p-6 shadow-[0_12px_32px_rgba(53,30,81,.05)] sm:grid-cols-[170px_1fr] sm:p-7" key={phase.phase}>
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">{phase.phase}</span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-kbc-purple-700">{phase.label}</span>
              </div>
              <ul className="flex flex-wrap items-center gap-2.5">
                {phase.topics.map((topic) => (
                  <li className="inline-flex items-center gap-2 rounded-full bg-kbc-purple-50 px-4 py-2 text-sm font-medium text-kbc-purple-950" key={topic}>
                    <Check className="size-3.5 text-primary" aria-hidden="true" /> {topic}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
