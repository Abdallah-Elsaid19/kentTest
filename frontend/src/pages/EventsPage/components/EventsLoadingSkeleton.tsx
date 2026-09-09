import { useCmsBindings } from "@/features/cms/publicContent";
const SKELETON_CARDS = 3;

export function EventsLoadingSkeleton() {
  const cms = useCmsBindings(["events"]);
  const cmsValues = cms.resolve({ SKELETON_CARDS });

  return cms.render((
    <div className="events-grid events-loading-skeleton" role="status" aria-live="polite">
      {Array.from({ length: cmsValues.SKELETON_CARDS }, (_, index) => (
        <article className="events-skeleton-card" aria-hidden="true" key={index}>
          <div className="events-skeleton-card__media events-skeleton-block" />
          <div className="events-skeleton-card__body">
            <div className="events-skeleton-block events-skeleton-card__eyebrow" />
            <div className="events-skeleton-block events-skeleton-card__title" />
            <div className="events-skeleton-card__details">
              <div className="events-skeleton-block" />
              <div className="events-skeleton-block" />
              <div className="events-skeleton-block" />
              <div className="events-skeleton-block" />
            </div>
            <div className="events-skeleton-block events-skeleton-card__action" />
          </div>
        </article>
      ))}
      <span className="sr-only">{cms.text("events.pages_events_page_components_events_load_events_loading_skeleton.text_001")}</span>
    </div>
  ));
}
