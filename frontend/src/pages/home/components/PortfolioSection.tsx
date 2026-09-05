import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const colleges = [
  { number: "01", category: "Project Management", title: "Deliver complex work with greater confidence.", tags: ["Planning", "Stakeholders", "Risk", "Governance"], cta: "Explore Project Management", href: "/college-of-project-management", tone: "navy" },
  { number: "02", category: "Project Controls", title: "Turn complexity into better decisions.", tags: ["Schedule", "Cost", "Risk", "Forecasting"], cta: "Explore Project Controls", href: "/project-controls-professional-level-6", tone: "teal" },
  { number: "03", category: "Marketing", title: "Turn customer insight into commercial growth.", tags: ["Strategy", "Digital", "Customer", "Performance"], cta: "Explore Marketing", href: "/college-of-marketing", tone: "coral" },
  { number: "04", category: "Leadership", title: "Turn responsibility into strategic influence.", tags: ["Strategy", "People", "Change", "Decision-making"], cta: "Explore Leadership", href: "/college-of-leadership", tone: "plum" },
];

export function PortfolioSection() {
  return (
    <section className="figma-portfolio !py-16 sm:!py-20 xl:!py-[118px]" id="colleges" aria-labelledby="portfolio-title">
      <div className="figma-shell figma-portfolio__stack">
        <div className="figma-portfolio__heading-row !block">
          <FigmaSectionHeading
            id="portfolio-title"
            eyebrow="Our specialist colleges"
            title="Choose the capability you want to build"
            description="Four specialist colleges. One professional institution — built around the capability professionals and organisations need at work."
            align="center"
          />
        </div>
        <div className="figma-portfolio__grid !grid-cols-1 md:!grid-cols-2">
          {colleges.map((college) => (
            <Link className={`figma-college-card is-${college.tone} !min-h-[330px] !p-6 sm:!min-h-[350px] sm:!p-8 xl:!min-h-[370px]`} key={college.category} to={college.href} aria-label={college.cta}>
              <p className="figma-college-card__category !text-xs !font-bold !leading-5 !tracking-widest !uppercase">
                <span>{college.number}</span>
                <i aria-hidden="true" />
                <span>{college.category}</span>
              </p>
              <h3 className="!text-4xl !font-medium !leading-none !tracking-tight xl:!text-5xl">{college.title}</h3>
              <ul>{college.tags.map((tag) => <li className="!text-xs !font-medium !leading-5" key={tag}>{tag}</li>)}</ul>
              <span className="figma-college-card__link-label !text-sm !font-semibold !leading-5">{college.cta} <ArrowUpRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
