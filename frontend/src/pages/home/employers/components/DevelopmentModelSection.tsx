import { Plus } from "lucide-react";
import { useState } from "react";
import { FigmaSectionHeading } from "./FigmaSectionHeading";

const steps = [
  { title: "Identify capability needs", description: "Clarify the roles, performance priorities and development gaps that matter to your organisation." },
  { title: "Match the funded pathway", description: "Select the appropriate level, apprenticeship standard and professional route." },
  { title: "Apply learning at work", description: "Connect teaching, coaching and assignments to real workplace activity and projects." },
  { title: "Evidence professional progression", description: "Track development through progress reviews, workplace evidence and professional pathways." },
];

export function DevelopmentModelSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="figma-model !py-16 sm:!py-20 xl:!py-[118px]" id="solutions" aria-labelledby="model-title">
      <div className="figma-shell">
        <FigmaSectionHeading
          id="model-title"
          eyebrow="The KBC model"
          title={<>One development system. Four<br />professional domains.</>}
          description="Instead of offering disconnected courses, KBC connects workforce needs, apprenticeship funding, structured learning and professional progression."
        />
        <div className="figma-model__grid !grid-cols-1 !gap-6 lg:!grid-cols-[.92fr_1.08fr]">
          <div className="figma-model__steps">
            {steps.map((step, index) => (
              <button type="button" className={activeStep === index ? "is-active" : ""} onClick={() => setActiveStep(index)} key={step.title} aria-expanded={activeStep === index}>
                <span className="figma-model__step-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="figma-model__step-copy"><strong>{step.title}</strong>{activeStep === index && <small>{step.description}</small>}</span>
                {activeStep !== index && <Plus aria-hidden="true" />}
              </button>
            ))}
          </div>
          <div className="figma-model__canvas !min-h-[440px] sm:!min-h-[470px]">
            <span className="figma-model__orbit figma-model__orbit--one">Project Management</span>
            <span className="figma-model__orbit figma-model__orbit--two">Project Controls</span>
            <span className="figma-model__orbit figma-model__orbit--three">Marketing</span>
            <span className="figma-model__orbit figma-model__orbit--four">Leadership</span>
            <div className="figma-model__core"><small>KBC</small><strong>Capability</strong></div>
            <article>
              <span>Step {String(activeStep + 1).padStart(2, "0")}</span>
              <h3>{activeStep === 0 ? <>Start with the role—not<br />the course.</> : steps[activeStep].title}</h3>
              <p>{activeStep === 0 ? "KBC begins by understanding the employee's responsibilities, the organisation's priorities and the capability that needs to improve." : steps[activeStep].description}</p>
            </article>
          </div>
        </div>
        <div className="figma-model__stats !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-4">
          <div><strong>4</strong><span>specialist colleges</span></div>
          <div><strong>Level 4–7</strong><span>professional pathways</span></div>
          <div><strong>Workplace-led</strong><span>learning and evidence</span></div>
          <div><strong>Funding guidance</strong><span>for eligible employers</span></div>
        </div>
      </div>
    </section>
  );
}
