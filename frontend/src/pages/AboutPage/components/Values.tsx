import { useCmsBindings } from "@/features/cms/publicContent";
export default function Values() {
  const cms = useCmsBindings(["about"]);

  return cms.render((
    <section id="values" className="values">
      <div className="container">
        <div className="section-head center values__head">
          <span className="eyebrow">{cms.text("about.pages_about_page_components_values_values.text_001")}</span>
          <h2>{cms.text("about.pages_about_page_components_values_values.text_002")}</h2>
        </div>
        <div className="values__grid">
          <div className="value-card reveal">
            <div className="value-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3>{cms.text("about.pages_about_page_components_values_values.text_003")}</h3>
            <p>{cms.text("about.pages_about_page_components_values_values.text_004")}</p>
          </div>
          <div className="value-card reveal">
            <div className="value-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 6 4 10 4 14a8 8 0 0016 0c0-4-3-8-8-12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
            </div>
            <h3>{cms.text("about.pages_about_page_components_values_values.text_005")}</h3>
            <p>{cms.text("about.pages_about_page_components_values_values.text_006")}</p>
          </div>
          <div className="value-card reveal">
            <div className="value-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="15" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M10.5 9.5L14.5 13" stroke="currentColor" strokeWidth="1.6" /></svg>
            </div>
            <h3>{cms.text("about.pages_about_page_components_values_values.text_007")}</h3>
            <p>{cms.text("about.pages_about_page_components_values_values.text_008")}</p>
          </div>
        </div>
      </div>
    </section>
  ));
}
