import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Apprentices() {
  useEffect(() => {
    document.title = "Apprentices | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Apprentices
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Start your journey to becoming a chartered professional with a fully funded apprenticeship.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-4">
                Why Choose an Apprenticeship?
              </h2>
              <ul className="space-y-4">
                {[
                  "Earn while you learn with a real salary",
                  "Gain nationally recognised qualifications",
                  "No student debt or tuition fees",
                  "Build practical skills in a real workplace",
                  "Pathway to chartered professional status",
                  "Dedicated mentor and skills coach support",
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
                src="https://readdy.ai/api/search-image?query=Young%20apprentice%20professional%20working%20at%20modern%20desk%20in%20corporate%20office%2C%20mentor%20guiding%20nearby%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=600&seq=apprentice-1&orientation=landscape"
                alt="Apprentice at work"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 text-center mb-10">
            Apprenticeship Journey
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Apply",
                desc: "Submit your application and we will match you with a suitable employer or support your existing employer.",
              },
              {
                step: "2",
                title: "Induction",
                desc: "Complete your onboarding, meet your skills coach, and set your learning goals.",
              },
              {
                step: "3",
                title: "Learn & Develop",
                desc: "Combine on-the-job training with structured off-the-job learning and regular coaching sessions.",
              },
              {
                step: "4",
                title: "Achieve",
                desc: "Complete your end-point assessment, earn your qualification, and celebrate your success.",
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
        </div>
      </section>

      <section className="py-12 md:py-20 bg-kbc-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-6">
            Ready to Become an Apprentice?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="px-8 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/apprentices/stories"
              className="px-8 py-3 border-2 border-kbc-purple-500 text-kbc-purple-600 font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors"
            >
              Read Apprentice Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}