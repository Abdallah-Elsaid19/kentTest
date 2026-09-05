import { Check, Handshake } from "lucide-react";

import { employerBenefits, employerSteps } from "../data";
import { ArrowLink, containerClass, goldSectionEyebrowClass, sectionClass, SectionIntro } from "./shared";

export function EmployerSetupSection() {
  return (
    <section className={sectionClass} id="employer-setup">
      <div className={containerClass}>
        <SectionIntro eyebrow="For employers" title="Setting up a funded programme is straightforward" copy="KBC supports employers through programme selection, eligibility and Apprenticeship Service setup." />
        <div className="grid grid-cols-[1fr_420px] items-start gap-[clamp(45px,7vw,90px)] max-[1050px]:grid-cols-[1fr_350px] max-[780px]:grid-cols-1">
          <div className="relative before:absolute before:bottom-[46px] before:left-[26px] before:top-[46px] before:w-px before:bg-[#e8e0ef] before:content-[''] max-[500px]:before:left-[23px]">
            {employerSteps.map(({ icon: Icon, title, text, ...step }, index) => (
              <article className="relative grid grid-cols-[54px_40px_1fr] items-start gap-[18px] pb-11 max-[500px]:grid-cols-[48px_1fr]" key={title}><span className="z-[1] grid h-[53px] w-[53px] place-items-center rounded-full border border-[#401b8c] bg-white text-[11px] font-bold text-[#401b8c]">0{index + 1}</span><Icon className="mt-[14px] text-[#401b8c] max-[500px]:hidden" /><div><h3 className="text-[21px]">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-[#766d7c]">{text}</p>{"code" in step && step.code && <strong className="mt-[15px] inline-block rounded-[7px] bg-[#f7f4fa] px-[13px] py-2.5 text-xs text-[#401b8c]">{step.code}</strong>}</div></article>
            ))}
          </div>
          <aside className="sticky top-[30px] rounded-[36px_10px] bg-primary p-9 text-white max-[780px]:relative max-[780px]:top-0"><Handshake className="text-[#f5c94f]" /><p className={`${goldSectionEyebrowClass} !mt-[30px]`}>Why employers use professional development</p><h3 className="text-3xl leading-[1.16] !text-white">Build capability around the organisation you are becoming</h3><ul className="my-[30px] grid list-none gap-[13px] border-t border-white/[.13] p-0 pt-[25px]">{employerBenefits.map((item) => <li className="flex gap-2.5 text-[13px] text-white/75" key={item}><Check className="w-[15px] text-[#f5c94f]" />{item}</li>)}</ul><ArrowLink href="/book-session" gold>Discuss workforce development</ArrowLink></aside>
        </div>
      </div>
    </section>
  );
}
