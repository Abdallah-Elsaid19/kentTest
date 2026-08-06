import { ArrowRight } from "lucide-react";
import { LinkedInLogo } from "@/components/ui/LinkedInLogo";
import { caseStudies } from "../data";
import { SectionHeading } from "./SectionHeading";

export function CaseStudiesSection() {
  return (
    <section className="kbc-section kbc-case-studies" aria-labelledby="case-studies-title">
      <div className="kbc-container">
        <div className="kbc-heading-row">
          <SectionHeading eyebrow="Learners" title="Case Study" description="At Kent Business College, we are committed to empowering our learners to achieve their full potential." align="left" />
          <a className="kbc-arrow-link" href="/stories">View all Case Study <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="kbc-case-grid">
          {caseStudies.map((study) => (
            <article className="kbc-case-card" key={study.name}>
              <div className="kbc-case-card__image"><img src={study.image} alt={study.name} loading="lazy" /></div>
              <div className="kbc-case-card__body"><p className="kbc-case-card__programme">{study.programme}</p><blockquote>{study.quote}</blockquote><h3>{study.name}</h3><a href={study.linkedin} target="_blank" rel="noreferrer" aria-label={`${study.name} on LinkedIn`}><LinkedInLogo />Linkedin</a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
