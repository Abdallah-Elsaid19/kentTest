import type { ReactNode } from "react";
import { section, shell } from "@/components/college/layout";
import { SectionHeading } from "./SectionHeading";

export type ProgrammeHeading = { eyebrow: string; title: string; description?: string };
export type ProgrammeSectionData = ProgrammeHeading & { id: string };

export function ProgrammeSection({ id, eyebrow, title, description, tone = "white", pattern, children }: ProgrammeSectionData & {
  tone?: "white" | "soft" | "dark";
  pattern?: "ibis-wreath" | "gold-leaf" | "horse-growth";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${section} relative isolate overflow-hidden sm:!scroll-mt-64 ${tone === "dark" ? "bg-primary-dark text-white" : tone === "soft" ? "bg-kbc-purple-50" : "bg-white"}`} aria-labelledby={`${id}-title`}>
      {pattern && <img src={`/assets/patterns/kbc-${pattern}.png`} alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -left-32 top-1/2 -z-10 hidden h-auto w-[340px] -translate-y-1/2 select-none opacity-[0.055] md:block lg:-left-40 lg:w-[clamp(420px,32vw,560px)]" />}
      <div className={shell}>
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} description={description} inverse={tone === "dark"} />
        {children}
      </div>
    </section>
  );
}
