import { eligibilityItems, eligibilityRequirements } from "../data";
import { containerClass, sectionClass, sectionEyebrowClass, SectionIntro } from "./shared";

export function EligibilitySection() {
  return (
    <section className={`${sectionClass} isolate overflow-hidden`} id="eligibility">
      <img
        className="pointer-events-none absolute left-[clamp(-180px,-9vw,-75px)] top-1/2 z-0 w-[clamp(330px,30vw,540px)] -translate-y-1/2 select-none opacity-[.045] max-[600px]:opacity-[.025]"
        src="/assets/patterns/kbc-gold-leaf.png"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className={containerClass}>
        <SectionIntro eyebrow="DfE funding eligibility" title="Could a funded route work for you or your employee?" copy="DfE-funded apprenticeship programmes are workplace-development routes and require eligible learner circumstances, paid employment and employer participation." />
        <div>
          {eligibilityItems.map(({ icon: Icon, title, copy }, index) => <article className="grid grid-cols-[54px_40px_minmax(190px,.7fr)_1.4fr] items-center gap-5 border-t border-[#e8e0ef] px-[9px] py-[27px] max-[780px]:grid-cols-[45px_28px_1fr] max-[780px]:gap-[13px] max-[500px]:items-start" key={title}><span className="grid h-[45px] w-[45px] place-items-center rounded-[18px_7px] bg-[#401b8c] text-[11px] font-bold text-white">0{index + 1}</span><Icon className="text-[#401b8c]" /><h3 className="text-lg max-[500px]:mt-2">{title}</h3><p className="text-[13px] leading-[1.7] text-[#766d7c] max-[780px]:col-start-3">{copy}</p></article>)}
        </div>
        <div className="mt-10 border-t border-[#e8e0ef] pt-[31px]">
          <p className={`${sectionEyebrowClass} [&::after]:!hidden`}>A funded route typically requires</p>
          <div className="flex flex-wrap gap-[11px]">{eligibilityRequirements.map((item) => <span className="rounded-full bg-[#f7f4fa] px-3 py-[9px] text-xs font-semibold text-[#2f1468]" key={item}>{item}</span>)}</div>
          <p className="mt-5 max-w-[820px] text-xs leading-[1.7] text-[#766d7c]">This is only a scanning summary. The detailed criteria above remain the reference for understanding DfE funding requirements.</p>
        </div>
      </div>
    </section>
  );
}
