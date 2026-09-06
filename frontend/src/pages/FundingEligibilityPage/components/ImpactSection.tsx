import { impactStats } from "../data";
import { containerClass, softSectionClass, SectionIntro } from "./shared";

export function ImpactSection() {
  return (
    <section className={softSectionClass}>
      <div className={containerClass}>
        <SectionIntro eyebrow="Our impact" title="From eligibility to capability: the numbers that matter" copy="Funding is the pathway between where a professional is today and where they could be." />
        <div className="grid grid-cols-3 border-l border-t border-[#e8e0ef] max-[780px]:grid-cols-2 max-[500px]:grid-cols-1">
          {impactStats.map(([value, title, text]) => <article className="min-h-[225px] border-b border-r border-[#e8e0ef] bg-white/70 p-8 max-[780px]:min-h-[190px] max-[780px]:p-6" key={`${value}-${title}`}><strong className="block text-[clamp(37px,4vw,55px)] font-semibold tracking-[-.05em] text-[#401b8c]">{value}</strong><h3 className="mt-[17px] text-[17px] font-semibold">{title}</h3><p className="mt-2 text-[13px] leading-[1.65] text-[#766d7c]">{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
