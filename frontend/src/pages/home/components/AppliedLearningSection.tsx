import { useHomeSection } from "../contentContext";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function AppliedLearningSection() {
  const content = useHomeSection("applied");
  const { journeySteps } = content;

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
            eyebrow={content.copy.eyebrow}
            title={content.copy.title}
            description={content.copy.description}
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
