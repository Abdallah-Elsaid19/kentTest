import { Check } from "lucide-react";

import { fundingLayers } from "../data";
import { containerClass, sectionClass, SectionIntro } from "./shared";

export function WhoFundsSection() {
  return (
    <section className={`${sectionClass} isolate overflow-hidden !bg-primary/[.025]`} id="who-funds-what">
      <img
        className="pointer-events-none absolute right-[clamp(-180px,-9vw,-75px)] top-1/2 z-0 w-[clamp(330px,30vw,540px)] -translate-y-1/2 select-none opacity-[.045] max-[600px]:opacity-[.025]"
        src="/assets/patterns/kbc-ibis-wreath.png"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className={containerClass}>
        <SectionIntro eyebrow="Understanding the funding" title="Different funding sources support different parts of the experience" copy="Government funding supports eligible apprenticeship delivery. KBC separately invests in additional professional benefits. Project Controls also has a specialist commercial route supported by IPC bursaries." />
        <div className="grid gap-5">
          {fundingLayers.map((layer) => {
            const Icon = layer.icon;
            const gold = layer.tone === "gold";
            const purple = layer.tone === "purple";
            return <article className={`rounded-3xl border p-7 md:p-9 ${purple ? "border-[#dfcfe3] bg-[#f7f3f8]" : gold ? "border-[#f5c94f]/30 bg-white" : "border-[#e8e0ef] bg-white"}`} key={layer.number}>
              <div className="grid items-start gap-6 md:grid-cols-12">
                <div className="md:col-span-5"><div className="flex items-center gap-3"><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border ${purple ? "border-[#c9adcf] bg-[#2f1468] text-[#f5c94f]" : gold ? "border-[#f5c94f]/50 bg-[#fff3ca] text-[#8f6b22]" : "border-[#e8e0ef] bg-[#f7f4fa] text-[#564d5b]"}`}><Icon size={20} /></span><span className={`text-[11px] font-bold uppercase tracking-[.14em] ${gold ? "text-[#8f6b22]" : "text-[#401b8c]"}`}>Layer {layer.number} · {layer.micro}</span></div><h3 className="mt-4 text-[clamp(22px,2.4vw,28px)] font-semibold leading-[1.15]">{layer.label}</h3><p className="mt-3 text-sm leading-[1.7] text-[#766d7c]">{layer.intro}</p></div>
                <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2 md:col-span-7">{layer.items.map((item) => <li className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#564d5b]" key={item}><Check className={`mt-0.5 shrink-0 ${gold ? "text-[#b78d32]" : "text-[#401b8c]"}`} size={15} />{item}</li>)}</ul>
              </div>
            </article>;
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#e8e0ef] bg-white px-6 py-6 text-center text-[17px] font-semibold leading-snug">One development journey can contain different funding sources. They must not be treated as interchangeable.</p>
      </div>
    </section>
  );
}
