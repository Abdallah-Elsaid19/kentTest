import { useCmsBindings } from "@/features/cms/publicContent";
import { FaqSection } from "@/components/common/FaqSection";
import { faqs } from "../data";

export function LearnerFaqSection() {
  const cms = useCmsBindings(["employers"]);
  const cmsValues = cms.resolve({ faqs });

  return cms.render((
    <FaqSection id="employer-faq" eyebrow={cms.text("employers.pages_employers_components_learner_faq_s_learner_faq_section.eyebrow_001")} title={cms.text("employers.pages_employers_components_learner_faq_s_learner_faq_section.title_002")} items={cmsValues.faqs} />
  ));
}
