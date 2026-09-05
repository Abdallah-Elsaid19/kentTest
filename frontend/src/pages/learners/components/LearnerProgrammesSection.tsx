import { Clock3, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learnerProgrammes } from "../data";

export function LearnerProgrammesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="learner-programmes" aria-labelledby="learner-programmes-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[940px]">
          <FigmaSectionHeading
            id="learner-programmes-title"
            eyebrow="Workforce solutions"
            title="Programmes for your people."
            description="Four DfE-funded programmes across project management, project controls and marketing, each leading to a recognised qualification."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          {learnerProgrammes.map((programme) => (
            <article
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e4ddec] bg-white shadow-[0_12px_32px_rgba(35,13,63,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(35,13,63,0.13)] motion-reduce:transform-none motion-reduce:transition-none"
              key={programme.title}
            >
              <Link className="relative block aspect-[16/10] overflow-hidden bg-[#24103b]" to={programme.href} aria-label={`Explore ${programme.title}`}>
                <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none" src={programme.image} alt={`${programme.title} learning at Kent Business College`} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a30]/70 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#24103b]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5C94F] backdrop-blur-sm">
                  {programme.discipline}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#17131d]">{programme.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-4 border-y border-[#eee8f3] py-4 text-xs font-medium text-[#675f70]" aria-label={`${programme.title} programme details`}>
                  <li className="flex items-center gap-2"><GraduationCap className="size-4 text-primary" aria-hidden="true" />{programme.level}</li>
                  <li className="flex items-center gap-2"><Clock3 className="size-4 text-primary" aria-hidden="true" />{programme.duration}</li>
                </ul>
                <p className="mt-5 text-sm leading-7 text-[#716a7a]">{programme.description}</p>
                <ArrowLink className="mt-auto pt-6 text-sm" to={programme.href}>Explore programme</ArrowLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ArrowLink className="rounded-lg bg-primary px-6 py-3 text-sm !text-white hover:!text-white" to="/programmes">View all programmes</ArrowLink>
        </div>
      </div>
    </section>
  );
}
