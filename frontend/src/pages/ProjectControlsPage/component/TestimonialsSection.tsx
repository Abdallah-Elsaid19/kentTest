import { Quote } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { projectControlsTestimonials, testimonialCopy } from "../data";
import { card, section, shell } from "./layout";

export function TestimonialsSection() {
  return (
    <section className={section} aria-labelledby="pc-testimonials-title">
      <div className={shell}>
        <FigmaSectionHeading id="pc-testimonials-title" eyebrow={testimonialCopy.eyebrow} title={testimonialCopy.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectControlsTestimonials.map((testimonial) => (
            <figure key={testimonial.name} className={`${card} flex flex-col !bg-[var(--color-soft)]`}>
              <Quote size={28} className="text-primary" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-sm leading-7 text-[var(--color-text)]">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-kbc-purple-200 pt-5">
                <img src={testimonial.image} alt="" width={48} height={48} loading="lazy" decoding="async" className="size-12 shrink-0 rounded-full object-cover object-top" />
                <div><p className="text-sm font-semibold">{testimonial.name}</p><p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{testimonial.role}</p></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
