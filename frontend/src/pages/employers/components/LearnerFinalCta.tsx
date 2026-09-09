import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function LearnerFinalCta() {
  const cms = useCmsBindings(["employers"]);

  return cms.render((
    <section className="scroll-mt-40 bg-white py-16 sm:py-20 lg:py-28" id="partner-with-us" aria-labelledby="employer-partner-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16 lg:p-14">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
          <img className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block" src={cms.text("employers.pages_employers_components_learner_final_learner_final_cta.src_001")} alt="" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C94F]">{cms.text("employers.pages_employers_components_learner_final_learner_final_cta.text_002")}</p>
            <h2 id="employer-partner-title" className="mt-5 max-w-[760px] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {cms.text("employers.pages_employers_components_learner_final_learner_final_cta.text_003")}</h2>
            <p className="mt-6 max-w-[720px] text-sm leading-7 text-white/65 sm:text-base">
              {cms.text("employers.pages_employers_components_learner_final_learner_final_cta.text_004")}</p>
          </div>
          <div className="mt-9 grid gap-3 lg:mt-0">
            <NavigationButton className="w-full justify-between px-6" to={cms.text("employers.pages_employers_components_learner_final_learner_final_cta.to_005")} variant="accent">
              {cms.text("employers.pages_employers_components_learner_final_learner_final_cta.text_006")}<ArrowRight className="size-4" aria-hidden="true" />
            </NavigationButton>
            <NavigationButton className="w-full justify-between px-6" to={cms.text("employers.pages_employers_components_learner_final_learner_final_cta.to_007")} variant="inverse">
              {cms.text("employers.pages_employers_components_learner_final_learner_final_cta.text_008")}<ArrowUpRight className="size-4" aria-hidden="true" />
            </NavigationButton>
          </div>
        </div>
      </div>
    </section>
  ));
}
