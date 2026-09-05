import { Check } from "lucide-react";

import { programmeRouteOptions } from "../data";
import { ArrowLink, containerClass, eyebrowClass, goldEyebrowClass, sectionClass, SectionIntro } from "./shared";

export function ProjectControlsChoiceSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionIntro eyebrow="Project Controls · Choose your route" title="Complete programme or specialist development?" copy="Two distinct paths make it easier to choose between a complete professional programme and focused capability development." />
        <div className="grid grid-cols-2 gap-[26px] max-[780px]:grid-cols-1">
          {programmeRouteOptions.map((route) => {
            const isDark = route.tone === "dark";
            return (
              <article className={`relative overflow-hidden rounded-[36px_11px] border p-[clamp(28px,4vw,46px)] ${isDark ? "border-transparent bg-[#2f1468] text-white" : "border-[#e8e0ef] bg-[#f7f4fa]"}`} key={route.title}>
                <div className="mx-[calc(clamp(28px,4vw,46px)*-1)] mb-[31px] mt-[calc(clamp(28px,4vw,46px)*-1)] h-[225px] overflow-hidden max-[500px]:h-[185px]"><img className={`h-full w-full object-cover object-[center_40%] ${isDark ? "opacity-[.68]" : ""}`} src={route.image} alt={route.imageAlt} /></div>
                <p className={isDark ? goldEyebrowClass : eyebrowClass}>{route.eyebrow}</p>
                <h3 className={`mt-[13px] text-[clamp(28px,3.4vw,43px)] font-semibold leading-[1.1] tracking-[-.035em] ${isDark ? "!text-white" : ""}`}>{route.title}</h3><h4 className={`mt-[14px] text-[15px] font-semibold ${isDark ? "text-[#f5c94f]" : "text-[#401b8c]"}`}>{route.subtitle}</h4>
                {!isDark && <div className="mt-6 flex items-baseline gap-3 rounded-[10px] border border-[#ded3e8] bg-white p-[18px]"><strong className="text-3xl text-[#401b8c]">50%</strong><span>or</span><strong className="text-3xl text-[#401b8c]">75%</strong><small className="ml-auto text-[#766d7c]">IPC bursary</small></div>}
                <ul className="mb-[31px] mt-[27px] grid list-none gap-3 p-0">{route.items.map((item) => <li className={`flex items-center gap-2.5 text-[13px] ${isDark ? "text-white/75" : "text-[#766d7c]"}`} key={item}><Check className={isDark ? "text-[#f5c94f]" : "text-[#401b8c]"} size={17} />{item}</li>)}</ul>
                <ArrowLink href={route.href} gold={isDark}>{route.cta}</ArrowLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
