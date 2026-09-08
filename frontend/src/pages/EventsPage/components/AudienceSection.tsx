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
        <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[1181px]:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article
                className="group flex min-h-[230px] flex-col rounded-xl border border-[#e9e2ef] bg-white p-[30px] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none"
                key={audience.title}
              >
                <div className="inline-flex size-10 items-center justify-center rounded-[10px] bg-[#f0eafb] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[22px] leading-[1.25]">{audience.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-[var(--figma-muted)]">{audience.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
