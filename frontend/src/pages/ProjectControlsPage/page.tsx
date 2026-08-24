import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { RouteMeta } from "@/components/seo/RouteMeta";
import { NavigationButton } from "@/components/navigation";
import { IndustrySectorsSection } from "@/components/sections/IndustrySectorsSection";
import { PathwaySelector } from "./PathwaySelector";
import { CapabilitySelector } from "./CapabilitySelector";

const shell =
  "mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
const section = "py-28 max-[600px]:py-20";
const eyebrow =
  "mb-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-kbc-purple-600";
const headingRow =
  "mb-12 grid grid-cols-[1.1fr_.9fr] items-end gap-20 max-[1080px]:grid-cols-1 max-[1080px]:gap-8 [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h2]:text-[clamp(44px,5vw,68px)] [&_h2]:leading-[1.03] [&_p]:text-kbc-purple-700";

const outputs = [
  [
    "01",
    "Integrated project baseline",
    "A coherent view of scope, schedule, cost and delivery assumptions.",
  ],
  [
    "02",
    "Schedule and critical-path analysis",
    "Logic-driven plans and analysis that expose delivery risk.",
  ],
  [
    "03",
    "Earned value performance report",
    "Performance insight connecting plan, progress, cost and forecast.",
  ],
  [
    "04",
    "Cost forecast and variance analysis",
    "Structured financial visibility to support informed intervention.",
  ],
  [
    "05",
    "Risk and issue register",
    "Clear ownership, escalation, response and decision pathways.",
  ],
  [
    "06",
    "Executive project dashboard",
    "Concise, decision-ready reporting for senior stakeholders.",
  ],
  [
    "07",
    "PMO operating model",
    "Governance, roles, processes and reporting designed around context.",
  ],
  [
    "08",
    "AI workflow or dashboard",
    "Responsible use of modern tools to improve reporting and analysis.",
  ],
];

const faqs = [
  [
    "When do the cohorts start?",
    "Cohorts are planned for January, April and September, subject to confirmation.",
  ],
  [
    "How long is the programme?",
    "The work-based professional route is delivered over 27 months.",
  ],
  [
    "Can the module mix be tailored?",
    "Yes. Six credits can be shaped around role requirements, evidence opportunities and employer priorities, subject to approval.",
  ],
  [
    "Does the Chartered pathway automatically award ChPP status?",
    "No. Chartered outcomes remain subject to the professional body's own rules and assessment requirements.",
  ],
  [
    "What employer support is required?",
    "Learners need workplace opportunities, protected development time and support from a line manager through progress reviews.",
  ],
];

export default function ProjectControlsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="pc-page overflow-x-clip bg-white font-['DM_Sans',sans-serif] text-[17px] leading-[1.55] text-kbc-purple-950 [&_h1]:font-['Source_Serif_4',Georgia,serif] [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h3]:font-['Source_Serif_4',Georgia,serif] [&_img]:max-w-full">
      <RouteMeta
        fallbackTitle="Project Controls Professional Level 6 | Kent Business College"
        fallbackDescription="Build advanced capability in planning, cost, risk, governance and project performance through a work-based Level 6 programme."
      />

      <section className="pc-hero overflow-hidden bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700 py-20 text-white">
        <div className={`pc-shell pc-hero__grid ${shell} grid grid-cols-[1.05fr_.95fr] items-center gap-[70px] max-[1080px]:grid-cols-1 max-[1080px]:gap-10`}>
          <div>
            <p className={`pc-eyebrow ${eyebrow} !text-kbc-gold-500`}>College of Project Controls</p>
            <h1 className="kbc-hero-title">
              Control complexity. Lead <em>with confidence.</em>
            </h1>
            <p className="pc-hero__lead mt-6 max-w-[690px] text-[19px] text-white/80">
              Develop professionals who can turn project data into reliable
              plans, controlled costs, credible schedules, early warnings,
              governance decisions and executive confidence.
            </p>
            <div className="pc-actions mt-7 flex flex-wrap gap-3 max-[600px]:flex-col">
              <NavigationButton
                className="!min-h-12 !px-5"
                to="#contact"
                variant="projectControls"
              >
                Build your team’s capability <ArrowRight />
              </NavigationButton>
              <NavigationButton
                className="!min-h-12 !px-5"
                to="#pathways"
                variant="projectControlsInverse"
              >
                Compare pathways
              </NavigationButton>
            </div>
            <div className="pc-hero__facts mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-5 max-[600px]:grid-cols-1 [&_b]:block [&_b]:text-white [&_span]:text-xs [&_span]:text-white/65">
              <span>
                <b>27 months</b>Work-based route
              </span>
              <span>
                <b>3 pathways</b>Operational, Strategic and Chartered
              </span>
              <span>
                <b>Level 6</b>Professional programme
              </span>
            </div>
          </div>
          <div
            className="pc-hero__visual relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 shadow-2xl [&>img]:h-[470px] [&>img]:w-full [&>img]:rounded-xl [&>img]:object-cover"
            aria-label="Project performance dashboard"
          >
            <img
              src="/assets/images/learner-home/project-controls.webp"
              alt="Project Controls professionals at Kent Business College"
            />
            <div className="pc-dashboard absolute bottom-8 left-8 rounded-xl bg-white p-5 text-kbc-purple-950 shadow-xl">
              <span>Programme status</span>
              <b>On track</b>
              <div className="mt-3 flex h-12 items-end gap-1.5">
                <i className="h-[35%] w-4 bg-kbc-purple-600" />
                <i className="h-[55%] w-4 bg-kbc-purple-600" />
                <i className="h-[48%] w-4 bg-kbc-purple-600" />
                <i className="h-[72%] w-4 bg-kbc-purple-600" />
                <i className="h-[90%] w-4 bg-kbc-gold-500" />
              </div>
            </div>
            <div className="pc-cohort absolute right-8 top-8 rounded-xl bg-kbc-gold-500 p-4 text-kbc-purple-950 shadow-xl">
              <span>Next cohorts open</span>
              <b>January · April · September</b>
            </div>
          </div>
        </div>
      </section>

      <nav className="pc-anchor-nav sticky top-[90px] z-20 bg-kbc-purple-950 text-white" aria-label="Page sections">
        <div className={`pc-shell ${shell} flex overflow-auto`}>
          {[
            "Overview",
            "Capability",
            "Sectors",
            "Pathways",
            "Outputs",
            "Delivery",
            "Experts",
            "Funding",
            "FAQ",
            "Contact",
          ].map((x) => (
            <a className="shrink-0 px-4 py-4 text-xs" key={x} href={`#${x.toLowerCase()}`}>
              {x}
            </a>
          ))}
        </div>
      </nav>

      <section className={`pc-section ${section}`} id="overview">
        <div className={`pc-shell pc-intro ${shell} grid grid-cols-2 gap-16 max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`pc-eyebrow ${eyebrow}`}>Programme overview</p>
            <h2 className="text-[clamp(44px,5vw,68px)] leading-[1.03]">
              From project controls practice to senior delivery confidence.
            </h2>
            <p>
              Project Controls Professional Level 6 is designed for people who
              plan, control, analyse, govern and deliver projects. It combines
              planning, scheduling, cost control, performance measurement, risk,
              reporting, governance and decision support with work-based
              evidence.
            </p>
          </div>
          <div className="pc-stat-grid grid grid-cols-2 gap-3">
            {[
              ["6", "Professional credits"],
              ["1h", "Monthly coaching"],
              ["7h", "Typical weekly study"],
              ["10", "Week progress reviews"],
            ].map(([n, l]) => (
              <article className="rounded-2xl bg-[#f6f4fa] p-6" key={l}>
                <b className="block text-4xl text-kbc-purple-600">{n}</b>
                <span className="text-sm text-kbc-purple-700">{l}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`pc-section pc-section--stone ${section} bg-[#f3f0e8]`} id="capability">
        <div className={`pc-shell ${shell}`}>
          <div className={`pc-heading-row ${headingRow}`}>
            <div>
              <p className={`pc-eyebrow ${eyebrow}`}>Capability architecture</p>
              <h2>Build the control system behind confident delivery.</h2>
            </div>
          </div>
          <CapabilitySelector />
        </div>
      </section>

      <IndustrySectorsSection id="sectors" />

      <section className={`pc-section ${section}`} id="pathways">
        <div className={`pc-shell ${shell}`}>
          <div className={`pc-heading-row ${headingRow}`}>
            <div>
              <p className={`pc-eyebrow ${eyebrow}`}>Choose your pathway</p>
              <h2>One professional standard. Three routes to fit the role.</h2>
            </div>
          </div>
          <PathwaySelector />
        </div>
      </section>

      <section className={`pc-section pc-section--dark ${section} text-white`} id="outputs">
        <div className={`pc-shell ${shell}`}>
          <div className={`pc-heading-row pc-output-heading ${headingRow} [&_h2]:!text-white [&_p]:!text-white/75`}>
            <div>
              <p className={`pc-eyebrow ${eyebrow}`}>Workplace outputs</p>
              <h2>Evidence that improves the way projects are controlled.</h2>
            </div>
          </div>
          <div className="pc-output-grid">
            {outputs.map(([n, t, d]) => (
              <article className="pc-output-card" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`pc-section ${section}`} id="delivery">
        <div className={`pc-shell ${shell}`}>
          <div className={`pc-heading-row ${headingRow}`}>
            <div>
              <p className={`pc-eyebrow ${eyebrow}`}>Learning and delivery</p>
              <h2>Live, applied and built for working professionals.</h2>
            </div>
          </div>
          <div className="pc-delivery-grid">
            <div className="pc-steps">
              {[
                ["01", "Prepare", "Reading, diagnostics, project evidence review and workplace context preparation."],
                ["02", "Explore", "Live tutor-led classes, case analysis, worked examples and practical workshops."],
                ["03", "Apply", "Use frameworks and tools in a real project or approved professional context."],
                ["04", "Reflect", "Evaluate impact, improve the artefact and build portfolio evidence."],
              ].map(([n, t, d]) => (
                <article className="pc-step-card" key={n}>
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
            <article className="pc-rhythm-card">
              <span>Typical weekly rhythm</span>
              <h3>Approximately seven hours each week.</h3>
              {[
                ["2h", "Live interactive session", "Tutor-led teaching, discussion and applied practice"],
                ["2.5h", "Reading, quizzes and podcasts", "Guided learning and knowledge checks"],
                ["2.5h", "Portfolio-building activities", "Workplace evidence, screenshots, artefacts and reflection"],
              ].map(([time, title, detail]) => (
                <div className="pc-rhythm-row" key={title}>
                  <b>{time}</b>
                  <p>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className={`pc-section pc-section--stone ${section} bg-[#f3f0e8]`} id="experts">
        <div className={`pc-shell ${shell}`}>
          <div className={`pc-heading-row ${headingRow}`}>
            <div>
              <p className={`pc-eyebrow ${eyebrow}`}>Teachers and subject experts</p>
              <h2>
                Learn from people who have shaped project controls practice.
              </h2>
            </div>
          </div>
          <div className="pc-experts grid grid-cols-[.9fr_1.1fr] gap-16 max-[1080px]:grid-cols-1">
            <article className="pc-expert-main overflow-hidden rounded-2xl bg-kbc-purple-950 text-white [&_img]:h-[420px] [&_img]:w-full [&_img]:object-cover [&>div]:p-7">
              <img
                src="/assets/images/figma-home/project-speaker.png"
                alt="Project controls subject expert speaking"
              />
              <div>
                <span>Featured subject expert</span>
                <h3>Steven Wake</h3>
                <p>
                  Lead author for Earned Value Management through APMG
                  International and a key figure in the APM Chartered Status
                  journey.
                </p>
              </div>
            </article>
            <div className="pc-expert-list grid grid-cols-2 gap-3 max-[600px]:grid-cols-1 [&>p]:rounded-2xl [&>p]:bg-white [&>p]:p-5">
              <img
                className="pc-expert-list__image col-span-2 h-[360px] w-full rounded-2xl object-cover max-[600px]:col-span-1"
                src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b83d7b6058e2437d901256766867be76.jpg"
                alt="Kent Business College project controls experts and learners"
                loading="lazy"
              />
              {[
                "Stephen Jenner — Portfolios · benefits · governance",
                "Ray Mead — PMO · governance · transformation",
                "Dr Amgad Badewi — Research · development",
                "Andrew Millington — Complex programmes · capability",
              ].map((x) => (
                <p key={x}>{x}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`pc-section pc-funding ${section}`} id="funding">
        <div className={`pc-shell ${shell}`}>
          <div className={`pc-heading-row ${headingRow}`}>
            <div>
              <p className={`pc-eyebrow ${eyebrow}`}>Funding and included package</p>
              <h2>
                Funding options confirmed after we understand the role and
                route.
              </h2>
            </div>
          </div>
          <div className="pc-funding-grid">
            <article className="pc-funding-card">
              <span>Department for Education apprenticeship funding</span>
              <b>£27,000</b>
              <p>Designed to support the eligible apprenticeship route.</p>
              <ul>
                <li>Education and training delivery</li>
                <li>End-Point Assessment costs</li>
                <li>Coaching services</li>
                <li>Learning materials</li>
              </ul>
            </article>
            <article className="pc-funding-card">
              <span>Institute of Project Controls support package</span>
              <b>£7,000</b>
              <p>
                Designed to support wider professional development for eligible
                learners.
              </p>
              <ul>
                <li>Memberships and professional exam costs</li>
                <li>Diploma Level 7 in Strategy and Leadership</li>
                <li>London Masterclass attendance support</li>
                <li>Healthcare, clubs and graduation support</li>
              </ul>
            </article>
          </div>
          <p className="pc-funding-note">
            Funding is subject to current rules, learner eligibility, employer
            agreement, prior-learning review, residency and work-location
            checks, programme suitability and written confirmation.
            Professional-body membership, examinations, fellowship,
            incorporated status and chartered outcomes remain subject to each
            organisation's own rules and assessment requirements.
          </p>
        </div>
      </section>

      <section className={`pc-section pc-faq-section ${section}`} id="faq">
        <div className={`pc-shell pc-faq ${shell}`}>
          <div className="pc-faq__intro">
            <p className={`pc-eyebrow ${eyebrow}`}>Frequently asked questions</p>
            <h2>Practical answers before you apply.</h2>
            <p>
              Start with a conversation if your role, employer support or
              preferred pathway needs individual review.
            </p>
          </div>
          <div className="pc-faq__list">
            {faqs.map(([q, a]) => (
              <details
                className="pc-faq__item"
                key={q}
                open={openFaq === q}
              >
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenFaq(openFaq === q ? null : q);
                  }}
                >
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-cta text-white" id="contact">
        <div className={`pc-shell ${shell}`}>
          <div className="pc-cta__content">
            <p className={`pc-eyebrow ${eyebrow}`}>Start a conversation</p>
            <h2>
              Build stronger project controls capability across your
              organisation.
            </h2>
            <p>
              Discuss the role, evidence opportunities, employer
              responsibilities, funding eligibility and the most suitable route
              with the KBC team.
            </p>
          </div>
          <div className="pc-actions pc-cta__actions">
            <NavigationButton
              className="!min-h-11 !px-5"
              to="/contact"
              variant="projectControls"
            >
              Book a workforce consultation <ArrowRight />
            </NavigationButton>
            <NavigationButton
              className="!min-h-11 !px-5"
              to="/events"
              variant="projectControlsInverse"
            >
              View information events
            </NavigationButton>
          </div>
        </div>
      </section>
    </div>
  );
}
