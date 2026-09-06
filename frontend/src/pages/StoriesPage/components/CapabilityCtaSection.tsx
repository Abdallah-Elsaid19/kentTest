import { NavigationButton } from "@/components/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function CapabilityCtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="capability-cta-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16 lg:p-14">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
          <img className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block" src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" />
          <div>
            <h2 className="max-w-[760px] !text-4xl !font-semibold !leading-[1.02] !tracking-[-0.04em] !text-white sm:!text-5xl lg:!text-6xl" id="capability-cta-title">Build capability your organisation can use.</h2>
            <p className="mt-6 max-w-[720px] !text-sm !leading-7 !text-white/65 sm:!text-base">Discuss workforce needs, programme fit and possible apprenticeship funding with Kent Business College.</p>
          </div>
          <div className="mt-9 grid gap-3 lg:mt-0">
            <NavigationButton className="w-full justify-between px-6" to="/book-session" variant="accent">Book information session <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
            <NavigationButton className="w-full justify-between px-6" to="/programmes" variant="inverse">Explore programmes <ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
