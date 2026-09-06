import { ArrowLink, narrowContainerClass, sectionClass, sectionEyebrowClass } from "./shared";

export function EligibilityTransitionSection() {
  return (
    <section className={`${sectionClass} overflow-hidden text-center`} id="eligibility-transition">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dfcfe3] to-transparent" />
      <div className={narrowContainerClass}>
        <p className={`${sectionEyebrowClass} !mx-auto`}>Which route fits your circumstances?</p>
        <h2 className="mx-auto mt-6 max-w-[850px] text-[clamp(34px,4.5vw,54px)] font-semibold leading-[1.08]">Next, check whether a funded programme could work for you</h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.7] text-[#766d7c]">DfE-funded programmes have specific learner and employer requirements. If those requirements do not fit your circumstances, the Project Controls commercial route provides another option for specialist development.</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4"><ArrowLink href="#eligibility">Check DfE eligibility</ArrowLink><ArrowLink href="#commercial-access">Continue exploring commercial development</ArrowLink></div>
      </div>
    </section>
  );
}
