import { ArrowUpRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

import { experts } from "../data";

type FacultySectionProps = {
  id?: string;
};

export function FacultySection({ id }: FacultySectionProps) {
  return (
    <section
      id={id}
      className="faculty-section !bg-[#f8f6fa] !px-5 !py-16 font-['Poppins'] sm:!py-20 lg:!pb-32"
      aria-labelledby={id ? `${id}-title` : "faculty-title"}
    >
      <div className="faculty-section__inner mx-auto max-w-6xl">
        <div className="faculty-section__head mb-10 text-center">
          <p className="kbc-eyebrow mx-auto text-xs font-bold uppercase tracking-[.17em] text-[#401B8C]">Professional faculty</p>
          <h2
            id={id ? `${id}-title` : "faculty-title"}
            className="mx-auto mt-3 max-w-3xl text-center !text-[clamp(2rem,4vw,3.5rem)] !font-semibold !leading-tight !tracking-[-.025em] !text-kbc-purple-950"
          >
            Meet the people behind the insight.
          </h2>
        </div>

        <div className="faculty-section__grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => (
            <article
              className="faculty-card group flex min-h-full flex-col overflow-hidden rounded-[10px] border border-[#ddd6e2] bg-white shadow-[0_7px_20px_rgba(38,13,50,.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(64,27,140,.2)] motion-reduce:transform-none motion-reduce:transition-none"
              key={expert.id}
            >
              <div className="relative h-[188px] bg-[#401B8C]">
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <img className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-30 blur-[1px]" src={expert.image} alt="" />
                  <div className="absolute inset-0 bg-[#401B8C]/65" />
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#351044]/65 to-transparent" />
                </div>
                <img
                  className="absolute bottom-[-16px] left-5 h-[138px] w-[108px] rounded-[10px] border border-white/30 object-cover object-top shadow-[0_9px_24px_rgba(19,5,27,.35)] transition duration-500 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                  src={expert.image}
                  alt={`${expert.name}, ${expert.role}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="faculty-card__body flex flex-1 flex-col px-[18px] pb-[18px] pt-[26px]">
                <h3 className="!text-[1.35rem] !font-bold !leading-[1.25] !text-kbc-purple-950">{expert.name}</h3>
                <p className="faculty-card__role mt-1 text-sm font-semibold leading-5 text-[#6b20a0]">{expert.role}</p>
                <p className="faculty-card__bio mt-4 text-sm leading-6 text-[#747076]">{expert.bio}</p>
                <div className="faculty-card__actions mt-auto flex items-center gap-3 pt-7">
                  <Link
                    className="faculty-card__profile inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-[#401B8C] px-5 text-sm font-bold !text-white transition hover:-translate-y-0.5 hover:bg-[#2F1468] hover:!text-white hover:shadow-[0_8px_20px_rgba(64,27,140,.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#401B8C] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
                    to={`/our-experts/${expert.id}`}
                  >
                    View Profile
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[#401B8C]/25 !text-[#401B8C] transition hover:-translate-y-0.5 hover:bg-[#401B8C] hover:!text-white hover:shadow-[0_8px_20px_rgba(64,27,140,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#401B8C] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
                    href={expert.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${expert.name} on LinkedIn`}
                  >
                    <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
