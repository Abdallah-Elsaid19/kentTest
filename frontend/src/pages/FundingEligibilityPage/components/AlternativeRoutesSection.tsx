import { Check } from "lucide-react";

import { alternativeRouteOptions } from "../data";
import { ArrowLink, containerClass, sectionClass, SectionIntro } from "./shared";

export function AlternativeRoutesSection() {
  return (
    <section className={`${sectionClass} isolate overflow-hidden !bg-primary/[.04]`} id="alternative-routes">
      <img
        className="pointer-events-none absolute right-[clamp(-180px,-9vw,-75px)] top-1/2 z-0 w-[clamp(330px,30vw,540px)] -translate-y-1/2 select-none opacity-[.04] max-[600px]:opacity-[.02]"
        src="/assets/patterns/kbc-horse-growth.png"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className={containerClass}>
        <SectionIntro eyebrow="Another way forward" title="Not every professional-development route needs DfE funding" copy="If a government-funded apprenticeship does not fit your circumstances, KBC can still help you understand the options available. For Project Controls, a commercial module route with applicable IPC bursary support provides additional flexibility." align="center" />
        <div className="grid gap-5 lg:grid-cols-2">
          {alternativeRouteOptions.map((route) => <article className={`flex flex-col rounded-3xl border p-8 md:p-10 ${route.dark ? "border-transparent bg-primary text-white" : "border-[#e8e0ef] bg-white"}`} key={route.title}><p className={`text-[11px] font-bold uppercase tracking-[.18em] ${route.dark ? "text-[#f5c94f]" : "text-[#401b8c]"}`}>{route.eyebrow}</p><h3 className={`mt-4 text-[clamp(26px,3vw,34px)] font-semibold leading-[1.1] ${route.dark ? "!text-white" : ""}`}>{route.title}</h3><p className={`mt-4 text-[15px] leading-[1.7] ${route.dark ? "text-white/60" : "text-[#766d7c]"}`}>{route.copy}</p>{route.dark && <div className="mt-5 rounded-xl bg-white/[.06] p-4"><strong className="text-[clamp(30px,3.2vw,42px)] text-[#f5c94f]">50% / 75%</strong><span className="ml-4 text-[11px] font-bold uppercase tracking-[.12em] text-[#f5c94f]">IPC bursary support</span></div>}{route.items.length > 0 && <ul className="my-6 grid gap-2.5">{route.items.map((item) => <li className="flex gap-2.5 text-sm text-white/80" key={item}><Check className="text-[#f5c94f]" size={16} />{item}</li>)}</ul>}<div className="mt-auto pt-7"><ArrowLink href={route.href} gold={route.dark} newTab={route.href.startsWith("http")}>{route.cta}</ArrowLink></div></article>)}
        </div>
      </div>
    </section>
  );
}
