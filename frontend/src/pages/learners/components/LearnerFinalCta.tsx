import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function LearnerFinalCta() {
  return (
    <section className="bg-[#f7f4fb] py-16 sm:py-20 lg:py-28" id="learner-apply" aria-labelledby="learner-apply-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16 lg:p-14">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
          <img className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block" src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C94F]">Take the next step</p>
            <h2 id="learner-apply-title" className="mt-5 max-w-[760px] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Your development starts with a conversation.
            </h2>
            <p className="mt-6 max-w-[720px] text-sm leading-7 text-white/65 sm:text-base">
              Book a free information session to explore the right programme for your role and confirm your funding eligibility.
            </p>
          </div>
          <div className="mt-9 grid gap-3 lg:mt-0">
            <NavigationButton className="w-full justify-between px-6" to="/book-session" variant="accent">
              Book an info session <ArrowRight className="size-4" aria-hidden="true" />
            </NavigationButton>
            <NavigationButton className="w-full justify-between px-6" to="/contact" variant="inverse">
              Speak to our team <ArrowUpRight className="size-4" aria-hidden="true" />
            </NavigationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
