import { ArrowLink, NavigationButton } from "@/components/navigation";

export function FundingGuidanceSection() {
  return (
    <section className="figma-funding !py-16 sm:!py-20 xl:!py-[118px]" id="funding" aria-labelledby="funding-title">
      <div className="figma-shell">
        <div className="figma-funding__card !min-h-0 !grid-cols-1 !gap-8 !p-6 sm:!p-10 lg:!grid-cols-[1fr_auto] lg:!items-end xl:!p-14">
          <div>
            <span className="!text-xs !font-bold !leading-5 !tracking-widest !uppercase">Funding and programme guidance</span>
            <h2 className="!text-4xl !font-semibold !leading-none !tracking-tight sm:!text-5xl xl:!text-6xl" id="funding-title">Turn available funding into<br />stronger professional capability.</h2>
            <p className="!text-sm !leading-relaxed sm:!text-base">Tell KBC about your organisation, employee roles and priority skills. The team can help you identify an appropriate programme and funding route.</p>
          </div>
          <div>
            <NavigationButton className="figma-btn figma-btn--gold" to="/book-session">Check funding eligibility</NavigationButton>
            <ArrowLink className="!text-sm !font-semibold !leading-5" to="/contact">Contact the employer team</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
