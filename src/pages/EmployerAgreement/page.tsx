import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EmployerAgreement() {
  useEffect(() => {
    document.title = "Employer Agreement | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Employer Agreement
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Partner with Kent Business College to develop your workforce through fully funded apprenticeships and professional qualifications.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-4">
                Why Partner With Us?
              </h2>
              <ul className="space-y-4">
                {[
                  "Fully funded training through the Apprenticeship Levy",
                  "Access to nationally recognised qualifications",
                  "Dedicated account management and support",
                  "Bespoke programmes tailored to your organisation",
                  "Improved staff retention and satisfaction",
                  "Measurable ROI and business impact",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <i className="ri-check-line text-kbc-gold-500 mt-0.5 shrink-0" />
                    <span className="text-kbc-dark-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Corporate%20team%20meeting%20in%20modern%20glass%20office%2C%20diverse%20professionals%20discussing%20strategy%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=600&seq=employer-1&orientation=landscape"
                alt="Employer partnership"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 text-center mb-10">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "We discuss your workforce development needs and identify suitable programmes.",
              },
              {
                step: "2",
                title: "Agreement",
                desc: "We set up the employer agreement and confirm funding eligibility.",
              },
              {
                step: "3",
                title: "Recruit",
                desc: "We support recruitment or onboard your existing employees onto programmes.",
              },
              {
                step: "4",
                title: "Deliver",
                desc: "We deliver training, coaching, and assessment with regular progress updates.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-xl p-6 border border-kbc-purple-100 text-center"
              >
                <div className="w-10 h-10 bg-kbc-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-kbc-dark-900">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-kbc-dark-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-kbc-purple-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-4">
              Ready to Upskill Your Team?
            </h2>
            <p className="text-kbc-dark-600 mb-8 max-w-xl mx-auto">
              Get in touch to discuss how we can support your organisation's workforce development goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/book-session"
                className="px-8 py-3 border-2 border-kbc-purple-500 text-kbc-purple-600 font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}