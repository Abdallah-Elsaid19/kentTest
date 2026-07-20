import { useState } from "react";
import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is an apprenticeship?",
    answer:
      "An apprenticeship is a paid job where the employee learns and gains valuable experiences. Alongside on-the-job training, apprentices spend at least 20% of their working hours completing classroom-based learning with a college, university or training provider which leads to a nationally recognised qualification.",
    category: "General",
  },
  {
    question: "Are your programmes fully funded?",
    answer:
      "Yes, many of our programmes are fully funded through the Apprenticeship Levy or government co-investment for eligible employers and learners. We also offer guidance on funding eligibility during your initial consultation.",
    category: "Funding",
  },
  {
    question: "Who can apply for an apprenticeship?",
    answer:
      "Apprenticeships are available to anyone aged 16 or over, living in England, and not in full-time education. There is no upper age limit, and they are suitable for both new recruits and existing employees looking to upskill.",
    category: "General",
  },
  {
    question: "What qualifications will I receive?",
    answer:
      "Depending on your programme, you will receive nationally recognised qualifications from leading professional bodies including APM, CIM, CMI, and others. Many programmes also lead to chartered status.",
    category: "Qualifications",
  },
  {
    question: "How long do programmes typically take?",
    answer:
      "Programme duration varies by level. Level 4 apprenticeships typically take 15-18 months, Level 6 programmes around 24-27 months, and Level 7 qualifications approximately 18 months.",
    category: "General",
  },
  {
    question: "Can employers use the Apprenticeship Levy?",
    answer:
      "Yes. Employers who pay the Apprenticeship Levy can use their levy funds to cover the full cost of apprenticeship training. Non-levy paying employers typically pay 5% of the training cost, with the government covering the remaining 95%.",
    category: "Funding",
  },
  {
    question: "What support do learners receive?",
    answer:
      "Learners receive comprehensive support including a dedicated skills coach, access to our online learning platform, regular progress reviews, wellbeing resources, and career guidance throughout their programme.",
    category: "Support",
  },
  {
    question: "Do you offer programmes outside Kent?",
    answer:
      "While we are based in Kent, many of our programmes are delivered online or through a blended approach, making them accessible to learners and employers across England.",
    category: "General",
  },
  {
    question: "What is the difference between a college and a programme?",
    answer:
      "Our colleges are specialist faculties focused on a discipline (e.g., Marketing, Project Management). Each college offers multiple programmes at different levels within that discipline.",
    category: "Qualifications",
  },
  {
    question: "How do I book an information session?",
    answer:
      "You can book a free information session through our website by visiting the Book a Session page. Sessions are available online and cover programme details, funding, and next steps.",
    category: "Support",
  },
];

const categories = ["All", "General", "Funding", "Qualifications", "Support"];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "FAQ | Kent Business College";
  }, []);

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about our programmes, funding, and support.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-kbc-purple-500 text-white"
                    : "bg-kbc-purple-50 text-kbc-purple-700 hover:bg-kbc-purple-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <div className="space-y-4">
            {filtered.map((faq, idx) => (
              <div
                key={idx}
                className="border border-kbc-purple-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-kbc-purple-50/50 transition-colors"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-medium text-kbc-dark-900 pr-4">
                    {faq.question}
                  </span>
                  <i
                    className={`ri-arrow-down-s-line text-xl text-kbc-purple-500 shrink-0 transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-kbc-dark-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}