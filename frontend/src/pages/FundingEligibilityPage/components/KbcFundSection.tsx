import { Check } from "lucide-react";

import { kbcFundCards } from "../data";
import { containerClass, sectionClass, SectionIntro } from "./shared";

export function KbcFundSection() {
  return (
    <section className={`${sectionClass} bg-[linear-gradient(150deg,#21082f,#2f1468)] text-white`} id="kbc-fund-details">
      <img className="pointer-events-none absolute right-[-130px] top-1/2 z-0 w-[clamp(330px,30vw,540px)] -translate-y-1/2 select-none opacity-[.06]" src="/assets/patterns/kbc-ibis-wreath.png" alt="" />
      <div className={containerClass}>
        <SectionIntro
          eyebrow="The Kent Business College Fund"
          title="More built into your professional development"
          align="center"
          tone="inverse"
          spaced={false}
        />
        <p className="mx-auto mb-12 mt-7 w-fit max-w-[320px] rounded-lg border border-[#f5c94f]/35 px-[17px] py-[13px] text-center text-[11px] leading-[1.5] text-[#f5c94f]">Separate from Department for Education funding</p>
        <div className="grid grid-cols-[1.15fr_.85fr_.85fr] gap-4 max-[780px]:grid-cols-1">
          {kbcFundCards.map(({ icon: Icon, title, text, items }) => (
            <article className="min-h-[260px] rounded-[25px_8px] border border-white/[.12] bg-white/[.055] p-7 max-[780px]:min-h-0" key={title}>
              <Icon className="text-[#f5c94f]" /><h4 className="mt-[22px] text-xl !text-white">{title}</h4><p className="mt-[11px] text-[13px] leading-[1.7] text-white/55">{text}</p>
              {items && <ul className="mt-7 grid list-none gap-3 p-0">{items.map((item) => <li className="flex gap-[9px] text-xs leading-[1.5] text-white/75" key={item}><Check className="w-[15px] shrink-0 text-[#f5c94f]" />{item}</li>)}</ul>}
            </article>
          ))}
        </div>
        <p className="mt-[26px] text-[11px] leading-[1.7] text-white/40">Selected benefits may be available only to the first 30 eligible learners per applicable cohort. Benefits and professional qualifications vary by programme and are not automatically awarded.</p>
      </div>
    </section>
  );
}
