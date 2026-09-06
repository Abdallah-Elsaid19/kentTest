import { ArrowRight } from "lucide-react";

import { missionPillars } from "../data";
import { actionsClass, ArrowLink, containerClass, sectionClass, SectionIntro } from "./shared";

export function MissionSection() {
  return (
    <section className={`${sectionClass} bg-[#f7f4fa]`}>
      <img className="pointer-events-none absolute left-[clamp(-180px,-9vw,-75px)] top-1/2 z-0 w-[clamp(330px,30vw,540px)] -translate-y-1/2 select-none opacity-[.045]" src="/assets/patterns/kbc-gold-leaf.png" alt="" />
      <div className={containerClass}>
        <SectionIntro
          id="funding-mission-title"
          eyebrow="Our mission"
          title="Professional learning should be accessible, relevant to work and connected to long-term progression."
          align="center"
          spaced={false}
        />
      </div>
      <div className={`${containerClass} mt-20 grid grid-cols-3 border-y border-[#e8e0ef] max-[780px]:grid-cols-1`}>
        {missionPillars.map(({ icon: Icon, title, text }, index) => (
          <article className="group relative min-h-[255px] border-r border-[#e8e0ef] bg-transparent px-[34px] py-[38px] transition-[background-color,box-shadow] duration-300 after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:origin-left after:scale-x-0 after:bg-[#f5c94f] after:transition-transform after:duration-[420ms] hover:bg-[#401b8c]/[.065] hover:after:scale-x-100 last:border-r-0 max-[780px]:min-h-0 max-[780px]:border-b max-[780px]:border-r-0 max-[780px]:last:border-b-0" key={title}>
            <span className="absolute right-7 top-7 text-xs font-bold text-[#c9bed1] transition-colors group-hover:text-[#401b8c]">0{index + 1}</span>
            <Icon className="block text-[#401b8c]" /><h3 className="mt-6 text-[21px] font-semibold">{title}</h3><p className="mt-3 text-sm leading-[1.75] text-[#766d7c]">{text}</p>
          </article>
        ))}
      </div>
      <div className={containerClass}>
        <div className="mt-[42px] grid grid-cols-[minmax(0,1fr)_300px] items-center gap-[clamp(40px,8vw,110px)] max-[780px]:grid-cols-1 max-[780px]:gap-[26px]">
          <p className="max-w-[660px] leading-[1.75] text-[#766d7c]">KBC brings together eligible government-funded apprenticeships, additional college-funded benefits and flexible Project Controls development so professionals and employers can choose the route that genuinely fits.</p>
          <div className={`${actionsClass} min-w-0 flex-col !items-stretch [&_a]:w-full [&_a]:justify-between`}>
            <ArrowLink href="#funding-routes">Explore funding routes</ArrowLink>
            <a href="#eligibility" className="inline-flex min-h-11 w-full items-center justify-between gap-2 text-sm font-bold text-[#401b8c] no-underline">Check eligibility <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
