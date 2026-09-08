import { ChevronDown, Clock3, FolderCheck } from "lucide-react";

import { ProgrammeCardGrid } from "@/components/programme/ProgrammeGrids";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { capstoneData, curriculumData } from "../data";

export function CurriculumJourneySection() {
  return (
    <ProgrammeSection {...curriculumData} pattern="gold-leaf">
      <div className="mt-10 grid gap-4 rounded-2xl bg-primary-dark p-5 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
        <div><h3 className="text-2xl font-semibold text-white">{curriculumData.method}</h3><p className="mt-2 text-sm leading-6 text-white/65">{curriculumData.note}</p></div>
        <div className="flex items-center gap-3 text-sm font-semibold text-kbc-gold-300"><Clock3 className="size-5" aria-hidden="true" />14 sessions · 28 live hours</div>
      </div>

      <div className="mt-8 space-y-3">
        {curriculumData.modules.map((module, index) => (
          <details className="group overflow-hidden rounded-2xl border border-kbc-purple-100 bg-white open:border-primary/25 open:shadow-[0_16px_40px_rgba(39,14,73,.08)]" open={index === 0} key={module.number}>
            <summary className="grid min-h-20 cursor-pointer list-none items-center gap-4 p-5 focus-visible:outline-primary sm:grid-cols-[56px_1fr_auto] sm:p-6 [&::-webkit-details-marker]:hidden">
              <span className="grid size-12 place-items-center rounded-xl bg-primary text-sm font-bold text-white">{String(module.number).padStart(2, "0")}</span>
              <span>
                <span className="block text-lg font-semibold leading-6 text-kbc-purple-950 sm:text-xl">{module.title}</span>
                <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-kbc-purple-700"><span>{module.sessionRange}</span><span>{module.liveHours}</span></span>
              </span>
              <ChevronDown className="size-5 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <ol className="grid gap-px border-t border-kbc-purple-100 bg-kbc-purple-100 sm:grid-cols-2">
              {module.sessions.map((session) => (
                <li className="bg-kbc-purple-50 p-5 sm:p-6" key={session.number}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Session {session.number}</p>
                  <h4 className="mt-3 text-lg font-semibold text-kbc-purple-950">{session.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{session.description}</p>
                </li>
              ))}
            </ol>
          </details>
        ))}
      </div>
    </ProgrammeSection>
  );
}

export function CapstoneProjectsSection() {
  return (
    <ProgrammeSection {...capstoneData} tone="soft">
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/15 bg-white p-5 text-sm leading-7 text-[var(--color-muted)]">
        <FolderCheck className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
        Each capstone uses an approved workplace case or an anonymised KBC training scenario and must remain useful, traceable, controlled, tested, measurable and transferable.
      </div>
      <ProgrammeCardGrid items={capstoneData.items} />
    </ProgrammeSection>
  );
}
