import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

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
        <div className="figma-portfolio__heading-row !block">
          <FigmaSectionHeading
            id="portfolio-title"
            eyebrow="The college portfolio"
            title={<>Distinct disciplines.<br />One KBC standard.</>}
            description="Each college has its own professional culture, visual identity and progression route, while sharing the same employer-focused approach."
            align="center"
          />
        </div>
        <div className="figma-portfolio__grid !grid-cols-1 md:!grid-cols-2">
          {colleges.map((college) => (
            <Link className={`figma-college-card is-${college.tone} !min-h-[330px] !p-6 sm:!min-h-[350px] sm:!p-8 xl:!min-h-[370px]`} key={college.title} to={college.href} aria-label={`Enter the ${college.title} college`}>
              <span className="figma-college-card__initials" aria-hidden="true">{college.initials}</span>
              <p className="!text-xs !font-bold !leading-5 !tracking-widest !uppercase">College {college.number}</p>
              <h3 className="!text-4xl !font-medium !leading-none !tracking-tight xl:!text-5xl">{college.title}</h3>
              <p className="!text-sm !leading-relaxed sm:!text-base">{college.description}</p>
              <ul>{college.tags.map((tag) => <li className="!text-xs !font-medium !leading-5" key={tag}>{tag}</li>)}</ul>
              <span className="figma-college-card__link-label !text-sm !font-semibold !leading-5">Enter the college <ArrowUpRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
