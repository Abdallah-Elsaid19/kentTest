import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleCheck,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

import "./page.css";

const capabilities = [
  ["Strategic planning", "Translate organisational objectives into clear marketing priorities, choices, measures and resource requirements.", "Direction"],
  ["Commercial intelligence", "Interpret financial and marketing information, make stronger investment cases and evidence contribution.", "Value"],
  ["Customer and market insight", "Use evidence to understand demand, segmentation, behaviour, competition and opportunity.", "Insight"],
  ["Brand and customer experience", "Shape propositions, journeys and experiences that are credible, coherent and valuable.", "Experience"],
  ["Leadership and influence", "Lead teams, agencies and stakeholders while making difficult choices with confidence and professionalism.", "Influence"],
  ["Performance and adaptation", "Measure impact, learn from evidence and adapt strategy when markets, priorities or risks change.", "Impact"],
] as const;

const curriculum = [
  {
    label: "Strategy & planning",
    note: "Direction, choices and organisational alignment",
    title: "Strategy and Planning",
    intro: "Turn organisational ambition into a coherent marketing plan with clear priorities, choices, resources, governance and measures.",
    score: "92",
    points: [
      ["Context and diagnosis", "Analyse organisational priorities, markets, competition, customers and internal capability."],
      ["Strategic choices", "Define objectives, positioning, target audiences and the role marketing must play."],
      ["Planning and governance", "Translate direction into programmes, ownership, risk controls and performance measures."],
    ],
  },
  {
    label: "Commercial intelligence",
    note: "Budgets, value, performance and investment",
    title: "Commercial Intelligence",
    intro: "Connect marketing priorities to organisational value through stronger investment judgement, business cases and performance evidence.",
    score: "86",
    points: [
      ["Financial confidence", "Read budgets, costs, forecasts and performance information in context."],
      ["Investment cases", "Explain the need, options, resources, risk and anticipated organisational value."],
      ["Contribution and learning", "Use meaningful measures to guide decisions and improve future investment."],
    ],
  },
  {
    label: "Customer & brand",
    note: "Journeys, proposition and reputation",
    title: "Customer and Brand Leadership",
    intro: "Use insight to shape credible propositions, connected customer experiences and brand decisions that support long-term value.",
    score: "89",
    points: [
      ["Customer evidence", "Combine research, behavioural evidence and market context to understand demand."],
      ["Experience design", "Improve acquisition, service, retention and advocacy across the customer journey."],
      ["Brand stewardship", "Protect coherence, reputation and trust while adapting to change."],
    ],
  },
  {
    label: "AI & digital leadership",
    note: "Responsible technology, channels and optimisation",
    title: "AI and Digital Leadership",
    intro: "Use technology to improve the quality and speed of marketing decisions while keeping human accountability firmly in the loop.",
    score: "94",
    points: [
      ["Responsible intelligence", "Assess sources, limitations, bias, confidentiality and the need for human review."],
      ["Connected systems", "Understand how CRM, channels, analytics and automation support the customer journey."],
      ["Governed optimisation", "Test, learn and improve without losing strategic intent, originality or accountability."],
    ],
  },
] as const;

const outputs = [
  ["Strategic marketing plan", "A coherent plan aligned to organisational priorities, market context and measurable outcomes."],
  ["Commercial business case", "A credible investment case connecting customer need, resources, risk and expected value."],
  ["Customer journey improvement", "Evidence-led recommendations to strengthen acquisition, experience, retention or advocacy."],
  ["Performance dashboard", "A focused view of measures that inform decisions rather than simply report activity."],
  ["Stakeholder and change plan", "A structured approach to securing support, coordinating teams and leading implementation."],
  ["Responsible AI governance", "Clear controls for accuracy, confidentiality, brand approval and accountable use."],
] as const;

const leadership = [
  ["Lead stakeholders", "Frame marketing decisions in language that matters to finance, operations, sales and leadership."],
  ["Develop people", "Set direction, coach performance, delegate responsibly and build professional confidence."],
  ["Protect reputation", "Assess business, ethical and reputational implications before activity is approved."],
  ["Navigate change", "Adapt plans, communicate uncertainty and keep teams aligned when priorities shift."],
] as const;

const journey = [
  ["Diagnose", "Role and capability review", "Confirm the strategic scope of the learner’s role, existing experience and the new learning required."],
  ["Learn", "Live specialist teaching", "Explore frameworks, evidence, examples and professional application with experienced tutors."],
  ["Apply", "Workplace projects", "Use the learning to improve a real plan, customer experience, decision or marketing system."],
  ["Reflect", "Coaching and review", "Review progress, barriers, evidence, stakeholder feedback and the next development priority."],
  ["Demonstrate", "CIM and EPA preparation", "Organise evidence and prepare to demonstrate occupational competence and professional knowledge."],
] as const;

const eligibility = [
  ["UK residency", "UK resident for the past 3 years."],
  ["Right to work without sponsorship", "Must not require sponsorship to work and must hold an applicable right-to-work status."],
  ["No other government-funded training", "Not enrolled in other government-funded training at the time of this programme."],
  ["Employment status", "Self-employed individuals are not eligible for Department for Education funding."],
  ["Paid employment in England", "Paid employment in England, normally 30+ hours each week."],
  ["Eligible employer", "Employer based in England and registered with the Apprenticeship Service."],
  ["Working hours in England", "At least 50% of working hours are spent within England."],
] as const;

const faqs = [
  ["What is the official programme name?", "The official apprenticeship standard is Marketing Manager Level 6. Marketing Executive is the Level 4 standard."],
  ["How long is the programme?", "KBC’s planned delivery route is approximately 18 months, subject to the agreed training plan and prior-learning review."],
  ["Is the CIM Level 6 Diploma included?", "The programme includes an aligned CIM Level 6 Diploma route. KBC confirms the final module and assessment combination for each cohort."],
  ["Does completion automatically make me a Chartered Marketer?", "No. Further CIM membership, professional experience and assessment requirements apply."],
  ["Who is the programme designed for?", "It is designed for experienced marketers moving into management or already carrying strategic, commercial, team and stakeholder responsibility."],
  ["Is the programme fully funded?", "Funding depends on learner and employer circumstances, current apprenticeship rules and formal eligibility confirmation by KBC."],
] as const;

function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={`mm6-section-intro${light ? " is-light" : ""}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {body && <span>{body}</span>}
    </div>
  );
}

export default function MarketingManagerLevel6Page() {
  const [activeCurriculum, setActiveCurriculum] = useState(0);
  const [checkedEligibility, setCheckedEligibility] = useState<number[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const currentCurriculum = curriculum[activeCurriculum];
  const matchLabel = useMemo(() => `${checkedEligibility.length} of ${eligibility.length} matched`, [checkedEligibility]);

  const toggleEligibility = (index: number) => {
    setCheckedEligibility((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index]);
  };

  return (
    <main className="mm6-page">
      <RouteMeta
        fallbackTitle="Marketing Manager Level 6 | Kent Business College"
        fallbackDescription="Build strategic, commercial and leadership capability through the Marketing Manager Level 6 apprenticeship and aligned CIM Level 6 Diploma route."
      />

      <section className="mm6-hero">
        <div className="mm6-shell mm6-hero__grid">
          <div className="mm6-hero__copy">
            <p className="mm6-eyebrow mm6-eyebrow--gold">Limited funded places · first-come, first-served</p>
            <h1 className="kbc-hero-title">Lead marketing at <em>strategic level 6.</em></h1>
            <p className="mm6-hero__lead">Build the commercial judgement, leadership confidence and strategic planning capability to shape marketing direction—not simply deliver activity. Work towards the Marketing Manager Level 6 apprenticeship and the CIM Level 6 Diploma in Professional &amp; Digital Marketing.</p>
            <div className="mm6-actions">
              <NavigationButton to="#eligibility" variant="marketing">Check workforce eligibility</NavigationButton>
              <NavigationButton to="#programme" variant="marketingInverse">Explore the programme</NavigationButton>
            </div>
            <div className="mm6-hero__proof">
              <div><b>Level 6</b><span>Degree-level professional capability</span></div>
              <div><b>18 months*</b><span>KBC planned delivery route</span></div>
              <div><b>CIM Level 6</b><span>Diploma pathway</span></div>
              <div><b>Limited places</b><span>Subject to eligibility</span></div>
            </div>
          </div>

          <div className="mm6-command" aria-label="Integrated Marketing Manager and CIM capability model">
            <div className="mm6-command__top"><span>Marketing strategy command centre</span><small><i /> Live capability model</small></div>
            <div className="mm6-command__orbit" aria-hidden="true">
              <div className="mm6-command__core"><span>Integrated route</span><strong>CIM</strong><small>Level 6 Diploma</small></div>
              <div className="mm6-command__node is-one"><Target />Strategic direction</div>
              <div className="mm6-command__node is-two"><Users />Leadership</div>
              <div className="mm6-command__node is-three"><BarChart3 />Commercial intelligence</div>
              <div className="mm6-command__node is-four"><LineChart />Performance</div>
              <div className="mm6-command__node is-five"><Sparkles />Customer experience</div>
            </div>
            <div className="mm6-command__outcomes"><span>Strategy<small>Move from activity to direction</small></span><span>Influence<small>Lead decisions and stakeholders</small></span><span>Impact<small>Evidence commercial contribution</small></span></div>
          </div>
        </div>
      </section>

      <div className="mm6-shell mm6-facts" aria-label="Programme facts">
        {[
          ["Official programme", "Marketing Manager Level 6 apprenticeship"],
          ["Professional pathway", "CIM Level 6 Diploma route"],
          ["Target professionals", "Experienced marketers moving into management"],
          ["Delivery model", "Live teaching, coaching and workplace application"],
          ["Funding", "Subject to employer and learner eligibility"],
        ].map(([label, value]) => <div key={label}><b>{label}</b><span>{value}</span></div>)}
      </div>

      <nav className="mm6-anchor-nav" aria-label="On this page">
        <div className="mm6-shell">
          {[["programme", "Why this programme"], ["outcomes", "Two outcomes"], ["curriculum", "Strategic curriculum"], ["intelligence", "Decision leadership"], ["outputs", "Workplace evidence"], ["journey", "Learning experience"], ["eligibility", "Eligibility & funding"], ["faq", "FAQs"]].map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </div>
      </nav>

      <section className="mm6-section" id="programme">
        <div className="mm6-shell mm6-capabilities">
          <div>
            <SectionIntro eyebrow="From delivery to direction" title="Marketing leadership is a decision discipline." body="At Level 6, the focus changes. You are expected to connect customer evidence, commercial priorities, brand choices, resources and stakeholder expectations into a coherent marketing direction." />
            <NavigationButton to="#curriculum" variant="primary">See the strategic curriculum</NavigationButton>
          </div>
          <div className="mm6-capability-list">
            {capabilities.map(([title, description, outcome], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div><b>{outcome}</b></article>)}
          </div>
        </div>
      </section>

      <section className="mm6-section mm6-section--paper" id="outcomes">
        <div className="mm6-shell">
          <div className="mm6-split-heading"><SectionIntro eyebrow="One learning journey · two aligned outcomes" title="Occupational competence plus professional recognition." /><p>The apprenticeship develops the full Marketing Manager occupational standard. The integrated CIM route builds advanced strategic and digital marketing capability. Final qualification structure and assessment arrangements are confirmed with KBC.</p></div>
          <div className="mm6-outcome-grid">
            <article className="mm6-outcome-card">
              <span>Occupational outcome</span><h3>Marketing Manager<br />Level 6</h3><p>Develop the knowledge, skills and behaviours required to operate with strategic focus, align marketing to organisational objectives and demonstrate value.</p>
              <ul>{["Strategic marketing planning and delivery", "Business cases, budgets and commercial decisions", "Senior stakeholder and team leadership", "Risk, reputation and ethical professional practice", "End-point assessment supported by workplace evidence"].map((item) => <li key={item}><CircleCheck />{item}</li>)}</ul>
            </article>
            <article className="mm6-outcome-card mm6-outcome-card--dark">
              <span>Professional qualification route</span><h3>CIM Level 6<br />Diploma</h3><p>Build strategic thinking, commercial awareness and leadership capability through the CIM Diploma in Professional &amp; Digital Marketing.</p>
              <ul>{["Strategy and Planning as the mandatory foundation", "Commercial, customer, brand, content and digital options", "A pathway towards further CIM membership and professional progression"].map((item) => <li key={item}><CircleCheck />{item}</li>)}</ul>
              <strong>50-credit<br />CIM Diploma</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="mm6-section" id="curriculum">
        <div className="mm6-shell">
          <div className="mm6-split-heading"><SectionIntro eyebrow="Strategic curriculum architecture" title="Build the system behind better marketing decisions." /><p>The curriculum combines Level 6 occupational capabilities with CIM-aligned strategic themes. Module sequencing and the final CIM combination are confirmed for each KBC cohort.</p></div>
          <div className="mm6-curriculum">
            <div className="mm6-curriculum__tabs" role="tablist" aria-label="Curriculum themes">
              {curriculum.map((item, index) => <button aria-selected={activeCurriculum === index} key={item.label} onClick={() => setActiveCurriculum(index)} role="tab" type="button"><b>{String(index + 1).padStart(2, "0")} · {item.label}</b><span>{item.note}</span></button>)}
            </div>
            <article className="mm6-curriculum__panel" role="tabpanel">
              <div><span>Strategic capability</span><h3>{currentCurriculum.title}</h3><p>{currentCurriculum.intro}</p><ol>{currentCurriculum.points.map(([title, text], index) => <li key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol></div>
              <div className="mm6-score"><span>Strategic alignment index</span><b>{currentCurriculum.score}</b><small>Illustrative capability workspace</small><div>{[46, 61, 55, 75, 64, 84].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
            </article>
          </div>
          <p className="mm6-note">The curriculum presentation is an integrated capability map, not a guarantee of a fixed CIM module combination. KBC confirms the selected modules, timetable and assessment route for each cohort.</p>
        </div>
      </section>

      <section className="mm6-section mm6-intelligence" id="intelligence">
        <div className="mm6-shell mm6-intelligence__grid">
          <div>
            <SectionIntro light eyebrow="Executive judgement in the loop" title="Use intelligence to make better choices." body="At Level 6, AI and analytics should improve the quality and speed of decision-making—not replace accountable leadership. The marketer remains responsible for context, ethics, risk, brand and commercial judgement." />
            <ol>{[["Interrogate the evidence", "Ask what the data shows, what it misses and whether the source is reliable."], ["Choose with context", "Balance customer value, organisational objectives, resources and risk."], ["Govern the system", "Protect data, reputation, originality and responsible human approval."]].map(([title, text], index) => <li key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
          </div>
          <div className="mm6-human-model" aria-label="Human strategic judgement model"><div><BrainCircuit /><strong>Human</strong><span>strategic judgement in the loop</span></div>{["Insight", "Choice", "Investment", "Adaptation", "Activation", "Measurement"].map((item, index) => <span className={`is-${index + 1}`} key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="mm6-section mm6-section--paper" id="outputs">
        <div className="mm6-shell">
          <div className="mm6-split-heading"><SectionIntro eyebrow="Workplace evidence" title="Leave with strategic outputs your organisation can use." /><p>The programme is designed around applied marketing practice. Learners develop evidence through real decisions, stakeholder activity and workplace improvement.</p></div>
          <div className="mm6-outputs">
            <figure><img src="/assets/images/figma-home/workplace-teaching.png" alt="Professional marketing learning session" /><figcaption><span>Applied professional development</span><b>From assignment to organisational asset.</b><p>Build evidence that demonstrates thinking, leadership, application, results and reflection.</p></figcaption></figure>
            <div>{outputs.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className="mm6-section">
        <div className="mm6-shell mm6-leadership">
          <div className="mm6-leadership__image"><img src="/assets/images/figma-home/marketing-event.png" alt="Marketing leadership presentation" /></div>
          <div><SectionIntro eyebrow="Leadership, influence and reputation" title="Marketing managers lead beyond the marketing team." body="The role requires confidence with senior stakeholders, agencies, colleagues and customers. Learners develop the ability to communicate choices, challenge constructively, manage risk and take others with them." />
            <div className="mm6-leadership__list">{leadership.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className="mm6-section mm6-section--soft" id="journey">
        <div className="mm6-shell">
          <div className="mm6-split-heading"><SectionIntro eyebrow="The KBC learning experience" title="Structured support from strategy to assessment." /><p>A blended work-based journey combining live learning, specialist teaching, coaching, employer involvement and evidence development.</p></div>
          <div className="mm6-journey">{journey.map(([step, title, text], index) => <article key={step}><span>{String(index + 1).padStart(2, "0")} · {step}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="mm6-story">
            <figure><img src="/assets/images/learner-home/masterclass.webp" alt="Kent Business College marketing masterclass" /><figcaption><span>Learner perspective</span><b>Confidence to apply theory in the real role.</b><p>Work-based learning becomes meaningful when strategic tools support real stakeholder conversations and day-to-day decisions.</p></figcaption></figure>
            <article><span>Level 6 learner journey</span><blockquote>“The apprenticeship helped me strengthen my confidence, use strategic analysis and lead conversations with stakeholders and customers.”</blockquote><p>KBC’s public learner spotlight describes applying tools such as PESTLE analysis, building communication confidence and taking a more active role in meetings.</p><ul>{["Marketing theory connected to practical workplace decisions", "Greater confidence in stakeholder and customer conversations", "Coach support throughout the work-based learning journey"].map((item) => <li key={item}><Check />{item}</li>)}</ul></article>
          </div>
        </div>
      </section>

      <section className="mm6-section mm6-eligibility" id="eligibility">
        <div className="mm6-shell mm6-eligibility__grid">
          <div><SectionIntro eyebrow="Eligibility & funding" title="Eligibility criteria" body="Review the following criteria before applying for the Marketing Manager Level 6 apprenticeship." />
            <aside><b>Limited funded apprenticeship spaces</b><p>We have a limited number of funded apprenticeship spaces available. They are offered strictly on a first-come, first-served basis and remain subject to formal eligibility checks.</p></aside>
            <p className="mm6-note">This checklist is an initial guide only. KBC must complete a formal eligibility, employment, residency, prior-learning and funding review before confirming a place.</p>
          </div>
          <div className="mm6-checker">
            <header><div><span>Initial eligibility review</span><h3>Check the criteria that apply</h3></div><b>{matchLabel}</b></header>
            <div className="mm6-checker__progress"><i style={{ width: `${checkedEligibility.length / eligibility.length * 100}%` }} /></div>
            <div>{eligibility.map(([title, text], index) => <label key={title}><input checked={checkedEligibility.includes(index)} onChange={() => toggleEligibility(index)} type="checkbox" /><span><b>{title}</b><small>{text}</small></span></label>)}</div>
            <p>{checkedEligibility.length === eligibility.length ? "Your initial answers match all listed criteria. KBC will still complete a formal review." : "Select the criteria that apply to see your initial fit."}</p>
            <footer><NavigationButton to="/eligibility" variant="primary">Discuss eligibility with KBC</NavigationButton><NavigationButton to="#curriculum" variant="secondary">Review the curriculum</NavigationButton></footer>
          </div>
        </div>
      </section>

      <section className="mm6-section" id="faq">
        <div className="mm6-shell mm6-faq">
          <div><SectionIntro eyebrow="Programme questions" title="Clarity before commitment." body="The final offer should clearly distinguish the apprenticeship, CIM qualification route, funding eligibility and professional progression." /><NavigationButton to="#eligibility" variant="primary">Check eligibility</NavigationButton></div>
          <div>{faqs.map(([question, answer], index) => <article className={openFaq === index ? "is-open" : ""} key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} type="button"><span>{question}</span><ChevronDown /></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
        </div>
      </section>

      <section className="mm6-final">
        <div className="mm6-shell"><p className="mm6-eyebrow mm6-eyebrow--gold">Move from execution to strategic influence</p><h2>Build the marketing leader your organisation needs next.</h2><p>Discuss the role, strategic development needs, CIM route and likely funding position with Kent Business College.</p><div className="mm6-actions"><NavigationButton to="/eligibility" variant="marketing">Check eligibility <ArrowRight /></NavigationButton><NavigationButton to="/book-session" variant="marketingInverse">Book an information session</NavigationButton></div></div>
      </section>
    </main>
  );
}
