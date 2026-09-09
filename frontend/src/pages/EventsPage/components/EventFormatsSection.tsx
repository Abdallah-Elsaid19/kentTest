import { useCmsBindings } from "@/features/cms/publicContent";
import { EventFormatCard } from "@/components/common/EventFormatCard";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const formats = [
  { title: "{{cms:events.pages_events_page_components_event_forma_formats.title_001}}", description: "{{cms:events.pages_events_page_components_event_forma_formats.description_002}}", image: "{{cms:events.pages_events_page_components_event_forma_formats.image_003}}" },
  { title: "{{cms:events.pages_events_page_components_event_forma_formats.title_004}}", description: "{{cms:events.pages_events_page_components_event_forma_formats.description_005}}", image: "{{cms:events.pages_events_page_components_event_forma_formats.image_006}}" },
  { title: "{{cms:events.pages_events_page_components_event_forma_formats.title_007}}", description: "{{cms:events.pages_events_page_components_event_forma_formats.description_008}}", image: "{{cms:events.pages_events_page_components_event_forma_formats.image_009}}" },
  { title: "{{cms:events.pages_events_page_components_event_forma_formats.title_010}}", description: "{{cms:events.pages_events_page_components_event_forma_formats.description_011}}", image: "{{cms:events.pages_events_page_components_event_forma_formats.image_012}}" },
];

export function EventFormatsSection() {
  const cms = useCmsBindings(["events"]);
  const cmsValues = cms.resolve({ formats });

  return cms.render((
    <section id="event-formats" aria-labelledby="event-formats-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-formats-title" eyebrow={cms.text("events.pages_events_page_components_event_forma_event_formats_section.eyebrow_013")} title={cms.text("events.pages_events_page_components_event_forma_event_formats_section.title_014")} description={cms.text("events.pages_events_page_components_event_forma_event_formats_section.description_015")} align="center" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cmsValues.formats.map((format) => (
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
  ));
}
