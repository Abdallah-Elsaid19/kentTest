import { LearnerSectionHeading } from "./LearnerSectionHeading";

const paths = [
  [
    "01",
    "Project Management",
    "Deliver projects with greater confidence.",
    "Planning, stakeholders, delivery, risk and modern project practice.",
    "project",
  ],
  [
    "02",
    "Project Controls",
    "Master planning, cost and performance.",
    "Build specialist capability for complex project environments.",
    "controls",
  ],
  [
    "03",
    "Marketing",
    "Grow brands through evidence and insight.",
    "Connect strategy, digital practice and commercial decision-making.",
    "marketing",
  ],
  [
    "04",
    "Leadership",
    "Lead change at a more strategic level.",
    "Strengthen leadership judgement, strategy and organisational impact.",
    "leadership",
  ],
];

export function CareerDirectionsSection() {
  return (
    <section
      className="learner-directions !py-16 sm:!py-20 xl:!py-[118px]"
      id="learner-paths"
      aria-labelledby="learner-paths-title"
    >
      <div className="learner-shell">
        <LearnerSectionHeading
          id="learner-paths-title"
          eyebrow="Choose your direction"
          title="Start with the career outcome not the course title."
          description="Select the professional capability you want to build, then compare programmes designed for your current role and next step."
        />
        <div className="career-path-grid !grid-cols-1 md:!grid-cols-2">
          {paths.map(([number, discipline, title, description, tone]) => (
            <a
              className={`career-path-card career-path-card--${tone} !min-h-[250px] !grid-cols-[40px_1fr] !p-6 sm:!grid-cols-[52px_1fr_32px] sm:!p-8`}
              href="#learner-programmes"
              key={discipline}
            >
              <span className="career-path-card__index">{number}</span>
              <div>
                <small>{discipline}</small>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="career-path-card__arrow !absolute !bottom-6 !right-6 sm:!static sm:!self-end" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
