import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const journeySteps = [
  {
    number: "01",
    title: "Check your fit",
    description: "Confirm your current role, experience, eligibility and preferred professional direction.",
  },
  {
    number: "02",
    title: "Choose the right programme",
    description: "Match your responsibilities and goals with the appropriate apprenticeship level.",
  },
  {
    number: "03",
    title: "Learn and apply",
    description: "Combine live learning, coaching and workplace activities connected to your job.",
  },
  {
    number: "04",
    title: "Demonstrate progress",
    description: "Build evidence, prepare for assessment and continue towards professional recognition.",
  },
];

export function AppliedLearningSection() {
  return (
    <section className="figma-applied-learning" aria-labelledby="applied-learning-title">
      <img
        className="figma-applied-learning__watermark"
        src="/assets/patterns/kbc-ibis-wreath.png"
        alt=""
        aria-hidden="true"
      />

      <div className="figma-shell figma-applied-learning__content">
        <div className="figma-applied-learning__heading">
          <FigmaSectionHeading
            id="applied-learning-title"
            eyebrow="Applied learning"
            title="Learn with experts Apply it at work."
            description="A clear journey from application to progression."
            align="center"
          />
        </div>

        <ol className="figma-applied-learning__timeline">
          {journeySteps.map((step) => (
            <li key={step.number}>
              <span className="figma-applied-learning__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
