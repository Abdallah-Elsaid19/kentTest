import { useCmsBindings } from "@/features/cms/publicContent";
import { NavigationButton } from "@/components/navigation";

export function ConsultationStrip() {
  const cms = useCmsBindings(["events"]);

  return cms.render((
    <section aria-labelledby="events-consultation-title">
      <div className="figma-shell">
        <div className="events-strip">
          <div className="events-strip__inner">
            <div>
              <h3 id="events-consultation-title">{cms.text("events.pages_events_page_components_consultatio_consultation_strip.text_001")}</h3>
              <p>{cms.text("events.pages_events_page_components_consultatio_consultation_strip.text_002")}</p>
            </div>
            <NavigationButton className="figma-btn figma-btn--gold" to={cms.text("events.pages_events_page_components_consultatio_consultation_strip.to_003")}>{cms.text("events.pages_events_page_components_consultatio_consultation_strip.text_004")}</NavigationButton>
          </div>
        </div>
      </div>
    </section>
  ));
}
