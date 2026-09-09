import { useCmsBindings } from "@/features/cms/publicContent";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const blocks = [
  { label: "{{cms:events.pages_events_page_components_event_serie_blocks.label_001}}", title: "{{cms:events.pages_events_page_components_event_serie_blocks.title_002}}", description: "{{cms:events.pages_events_page_components_event_serie_blocks.description_003}}" },
  { label: "{{cms:events.pages_events_page_components_event_serie_blocks.label_004}}", title: "{{cms:events.pages_events_page_components_event_serie_blocks.title_005}}", description: "{{cms:events.pages_events_page_components_event_serie_blocks.description_006}}" },
  { label: "{{cms:events.pages_events_page_components_event_serie_blocks.label_007}}", title: "{{cms:events.pages_events_page_components_event_serie_blocks.title_008}}", description: "{{cms:events.pages_events_page_components_event_serie_blocks.description_009}}" },
  { label: "{{cms:events.pages_events_page_components_event_serie_blocks.label_010}}", title: "{{cms:events.pages_events_page_components_event_serie_blocks.title_011}}", description: "{{cms:events.pages_events_page_components_event_serie_blocks.description_012}}" },
];

export function EventSeriesSection() {
  const cms = useCmsBindings(["events"]);
  const cmsValues = cms.resolve({ blocks });

  return cms.render((
    <section className="events-series" aria-labelledby="event-series-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-series-title" eyebrow={cms.text("events.pages_events_page_components_event_serie_event_series_section.eyebrow_013")} title={cms.text("events.pages_events_page_components_event_serie_event_series_section.title_014")} description={cms.text("events.pages_events_page_components_event_serie_event_series_section.description_015")} align="center" tone="inverse" />
        <div className="events-series__grid">
          {cmsValues.blocks.map((block) => (
            <div className="events-series__block" key={block.label}>
              <span>{block.label}</span>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ));
}
