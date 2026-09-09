import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { section, shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import type { ProgrammeSectionData } from "./ProgrammeSection";

export function ProgrammeCtaSection({ data, actions, children }: {
  data: ProgrammeSectionData & { actions?: readonly { label: string; to: string }[] };
  actions?: ReactNode;
  children?: ReactNode;
}) {
  const titleId = `${data.id}-title`;
  return <section id={data.id} className={`${section} bg-white sm:!scroll-mt-64`} aria-labelledby={titleId}>
    <div className={shell}>
      <CollegeCtaPanel {...data} id={titleId} actions={actions ?? data.actions?.map((action, index) => <NavigationButton key={action.to} to={action.to} variant={index === 0 ? "accent" : "inverse"} className="w-full gap-2">{action.label}<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></NavigationButton>)}>{children}</CollegeCtaPanel>
    </div>
  </section>;
}
