import { useCmsBindings } from "@/features/cms/publicContent";
import { NavigationButton } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function RegistrationSection() {
  const cms = useCmsBindings(["events"]);

  return cms.render((
    <section className="events-register" aria-labelledby="event-registration-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-registration-title" eyebrow={cms.text("events.pages_events_page_components_registratio_registration_section.eyebrow_001")} title={cms.text("events.pages_events_page_components_registratio_registration_section.title_002")} description={cms.text("events.pages_events_page_components_registratio_registration_section.description_003")} align="center" />
        <div className="events-register__actions">
          <NavigationButton className="figma-btn figma-btn--gold" to={cms.text("events.pages_events_page_components_registratio_registration_section.to_004")}>{cms.text("events.pages_events_page_components_registratio_registration_section.text_005")}</NavigationButton>
        </div>
      </div>
    </section>
  ));
}
