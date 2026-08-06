import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "./FigmaSectionHeading";

const programmes = [
  { category: "Project Management", title: "Associate Project Manager", meta: ["Level 4", "12 months"], description: "Build structured capability in planning, delivery, stakeholders and project governance.", image: "/assets/images/figma-home/workplace-teaching.png", href: "https://kentbusinesscollege.com/associate-project-manager-level-4-apprenticeship/" },
  { category: "Project Controls", title: "Project Controls Professional", meta: ["Level 6", "Professional pathway"], description: "Develop capability across planning, scheduling, cost, risk and performance reporting.", image: "/assets/images/figma-home/project-speaker.png", href: "https://kentbusinesscollege.com/project-control-professional-level-6/" },
  { category: "Marketing", title: "Marketing Executive", meta: ["Level 4", "CIM pathway"], description: "Strengthen campaign delivery, customer understanding, digital activity and measurement.", image: "/assets/images/figma-home/marketing-event.png", href: "https://kentbusinesscollege.com/marketing-executive-level-4-apprenticeship/" },
  { category: "Strategic Marketing", title: "Marketing Manager", meta: ["Level 6", "CIM pathway"], description: "Develop strategic, commercial and data-led marketing leadership for organisational growth.", image: "/assets/images/figma-home/hero-group.png", href: "https://kentbusinesscollege.com/marketing-manager-level-6-apprenticeship/" },
];

export function FigmaProgrammesSection() {
  return (
    <section className="figma-programmes !py-16 sm:!py-20 xl:!py-[118px]" id="programmes" aria-labelledby="programmes-title">
      <div className="figma-shell">
        <div className="figma-programmes__heading-row !flex-col !items-start !gap-5 lg:!flex-row lg:!items-end lg:!gap-8">
          <FigmaSectionHeading id="programmes-title" eyebrow="Popular funded programmes" title={<>Develop the capability your<br />organisation needs next.</>} />
          <ArrowLink to="/programmes">Browse all programmes</ArrowLink>
        </div>
        <div className="figma-programmes__grid !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-4">
          {programmes.map((programme) => (
            <article className="figma-programme-card" key={programme.title}>
              <div className="figma-programme-card__media !h-48 sm:!h-52 xl:!h-[195px]"><img src={programme.image} alt="" loading="lazy" /><span>{programme.category}</span></div>
              <div className="figma-programme-card__body !min-h-[280px] sm:!min-h-[300px] xl:!min-h-[310px]">
                <div className="figma-programme-card__meta">{programme.meta.map((item) => <small key={item}>{item}</small>)}</div>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
                <ArrowLink to={programme.href} direction="up-right">View programme</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
