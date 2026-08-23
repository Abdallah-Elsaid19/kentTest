import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const programmes = [
  { category: "Project Management", title: "Associate Project Manager", meta: ["Level 4", "12 months"], description: "Build structured capability in planning, delivery, stakeholders and project governance.", image: "/assets/images/figma-home/workplace-teaching.png", href: "/associate-project-manager-level-4" },
  { category: "Project Controls", title: "Project Controls Professional", meta: ["Level 6", "Professional pathway"], description: "Develop capability across planning, scheduling, cost, risk and performance reporting.", image: "/assets/images/figma-home/project-speaker.png", href: "/project-controls-professional-level-6" },
  { category: "Marketing", title: "Marketing Executive", meta: ["Level 4", "CIM pathway"], description: "Strengthen campaign delivery, customer understanding, digital activity and measurement.", image: "/assets/images/figma-home/marketing-event.png", href: "/marketing-executive-level-4" },
  { category: "Strategic Marketing", title: "Marketing Manager", meta: ["Level 6", "CIM pathway"], description: "Develop strategic, commercial and data-led marketing leadership for organisational growth.", image: "/assets/images/figma-home/hero-group.png", href: "/marketing-manager-level-6" },
];

export function FigmaProgrammesSection() {
  return (
    <section className="figma-programmes !py-16 sm:!py-20 xl:!py-[118px]" id="programmes" aria-labelledby="programmes-title">
      <div className="figma-shell">
        <div className="figma-programmes__heading-row !block">
          <FigmaSectionHeading id="programmes-title" eyebrow="Popular funded programmes" title={<>Develop the capability your<br />organisation needs next.</>} align="center" />
        </div>
        <div className="figma-programmes__grid !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-4">
          {programmes.map((programme) => (
            <article className="figma-programme-card" key={programme.title}>
              <div className="figma-programme-card__media !h-48 sm:!h-52 xl:!h-[195px]"><img src={programme.image} alt="" loading="lazy" /><span className="!text-xs !font-semibold !leading-5">{programme.category}</span></div>
              <div className="figma-programme-card__body !min-h-[280px] sm:!min-h-[300px] xl:!min-h-[310px]">
                <div className="figma-programme-card__meta">{programme.meta.map((item) => <small className="!text-xs !font-semibold !leading-5" key={item}>{item}</small>)}</div>
                <h3 className="!text-2xl !font-semibold !leading-tight !tracking-tight">{programme.title}</h3>
                <p className="!text-sm !leading-relaxed">{programme.description}</p>
                <ArrowLink className="!text-sm !font-semibold !leading-5" to={programme.href} direction="up-right">View programme</ArrowLink>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-end sm:mt-8">
          <ArrowLink className="!text-sm !font-semibold !leading-5" to="/programmes">Browse all programmes</ArrowLink>
        </div>
      </div>
    </section>
  );
}
