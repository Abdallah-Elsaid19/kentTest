import { useEffect } from "react";

export default function Governance() {
  useEffect(() => {
    document.title = "Governance Board | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Governance Board
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our governance structure ensures accountability, quality, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
              Board of Directors
            </h2>
            <p className="text-kbc-dark-600 leading-relaxed mb-6">
              The Kent Business College Board of Directors is responsible for setting the strategic direction of the organisation, overseeing financial performance, and ensuring compliance with regulatory requirements. The board meets quarterly and includes independent non-executive directors.
            </p>

            <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
              Quality Assurance Committee
            </h2>
            <p className="text-kbc-dark-600 leading-relaxed mb-6">
              Our Quality Assurance Committee monitors the standards of teaching, assessment, and learner support. The committee reviews feedback data, external moderation reports, and Ofsted requirements to ensure we maintain exceptional quality across all programmes.
            </p>

            <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
              Safeguarding & Welfare
            </h2>
            <p className="text-kbc-dark-600 leading-relaxed mb-6">
              The welfare of our learners is paramount. Our Designated Safeguarding Lead oversees all safeguarding policies and procedures. All staff undergo regular safeguarding training and enhanced DBS checks.
            </p>

            <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
              Policies & Reports
            </h2>
            <ul className="space-y-3">
              {[
                "Annual Report 2025",
                "Equality & Diversity Policy",
                "Health & Safety Policy",
                "Data Protection Policy",
                "Modern Slavery Statement",
                "Whistleblowing Policy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <i className="ri-file-pdf-line text-kbc-purple-500" />
                  <span className="text-kbc-dark-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}