const stages = [
  ["01", "Apprenticeship", "Role-relevant development"],
  ["02", "Qualification", "Professional study route"],
  ["03", "Membership", "Professional community"],
  ["04", "Chartered pathway", "Subject to body requirements"],
];

export function LearnerRecognitionSection() {
  return (
    <section className="learner-recognition !py-16 sm:!py-20 xl:!py-[118px]" id="learner-recognition" aria-labelledby="learner-recognition-title">
      <div className="learner-shell learner-recognition__panel !p-6 sm:!p-10 xl:!p-16">
        <div><span className="learner-eyebrow">Professional progression</span><h2 id="learner-recognition-title">Build a pathway beyond programme completion.</h2><p>Selected programmes can connect apprenticeship development with professional qualifications, membership and chartered pathways. External recognition remains subject to the relevant professional body's requirements.</p></div>
        <div className="learner-recognition__route !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">{stages.map(([number, title, description], index) => <div className="learner-recognition__stage !block xl:!contents" key={number}><div><span>{number}</span><strong>{title}</strong><small>{description}</small></div>{index < stages.length - 1 && <i className="!hidden xl:!block" aria-hidden="true">→</i>}</div>)}</div>
      </div>
    </section>
  );
}
