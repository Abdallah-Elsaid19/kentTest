import { ProgrammeCurriculumCards, type ProgrammeCurriculumTrack } from "./ProgrammeCurriculumCards";
import { ProgrammeCardGrid, type ProgrammeItem } from "./ProgrammeGrids";
import { ProgrammeSection, type ProgrammeSectionData } from "./ProgrammeSection";

export type ProgrammeCurriculumData = ProgrammeSectionData & {
  modules: readonly ProgrammeCurriculumTrack[];
  image?: string;
  imageAlt?: string;
  caption?: string;
  milestones?: readonly ProgrammeItem[];
  progression?: ProgrammeItem;
  evidence?: string;
};

export function ProgrammeCurriculumSection({ data, columns = 2, capabilities }: {
  data: ProgrammeCurriculumData;
  columns?: 2 | 3;
  capabilities?: readonly ProgrammeItem[];
}) {
  const milestones = data.milestones ?? data.progression?.items?.map((title) => ({ title }));
  return <ProgrammeSection {...data} tone="soft">
    {data.image && <figure className="mt-12">
      <div tabIndex={0} role="region" aria-label={data.caption} className="overflow-x-auto rounded-2xl border border-kbc-purple-100 bg-white focus-visible:outline-primary">
        <img src={data.image} alt={data.imageAlt ?? ""} width={1489} height={620} loading="lazy" decoding="async" className="min-w-[740px] w-full" />
      </div>
      <figcaption className="mt-4 text-xs leading-6 text-[var(--color-muted)]">{data.caption}</figcaption>
    </figure>}
    <ProgrammeCurriculumCards tracks={data.modules} columns={columns} />
    {data.progression && <div className="mt-10">
      <h3 className="text-2xl font-semibold text-primary">{data.progression.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{data.progression.description}</p>
    </div>}
    {milestones && <ol className="mt-8 grid gap-4">
      {milestones.map((item: ProgrammeItem) => <li className="border-l-2 border-primary bg-white px-6 py-5" key={item.title}>
        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
        {item.description && <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>}
      </li>)}
    </ol>}
    {capabilities && <ProgrammeCardGrid items={capabilities} />}
    {data.evidence && <p className="mt-8 rounded-2xl border border-kbc-purple-100 bg-white p-6 text-sm leading-7 text-[var(--color-muted)]">{data.evidence}</p>}
  </ProgrammeSection>;
}
