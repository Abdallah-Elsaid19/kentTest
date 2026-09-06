import { ArrowUpRight } from "lucide-react";

import { NavigationButton } from "@/components/navigation";
import { availabilityItems } from "../data";
import { containerClass, sectionClass, SectionIntro } from "./shared";

export function AvailabilitySection() {
  return (
    <section className={`${sectionClass} !bg-primary/[.025]`} id="availability">
      <div className={containerClass}>
        <SectionIntro eyebrow="Current intakes" title="Funded places and additional benefits are limited" copy="Funded programme places and additional KBC Fund benefits are subject to availability and may be fully allocated before the relevant intake or event date." align="left" />
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="grid gap-4 lg:col-span-5">{availabilityItems.map(({ icon: Icon, title, copy, tone }) => <article className={`flex items-start gap-4 rounded-[22px] border p-7 ${tone === "gold" ? "border-[#f5c94f]/30 bg-[#fffaf0]" : "border-[#e8e0ef] bg-white"}`} key={title}><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${tone === "gold" ? "bg-[#f5c94f] text-[#2f1468]" : "bg-[#2f1468] text-white"}`}><Icon size={20} /></span><div><h3 className="text-xl font-semibold leading-snug">{title}</h3><p className="mt-2 text-sm leading-[1.7] text-[#766d7c]">{copy}</p></div></article>)}</div>
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-primary p-8 text-white md:p-10 lg:col-span-7"><ArrowUpRight className="pointer-events-none absolute -bottom-8 -right-4 h-40 w-40 text-[#f5c94f]/10" /><div className="relative z-[1]"><p className="max-w-xl text-base leading-[1.7] text-white/70">An early eligibility conversation can help confirm the appropriate programme, employer requirements, funding route and current availability before you begin the application process.</p><div className="mt-8 flex flex-wrap gap-4"><NavigationButton className="min-h-[50px] gap-2.5 px-[22px] py-[13px] font-bold" to="/book-session" variant="inverse">Book an information session <ArrowUpRight size={17} /></NavigationButton></div></div></div>
        </div>
      </div>
    </section>
  );
}
