import { useEffect } from "react";
import { useGetAchievementsQuery } from "@/services/api";
import { Link } from "react-router-dom";

export default function StarLearners() {
  const { data: achievementsData } = useGetAchievementsQuery();
  const achievements = achievementsData?.data || [];

  useEffect(() => {
    document.title = "Star Learners | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Star Learners
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Celebrating the outstanding achievements of our learners across all programmes.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 text-center mb-2">
              Top Marketing Achievers
            </h2>
            <p className="text-center text-kbc-dark-500">
              Recognising excellence in the College of Marketing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white rounded-xl border border-kbc-purple-100 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-kbc-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-line text-3xl text-kbc-purple-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-1">
                  {ach.name}
                </h3>
                <p className="text-sm text-kbc-gold-600 font-medium mb-1">
                  {ach.role}
                </p>
                <p className="text-xs text-kbc-dark-500 mb-3">{ach.company}</p>
                <span className="inline-block px-3 py-1 bg-kbc-purple-50 text-kbc-purple-700 text-xs font-medium rounded-full">
                  {ach.programme}
                </span>
                {ach.linkedinUrl && (
                  <a
                    href={ach.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-kbc-purple-600 hover:text-kbc-purple-800 text-sm"
                  >
                    <i className="ri-linkedin-box-line mr-1" />
                    View Profile
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-kbc-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-4">
            Want to Be a Star Learner?
          </h2>
          <p className="text-kbc-dark-600 mb-8 max-w-xl mx-auto">
            Join our programmes and start your journey to professional excellence.
          </p>
          <Link
            to="/apply"
            className="inline-block px-8 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}