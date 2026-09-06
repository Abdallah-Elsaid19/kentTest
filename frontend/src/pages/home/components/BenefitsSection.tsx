import { ArrowRight, CheckCircle2 } from "lucide-react";
import { benefits } from "./data";
import { SectionHeading } from "./SectionHeading";

function BenefitIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 21s-7-4.4-9.2-9.2C1.2 8.3 3.3 4.5 7.1 4.5c2 0 3.4 1.1 4.2 2.2.8-1.1 2.2-2.2 4.2-2.2 3.8 0 5.9 3.8 4.3 7.3C19 16.6 12 21 12 21z" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2.5l7.5 3.3v5c0 5.1-3.2 9.7-7.5 10.9-4.3-1.2-7.5-5.8-7.5-10.9v-5L12 2.5z" />
        <path d="M9.2 12.2l1.8 1.8 3.9-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 4h8v3a4 4 0 0 1-8 0V4z" />
      <path d="M6 6H3v1.5A4.5 4.5 0 0 0 7.5 12" />
      <path d="M18 6h3v1.5A4.5 4.5 0 0 1 16.5 12" />
      <path d="M12 11v5" />
      <path d="M9 20h6" />
      <path d="M10 16h4v4h-4z" />
    </svg>
  );
}

export function BenefitsSection() {
  return (
    <section className="kbc-section kbc-benefits" aria-labelledby="benefits-title">
      <div className="kbc-container">
        <SectionHeading eyebrow="Benefits of Studying With Us" title="More Than a Qualification" description="At Kent Business College, your funded learning journey is designed to support your wellbeing, career confidence, professional recognition and long-term success." />
        <div className="kbc-benefits__grid">
          {benefits.map((benefit, index) => (
            <article className="kbc-benefit-card" key={benefit.title}>
              <div className="kbc-benefit-card__top">
                <div className="kbc-benefit-card__icon"><BenefitIcon index={index} /></div>
                <h3>{benefit.title}</h3>
              </div>
              <p>{benefit.description}</p>
              <ul>{benefit.items.map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul>
            </article>
          ))}
        </div>
        <div className="kbc-centered-actions">
          <a className="kbc-button kbc-button--primary" href="/programmes">Explore Our Programmes <ArrowRight size={18} aria-hidden="true" /></a>
          <a className="kbc-button kbc-button--outline" href="/contact">Speak to Our Team</a>
        </div>
      </div>
    </section>
  );
}
