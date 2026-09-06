import { ArrowRight } from "lucide-react";

import { fundingRoutes } from "../data";
import { actionsClass, ArrowLink, containerClass, goldSectionEyebrowClass } from "./shared";

export function HeroSection() {
  return (
    <section className="kbc-page-hero-offset relative isolate grid min-h-[min(850px,calc(100svh-64px))] items-center overflow-hidden bg-[#401b8c] max-[780px]:min-h-0" id="funding-overview">
      <img className="absolute inset-0 -z-[3] h-full w-full object-cover object-[center_42%] opacity-25 saturate-[.72]" src="/assets/images/professional-development-employers.png" alt="Professionals planning workplace development" />
      <div className="absolute inset-0 -z-[2] h-full w-full bg-[radial-gradient(circle_at_78%_14%,rgba(119,55,154,.34),transparent_24%),radial-gradient(circle_at_16%_84%,rgba(214,176,78,.12),transparent_28%),linear-gradient(rgba(64,27,140,.7),rgba(64,27,140,.7))]" />
      <img className="pointer-events-none absolute -bottom-[190px] -right-[90px] -z-[1] w-[min(680px,44vw)] select-none opacity-[.07]" src="/assets/patterns/kbc-horse-growth.png" alt="" />
      <div className={`${containerClass} grid grid-cols-[minmax(0,1fr)_370px] items-end gap-[clamp(56px,8vw,110px)] pb-[clamp(70px,9vw,112px)] max-[1050px]:grid-cols-1 max-[1050px]:items-center max-[780px]:pb-[70px]`}>
        <div className="max-w-[790px] mb-7">
          <p className={`${goldSectionEyebrowClass} !mb-8`}>Funding &amp; eligibility</p>
          <h1 className="mt-0 max-w-[820px] !text-5xl !font-medium !leading-[1.15] !tracking-tight !text-white sm:!text-6xl lg:!text-7xl xl:!text-7xl ">
            Find the right funding route for your <span className="!text-[#F5C94F]">professional development</span>
          </h1>
          <p className="mt-[30px] max-w-[720px] text-[clamp(15px,1.45vw,18px)] leading-[1.75] text-white/70 max-[500px]:text-sm">Whether you are developing your own capability or investing in your workforce, Kent Business College offers different ways to access professional learning — from eligible government-funded programmes to additional KBC-funded benefits and specialist commercial Project Controls development.</p>
          <div className={`${actionsClass} mt-[34px]`}>
            <ArrowLink href="#eligibility-checker" gold>Check your eligibility</ArrowLink>
            <a className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-white/[.07] px-[22px] py-[13px] text-sm font-bold text-white no-underline transition-[transform,background,border-color] duration-200 hover:-translate-y-0.5 max-[500px]:w-full" href="#funding-routes">Compare funding routes <ArrowRight size={17} /></a>
          </div>
        </div>
        <aside className="rounded-[28px_10px] border border-[#f5c94f]/40 bg-[#160521]/60 p-7 shadow-[0_24px_70px_rgba(0,0,0,.22)] backdrop-blur-[18px] max-[1050px]:grid max-[1050px]:max-w-[760px] max-[1050px]:grid-cols-3 max-[1050px]:gap-x-[18px] max-[780px]:block" aria-label="Funding route navigator">
          <p className="mb-[19px] text-[11px] font-bold uppercase tracking-[.18em] text-[#f5c94f] max-[1050px]:col-span-full">Funding route navigator</p>
          {fundingRoutes.map((route, index) => (
            <a className="grid grid-cols-[38px_1fr] gap-[13px] border-t border-white/10 py-[18px] text-white no-underline" key={route.eyebrow} href={route.href}>
              <b className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[#f5c94f]/55 text-[11px] text-[#f5c94f]">0{index + 1}</b>
              <span className="grid gap-[3px]"><strong className="text-[13px] leading-[1.35]">{route.eyebrow}</strong><small className="text-[11px] leading-[1.45] text-white/50">{route.title}</small></span>
            </a>
          ))}
          <em className="block pt-[15px] text-[10px] not-italic leading-[1.6] text-white/40 max-[1050px]:col-span-full">Different routes support different parts of the development experience.</em>
        </aside>
      </div>
    </section>
  );
}
