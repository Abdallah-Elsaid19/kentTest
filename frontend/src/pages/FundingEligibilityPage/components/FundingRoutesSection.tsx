import { useState } from "react";
import { BadgeCheck, CircleCheckBig } from "lucide-react";

import { fundingRoutes } from "../data";
import { ArrowLink, containerClass, eyebrowClass, sectionClass, SectionIntro } from "./shared";

export function FundingRoutesSection() {
  const [activeRoute, setActiveRoute] = useState(0);
  const route = fundingRoutes[activeRoute];

  return (
    <section className={`${sectionClass} bg-[linear-gradient(145deg,#fff_0%,#faf7fc_100%)]`} id="funding-routes">
      <div className={containerClass}>
        <SectionIntro eyebrow="Three distinct routes" title="One ambition. Different ways to fund it." copy="Choose a route to see what it supports, who it is for and where to go next." />
        <div className="grid grid-cols-[.78fr_1.22fr] items-stretch gap-[50px] max-[1050px]:grid-cols-1">
          <div className="flex flex-col max-[1050px]:grid max-[1050px]:grid-cols-3 max-[780px]:grid-cols-1" role="tablist">
            {fundingRoutes.map((item, index) => (
              <button
                key={item.eyebrow}
                className="relative grid min-h-[136px] min-w-0 flex-1 cursor-pointer grid-cols-[55px_1fr] grid-rows-[auto_auto] content-center gap-x-[18px] border-0 border-l-[3px] border-l-transparent border-t border-t-[#e8e0ef] bg-transparent px-6 py-7 text-left text-[#766d7c] last:border-b last:border-b-[#e8e0ef] aria-selected:border-l-primary aria-selected:bg-kbc-purple-50 aria-selected:text-primary max-[1050px]:grid-cols-[44px_1fr] max-[1050px]:px-[14px] max-[1050px]:py-5 max-[780px]:min-h-[112px] max-[780px]:w-full max-[780px]:grid-cols-[52px_minmax(0,1fr)] max-[780px]:px-4"
                onClick={() => setActiveRoute(index)}
                role="tab"
                aria-selected={activeRoute === index}
                type="button"
              >
                <span className="row-span-2 grid h-[47px] w-[47px] place-items-center rounded-full border border-current font-bold max-[1050px]:h-[38px] max-[1050px]:w-[38px]">0{index + 1}</span><b className="text-[15px]">{item.eyebrow}</b><small className="mt-[5px] text-xs text-current opacity-70">{item.title}</small>
              </button>
            ))}
          </div>
          <article className="relative min-h-[540px] overflow-hidden rounded-[38px_12px] bg-[linear-gradient(145deg,#401b8c,#2f1468)] p-[clamp(34px,5vw,64px)] text-white shadow-[0_30px_80px_rgba(64,27,140,.2)] after:absolute after:-bottom-[100px] after:-right-20 after:h-[270px] after:w-[270px] after:rounded-full after:border-[55px] after:border-[#f5c94f]/[.08] after:content-[''] [&>*]:relative [&>*]:z-[1] max-[780px]:min-h-0">
            <p className={`${eyebrowClass} text-[#f5c94f]`}>Route 0{activeRoute + 1}</p>
            <h3 className="mt-[17px] max-w-[620px] text-[clamp(30px,4vw,51px)] font-semibold leading-[1.08] tracking-[-.04em] !text-white">{route.title}</h3>
            <p className="mt-[22px] max-w-[640px] leading-[1.75] text-white/65">{route.text}</p>
            <ul className="my-8 grid list-none grid-cols-2 gap-x-[26px] gap-y-[13px] p-0 max-[780px]:grid-cols-1">{route.details.map((item) => <li className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-white/90" key={item}><CircleCheckBig className="shrink-0 text-[#f5c94f]" size={18} />{item}</li>)}</ul>
            <div className="mb-7 flex items-center gap-3 rounded-[10px] border border-[#f5c94f]/30 bg-[#f5c94f]/[.08] px-[17px] py-[15px] text-[13px] text-[#f5c94f]"><BadgeCheck size={21} /><strong>{route.note}</strong></div>
            <ArrowLink href={route.href}>Explore this route</ArrowLink>
          </article>
        </div>
      </div>
    </section>
  );
}
