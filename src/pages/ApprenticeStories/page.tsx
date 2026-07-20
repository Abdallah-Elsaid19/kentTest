import { useEffect } from "react";
import { useGetCaseStudiesQuery } from "@/services/api";
import { Link } from "react-router-dom";

export default function ApprenticeStories() {
  const { data: studiesData } = useGetCaseStudiesQuery();
  const stories = studiesData?.data || [];

  useEffect(() => {
    document.title = "Apprentices' Stories | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Apprentices' Stories
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real experiences from real learners who have transformed their careers with Kent Business College.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl border border-kbc-purple-100 overflow-hidden"
              >
                <div className="aspect-square bg-kbc-purple-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-kbc-purple-200 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-4xl text-kbc-purple-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-1">
                    {story.name}
                  </h3>
                  <p className="text-sm text-kbc-gold-600 font-medium mb-3">
                    {story.role}
                  </p>
                  <p className="text-sm text-kbc-dark-600 leading-relaxed mb-4 line-clamp-4">
                    {story.quote}
                  </p>
                  <Link
                    to={`/learners/${story.slug}`}
                    className="text-sm font-medium text-kbc-purple-600 hover:text-kbc-purple-800 inline-flex items-center gap-1"
                  >
                    Read full story
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}