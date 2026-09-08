import { useHomeSection } from "../contentContext";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function PortfolioSection() {
  const content = useHomeSection("colleges");
  const { colleges } = content;

  return (
    <section className="figma-portfolio !py-16 sm:!py-20 xl:!py-[118px]" id="colleges" aria-labelledby="portfolio-title">
      <div className="figma-shell figma-portfolio__stack">
        <div className="figma-portfolio__heading-row !block">
          <FigmaSectionHeading
            id="portfolio-title"
            eyebrow={content.copy.eyebrow}
            title={content.copy.title}
            description={content.copy.description}
            align="center"
          />
        </div>
        <div className="figma-portfolio__grid !grid-cols-1 md:!grid-cols-2">
          {colleges.map((college) => (
            <Link className={`figma-college-card is-${college.tone} !min-h-[330px] !p-6 sm:!min-h-[350px] sm:!p-8 xl:!min-h-[370px]`} key={college.category} to={college.href} aria-label={college.cta}>
              <p className="figma-college-card__category figma-eyebrow !text-xs !font-bold !leading-5 !tracking-widest !uppercase">
                <span>{college.number}</span>
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
