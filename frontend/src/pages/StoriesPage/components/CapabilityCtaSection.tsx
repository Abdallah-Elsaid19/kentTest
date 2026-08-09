import { NavigationButton } from "@/components/navigation";

export function CapabilityCtaSection() {
  return (
    <section className="figma-funding !py-16 sm:!py-20 xl:!py-[118px]" aria-labelledby="capability-cta-title">
      <div className="figma-shell">
        <div className="figma-funding__card relative !min-h-0 !grid-cols-1 !gap-8 !overflow-hidden !p-6 sm:!p-10 lg:!grid-cols-[minmax(0,1fr)_auto] lg:!items-center lg:!gap-16 xl:!p-14">
          <div className="relative z-10">
            <h2 className="!text-4xl !leading-[1.02] !text-white sm:!text-5xl xl:!text-[58px]" id="capability-cta-title">Build capability your<br className="hidden sm:block" /> organisation can use.</h2>
            <p className="mt-5 max-w-2xl !text-base !leading-7 text-white/65">Discuss workforce needs, programme fit and possible apprenticeship funding with Kent Business College.</p>
          </div>
          <div className="relative z-10 !flex !flex-col !items-stretch !gap-3 sm:!flex-row">
            <NavigationButton className="figma-btn figma-btn--gold" to="/book-session" variant="accent">Book a consultation</NavigationButton>
            <NavigationButton className="figma-btn figma-btn--ghost" to="/programmes" variant="inverse">Explore programmes</NavigationButton>
          </div>
          <span className="pointer-events-none absolute -right-28 -top-52 h-96 w-96 rounded-full border border-kbc-gold-500/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
