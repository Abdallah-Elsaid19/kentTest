import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";
import { finalCta } from "../data";

export function FinalCTASection() {
  return (
    <section id="pc-cta" className="scroll-mt-40 bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="pc-cta-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <CollegeCtaPanel id="pc-cta-title" eyebrow={finalCta.eyebrow} title={finalCta.title} description={finalCta.description} actions={<>
            <NavigationButton className="w-full justify-between px-6" to="/book-session" variant="accent">
              {finalCta.primaryLabel} <ArrowRight className="size-4" aria-hidden="true" />
            </NavigationButton>
            <NavigationButton className="w-full justify-between px-6" to="/funding-eligibility" variant="inverse">
              {finalCta.secondaryLabel} <ArrowUpRight className="size-4" aria-hidden="true" />
            </NavigationButton>
        </>} />
      </div>
    </section>
  );
}
