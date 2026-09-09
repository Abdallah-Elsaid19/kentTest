import { useHomeSection } from "../contentContext";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function FigmaProgrammesSection() {
  const content = useHomeSection("programmes");
  const { programmes } = content;

  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, distance: 0 });
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const syncSlider = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
    setCanScrollBack(track.scrollLeft > 2);
    setCanScrollForward(track.scrollLeft < maxScroll - 2);
  }, []);

  useEffect(() => {
    syncSlider();
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(syncSlider);
    observer.observe(track);
    return () => observer.disconnect();
  }, [syncSlider]);

  const scrollCards = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".featured-programme-card");
    const distance = (card?.offsetWidth ?? track.clientWidth * 0.8) + 20;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  const startDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft, distance: 0 };
  };

  const dragSlider = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active) return;
    const delta = event.clientX - dragRef.current.startX;
    dragRef.current.distance = Math.max(dragRef.current.distance, Math.abs(delta));
    if (dragRef.current.distance <= 6) return;
    setIsDragging(true);
    if (!track.hasPointerCapture(event.pointerId)) track.setPointerCapture(event.pointerId);
    track.scrollLeft = dragRef.current.startScroll - delta;
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active) return;
    dragRef.current.active = false;
    setIsDragging(false);
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  };

  return (
    <section className="figma-featured-programmes !py-16 sm:!py-20 xl:!py-[118px]" id="programmes" aria-labelledby="programmes-title">
      <div className="figma-shell">
        <FigmaSectionHeading
          id="programmes-title"
          eyebrow={content.copy.eyebrow}
          title={content.copy.title}
          align="center"
        />

        <div className="figma-featured-programmes__toolbar">
          <div className="figma-featured-programmes__controls">
            <button type="button" onClick={() => scrollCards(-1)} disabled={!canScrollBack} aria-label="Previous programmes">
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollCards(1)} disabled={!canScrollForward} aria-label="Next programmes">
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className={`figma-featured-programmes__track${isDragging ? " is-dragging" : ""}`}
          ref={trackRef}
          onScroll={syncSlider}
          onPointerDown={startDragging}
          onPointerMove={dragSlider}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
          onClickCapture={(event) => {
            if (event.detail > 0 && dragRef.current.distance > 6) event.preventDefault();
            dragRef.current.distance = 0;
          }}
        >
          {programmes.map((programme) => (
            <Link
              className="featured-programme-card"
              data-tone={programme.tone}
              key={programme.number}
              to={programme.href}
              aria-label={`Explore ${programme.title}`}
              draggable={false}
            >
              <span className="featured-programme-card__number" aria-hidden="true">{programme.number}</span>
              <span className="featured-programme-card__level"><Award aria-hidden="true" /> {programme.level}</span>
              <p className="featured-programme-card__category">{programme.category}</p>
              <h3>{programme.title}</h3>
              <p className="featured-programme-card__description">{programme.description}</p>
              <span className="featured-programme-card__cta">
                <span>{content.copy.text}</span>
                <i><ArrowUpRight aria-hidden="true" /></i>
              </span>
            </Link>
          ))}
        </div>

        <Link className="figma-featured-programmes__all" to={content.copy.to}>
          {content.copy.linkLabel}<ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
