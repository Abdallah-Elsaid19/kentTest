import { ProgrammeCurriculumCards } from "@/components/programme/ProgrammeCurriculumCards";
import { CollegeFeatureCard } from "@/components/college/CollegeFeatureCard";
import { CollegeStats } from "@/components/college/CollegeStats";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BrainCircuit,
  Check,
  Laptop2,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { ProgrammeOutputs } from "@/components/programme/ProgrammeSupportSections";
import { ProgrammeBenefits, ProgrammeCardGrid, ProgrammePartners } from "@/components/programme/ProgrammeGrids";
import { NavigationButton } from "@/components/navigation";
import { FigmaUpcomingEventsSection } from "@/pages/home/components/FigmaUpcomingEventsSection";

import {
  alternativeFundingRoutes,
  audienceGroups,
  curriculumTracks,
  deliverySteps,
  employerPartnerSectors,
  learnerBenefits,
  overviewCapabilities,
  overviewStats,
  pathwayDetails,
  pathwayStages,
  practicalOutputs,
} from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";


export function ProgrammeOverviewSection() {
  return (
    <section id="overview" className={`${section} relative isolate overflow-hidden bg-white`} aria-labelledby="apm-overview-title">
      <img src="/assets/patterns/kbc-ibis-wreath.png" alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -left-32 top-1/2 -z-10 hidden h-auto w-[340px] -translate-y-1/2 select-none opacity-[0.055] md:block lg:-left-40 lg:w-[clamp(420px,32vw,560px)]" />
      <div className={shell}>
        <SectionHeading
          id="apm-overview-title"
          eyebrow="Programme overview"
          title="Practical project management development for the way projects are delivered today"
          description="Build core project management capability while learning how dashboards, automation and AI agents can support better visibility, reporting and project decision-making."
        />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {overviewCapabilities.map((item) => (
            <CollegeFeatureCard key={item.number} marker={item.number} title={item.title}>
              <p>{item.description}</p>
            </CollegeFeatureCard>
          ))}
        </div>
        <CollegeStats items={overviewStats} compact />
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <NavigationButton to="/book-session" variant="primary" className="gap-2">Book an information session <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
          <NavigationButton to="#funding" variant="secondary">View funding details</NavigationButton>
        </div>
      </div>
    </section>
  );
}

export function AudienceRolesSection() {
  return (
    <section id="audience" className={`${section} bg-kbc-purple-50`} aria-labelledby="apm-audience-title">
      <div className={shell}>
        <SectionHeading
          id="apm-audience-title"
          eyebrow="Who should apply"
          title="For professionals who manage, coordinate or support projects across different sectors"
          description="This programme is designed for working professionals who want to formalise their project management capability, strengthen their professional credibility and understand how AI can be applied responsibly within project delivery and controls."
        />
        <ProgrammeCardGrid items={audienceGroups} />
      </div>
    </section>
  );
}

export function PathwaySection() {
  return (
    <section id="pathway" className={`${section} relative isolate overflow-hidden bg-primary-dark text-white`} aria-labelledby="apm-pathway-title">
      <img src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" className="pointer-events-none absolute -left-44 top-1/2 -z-10 hidden w-[clamp(420px,38vw,680px)] -translate-y-1/2 select-none opacity-[0.07] lg:block" />
      <div className={shell}>
        <SectionHeading
          id="apm-pathway-title"
          eyebrow="One pathway"
          title="Project Management Professional (PMP) + AI in Project Controls"
          description="Follow a clearly structured 12-month learning journey: eight months dedicated to PMP preparation, followed by four months focused on the AI in Project Controls Certificate."
          inverse
        />
        <div className="mt-12 grid gap-6 md:grid-cols-[2fr_1fr]">
          {pathwayStages.map((stage, index) => (
            <article className={`relative isolate overflow-hidden border-t-2 py-7 sm:py-8 ${index === 0 ? "border-[var(--color-gold)]" : "border-white/30"}`} key={stage.period}>
              {index === 1 && (
                <BrainCircuit
                  className="pointer-events-none absolute -bottom-3 -right-3 -z-10 size-20 select-none text-white opacity-[0.08] sm:-bottom-4 sm:size-24"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              )}
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">{stage.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{stage.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{stage.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-x-8 md:grid-cols-3">
          {pathwayDetails.map((item) => (
            <CollegeFeatureCard key={item.number} marker={item.number} title={item.title} inverse>
              <p>{item.description}</p>
              {item.number === "02" && (
                <NavigationButton to="/ai-in-project-controls-certificate" variant="accent" className="mt-6 w-full sm:w-auto">
                  View the AI in Project Controls Certificate
                </NavigationButton>
              )}
            </CollegeFeatureCard>
          ))}
        </div>
        <p className="mt-7 max-w-5xl border-l-2 border-kbc-gold-500 pl-4 text-xs leading-6 text-white/55">External certificates, memberships and professional recognition are subject to the relevant organisation’s assessment, evidence, membership and exam requirements. KBC confirms the exact route and included costs before enrolment.</p>
      </div>
    </section>
  );
}

export function ProgrammeCurriculumSection() {
  return (
    <section id="curriculum" className={`${section} bg-[#fbfafc]`} aria-labelledby="apm-curriculum-title">
      <div className={shell}>
        <SectionHeading
          id="apm-curriculum-title"
          eyebrow="Programme content"
          title="What you study across the 12 months"
          description="The programme combines core project management capability and applied AI skills to improve project reporting, control and decision-making."
        />
        <ProgrammeCurriculumCards tracks={curriculumTracks} />
        <div className="mt-6 border-t border-kbc-purple-200 py-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[var(--color-ink)]">Relevant to different professional backgrounds and cohorts</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">Case studies, examples and study materials can reflect each learner’s professional background—from engineering, construction and manufacturing to consultancy, marketing, finance, information technology and digital transformation.</p>
        </div>
      </div>
    </section>
  );
}

export function PracticalOutputsSection() {
  return <ProgrammeOutputs data={{
    id: "outputs", eyebrow: "Practical outputs",
    title: "Build evidence you can apply in your role",
    description: "Develop practical project management and AI outputs that support workplace performance and professional development.",
    items: practicalOutputs,
    note: "Workplace information should be appropriately anonymised where confidentiality, client or commercial restrictions apply.",
  }} />;
}

export function DeliverySection() {
  return (
    <section id="delivery" className={`${section} relative isolate overflow-hidden bg-[var(--color-soft)]`} aria-labelledby="apm-delivery-title">
      <img src="/assets/patterns/kbc-gold-leaf.png" alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -right-28 top-10 -z-10 hidden h-auto w-[320px] select-none opacity-[0.05] md:block lg:-right-36 lg:w-[clamp(400px,30vw,520px)]" />
      <div className={shell}>
        <SectionHeading
          id="apm-delivery-title"
          eyebrow="Delivery and assessment"
          title="Live, interactive and applied to real work"
          description="Designed around the responsibilities of working professionals, the programme combines live online sessions, guided independent study, portfolio development, regular coaching and progress support."
        />
        <ProgrammeCardGrid items={deliverySteps} />
      </div>
    </section>
  );
}

export function LearnerBenefitsSection() {
  return <ProgrammeBenefits primaryChecks data={{
    id: "benefits",
    eyebrow: "Benefits of studying with Kent Business College",
    title: "More than a qualification",
    description: "Your funded learning journey is designed to strengthen wellbeing, career confidence, professional recognition and long-term success.",
    items: learnerBenefits,
  }} />;
}

export function AlternativeFundingSection() {
  return (
    <section id="alternative-funding" className={`${section} relative isolate overflow-hidden bg-[var(--color-soft)]`} aria-labelledby="apm-alternative-funding-title">
      <img src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -left-32 top-1/2 -z-10 hidden h-auto w-[340px] -translate-y-1/2 select-none opacity-[0.05] md:block lg:-left-44 lg:w-[clamp(440px,34vw,580px)]" />
      <div className={shell}>
        <SectionHeading
          id="apm-alternative-funding-title"
          eyebrow="If you are not eligible for apprenticeship funding"
          title="Alternative support may still be available"
          description="Alternative support may be available through the Kent Business College Fund and Institute of Project Controls, subject to acceptance and availability."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {alternativeFundingRoutes.map((route, index) => (
            <article className={`rounded-2xl p-7 sm:p-9 ${index === 0 ? "bg-primary-dark text-white" : "border border-kbc-purple-100 bg-white"}`} key={route.eyebrow}>
              <p className={`text-xs font-bold uppercase tracking-[0.16em] ${index === 0 ? "text-[var(--color-gold)]" : "text-primary"}`}>{route.eyebrow}</p>
              <h3 className={`mt-7 text-5xl font-semibold tracking-tight ${index === 0 ? "text-[var(--color-gold)]" : "text-primary"}`}>{route.support}</h3>
              <p className={`mt-7 text-sm leading-7 ${index === 0 ? "text-white/65" : "text-[var(--color-muted)]"}`}>{route.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-kbc-purple-100 bg-white p-5 text-xs leading-6 text-[var(--color-muted)]">Funding is subject to current rules, learner eligibility, employer agreement, prior-learning review, residency and work-location checks, programme suitability and written confirmation. Bursary places and KBC-funded professional extras are limited.</p>
        <div className="mt-8 flex justify-center">
          <NavigationButton to="https://instituteofprojectcontrols.com/scholarships" external newTab className="w-full gap-2 sm:w-auto">
            Explore IPC bursaries <ArrowUpRight className="size-4" aria-hidden="true" />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
}

export function EmployerPartnersSection() {
  return <ProgrammePartners data={{
    id: "partners",
    eyebrow: "Employer partnerships",
    title: "Trusted by employers across project-driven sectors",
    description: "Established partnerships across construction, the public sector, healthcare, consultancy, education, aerospace, defence and energy.",
    sectors: employerPartnerSectors,
  }} />;
}

export function ProgrammeEventsSection() {
  // Match both "Project Manager" and "Project Management" as one search phrase.
  const programmeSearch = '"project manag"';

  return (
    <div className="kbc-figma-home">
      <FigmaUpcomingEventsSection
        id="events"
        search={programmeSearch}
        eyebrow="Upcoming Project Management Professional events"
        title="Learn more about the programme, funding and application process"
        description="Join an online information event covering the project management programme, AI dashboards, AI agents, funding and the application process."
      />
    </div>
  );
}

export function AlternativeRouteNotice() {
  return (
    <section id="alternative-routes" className="scroll-mt-20 bg-white pb-16 sm:scroll-mt-64 sm:pb-20 lg:pb-28" aria-label="Alternative route support">
      <div className={shell}>
        <div className="relative isolate grid overflow-hidden rounded-2xl bg-primary-dark p-6 text-white shadow-[0_20px_55px_rgba(39,14,73,0.16)] sm:p-8 lg:grid-cols-[1.35fr_.75fr] lg:items-center lg:gap-8">
          <img className="pointer-events-none absolute -bottom-28 -right-16 -z-10 hidden w-80 select-none opacity-[0.06] sm:block" src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" />
          <div>
            <div className="flex items-center gap-3">
              <Laptop2 className="size-7 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">Need an alternative route?</p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">If your line manager cannot support off-the-job hours, speak to us</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">If your employer or line manager is not able to support the required off-the-job learning hours, you may still be able to explore an Institute of Project Controls funded route or an employer-supported route, subject to eligibility and approval.</p>
          </div>
          <div className="mt-6 rounded-2xl border border-white/20 bg-white/[.08] p-5 lg:mt-0">
            <p className="text-sm leading-6 text-white/80">Our admissions team will explain the apprenticeship route, employer responsibilities, Institute of Project Controls funding options and the best route for your situation.</p>
            <NavigationButton to="/book-session" variant="accent" className="mt-5 w-full gap-2">Book an information session <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkloadIntroCard() {
  return (
    <div className="rounded-2xl bg-primary-dark p-7 text-white">
      <BookOpenCheck className="size-7 text-[var(--color-gold)]" aria-hidden="true" />
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">Apprenticeship allocation</p>
      <p className="mt-2 text-5xl font-semibold text-white">370 hours</p>
      <p className="mt-4 text-sm leading-7 text-white/65">Required off-the-job training across the 12-month programme.</p>
    </div>
  );
}

export function LiveLearningBadge() {
  return <span className="inline-flex items-center gap-2 rounded-full bg-kbc-purple-50 px-4 py-2 text-xs font-bold text-primary"><Sparkles className="size-4" aria-hidden="true" />Live, expert-led and applied</span>;
}

export function ProfessionalCommunityBadge() {
  return <span className="inline-flex items-center gap-2 rounded-full bg-kbc-gold-100 px-4 py-2 text-xs font-bold text-kbc-gold-900"><UsersRound className="size-4" aria-hidden="true" />Professional community</span>;
}
