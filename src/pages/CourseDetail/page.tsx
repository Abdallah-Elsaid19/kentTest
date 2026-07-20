import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCourseBySlugQuery } from "@/services/api";

export default function CourseDetail() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const { data: courseData, isLoading } = useGetCourseBySlugQuery(courseSlug || "");
  const course = courseData?.data;

  useEffect(() => {
    if (course) {
      document.title = `${course.title} | Kent Business College`;
    }
  }, [course]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse h-8 w-32 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-2">
            Course not found
          </h1>
          <Link to="/courses" className="text-kbc-purple-600 hover:underline">
            View all courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-4"
          >
            <i className="ri-arrow-left-line" />
            Back to Courses
          </Link>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{course.description}</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-kbc-purple-50 rounded-lg p-4 text-center">
              <p className="text-xs text-kbc-dark-500 mb-1">Level</p>
              <p className="font-semibold text-kbc-dark-900">{course.level}</p>
            </div>
            <div className="bg-kbc-purple-50 rounded-lg p-4 text-center">
              <p className="text-xs text-kbc-dark-500 mb-1">Duration</p>
              <p className="font-semibold text-kbc-dark-900">{course.duration}</p>
            </div>
            <div className="bg-kbc-purple-50 rounded-lg p-4 text-center">
              <p className="text-xs text-kbc-dark-500 mb-1">Delivery</p>
              <p className="font-semibold text-kbc-dark-900">Online / Blended</p>
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
            Course Outline
          </h2>
          <ul className="space-y-3 mb-10">
            {course.outline.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-kbc-gold-500 rounded-full flex items-center justify-center text-xs font-bold text-kbc-dark-900 shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-kbc-dark-600">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/apply"
              className="px-8 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors text-center"
            >
              Apply for This Course
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-kbc-purple-500 text-kbc-purple-600 font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors text-center"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}