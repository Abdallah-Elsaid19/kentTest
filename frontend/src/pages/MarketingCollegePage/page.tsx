import { ArrowRight, BarChart3, Sparkles } from "lucide-react";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { MarketingCapabilitySelector } from "./MarketingCapabilitySelector";

const shell =
  "mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
const section = "py-[118px] max-[600px]:py-[82px]";
const eyebrow =
  "mb-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-kbc-purple-600";
const heading =
  "mb-12 grid grid-cols-[1.1fr_.9fr] items-end gap-20 max-[1080px]:grid-cols-1 max-[1080px]:gap-8 [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h2]:text-[clamp(44px,5vw,68px)] [&_h2]:leading-[1.03] [&_p]:text-kbc-purple-700";

const outputs = [
  [
    "01",
    "Customer insight brief",
    "A clear synthesis of customer evidence, needs, behaviours and implications.",
  ],
  [
    "02",
    "Marketing strategy",
    "Objectives, choices, audiences, value proposition, priorities and resource logic.",
  ],
  [
    "03",
    "Campaign plan",
    "Journey, channels, content, measures, responsibilities and optimisation approach.",
  ],
  [
    "04",
    "Performance dashboard",
    "Decision-focused measures and commentary for stakeholders and leadership.",
  ],
  [
    "05",
    "AI-enabled workflow",
    "A responsibly designed process for research, content, analysis or automation.",
  ],
];
const achievers = [
  [
    "Ella Pennells",
    "Black White Denim Ltd",
    "Marketing Executive Level 4",
    "/assets/people/ella-pennells.jpg",
  ],
  [
    "Nicola Porteous",
    "GTT Wireless Ltd",
    "Marketing Executive Level 4",
    "/assets/people/nicola-porteous.jpg",
  ],
  [
    "Cheska Hardie",
    "Bauer Media Group",
    "Marketing Manager Level 6",
    "/assets/people/cheska-hardie.jpg",
  ],
  [
    "Leigh Millington",
    "Bowker Motor Group",
    "Marketing Manager Level 6",
    "/assets/people/leigh-millington.jpg",
  ],
];
const faqs = [
  [
    "Which programme is right for my role?",
    "Level 4 suits marketers building delivery foundations; Level 6 is designed for experienced marketers moving into strategic leadership.",
  ],
  [
    "Are the programmes fully funded?",
    "Funding depends on current apprenticeship rules, individual eligibility, employer arrangements and a suitability review.",
  ],
  [
    "Is the CIM qualification automatic?",
    "No. CIM qualifications and professional status remain subject to the body's current requirements and assessments.",
  ],
  [
    "Can an existing employee join?",
    "Yes, where their role provides the appropriate responsibilities, workplace opportunity and employer support.",
  ],
  [
    "How is learning applied at work?",
    "Learners create and improve real marketing outputs, then reflect on evidence, decisions and measurable impact.",
  ],
];

export default function MarketingCollegePage() {
  return (
    <main className="mk-page overflow-x-clip bg-white font-['DM_Sans',sans-serif] text-[17px] leading-[1.55] text-kbc-purple-950 [&_h1]:font-['Source_Serif_4',Georgia,serif] [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h3]:font-['Source_Serif_4',Georgia,serif] [&_img]:max-w-full">
      <RouteMeta
        fallbackTitle="College of Marketing | Kent Business College"
        fallbackDescription="Develop confident marketing professionals through applied Level 4 and Level 6 pathways aligned to professional progression."
      />

      <section className="mk-hero overflow-hidden bg-gradient-to-br from-kbc-purple-950 via-kbc-purple-700 to-kbc-purple-950 py-20 text-white">
        <div className={`mk-shell mk-hero__grid ${shell} grid grid-cols-[1.05fr_.95fr] items-center gap-[70px] max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`mk-eyebrow ${eyebrow} !text-kbc-gold-500`}>College of Marketing</p>
            <h1 className="kbc-hero-title [&_em]:not-italic [&_em]:text-kbc-gold-500">
              Turn marketing activity into <em>commercial momentum.</em>
            </h1>
            <p className="mk-lead mt-6 max-w-[620px] text-[19px] text-white/80">
              Develop confident marketing professionals who can understand
              customers, shape propositions, lead campaigns, use data and AI
              responsibly, and connect marketing decisions to business
              performance.
            </p>
            <div className="mk-actions mt-7 flex flex-wrap gap-3 max-[600px]:flex-col">
              <NavigationButton
                className="!min-h-12 !px-5"
                to="#contact"
                variant="marketing"
              >
                Build your team’s capability <ArrowRight />
              </NavigationButton>
              <NavigationButton
                className="!min-h-12 !px-5"
                to="/contact"
                variant="marketingInverse"
              >
                Book a consultation
              </NavigationButton>
            </div>
            <div className="mk-hero__facts mt-9 grid grid-cols-3 gap-4 border-t border-white/20 pt-5 max-[600px]:grid-cols-1 [&_b]:block [&_span]:text-xs [&_span]:text-white/70">
              <span>
                <b>Level 4</b>Marketing Executive
              </span>
              <span>
                <b>Level 6</b>Marketing Manager
              </span>
              <span>
                <b>CIM</b>Professional & digital pathways
              </span>
            </div>
          </div>
          <div className="mk-hero__visual relative [&>img]:h-[440px] [&>img]:w-full [&>img]:rounded-2xl [&>img]:object-cover">
            <img
              src="/assets/images/learner-home/marketing-manager.webp"
              alt="Marketing professionals learning at Kent Business College"
            />
            <div className="mk-signal absolute -left-8 bottom-5 max-w-[260px] rounded-2xl bg-white p-5 text-kbc-purple-950 shadow-xl">
              <BarChart3 />
              <span>Campaign signal</span>
              <b>Insight → action</b>
              <i>Customer understanding translated into measurable plans.</i>
            </div>
            <div className="mk-cim absolute -right-5 top-6 rounded-2xl bg-kbc-gold-500 p-5 text-kbc-purple-950 shadow-xl">
              <Sparkles />
              <b>CIM aligned</b>
              <span>Professional pathway</span>
            </div>
          </div>
        </div>
      </section>
      <nav className="mk-nav sticky top-[90px] z-30 bg-kbc-purple-950 text-white" aria-label="Page sections">
        <div className={`mk-shell ${shell} flex overflow-auto`}>
          {[
            "Employers",
            "Learners",
            "Programmes",
            "Capabilities",
            "CIM pathway",
            "Results",
            "Funding",
            "FAQ",
          ].map((x) => (
            <a className="shrink-0 px-3.5 py-4 text-xs" key={x} href={`#${x.toLowerCase().replace(" ", "-")}`}>
              {x}
            </a>
          ))}
        </div>
      </nav>

      <section className={`mk-section mk-section--cream ${section} bg-[#f3f0e8]`} id="employers">
        <div className={`mk-shell mk-intro ${shell} grid grid-cols-[.9fr_1.1fr] items-center gap-[90px] max-[1080px]:grid-cols-1`}>
          <div className="mk-intro__visual relative [&>img]:h-[480px] [&>img]:w-full [&>img]:rounded-2xl [&>img]:object-cover [&>div]:absolute [&>div]:-bottom-10 [&>div]:-left-10 [&>div]:max-w-[330px] [&>div]:rounded-2xl [&>div]:bg-[#371326] [&>div]:p-7 [&>div]:text-white">
            <img
              src="/assets/images/figma-home/marketing-event.png"
              alt="Applied marketing workshop"
            />
            <div>
              <span>Marketing with purpose</span>
              <b>Creative thinking, commercial discipline.</b>
              <p>
                Build the confidence to make better marketing decisions and
                explain their value to the organisation.
              </p>
            </div>
          </div>
          <div className="mk-intro__copy">
            <p className={`mk-eyebrow ${eyebrow}`}>A specialist marketing college</p>
            <h2 className="text-[clamp(44px,5vw,68px)] leading-[1.03]">Marketing education designed around the work that matters.</h2>
            <p>
              KBC connects professional marketing theory with the real
              responsibilities of working marketers: audience insight, campaign
              planning, brand, digital channels, measurement, stakeholder
              influence and strategic decision-making.
            </p>
            <div className="mk-chip-list mt-7 flex flex-wrap gap-2">
              {[
                "Customer insight",
                "Brand & proposition",
                "Digital marketing",
                "Data & measurement",
                "AI-enabled practice",
                "Commercial strategy",
              ].map((x) => (
                <span className="rounded-full border bg-white px-3 py-2 text-xs" key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`mk-section ${section}`} id="programmes">
        <div className={`mk-shell ${shell}`}>
          <div className={`mk-heading ${heading}`}>
            <div>
              <p className={`mk-eyebrow ${eyebrow}`}>Funded professional pathways</p>
              <h2>Two programmes. One connected marketing career journey.</h2>
            </div>
          </div>
          <div className="mk-programmes grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
            <article className="flex min-h-[520px] flex-col rounded-2xl bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700 p-10 text-white [&_h3]:mt-10 [&_h3]:text-[clamp(36px,4vw,52px)] [&_h3]:leading-[1.05] [&_h3]:text-white [&>div]:my-8 [&>div]:grid [&>div]:grid-cols-3 [&>div]:gap-3">
              <span>Marketing Executive · Level 4</span>
              <h3>
                Build the professional and digital foundations of modern
                marketing.
              </h3>
              <p>
                For marketers who plan and deliver activity, work with customers
                and stakeholders, use digital channels and need a stronger
                framework for performance.
              </p>
              <div>
                <b>12 months</b>
                <b>CIM Certificate</b>
                <b>Professional progression</b>
              </div>
              <NavigationButton
                to="/marketing-executive-level-4"
                variant="marketing"
              >
                Explore Level 4 <ArrowRight />
              </NavigationButton>
            </article>
            <article className="flex min-h-[520px] flex-col rounded-2xl bg-gradient-to-br from-kbc-purple-800 to-kbc-purple-600 p-10 text-white [&_h3]:mt-10 [&_h3]:text-[clamp(36px,4vw,52px)] [&_h3]:leading-[1.05] [&_h3]:text-white [&>div]:my-8 [&>div]:grid [&>div]:grid-cols-3 [&>div]:gap-3">
              <span>Marketing Manager · Level 6</span>
              <h3>
                Move from campaign delivery to strategic marketing leadership.
              </h3>
              <p>
                For experienced marketers responsible for strategy, budgets,
                teams, agencies, brand, customer value and commercial
                contribution.
              </p>
              <div>
                <b>18 months</b>
                <b>CIM Diploma</b>
                <b>Chartered pathway</b>
              </div>
              <NavigationButton
                to="/marketing-manager-level-6"
                variant="marketing"
              >
                Explore Level 6 <ArrowRight />
              </NavigationButton>
            </article>
          </div>
        </div>
      </section>

      <section className={`mk-section mk-section--rose ${section} bg-[#f6f4fa]`} id="capabilities">
        <div className={`mk-shell ${shell}`}>
          <div className={`mk-heading ${heading}`}>
            <div>
              <p className={`mk-eyebrow ${eyebrow}`}>Marketing capability system</p>
              <h2>Build the judgement behind stronger marketing decisions.</h2>
            </div>
          </div>
          <MarketingCapabilitySelector />
        </div>
      </section>

      <section className={`mk-section ${section}`} id="learners">
        <div className={`mk-shell mk-operating ${shell} grid grid-cols-[.9fr_1.1fr] items-center gap-[70px] max-[1080px]:grid-cols-1`}>
          <div className="mk-operating__copy">
            <p className={`mk-eyebrow ${eyebrow}`}>Workplace marketing operating system</p>
            <h2 className="text-[clamp(44px,5vw,68px)] leading-[1.03]">From a business question to an evidence-led decision.</h2>
            <p className="mk-operating__lead mt-5 text-kbc-purple-700">
              The learning journey is designed to help marketers create a
              repeatable professional process rather than rely on isolated
              tactics.
            </p>
            <div className="mk-process mt-8 grid gap-2 [&_article]:grid [&_article]:grid-cols-[48px_1fr] [&_article]:gap-4 [&_article]:border-b [&_article]:py-4 [&_article>span]:grid [&_article>span]:h-10 [&_article>span]:w-10 [&_article>span]:place-items-center [&_article>span]:rounded-full [&_article>span]:bg-kbc-gold-500">
              {[
                [
                  "Define the business question",
                  "Clarify the decision, customer, outcome and constraints.",
                ],
                [
                  "Gather and interpret evidence",
                  "Combine customer, market, channel and commercial information.",
                ],
                [
                  "Design the response",
                  "Shape proposition, journey, campaign, content and measures.",
                ],
                [
                  "Measure, learn and improve",
                  "Use evidence to explain impact and improve the next decision.",
                ],
              ].map(([title, description], i) => (
                <article key={title}>
                  <span>0{i + 1}</span>
                  <div>
                    <b>{title}</b>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mk-workspace rounded-2xl bg-[#f8f4ee] p-7 shadow-xl [&>header]:flex [&>header]:justify-between [&>header]:gap-4">
            <header>
              <b>Marketing performance workspace</b>
              <span>Illustrative learning interface</span>
            </header>
            <div className="mk-workspace__top mt-6 grid grid-cols-2 gap-3 max-[600px]:grid-cols-1 [&>article]:rounded-2xl [&>article]:bg-white [&>article]:p-6">
              <article>
                <span>Audience readiness</span>
                <strong>68%</strong>
                <div className="mk-readiness-ring mt-4 grid h-24 w-24 place-items-center rounded-full border-[12px] border-kbc-purple-950 border-r-[#eee5eb]">
                  <i>68</i>
                </div>
              </article>
              <article>
                <span>Campaign learning</span>
                <strong>Evidence trend</strong>
                <div className="mk-evidence-bars mt-5 flex h-20 items-end gap-2 [&_i]:flex-1 [&_i]:rounded-t [&_i]:bg-gradient-to-b [&_i]:from-kbc-gold-500 [&_i]:to-kbc-purple-600" aria-hidden="true">
                  <i className="h-[30%]" />
                  <i className="h-[52%]" />
                  <i className="h-[45%]" />
                  <i className="h-[68%]" />
                  <i className="h-[82%]" />
                  <i className="h-full" />
                </div>
              </article>
            </div>
            <article className="mk-decision-journey mt-3 rounded-2xl bg-white p-6">
              <span>Decision journey</span>
              <strong>Insight → proposition → activation → evidence</strong>
              <div aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`mk-section mk-recognition ${section}`} id="cim-pathway">
        <div className={`mk-shell ${shell}`}>
          <div className={`mk-heading ${heading}`}>
            <div>
              <p className={`mk-eyebrow ${eyebrow}`}>Professional recognition</p>
              <h2>Progress beyond the apprenticeship.</h2>
            </div>
          </div>
          <div className="mk-stages grid grid-cols-4 gap-3.5 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1 [&_article]:min-h-[230px] [&_article]:rounded-2xl [&_article]:border [&_article]:p-7">
            {[
              ["01", "Funded apprenticeship"],
              ["02", "CIM qualification pathway"],
              ["03", "Professional membership"],
              ["04", "Chartered or fellowship progression"],
            ].map(([n, t]) => (
              <article key={n}>
                <span>Stage {n}</span>
                <h3>{t}</h3>
                <p>
                  Progression remains subject to the relevant professional
                  body’s current criteria and assessment.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`mk-section mk-section--cream ${section} bg-[#f3f0e8]`} id="results">
        <div className={`mk-shell ${shell}`}>
          <div className={`mk-heading ${heading}`}>
            <div>
              <p className={`mk-eyebrow ${eyebrow}`}>Workplace outputs</p>
              <h2>Evidence that makes marketing work better.</h2>
            </div>
          </div>
          <div className="mk-output-grid grid grid-cols-3 gap-3.5 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
            {outputs.map(([n, t, d]) => (
              <article className="min-h-[230px] rounded-2xl bg-white p-7" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`mk-section ${section}`}>
        <div className={`mk-shell ${shell}`}>
          <div className={`mk-heading ${heading}`}>
            <div>
              <p className={`mk-eyebrow ${eyebrow}`}>Learning and delivery</p>
              <h2>Live, applied and designed for working marketers.</h2>
            </div>
          </div>
          <div className="mk-delivery-grid grid grid-cols-[1.15fr_.85fr] gap-5 max-[1080px]:grid-cols-1">
            <div className="mk-steps grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
              {[
                [
                  "01",
                  "Prepare",
                  "Review the business context, evidence, reading and current marketing challenge.",
                ],
                [
                  "02",
                  "Explore",
                  "Join live teaching, discussion, examples and applied marketing workshops.",
                ],
                [
                  "03",
                  "Apply",
                  "Create or improve a real marketing output in the learner’s workplace.",
                ],
                [
                  "04",
                  "Reflect",
                  "Evaluate decisions, evidence, stakeholder feedback and measurable impact.",
                ],
              ].map(([n, t, d]) => (
                <article className="min-h-[230px] rounded-2xl bg-[#f6f4fa] p-7" key={n}>
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
            <aside className="mk-learner-support rounded-2xl bg-gradient-to-br from-kbc-gold-500 to-kbc-gold-700 p-8 text-white [&_h3]:text-4xl [&_h3]:text-white">
              <span>Support around the learner</span>
              <h3>More than a qualification.</h3>
              <div>
                {[
                  [
                    "1:1",
                    "Dedicated coaching",
                    "Progress, evidence, confidence and workplace application",
                  ],
                  [
                    "LMS",
                    "Structured digital learning",
                    "Resources, activities, recordings and progress visibility",
                  ],
                  [
                    "KBC",
                    "Wellbeing and career support",
                    "Professional development, events and wider learner support",
                  ],
                ].map(([code, title, description]) => (
                  <article key={code}>
                    <strong>{code}</strong>
                    <div>
                      <b>{title}</b>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={`mk-section mk-experience ${section} bg-[#f3f0e8]`}>
        <div className={`mk-shell mk-experience__grid ${shell} grid grid-cols-[.9fr_1.1fr] items-center gap-[70px] max-[1080px]:grid-cols-1`}>
          <div className="mk-experience__copy">
            <p className={`mk-eyebrow ${eyebrow}`}>The KBC marketing experience</p>
            <h2 className="text-[clamp(44px,5vw,68px)] leading-[1.03]">Support for the professional, not only the programme.</h2>
            <p>
              The KBC learning journey combines teaching with coaching,
              wellbeing, career development, professional recognition and
              opportunities to build confidence and networks.
            </p>
            <div className="mk-experience__cards mt-8 grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
              {[
                [
                  "Dedicated learner support",
                  "Coaching, progress reviews and structured learning guidance.",
                ],
                [
                  "Career self-awareness",
                  "Personality, interests and career-fit tools.",
                ],
                [
                  "Professional events",
                  "Masterclasses, networking and graduation opportunities.",
                ],
                [
                  "Learning resources",
                  "Digital and physical materials designed to support application.",
                ],
              ].map(([title, description]) => (
                <article className="rounded-2xl bg-white p-6" key={title}>
                  <b>{title}</b>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mk-experience__gallery grid h-[600px] grid-cols-[1.2fr_1fr] grid-rows-2 gap-3.5 max-[600px]:h-auto max-[600px]:grid-cols-1 [&_img]:h-full [&_img]:w-full [&_img]:rounded-2xl [&_img]:object-cover [&_img:first-child]:row-span-2">
            <img
              src="/assets/images/figma-home/marketing-event.png"
              alt="Marketing professional presenting at a KBC event"
            />
            <img
              src="/assets/images/figma-home/workplace-teaching.png"
              alt="Live professional teaching at Kent Business College"
            />
            <img
              src="/assets/images/figma-home/project-speaker.png"
              alt="Guest speaker leading a professional event"
            />
          </div>
        </div>
      </section>

      <section className={`mk-section mk-section--rose ${section} bg-[#f6f4fa]`}>
        <div className={`mk-shell ${shell}`}>
          <div className={`mk-heading ${heading}`}>
            <div>
              <p className={`mk-eyebrow ${eyebrow}`}>Marketing achievers</p>
              <h2>Recognising commitment, progress and professional impact.</h2>
            </div>
          </div>
          <div className="mk-achievers grid grid-cols-4 gap-3.5 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
            {achievers.map(([name, company, course, image]) => (
              <article className="overflow-hidden rounded-2xl bg-white p-5" key={name}>
                <img className="-mx-5 -mt-5 mb-5 h-[230px] w-[calc(100%+2.5rem)] object-cover" src={image} alt={name} />
                <span>{course}</span>
                <h3>{name}</h3>
                <p>{company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`mk-section ${section}`}>
        <div className={`mk-shell mk-story ${shell} grid grid-cols-[.75fr_1.25fr] items-center gap-16 max-[1080px]:grid-cols-1 [&>img]:h-[500px] [&>img]:w-full [&>img]:rounded-2xl [&>img]:object-cover`}>
          <img src="/assets/people/corinna-denbow.webp" alt="Corinna Denbow" />
          <div>
            <p className={`mk-eyebrow ${eyebrow}`}>Experience connected to theory</p>
            <h2>
              Turn years of practical experience into stronger professional
              judgement.
            </h2>
            <blockquote>
              “The apprenticeship has been really valuable in helping me connect
              that experience to proper marketing theory.”
            </blockquote>
            <p>Corinna Denbow · Marketing Manager Level 6</p>
          </div>
        </div>
      </section>

      <section className={`mk-section mk-funding ${section}`} id="funding">
        <div className={`mk-shell ${shell}`}>
          <div className={`mk-heading ${heading}`}>
            <div>
              <p className={`mk-eyebrow ${eyebrow}`}>Funding and suitability</p>
              <h2>
                Confirm the role, learner and funding route before enrolment.
              </h2>
            </div>
          </div>
          <div className="mk-funding-grid grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
            <article className="rounded-2xl border p-8">
              <span>Employer route</span>
              <h3>
                Develop marketing capability using available apprenticeship
                funding.
              </h3>
              <p>
                Suitable employers may use levy or co-investment arrangements
                under current rules.
              </p>
            </article>
            <article className="rounded-2xl border p-8">
              <span>Learner route</span>
              <h3>
                Progress while applying learning in a genuine marketing role.
              </h3>
              <p>
                Applicants need an appropriate employed role and employer
                support.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`mk-section mk-section--rose ${section} bg-[#f6f4fa]`} id="faq">
        <div className={`mk-shell mk-faq ${shell} grid grid-cols-[.8fr_1.2fr] gap-20 max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`mk-eyebrow ${eyebrow}`}>Frequently asked questions</p>
            <h2>Practical answers before you choose a route.</h2>
            <p>
              Speak with KBC when a role, funding status or professional goal
              needs individual review.
            </p>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details className="border-b py-5" key={q}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="mk-cta bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700 py-20 text-white" id="contact">
        <div className={`mk-shell ${shell} grid grid-cols-[1.1fr_.9fr] items-end gap-12 max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`mk-eyebrow ${eyebrow} !text-kbc-gold-500`}>Start a conversation</p>
            <h2 className="text-[clamp(42px,4.5vw,64px)] leading-[1.03] text-white">
              Build stronger marketing capability across your organisation.
            </h2>
            <p>
              Discuss the role, workforce need, CIM pathway, funding eligibility
              and the most suitable KBC marketing programme.
            </p>
          </div>
          <div className="mk-actions flex flex-wrap gap-3 max-[600px]:flex-col">
            <NavigationButton
              className="!min-h-12 !px-5"
              to="/contact"
              variant="marketing"
            >
              Book a workforce consultation <ArrowRight />
            </NavigationButton>
            <NavigationButton
              className="!min-h-12 !px-5"
              to="/events"
              variant="marketingInverse"
            >
              View marketing events
            </NavigationButton>
          </div>
        </div>
      </section>
    </main>
  );
}
