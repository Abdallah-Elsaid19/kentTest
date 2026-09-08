import { ArrowDown } from "lucide-react";

import { NavigationButton } from "@/components/navigation";
import { governanceHero } from "../data";

export function GovernanceHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-primary pb-20 pt-[150px] text-white sm:pt-[164px]" aria-labelledby="governance-page-title">
      <img
        src={governanceHero.image}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(168,120,178,0.34),transparent_27%),radial-gradient(circle_at_14%_86%,rgba(214,176,78,0.13),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh_-_230px)] w-[calc(100%_-_3rem)] max-w-[1050px] items-center justify-center max-sm:w-[calc(100%_-_2rem)]">
        <div className="flex w-full flex-col items-center text-center">
          <div className="mx-auto w-fit">
            <p className="text-xs font-bold uppercase leading-5 tracking-[0.2em] text-kbc-gold-500">{governanceHero.eyebrow}</p>
            <span className="mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] border-kbc-gold-500" aria-hidden="true" />
          </div>
          <h1 id="governance-page-title" className="mt-6 max-w-[950px] font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
            Governance Board <span className="text-kbc-gold-400">{governanceHero.title}</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {governanceHero.description}
          </p>
          <NavigationButton
            to={governanceHero.action.href}
            variant="accent"
            className="mt-8 w-full gap-2 sm:w-auto"
          >
            {governanceHero.action.label}
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
}
