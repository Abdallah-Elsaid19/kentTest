import { Link } from "react-router-dom";

import { trustedOrganisationLogos } from "@/components/common/trustedLogos";

export default function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="section-head center section-head--partners">
          <span className="eyebrow">Partners in Success</span>
          <h2>Meet our visionary partners</h2>
          <p>Together, we deliver exceptional results for our clients and communities.</p>
        </div>
        <div className="partners__grid">
          {trustedOrganisationLogos.map((logo) => (
            <div key={logo.image} className="partner-tile reveal">
              <img
                className="partner-tile__image"
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="partners__cta">
          <Link
            to="/our-partners"
            className="btn btn--ghost"
            style={{ color: "var(--purple)", borderColor: "var(--purple)" }}
          >
            View More Partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
