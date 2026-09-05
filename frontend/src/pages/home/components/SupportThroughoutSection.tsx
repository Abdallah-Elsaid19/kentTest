import {
  CalendarCheck2,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  HeartHandshake,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

type SupportItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  note?: string;
  featured?: boolean;
};

const supportItems: SupportItem[] = [
  {
    title: "Dedicated coaching",
    description: "Regular guidance helps you connect learning to your responsibilities and maintain progress.",
    note: "A coach connected to your professional role",
    icon: UserRoundCheck,
    featured: true,
  },
  {
    title: "Progress reviews",
    description: "Structured reviews bring learner, employer and coach together around development priorities.",
    note: "Learner, employer and coach aligned",
    icon: CalendarCheck2,
    featured: true,
  },
  {
    title: "Wellbeing support",
    description: "Access guidance and support designed to help you manage learning alongside professional life.",
    icon: HeartHandshake,
  },
  {
    title: "Assessment preparation",
    description: "Build evidence and prepare confidently for end-point or external assessment requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Professional community",
    description: "Join masterclasses, events and networking opportunities with other working professionals.",
    icon: UsersRound,
  },
  {
    title: "Career progression",
    description: "Understand how your programme connects to qualifications, membership and future professional routes.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const journey = ["Start", "Learn", "Review", "Evidence", "Progress"];

export function SupportThroughoutSection() {
  return (
    <section className="figma-support" aria-labelledby="support-throughout-title">
      <img
        className="figma-support__watermark"
        src="/assets/patterns/kbc-ibis-wreath.png"
        alt=""
        aria-hidden="true"
      />

      <div className="figma-shell figma-support__shell">
        <header className="figma-support__heading">
          <FigmaSectionHeading
            id="support-throughout-title"
            eyebrow="Support throughout"
            title="You are supported as a professional"
            description="KBC combines structured programme delivery with individual guidance and workplace-focused development."
          />
        </header>

        <div className="figma-support__grid">
          {supportItems.map(({ title, description, icon: Icon, note, featured }) => (
            <article className={`figma-support__card ${featured ? "figma-support__card--featured" : ""}`} key={title}>
              <div className="figma-support__card-topline">
                <span className="figma-support__icon"><Icon aria-hidden="true" /></span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              {note && <strong className="figma-support__note">{note}</strong>}
            </article>
          ))}
        </div>

        <ol className="figma-support__journey" aria-label="Your professional development journey">
          {journey.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>
    </section>
  );
}
