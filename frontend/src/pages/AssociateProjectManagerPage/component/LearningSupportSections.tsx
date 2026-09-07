import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  MapPin,
  MessageCircleMore,
  Presentation,
  TrainFront,
  UserRoundCheck,
  Users,
} from "lucide-react";

import { ProgrammeWorkload } from "@/components/programme/ProgrammeWorkload";
import { workloadSectionData } from "../data";
import { CoachCard } from "@/components/common/CoachCard";
import { NavigationButton } from "@/components/navigation";

import {
  coaches,
  coachingItems,
  communityCities,
  kbcFundBenefits,
  learningInclusions,
  learningSteps,
  locations,
} from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";

const learningIcons = [Presentation, BriefcaseBusiness, UserRoundCheck, BookOpen, ClipboardCheck, Award] as const;

export function LearningSection() {
  return (
    <section id="learning" className={`${section} bg-kbc-purple-50`} aria-labelledby="apm-learning-title">
      <div className={shell}>
        <SectionHeading
          id="apm-learning-title"
          eyebrow="Applied learning"
          title="Learn it. Apply it. Evidence it."
          description="The programme combines live professional learning with workplace application, structured support and evidence-building."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningSteps.map((step, index) => {
            const Icon = learningIcons[index];
            return (
              <li className="group rounded-2xl border border-kbc-purple-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none" key={step.title}>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-kbc-purple-50 text-primary transition group-hover:bg-primary group-hover:text-white"><Icon className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className="text-xs font-bold text-kbc-purple-300">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 text-lg font-semibold text-[var(--color-ink)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{step.detail}</p>
              </li>
            );
          })}
        </ol>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {learningInclusions.map((item) => (
            <li className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-kbc-purple-900" key={item}>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-kbc-gold-100 text-kbc-gold-800"><Check className="size-4" aria-hidden="true" /></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WorkloadSection() {
  return <ProgrammeWorkload data={workloadSectionData} />;
}

export function LocationsSection() {
  return (
    <section id="workshops" className={`${section} bg-[var(--color-soft)]`} aria-labelledby="apm-locations-title">
      <div className={shell}>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="apm-locations-title"
              eyebrow="Beyond online learning"
              title="Join professional workshops across the UK"
              description="The core programme is delivered online, with optional in-person workshops providing additional opportunities for professional learning and networking."
            />
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-kbc-gold-100 px-4 py-2 text-xs font-bold text-kbc-gold-900"><TrainFront className="size-4" aria-hidden="true" /> Travel costs covered where included</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {locations.map((location) => (
              <li className="group flex items-start gap-4 rounded-2xl border border-kbc-purple-100 bg-white p-5 transition hover:border-kbc-gold-500 hover:shadow-md" key={location.city}>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-kbc-purple-50 text-primary"><MapPin className="size-4" aria-hidden="true" /></span>
                <div><h3 className="font-semibold text-[var(--color-ink)]">{location.city}</h3><p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{location.descriptor}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WhyKbcSection() {
  return (
    <section id="why-kbc" className={`${section} bg-white`} aria-labelledby="apm-why-title">
      <div className={shell}>
        <SectionHeading
          id="apm-why-title"
          eyebrow="Why Kent Business College"
          title="The programme is only part of the experience"
          description="KBC combines workplace-focused learning with extended professional support and additional investment designed to help you get more from your development."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="relative overflow-hidden rounded-2xl bg-primary-dark p-7 text-white md:col-span-2 sm:p-9">
            <MessageCircleMore className="size-8 text-[var(--color-gold)]" aria-hidden="true" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">Coaching</p>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Support beyond the weekly lesson</h3>
            <p className="mt-7 text-5xl font-semibold tracking-tight text-white">7 days <span className="text-xl text-[var(--color-gold)]">a week · until 9 pm</span></p>
            <ul className="mt-7 flex flex-wrap gap-2">{coachingItems.map((item) => <li className="rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-xs text-white/75" key={item}>{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-7">
            <Users className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">Professional community & networking</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Optional UK networking workshops and professional events, with club memberships where applicable.</p>
            <ul className="mt-5 flex flex-wrap gap-2">{communityCities.map((city) => <li className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-kbc-purple-700" key={city}>{city}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 shadow-sm">
            <GraduationCap className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">Graduation ceremony</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Rochester Cathedral, Kent. Graduation rewards and a laptop prize where applicable.</p>
          </article>
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 shadow-sm">
            <TrainFront className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">Travel & access</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Workshop travel support where included.</p>
          </article>
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 shadow-sm">
            <HeartHandshake className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">Wellbeing & benefits</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Private health care insurance available where included.</p>
          </article>
          <article className="rounded-2xl border border-kbc-gold-300 bg-kbc-gold-50 p-7 md:col-span-2 lg:col-span-3 sm:p-9">
            <div className="flex items-start gap-4"><Laptop2 className="mt-1 size-7 shrink-0 text-kbc-gold-800" aria-hidden="true" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-kbc-gold-800">Kent Business College Fund</p><h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">Additional investment from KBC</h3><p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">Separate from Department for Education apprenticeship funding, extending your development beyond the core programme.</p></div></div>
            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">{kbcFundBenefits.map((item) => <li className="flex items-start gap-2 text-sm leading-6 text-[var(--color-muted)]" key={item}><Check className="mt-1 size-4 shrink-0 text-kbc-gold-800" aria-hidden="true" />{item}</li>)}</ul>
            <p className="mt-6 text-xs italic leading-5 text-[var(--color-muted)]">Selected KBC Fund benefits are limited to the first 10 eligible learners per applicable cohort where specified.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CoachesSection() {
  return (
    <section id="coaches" className={`${section} bg-kbc-purple-50`} aria-labelledby="apm-coaches-title">
      <div className={shell}>
        <SectionHeading
          id="apm-coaches-title"
          eyebrow="Coaching support"
          title="Coaches who support your portfolio and skills"
          description="Coaches support study habits, evidence development, professional confidence and the connection between training and workplace performance."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <CoachCard
              key={coach.name}
              name={coach.name}
              image={coach.image}
              bio={coach.bio}
              linkedIn={coach.linkedIn}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-primary/15 bg-gradient-to-r from-kbc-purple-50 to-white p-5 shadow-[0_14px_35px_rgba(39,14,73,0.06)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Want to discuss the programme and learner support?</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">Book a session to explore the coaching approach, programme fit and the next available cohort.</p>
          </div>
          <NavigationButton to="/book-session" className="w-full shrink-0 sm:w-auto">
            Book a session
          </NavigationButton>
        </div>
      </div>
    </section>
  );
}
