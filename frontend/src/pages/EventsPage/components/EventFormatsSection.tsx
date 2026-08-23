import { EventFormatCard } from "@/components/common/EventFormatCard";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const formats = [
  { title: "Information Sessions", description: "Learn about programmes, eligibility, funding routes and application processes.", image: "/assets/images/figma-home/workplace-teaching.png" },
  { title: "Professional Workshops", description: "Practical sessions focused on skills that can be applied directly in the workplace.", image: "/assets/images/figma-home/marketing-event.png" },
  { title: "Masterclasses", description: "Expert-led sessions exploring specialist themes across Kent's professional disciplines.", image: "/assets/images/figma-home/project-speaker.png" },
  { title: "Networking & Employer Events", description: "Opportunities for employers, learners and professionals to connect and share experience.", image: "/assets/images/figma-home/hero-group.png" },
];

export function EventFormatsSection() {
  return (
    <section id="event-formats" aria-labelledby="event-formats-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-formats-title" eyebrow="Formats" title="Event Formats" description="The Institute runs multiple formats to serve different learning styles, seniority levels and professional needs." align="center" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {formats.map((format) => (
            <EventFormatCard
              key={format.title}
              imageSrc={format.image}
              title={format.title}
              description={format.description}
              actionLabel="View upcoming events"
              actionTo="#upcoming-events"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
