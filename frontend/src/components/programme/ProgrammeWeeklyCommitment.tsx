export type ProgrammeWeeklyCommitmentData = {
  title: string;
  description: string;
  hours: readonly { hours: string; label: string; description: string }[];
  note?: string;
};

// The weekly learning card shared with the Associate Project Manager workload.
export function ProgrammeWeeklyCommitment({ data, horizontal = false }: {
  data: ProgrammeWeeklyCommitmentData;
  horizontal?: boolean;
}) {
  return <article className="rounded-2xl border border-kbc-purple-100 bg-white p-6 sm:p-8">
    <h3 className="text-xl font-semibold text-[var(--color-ink)]">{data.title}</h3>
    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{data.description}</p>
    <div className={`mt-6 grid gap-3 ${horizontal ? "lg:grid-cols-3" : ""}`}>
      {data.hours.map((item) => <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-4 rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:p-5" key={item.label}>
        <span className="grid size-12 place-items-center rounded-xl bg-primary text-sm font-bold text-white sm:size-14">{item.hours}</span>
        <div><h4 className="font-semibold text-[var(--color-ink)]">{item.label}</h4><p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p></div>
      </div>)}
    </div>
    {data.note && <p className="mt-4 border-l-2 border-primary px-4 py-3 text-sm leading-6 text-[var(--color-muted)]">{data.note}</p>}
  </article>;
}
