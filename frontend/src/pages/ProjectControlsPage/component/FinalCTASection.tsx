import { useCmsBindings } from "@/features/cms/publicContent";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";
import { finalCta } from "../data";

export function FinalCTASection() {
  const cms = useCmsBindings(["college_project_controls"]);
  const cmsValues = cms.resolve({ finalCta });

  return cms.render((
    <section id="pc-cta" className="scroll-mt-40 bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="pc-cta-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <CollegeCtaPanel id="pc-cta-title" eyebrow={cmsValues.finalCta.eyebrow} title={cmsValues.finalCta.title} description={cmsValues.finalCta.description} actions={<>
            <NavigationButton className="w-full justify-between px-6" to={cms.text("college_project_controls.pages_project_controls_page_component_fi_final_ctasection.to_001")} variant="accent">
              {cmsValues.finalCta.primaryLabel} <ArrowRight className="size-4" aria-hidden="true" />
            </NavigationButton>
            <NavigationButton className="w-full justify-between px-6" to={cms.text("college_project_controls.pages_project_controls_page_component_fi_final_ctasection.to_002")} variant="inverse">
              {cmsValues.finalCta.secondaryLabel} <ArrowUpRight className="size-4" aria-hidden="true" />
            </NavigationButton>
        </>} />
      </div>
    </section>
  ));
}
