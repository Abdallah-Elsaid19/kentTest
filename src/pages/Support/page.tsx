import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Support() {
  useEffect(() => {
    document.title = "KBC Support | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            KBC Support
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We are here to help. Find answers, contact our team, or access learner resources.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-questionnaire-line",
                title: "FAQs",
                desc: "Browse our comprehensive FAQ section for quick answers to common questions.",
                link: "/faq",
                linkLabel: "View FAQs",
              },
              {
                icon: "ri-mail-line",
                title: "Email Support",
                desc: "Get in touch with our support team for personalised assistance with your enquiry.",
                link: "/contact",
                linkLabel: "Contact Us",
              },
              {
                icon: "ri-phone-line",
                title: "Phone Support",
                desc: "Speak directly with our learner support team during business hours.",
                link: "/contact",
                linkLabel: "Call Us",
              },
              {
                icon: "ri-book-open-line",
                title: "Learner Resources",
                desc: "Access study guides, templates, and additional learning materials.",
                link: "#",
                linkLabel: "Access Resources",
              },
              {
                icon: "ri-calendar-event-line",
                title: "Book a Session",
                desc: "Schedule a one-to-one information session with our admissions team.",
                link: "/book-session",
                linkLabel: "Book Now",
              },
              {
                icon: "ri-mental-health-line",
                title: "Wellbeing Support",
                desc: "Access wellbeing resources and support services for learners.",
                link: "#",
                linkLabel: "Learn More",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-kbc-purple-100 hover:border-kbc-gold-300 transition-colors"
              >
                <div className="w-12 h-12 bg-kbc-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-xl text-kbc-purple-600`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-kbc-dark-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Link
                  to={item.link}
                  className="text-sm font-medium text-kbc-purple-600 hover:text-kbc-purple-800 inline-flex items-center gap-1"
                >
                  {item.linkLabel}
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}