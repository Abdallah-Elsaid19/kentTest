import { useRef } from "react";
import { LinkedInLogo } from "@/components/ui/LinkedInLogo";
import { achievers } from "../data";
import { CarouselControls } from "./SectionHeading";

export function AchieversSection() {
  const scroller = useRef<HTMLDivElement>(null);
  return (
    <section className="kbc-section kbc-achievers" aria-labelledby="achievers-title">
      <div className="kbc-container">
        <div className="kbc-achievers__banner">
          <div className="kbc-achievers__banner-title">
            <img src="/assets/logos/kbc-crest.png" alt="" aria-hidden="true" />
            <h2 id="achievers-title">Top Marketing Achievers</h2>
          </div>
          <CarouselControls scroller={scroller} label="achievers" />
        </div>
        <div className="kbc-horizontal-cards" ref={scroller} tabIndex={0} aria-label="Top achievers">
          {achievers.map((person) => (
            <article className="kbc-achiever-card" key={person.name}>
              <img src={person.image} alt={person.name} loading="lazy" />
              <div className="kbc-achiever-card__body">
                <h3>{person.name}</h3>
                <strong>{person.employer}</strong>
                <p className="kbc-achiever-card__role">{person.role}</p>
                <p>{person.message}</p>
                <div className="kbc-achiever-card__footer">
                  <a href={person.linkedin} target="_blank" rel="noreferrer"><LinkedInLogo />Linkedin</a>
                  <img src={person.employerLogo} alt={`${person.employer} logo`} loading="lazy" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
