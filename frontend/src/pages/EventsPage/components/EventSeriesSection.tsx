import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const blocks = [
  { label: "Topics", title: "Project Management, Project Controls, Marketing and Leadership.", description: "Sessions connect specialist subject knowledge with applied AI and real workplace practice." },
  { label: "Audience", title: "Professionals, apprentices, managers, employers and business leaders.", description: "Formats are designed for different seniority levels and professional stages." },
  { label: "Formats", title: "Online information sessions, workshops, masterclasses and networking events.", description: "Choose the format that best fits how you learn and how much time you have." },
  { label: "Professional Development", title: "Built to support career progression and workplace capability.", description: "Events connect naturally into Kent Business College programmes and professional pathways." },
];

export function EventSeriesSection() {
  return (
    <section className="events-series" aria-labelledby="event-series-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-series-title" eyebrow="Flagship event programme" title="Kent Professional Event Series" description="Practical events designed to connect professional learning with real workplace challenges across project management, project controls, marketing and leadership." />
        <div className="events-series__grid">
          {blocks.map((block) => (
            <div className="events-series__block" key={block.label}>
              <span>{block.label}</span>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
