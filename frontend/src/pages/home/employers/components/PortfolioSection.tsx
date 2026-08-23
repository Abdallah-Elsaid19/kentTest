import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "./FigmaSectionHeading";

const colleges = [
  { number: "01", initials: "PM", title: "Project Management", description: "Delivery, stakeholders, governance and confident project leadership.", tags: ["APM", "PMP pathway", "Level 4"], href: "/college-of-project-management", tone: "navy" },
  { number: "02", initials: "PC", title: "Project Controls", description: "Planning, scheduling, cost, risk and evidence-led project performance.", tags: ["ChPP pathway", "ICostE", "Level 6"], href: "/project-controls-professional-level-6", tone: "teal" },
  { number: "03", initials: "MK", title: "Marketing", description: "Commercial thinking, customer insight, campaigns, data and digital practice.", tags: ["CIM pathway", "Levels 4 & 6", "Digital"], href: "/college-of-marketing", tone: "coral" },
  { number: "04", initials: "LS", title: "Leadership & Strategy", description: "Strategic decision-making, organisational direction and executive capability.", tags: ["MBA / Diploma", "Level 7", "Strategy"], href: "/college-of-leadership", tone: "plum" },
];

export function PortfolioSection() {
  return (
    <section className="figma-portfolio !py-16 sm:!py-20 xl:!py-[118px]" id="colleges" aria-labelledby="portfolio-title">
      <div className="figma-shell figma-portfolio__stack">
        <div className="figma-portfolio__heading-row !flex-col !items-start !gap-5 lg:!flex-row lg:!items-end lg:!gap-8">
          <FigmaSectionHeading id="portfolio-title" eyebrow="The college portfolio" title={<>Distinct disciplines.<br />One KBC standard.</>} />
        </div>
        <div className="figma-portfolio__grid !grid-cols-1 md:!grid-cols-2">
          {colleges.map((college) => (
            <Link className={`figma-college-card is-${college.tone} !min-h-[330px] !p-6 sm:!min-h-[350px] sm:!p-8 xl:!min-h-[370px]`} key={college.title} to={college.href} aria-label={`Enter the ${college.title} college`}>
              <span className="figma-college-card__initials" aria-hidden="true">{college.initials}</span>
              <p>College {college.number}</p>
              <h3>{college.title}</h3>
              <p>{college.description}</p>
              <ul>{college.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <span className="figma-college-card__link-label">Enter the college <ArrowUpRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
