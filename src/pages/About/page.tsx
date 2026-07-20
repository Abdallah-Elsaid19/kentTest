import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "Who We Are | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Kent Business College is a leading provider of professional apprenticeships and qualifications, helping individuals and organisations achieve chartered status.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-4">
                Our Mission
              </h2>
              <p className="text-kbc-dark-600 leading-relaxed mb-6">
                To transform careers and organisations by delivering world-class, fully funded professional education that leads to chartered status. We believe that every professional deserves access to qualifications that accelerate their impact and earning potential.
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-4">
                Our Vision
              </h2>
              <p className="text-kbc-dark-600 leading-relaxed">
                To be the UK's most trusted partner for professional apprenticeships and chartered qualifications, recognised for exceptional outcomes, learner support, and employer satisfaction.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20professional%20graduates%20celebrating%20achievement%20at%20graduation%20ceremony%2C%20warm%20lighting%2C%20purple%20and%20gold%20academic%20robes%2C%20editorial%20photography&width=800&height=600&seq=about-1&orientation=landscape"
                alt="Kent Business College graduation"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-kbc-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ri-shield-check-line",
                title: "Excellence",
                desc: "We maintain the highest standards in curriculum design, delivery, and assessment.",
              },
              {
                icon: "ri-user-heart-line",
                title: "Learner First",
                desc: "Every decision we make starts with what is best for our learners' success.",
              },
              {
                icon: "ri-team-line",
                title: "Partnership",
                desc: "We work collaboratively with employers, professional bodies, and government to deliver outcomes.",
              },
              {
                icon: "ri-lightbulb-line",
                title: "Innovation",
                desc: "We continuously evolve our programmes to reflect the latest industry practices and technologies.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-kbc-purple-100"
              >
                <div className="w-12 h-12 bg-kbc-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${value.icon} text-xl text-kbc-purple-600`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-kbc-dark-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "2,500+", label: "Learners Supported" },
              { number: "95%", label: "Employer Satisfaction" },
              { number: "4", label: "Specialist Colleges" },
              { number: "15+", label: "Professional Partners" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-kbc-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-kbc-dark-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-kbc-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Whether you are a learner or an employer, we have a programme to help you achieve chartered professional status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="px-8 py-3 bg-kbc-gold-500 text-kbc-dark-900 font-semibold rounded-lg hover:bg-kbc-gold-400 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}