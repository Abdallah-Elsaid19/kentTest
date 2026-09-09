import { Bot, BrainCircuit, Check, Database, LayoutDashboard, Network, ShieldCheck, Workflow } from "lucide-react";

import { CollegeStats } from "@/components/college/CollegeStats";
import { ProgrammeCardGrid } from "@/components/programme/ProgrammeGrids";
import { ProgrammeHero } from "@/components/programme/ProgrammeHero";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { heroData, audienceData, outcomesData, propositionData, toolStackData } from "../data";

const toolIcons = [BrainCircuit, Bot, Workflow, Database, LayoutDashboard, Network] as const;

const deliveryStats = [
  { value: "14", label: "Live practical sessions" },
  { value: "2h", label: "Each tutor-led session" },
  { value: "28h", label: "Total live learning time" },
  { value: "4m", label: "Delivered over four months" },
] as const;

export function AiCertificateHero() {
  return <ProgrammeHero {...heroData} />;
}

export function PropositionSection() {
  return (
    <ProgrammeSection {...propositionData} pattern="ibis-wreath">
      <ProgrammeCardGrid
        items={propositionData.items.map((item) => ({ title: item.title, description: item.description, tags: [item.tag] }))}
        editorial
      />
      <CollegeStats items={deliveryStats} />
    </ProgrammeSection>
  );
}

export function ToolStackSection() {
  return (
    <ProgrammeSection {...toolStackData} tone="dark" pattern="horse-growth">
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {toolStackData.items.map((tool, index) => {
          const Icon = toolIcons[index];
          return (
            <li className="group min-w-0 border-t border-white/20 px-1 py-7 transition-colors hover:border-kbc-gold-500" key={tool.title}>
              <Icon className="size-7 text-kbc-gold-500" strokeWidth={1.6} aria-hidden="true" />
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-kbc-gold-300">{tool.role}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{tool.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{tool.description}</p>
            </li>
          );
        })}
      </ul>
      <aside className="mt-10 grid gap-6 rounded-2xl border border-white/15 bg-white/[.06] p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
        <span className="grid size-16 place-items-center rounded-2xl bg-kbc-gold-500 text-primary-dark"><Bot className="size-8" aria-hidden="true" /></span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-gold-300">Meet your course companion</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">A governed AI assistant, built the way you will learn to build one.</h3>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/65">Every workflow on this programme keeps a human in control. The assistant supports analysis and action preparation while approval, accountability and audit evidence remain with people.</p>
        </div>
      </aside>
    </ProgrammeSection>
  );
}

export function AudienceSection() {
  return (
    <ProgrammeSection {...audienceData} tone="soft">
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {audienceData.groups.map((group, index) => (
          <article className={`rounded-2xl p-7 sm:p-9 ${index === 0 ? "bg-primary-dark text-white" : "border border-kbc-purple-100 bg-white"}`} key={group.eyebrow}>
            <p className={`text-xs font-bold uppercase tracking-[0.16em] ${index === 0 ? "text-kbc-gold-500" : "text-primary"}`}>{group.eyebrow}</p>
            <h3 className={`mt-5 text-3xl font-semibold ${index === 0 ? "text-white" : "text-kbc-purple-950"}`}>{group.title}</h3>
            <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-white/65" : "text-[var(--color-muted)]"}`}>{group.description}</p>
            <ul className={`mt-7 grid gap-3 border-t pt-6 sm:grid-cols-2 ${index === 0 ? "border-white/15" : "border-kbc-purple-100"}`}>
              {group.items.map((item) => <li className={`flex items-start gap-3 text-sm leading-6 ${index === 0 ? "text-white/75" : "text-kbc-purple-800"}`} key={item}><Check className={`mt-1 size-4 shrink-0 ${index === 0 ? "text-kbc-gold-500" : "text-primary"}`} aria-hidden="true" />{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </ProgrammeSection>
  );
}

export function OutcomesSection() {
  return (
    <ProgrammeSection {...outcomesData}>
      <ProgrammeCardGrid items={outcomesData.items} />
      <p className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/15 bg-kbc-purple-50 p-5 text-sm leading-7 text-[var(--color-muted)]">
        <ShieldCheck className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
        These capabilities are developed through practical activities, testing and saved portfolio evidence, with human approval and safe failure paths designed into the work.
      </p>
    </ProgrammeSection>
  );
}
