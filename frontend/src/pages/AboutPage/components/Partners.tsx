import { useCmsBindings } from "@/features/cms/publicContent";
import { Link } from "react-router-dom";

import { trustedOrganisationLogos } from "@/components/common/trustedLogos";

export default function Partners() {
  const cms = useCmsBindings(["about","partners"]);
  const cmsValues = cms.resolve({ trustedOrganisationLogos });

  return cms.render((
    <section id="partners" className="partners">
      <div className="container">
        <div className="section-head center section-head--partners">
          <span className="eyebrow">{cms.text("about.pages_about_page_components_partners_partners.text_001")}</span>
          <h2>{cms.text("about.pages_about_page_components_partners_partners.text_002")}</h2>
          <p>{cms.text("about.pages_about_page_components_partners_partners.text_003")}</p>
        </div>
        <div className="partners__grid">
          {cmsValues.trustedOrganisationLogos.map((logo) => (
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
            to={cms.text("about.pages_about_page_components_partners_partners.to_004")}
            className="btn btn--ghost"
            style={{ color: "var(--purple)", borderColor: "var(--purple)" }}
          >
            {cms.text("about.pages_about_page_components_partners_partners.text_005")}</Link>
        </div>
      </div>
    </section>
  ));
}
