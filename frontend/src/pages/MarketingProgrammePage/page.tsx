import { ArrowRight, Check } from "lucide-react";
import { useLocation } from "react-router-dom";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

const shell =
  "mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
const section = "py-28 max-[600px]:py-20";
const eyebrow =
  "mb-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-kbc-purple-600";
const heading =
  "mb-12 grid grid-cols-[1.1fr_.9fr] items-end gap-20 max-[1080px]:grid-cols-1 max-[1080px]:gap-8 [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h2]:text-[clamp(44px,5vw,68px)] [&_h2]:leading-[1.03] [&_p]:text-kbc-purple-700";

type ProgrammeData = {
  level: string;
  name: string;
  qualification: string;
  duration: string;
  eyebrow: string;
  title: string;
  lead: string;
  facts: [string, string][];
  capabilities: [string, string][];
  curriculum: [string, string, string[]][];
  outputs: [string, string][];
  journey: [string, string, string][];
  eligibility: string[];
  faqs: [string, string][];
};

const programmes: Record<"4" | "6", ProgrammeData> = {
  "4": {
    level: "Level 4",
    name: "Marketing Executive Level 4",
    qualification:
      "CIM Level 4 Certificate in Professional and Digital Marketing",
    duration: "12 months",
    eyebrow: "Limited funded places from Kent Business College",
    title:
      "Gain a funded CIM Level 4 qualification in professional and digital marketing.",
    lead: "Build practical marketing capability through real workplace activity and work towards the CIM Level 4 Certificate in Professional and Digital Marketing.",
    facts: [
      ["Programme", "Marketing Executive Level 4"],
      ["Professional route", "CIM Level 4 Certificate"],
      ["Learning model", "Live teaching, coaching and workplace projects"],
      ["Funding", "Subject to employer and learner eligibility"],
    ],
    capabilities: [
      [
        "Market and customer insight",
        "Gather, interpret and use customer, competitor and market evidence to improve marketing decisions.",
      ],
      [
        "Campaign planning",
        "Turn objectives into joined-up campaigns with audiences, channels, messages, budgets and measures.",
      ],
      [
        "Commercial marketing",
        "Connect marketing performance to pipeline, customer value, revenue, cost and organisational priorities.",
      ],
      [
        "Content and channels",
        "Create relevant content and select channels that fit the audience, campaign objective and customer journey.",
      ],
      [
        "Data and optimisation",
        "Use analytics to evaluate performance, test ideas, identify improvement and explain what the data means.",
      ],
      [
        "Professional practice",
        "Develop communication, collaboration, ethics, organisation and continuous learning in a marketing role.",
      ],
    ],
    curriculum: [
      [
        "Marketing Impact and Planning",
        "Months 2–5",
        [
          "Extended marketing mix, segmentation and product development",
          "Customer decision-making, brand positioning and reputation",
          "Market research, data sources and marketing insight",
          "Business context, legal requirements and ethical practice",
          "Campaign structures, SMART objectives and planning discipline",
        ],
      ],
      [
        "Social Media Executive",
        "Months 6–9",
        [
          "Social media content, channel coordination and brand presence",
          "Creative communications, copy, briefs and presentations",
          "Campaign planning, delivery and project management",
          "Stakeholder, supplier and cross-functional collaboration",
          "Formal CIM Social Media assessment during the programme",
        ],
      ],
      [
        "Marketing Technology Executive",
        "Later learning stage",
        [
          "CRM, marketing platforms, digital tools and business systems",
          "Automation, analytics and evidence-led optimisation",
          "Campaign measurement, reporting and performance insight",
          "Agile working, time management and multiple-project delivery",
          "Final CIM Marketing Technology assessment after the EPA",
        ],
      ],
    ],
    outputs: [
      [
        "Accountable campaigns",
        "Clearer objectives, ownership, measures and learning.",
      ],
      [
        "Customer understanding",
        "Better use of research and customer evidence.",
      ],
      ["Data confidence", "Stronger interpretation of performance."],
      [
        "Professional progression",
        "A visible development route for capable marketers.",
      ],
    ],
    journey: [
      [
        "Learn",
        "Live professional learning",
        "Interactive teaching, workshops and peer discussion.",
      ],
      [
        "Coach",
        "Dedicated skills coach",
        "Regular coaching focused on progress, evidence and impact.",
      ],
      [
        "Apply",
        "Workplace projects",
        "Use learning through relevant employer-agreed activity.",
      ],
      [
        "Progress",
        "Professional recognition",
        "Build evidence and a foundation for future CIM progression.",
      ],
    ],
    eligibility: [
      "Employed in a relevant marketing role",
      "Employer support for workplace application and reviews",
      "Eligible location and apprenticeship funding position",
      "Substantial new learning after prior-learning review",
      "Commitment to Level 4 study and authentic evidence",
    ],
    faqs: [
      [
        "What qualification is included?",
        "The route includes the CIM Level 4 Certificate in Professional and Digital Marketing, subject to programme terms and achievement.",
      ],
      [
        "Can the apprenticeship be fully funded?",
        "Eligible apprenticeship training can be covered through an applicable funding route. KBC confirms the final position after formal checks.",
      ],
      [
        "How is learning delivered?",
        "Through live learning, coaching, workplace activity, independent study and assessment preparation.",
      ],
      [
        "Are places limited?",
        "Yes. Places are allocated after suitability, employer and funding checks and remain subject to availability.",
      ],
    ],
  },
  "6": {
    level: "Level 6",
    name: "Marketing Manager Level 6",
    qualification: "CIM Level 6 Diploma in Professional & Digital Marketing",
    duration: "18 months",
    eyebrow: "Limited funded places · first-come, first-served",
    title: "Lead marketing at strategic Level 6.",
    lead: "Build the commercial judgement, leadership confidence and strategic planning capability to shape marketing direction—not simply deliver activity.",
    facts: [
      ["Programme", "Marketing Manager Level 6"],
      ["Professional route", "CIM Level 6 Diploma"],
      ["Target professionals", "Experienced marketers moving into management"],
      ["Learning model", "Live teaching, coaching and workplace application"],
    ],
    capabilities: [
      [
        "Strategic planning",
        "Translate organisational objectives into marketing priorities, choices and measures.",
      ],
      [
        "Commercial intelligence",
        "Interpret financial and marketing information and evidence contribution.",
      ],
      [
        "Customer and market insight",
        "Use evidence to understand demand, behaviour and opportunity.",
      ],
      [
        "Brand and customer experience",
        "Shape propositions and journeys that are coherent and valuable.",
      ],
      [
        "Leadership and influence",
        "Lead teams, agencies and stakeholders with confidence.",
      ],
      [
        "Performance and adaptation",
        "Measure impact, learn from evidence and adapt strategy.",
      ],
    ],
    curriculum: [
      [
        "Strategy and planning",
        "Strategic foundation",
        [
          "Context and diagnosis",
          "Strategic choices and positioning",
          "Planning, governance and measures",
          "Organisational alignment",
        ],
      ],
      [
        "Commercial intelligence",
        "Executive judgement",
        [
          "Budgets, value and investment",
          "Business cases and resource decisions",
          "Performance and contribution",
          "Risk and ethical practice",
        ],
      ],
      [
        "AI and digital leadership",
        "Responsible technology",
        [
          "Evidence and diagnosis",
          "Channels and optimisation",
          "Human review and approval",
          "Data, reputation and governance",
        ],
      ],
    ],
    outputs: [
      [
        "Strategic marketing plan",
        "A coherent plan aligned to organisational priorities.",
      ],
      [
        "Commercial business case",
        "An investment case connecting need, resources, risk and value.",
      ],
      [
        "Customer journey improvement",
        "Evidence-led recommendations for acquisition and retention.",
      ],
      [
        "Performance dashboard",
        "Measures designed to inform decisions, not simply report activity.",
      ],
      [
        "Stakeholder and change plan",
        "A structured approach to support and implementation.",
      ],
      [
        "Responsible AI governance",
        "Controls for accuracy, confidentiality and accountable use.",
      ],
    ],
    journey: [
      [
        "Diagnose",
        "Role and capability review",
        "Confirm scope, experience and required new learning.",
      ],
      [
        "Learn",
        "Live specialist teaching",
        "Explore frameworks, evidence and professional application.",
      ],
      [
        "Apply",
        "Workplace projects",
        "Improve a real plan, experience, decision or system.",
      ],
      [
        "Reflect",
        "Coaching and review",
        "Review evidence, feedback and the next priority.",
      ],
      [
        "Demonstrate",
        "CIM and EPA preparation",
        "Organise evidence and demonstrate professional competence.",
      ],
    ],
    eligibility: [
      "UK residency and applicable right-to-work requirements",
      "Paid employment in England in a relevant role",
      "Eligible employer registered with the Apprenticeship Service",
      "At least 50% of working hours based in England",
      "No conflicting government-funded training",
      "Formal prior-learning and funding review by KBC",
    ],
    faqs: [
      [
        "What is the official programme name?",
        "The official apprenticeship standard is Marketing Manager Level 6; Marketing Executive is the Level 4 standard.",
      ],
      [
        "How long is the programme?",
        "KBC’s planned delivery route is approximately 18 months, subject to the agreed training plan.",
      ],
      [
        "Is the CIM Level 6 Diploma included?",
        "The programme includes an aligned CIM Level 6 Diploma route. KBC confirms the final module and assessment combination for each cohort.",
      ],
      [
        "Does completion automatically make me a Chartered Marketer?",
        "No. Further CIM membership, experience and assessment requirements apply.",
      ],
      [
        "Is the programme fully funded?",
        "Funding depends on the learner, employer and applicable apprenticeship rules and is confirmed after formal review.",
      ],
    ],
  },
};

export default function MarketingProgrammePage() {
  const data =
    programmes[useLocation().pathname.includes("level-6") ? "6" : "4"];
  return (
    <main className="mp-page overflow-x-clip bg-white font-['DM_Sans',sans-serif] text-[17px] leading-[1.55] text-kbc-purple-950 [&_h1]:font-['Source_Serif_4',Georgia,serif] [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h3]:font-['Source_Serif_4',Georgia,serif] [&_img]:max-w-full">
      <RouteMeta
        fallbackTitle={`${data.name} | Kent Business College`}
        fallbackDescription={data.lead}
      />
      <section
        className={`mp-hero overflow-hidden py-20 text-white ${
          data.level === "Level 4"
            ? "mp-hero--level4 bg-[radial-gradient(circle_at_84%_18%,rgba(131,72,87,.5),transparent_31%),linear-gradient(115deg,#241225,#481a2b)]"
            : "bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700"
        }`}
      >
        <div className={`mp-shell mp-hero__grid ${shell} grid grid-cols-[1fr_1.05fr] items-center gap-[70px] max-[1080px]:grid-cols-1 max-[1080px]:gap-10`}>
          <div>
            <p className={`mp-eyebrow ${eyebrow} !text-kbc-gold-500`}>{data.eyebrow}</p>
            {data.level === "Level 4" ? (
              <h1 className="kbc-hero-title [&_em]:not-italic [&_em]:text-kbc-gold-500">
                Gain a <em>Fully Funded CIM Level 4 Qualification</em> in
                Professional and Digital Marketing
              </h1>
            ) : (
              <h1 className="kbc-hero-title">{data.title}</h1>
            )}
            <p className="mp-lead mt-6 max-w-[650px] text-[19px] text-white/80">{data.lead}</p>
            <div className="mp-actions mt-7 flex flex-wrap gap-3 max-[600px]:flex-col">
              {data.level === "Level 4" ? (
                <>
                  <NavigationButton to="/book-session" variant="accent">
                    Book an information session <ArrowRight />
                  </NavigationButton>
                  <a className="mp-outline-button inline-flex min-h-14 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-bold" href="#curriculum">
                    Explore the curriculum
                  </a>
                  <a className="mp-outline-button inline-flex min-h-14 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-bold" href="/contact">
                    Download catalogue
                  </a>
                </>
              ) : (
                <>
                  <NavigationButton to="/eligibility" variant="accent">
                    Check eligibility <ArrowRight />
                  </NavigationButton>
                  <NavigationButton to="/book-session" variant="inverse">
                    Book an information session
                  </NavigationButton>
                </>
              )}
            </div>
            {data.level === "Level 4" && (
              <p className="mp-funding-note mt-5 max-w-[680px] text-sm text-white/75">
                Apprenticeship training can be fully funded through an eligible
                funding route. The CIM Level 4 qualification is funded by Kent
                Business College as part of the dual programme, subject to
                eligibility, engagement, achievement and the applicable
                programme terms.
              </p>
            )}
          </div>
          {data.level === "Level 4" ? (
            <aside className="mp-level4-panel rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl">
              <header className="flex flex-col items-start gap-3 [&_span]:text-[10px] [&_span]:font-bold [&_span]:uppercase [&_span]:tracking-[.12em] [&_span]:text-kbc-gold-500 [&_b]:rounded-full [&_b]:bg-kbc-gold-500 [&_b]:px-3 [&_b]:py-2 [&_b]:text-[10px] [&_b]:uppercase [&_b]:text-kbc-purple-950">
                <span>October 2026 intake</span>
                <b>Fully funded route*</b>
              </header>
              <div className="mp-level4-award mt-3 flex items-center gap-4 rounded-2xl bg-[#2d1022] p-5">
                <span className="grid h-[70px] w-[58px] shrink-0 place-items-center rounded-b-[18px] border-2 border-[#efad14] bg-[#cb8100] text-lg">
                  CIM
                  <small>
                    Certificate in
                    <br />
                    Professional Marketing
                  </small>
                </span>
                <p className="bg-transparent p-0">
                  <b className="block text-white">Level 4</b>
                  <small className="mt-3 block text-[11px] text-white/70">Professional &amp; Digital Marketing</small>
                </p>
              </div>
              <div className="mp-level4-capabilities mt-3 grid grid-cols-2 gap-2.5 max-[600px]:grid-cols-1">
                {[
                  ["Marketing Impact", "Research, planning and customer value"],
                  ["Social Media", "Content, channels and audience engagement"],
                  [
                    "Marketing Technology",
                    "CRM, analytics, automation and MarTech",
                  ],
                  [
                    "Workplace Evidence",
                    "Real campaigns, coaching and EPA readiness",
                  ],
                ].map(([title, description], i) => (
                  <article className="rounded-xl bg-[#321123] p-4" key={title}>
                    <span className="mb-2 inline-grid h-7 w-7 place-items-center rounded-full bg-kbc-gold-500 text-[10px] font-bold text-kbc-purple-950">0{i + 1}</span>
                    <b className="block text-sm text-white">{title}</b>
                    <p className="mt-1 text-xs text-white/70">{description}</p>
                  </article>
                ))}
              </div>
              <footer className="mt-3 flex items-center gap-3 rounded-xl bg-[#321123] p-3">
                <i className="flex h-10 w-20 items-end gap-1" aria-hidden="true">
                  {[28, 42, 35, 58, 72, 88].map((height, i) => (
                    <span className="flex-1 rounded-t bg-gradient-to-b from-kbc-gold-500 to-[#8c6882]" key={i} style={{ height: `${height}%` }} />
                  ))}
                </i>
                <p className="flex-1">
                  <b className="block text-[10px] uppercase tracking-wider text-kbc-gold-500">Applied progression</b>
                  <small className="block text-[11px] text-white">Build measurable marketing capability.</small>
                </p>
                <strong className="rounded-full bg-white/15 px-3 py-2 text-[10px]">Limited places</strong>
              </footer>
            </aside>
          ) : (
            <aside>
              <span>{data.level}</span>
              <h2>{data.qualification}</h2>
              <div>
                {data.capabilities.slice(0, 4).map(([title], i) => (
                  <p key={title}>
                    <b>0{i + 1}</b>
                    {title}
                  </p>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>

      <nav className="mp-nav sticky top-[90px] z-20 bg-kbc-purple-950 text-white" aria-label="Programme sections">
        <div className={`mp-shell ${shell} flex overflow-auto`}>
          {(data.level === "Level 4"
            ? [
                ["capability", "Capability"],
                ["experience", "Learning experience"],
                ["curriculum", "Curriculum"],
                ["eligibility", "Eligibility & funding"],
                ["faq", "FAQs"],
              ]
            : [
                ["overview", "Overview"],
                ["capability", "Capability"],
                ["curriculum", "Curriculum"],
                ["experience", "Learning experience"],
                ["eligibility", "Eligibility & funding"],
                ["faq", "FAQs"],
              ]
          ).map(([id, label]) => (
            <a className="shrink-0 px-3.5 py-4 text-xs" key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      {data.level === "Level 4" && (
        <section
          className="mp-hero-stats border-b bg-white"
          aria-label="Level 4 programme highlights"
        >
          <div className={`mp-shell ${shell} grid grid-cols-4 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1`}>
            {[
              ["Potentially 100%", "funded subject to eligibility"],
              ["Level 4", "advanced practical capability"],
              ["Workplace value", "projects linked to business needs"],
              ["CIM Level 4", "professional qualification included"],
            ].map(([title, description]) => (
              <div className="flex min-h-[88px] flex-col items-center justify-center border-r border-kbc-purple-950/10 px-4 text-center last:border-r-0" key={title}>
                <b className="text-sm">{title}</b>
                <span className="text-[11px] text-kbc-purple-700">{description}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.level === "Level 4" ? (
        <section className={`mp-section mp-level4-capability ${section}`} id="capability">
          <div className={`mp-shell ${shell}`}>
            <div className="mp-level4-capability__heading mb-12 max-w-[900px]">
              <p className={`mp-eyebrow ${eyebrow}`}>Practical marketing capability</p>
              <h2 className="text-[clamp(44px,5vw,68px)] leading-[1.03]">That performs in the real world.</h2>
              <p className="mt-5 text-kbc-purple-700">
                This programme connects marketing activity to customer needs,
                commercial priorities and measurable business outcomes. You
                learn by applying structured marketing practice in your
                organisation.
              </p>
            </div>
            <div className="mp-capabilities mp-capabilities--level4 grid grid-cols-3 gap-4 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
              {data.capabilities.map(([title, description], i) => (
                <article className={`min-h-[280px] rounded-2xl border p-8 ${i === 2 ? "is-featured bg-[#371326] text-white" : "bg-white"}`} key={title}>
                  <span className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-xl font-bold ${i === 2 ? "bg-kbc-gold-500 text-kbc-purple-950" : "bg-[#371326] text-white"}`}>0{i + 1}</span>
                  <h3 className="text-[26px] font-semibold leading-tight">{title}</h3>
                  <p className={`mt-4 ${i === 2 ? "text-white/80" : "text-kbc-purple-700"}`}>{description}</p>
                  {i === 2 && (
                    <ul className="mt-5 grid gap-2 text-sm">
                      {[
                        "Clear objectives and KPIs",
                        "Evidence-led recommendations",
                        "Stakeholder-ready reporting",
                      ].map((item) => (
                        <li className="flex items-center gap-2" key={item}>
                          <Check className="h-5 w-5 rounded-full bg-kbc-purple-600 p-1 text-white" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className={`mp-section ${section}`} id="overview">
            <div className={`mp-shell ${shell}`}>
              <div className={`mp-heading ${heading}`}>
                <div>
                  <p className={`mp-eyebrow ${eyebrow}`}>Programme overview</p>
                  <h2>Marketing leadership is a decision discipline.</h2>
                </div>
              </div>
              <dl className="mp-facts grid grid-cols-4 gap-3 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1 [&>div]:rounded-2xl [&>div]:bg-[#f6f4fa] [&>div]:p-6 [&_dt]:text-xs [&_dt]:uppercase [&_dt]:tracking-wider [&_dd]:mt-2 [&_dd]:font-bold">
                {data.facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
          <section className={`mp-section mp-section--soft ${section} bg-[#f6f4fa]`} id="capability">
            <div className={`mp-shell ${shell}`}>
              <div className={`mp-heading ${heading}`}>
                <div>
                  <p className={`mp-eyebrow ${eyebrow}`}>Capability system</p>
                  <h2>Move from delivery to direction.</h2>
                </div>
              </div>
              <div className="mp-capabilities grid grid-cols-3 gap-4 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
                {data.capabilities.map(([title, description], i) => (
                  <article className="min-h-[245px] rounded-2xl bg-white p-7 shadow-lg" key={title}>
                    <span className="font-bold text-kbc-purple-600">0{i + 1}</span>
                    <h3 className="mt-8 text-2xl">{title}</h3>
                    <p className="mt-3 text-kbc-purple-700">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {data.level === "Level 4" && (
        <section className={`mp-section mp-level4-support ${section} bg-[#f3f0e8]`} id="experience">
          <div className={`mp-shell ${shell}`}>
            <div className="mp-level4-support__heading mb-12 max-w-[900px]">
              <p className={`mp-eyebrow ${eyebrow}`}>Complete support experience</p>
              <h2 className="text-[clamp(44px,5vw,68px)] leading-[1.03]">More than online classes.</h2>
              <p className="mt-5 text-kbc-purple-700">
                A structured learner experience combines live teaching, skills
                coaching, workplace application and professional development.
              </p>
            </div>
            <div className="mp-level4-support__grid grid grid-cols-4 gap-4 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
              {[
                [
                  "L",
                  "Live professional learning",
                  "Interactive teaching, examples, workshops and peer discussion.",
                ],
                [
                  "C",
                  "Dedicated skills coach",
                  "Regular coaching focused on progress, evidence and workplace impact.",
                ],
                [
                  "W",
                  "Workplace projects",
                  "Apply learning through relevant marketing activity agreed with your employer.",
                ],
                [
                  "P",
                  "Professional progression",
                  "Build evidence, confidence and a foundation for future CIM progression.",
                ],
              ].map(([code, title, description]) => (
                <article className="min-h-[300px] rounded-2xl border bg-white p-8" key={code}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#371326] font-bold text-white">{code}</span>
                  <h3 className="mt-6 text-[26px] font-semibold leading-tight">{title}</h3>
                  <p className="mt-4 text-kbc-purple-700">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.level === "Level 4" ? (
        <section className={`mp-section mp-level4-curriculum ${section}`} id="curriculum">
          <div className={`mp-shell ${shell}`}>
            <div className="mp-level4-curriculum__heading mb-10 max-w-[900px]">
              <p className={`mp-eyebrow ${eyebrow}`}>Catalogue-aligned curriculum</p>
              <h2 className="text-[clamp(42px,4.5vw,64px)] leading-[1.03]">Marketing Executive Level 4 curriculum.</h2>
              <p className="mt-5 text-kbc-purple-700">
                The programme moves from marketing foundations into social media
                application, marketing technology, Gateway and End Point
                Assessment. Knowledge, skills and behaviours are revisited and
                strengthened through live learning, workplace activity, coaching
                and evidence.
              </p>
            </div>
            <div
              className="mp-curriculum-map min-h-[clamp(280px,36vw,520px)] rounded-2xl border bg-white bg-[url('https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f239966641604b6fbcd9786dec26f831.png')] bg-contain bg-center bg-no-repeat [&>div]:invisible"
              aria-label="Marketing Executive Level 4 programme journey"
            >
              {[
                "Soft Start",
                "Marketing Impact and Analysis",
                "Social Media Executive",
                "Marketing Technology",
                "EPA Gateway",
                "End Point Assessment",
                "Final MarTech Exam",
                "Graduation Ceremony",
              ].map((step, i) => (
                <div key={step}>
                  <span>{i + 1}</span>
                  <b>{step}</b>
                </div>
              ))}
            </div>
            <p className="mp-curriculum-map__caption mt-2 text-center text-[10px] text-kbc-purple-700">
              Programme journey adapted from the Kent Business College Marketing
              Executive Level 4 Apprentice Commitment Charter.
            </p>
            <div className="mp-curriculum mp-curriculum--level4 mt-5 grid grid-cols-3 gap-4 max-[1080px]:grid-cols-1">
              {data.curriculum.map(([title, stage, items], i) => (
                <article className="rounded-2xl border bg-[#f3f0e8] p-8" key={title}>
                  <header className="flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#371326] text-sm font-bold text-white">0{i + 1}</span>
                    <b className="rounded-full bg-white px-3 py-2 text-[10px]">{stage}</b>
                  </header>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-kbc-purple-700">
                    {i === 0
                      ? "Build the foundations of confident marketing practice and understand how marketing supports wider business objectives."
                      : i === 1
                        ? "Move from understanding into practical application through content, digital channels, audience engagement and campaign delivery."
                        : "Bring strategy and execution together through the systems, data and technologies that support modern marketing performance."}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm text-kbc-purple-700">
                    {items.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <Check className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-kbc-gold-500 p-1 text-kbc-purple-950" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mp-assessment-stages mt-5 grid grid-cols-4 gap-3 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
              {[
                [
                  "Soft Start",
                  "Induction, coach relationship, systems, evidence and expectations.",
                ],
                [
                  "EPA Gateway",
                  "Confirm that required knowledge, skills, behaviours and evidence are ready.",
                ],
                [
                  "End Point Assessment",
                  "Independent assessment, including a real-work project showcase and professional evidence.",
                ],
                [
                  "Completion",
                  "Final MarTech assessment and graduation following successful achievement.",
                ],
              ].map(([title, description]) => (
                <article className="rounded-2xl border bg-[#f8f2e8] p-5" key={title}>
                  <b>{title}</b>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="mp-ksb mt-5 grid grid-cols-3 gap-3.5 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
              {[
                [
                  "K",
                  "Knowledge",
                  "Marketing theory, customer behaviour, brand, CRM, market research, routes to market, communication channels, regulation and business context.",
                ],
                [
                  "S",
                  "Skills",
                  "Coordinate channels, deliver SMART campaigns, create content, work with stakeholders, manage projects and budgets, analyse data and use marketing technology.",
                ],
                [
                  "B",
                  "Behaviours",
                  "Professionalism, initiative, creativity, analytical thinking, collaboration, adaptability, resilience, ethical practice and customer focus.",
                ],
              ].map(([code, title, description]) => (
                <article className="rounded-2xl border p-7" key={code}>
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#371326] text-xs font-bold text-white">{code}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="mp-epa-note mt-5 rounded-xl bg-kbc-purple-700 p-5 text-white">
              <b>EPA project evidence:</b> the catalogue describes a real
              workplace project with planning, research, execution and
              evaluation; recognised marketing frameworks; SMART objectives;
              performance data; stakeholder collaboration; time and budget
              controls; and supporting annex evidence.
            </p>
          </div>
        </section>
      ) : (
        <section className={`mp-section ${section}`} id="curriculum">
          <div className={`mp-shell ${shell}`}>
            <div className={`mp-heading ${heading}`}>
              <div>
                <p className={`mp-eyebrow ${eyebrow}`}>Curriculum architecture</p>
                <h2>Build the system behind better marketing decisions.</h2>
              </div>
            </div>
            <div className="mp-curriculum grid grid-cols-3 gap-4 max-[1080px]:grid-cols-1">
              {data.curriculum.map(([title, stage, items], i) => (
                <article className="rounded-2xl border p-8" key={title}>
                  <span>
                    0{i + 1} · {stage}
                  </span>
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.level === "Level 4" && (
        <>
          <section className={`mp-section mp-cim-section ${section} bg-[#f3f0e8]`}>
            <div className={`mp-shell ${shell}`}>
              <div className="mp-cim-heading max-w-[850px]">
                <p className={`mp-eyebrow ${eyebrow}`}>
                  Dual programme and professional qualification
                </p>
                <h2 className="text-[clamp(42px,4.5vw,64px)] leading-[1.03]">CIM Level 4 from the Chartered Institute of Marketing.</h2>
                <p className="mt-5 text-kbc-purple-700">
                  Alongside the Marketing Executive Level 4 apprenticeship,
                  learners work towards the CIM Level 4 Certificate in
                  Professional and Digital Marketing through an integrated,
                  workplace-focused pathway.
                </p>
              </div>
              <div className="mp-cim-grid mt-[70px] grid grid-cols-[.8fr_1.2fr] items-center gap-20 max-[1080px]:grid-cols-1">
                <div
                  className="mp-cim-badge h-[350px] w-[290px] max-w-full bg-[url('https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/0ef8bbcca8d34ba0a7e388620466a28f.png')] bg-contain bg-center bg-no-repeat [&>*]:invisible"
                  aria-label="CIM Certificate in Professional Marketing Level 4"
                >
                  <strong>CIM</strong>
                  <span>
                    Certificate in
                    <br />
                    Professional Marketing
                  </span>
                  <b>Level 4</b>
                </div>
                <div className="mp-cim-outcomes [&>aside]:mt-4 [&>aside]:rounded-xl [&>aside]:border-l-4 [&>aside]:border-kbc-gold-500 [&>aside]:bg-white/60 [&>aside]:p-5 [&>small]:mt-4 [&>small]:block">
                  <h3>Two recognised outcomes in one connected journey</h3>
                  <p>
                    The apprenticeship develops practical competence through
                    real work-based learning. The CIM Level 4 Certificate adds
                    professional marketing recognition and is funded by Kent
                    Business College as part of the programme offer, including
                    membership and examination costs under the applicable terms.
                  </p>
                  {[
                    [
                      "Integrated recognition",
                      "Marketing Impact and Campaigns",
                      "The catalogue states that these units are exempt from separate external CIM assessment when the learner successfully passes the apprenticeship EPA.",
                    ],
                    [
                      "Formal CIM assessment",
                      "Social Media",
                      "A formal CIM Social Media assessment is completed during the apprenticeship after the relevant module and revision activity.",
                    ],
                    [
                      "Post-EPA assessment",
                      "Marketing Technology",
                      "The final MarTech assessment is completed after successful End Point Assessment to achieve the full CIM certificate.",
                    ],
                  ].map(([label, title, description]) => (
                    <article className="mt-3.5 rounded-2xl border bg-white p-6" key={title}>
                      <span>{label}</span>
                      <b>{title}</b>
                      <p>{description}</p>
                    </article>
                  ))}
                  <aside>
                    <b>Professional title clarification:</b> the accurate
                    qualification name is the{" "}
                    <i>
                      CIM Level 4 Certificate in Professional and Digital
                      Marketing
                    </i>
                    , awarded by the Chartered Institute of Marketing. It does
                    not itself confer Chartered Marketer status.
                  </aside>
                  <small>
                    This programme is sometimes searched for using the phrase
                    “CIM Chartered L4”; the page uses the official qualification
                    wording while supporting that search intent.
                  </small>
                </div>
              </div>
            </div>
          </section>
          <section className={`mp-section mp-level4-funding ${section} bg-white`} id="eligibility">
            <div className={`mp-shell ${shell}`}>
              <div className="mp-level4-funding__heading max-w-[900px]">
                <p className={`mp-eyebrow ${eyebrow}`}>Funding and limited places</p>
                <h2 className="text-[clamp(42px,4.5vw,64px)] leading-[1.03]">Fully funded development with limited places.</h2>
                <p className="mt-5 text-kbc-purple-700">
                  Limited funded places from Kent Business College combine
                  apprenticeship funding with an integrated CIM Level 4
                  professional qualification offer.
                </p>
              </div>
              <div className="mp-level4-funding__grid mt-12 grid grid-cols-[1.65fr_1fr] gap-5 max-[1080px]:grid-cols-1">
                <article className="mp-funded-card relative overflow-hidden rounded-2xl bg-[#371326] p-11 text-white max-[600px]:p-7">
                  <p className={`mp-eyebrow ${eyebrow} !text-kbc-gold-500`}>
                    Fully funded apprenticeship route
                  </p>
                  <h3 className="text-[clamp(34px,4vw,52px)] leading-tight text-white">Fully funded apprenticeship training*</h3>
                  <p>
                    The Marketing Executive Level 4 apprenticeship training can
                    be covered through eligible Department for Education
                    apprenticeship funding. Kent Business College also funds the
                    integrated CIM Level 4 qualification, membership and
                    examination costs under the programme terms.
                  </p>
                  <ul className="my-6 grid gap-3">
                    {[
                      "The learner is not personally charged for eligible apprenticeship training.",
                      "The employer and KBC agree the training plan and funding route.",
                      "Funded places remain limited and are confirmed after suitability, employer and funding checks.",
                    ].map((item) => (
                      <li className="flex gap-2" key={item}>
                        <Check className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-kbc-gold-500 p-1 text-kbc-purple-950" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <NavigationButton to="/eligibility" variant="accent">
                    Discuss funding with KBC
                  </NavigationButton>
                  <strong className="pointer-events-none absolute -bottom-10 right-4 text-[120px] leading-none text-white/5">100%</strong>
                </article>
                <div className="mp-funding-options grid gap-3.5">
                  {[
                    [
                      "Limited funded places",
                      "Kent Business College has a limited funded-place allocation for each intake. Places are confirmed only after eligibility and employer checks.",
                    ],
                    [
                      "Levy-funded",
                      "Employers with available levy funds can use their apprenticeship service account, subject to the applicable rules and funding band.",
                    ],
                    [
                      "Co-investment route",
                      "Where levy funds are not available, an applicable government co-investment arrangement may be considered and confirmed by KBC.",
                    ],
                  ].map(([title, description], i) => (
                    <article
                      className={`rounded-2xl border p-8 ${i === 0 ? "is-highlighted border-kbc-gold-500 bg-[#fffaf0]" : "bg-white"}`}
                      key={title}
                    >
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <p className="mp-funding-disclaimer mt-4 text-xs text-kbc-purple-700">
                *Funding and the KBC-funded CIM offer are subject to
                apprenticeship eligibility, prior learning, employer support,
                available allocation, learner engagement, achievement
                requirements and the programme terms confirmed before enrolment.
              </p>
            </div>
          </section>
        </>
      )}

      <section
        className={`mp-section mp-section--dark ${section} bg-gradient-to-br from-kbc-purple-950 to-kbc-purple-700 text-white`}
        id={data.level === "Level 4" ? "workplace-evidence" : "experience"}
      >
        <div className={`mp-shell ${shell}`}>
          <div className={`mp-heading ${heading} [&_h2]:!text-white [&_p]:!text-white/75`}>
            <div>
              <p className={`mp-eyebrow ${eyebrow} !text-kbc-gold-500`}>Workplace evidence</p>
              <h2>
                {data.level === "Level 4"
                  ? "Evidence that creates workplace value."
                  : "Leave with strategic outputs your organisation can use."}
              </h2>
            </div>
          </div>
          <div className="mp-outputs grid grid-cols-3 gap-3.5 max-[600px]:grid-cols-1">
            {data.outputs.map(([title, description], i) => (
              <article className="rounded-2xl border border-white/15 bg-white/5 p-7" key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          {data.level === "Level 6" && (
            <div className="mp-journey mt-12 grid grid-cols-4 gap-3.5 max-[1080px]:grid-cols-2 max-[600px]:grid-cols-1">
              {data.journey.map(([step, title, description], i) => (
                <article className="border-t border-white/20 p-6" key={step}>
                  <span>
                    0{i + 1} · {step}
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {data.level === "Level 6" && (
        <section className={`mp-section mp-section--cream ${section} bg-[#f3f0e8]`} id="eligibility">
          <div className={`mp-shell mp-eligibility ${shell} grid grid-cols-[.8fr_1.2fr] items-center gap-20 max-[1080px]:grid-cols-1`}>
            <div>
              <p className={`mp-eyebrow ${eyebrow}`}>Eligibility and funding</p>
              <h2>Could this programme be right for you?</h2>
              <p>
                The admissions team reviews the role, prior learning, employer
                support and funding position before confirming a funded place.
              </p>
              <NavigationButton to="/eligibility" variant="primary">
                Discuss eligibility <ArrowRight />
              </NavigationButton>
            </div>
            <aside>
              {data.eligibility.map((item, i) => (
                <p key={item}>
                  <span>0{i + 1}</span>
                  <b>{item}</b>
                </p>
              ))}
            </aside>
          </div>
        </section>
      )}

      <section className={`mp-section ${section}`} id="faq">
        <div className={`mp-shell mp-faq ${shell} grid grid-cols-[.8fr_1.2fr] gap-20 max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`mp-eyebrow ${eyebrow}`}>Programme questions</p>
            <h2>Clarity before commitment.</h2>
          </div>
          <div>
            {data.faqs.map(([question, answer]) => (
              <details className="border-b py-5" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-cta bg-gradient-to-r from-kbc-purple-800 to-kbc-purple-700 py-20 text-white">
        <div className={`mp-shell ${shell} grid grid-cols-[1.1fr_.9fr] items-end gap-12 max-[1080px]:grid-cols-1`}>
          <div>
            <p className={`mp-eyebrow ${eyebrow} !text-kbc-gold-500`}>{data.level} professional pathway</p>
            <h2 className="text-[clamp(42px,4.5vw,64px)] leading-[1.03] text-white">
              {data.level === "Level 4"
                ? "Build practical marketing capability."
                : "Build the marketing leader your organisation needs next."}
            </h2>
          </div>
          <div className="mp-actions flex flex-wrap gap-3">
            <NavigationButton to="/eligibility" variant="accent">
              Apply for a funded place <ArrowRight />
            </NavigationButton>
            <NavigationButton to="/book-session" variant="inverse">
              Book an information session
            </NavigationButton>
          </div>
        </div>
      </section>
    </main>
  );
}
