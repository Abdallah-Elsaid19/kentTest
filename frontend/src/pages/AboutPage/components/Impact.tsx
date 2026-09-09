import { useCmsBindings } from "@/features/cms/publicContent";
export default function Impact() {
  const cms = useCmsBindings(["about"]);

  return cms.render((
    <section id="impact" className="impact">
      <div className="container">
        <div className="section-head center section-head--impact">
          <span className="eyebrow">{cms.text("about.pages_about_page_components_impact_impact.text_001")}</span>
          <h2>{cms.text("about.pages_about_page_components_impact_impact.text_002")}</h2>
          <p>{cms.text("about.pages_about_page_components_impact_impact.text_003")}</p>
        </div>
        <div className="impact__grid">
          <div className="stat reveal">
            <div className="stat__num" data-count="500" data-suffix="+">{cms.text("about.pages_about_page_components_impact_impact.text_004")}</div>
            <div className="stat__label">{cms.text("about.pages_about_page_components_impact_impact.text_005")}</div>
            <div className="glass-interactive" aria-hidden="true"></div>
            <div className="edge-sweep" aria-hidden="true"></div>
          </div>
          <div className="stat reveal">
            <div className="stat__num" data-count="150" data-suffix="+">{cms.text("about.pages_about_page_components_impact_impact.text_006")}</div>
            <div className="stat__label">{cms.text("about.pages_about_page_components_impact_impact.text_007")}</div>
            <div className="glass-interactive" aria-hidden="true"></div>
            <div className="edge-sweep" aria-hidden="true"></div>
          </div>
          <div className="stat reveal">
            <div className="stat__num" data-count="250" data-suffix="+">{cms.text("about.pages_about_page_components_impact_impact.text_008")}</div>
            <div className="stat__label">{cms.text("about.pages_about_page_components_impact_impact.text_009")}</div>
            <div className="glass-interactive" aria-hidden="true"></div>
            <div className="edge-sweep" aria-hidden="true"></div>
          </div>
          <div className="stat reveal">
            <div className="stat__num" data-count="10" data-suffix="">{cms.text("about.pages_about_page_components_impact_impact.text_010")}</div>
            <div className="stat__label">{cms.text("about.pages_about_page_components_impact_impact.text_011")}</div>
            <div className="glass-interactive" aria-hidden="true"></div>
            <div className="edge-sweep" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  ));
}
