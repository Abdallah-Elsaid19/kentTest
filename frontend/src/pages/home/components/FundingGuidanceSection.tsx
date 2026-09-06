import { ArrowLink, NavigationButton } from "@/components/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FundingGuidanceSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="funding" aria-labelledby="funding-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16 lg:p-14">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
          <img
            className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block"
            src="/assets/patterns/kbc-horse-growth.png"
            alt=""
            aria-hidden="true"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C94F]">Your next step</p>
            <h2 className="mt-5 max-w-[760px] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl" id="funding-title">Ready to build what comes{"\u00A0"}next?</h2>
            <p className="mt-6 max-w-[720px] text-sm leading-7 text-white/65 sm:text-base">Find the professional programme, funding route or development option that fits you or your organisation.</p>
            <small className="mt-8 block text-xs leading-relaxed text-white/50 sm:text-sm">For professionals and employers · Funding subject to eligibility and availability</small>
          </div>
          <div className="mt-9 grid gap-3 lg:mt-0">
            <NavigationButton className="w-full justify-between px-6" to="#programmes" variant="accent">Find your programme <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
            <NavigationButton className="w-full justify-between px-6" to="/book-session" variant="inverse">Book an information session <ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
            <ArrowLink className="w-full justify-between px-6 py-3 text-sm font-semibold" to="/eligibility" direction="up-right" tone="inverse">Check eligibility &amp; funding</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
