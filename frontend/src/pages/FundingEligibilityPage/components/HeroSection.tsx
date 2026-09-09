import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowRight } from "lucide-react";
import { CollegeHeroSurface } from "@/components/college/CollegeHeroSurface";

import { fundingRoutes } from "../data";
import { actionsClass, ArrowLink, containerClass, goldSectionEyebrowClass } from "./shared";

export function HeroSection() {
  const cms = useCmsBindings(["funding"]);
  const cmsValues = cms.resolve({ fundingRoutes });

  return cms.render((
    <CollegeHeroSurface image="/assets/images/professional-development-employers.png" id="funding-overview" titleId="funding-title" variant="funding">
      <div className={`${containerClass} grid grid-cols-[minmax(0,1fr)_370px] items-end gap-[clamp(56px,8vw,110px)] pb-[clamp(70px,9vw,112px)] max-[1050px]:grid-cols-1 max-[1050px]:items-center max-[780px]:pb-[70px]`}>
        <div className="max-w-[790px] mb-7">
          <p className={`${goldSectionEyebrowClass} !mb-8`}>Funding &amp; eligibility</p>
          <h1 id="funding-title" className="mt-0 max-w-[820px] !text-5xl !font-medium !leading-[1.15] !tracking-tight !text-white sm:!text-6xl lg:!text-7xl xl:!text-7xl ">
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
          {cmsValues.fundingRoutes.map((route, index) => (
            <a className="grid grid-cols-[38px_1fr] gap-[13px] border-t border-white/10 py-[18px] text-white no-underline" key={route.eyebrow} href={route.href}>
              <b className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[#f5c94f]/55 text-[11px] text-[#f5c94f]">0{index + 1}</b>
              <span className="grid gap-[3px]"><strong className="text-[13px] leading-[1.35]">{route.eyebrow}</strong><small className="text-[11px] leading-[1.45] text-white/50">{route.title}</small></span>
            </a>
          ))}
          <em className="block pt-[15px] text-[10px] not-italic leading-[1.6] text-white/40 max-[1050px]:col-span-full">Different routes support different parts of the development experience.</em>
        </aside>
      </div>
    </CollegeHeroSurface>
  ));
}
