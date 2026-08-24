const SKELETON_CARDS = 3;

export function EventsLoadingSkeleton() {
  return (
    <div className="events-grid events-loading-skeleton" role="status" aria-live="polite">
      {Array.from({ length: SKELETON_CARDS }, (_, index) => (
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
      <span className="sr-only">Loading events...</span>
    </div>
  );
}
