import { useState } from "react";
import { BadgePoundSterling, Check, GraduationCap, Landmark } from "lucide-react";

import { programmeData, programmeFundingDetails, type ProgrammeKey } from "../data";
import { containerClass, sectionClass, sectionEyebrowClass, SectionIntro } from "./shared";

export function ProgrammeFundingSection() {
  const [activeProgramme, setActiveProgramme] = useState<ProgrammeKey>("Marketing");
  const programme = programmeData[activeProgramme];
  const details = programmeFundingDetails[activeProgramme];

  return (
    <section className={sectionClass} id="programme-funding">
      <div className={containerClass}>
        <SectionIntro eyebrow="Programme funding" title="See what applies to your programme" copy="Funding, professional qualifications and additional KBC benefits vary by programme." />
        <div className="grid grid-cols-3 border-b border-[#e8e0ef]" role="tablist">
          {(Object.keys(programmeData) as ProgrammeKey[]).map((key) => (
            <button key={key} onClick={() => setActiveProgramme(key)} className={`min-h-[60px] min-w-0 cursor-pointer border-0 border-b-[3px] border-transparent bg-transparent px-3 py-2 text-sm font-semibold leading-snug text-[#766d7c] max-[500px]:px-1.5 max-[500px]:text-xs ${activeProgramme === key ? "border-[#401b8c] text-[#401b8c]" : ""}`} aria-selected={activeProgramme === key} role="tab" type="button">{key}</button>
          ))}
        </div>
        <div className="grid grid-cols-[1.15fr_.85fr] gap-6 rounded-[0_0_34px_10px] border border-t-0 border-[#e8e0ef] bg-white p-[clamp(30px,5vw,58px)] shadow-[0_28px_80px_rgba(47,20,104,.07)] max-[780px]:grid-cols-1 max-[780px]:px-5">
          <div>
            <p className={sectionEyebrowClass}>{activeProgramme}</p><h3 className="text-[clamp(30px,3.8vw,48px)] font-semibold tracking-[-.04em]">{programme.title}</h3><p className="mt-[17px] leading-[1.7] text-[#766d7c]">{programme.copy}</p>
            {programme.programmes.map((item) => <div className="mt-7 grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1.5 rounded-xl border border-[#e8e0ef] p-[18px]" key={item}><GraduationCap className="row-span-2 text-[#401b8c]" size={21} /><b className="text-sm">{item}</b><span className="text-[11px] text-[#766d7c]">Funded apprenticeship</span></div>)}
          </div>
          <div className="row-span-2 rounded-[30px_9px] bg-[#2f1468] p-[31px] text-white max-[780px]:row-auto"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#f5c94f]">Government funding</p><div className="mt-[27px] flex items-center gap-5 border-t border-white/15 pt-[23px]"><strong className="text-[43px] text-[#f5c94f]">100%</strong><span className="text-sm">Levy payers</span></div><div className="mt-[27px] flex items-center gap-5 border-t border-white/15 pt-[23px]"><strong className="text-[43px] text-[#f5c94f]">95%</strong><span className="text-sm">Non-levy employers</span></div><small className="mt-7 block text-[11px] leading-[1.6] text-white/45">Funding is subject to learner, employer and programme eligibility.</small></div>
          <div className="border-t border-[#e8e0ef] pt-6"><p className={sectionEyebrowClass}>Additional benefits funded by KBC</p><ul className="grid list-none grid-cols-2 gap-3 p-0 max-[780px]:grid-cols-1">{programme.benefits.map((item) => <li className="flex gap-[9px] text-[13px] leading-[1.55] text-[#564c5d]" key={item}><Check className="shrink-0 text-[#401b8c]" size={17} />{item}</li>)}</ul><p className="mt-6 text-[11px] leading-[1.6] text-[#918898]">Benefits vary by programme and applicable cohort. Professional awards are subject to their own assessment requirements.</p></div>
          <div className="col-span-2 mt-2 grid gap-4 border-t border-[#e8e0ef] pt-7 lg:grid-cols-3 max-[780px]:col-span-1">
            <article className="rounded-2xl border border-[#e8e0ef] bg-[#f7f4fa] p-6">
              <BadgePoundSterling className="text-[#401b8c]" size={22} />
              <h4 className="mt-4 text-lg font-semibold">Employer contribution</h4>
              <div className="mt-4 grid gap-4">{details.contributions.map((contribution) => <div className="border-t border-[#ded3e8] pt-4" key={contribution.programme}><p className="text-xs font-semibold leading-[1.5] text-[#564c5d]">{contribution.programme}</p><strong className="mt-1 block text-xl text-[#401b8c]">{contribution.amount}</strong>{contribution.alternative && <span className="mt-1 block text-[11px] leading-[1.5] text-[#766d7c]">{contribution.alternative}</span>}</div>)}</div>
            </article>
            <article className="rounded-2xl border border-[#e8e0ef] bg-white p-6">
              <Landmark className="text-[#401b8c]" size={22} />
              <h4 className="mt-4 text-lg font-semibold">DfE-funded programme items</h4>
              <ul className="mt-4 grid gap-3">{details.fundedItems.map((item) => <li className="flex gap-2.5 text-[13px] leading-[1.55] text-[#564c5d]" key={item}><Check className="shrink-0 text-[#401b8c]" size={16} />{item}</li>)}</ul>
            </article>
            <article className="rounded-2xl border border-[#f5c94f]/35 bg-[#fffaf0] p-6">
              <GraduationCap className="text-[#8f6b22]" size={22} />
              <h4 className="mt-4 text-lg font-semibold">Qualifications and progression</h4>
              <ul className="mt-4 grid gap-3">{details.qualifications.map((item) => <li className="flex gap-2.5 text-[13px] leading-[1.55] text-[#564c5d]" key={item}><Check className="shrink-0 text-[#8f6b22]" size={16} />{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
