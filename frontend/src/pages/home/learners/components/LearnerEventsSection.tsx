import { ArrowLink } from "@/components/navigation";
import { LearnerSectionHeading } from "./LearnerSectionHeading";

const events = [
  ["17", "Aug 2026", "Project Controls with APM Chartered Project Professional"],
  ["18", "Aug 2026", "Upskill Your Team with DfE and Kent Business College Funding"],
];

export function LearnerEventsSection() {
  return (
    <section className="learner-events !py-16 sm:!py-20 xl:!py-[118px]" id="learner-events" aria-labelledby="learner-events-title">
      <div className="learner-shell">
        <LearnerSectionHeading id="learner-events-title" eyebrow="Information sessions" title="Meet the team and understand the programme before applying." description="Ask questions about programme content, professional pathways, eligibility and the application process." />
        <div className="learner-events__grid !grid-cols-1 lg:!grid-cols-2">{events.map(([day, date, title]) => <article className="!grid-cols-[72px_1fr] !gap-4 !p-5 sm:!grid-cols-[96px_1fr] sm:!gap-6 sm:!p-7" key={day}><time><b>{day}</b><span>{date}</span></time><div><small>Online information session</small><h3>{title}</h3><p>1:00 pm – 3:00 pm</p><ArrowLink to="https://kentbusinesscollege.com/events/">View event</ArrowLink></div></article>)}</div>
      </div>
    </section>
  );
}
