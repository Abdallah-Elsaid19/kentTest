import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  Network,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { courseContentCopy, projectControlsCourseGroups } from "../data";
import { section, shell } from "./layout";

const groupStyles = [
  {
    surface: "#f0efff",
    border: "#ded9fb",
    accent: "#6658d3",
    soft: "#d9d5fa",
  },
  {
    surface: "#f7eafa",
    border: "#edd4f3",
    accent: "#b94fca",
    soft: "#ead0f0",
  },
  {
    surface: "#fbeaf0",
    border: "#f1d0db",
    accent: "#d54e7a",
    soft: "#f1ccda",
  },
  {
    surface: "#fcf9ef",
    border: "#efdfad",
    accent: "#b78d32",
    soft: "#f7efd7",
  },
] as const;

const groupIcons: LucideIcon[] = [BriefcaseBusiness, Network, Award, BrainCircuit];

function CourseIllustration({ Icon, accent, soft }: { Icon: LucideIcon; accent: string; soft: string }) {
  return (
    <div className="w-16 shrink-0 max-[520px]:w-12" aria-hidden="true">
      <svg className="h-auto w-full overflow-visible" viewBox="0 0 160 112" fill="none">
        <circle cx="16" cy="19" r="6" fill={soft} />
        <circle cx="11" cy="48" r="7" stroke={accent} strokeWidth="2.5" opacity=".65" />
        <circle cx="146" cy="25" r="4" fill={accent} opacity=".75" />
        <circle cx="151" cy="76" r="2.5" fill={accent} opacity=".45" />

        <rect x="39" y="24" width="78" height="58" rx="6" fill="white" fillOpacity=".88" stroke={accent} strokeWidth="4" />
        <rect x="49" y="34" width="58" height="36" rx="2" fill={soft} />
        <Icon x={65} y={39} width={26} height={26} color={accent} strokeWidth={1.8} />
        <path d="M73 83h10v9H73z" fill={accent} />
        <path d="M59 94h38" stroke={accent} strokeWidth="5" strokeLinecap="round" />

        <rect x="101" y="54" width="48" height="37" rx="5" fill="white" fillOpacity=".94" stroke={accent} strokeWidth="3.5" />
        <rect x="108" y="61" width="34" height="22" rx="2" fill={soft} />
        <path d="M96 95h58" stroke={accent} strokeWidth="5" strokeLinecap="round" />

        <rect x="24" y="55" width="20" height="40" rx="5" fill="white" stroke={accent} strokeWidth="3" />
        <circle cx="34" cy="88" r="2" fill={accent} />
      </svg>
    </div>
  );
}

export function CourseContentSection() {
  const [openProvider, setOpenProvider] = useState<number | null>(0);

  return (
    <section
      id="pc-course-content"
      className={`${section} relative isolate overflow-hidden bg-[#fbfafc]`}
      aria-labelledby="pc-course-content-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kbc-purple-200 to-transparent"
        aria-hidden="true"
      />

      <div className={`${shell} relative z-10`}>
        <FigmaSectionHeading
          id="pc-course-content-title"
          eyebrow={courseContentCopy.eyebrow}
          title={courseContentCopy.title}
          description={courseContentCopy.description}
        />

        <div className="mt-14 space-y-4">
          {projectControlsCourseGroups.map((group, groupIndex) => {
            const style = groupStyles[groupIndex];
            const Icon = groupIcons[groupIndex];
            const isOpen = openProvider === groupIndex;
            const headingId = `course-provider-${group.abbreviation.toLowerCase()}`;
            const panelId = `${headingId}-panel`;

            return (
              <article key={group.provider} className="overflow-hidden rounded-3xl border border-kbc-purple-100 bg-white shadow-[0_12px_34px_rgba(53,30,81,.06)]">
                <h3 id={headingId}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-kbc-purple-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:px-7 sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenProvider(isOpen ? null : groupIndex)}
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl text-xs font-bold tracking-[.08em] text-white" style={{ backgroundColor: style.accent }}>
                      {group.abbreviation}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-semibold leading-6 tracking-tight text-kbc-purple-950 sm:text-2xl sm:leading-8">
                        {group.provider}
                      </span>
                    </span>
                    <span className="hidden rounded-full border border-kbc-purple-100 bg-white px-4 py-2 text-xs font-semibold text-kbc-purple-700 sm:block">
                      {group.courses.length} courses
                    </span>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-kbc-purple-100 bg-kbc-purple-50 text-primary">
                      <ChevronDown className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={headingId} className="border-t border-kbc-purple-100 bg-[#fdfcfe] p-4 sm:p-6">
                    <ol className="grid gap-5 lg:grid-cols-2">
                      {group.courses.map((course) => (
                        <li
                          key={course.title}
                          className="group relative min-h-[210px] overflow-hidden rounded-[28px] border p-5 shadow-[0_12px_32px_rgba(53,30,81,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(53,30,81,.14)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
                          style={{ backgroundColor: style.surface, borderColor: style.border }}
                        >
                          <span className="pointer-events-none absolute -bottom-16 -right-10 size-36 rounded-full opacity-65" style={{ backgroundColor: style.soft }} aria-hidden="true" />
                          <span className="pointer-events-none absolute -bottom-10 -right-4 size-24 rounded-full border border-current opacity-10" aria-hidden="true" />

                          <div className="relative z-10 flex h-full items-center gap-4 sm:gap-6">
                            <CourseIllustration Icon={Icon} accent={style.accent} soft={style.soft} />

                            <div className="min-w-0 flex-1">
                              <h4 className="text-lg font-semibold leading-6 tracking-tight text-kbc-purple-950 sm:text-xl">
                                {course.title}
                              </h4>
                              <p className="mt-3 text-xs leading-5 text-kbc-purple-700 sm:text-sm sm:leading-6">
                                {course.description}
                              </p>
                              <p className="mt-4 text-[11px] text-kbc-purple-600">
                                Offered by <strong className="font-semibold text-kbc-purple-950">{group.abbreviation}</strong>
                              </p>
                            </div>

                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
