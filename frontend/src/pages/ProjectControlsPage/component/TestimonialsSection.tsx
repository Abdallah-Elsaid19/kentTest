import { useCmsBindings } from "@/features/cms/publicContent";
import { Quote } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { projectControlsTestimonials, testimonialCopy } from "../data";
import { card, section, shell } from "./layout";

export function TestimonialsSection() {
  const cms = useCmsBindings(["college_project_controls"]);
  const cmsValues = cms.resolve({ section, shell, testimonialCopy, projectControlsTestimonials, card });

  return cms.render((
    <section className={cmsValues.section} aria-labelledby="pc-testimonials-title">
      <div className={cmsValues.shell}>
        <FigmaSectionHeading id="pc-testimonials-title" eyebrow={cmsValues.testimonialCopy.eyebrow} title={cmsValues.testimonialCopy.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cmsValues.projectControlsTestimonials.map((testimonial) => (
            <figure key={testimonial.name} className={`${cmsValues.card} flex flex-col !bg-[var(--color-soft)]`}>
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
  ));
}
