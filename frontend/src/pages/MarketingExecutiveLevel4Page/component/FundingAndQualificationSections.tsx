import { ArrowRight, ShieldCheck } from "lucide-react";
import { card } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeCardGrid, ProgrammeChecklist } from "@/components/programme/ProgrammeGrids";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { ProgrammeEligibilitySection } from "@/components/programme/ProgrammeEligibilitySection";
import { ProgrammeQualificationSection } from "@/components/programme/ProgrammeQualificationSection";
import { cimQualification, eligibilityData, fundingData, heroData } from "../data";

export function EligibilitySection() {
  return <ProgrammeEligibilitySection data={eligibilityData} />;
}

export function FundingSection() {
  const { main } = fundingData;
  return <ProgrammeSection {...fundingData} tone="soft">
    <article className={`${card} mt-12`}>
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{main.eyebrow}</p>
      <h3 className="mt-5 text-2xl font-semibold">{main.title}</h3>
      <p className="mt-5 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">{main.description}</p>
      <ProgrammeChecklist items={main.items} />
      <NavigationButton to={main.action.to} className="mt-7 w-full gap-2 sm:w-auto">{main.action.label}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
    </article>
    <ProgrammeCardGrid items={fundingData.items} />
    <p className="mt-8 flex items-start gap-3 rounded-2xl border border-kbc-purple-100 bg-white p-6 text-sm leading-7 text-[var(--color-muted)]"><ShieldCheck className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />{fundingData.note}</p>
  </ProgrammeSection>;
}

export function CimQualificationSection() {
  return <ProgrammeQualificationSection data={cimQualification} image={heroData.qualificationImage} />;
}
