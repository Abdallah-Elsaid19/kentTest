import { card } from "@/components/college/layout";
import { ProgrammeChecklist } from "./ProgrammeGrids";

export type ProgrammeCurriculumTrack = {
  number?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
};

// Shared curriculum treatment from Associate Project Manager Level 4.
export function ProgrammeCurriculumCards({ tracks, columns = 2 }: {
  tracks: readonly ProgrammeCurriculumTrack[];
  columns?: 2 | 3;
}) {
  return <div className={`mt-12 grid gap-6 ${columns === 3 ? "xl:grid-cols-3" : "lg:grid-cols-2"}`}>
    {tracks.map((track, index) => <article className={`${card} border-t-4 ${index % 2 === 0 ? "border-t-primary" : "border-t-[var(--color-gold)]"}`} key={track.title}>
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
        {track.number && <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-kbc-purple-50">{track.number}</span>}{track.eyebrow}
      </p>
      <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-[var(--color-ink)]">{track.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{track.description}</p>
      <ProgrammeChecklist items={track.items} />
    </article>)}
  </div>;
}
