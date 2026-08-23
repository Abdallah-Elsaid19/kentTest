import { LearnerSectionHeading } from "./LearnerSectionHeading";

const support = [
  ["01", "Dedicated coaching", "Regular guidance helps you connect learning to your responsibilities and maintain progress."],
  ["02", "Progress reviews", "Structured reviews bring learner, employer and coach together around development priorities."],
  ["03", "Wellbeing support", "Access guidance and support designed to help you manage learning alongside professional life."],
  ["04", "Assessment preparation", "Build evidence and prepare confidently for end-point or external assessment requirements."],
  ["05", "Professional community", "Join masterclasses, events and networking opportunities with other working professionals."],
  ["06", "Career progression", "Understand how your programme connects to qualifications, membership and future roles."],
];

export function LearnerSupportSection() {
  return (
    <section className="learner-support !py-16 sm:!py-20 xl:!py-[118px]" id="learner-support" aria-labelledby="learner-support-title">
      <div className="learner-shell">
        <LearnerSectionHeading id="learner-support-title" eyebrow="Support throughout" title="You are supported as a professional, not treated as a course number." />
        <div className="learner-support__grid !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-3">{support.map(([number, title, description]) => <article className="!p-6 sm:!p-8" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div>
    </section>
  );
}
