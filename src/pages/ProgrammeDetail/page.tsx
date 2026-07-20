import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProgrammeBySlugQuery } from "@/services/api";

export default function ProgrammeDetail() {
  const { programmeSlug } = useParams<{ programmeSlug: string }>();
  const { data: programmeData, isLoading } = useGetProgrammeBySlugQuery(
    programmeSlug || ""
  );
  const programme = programmeData?.data;

  useEffect(() => {
    if (programme) {
      document.title = `${programme.title} | Kent Business College`;
    }
  }, [programme]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse h-8 w-32 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-2">
            Programme not found
          </h1>
          <Link to="/programmes" className="text-kbc-purple-600 hover:underline">
            View all programmes
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
            to="/programmes"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-4"
          >
            <i className="ri-arrow-left-line" />
            Back to Programmes
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-kbc-gold-500 text-kbc-dark-900 text-sm font-semibold rounded-full">
              {programme.fundingStatus}
            </span>
            <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
              {programme.level}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            {programme.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{programme.description}</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="w-full h-auto object-cover"
                  width={800}
                  height={500}
                />
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                  Programme Overview
                </h2>
                <p className="text-kbc-dark-600 leading-relaxed">
                  {programme.description}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                  What You Will Gain
                </h2>
                <ul className="space-y-3">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <i className="ri-check-line text-kbc-gold-500 mt-0.5 shrink-0" />
                      <span className="text-kbc-dark-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                  Professional Recognition
                </h2>
                <div className="flex flex-wrap gap-2">
                  {programme.professionalRecognition.map((rec) => (
                    <span
                      key={rec}
                      className="px-4 py-2 bg-kbc-purple-50 text-kbc-purple-700 font-medium rounded-lg"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-kbc-purple-50 rounded-xl p-6 border border-kbc-purple-100">
                <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-4">
                  Key Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-kbc-dark-500">College</span>
                    <span className="font-medium text-kbc-dark-900">
                      {programme.collegeName}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-kbc-dark-500">Level</span>
                    <span className="font-medium text-kbc-dark-900">
                      {programme.level}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-kbc-dark-500">Duration</span>
                    <span className="font-medium text-kbc-dark-900">
                      {programme.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-kbc-dark-500">Funding</span>
                    <span className="font-medium text-kbc-gold-600">
                      {programme.fundingStatus}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-kbc-dark-500">Qualification</span>
                    <span className="font-medium text-kbc-dark-900">
                      {programme.qualification}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/apply"
                  className="block w-full text-center px-6 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  to="/book-session"
                  className="block w-full text-center px-6 py-3 border-2 border-kbc-gold-500 text-kbc-gold-700 font-medium rounded-lg hover:bg-kbc-gold-50 transition-colors"
                >
                  Book Information Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}