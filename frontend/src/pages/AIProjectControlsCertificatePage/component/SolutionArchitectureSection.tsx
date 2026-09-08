import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import type { AiArchitectureNode } from "../data";
import { architectureData } from "../data";

type NodePresentation = {
  badge: string;
  badgeColor: string;
  borderColor: string;
  cardColor?: string;
  icon?: LucideIcon;
};

const nodePresentations: Record<string, NodePresentation> = {
  "Project applications": { badge: "PM", badgeColor: "#3b82f6", borderColor: "#3b82f6" },
  "Google Sheets": { badge: "GS", badgeColor: "#059669", borderColor: "#10b981" },
  ChatGPT: { badge: "AI", badgeColor: "#0d9488", borderColor: "#14b8a6" },
  Claude: { badge: "C", badgeColor: "#dc7657", borderColor: "#dc7657" },
  "Automation & AI orchestration": { badge: "n8n", badgeColor: "#ff6d5a", borderColor: "#ff6d5a" },
  "AI project analysis": { badge: "AI", badgeColor: "#7c3aed", borderColor: "#8b5cf6", icon: BarChart3 },
  "Human approval": { badge: "", badgeColor: "#b78d32", borderColor: "#d6b04e", cardColor: "#fcf9ef", icon: ShieldCheck },
  "Lovable dashboard / app": { badge: "L", badgeColor: "#ec4899", borderColor: "#ec4899", icon: LayoutDashboard },
  "Audit trail": { badge: "", badgeColor: "#334155", borderColor: "#64748b", icon: FileText },
};

const stageBorderColors = ["#3b82f6", "#8b5cf6", "#d6b04e", "#ec4899"] as const;

function ArchitectureNodeCard({ node }: { node: AiArchitectureNode }) {
  const presentation = nodePresentations[node.title] ?? {
    badge: "AI",
    badgeColor: "#401b8c",
    borderColor: "#401b8c",
  };
  const Icon = presentation.icon;

  return (
    <article
      className="rounded-2xl border border-slate-200 border-t-[3px] bg-white p-4 text-kbc-purple-950 shadow-[0_12px_28px_rgba(11,5,24,.16)]"
      style={{ backgroundColor: presentation.cardColor ?? "#ffffff", borderTopColor: presentation.borderColor }}
    >
      <header className="flex items-start gap-3">
        <span
          className="grid size-11 shrink-0 place-items-center rounded-xl text-xs font-bold text-white shadow-sm"
          style={{ backgroundColor: presentation.badgeColor }}
          aria-hidden="true"
        >
          {Icon ? <Icon className="size-5" strokeWidth={2} /> : presentation.badge}
        </span>
        <div className="min-w-0 pt-0.5">
          <p className="text-xs font-bold uppercase leading-4 tracking-[0.08em] text-slate-500">{node.meta}</p>
          <h4 className="mt-1 text-base font-bold leading-5 text-kbc-purple-950">{node.title}</h4>
        </div>
      </header>
      <p className="mt-4 text-sm leading-6 text-slate-600">{node.description}</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-kbc-purple-50 px-3 py-2 text-xs font-bold text-slate-500">
        <span className="size-2 rounded-full bg-emerald-500" style={{ backgroundColor: "#10b981" }} aria-hidden="true" />
        {node.status}
      </p>
    </article>
  );
}

export function SolutionArchitectureSection() {
  return (
    <ProgrammeSection {...architectureData} tone="soft">
      <div
        className="mt-12 isolate overflow-hidden rounded-[2rem] bg-[#1d0c31] text-white shadow-[0_28px_80px_rgba(32,10,57,.22)]"
        style={{ backgroundColor: "#1d0c31", forcedColorAdjust: "none" }}
      >
        <header
          className="flex flex-col gap-6 border-b border-white/15 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
          style={{ backgroundColor: "#1a092d" }}
        >
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl text-kbc-gold-500" style={{ backgroundColor: "rgba(214,176,78,.1)" }}>
              <Workflow className="size-7" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">AI Project Controls Workflow</h3>
              <p className="mt-1 text-sm text-white/65">Course solution architecture</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-xs font-bold text-white/75">9 connected nodes</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-xs font-bold text-white/75">
              <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,.12)]" style={{ backgroundColor: "#34d399" }} aria-hidden="true" />
              Workflow active
            </span>
          </div>
        </header>

        <div className="bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.08)_1px,transparent_0)] bg-[size:28px_28px] p-5 sm:p-8">
          <ol className="grid items-stretch gap-5 lg:grid-cols-4" aria-label="Four-stage AI project controls workflow">
            {architectureData.stages.map((stage, stageIndex) => (
              <li className="relative flex min-w-0 flex-col" key={stage.number}>
                <article
                  className="flex h-full min-h-[620px] flex-col overflow-hidden rounded-[1.5rem] border border-white/15 border-t-2"
                  style={{ backgroundColor: "rgba(255,255,255,.055)", borderTopColor: stageBorderColors[stageIndex] }}
                >
                  <header className="flex items-center gap-4 border-b border-white/10 px-4 py-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-xs font-bold text-white/80" style={{ backgroundColor: "rgba(255,255,255,.07)" }}>{stage.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
                      <p className="mt-1 text-sm font-bold text-white/90">{stage.subtitle}</p>
                    </div>
                  </header>
                  <div className={`flex flex-1 flex-col gap-4 p-4 ${stageIndex === 0 ? "justify-start" : "justify-center"}`}>
                    {stage.nodes.map((node) => <ArchitectureNodeCard node={node} key={node.title} />)}
                  </div>
                </article>

                {stageIndex < architectureData.stages.length - 1 && (
                  <>
                    <span className="mx-auto my-3 grid size-9 place-items-center rounded-full border border-white/20 text-white/80 lg:hidden" style={{ backgroundColor: "#2b1542" }}>
                      <ArrowDown className="size-4" aria-hidden="true" />
                    </span>
                    <span
                      className={`absolute -right-[1.75rem] top-11 z-10 hidden size-9 place-items-center rounded-full border lg:grid ${stageIndex === 2 ? "border-kbc-gold-500/50 text-kbc-gold-300" : "border-white/20 text-white/80"}`}
                      style={{ backgroundColor: "#2b1542" }}
                    >
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </>
                )}
              </li>
            ))}
          </ol>

          <aside
            className="mt-8 grid gap-5 rounded-2xl border border-kbc-gold-500/45 p-5 sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:items-center"
            style={{ backgroundColor: "rgba(214,176,78,.08)" }}
          >
            <span className="grid size-12 place-items-center rounded-xl text-primary-dark" style={{ backgroundColor: "#d6b04e" }}>
              <ShieldCheck className="size-6" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white">{architectureData.governance.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{architectureData.governance.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2 lg:justify-end">
              {architectureData.governance.checks.map((check) => (
                <li className="rounded-full border border-kbc-gold-500/25 bg-[#1d0c31]/45 px-3 py-2 text-xs font-bold text-kbc-gold-200" key={check}>{check}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </ProgrammeSection>
  );
}
