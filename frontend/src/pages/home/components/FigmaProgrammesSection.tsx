import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const programmes = [
  {
    number: "01",
    level: "Level 6",
    category: "Project Controls",
    title: "Project Controls Professional",
    description: "Master schedule, cost, risk and forecasting to keep complex projects on track and under control.",
    href: "/project-controls-professional-level-6",
    tone: "controls",
  },
  {
    number: "02",
    level: "Level 4",
    category: "Project Management",
    title: "Associate Project Manager",
    description: "Build the planning, stakeholder and delivery skills to lead projects with real confidence.",
    href: "/associate-project-manager-level-4",
    tone: "management",
  },
  {
    number: "03",
    level: "Level 4",
    category: "Marketing",
    title: "Marketing Executive",
    description: "Turn customer insight into campaigns that deliver measurable commercial growth.",
    href: "/marketing-executive-level-4",
    tone: "marketing",
  },
  {
    number: "04",
    level: "Level 6",
    category: "Marketing",
    title: "Marketing Manager",
    description: "Lead marketing strategy and performance to shape brand direction and business results.",
    href: "/marketing-manager-level-6",
    tone: "marketing",
  },
  {
    number: "05",
    level: "Level 7",
    category: "Leadership",
    title: "Master of Business Administration",
    description: "Develop strategic leadership, commercial judgement and the confidence to lead at senior level.",
    href: "/mba-diploma-level-7",
    tone: "leadership",
  },
];

export function FigmaProgrammesSection() {
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
    if (event.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft, distance: 0 };
    setIsDragging(true);
    track.setPointerCapture(event.pointerId);
  };

  const dragSlider = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active) return;
    const delta = event.clientX - dragRef.current.startX;
    dragRef.current.distance = Math.max(dragRef.current.distance, Math.abs(delta));
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
          eyebrow="Featured programmes"
          title="Professional development for real responsibility"
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
          onClickCapture={(event) => {
            if (dragRef.current.distance > 6) event.preventDefault();
            dragRef.current.distance = 0;
          }}
        >
          {programmes.map((programme) => (
            <article className="featured-programme-card" data-tone={programme.tone} key={programme.number}>
              <span className="featured-programme-card__number" aria-hidden="true">{programme.number}</span>
              <span className="featured-programme-card__level"><Award aria-hidden="true" /> {programme.level}</span>
              <p className="featured-programme-card__category">{programme.category}</p>
              <h3>{programme.title}</h3>
              <p className="featured-programme-card__description">{programme.description}</p>
              <Link to={programme.href} aria-label={`Explore ${programme.title}`}>
                <span>Explore programme</span>
                <i><ArrowUpRight aria-hidden="true" /></i>
              </Link>
            </article>
          ))}
        </div>

        <Link className="figma-featured-programmes__all" to="/programmes">
          View all programmes <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
