import { Award, CalendarDays, Check, Clock3, GraduationCap, Headphones, MapPin, Sparkles, UsersRound } from "lucide-react";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { kbcFundBenefits, masterclassBenefits, qualifications, tutoringBenefits, workshopLocations } from "../data";

function CheckList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`mt-6 grid gap-3 ${columns ? "md:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li className="flex items-start gap-3 text-sm leading-6 text-[#655d6d]" key={item}>
          <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LearnerExperienceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f4fb] py-16 sm:py-20 lg:py-28" aria-labelledby="learner-experience-title">
      <img className="pointer-events-none absolute -bottom-48 -right-36 -z-10 hidden w-[650px] select-none opacity-[0.035] lg:block" src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[980px]">
          <FigmaSectionHeading
            id="learner-experience-title"
            eyebrow="Why Kent Business College"
            title="The programme is only part of the experience."
            description="Kent Business College combines workplace-focused professional learning with recognised qualifications, specialist support, professional events and additional investment designed to extend development beyond the core programme."
          />
          <p className="mt-7 text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">More built into the experience.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.05fr_.95fr]">
          <article className="group relative min-h-[520px] overflow-hidden rounded-[1.6rem] bg-[#25103F] lg:min-h-[680px]">
            <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none" src="/assets/images/figma-home/kbc-experience-networking.png" alt="Professional London Masterclass event at Kent Business College" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d092f] via-[#1d092f]/35 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-7 bottom-8 sm:inset-x-10 sm:bottom-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5C94F]">The KBC experience</p>
              <h3 className="mt-4 max-w-[540px] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Development that extends beyond the core programme.</h3>
              <ArrowLink className="mt-6 text-sm" to="/events" tone="inverse" direction="up-right">Explore the full experience</ArrowLink>
            </div>
          </article>

          <div className="grid gap-5">
            <article className="rounded-2xl border border-[#e4ddec] bg-white p-7 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary"><GraduationCap className="size-6" aria-hidden="true" /></span>
              <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Professional qualifications & pathways</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#17131d]">Go beyond programme completion.</h3>
              <p className="mt-4 text-sm leading-7 text-[#716a7a]">Selected programmes include support towards relevant professional qualifications, memberships, registration and examination costs.</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Professional qualifications and pathways">
                {qualifications.map((item) => <li className="rounded-full border border-primary/15 bg-[#f7f3fb] px-3 py-1.5 text-xs font-bold text-primary" key={item}>{item}</li>)}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#D6B04E]/45 bg-[#fffaf0] p-7 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#F5C94F]/25 text-[#79580e]"><Sparkles className="size-6" aria-hidden="true" /></span>
              <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-[#79580e]">Kent Business College Fund</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#17131d]">Additional investment from KBC</h3>
              <p className="mt-4 text-sm leading-7 text-[#716a7a]">Separate from Department for Education apprenticeship funding.</p>
              <CheckList items={kbcFundBenefits} columns />
              <p className="mt-6 border-t border-[#D6B04E]/30 pt-5 text-xs italic leading-6 text-[#766d7c]">Selected KBC Fund benefits are limited to the first 30 eligible learners per applicable cohort where specified.</p>
              <ArrowLink className="mt-5 text-sm" to="/funding-eligibility#kbc-fund-details" direction="up-right">Discover the KBC Fund</ArrowLink>
            </article>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#e4ddec] bg-white p-7 sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary"><Headphones className="size-6" aria-hidden="true" /></span>
            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Extended tutoring & professional guidance</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#17131d]">Support that fits your working week</h3>
            <CheckList items={tutoringBenefits} columns />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <span className="flex items-center gap-3 rounded-xl bg-[#f7f3fb] p-4 text-sm font-semibold text-primary"><CalendarDays className="size-5" aria-hidden="true" />7 days a week</span>
              <span className="flex items-center gap-3 rounded-xl bg-[#f7f3fb] p-4 text-sm font-semibold text-primary"><Clock3 className="size-5" aria-hidden="true" />Until 9:00 PM</span>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#e4ddec] bg-white">
            <div className="p-7 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary"><UsersRound className="size-6" aria-hidden="true" /></span>
              <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Professional Masterclasses & events</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#17131d]">Learn and network with professionals</h3>
              <CheckList items={masterclassBenefits} columns />
            </div>
            <figure className="relative mt-2 h-64 overflow-hidden">
              <img className="h-full w-full object-cover" src="/assets/images/learner-home/masterclass.webp" alt="Professionals attending a KBC Masterclass" loading="lazy" decoding="async" />
              <figcaption className="absolute inset-x-5 bottom-5 flex gap-3 rounded-xl bg-[#25103F]/90 p-4 text-xs leading-5 text-white/75 backdrop-blur-md"><MapPin className="mt-0.5 size-4 shrink-0 text-[#F5C94F]" aria-hidden="true" /><span><strong className="block text-white">London Masterclasses</strong>Hosted at the Marble Arch Hotel three times a year — bringing together learners, employers, line managers and training leaders.</span></figcaption>
            </figure>
          </article>

          <article className="rounded-2xl border border-[#e4ddec] bg-white p-7 sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary"><MapPin className="size-6" aria-hidden="true" /></span>
            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Travel support & professional experiences</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#17131d]">Reach the experiences that matter</h3>
            <CheckList items={["Travel support for applicable workshops", "Travel costs for KBC Masterclasses where included"]} />
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#6b6372]">Workshop locations</p>
            <div className="mt-4 flex flex-wrap gap-2">{workshopLocations.map((location) => <span className="rounded-full border border-[#e4ddec] px-3 py-1.5 text-xs text-[#5f5767]" key={location}>{location}</span>)}</div>
          </article>

          <article className="rounded-2xl border border-[#e4ddec] bg-white p-7 sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary"><Award className="size-6" aria-hidden="true" /></span>
            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Recognition, graduation & further development</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#17131d]">Recognition that extends your pathway</h3>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#f7f3fb] p-4"><dt className="font-semibold text-[#17131d]">Graduation</dt><dd className="mt-2 text-sm leading-6 text-[#716a7a]">Rochester Cathedral · Professional-body graduation where applicable</dd></div>
              <div className="rounded-xl bg-[#f7f3fb] p-4"><dt className="font-semibold text-[#17131d]">Rewards & prizes</dt><dd className="mt-2 text-sm leading-6 text-[#716a7a]">Graduation rewards · Laptop prize where applicable</dd></div>
              <div className="rounded-xl bg-[#f7f3fb] p-4"><dt className="font-semibold text-[#17131d]">Further development</dt><dd className="mt-2 text-sm leading-6 text-[#716a7a]">Progression to further professional development · Eligible additional Level 7 development · ChPP progression & preparation</dd></div>
              <div className="rounded-xl bg-[#f7f3fb] p-4"><dt className="font-semibold text-[#17131d]">Community</dt><dd className="mt-2 text-sm leading-6 text-[#716a7a]">Student Clubs Memberships · London · Kent · Manchester · Liverpool · Birmingham</dd></div>
            </dl>
            <p className="mt-6 flex items-start gap-3 text-sm text-[#5f5767]"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />Private Health Care Insurance where included.</p>
          </article>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#ddd4e7] pt-7 sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-[#766d7c]">Benefits vary by programme, eligibility, cohort and availability.</p>
          <ArrowLink className="text-sm" to="/about" direction="up-right">Discover Why KBC</ArrowLink>
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-primary">KBC adds more to the experience — and support continues throughout it.</p>
      </div>
    </section>
  );
}
