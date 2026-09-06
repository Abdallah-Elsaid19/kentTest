import { ArrowRight, Check } from "lucide-react";
import { colleges } from "./data";
import { SectionHeading } from "./SectionHeading";

export function CollegesSection() {
  return (
    <section className="kbc-section kbc-colleges" id="colleges" aria-labelledby="colleges-title">
      <div className="kbc-container">
        <SectionHeading title="Our Colleges" description="Discover our specialised colleges designed to provide focused education in key business disciplines." />
        <div className="kbc-colleges__grid">
          {colleges.map((college, index) => (
            <article className="kbc-college-card" key={college.key}>
              <img src={college.image} alt="" loading="lazy" />
              <div className="kbc-college-card__overlay" />
              <div className="kbc-college-card__content">
                <span className="kbc-college-card__number">0{index + 1}</span>
                <h3>{college.title}</h3>
                <p>{college.description}</p>
                <ul>{college.programmes.map((programme) => <li key={programme}><Check size={15} aria-hidden="true" /><span>{programme}</span></li>)}</ul>
                <a href={college.href}>Learn More <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
