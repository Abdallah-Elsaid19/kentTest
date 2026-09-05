import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "../data";
import { narrowContainerClass, sectionClass, SectionIntro } from "./shared";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className={sectionClass} id="funding-faqs">
      <div className={narrowContainerClass}>
        <SectionIntro eyebrow="Frequently asked questions" title="Common questions about funding and eligibility" align="center" />
        <div className="border-t border-[#e8e0ef]">
          {faqs.map(([questionText, answer], index) => (
            <article className="border-b border-[#e8e0ef]" key={questionText}>
              <button className="flex w-full cursor-pointer items-center justify-between gap-[30px] border-0 bg-transparent px-[5px] py-[25px] text-left text-base font-semibold text-[#24152f]" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} type="button"><span>{questionText}</span><ChevronDown className={`w-[19px] shrink-0 text-[#401b8c] transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} /></button>
              <div className={`overflow-hidden transition-[max-height,padding,opacity] duration-[350ms] ${openFaq === index ? "max-h-[260px] pb-[26px] pl-[5px] pr-[50px] opacity-100" : "max-h-0 p-0 opacity-0"}`}><p className="text-sm leading-[1.75] text-[#766d7c]">{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
