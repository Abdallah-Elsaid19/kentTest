import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const careerPaths = [
  {
    id: "project-leader",
    tab: "Project Leader",
    role: "Project Leader",
    roleDescription: "Your current role or the next step you are working towards.",
    capability: "Project Management",
    capabilityDescription: "Lead the planning, stakeholder and delivery of projects with greater confidence.",
    programmes: [
      { title: "Associate Project Manager", level: "Level 4", href: "/associate-project-manager-level-4" },
    ],
  },
  {
    id: "project-controls-specialist",
    tab: "Project Controls Specialist",
    role: "Project Controls Specialist",
    roleDescription: "Your current role or the next step you are working towards.",
    capability: "Project Controls",
    capabilityDescription: "Master schedule, cost, risk and forecasting for complex project environments.",
    programmes: [
      { title: "Project Controls Professional", level: "Level 6", href: "/project-controls-professional-level-6" },
    ],
  },
  {
    id: "marketing-manager",
    tab: "Marketing Manager",
    role: "Marketing Manager",
    roleDescription: "Your current role or the next step you are working towards.",
    capability: "Marketing",
    capabilityDescription: "Turn customer insight into measurable commercial growth and strategic direction.",
    programmes: [
      { title: "Marketing Executive", level: "Level 4", href: "/marketing-executive-level-4" },
      { title: "Marketing Manager", level: "Level 6", href: "/marketing-manager-level-6" },
    ],
  },
  {
    id: "senior-leader",
    tab: "Senior Leader",
    role: "Senior Leader",
    roleDescription: "Your current role or the next step you are working towards.",
    capability: "Leadership",
    capabilityDescription: "Strengthen strategic judgement, leadership and organisational impact at a more senior level.",
    programmes: [
      { title: "Master of Business Administration", level: "Level 7", href: "/mba-diploma-level-7" },
    ],
  },
] as const;

export function CareerOutcomesSection() {
  const [activeId, setActiveId] = useState<(typeof careerPaths)[number]["id"]>("project-leader");
  const activePath = careerPaths.find((path) => path.id === activeId) ?? careerPaths[0];

  return (
    <section
      className="relative isolate overflow-hidden bg-[#fbfafc] py-16 sm:py-20 xl:py-[118px]"
      aria-labelledby="career-outcomes-title"
    >
      <img
        className="pointer-events-none absolute -right-28 top-1/2 -z-10 hidden w-[430px] -translate-y-1/2 select-none opacity-[0.05] lg:block xl:-right-20 xl:w-[520px]"
        src="/assets/patterns/kbc-ibis-wreath.png"
        alt=""
        aria-hidden="true"
      />

      <div className="figma-shell relative">
        <FigmaSectionHeading
          id="career-outcomes-title"
          eyebrow="Choose your direction"
          title="Start with the career outcome"
          description="Select the role you hold or are moving towards, then see the capability and programme built around that next step."
          align="center"
        />

        <div
          className="career-outcomes__tabs mx-auto mt-10 flex w-fit max-w-full gap-1 overflow-x-auto rounded-2xl border border-[#401B8C]/10 bg-white p-1.5 shadow-[0_10px_35px_rgba(64,27,140,0.06)] sm:mt-12"
          role="tablist"
          aria-label="Choose your career direction"
        >
          {careerPaths.map((path) => {
            const isActive = path.id === activePath.id;

            return (
              <button
                className={`shrink-0 rounded-xl px-4 py-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#401B8C] focus-visible:ring-offset-2 sm:px-6 ${
                  isActive
                    ? "bg-[#401B8C] !text-white shadow-[0_7px_18px_rgba(64,27,140,0.22)]"
                    : "bg-transparent !text-[#292231] hover:bg-[#401B8C]/[0.06] hover:!text-[#401B8C]"
                }`}
                id={`career-tab-${path.id}`}
                key={path.id}
                type="button"
                role="tab"
                aria-controls={`career-panel-${path.id}`}
                aria-selected={isActive}
                onClick={() => setActiveId(path.id)}
              >
                {path.tab}
              </button>
            );
          })}
        </div>

        <div
          className="career-outcomes__flow mt-10 grid w-full items-stretch gap-4 lg:grid-cols-[1fr_58px_1fr_58px_1.1fr] lg:gap-5"
          id={`career-panel-${activePath.id}`}
          role="tabpanel"
          aria-labelledby={`career-tab-${activePath.id}`}
          key={activePath.id}
        >
          <article className="group flex min-h-[210px] flex-col rounded-[20px] border border-[#401B8C]/10 bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#401B8C]/35 hover:shadow-[0_20px_50px_rgba(64,27,140,0.10)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] !text-[#401B8C]">Role</span>
            <h3 className="mt-5 font-['Poppins',sans-serif] text-[26px] font-semibold leading-tight !text-[#17131b]">
              {activePath.role}
            </h3>
            <p className="mt-3 text-sm leading-relaxed !text-[#625a68]">{activePath.roleDescription}</p>
          </article>

          <span className="mx-auto grid size-11 rotate-90 place-items-center self-center rounded-full border border-[#d9b755]/60 bg-white !text-[#b88a09] lg:rotate-0" aria-hidden="true">
            <ArrowRight size={18} />
          </span>

          <article className="group flex min-h-[210px] flex-col rounded-[20px] border border-[#401B8C]/25 bg-[#f1ebff] p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#401B8C]/50 hover:shadow-[0_20px_50px_rgba(64,27,140,0.12)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] !text-[#401B8C]">Capability</span>
            <h3 className="mt-5 font-['Poppins',sans-serif] text-[22px] font-semibold leading-tight !text-[#17131b]">
              {activePath.capability}
            </h3>
            <p className="mt-3 text-sm leading-relaxed !text-[#625a68]">{activePath.capabilityDescription}</p>
          </article>

          <span className="mx-auto grid size-11 rotate-90 place-items-center self-center rounded-full border border-[#d9b755]/60 bg-white !text-[#b88a09] lg:rotate-0" aria-hidden="true">
            <ArrowRight size={18} />
          </span>

          <article className="flex min-h-[210px] flex-col justify-center rounded-[20px] border border-[#401B8C]/10 bg-white p-7 shadow-[0_18px_48px_rgba(64,27,140,0.09)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#401B8C]/40 hover:shadow-[0_24px_58px_rgba(64,27,140,0.15)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] !text-[#401B8C]">Programme</span>
            <div className="mt-4 divide-y divide-[#401B8C]/10">
              {activePath.programmes.map((programme) => (
                <Link
                  className="group/programme flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  to={programme.href}
                  aria-label={`Explore ${programme.title}`}
                  key={programme.title}
                >
                  <span>
                    <strong className="font-['Poppins',sans-serif] text-lg font-semibold leading-snug !text-[#17131b]">
                      {programme.title}
                    </strong>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#f7efcf] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.13em] !text-[#8b6500]">
                      <Award size={13} aria-hidden="true" /> {programme.level}
                    </span>
                  </span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#401B8C]/45 !text-[#401B8C] transition-[color,background-color,transform] duration-300 group-hover/programme:-translate-y-1 group-hover/programme:bg-[#401B8C] group-hover/programme:!text-white">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </article>
        </div>

        <div className="career-outcomes__link mt-9 flex justify-center">
          <Link className="group inline-flex items-center gap-2 text-sm font-semibold !text-[#401B8C] hover:!text-[#2F1468]" to="/programmes">
            Compare programmes for your role
            <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1" size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
