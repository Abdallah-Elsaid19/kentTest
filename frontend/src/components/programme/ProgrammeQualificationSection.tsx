import { ProgrammeSection, type ProgrammeSectionData } from "./ProgrammeSection";

export type ProgrammeQualificationData = ProgrammeSectionData & {
  titleDetail?: string;
  descriptionDetail?: string;
  items: readonly { eyebrow?: string; title: string; description?: string }[];
  note: string;
  searchNote?: string;
};

export function ProgrammeQualificationSection({ data, image }: { data: ProgrammeQualificationData; image: { image: string; name: string } }) {
  return <ProgrammeSection {...data} tone="dark" pattern="horse-growth">
    <div className={`mt-12 grid items-center gap-8 ${data.titleDetail ? "lg:grid-cols-[240px_1fr]" : ""}`}>
      <img src={image.image} alt={image.name} width={240} height={240} loading="lazy" decoding="async" className="mx-auto h-48 w-48 object-contain lg:h-60 lg:w-60" />
      {data.titleDetail && <div>
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">{data.titleDetail}</h3>
        {data.descriptionDetail && <p className="mt-5 text-sm leading-7 text-white/75">{data.descriptionDetail}</p>}
      </div>}
    </div>
    <div className={`mt-12 grid gap-x-8 ${data.items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
      {data.items.map((item) => <article className="border-t-2 border-kbc-gold-500 py-7" key={item.title}>
        {item.eyebrow && <p className="text-xs font-bold uppercase tracking-widest text-kbc-gold-300">{item.eyebrow}</p>}
        <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/75">{item.description}</p>
      </article>)}
    </div>
    <p className="mt-7 border-l-2 border-kbc-gold-500 pl-5 text-sm leading-7 text-white/80">{data.note}</p>
    {data.searchNote && <p className="mt-5 text-xs leading-6 text-white/70">{data.searchNote}</p>}
  </ProgrammeSection>;
}
