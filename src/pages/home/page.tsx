import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetCollegesQuery, useGetProgrammesQuery, useGetEventsQuery, useGetTestimonialsQuery, useGetCaseStudiesQuery, useGetAchievementsQuery } from "@/services/api";

export default function Home() {
  const { data: collegesData } = useGetCollegesQuery();
  const { data: programmesData } = useGetProgrammesQuery();
  const { data: eventsData } = useGetEventsQuery();
  const { data: testimonialsData } = useGetTestimonialsQuery();
  const { data: caseStudiesData } = useGetCaseStudiesQuery();
  const { data: achievementsData } = useGetAchievementsQuery();

  const colleges = collegesData?.data || [];
  const programmes = programmesData?.data || [];
  const events = eventsData?.data?.filter((e) => e.status === "upcoming").slice(0, 3) || [];
  const testimonials = testimonialsData?.data || [];
  const caseStudies = caseStudiesData?.data || [];
  const achievements = achievementsData?.data || [];

  useEffect(() => {
    document.title = "Kent Business College | Chartered Professional Apprenticeships & Qualifications";
  }, []);

  const trustedLogos = [
    "Virtus", "Wincanton", "BMT", "Clymowest", "SCA Group",
    "Black White Denim", "GTI Wireless", "Base Media", "Balfour Beatty", "KCC",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Large%20group%20of%20diverse%20professional%20graduates%20in%20formal%20attire%20celebrating%20at%20graduation%20ceremony%2C%20purple%20and%20gold%20academic%20robes%2C%20prestigious%20venue%2C%20warm%20uplighting%2C%20editorial%20photography&width=1600&height=900&seq=hero-kbc&orientation=landscape"
            alt="Kent Business College graduates"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-4 py-1.5 bg-kbc-gold-500 text-kbc-dark-900 text-sm font-semibold rounded-full mb-6">
            Fully Funded
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Turn Your Team Into Chartered Professionals
          </h1>
          <p className="text-xl md:text-2xl text-kbc-gold-400 font-heading mb-2">
            Funded apprenticeships
          </p>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Fully Funded Chartered Marketers | Fully Funded Project Controls Fellowship | Fully Funded Chartered Project Professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/colleges"
              className="px-8 py-3.5 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              <i className="ri-building-line" />
              Explore Our Colleges
            </Link>
            <Link
              to="/book-session"
              className="px-8 py-3.5 border-2 border-kbc-gold-500 text-kbc-gold-400 font-semibold rounded-lg hover:bg-kbc-gold-500 hover:text-kbc-dark-900 transition-colors whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              <i className="ri-calendar-check-line" />
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-kbc-dark-400 mb-6 font-medium uppercase tracking-wider">
            Trusted by professionals
          </p>
          <div className="flex overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center mx-8 text-lg font-heading font-semibold text-kbc-dark-300"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Colleges */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-kbc-dark-900 mb-3">
              Our Colleges
            </h2>
            <p className="text-kbc-dark-500 max-w-xl mx-auto">
              Discover our specialist colleges designed to provide focused education in key business disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colleges.slice(0, 4).map((college) => (
              <Link
                key={college.id}
                to={`/colleges/${college.slug}`}
                className="group relative bg-kbc-purple-500 rounded-xl overflow-hidden aspect-[4/5] hover:shadow-xl transition-all"
              >
                <img
                  src={college.image}
                  alt={college.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity"
                  width={800}
                  height={600}
                />
                <div className="relative p-6 h-full flex flex-col justify-end">
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {college.name}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-3 mb-3">
                    {college.shortDescription}
                  </p>
                  <span className="text-sm font-medium text-kbc-gold-400 inline-flex items-center gap-1 group-hover:text-kbc-gold-300">
                    Learn More
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Programmes */}
      <section className="py-16 md:py-24 bg-kbc-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-kbc-dark-900 mb-3">
              Explore Our Funded Programmes
            </h2>
            <p className="text-kbc-dark-500 max-w-xl mx-auto">
              Fully funded apprenticeships and professional qualifications across our specialist colleges.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.slice(0, 6).map((prog) => (
              <Link
                key={prog.id}
                to={`/programmes/${prog.slug}`}
                className="bg-white rounded-xl border border-kbc-purple-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-kbc-purple-100 relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                    width={800}
                    height={500}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-kbc-gold-500 text-kbc-dark-900 text-xs font-semibold rounded-full">
                    {prog.fundingStatus}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-kbc-purple-600 font-medium mb-1">
                    {prog.collegeName}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-1">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-kbc-dark-500 mb-3">
                    {prog.level} &middot; {prog.duration}
                  </p>
                  <p className="text-sm text-kbc-dark-600 line-clamp-2">
                    {prog.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors"
            >
              View All Programmes
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-kbc-purple-100 text-kbc-purple-700 text-sm font-medium rounded-full mb-4">
              Benefits of Studying With Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-kbc-dark-900 mb-3">
              More Than a Qualification
            </h2>
            <p className="text-kbc-dark-500 max-w-xl mx-auto">
              At Kent Business College, your funded learning journey is designed to support your wellbeing, career confidence, professional recognition and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-heart-pulse-line",
                title: "Wellbeing & Learner Support",
                desc: "Supporting you personally, professionally and academically throughout your learning journey.",
                points: [
                  "Private healthcare insurance through Benenden Health",
                  "Mental wellbeing self-assessment tools",
                  "AI-powered Learning Management System",
                  "Learner dashboards to track progress",
                  "Original hard-copy and soft-copy learning materials",
                ],
              },
              {
                icon: "ri-bar-chart-box-line",
                title: "Know Yourself & Build Your Career",
                desc: "Helping you understand your strengths, personality, interests and career direction.",
                points: [
                  "Personality traits assessment",
                  "RAISEC career interest test",
                  "Job-fit and career-fit assessments",
                  "Personal development dashboards",
                  "Career guidance to identify the right professional pathway",
                ],
              },
              {
                icon: "ri-award-line",
                title: "Professional Recognition & Networking",
                desc: "Connecting you with professional bodies, events and recognition opportunities.",
                points: [
                  "Graduation ceremony",
                  "London Masterclass events",
                  "Professional body memberships linked to your programme",
                  "Club memberships and networking opportunities",
                  "Opportunities to build your professional profile and career confidence",
                ],
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl border border-kbc-purple-100 p-6 md:p-8"
              >
                <div className="w-12 h-12 bg-kbc-purple-100 rounded-lg flex items-center justify-center mb-5">
                  <i className={`${benefit.icon} text-2xl text-kbc-purple-600`} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-kbc-dark-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-kbc-dark-600 leading-relaxed mb-4">
                  {benefit.desc}
                </p>
                <ul className="space-y-2">
                  {benefit.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <i className="ri-check-line text-kbc-gold-500 mt-0.5 shrink-0 text-sm" />
                      <span className="text-sm text-kbc-dark-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/programmes"
              className="px-8 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors text-center"
            >
              Explore Our Programmes
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-kbc-purple-500 text-kbc-purple-600 font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors text-center"
            >
              Speak to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Top Achievers */}
      <section className="py-16 md:py-24 bg-kbc-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              Top Marketing Achievers
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Celebrating outstanding performance and dedication from our learners.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <div className="w-20 h-20 bg-kbc-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-line text-3xl text-kbc-dark-900" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-1">
                  {ach.name}
                </h3>
                <p className="text-sm text-kbc-gold-400 font-medium mb-1">
                  {ach.role}
                </p>
                <p className="text-xs text-white/60 mb-3">{ach.company}</p>
                <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                  {ach.programme}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-kbc-gold-100 text-kbc-gold-700 text-sm font-medium rounded-full mb-4">
              Case Study
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-kbc-dark-900 mb-3">
              Learner Stories
            </h2>
            <p className="text-kbc-dark-500 max-w-xl mx-auto">
              At Kent Business College, we are committed to empowering our learners to achieve their full potential.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl border border-kbc-purple-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-kbc-purple-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-kbc-purple-200 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-4xl text-kbc-purple-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-1">
                    {study.name}
                  </h3>
                  <p className="text-sm text-kbc-gold-600 font-medium mb-3">
                    {study.role}
                  </p>
                  <p className="text-sm text-kbc-dark-600 leading-relaxed line-clamp-4 mb-4">
                    {study.quote}
                  </p>
                  <Link
                    to={`/apprentices/stories`}
                    className="text-sm font-medium text-kbc-purple-600 hover:text-kbc-purple-800 inline-flex items-center gap-1"
                  >
                    Read more
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/apprentices/stories"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-kbc-purple-500 text-kbc-purple-600 font-semibold rounded-lg hover:bg-kbc-purple-50 transition-colors"
            >
              View all Case Studies
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Can Help You */}
      <section className="py-16 md:py-24 bg-kbc-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              How We Can Help You
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Whether you are a student, professional, or employer, Kent Business College offers resources tailored to your needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ri-briefcase-line",
                title: "For Employers",
                desc: "Partner with us to access top talent, upskill your workforce, and develop customised training programmes.",
                link: "/employer-agreement",
                cta: "Employer Centre",
              },
              {
                icon: "ri-graduation-cap-line",
                title: "For Learners",
                desc: "Explore our diverse range of programmes designed to accelerate your career and develop in-demand skills.",
                link: "/apprentices",
                cta: "Students Corner",
              },
              {
                icon: "ri-calendar-event-line",
                title: "Events",
                desc: "Attend workshops, seminars, and networking events to expand your knowledge and professional connections.",
                link: "/events",
                cta: "Events",
              },
              {
                icon: "ri-store-line",
                title: "Online Store",
                desc: "Browse our collection of textbooks, study materials, and branded merchandise to support your learning journey.",
                link: "#",
                cta: "Visit Store",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-kbc-gold-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-xl text-kbc-dark-900`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  {item.desc}
                </p>
                <Link
                  to={item.link}
                  className="inline-block px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-kbc-gold-500 hover:text-kbc-dark-900 transition-colors"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-kbc-dark-900 mb-3">
              Upcoming Events
            </h2>
            <p className="text-kbc-dark-500 max-w-xl mx-auto">
              Discover our upcoming events and secure your place.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl border border-kbc-purple-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    width={600}
                    height={400}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-kbc-purple-500 text-white text-xs font-semibold rounded-full">
                    {event.isOnline ? "Online" : "In-Person"}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-kbc-dark-500 mb-2">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                    {" "}&middot; {event.startTime} - {event.endTime}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-kbc-dark-600 line-clamp-2 mb-4">
                    {event.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={event.registrationUrl || "#"}
                      className="flex-1 text-center px-4 py-2 bg-kbc-purple-500 text-white text-sm font-medium rounded-lg hover:bg-kbc-purple-600 transition-colors"
                    >
                      Secure Your Seat
                    </a>
                    <Link
                      to={`/events/${event.slug}`}
                      className="flex-1 text-center px-4 py-2 border border-kbc-purple-200 text-kbc-purple-600 text-sm font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-kbc-purple-500 text-kbc-purple-600 font-semibold rounded-lg hover:bg-kbc-purple-50 transition-colors"
            >
              View All Events
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-kbc-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-kbc-dark-900 mb-3">
              What Our Learners Say
            </h2>
            <p className="text-kbc-dark-500 max-w-xl mx-auto">
              Hear from professionals who have transformed their careers with Kent Business College.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 md:p-8 border border-kbc-purple-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-kbc-gold-500 text-sm" />
                  ))}
                </div>
                <p className="text-kbc-dark-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-heading font-semibold text-kbc-dark-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-kbc-dark-500">
                    {testimonial.role}, {testimonial.organisation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-kbc-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Grow Professionally
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Take the next step in your career with a fully funded professional qualification from Kent Business College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="px-8 py-3.5 bg-kbc-gold-500 text-kbc-dark-900 font-semibold rounded-lg hover:bg-kbc-gold-400 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/book-session"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Book an Information Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}