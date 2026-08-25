import { Minus, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

type FaqCategory = "Project Management" | "Leadership" | "Marketing" | "Employers";
type FaqItem = { id: string; category: FaqCategory; question: string; answer: string };

const categories: Array<"All questions" | FaqCategory> = ["All questions", "Project Management", "Leadership", "Marketing", "Employers"];

const faqItems: FaqItem[] = [
  {
    id: "project-requirements",
    category: "Project Management",
    question: "What are the requirements to join the Associate Project Manager apprenticeship programme?",
    answer: "The apprentice must be employed within an organisation. If you are currently unemployed, you can apply only if you have resided in the UK for at least three years, and we can assist you in securing an apprenticeship with one of our partner organisations.",
  },
  {
    id: "project-individual-application",
    category: "Project Management",
    question: "Can I apply for this programme as an individual?",
    answer: "No, this programme is designed for employees within organisations. If you are not currently employed, you can apply through your current company or secure an apprenticeship with one of our partner organisations in the UK.",
  },
  {
    id: "project-apprenticeship-difference",
    category: "Project Management",
    question: "How is an apprenticeship different from traditional education programmes?",
    answer: "The apprenticeship programme is designed to meet the specific needs of both employees and employers, focusing on practical application of tools rather than only theoretical knowledge and aiming to achieve work-related outcomes.",
  },
  {
    id: "project-travel",
    category: "Project Management",
    question: "Do I need to travel to London or Kent to attend sessions?",
    answer: "No, all sessions and supervision are conducted online. If there are four or more apprentices from the same workplace, the tutor will visit your workplace for teaching, or face-to-face sessions can be arranged near your workplace.",
  },
  {
    id: "project-fees",
    category: "Project Management",
    question: "Are exam fees and certifications included in the programme?",
    answer: "Yes, the apprenticeship programme includes full financial support for exam fees, certifications, optional workshops and the graduation ceremony. These additional costs are provided by Kent Business College on a discretionary basis.",
  },
  {
    id: "leadership-benefits",
    category: "Leadership",
    question: "What are the benefits of enrolling in the Leadership programme for my employees?",
    answer: "The Leadership programme develops high-level managerial skills, including strategic decision-making, team leadership and effective communication. This enables employees to lead teams successfully, drive organisational change and improve performance across departments.",
  },
  {
    id: "leadership-cost",
    category: "Leadership",
    question: "What is the cost of the Leadership programme for employers?",
    answer: "The cost varies depending on the available funding option. Organisations that pay into the Apprenticeship Levy may fund the programme through the levy. For eligible non-levy employers, government co-investment may cover up to 95% of the training cost, with the employer contributing 5%. Additional support from KBC remains discretionary.",
  },
  {
    id: "leadership-performance",
    category: "Leadership",
    question: "How will the Leadership programme enhance my organisation’s performance?",
    answer: "The programme equips employees to manage teams effectively, handle challenges with resilience and make strategic decisions aligned with business goals. Developing strong leaders can improve collaboration, productivity and innovation across the organisation.",
  },
  {
    id: "leadership-progress",
    category: "Leadership",
    question: "Can I track my employee’s progress during the Leadership programme?",
    answer: "Yes. Employers receive regular progress updates. Apprentices complete assignments, reflect on their learning through written reports and receive tutor feedback. Practical assessments also help confirm that learning is being applied in real workplace situations.",
  },
  {
    id: "leadership-duration",
    category: "Leadership",
    question: "How long does the Leadership programme take to complete?",
    answer: "The programme is typically completed over 12 to 18 months, depending on the individual’s pace and qualification level. It combines online learning, one-to-one tutoring, optional workshops and an End Point Assessment where applicable.",
  },
  {
    id: "marketing-individual-application",
    category: "Marketing",
    question: "Can I apply for the Marketing Executive Apprenticeship as an individual?",
    answer: "No, this apprenticeship is designed for employees working within organisations. If you are currently unemployed but meet the residency requirements, we can help you explore an apprenticeship opportunity with one of our partner organisations.",
  },
  {
    id: "marketing-apprenticeship-difference",
    category: "Marketing",
    question: "How is an apprenticeship different from traditional education programmes?",
    answer: "The apprenticeship is focused on practical application as well as theory. It is designed around employer and employee needs, allowing apprentices to gain workplace experience while learning and applying current marketing tools and techniques.",
  },
  {
    id: "marketing-delivery",
    category: "Marketing",
    question: "Do I need to attend classes in person, or can I complete the programme online?",
    answer: "All sessions are delivered online, with optional face-to-face workshops available at the end of each module. Workshops may be held in major UK locations such as London, Kent, Nottingham and Manchester.",
  },
  {
    id: "marketing-costs",
    category: "Marketing",
    question: "What are the costs involved in the programme?",
    answer: "The total training cost for the Marketing Executive Level 4 Apprenticeship is £6,000. Kent Business College provides financial support for selected exams, professional qualifications, memberships, graduation activity and optional workshops on a discretionary basis.",
  },
  {
    id: "marketing-epa",
    category: "Marketing",
    question: "What is the End Point Assessment process?",
    answer: "The End Point Assessment includes a multiple-choice test, a project showcase and a professional discussion. These assessments evaluate the apprentice’s practical marketing skills and knowledge, and all required components must be passed to complete the apprenticeship.",
  },
  {
    id: "employer-benefits",
    category: "Employers",
    question: "What are the benefits of enrolling my employees in the Marketing Executive Apprenticeship?",
    answer: "The apprenticeship helps organisations build a skilled workforce capable of managing complex marketing campaigns. Apprentices develop digital marketing, campaign planning, data analysis and customer-engagement skills that can support productivity, performance and employee retention.",
  },
  {
    id: "employer-cost",
    category: "Employers",
    question: "What is the cost for employers to participate in the Marketing Executive Apprenticeship programme?",
    answer: "Employers with an annual payroll above £3 million may use available Apprenticeship Levy funds. For eligible employers with a payroll below £3 million, government co-investment may cover 95% of the £6,000 training cost, with the employer contributing 5% (£300). Additional KBC support is discretionary.",
  },
  {
    id: "employer-development",
    category: "Employers",
    question: "How does the apprenticeship support my organisation’s development goals?",
    answer: "The apprenticeship aligns professional learning with business goals by developing employees who can plan impactful campaigns, optimise customer engagement and strengthen market positioning. Applied workplace activity connects learning directly with organisational priorities.",
  },
  {
    id: "employer-multiple-employees",
    category: "Employers",
    question: "Can I enrol multiple employees in the programme at once?",
    answer: "Yes. You can enrol multiple eligible employees. If four or more employees participate from the same workplace, KBC may arrange workplace-based face-to-face teaching to support relevant, collaborative learning.",
  },
  {
    id: "employer-tracking",
    category: "Employers",
    question: "How will I track the progress and performance of my apprentices?",
    answer: "Employers receive progress updates, performance information and tutor feedback. Reflective writing, assignments and practical assessments show how apprentices are applying learning in their roles, while the End Point Assessment confirms achievement against the required standard.",
  },
];

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All questions");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string>(faqItems[0].id);

  const visibleItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === "All questions" || item.category === activeCategory;
      const matchesSearch = !query || `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="kbc-figma-home overflow-hidden bg-white">
      <RouteMeta fallbackTitle="Frequently Asked Questions | Kent Business College" fallbackDescription="Find answers about KBC apprenticeships, programme delivery, funding, assessment and employer support." />

      <header className="relative bg-[#4B176D] px-5 pt-[150px] text-center sm:pt-[164px]">
        <span className="inline-flex rounded bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-kbc-gold-500 ring-1 ring-inset ring-white/10">FAQ</span>
        <h1 className="mx-auto mt-5 max-w-3xl !text-[clamp(2.7rem,8vw,5rem)] !leading-[1.1] !text-white">Frequently Asked <span className="text-kbc-gold-500">Questions</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">Find clear answers about programmes, eligibility, delivery, funding, assessment and employer support.</p>
        <span className="pointer-events-none absolute right-[7%] top-[48%] hidden -rotate-12 text-[150px] font-bold leading-none text-white/[.07] lg:block" aria-hidden="true">?</span>

        <label className="relative mx-auto mt-10 block max-w-4xl translate-y-1/2 text-left">
          <Search className="pointer-events-none absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4B176D]" aria-hidden="true" />
          <span className="sr-only">Search frequently asked questions</span>
          <input className="min-h-16 w-full rounded-lg border border-kbc-purple-950/5 bg-white py-4 pl-16 pr-5 text-sm text-kbc-purple-950 shadow-[0_18px_50px_rgba(75,23,109,.12)] outline-none transition focus:border-[#4B176D]/35 focus:ring-4 focus:ring-[#4B176D]/10 sm:min-h-20 sm:text-base" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Ask us something you would like to know..." />
        </label>
      </header>

      <main className="relative px-5 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28">
        <span className="pointer-events-none absolute -left-3 top-1/3 hidden rotate-12 text-[140px] font-bold leading-none text-kbc-purple-50 lg:block" aria-hidden="true">?</span>
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          <aside className="rounded-xl bg-[#f6f3f8] p-2 lg:sticky lg:top-28" aria-label="FAQ categories">
            {categories.map((category) => (
              <button
                className={`flex min-h-12 w-full items-center rounded-lg px-4 text-left text-sm font-semibold transition ${activeCategory === category ? "bg-white text-[#4B176D] shadow-sm" : "text-kbc-dark-600 hover:bg-white/70 hover:text-[#4B176D]"}`}
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                onClick={() => { setActiveCategory(category); setOpenId(""); }}
              >
                {category}
              </button>
            ))}
          </aside>

          <section aria-label="Frequently asked questions">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm text-kbc-dark-500">{visibleItems.length} {visibleItems.length === 1 ? "answer" : "answers"}</p>
              {activeCategory !== "All questions" && <span className="rounded-full bg-kbc-purple-50 px-3 py-1 text-xs font-semibold text-[#4B176D]">{activeCategory}</span>}
            </div>

            {visibleItems.length ? (
              <div className="divide-y divide-kbc-purple-950/10 border-y border-kbc-purple-950/10">
                {visibleItems.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <article key={item.id}>
                      <button className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6" type="button" aria-expanded={isOpen} aria-controls={`${item.id}-answer`} onClick={() => setOpenId(isOpen ? "" : item.id)}>
                        <span className={`text-base font-semibold leading-6 transition-colors sm:text-lg ${isOpen ? "text-[#4B176D]" : "text-kbc-purple-950"}`}>{item.question}</span>
                        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-[#4B176D] text-white" : "bg-kbc-purple-50 text-[#4B176D]"}`}>
                          {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                        </span>
                      </button>
                      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} id={`${item.id}-answer`}>
                        <div className="overflow-hidden"><p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-kbc-dark-600 sm:text-base sm:leading-8">{item.answer}</p></div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#4B176D]/25 bg-kbc-purple-50 p-10 text-center"><h2 className="text-2xl text-kbc-purple-950">No matching questions</h2><p className="mt-2 text-sm text-kbc-dark-500">Try another phrase or choose a different category.</p></div>
            )}
          </section>
        </div>
      </main>

      <section className="px-5 pb-20 sm:pb-24 lg:pb-28">
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#4B176D,#6f2a93)] p-8 text-white shadow-[0_22px_55px_rgba(75,23,109,.24)] sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div className="pointer-events-none absolute -bottom-28 right-16 h-72 w-72 rounded-full border-2 border-white/30" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-8 top-8 h-48 w-48 rounded-full border border-kbc-gold-500/45" aria-hidden="true" />
          <div className="relative max-w-xl"><span className="text-xs font-bold uppercase tracking-[.17em] text-kbc-gold-500">Still need help?</span><h2 className="mt-4 !text-4xl !leading-tight !text-white sm:!text-5xl">Ask the KBC team directly.</h2><p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">Tell us about your role, organisation or programme question and we’ll help you find the right next step.</p></div>
          <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col"><NavigationButton className="!w-full !bg-kbc-gold-500 !text-[#25102f] hover:!bg-white sm:!w-auto" to="/contact" variant="accent">Ask the KBC team</NavigationButton><NavigationButton className="!w-full sm:!w-auto" to="/book-session" variant="inverse">Book an information session</NavigationButton></div>
        </div>
      </section>
    </div>
  );
}
