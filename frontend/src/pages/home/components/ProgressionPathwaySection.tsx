import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const pathwaySteps = [
  { number: "01", title: "Apprenticeship", description: "Role-relevant development", tone: "quiet" },
  { number: "02", title: "Qualification", description: "Professional study route", tone: "primary" },
  { number: "03", title: "Membership", description: "Professional community", tone: "primary" },
  { number: "04", title: "Chartered pathway", description: "Subject to body requirements", tone: "outlined" },
] as const;

export function ProgressionPathwaySection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timeline.classList.add("is-enhanced");

    if (reduceMotion) {
      timeline.style.setProperty("--pathway-progress", "1");
      stepRefs.current.forEach((step) => step?.classList.add("is-visible"));
      return;
    }

    let animationFrame = 0;

    const updateTimeline = () => {
      animationFrame = 0;
      const track = timeline.querySelector<HTMLElement>(".progression-pathway__track");
      if (!track) return;

      const triggerY = window.innerHeight * 0.7;
      const trackRect = track.getBoundingClientRect();
      const progress = Math.min(Math.max((triggerY - trackRect.top) / trackRect.height, 0), 1);
      timeline.style.setProperty("--pathway-progress", progress.toFixed(4));

      stepRefs.current.forEach((step) => {
        const node = step?.querySelector<HTMLElement>(".progression-pathway__node");
        if (step && node && node.getBoundingClientRect().top <= triggerY + 2) {
          step.classList.add("is-visible");
        }
      });
    };

    const requestUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateTimeline);
    };

    updateTimeline();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#180326] py-20 text-white sm:py-24 xl:py-[110px]"
      aria-labelledby="progression-pathway-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-[#401B8C]/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 size-[420px] rounded-full bg-[#401B8C]/10 blur-[100px]" />
      <img
        className="pointer-events-none absolute -left-36 top-[58%] z-0 hidden w-[clamp(430px,38vw,650px)] -translate-y-1/2 select-none opacity-[0.045] md:block"
        src="/assets/patterns/kbc-horse-growth.png"
        alt=""
        aria-hidden="true"
      />

      <div className="figma-shell relative z-10">
        <div>
          <FigmaSectionHeading
            id="progression-pathway-title"
            eyebrow="Professional progression"
            title="Build a pathway beyond completion"
            description="Selected programmes connect apprenticeship and professional development with qualifications, professional communities and further progression opportunities."
            tone="inverse"
          />
        </div>

        <div ref={timelineRef} className="progression-pathway__timeline relative mx-auto mt-16 w-full max-w-[1000px] lg:mt-20">
          <span className="progression-pathway__track" aria-hidden="true">
            <span className="progression-pathway__line" />
          </span>

          {pathwaySteps.map((step, index) => (
            <div
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className={`progression-pathway__step ${index % 2 === 0 ? "is-right" : "is-left"}`}
              key={step.number}
            >
              <span className={`progression-pathway__node grid size-12 place-items-center rounded-full border bg-[#180326] text-[11px] font-bold ${step.tone === "outlined" ? "border-[#D6A916]/70 !text-[#F5C94F]" : "border-white/25 !text-white/80"}`}>
                {step.number}
              </span>

              <article
                className={`progression-pathway__card relative z-10 flex min-h-[210px] flex-col items-center justify-center rounded-[20px] border p-6 text-center transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2 ${
                  index === 2
                    ? "border-[#7d5a9e]/65 bg-[#4C2672] shadow-[0_18px_45px_rgba(0,0,0,0.16)] hover:border-[#F5C94F]/55"
                    : index === 1
                      ? "border-[#67407f]/60 bg-[#30114e] shadow-[0_18px_45px_rgba(0,0,0,0.14)] hover:border-[#F5C94F]/45"
                      : step.tone === "outlined"
                        ? "border-[#F5C94F]/85 bg-[#401B8C] shadow-[0_24px_60px_rgba(64,27,140,0.42)] hover:border-[#F5C94F] hover:shadow-[0_28px_70px_rgba(64,27,140,0.55)]"
                        : "border-[#694a73]/50 bg-[#210b35] hover:border-white/25"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${step.tone === "outlined" ? "!text-[#F5C94F]" : "!text-white/45"}`}>Step {step.number}</span>
                <h3 className={`mt-4 font-['Poppins',sans-serif] text-xl font-semibold leading-tight ${step.tone === "outlined" ? "!text-[#F5C94F]" : "!text-white"}`}>
                  {step.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${step.tone === "outlined" ? "!text-white/75" : "!text-white/55"}`}>{step.description}</p>
                <span className="mt-5 size-1.5 rounded-full bg-[#D6A916]" aria-hidden="true" />

                {step.tone === "outlined" && (
                  <Link
                    className="group absolute -right-5 -top-5 grid size-12 place-items-center rounded-full border border-[#D6A916]/70 bg-[#281039] !text-[#F5C94F] transition-colors hover:bg-[#401B8C]"
                    to="/programmes"
                    aria-label="Explore professional progression programmes"
                  >
                    <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} aria-hidden="true" />
                  </Link>
                )}
              </article>
            </div>
          ))}
        </div>

        <div className="progression-pathway__footer mx-auto mt-16 max-w-[620px] text-center lg:mt-20">
          <p className="font-['Poppins',sans-serif] text-lg font-semibold !text-white">Progress</p>
          <p className="mt-2 text-xs font-semibold !text-white/55">
            Greater responsibility · Professional recognition · Further development
          </p>
          <p className="mx-auto mt-5 max-w-[520px] text-[10px] leading-relaxed !text-white/35">
            Professional membership, qualification and chartered progression remain subject to the requirements of the relevant professional body.
          </p>
        </div>
      </div>
    </section>
  );
}
