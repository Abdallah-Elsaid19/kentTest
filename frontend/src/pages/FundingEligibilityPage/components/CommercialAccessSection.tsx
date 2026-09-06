import { useState } from "react";
import { ArrowRight, BadgePoundSterling, Check, ChevronDown } from "lucide-react";

import { commercialAccessOptions, commercialCapabilities, projectControlModules } from "../data";
import { containerClass, sectionClass, sectionEyebrowClass, SectionIntro } from "./shared";

export function CommercialAccessSection() {
  const [openModule, setOpenModule] = useState(0);

  return (
    <section className={sectionClass} id="commercial-access">
      <div className={containerClass}>
        <SectionIntro eyebrow="Project Controls · Commercial access" title="Choose the capability you need. Build from there." copy="Access one specialist module, combine multiple subjects or build a broader Project Controls development route." />
        <div className="grid grid-cols-[1.1fr_repeat(3,.7fr)] gap-[15px] max-[1050px]:grid-cols-3 max-[780px]:grid-cols-1">
          <div className="min-h-[255px] rounded-[26px_8px] bg-[#401b8c] p-7 text-white max-[1050px]:col-span-full max-[780px]:col-auto"><BadgePoundSterling className="text-[#f5c94f]" /><span className="mt-[27px] block text-xs text-white/65">Applicable IPC bursary support</span><strong className="mt-[5px] block text-[43px] text-[#f5c94f]">50% <small className="text-sm">or</small> 75%</strong><p className="mt-2 text-[11px] text-white/50">Depending on the selected module, approval and availability.</p></div>
          {commercialAccessOptions.map(({ icon: Icon, title, text }) => <article className="rounded-[23px_8px] border border-[#e8e0ef] bg-white p-[27px]" key={title}><Icon className="text-[#401b8c]" /><h3 className="mt-[38px] text-lg">{title}</h3><p className="mt-[9px] text-xs leading-[1.6] text-[#766d7c]">{text}</p></article>)}
        </div>
        <div className="my-[72px] grid grid-cols-[1.1fr_.9fr] items-center gap-[55px] rounded-[36px_10px] bg-[#f7f4fa] p-[clamp(30px,5vw,56px)] max-[1050px]:grid-cols-1">
          <div><h3 className="text-[clamp(28px,3.4vw,43px)] leading-[1.08] tracking-[-.035em]">Target capability gaps without over-training your team</h3><p className="mt-[17px] leading-[1.7] text-[#766d7c]">Shape development around the work your people actually do — from planning and cost to risk, reporting and PMO capability.</p></div>
          <div className="flex flex-wrap gap-[9px]">{commercialCapabilities.map((item) => <span className="rounded-full border border-[#ded3e8] bg-white px-[13px] py-2.5 text-xs font-semibold text-[#401b8c]" key={item}>{item}</span>)}</div>
        </div>
        <div className="border-t border-[#e8e0ef]">
          <div className="pb-[35px] pt-[47px] text-center"><p className={`${sectionEyebrowClass} !mx-auto`}>Specialist Project Controls development</p><h3 className="mx-auto text-[clamp(29px,4vw,48px)] tracking-[-.04em]">Build capability around the work you actually do</h3></div>
          {projectControlModules.map((module, index) => (
            <article className="border-t border-[#e8e0ef] last:border-b" key={module.title}>
              <button className="grid w-full cursor-pointer grid-cols-[52px_1fr_auto_28px] items-center gap-[17px] border-0 bg-transparent px-2.5 py-[25px] text-left text-[#24152f] max-[780px]:grid-cols-[44px_1fr_22px]" onClick={() => setOpenModule(openModule === index ? -1 : index)} aria-expanded={openModule === index} type="button"><span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[#401b8c] text-[11px] font-bold text-white">0{index + 1}</span><b className="text-lg">{module.title}</b>{"badge" in module && module.badge && <em className="rounded-full bg-[#eee8f4] px-[9px] py-1.5 text-[10px] font-bold not-italic text-[#401b8c] max-[780px]:hidden">{module.badge}</em>}<ChevronDown className={`transition-transform duration-200 ${openModule === index ? "rotate-180" : ""}`} /></button>
              <div className={`grid grid-cols-[1fr_280px] gap-10 overflow-hidden px-2.5 transition-[max-height,padding,opacity] duration-[400ms] max-[780px]:grid-cols-1 ${openModule === index ? "max-h-[650px] pb-[34px] pl-[79px] pt-[5px] opacity-100 max-[780px]:pl-2.5" : "max-h-0 py-0 opacity-0"}`}><div><p className="mb-5 max-w-[680px] text-sm leading-[1.7] text-[#564d5b]">{module.copy}</p><ul className="grid list-none gap-2.5 p-0">{module.items.map((item) => <li className="flex gap-[9px] text-[13px] text-[#766d7c]" key={item}><Check className="w-[15px] shrink-0 text-[#401b8c]" />{item}</li>)}</ul></div><aside className="grid gap-[5px] rounded-xl border border-[#dfd2ec] bg-[#f7f4fa] p-[18px]"><strong className="text-[22px] text-[#401b8c]">50% or 75%</strong><span className="text-[11px] text-[#766d7c]">IPC bursary where applicable</span><a className="mt-2.5 flex items-center gap-[7px] text-xs font-bold text-[#401b8c] no-underline [&_svg]:w-[15px]" href="#eligibility-checker">Check your route <ArrowRight /></a></aside></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
