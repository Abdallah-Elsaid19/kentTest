import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetCoursesQuery } from "@/services/api";

export default function Courses() {
  const { data: coursesData, isLoading } = useGetCoursesQuery();
  const courses = coursesData?.data || [];

  useEffect(() => {
    document.title = "Courses | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Professional short courses and modules to develop specialist skills.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-64 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  className="bg-white rounded-xl border border-kbc-purple-100 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-semibold text-xl text-kbc-dark-900">
                      {course.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-kbc-purple-50 text-kbc-purple-700 text-xs font-medium rounded-full shrink-0">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-sm text-kbc-dark-500 mb-4">
                    Duration: {course.duration}
                  </p>
                  <p className="text-sm text-kbc-dark-600 leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-kbc-purple-600">
                    View Course
                    <i className="ri-arrow-right-line" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}