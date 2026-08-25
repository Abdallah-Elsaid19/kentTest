import { ArrowLink, NavigationButton } from "@/components/navigation";

const links = [
  { title: "Attend", description: "Register for upcoming master classes and club events.", to: "#upcoming-events" },
  { title: "Speak with us", description: "Ask about programmes, funding routes and eligibility.", to: "/book-session" },
  { title: "Partner with us", description: "Support events through employer partnership.", to: "/employer-agreement" },
];

export function JoinConversationSection() {
  return (
    <section className="figma-funding" aria-labelledby="events-cta-title">
      <div className="figma-shell">
        <div className="figma-funding__card">
          <div>
            <span>Get involved</span>
            <h2 id="events-cta-title">Join the Kent Business College community.</h2>
            <p>Connect with us about upcoming events, employer information sessions, programme opportunities and professional development.</p>
          </div>
          <div>
            <NavigationButton className="figma-btn figma-btn--gold" to="#upcoming-events">View upcoming events</NavigationButton>
            <ArrowLink className="!min-h-12 !gap-3 !text-sm [&_svg]:!h-4 [&_svg]:!w-4" to="/book-session" tone="inverse">Book a consultation</ArrowLink>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <ArrowLink key={link.title} to={link.to} className="!flex-col !items-start !gap-1 rounded-xl border border-[#e5e0e8] p-5" tone="ink">
              <span className="block text-lg font-semibold">{link.title}</span>
              <span className="block text-sm font-normal leading-relaxed text-[color:var(--figma-muted)]">{link.description}</span>
            </ArrowLink>
          ))}
        </div>
      </div>
    </section>
  );
}
