import { ArrowRight, Building2, CalendarDays, ShoppingBag, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";

const helpCards = [
  { title: "For Employers", description: "Partner with us to access top talent, upskill your workforce, and develop customised training programmes.", href: "/employer-agreement", action: "Employers Corner", icon: Building2 },
  { title: "For Learners", description: "Explore our diverse range of programmes designed to accelerate your career and develop in-demand business skills.", href: "/apprentices", action: "Students Corner", icon: UserRound },
  { title: "Events", description: "Attend workshops, seminars, and networking events to expand your knowledge and professional connections.", href: "/events", action: "Events", icon: CalendarDays },
  { title: "Online Store", description: "Browse our collection of textbooks, study materials, and branded merchandise to support your learning journey.", href: "/store", action: "Visit Store", icon: ShoppingBag },
];

export function HelpSection() {
  return (
    <section className="kbc-section kbc-help" aria-labelledby="help-title">
      <div className="kbc-container">
        <SectionHeading title="How We Can Help You" description="Whether you’re a student, professional, or employer, Kent Business College offers resources tailored to your needs" />
        <div className="kbc-help__grid">
          {helpCards.map((card) => {
            const Icon = card.icon;
            return <article className="kbc-help-card" key={card.title}><div className="kbc-help-card__icon"><Icon aria-hidden="true" /></div><h3>{card.title}</h3><p>{card.description}</p><Link to={card.href}>{card.action} <ArrowRight size={17} aria-hidden="true" /></Link></article>;
          })}
        </div>
      </div>
    </section>
  );
}
