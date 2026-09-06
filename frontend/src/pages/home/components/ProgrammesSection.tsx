import { ArrowRight, Award, Clock3, GraduationCap } from "lucide-react";
import { useState } from "react";
import { programmes, type CollegeKey } from "./data";
import { SectionHeading } from "./SectionHeading";

const filters: { value: CollegeKey; label: string }[] = [
  { value: "projects", label: "College of Project Controls and Project Management" },
  { value: "marketing", label: "College of Marketing" },
  { value: "leadership", label: "College of Leadership" },
];

export function ProgrammesSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("projects");
  const visible = programmes.filter((programme) => programme.college === filter);
  return (
    <section className="kbc-section kbc-programmes" aria-labelledby="programmes-title">
      <div className="kbc-container">
        <SectionHeading title="Explore Our Funded Programmes" description="Discover our Programmes in:" />
        <div className="kbc-tabs" role="tablist" aria-label="Filter programmes by college">
          {filters.map((item) => <button key={item.value} type="button" role="tab" aria-selected={filter === item.value} className={filter === item.value ? "is-active" : ""} onClick={() => setFilter(item.value)}>{item.label}</button>)}
        </div>
        <div className="kbc-programme-grid" aria-live="polite">
          {visible.map((programme) => (
            <article className="kbc-programme-card" key={programme.title}>
              <a className="kbc-programme-card__image" href={programme.href}><img src={programme.image} alt="" loading="lazy" /><span>Fully Funded</span></a>
              <div className="kbc-programme-card__body">
                <h3><a href={programme.href}>{programme.title}</a></h3>
                <ul className="kbc-programme-card__facts">
                  <li><Clock3 aria-hidden="true" />{programme.duration}</li>
                  {programme.recognition && <li><Award aria-hidden="true" />{programme.recognition}</li>}
                  <li><GraduationCap aria-hidden="true" />{programme.level}</li>
                </ul>
                <p>{programme.description}</p>
                <a className="kbc-arrow-link" href={programme.href}>Learn more <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
