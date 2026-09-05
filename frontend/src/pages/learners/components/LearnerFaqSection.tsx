import { ChevronDown } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { faqs } from "../data";

export function LearnerFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="learner-faq-title">
      <div className="mx-auto w-full max-w-[940px] px-5 sm:px-8 lg:px-10">
        <FigmaSectionHeading id="learner-faq-title" eyebrow="Questions" title="Frequently asked questions." />
        <div className="mt-12 grid gap-3 lg:mt-16">
          {faqs.map((faq) => (
            <details className="group rounded-xl border border-[#e4ddec] bg-white open:shadow-[0_12px_32px_rgba(35,13,63,0.07)]" key={faq.question}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-sm font-semibold text-[#17131d] marker:content-none sm:px-6 sm:text-base">
                <span>{faq.question}</span>
                <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
              </summary>
              <p className="border-t border-[#eee8f3] px-5 py-5 text-sm leading-7 text-[#716a7a] sm:px-6">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
