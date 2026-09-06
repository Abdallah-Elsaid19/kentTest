import { FaqSection as SharedFaqSection } from "@/components/common/FaqSection";
import { faqs } from "../data";

export function FaqSection() {
  return (
    <SharedFaqSection id="funding-faqs" title="Common questions about funding and eligibility" items={faqs} />
  );
}
