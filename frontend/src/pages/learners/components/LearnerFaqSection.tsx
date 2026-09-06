import { FaqSection } from "@/components/common/FaqSection";
import { faqs } from "../data";

export function LearnerFaqSection() {
  return (
    <FaqSection id="learner-faq" eyebrow="Questions" title="Frequently asked questions." items={faqs} />
  );
}
