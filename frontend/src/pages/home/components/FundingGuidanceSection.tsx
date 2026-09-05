import { ArrowLink, NavigationButton } from "@/components/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FundingGuidanceSection() {
  return (
    <section className="figma-funding !py-16 sm:!py-20 xl:!py-[118px]" id="funding" aria-labelledby="funding-title">
      <div className="figma-shell">
        <div className="figma-funding__card relative isolate !min-h-0 !grid-cols-1 !gap-8 !overflow-hidden !p-6 sm:!p-10 lg:!grid-cols-[1fr_auto] lg:!items-end xl:!p-14">
          <img
            className="pointer-events-none absolute -bottom-36 -left-28 z-0 hidden w-[clamp(430px,48vw,680px)] select-none opacity-[0.065] sm:block"
            src="/assets/patterns/kbc-horse-growth.png"
            alt=""
            aria-hidden="true"
          />
          <div className="relative z-10">
            <span className="!text-xs !font-bold !leading-5 !tracking-widest !uppercase">Your next step</span>
            <h2 className="!text-4xl !font-semibold !leading-none !tracking-tight sm:!text-5xl xl:!text-6xl" id="funding-title">Ready to build what comes{"\u00A0"}next?</h2>
            <p className="!text-sm !leading-relaxed sm:!text-base">Find the professional programme, funding route or development option that fits you or your organisation.</p>
            <small className="mt-8 block text-xs leading-relaxed text-white/50 sm:text-sm">For professionals and employers · Funding subject to eligibility and availability</small>
          </div>
          <div className="relative z-10 !min-w-0 sm:!min-w-[320px]">
            <NavigationButton className="figma-btn figma-btn--gold !w-full !justify-between" to="#programmes" variant="accent">Find your programme <ArrowRight aria-hidden="true" /></NavigationButton>
            <NavigationButton className="figma-btn figma-btn--ghost !w-full !justify-between" to="/book-session" variant="inverse">Book an information session <ArrowUpRight aria-hidden="true" /></NavigationButton>
            <ArrowLink className="!w-full !justify-between !px-5 !text-sm !font-semibold !leading-5" to="/eligibility" direction="up-right" tone="inverse">Check eligibility &amp; funding</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
