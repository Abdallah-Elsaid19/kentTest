import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learningCopy, learningExperience } from "../data";
import { section, shell } from "./layout";

export function StudyModelSection() {
  return (
    <section id="marketing-learning" className={section} aria-labelledby="marketing-learning-title">
      <div className={shell}>
        <FigmaSectionHeading id="marketing-learning-title" eyebrow={learningCopy.eyebrow} title={learningCopy.title} description={learningCopy.description} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningExperience.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-kbc-purple-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] sm:p-8 motion-reduce:transform-none motion-reduce:transition-none">
              <span className="flex size-12 items-center justify-center rounded-xl bg-kbc-purple-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-5 rounded-2xl bg-primary-dark p-6 text-white sm:grid-cols-3 sm:p-8 lg:p-10">
          <div>
            <strong className="text-3xl font-semibold text-[var(--color-gold)]">2 hours</strong>
            <p className="mt-2 text-sm text-white/70">Live classes</p>
          </div>
          <div>
            <strong className="text-3xl font-semibold text-[var(--color-gold)]">3 hours</strong>
            <p className="mt-2 text-sm text-white/70">Reading and quizzes</p>
          </div>
          <div>
            <strong className="text-3xl font-semibold text-[var(--color-gold)]">3 hours</strong>
            <p className="mt-2 text-sm text-white/70">Reflective reports and workplace application</p>
          </div>
        </div>
      </div>
    </section>
  );
}
