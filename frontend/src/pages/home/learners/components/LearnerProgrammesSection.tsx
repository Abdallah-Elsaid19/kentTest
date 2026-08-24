import { ArrowLink } from "@/components/navigation";
import { LearnerSectionHeading } from "./LearnerSectionHeading";

const programmes = [
  {
    discipline: "Project Management",
    title: "Associate Project Manager",
    meta: ["Level 4", "12 months", "PMP / APM pathway"],
    description:
      "Build practical project delivery capability, stakeholder confidence and modern project knowledge while applying learning in your role.",
    image: "associate-project-manager.webp",
    href: "/associate-project-manager-level-4",
  },
  {
    discipline: "Project Controls",
    title: "Project Controls Professional",
    meta: ["Level 6", "27 months", "ChPP pathway"],
    description:
      "Develop advanced capability in planning, cost, risk, governance and performance for complex project environments.",
    image: "project-controls.webp",
    href: "/project-controls-professional-level-6",
  },
  {
    discipline: "Marketing",
    title: "Marketing Executive",
    meta: ["Level 4", "12 months", "CIM certificate route"],
    description:
      "Strengthen professional and digital marketing capability through applied learning connected to real workplace activity.",
    image: "marketing-executive.webp",
    href: "/marketing-executive-level-4",
  },
  {
    discipline: "Marketing",
    title: "Marketing Manager",
    meta: ["Level 6", "18 months", "CIM diploma route"],
    description:
      "Advance strategic insight, commercial thinking and leadership capability for experienced marketing professionals.",
    image: "marketing-manager.webp",
    href: "/marketing-manager-level-6",
  },
  {
    discipline: "Leadership",
    title: "Strategy & Leadership Diploma",
    meta: ["Level 7", "18 months", "MBA top-up route"],
    description:
      "Develop senior leadership, strategic decision-making and organisational transformation capability.",
    image: "leadership.webp",
    href: "/mba-diploma-level-7",
  },
];

export function LearnerProgrammesSection() {
  return (
    <section
      className="learner-programmes !py-16 sm:!py-20 xl:!py-[118px]"
      id="learner-programmes"
      aria-labelledby="learner-programmes-title"
    >
      <div className="learner-shell">
        <LearnerSectionHeading
          id="learner-programmes-title"
          eyebrow="Professional programmes"
          title="Designed around your role not a generic classroom."
        />
        <div className="learner-programmes__grid !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-12">
          {programmes.map((programme, index) => (
            <article className={`learner-programme-card !col-auto ${index > 2 ? "xl:!col-span-6" : "xl:!col-span-4"}`} key={programme.title}>
              <a
                className="learner-programme-card__image !h-48 sm:!h-52"
                href={programme.href}
              >
                <img
                  src={`/assets/images/learner-home/${programme.image}`}
                  alt={`${programme.title} learning at Kent Business College`}
                  loading="lazy"
                />
              </a>
              <div className="learner-programme-card__body">
                <span className="learner-programme-card__discipline">
                  {programme.discipline}
                </span>
                <h3>{programme.title}</h3>
                <div className="learner-programme-card__meta">
                  {programme.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>{programme.description}</p>
                <ArrowLink
                  className="learner-programme-card__link"
                  to={programme.href}
                >
                  Explore programme
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
        <div className="learner-section-action">
          <ArrowLink
            className="learner-btn learner-btn--purple"
            to="/courses"
          >
            View all programmes
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
