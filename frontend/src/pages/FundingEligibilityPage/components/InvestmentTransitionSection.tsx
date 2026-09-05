import { ArrowLink, goldSectionEyebrowClass, narrowContainerClass, sectionClass } from "./shared";

export function InvestmentTransitionSection() {
  return (
    <section className={`${sectionClass} overflow-hidden bg-[#21082f] text-center text-white`}>
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#f5c94f]/10 blur-[120px]" />
      <div className={narrowContainerClass}>
        <p className={`${goldSectionEyebrowClass} !mx-auto`}>Beyond government funding</p>
        <h2 className="mx-auto mt-6 max-w-[850px] text-[clamp(34px,4.5vw,54px)] font-semibold leading-[1.08] !text-white">The programme is only part of the investment</h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.7] text-white/60">For selected programmes and eligible learners, Kent Business College separately funds professional qualifications, events, progression opportunities and additional benefits designed to extend development beyond the core apprenticeship.</p>
        <div className="mt-9 inline-flex"><ArrowLink href="#kbc-fund-details" gold>Explore what KBC funds</ArrowLink></div>
      </div>
    </section>
  );
}
