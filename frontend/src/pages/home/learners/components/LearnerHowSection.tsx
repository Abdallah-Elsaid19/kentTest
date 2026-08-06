const steps = [
  ["01", "Check your fit", "Confirm your current role, experience, eligibility and preferred professional direction."],
  ["02", "Choose the right programme", "Match your responsibilities and goals with the appropriate apprenticeship level."],
  ["03", "Learn and apply", "Combine live learning, coaching and workplace activities connected to your job."],
  ["04", "Demonstrate progress", "Build evidence, prepare for assessment and continue towards professional recognition."],
];

export function LearnerHowSection() {
  return (
    <section className="learner-how !py-16 sm:!py-20 xl:!py-[118px]" id="learner-how" aria-labelledby="learner-how-title">
      <div className="learner-shell learner-how__grid !grid-cols-1 !gap-10 lg:!gap-14 xl:!grid-cols-[.92fr_1.08fr] xl:!gap-[72px]">
        <div className="learner-how__visual !min-h-0">
          <img className="!h-[380px] sm:!h-[520px] xl:!h-[640px]" src="/assets/images/learner-home/masterclass.webp" alt="Kent Business College professional masterclass" loading="lazy" />
          <div><span>Applied learning</span><strong>Learn with experts. Apply it at work.</strong></div>
        </div>
        <div className="learner-how__copy">
          <span className="learner-eyebrow">How learning works</span>
          <h2 id="learner-how-title">A clear journey from application to progression.</h2>
          <ol>{steps.map(([number, title, description]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></li>)}</ol>
        </div>
      </div>
    </section>
  );
}
