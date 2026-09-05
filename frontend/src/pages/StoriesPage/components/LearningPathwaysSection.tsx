import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learningPathways } from "../data";

const pathwayContent = [
  {
    college: "College of Marketing",
    title: "Marketing Executive Level 4",
    description: "For professionals developing practical marketing, digital, content, campaign and measurement capability.",
    tags: ["Level 4", "CIM pathway"],
    accent: "!border-t-kbc-purple-700",
  },
  {
    college: "College of Marketing",
    title: "Marketing Manager Level 6",
    description: "For professionals strengthening strategic, commercial and data-led marketing management.",
    tags: ["Level 6", "CIM pathway"],
    accent: "!border-t-kbc-purple-700",
  },
  {
    college: "College of Project Controls",
    title: "Project Controls Professional Level 6",
    description: "For professionals developing planning, cost, risk, governance, systems and controls capability.",
    tags: ["Level 6", "Professional pathways"],
    accent: "!border-t-[#0f6667]",
  },
] as const;

export function LearningPathwaysSection() {
  return (
    <section className="figma-programmes !bg-kbc-purple-50 !py-16 sm:!py-20 xl:!py-[118px]" aria-labelledby="pathways-title">
      <div className="figma-shell">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)] lg:gap-16">
          <FigmaSectionHeading id="pathways-title" eyebrow="Explore the routes behind the stories" title={<>Choose the professional pathway aligned with the capability you want to build.</>} align="left" />
          <p className="max-w-xl text-base leading-7 text-kbc-dark-500">Programme availability, funding and professional recognition are subject to eligibility and the requirements of the relevant apprenticeship or external body.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {learningPathways.map((programme, index) => {
            const content = pathwayContent[index];
            return (
            <article className={`figma-programme-card relative !flex !h-full !flex-col !overflow-hidden !rounded-2xl !border-t-4 ${content.accent}`} key={programme.title}>
              <div className="figma-programme-card__media !h-52"><img src={programme.image} alt="" loading="lazy" /></div>
              <div className="figma-programme-card__body relative z-10 !flex !min-h-80 !flex-1 !flex-col !p-6">
                <span className="min-h-5 text-[10px] font-bold uppercase tracking-[.16em] text-kbc-purple-700">{content.college}</span>
                <h3 className="!mt-5 !min-h-16">{content.title}</h3>
                <p className="!mt-0 !min-h-24">{content.description}</p>
                <div className="figma-programme-card__meta !mt-0 !min-h-10 !items-start">{content.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
                <ArrowLink className="mt-auto" external to={programme.href} direction="up-right">Explore the programme</ArrowLink>
              </div>
              <span className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full border border-kbc-purple-950/10" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full border border-kbc-purple-950/10" aria-hidden="true" />
            </article>
          );})}
        </div>
      </div>
    </section>
  );
}
