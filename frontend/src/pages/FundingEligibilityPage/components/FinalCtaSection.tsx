import { ArrowUpRight, MessageCircle } from "lucide-react";

import { finalRoutes } from "../data";
import { actionsClass, ArrowLink, containerClass, SectionIntro } from "./shared";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-[clamp(85px,10vw,145px)] text-white" id="final-cta">
      <img className="pointer-events-none absolute right-[-110px] top-1/2 z-0 w-[clamp(330px,30vw,540px)] -translate-y-1/2 select-none opacity-[.055]" src="/assets/patterns/kbc-horse-growth.png" alt="" />
      <div className={containerClass}>
        <SectionIntro
          id="funding-final-title"
          eyebrow="Take the next step"
          title="Ready to find the right route for your professional development?"
          copy="Whether you want to check eligibility, explore a programme or discuss the options available to your organisation, the KBC team is ready to help."
          align="center"
          tone="inverse"
          spaced={false}
        />
        <div className="mt-[65px] grid grid-cols-3 border-y border-white/[.13] max-[780px]:grid-cols-1">
          {finalRoutes.map(({ icon: Icon, label, title, text, href }) => <a className="relative min-h-[250px] border-r border-white/[.13] p-[34px] text-white no-underline last:border-r-0 max-[780px]:min-h-0 max-[780px]:border-b max-[780px]:border-r-0 max-[780px]:last:border-b-0" href={href} key={title}><Icon className="text-[#f5c94f]" /><small className="mt-[31px] block text-[10px] font-bold uppercase tracking-[.15em] text-[#f5c94f]">{label}</small><h3 className="mt-2.5 text-[22px] !text-white">{title}</h3><p className="mt-[9px] text-xs leading-[1.65] text-white/50">{text}</p><ArrowUpRight className="absolute right-[29px] top-[31px] w-[19px]" /></a>)}
        </div>
        <div className="mt-[45px] flex items-center justify-between gap-[30px] max-[780px]:flex-col max-[780px]:items-start"><div className="flex items-center gap-[14px]"><MessageCircle className="h-[42px] w-[42px] rounded-xl bg-[#f5c94f]/[.13] p-2.5 text-[#f5c94f]" /><span className="grid"><strong className="text-[13px]">Not sure which route is right?</strong><small className="mt-1 text-[11px] text-white/45">Book an information session with the KBC team.</small></span></div><div className={actionsClass}><ArrowLink href="/book-session" gold>Book a session</ArrowLink><a className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-white/[.07] px-[22px] py-[13px] text-sm font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5" href="#eligibility-checker">Check eligibility</a></div></div>
      </div>
    </section>
  );
}
