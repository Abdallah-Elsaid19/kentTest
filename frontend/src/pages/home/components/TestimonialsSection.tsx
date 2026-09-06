import { Star } from "lucide-react";
import { useRef } from "react";
import { testimonials } from "./data";
import { CarouselControls } from "./SectionHeading";

export function TestimonialsSection() {
  const scroller = useRef<HTMLDivElement>(null);
  return (
    <section className="kbc-section kbc-testimonials" aria-label="Learner testimonials">
      <div className="kbc-container">
        <div className="kbc-heading-row kbc-heading-row--controls-only"><CarouselControls scroller={scroller} label="testimonials" /></div>
        <div className="kbc-horizontal-cards kbc-testimonial-track" ref={scroller} tabIndex={0} aria-label="Learner testimonials">
          {testimonials.map((testimonial) => (
            <article className="kbc-testimonial-card" key={testimonial.name}>
              <div className="kbc-testimonial-card__top"><img src={testimonial.image} alt={testimonial.name} loading="lazy" /><div><h3>{testimonial.name}</h3><p>{testimonial.role}</p></div></div>
              <div className="kbc-stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" aria-hidden="true" />)}</div>
              <blockquote>{testimonial.quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
