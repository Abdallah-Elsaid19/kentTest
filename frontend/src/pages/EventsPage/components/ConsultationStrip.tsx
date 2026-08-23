import { NavigationButton } from "@/components/navigation";

export function ConsultationStrip() {
  return (
    <section aria-labelledby="events-consultation-title">
      <div className="figma-shell">
        <div className="events-strip">
          <div className="events-strip__inner">
            <div>
              <h3 id="events-consultation-title">Not sure which event is right for you?</h3>
              <p>Speak with the Kent Business College team about programmes, eligibility, employer funding and upcoming information sessions.</p>
            </div>
            <NavigationButton className="figma-btn figma-btn--gold" to="/book-session">Book a consultation</NavigationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
