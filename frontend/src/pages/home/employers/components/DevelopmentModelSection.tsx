import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavigationButton } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const steps = [
  {
    title: "Identify capability needs",
    description: "Clarify the roles, performance priorities and development gaps that matter to your organisation.",
  },
  {
    title: "Match the funded pathway",
    description: "Select the appropriate level, apprenticeship standard and professional route.",
  },
  {
    title: "Apply learning at work",
    description: "Connect teaching, coaching and assignments to real workplace activity and projects.",
  },
  {
    title: "Evidence professional progression",
    description: "Track development through progress reviews, workplace evidence and professional pathways.",
  },
];

const domains = ["Project Management", "Project Controls", "Marketing", "Leadership"];

function ModelStepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  return (
    <article className="figma-model__service-card" data-model-reveal style={{ "--reveal-order": index + 2 } as React.CSSProperties}>
      <div className="figma-model__service-heading">
        <span className="!text-xs !font-bold !leading-none">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="!text-lg !font-semibold !leading-tight !tracking-tight">{step.title}</h3>
      </div>
      <p className="!text-sm !leading-relaxed">{step.description}</p>
    </article>
  );
}

export function DevelopmentModelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.16, rootMargin: "0px 0px -8%" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`figma-model figma-model--services ${isVisible ? "is-visible" : ""} !py-16 sm:!py-20 xl:!py-[118px]`} id="solutions" aria-labelledby="model-title">
      <div className="figma-shell">
        <div className="figma-model__services-header" data-model-reveal style={{ "--reveal-order": 0 } as React.CSSProperties}>
          <FigmaSectionHeading
            id="model-title"
            eyebrow="The KBC model"
            title={<>One development system. <br></br>Four professional domains.</>}
            description="Instead of offering disconnected courses, KBC connects workforce needs, apprenticeship funding, structured learning and professional progression."
            align="center"
          />
        </div>

        <div className="figma-model__services-grid">
          <div className="figma-model__service-column figma-model__service-column--left">
            {steps.slice(0, 2).map((step, index) => <ModelStepCard step={step} index={index} key={step.title} />)}
          </div>

          <figure className="figma-model__service-media" data-model-reveal style={{ "--reveal-order": 1 } as React.CSSProperties}>
            <img src="/assets/images/figma-home/workplace-teaching.png" alt="A KBC professional learning session" loading="lazy" />
            <figcaption>
              <strong className="!text-lg !font-semibold !leading-tight">KBC Capability</strong>
              <span className="!text-xs !leading-relaxed">{domains.join(" · ")}</span>
            </figcaption>
          </figure>

          <div className="figma-model__service-column figma-model__service-column--right">
            {steps.slice(2).map((step, index) => <ModelStepCard step={step} index={index + 2} key={step.title} />)}
          </div>
        </div>

        <div className="figma-model__stats !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-4" data-model-reveal style={{ "--reveal-order": 6 } as React.CSSProperties}>
          <div><strong className="!text-xl !font-bold !leading-tight">4</strong><span className="!text-xs !leading-relaxed">specialist colleges</span></div>
          <div><strong className="!text-xl !font-bold !leading-tight">Level 4-7</strong><span className="!text-xs !leading-relaxed">professional pathways</span></div>
          <div><strong className="!text-xl !font-bold !leading-tight">Workplace-led</strong><span className="!text-xs !leading-relaxed">learning and evidence</span></div>
          <div><strong className="!text-xl !font-bold !leading-tight">Funding guidance</strong><span className="!text-xs !leading-relaxed">for eligible employers</span></div>
        </div>

        <div className="figma-model__actions">
          <div className="figma-model__action-reveal figma-model__action-reveal--left" data-model-reveal style={{ "--reveal-order": 7 } as React.CSSProperties}>
            <NavigationButton className="!bg-[var(--color-primary)] hover:!bg-[var(--color-primary-dark)]" to="#programmes">Explore programmes <ArrowRight aria-hidden="true" /></NavigationButton>
          </div>
          <div className="figma-model__action-reveal figma-model__action-reveal--right" data-model-reveal style={{ "--reveal-order": 7 } as React.CSSProperties}>
            <NavigationButton to="/book-session" variant="secondary">Discuss your needs</NavigationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
