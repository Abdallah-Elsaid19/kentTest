import { NavigationButton } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function RegistrationSection() {
  return (
    <section className="events-register" aria-labelledby="event-registration-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-registration-title" eyebrow="Register" title="Event Registration" description="Choose an upcoming event to view the full details and reserve your place." align="center" />
        <div className="events-register__actions">
          <NavigationButton className="figma-btn figma-btn--gold" to="#upcoming-events">View upcoming events</NavigationButton>
        </div>
      </div>
    </section>
  );
}
