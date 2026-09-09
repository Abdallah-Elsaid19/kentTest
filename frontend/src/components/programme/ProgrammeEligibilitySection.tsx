import { ArrowRight } from "lucide-react";
import { card } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeChecklist } from "./ProgrammeGrids";
import { ProgrammeSection, type ProgrammeSectionData } from "./ProgrammeSection";

export type ProgrammeEligibilityData = ProgrammeSectionData & {
  main: { eyebrow: string; title: string; items: readonly string[] };
  aside: { eyebrow: string; title: string; description?: string; action: { label: string; to: string } };
};

export function ProgrammeEligibilitySection({ data }: { data: ProgrammeEligibilityData }) {
  const { main, aside } = data;
  return <ProgrammeSection {...data}>
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_.85fr]">
      <article className={card}>
        <p className="text-xs font-bold uppercase tracking-widest text-primary">{main.eyebrow}</p>
        <h3 className="mt-5 text-2xl font-semibold">{main.title}</h3>
        <ProgrammeChecklist items={main.items} />
      </article>
      <aside className="flex flex-col rounded-2xl bg-primary-dark p-6 text-white sm:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-kbc-gold-300">{aside.eyebrow}</p>
        <h3 className="mt-5 text-2xl font-semibold text-white">{aside.title}</h3>
        <p className="mb-8 mt-5 flex-1 text-sm leading-7 text-white/75">{aside.description}</p>
        <NavigationButton to={aside.action.to} variant="accent" className="w-full gap-2">{aside.action.label}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
      </aside>
    </div>
  </ProgrammeSection>;
}
