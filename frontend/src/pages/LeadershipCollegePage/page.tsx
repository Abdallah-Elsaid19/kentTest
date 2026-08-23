import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Compass,
  TrendingUp,
  Users,
} from "lucide-react";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

const shell =
  "mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
const section = "py-[118px] max-[600px]:py-[82px]";
const eyebrow =
  "mb-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-kbc-purple-600";
const heading =
  "mb-[52px] grid grid-cols-[1.1fr_.9fr] items-end gap-20 max-[1080px]:grid-cols-1 max-[1080px]:gap-8 [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h2]:text-[clamp(44px,5vw,68px)] [&_h2]:leading-[1.03] [&_p]:text-kbc-purple-700";

const capabilities = [
  [
    "01",
    "Direction",
    "Strategic direction",
    "Analyse context, define priorities and create a coherent route from organisational ambition to action.",
    Compass,
  ],
  [
    "02",
    "People",
    "People and culture",
    "Lead through trust, capability, accountability and a clear understanding of organisational culture.",
    Users,
  ],
  [
    "03",
    "Decisions",
    "Commercial decisions",
    "Connect strategic choices with financial evidence, customer value, risk and sustainable performance.",
    CircleDollarSign,
  ],
  [
    "04",
    "Change",
    "Transformation",
    "Mobilise teams, govern change and sustain progress through uncertainty and competing priorities.",
    TrendingUp,
  ],
];
const modules = [
  [
    "01",
    "Strategic Management",
    "Competitive positioning, organisational direction, strategic analysis and sustainable long-term growth.",
  ],
  [
    "02",
    "Human Resources",
    "Workforce strategy, performance, employee engagement and the culture required to execute priorities.",
  ],
  [
    "03",
    "Strategic Leadership",
    "Influence, ethical leadership, senior decision-making, team development and leadership through change.",
  ],
  [
    "04",
    "Strategic Marketing",
    "Customer value, market insight, brand positioning and growth decisions at organisational level.",
  ],
  [
    "05",
    "Advanced Research Methods",
    "Evidence-based decision-making, critical analysis and a substantial professional research project.",
  ],
  [
    "06",
    "Strategic Financial Management",
    "Financial strategy, investment, risk, performance management and executive choices.",
  ],
];
const audiences = [
  [
    "Senior and aspiring managers",
    "Strengthen the judgement and strategic perspective needed to lead teams, functions and complex priorities.",
  ],
  [
    "Business owners and entrepreneurs",
    "Develop a more disciplined approach to growth, finance, people, markets and organisational direction.",
  ],
  [
    "Functional leaders",
    "Build understanding beyond your specialist discipline and contribute more confidently at executive level.",
  ],
  [
    "Consultants and advisers",
    "Improve analysis, recommendations and the ability to frame complex business decisions for clients.",
  ],
  [
    "MBA progression candidates",
    "Complete an advanced Level 7 foundation before progressing to an eligible MBA top-up route.",
  ],
  [
    "Career-transition professionals",
    "Build transferable strategic, leadership and commercial capability for a new sector or senior role.",
  ],
];
const faqs = [
  [
    "Is this programme suitable for working professionals?",
    "Yes. Guided study, applied assignments and feedback are structured around experienced professionals and workplace responsibilities.",
  ],
  [
    "What subjects are included?",
    "The six modules cover strategic management, HR, leadership, marketing, research methods and financial management.",
  ],
  [
    "Does the Level 7 diploma automatically award an MBA?",
    "No. An MBA top-up remains subject to the partner university’s admission requirements and written confirmation.",
  ],
  [
    "How is learning assessed?",
    "Learners complete evidence-based assignments, case analysis and a professional research project.",
  ],
  [
    "Is the programme fully funded?",
    "Funding depends on the learner, employer, programme route and current eligibility rules.",
  ],
];

export default function LeadershipCollegePage() {
  return (
    <main className="ls-page overflow-x-clip bg-white font-['DM_Sans',sans-serif] text-[17px] leading-[1.55] text-kbc-purple-950 [&_h1]:font-['Source_Serif_4',Georgia,serif] [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h3]:font-['Source_Serif_4',Georgia,serif] [&_img]:max-w-full">
      <RouteMeta
        fallbackTitle="College of Leadership | Kent Business College"
        fallbackDescription="Develop strategic, commercial and research capability through advanced Level 7 leadership study."
      />
      <section className="ls-hero overflow-hidden bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700 py-20 text-white">
        <div className={`ls-shell ls-hero__grid ${shell} grid grid-cols-2 items-center gap-[70px] max-[1080px]:grid-cols-1 max-[1080px]:gap-10`}>
          <div>
            <p className={`ls-eyebrow ${eyebrow} !text-kbc-gold-500`}>College of Leadership</p>
            <h1 className="kbc-hero-title [&_em]:not-italic [&_em]:text-kbc-gold-500">
              Build leaders who turn <em>strategy into direction.</em>
            </h1>
            <p className="ls-lead mt-6 max-w-[620px] text-[19px] text-white/80">
              Develop advanced strategic, leadership, commercial and research
              capability for professionals preparing to lead teams, functions
              and organisational change.
            </p>
            <div className="ls-actions mt-7 flex flex-wrap gap-3 max-[600px]:flex-col">
              <NavigationButton to="/contact" variant="accent">
                Develop your leadership team <ArrowRight />
              </NavigationButton>
              <NavigationButton to="/events" variant="inverse">
                Book an information session
              </NavigationButton>
            </div>
            <div className="ls-hero__facts mt-9 grid grid-cols-3 gap-4 border-t border-white/20 pt-5 max-[600px]:grid-cols-1 [&_b]:block [&_span]:text-xs [&_span]:text-white/65">
              <span>
                <b>Level 7</b>Advanced strategic-management study
              </span>
              <span>
                <b>6 modules</b>Leadership, finance, HR, marketing and research
              </span>
              <span>
                <b>MBA route</b>Top-up progression subject to admission
              </span>
            </div>
          </div>
          <div className="ls-intelligence rounded-2xl border border-white/15 bg-white/5 p-8 shadow-2xl [&>article]:relative [&>article]:grid [&>article]:grid-cols-[1fr_auto] [&>article]:gap-3 [&>article]:border-b [&>article]:border-white/15 [&>article]:py-5 [&>article>i]:absolute [&>article>i]:bottom-0 [&>article>i]:left-0 [&>article>i]:h-[3px] [&>article>i]:bg-kbc-gold-500">
            <header>
              <span>Leadership intelligence room</span>
              <b>Strategic direction</b>
              <p>Align purpose, people and performance</p>
            </header>
            {[
              ["Strategic clarity", "Direction", "84%"],
              ["Leadership readiness", "Capability", "76%"],
              ["Change mobilisation", "Momentum", "68%"],
            ].map(([title, label, value]) => (
              <article key={title}>
                <div>
                  <span>{title}</span>
                  <b>{label}</b>
                </div>
                <strong>{value}</strong>
                <i style={{ width: value }} />
              </article>
            ))}
            <footer>
              <span>Next leadership decision</span>
              <b>Translate strategic intent into accountable action.</b>
            </footer>
          </div>
        </div>
      </section>

      <section
        className="ls-audience-strip border-y border-[#ded7e5] bg-[#f6f4fa] py-6"
        aria-label="Professionals this college is designed for"
      >
        <div className={`ls-shell ${shell} grid grid-cols-[290px_1fr] items-center gap-7 max-[1080px]:grid-cols-1`}>
          <p className="ls-audience-strip__heading [&_span]:block [&_span]:text-[10px] [&_span]:font-bold [&_span]:uppercase [&_span]:tracking-[.14em] [&_span]:text-kbc-purple-600">
            <span>Designed for</span>
            <strong>professionals carrying wider responsibility</strong>
          </p>
          <div className="ls-audience-strip__items flex flex-wrap gap-2.5">
            {[
              "Senior managers",
              "Aspiring directors",
              "Business owners",
              "Functional leaders",
              "Consultants",
              "Future MBA candidates",
            ].map((x) => (
              <span className="whitespace-nowrap rounded-full border bg-white px-4 py-2 text-[11px] font-bold" key={x}>{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={`ls-section ${section}`}>
        <div className={`ls-shell ${shell}`}>
          <div className={`ls-heading ${heading}`}>
            <div>
              <p className={`ls-eyebrow ${eyebrow}`}>Leadership architecture</p>
              <h2>Four capabilities that turn management into leadership.</h2>
            </div>
          </div>
          <div className="ls-capabilities grid grid-cols-4 gap-3.5 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
            {capabilities.map(([n, label, title, description, Icon]) => (
              <article className="min-h-[330px] rounded-2xl bg-kbc-purple-950 p-7 text-white [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:text-white [&_svg]:mt-8" key={String(n)}>
                <span>
                  {String(n)} · {String(label)}
                </span>
                <Icon />
                <h3>{String(title)}</h3>
                <p>{String(description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`ls-section ls-section--soft ${section} bg-[#f6f4fa]`}>
        <div className={`ls-shell ls-level-grid ${shell} grid grid-cols-[.86fr_1.14fr] gap-11 max-[1080px]:grid-cols-1`}>
          <article className="ls-level-card rounded-2xl bg-white p-10 shadow-xl">
            <div className="ls-level-card__tags flex flex-wrap gap-2 [&_span]:rounded-full [&_span]:bg-[#eee8ff] [&_span]:px-2.5 [&_span]:py-2 [&_span]:text-[10px] [&_span]:font-bold [&_span]:text-kbc-purple-600">
              <span>Level 7</span>
              <span>Six specialist modules</span>
              <span>Online professional learning</span>
            </div>
            <h2>Diploma Level 7 in Strategy and Leadership.</h2>
            <p>
              A broad executive-development pathway covering strategic
              management, leadership, human resources, marketing, research and
              financial decision-making, with progression to an eligible MBA
              top-up route subject to university admission requirements.
            </p>
            <dl className="ls-level-card__facts mt-8 grid grid-cols-3 gap-3 max-[600px]:grid-cols-1 [&>div]:rounded-xl [&>div]:bg-[#f6f4fa] [&>div]:p-4">
              <div>
                <dt>Structure</dt>
                <dd>6 modules</dd>
              </div>
              <div>
                <dt>Progression</dt>
                <dd>MBA top-up</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>Senior professionals</dd>
              </div>
            </dl>
            <div className="ls-level-card__actions mt-6 flex flex-wrap gap-3">
              <NavigationButton to="/programmes" variant="primary">
                Explore the Level 7 diploma
              </NavigationButton>
              <NavigationButton to="/contact" variant="secondary">
                Discuss eligibility
              </NavigationButton>
            </div>
          </article>
          <article className="ls-progression rounded-2xl bg-gradient-to-br from-kbc-purple-800 to-kbc-purple-950 p-10 text-white">
            <p className={`ls-eyebrow ${eyebrow} !text-kbc-gold-500`}>Professional progression route</p>
            <h2 className="text-[clamp(36px,4vw,52px)] leading-[1.05] text-white">From advanced study to broader executive responsibility.</h2>
            <div className="ls-progression__steps mt-10 grid gap-5">
              {[
                [
                  "1",
                  "Build the strategic foundation",
                  "Complete the six Level 7 modules across the core business disciplines.",
                ],
                [
                  "2",
                  "Apply learning to complex decisions",
                  "Use assignments, case analysis and research to address realistic organisational challenges.",
                ],
                [
                  "3",
                  "Progress to an MBA top-up",
                  "Eligible graduates may progress to a partner-university MBA top-up, subject to admission criteria.",
                ],
              ].map(([n, t, d]) => (
                <article className="grid grid-cols-[48px_1fr] gap-4" key={n}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-kbc-purple-600">{n}</span>
                  <div>
                    <b>{t}</b>
                    <p>{d}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="ls-progression__note mt-8 rounded-xl bg-kbc-gold-700 px-4 py-3 text-center text-xs font-bold text-kbc-purple-950">
              Progression is subject to external admission requirements
            </p>
          </article>
        </div>
      </section>

      <section className={`ls-section ${section}`}>
        <div className={`ls-shell ${shell}`}>
          <div className={`ls-heading ${heading}`}>
            <div>
              <p className={`ls-eyebrow ${eyebrow}`}>The executive curriculum</p>
              <h2>Six modules. One connected leadership perspective.</h2>
            </div>
          </div>
          <div className="ls-modules grid grid-cols-3 gap-3.5 max-[600px]:grid-cols-1">
            {modules.map(([n, t, d]) => (
              <article className="group relative min-h-[330px] overflow-hidden rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-xl before:absolute before:-right-10 before:-top-10 before:h-32 before:w-32 before:rounded-full before:bg-[#eee8ff] before:transition-transform before:duration-500 hover:before:scale-150" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <b>View module →</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`ls-section ls-strategy-room ${section} bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700 text-white`}>
        <div className={`ls-shell ${shell}`}>
          <div className={`ls-heading ${heading} [&_h2]:!text-white [&_p]:!text-white/75`}>
            <div>
              <p className={`ls-eyebrow ${eyebrow} !text-kbc-gold-500`}>Applied leadership</p>
              <h2>
                The strategy room: where learning becomes a decision system.
              </h2>
            </div>
          </div>
          <div className="ls-room-grid grid grid-cols-[1.12fr_.88fr] gap-5 max-[1080px]:grid-cols-1">
            <article className="ls-room-dashboard rounded-2xl border border-white/15 bg-white/5 p-8 [&_h3]:text-3xl [&_h3]:text-white">
              <h3>See the organisation as one connected system.</h3>
              <p>
                Use strategic analysis to connect customer value, people
                capability, financial performance, risk and delivery priorities.
              </p>
              <div className="ls-performance-view mt-8 rounded-xl bg-white p-5 text-kbc-purple-950">
                <header>
                  <b>Executive performance view</b>
                  <span>Illustrative leadership dashboard</span>
                </header>
                <div className="ls-performance-bars mt-5 flex h-[220px] items-stretch gap-3">
                  {[
                    [42, "Direction"],
                    [58, "People"],
                    [49, "Customer"],
                    [72, "Finance"],
                    [67, "Risk"],
                    [86, "Delivery"],
                  ].map(([h, label]) => (
                    <div className="flex flex-1 flex-col justify-end text-center" key={String(label)}>
                      <i className="w-full rounded-t-lg bg-gradient-to-b from-kbc-gold-700 to-kbc-purple-600" style={{ height: `${h}%` }} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="ls-room-decisions rounded-2xl border border-white/15 bg-white/5 p-8 [&_h3]:text-3xl [&_h3]:text-white">
              <h3>Practise the decisions senior leaders face.</h3>
              <div className="ls-room-decisions__list mt-6 grid gap-3 [&>div]:grid [&>div]:grid-cols-[48px_1fr] [&>div]:gap-3 [&>div]:rounded-xl [&>div]:bg-white/10 [&>div]:p-4">
                {[
                  [
                    "Set priorities",
                    "Decide what the organisation will focus on—and what it will stop doing.",
                  ],
                  [
                    "Mobilise people",
                    "Create accountability, communicate direction and build confidence through change.",
                  ],
                  [
                    "Balance evidence",
                    "Bring market, operational, financial and people information into one judgement.",
                  ],
                  [
                    "Govern delivery",
                    "Translate strategy into measures, reviews, interventions and organisational learning.",
                  ],
                ].map(([title, description], i) => (
                  <div key={title}>
                    <span>0{i + 1}</span>
                    <p>
                      <b>{title}</b>
                      <small>{description}</small>
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`ls-section ls-audience-section ${section} bg-[#f3f0e8]`}>
        <div className={`ls-shell ${shell}`}>
          <div className={`ls-heading ${heading}`}>
            <div>
              <p className={`ls-eyebrow ${eyebrow}`}>Who it is for</p>
              <h2>
                Built for professionals whose decisions affect more than their
                own role.
              </h2>
            </div>
          </div>
          <div className="ls-audiences grid grid-cols-3 gap-3.5 max-[600px]:grid-cols-1">
            {audiences.map(([title, description], i) => (
              <article className="min-h-[230px] rounded-2xl border bg-white p-7" key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`ls-section ls-journey ${section} bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700 text-white`}>
        <div className={`ls-shell ${shell}`}>
          <div className={`ls-heading ${heading} [&_h2]:!text-white [&_p]:!text-white/75`}>
            <div>
              <p className={`ls-eyebrow ${eyebrow} !text-kbc-gold-500`}>Learning journey</p>
              <h2>
                Structured for working professionals—not removed from work.
              </h2>
            </div>
          </div>
          <div className="ls-journey-grid grid grid-cols-4 gap-3.5 max-[600px]:grid-cols-1">
            {[
              ["Diagnose", "Establish your leadership context"],
              ["Develop", "Build knowledge across six modules"],
              ["Apply", "Produce evidence-based assignments"],
              ["Progress", "Plan the next professional step"],
            ].map(([label, title], i) => (
              <article className="border-t border-white/20 p-6 [&_h3]:text-white" key={label}>
                <span>
                  0{i + 1} · {label}
                </span>
                <h3>{title}</h3>
                <p>
                  Connect advanced study with current responsibilities,
                  organisational priorities and future progression.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`ls-section ${section}`}>
        <div className={`ls-shell ${shell}`}>
          <div className={`ls-heading ${heading}`}>
            <div>
              <p className={`ls-eyebrow ${eyebrow}`}>Leadership outcomes</p>
              <h2>
                Develop the capability to frame, communicate and govern
                important decisions.
              </h2>
            </div>
          </div>
          <div className="ls-outcomes grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
            <article className="rounded-2xl border p-8 [&>p]:flex [&>p]:items-center [&>p]:gap-2">
              <h3>Professional capability</h3>
              {[
                "Strategic analysis",
                "Leadership communication",
                "Evidence-based judgement",
                "Change leadership",
              ].map((x) => (
                <p key={x}>
                  <Check />
                  {x}
                </p>
              ))}
            </article>
            <article className="rounded-2xl border p-8 [&>p]:flex [&>p]:items-center [&>p]:gap-2">
              <h3>Workplace outputs</h3>
              {[
                "Strategic business reports",
                "Organisational case studies",
                "Research proposals",
                "Financial and marketing analysis",
              ].map((x) => (
                <p key={x}>
                  <Check />
                  {x}
                </p>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className={`ls-section ls-section--soft ${section} bg-[#f6f4fa]`}>
        <div className={`ls-shell ls-funding ${shell} grid grid-cols-[.9fr_1.1fr] gap-16 max-[1080px]:grid-cols-1 [&>aside]:rounded-2xl [&>aside]:bg-white [&>aside]:p-8`}>
          <div>
            <p className={`ls-eyebrow ${eyebrow}`}>Funding and eligibility</p>
            <h2>
              Start with the right programme and a clear funding conversation.
            </h2>
            <p>
              Funding arrangements depend on the learner, employer, programme
              and current eligibility rules.
            </p>
            <NavigationButton to="/contact" variant="primary">
              Discuss the funding route
            </NavigationButton>
          </div>
          <aside>
            <h3>What KBC will help you confirm</h3>
            {[
              "Your current role, experience and readiness for Level 7 study.",
              "Whether the programme is independent or alongside an eligible apprenticeship route.",
              "The relevant tuition, awarding-body and MBA top-up costs.",
            ].map((x, i) => (
              <p key={x}>
                <span>0{i + 1}</span>
                {x}
              </p>
            ))}
          </aside>
        </div>
      </section>

      <section className={`ls-section ${section}`}>
        <div className={`ls-shell ls-faq ${shell} grid grid-cols-[.8fr_1.2fr] gap-20 max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`ls-eyebrow ${eyebrow}`}>Frequently asked questions</p>
            <h2>Answers before you commit.</h2>
            <p>
              Qualification, delivery and progression details should always be
              confirmed for the specific intake.
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
      <section className="ls-cta bg-gradient-to-r from-kbc-purple-600 to-kbc-purple-700 py-20 text-white">
        <div className={`ls-shell ${shell} grid grid-cols-[1.2fr_.8fr] items-end gap-14 max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`ls-eyebrow ${eyebrow} !text-kbc-gold-500`}>Build future capability</p>
            <h2 className="text-[clamp(42px,4.5vw,64px)] leading-[1.03] text-white">Develop the leaders your next strategy will depend on.</h2>
            <p>
              Discuss the role, capability gap, Level 7 pathway, entry
              requirements and progression route with KBC.
            </p>
          </div>
          <div className="ls-actions flex flex-wrap gap-3 max-[600px]:flex-col">
            <NavigationButton to="/contact" variant="accent">
              Book a workforce consultation
            </NavigationButton>
            <NavigationButton to="/courses" variant="inverse">
              Explore the Level 7 diploma
            </NavigationButton>
          </div>
        </div>
      </section>
    </main>
  );
}
