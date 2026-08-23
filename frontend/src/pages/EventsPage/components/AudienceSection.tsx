import { Briefcase, Building2, GraduationCap, Layers3, TrendingUp } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const audiences = [
  { title: "Learners & Apprentices", description: "Explore professional pathways and develop workplace-ready skills.", icon: GraduationCap },
  { title: "Working Professionals", description: "Build expertise and explore recognised professional development routes.", icon: Briefcase },
  { title: "Managers & Future Leaders", description: "Strengthen leadership, strategic and management capability.", icon: TrendingUp },
  { title: "Employers", description: "Discover ways to develop teams through apprenticeships and professional programmes.", icon: Building2 },
  { title: "Project & Marketing Professionals", description: "Join specialist sessions across Project Management, Project Controls, Marketing and Leadership.", icon: Layers3 },
];

export function AudienceSection() {
  return (
    <section aria-labelledby="event-audience-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-audience-title" eyebrow="Audience" title="Who Our Events Support" description="Events serve the full spectrum of the Kent Business College community, from learners to senior leaders." align="center" />
        <div className="events-audience-grid">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article className="events-audience-card" key={audience.title}>
                <div className="events-audience-card__icon"><Icon aria-hidden="true" /></div>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
