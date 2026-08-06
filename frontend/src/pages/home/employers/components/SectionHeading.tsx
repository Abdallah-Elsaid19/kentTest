import { ArrowLeft, ArrowRight } from "lucide-react";
import type { RefObject } from "react";

export function SectionHeading({ eyebrow, title, description, align = "center" }: { eyebrow?: string; title: string; description?: string; align?: "center" | "left" }) {
  return (
    <div className={`kbc-section-heading ${align === "left" ? "kbc-section-heading--left" : ""}`}>
      {eyebrow && <p className="kbc-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function CarouselControls({ scroller, label }: { scroller: RefObject<HTMLDivElement | null>; label: string }) {
  const move = (direction: number) => scroller.current?.scrollBy({ left: direction * Math.min(scroller.current.clientWidth * 0.84, 520), behavior: "smooth" });
  return (
    <div className="kbc-carousel-controls" aria-label={`${label} carousel controls`}>
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`}><ArrowLeft aria-hidden="true" /></button>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`}><ArrowRight aria-hidden="true" /></button>
    </div>
  );
}
