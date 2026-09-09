import { ProgrammeWeeklyCommitment } from "./ProgrammeWeeklyCommitment";
import { ProgrammeCardGrid, type ProgrammeItem } from "./ProgrammeGrids";
import { ProgrammeSection, type ProgrammeSectionData } from "./ProgrammeSection";

export type ProgrammeWorkloadData = ProgrammeSectionData & {
  stats: readonly { title: string; value: string; description: string }[];
  weeklyTitle: string;
  weeklyDescription: string;
  hours: readonly { hours: string; label: string; description: string }[];
  note: string;
  monthlyTitle: string;
  monthlyDescription: string;
  submissions: readonly { title: string; description: string }[];
  reviews: readonly ProgrammeItem[];
  image?: string;
  imageAlt?: string;
};

export function ProgrammeWorkload({ data }: { data: ProgrammeWorkloadData }) {
  return <ProgrammeSection {...data} pattern="gold-leaf">
    <div className="mt-12 grid gap-5 lg:grid-cols-3">{data.stats.map((stat, index) => <article key={stat.title} className={`rounded-2xl p-6 sm:p-8 ${index === 0 ? "bg-primary-dark text-white shadow-[0_18px_45px_rgba(39,14,73,0.14)]" : "border border-kbc-purple-100 bg-white"}`}>
      <h3 className={`text-xs font-bold uppercase tracking-[0.16em] ${index === 0 ? "text-[var(--color-gold)]" : "text-primary"}`}>{stat.title}</h3>
      <p className={`mt-4 text-4xl font-semibold tracking-tight sm:text-5xl ${index === 0 ? "text-white" : "text-[var(--color-ink)]"}`}>{stat.value}</p>
      <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-white/75" : "text-[var(--color-muted)]"}`}>{stat.description}</p>
    </article>)}</div>
    <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_.85fr]">
      <ProgrammeWeeklyCommitment data={{ title: data.weeklyTitle, description: data.weeklyDescription, hours: data.hours, note: data.note }} />
      <article className="flex flex-col rounded-2xl border border-kbc-purple-100 bg-white p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-[var(--color-ink)]">{data.monthlyTitle}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{data.monthlyDescription}</p>
        <ol className="mt-6 grid gap-3">{data.submissions.map((item, index) => <li className="rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-5" key={item.title}>
          <h4 className="font-semibold text-[var(--color-ink)]">{index + 1}. {item.title}</h4>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
        </li>)}</ol>
        {data.image && <img src={data.image} alt={data.imageAlt ?? ""} loading="lazy" decoding="async" className="mt-6 aspect-[16/8] w-full rounded-2xl object-cover" />}
      </article>
    </div>
    <ProgrammeCardGrid items={data.reviews} />
  </ProgrammeSection>;
}
