import { useCmsBindings } from "@/features/cms/publicContent";
import { FaqSection as SharedFaqSection } from "@/components/common/FaqSection";
import { faqs } from "../data";

export function FaqSection() {
  const cms = useCmsBindings(["funding"]);
  const cmsValues = cms.resolve({ faqs });

  return cms.render((
    <SharedFaqSection id="funding-faqs" title="Common questions about funding and eligibility" items={cmsValues.faqs} />
  ));
}
