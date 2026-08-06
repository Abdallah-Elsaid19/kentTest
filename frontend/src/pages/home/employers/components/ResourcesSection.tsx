import { Play } from "lucide-react";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "./FigmaSectionHeading";

const resources = [
  { eyebrow: "Events", title: "Join a programme or funding information session.", description: "Meet the team and understand programme structure, eligibility and professional routes.", link: "/events", action: "View upcoming events" },
  { eyebrow: "Guidance", title: "Book an information session with KBC.", description: "Discuss employee roles, organisational needs and the most appropriate next step.", link: "/book-session", action: "Book a session" },
  { eyebrow: "Employer guide", title: "Understand the employer role clearly.", description: "Review workplace support, participation and responsibilities before enrolment.", link: "/employer-agreement", action: "Read the agreement" },
];

export function ResourcesSection() {
  return (
    <section className="figma-resources !py-16 sm:!py-20 xl:!py-[118px]" id="resources" aria-labelledby="resources-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="resources-title" eyebrow="Resources and next steps" title={<>Make a confident workforce<br />decision.</>} />
        <div className="figma-video-card !grid-cols-1 lg:!grid-cols-[.9fr_1.1fr]">
          <div className="!p-6 sm:!p-10">
            <span>KBC video</span>
            <h3>See professional learning<br />connected to real<br />workplace practice.</h3>
            <p>Watch an example from Kent Business College and explore how funded professional development supports practical capability, recognised progression and career growth.</p>
            <ArrowLink to="https://www.youtube.com/" newTab>Explore the KBC video library</ArrowLink>
          </div>
          <a className="figma-video-card__media !min-h-[280px] sm:!min-h-[340px] lg:!min-h-[420px]" href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Watch Kent Business College video">
            <img src="/assets/images/figma-home/apm-chpp.png" alt="APM Chartered Project Professional" loading="lazy" />
            <div className="figma-video-card__title"><img src="/assets/logos/kbc-logo-figma.png" alt="" /><span><strong>Fully Funded Project Control Professional with Chartered Project Professional (APM ChPP)</strong><small>Kent Business College</small></span></div>
            <i aria-hidden="true"><Play fill="currentColor" /></i>
            <span>Watch on YouTube</span>
          </a>
        </div>
        <div className="figma-resource-grid !grid-cols-1 md:!grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.title}>
              <span>{resource.eyebrow}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <ArrowLink to={resource.link} direction="up-right">{resource.action}</ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
