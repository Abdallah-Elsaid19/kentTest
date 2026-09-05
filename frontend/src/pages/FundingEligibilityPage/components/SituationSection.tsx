import { useState } from "react";
import { Check } from "lucide-react";

import { fundingAudiences, type FundingAudienceId } from "../data";
import { ArrowLink, containerClass, sectionClass, SectionIntro } from "./shared";

export function SituationSection() {
  const [activeId, setActiveId] = useState<FundingAudienceId>("professionals");
  const active = fundingAudiences.find((audience) => audience.id === activeId) ?? fundingAudiences[0];
  const ActiveIcon = active.icon;

  return (
    <section className={`${sectionClass} bg-[#f7f4fa]`}>
      <div className={containerClass}>
        <SectionIntro eyebrow="Find your route" title="Start with what you need to achieve" copy="The right development route depends on your role, employer, programme and the capability you want to build." />
        <div className="mb-10 flex justify-center">
          <div className="inline-flex max-w-full gap-1 rounded-full border border-[#e8e0ef] bg-white p-1" role="tablist" aria-label="Choose your perspective">
            {fundingAudiences.map((audience) => {
              const AudienceIcon = audience.icon;
              return <button className={`flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-colors max-[500px]:px-4 max-[500px]:text-xs ${activeId === audience.id ? "bg-[#2f1468] text-white" : "text-[#766d7c] hover:text-[#24152f]"}`} key={audience.id} onClick={() => setActiveId(audience.id)} role="tab" aria-selected={activeId === audience.id} type="button"><AudienceIcon size={17} />{audience.tab}</button>;
            })}
          </div>
        </div>
        <div className="mx-auto grid max-w-[1080px] overflow-hidden rounded-3xl border border-[#e8e0ef] bg-white md:grid-cols-2">
          <div className="relative hidden min-h-[390px] overflow-hidden bg-[#2f1468] md:block">
            <img className="absolute inset-0 h-full w-full object-cover object-top" src={active.image} alt="" aria-hidden="true" />
            <div className="absolute inset-0 bg-[#21082f]/75" />
            <div className="absolute inset-0 flex flex-col justify-between p-9"><span className="grid h-14 w-14 place-items-center rounded-full border border-[#f5c94f]/40 bg-[#f5c94f]/10 text-[#f5c94f]"><ActiveIcon /></span><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#f5c94f]">{active.eyebrow}</p><p className="mt-3 max-w-xs text-2xl font-semibold leading-[1.2] text-white">Development shaped around your circumstances.</p></div></div>
          </div>
          <div className="flex flex-col p-8 md:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#401b8c]">{active.eyebrow}</p>
            <h3 className="mt-3 text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.15]">{active.title}</h3>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#766d7c]">{active.copy}</p>
            <ul className="mb-7 mt-6 grid gap-2.5">{active.points.map((point) => <li className="flex items-start gap-3 text-sm text-[#564d5b]" key={point}><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#fff3ca] text-[#8f6b22]"><Check size={12} /></span>{point}</li>)}</ul>
            <div className="mt-auto"><ArrowLink href={active.href}>{active.cta}</ArrowLink></div>
          </div>
        </div>
      </div>
    </section>
  );
}
