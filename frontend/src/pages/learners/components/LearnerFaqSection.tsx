import { useCmsBindings } from "@/features/cms/publicContent";
import { FaqSection } from "@/components/common/FaqSection";
import { faqs } from "../data";

export function LearnerFaqSection() {
  const cms = useCmsBindings(["learners"]);
  const cmsValues = cms.resolve({ faqs });

  return cms.render((
    <FaqSection id="learner-faq" eyebrow={cms.text("learners.pages_learners_components_learner_faq_se_learner_faq_section.eyebrow_001")} title={cms.text("learners.pages_learners_components_learner_faq_se_learner_faq_section.title_002")} items={cmsValues.faqs} />
  ));
}
