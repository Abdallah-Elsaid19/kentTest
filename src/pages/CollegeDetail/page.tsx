import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCollegeBySlugQuery, useGetProgrammesByCollegeQuery } from "@/services/api";

export default function CollegeDetail() {
  const { collegeSlug } = useParams<{ collegeSlug: string }>();
  const { data: collegeData } = useGetCollegeBySlugQuery(collegeSlug || "");
  const { data: programmesData } = useGetProgrammesByCollegeQuery(collegeData?.data?.id || "");

  const college = collegeData?.data;
  const programmes = programmesData?.data || [];

  useEffect(() => {
    if (college) {
      document.title = `${college.name} | Kent Business College`;
    }
  }, [college]);

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-2">
            College not found
          </h1>
          <Link to="/colleges" className="text-kbc-purple-600 hover:underline">
            View all colleges
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
            to="/colleges"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-4"
          >
            <i className="ri-arrow-left-line" />
            Back to Colleges
          </Link>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            {college.name}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{college.shortDescription}</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                About This College
              </h2>
              <p className="text-kbc-dark-600 leading-relaxed mb-6">
                {college.fullDescription}
              </p>
              <h3 className="font-heading text-lg font-semibold text-kbc-dark-900 mb-3">
                Programmes Offered
              </h3>
              <ul className="space-y-2">
                {programmes.map((prog) => (
                  <li key={prog.id} className="flex items-center gap-2">
                    <i className="ri-check-line text-kbc-gold-500" />
                    <Link
                      to={`/programmes/${prog.slug}`}
                      className="text-kbc-purple-600 hover:underline"
                    >
                      {prog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>

          {programmes.length > 0 && (
            <>
              <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-6">
                Available Programmes
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {programmes.map((prog) => (
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
            </>
          )}
        </div>
      </section>
    </div>
  );
}