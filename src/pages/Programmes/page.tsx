import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProgrammesQuery, useGetCollegesQuery } from "@/services/api";

export default function Programmes() {
  const { data: programmesData, isLoading } = useGetProgrammesQuery();
  const { data: collegesData } = useGetCollegesQuery();
  const [activeCollege, setActiveCollege] = useState("all");

  const programmes = programmesData?.data || [];
  const colleges = collegesData?.data || [];

  const filtered =
    activeCollege === "all"
      ? programmes
      : programmes.filter((p) => p.collegeId === activeCollege);

  useEffect(() => {
    document.title = "Programmes | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Explore Our Funded Programmes
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Browse our fully funded apprenticeships and professional qualifications across our specialist colleges.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCollege("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCollege === "all"
                  ? "bg-kbc-purple-500 text-white"
                  : "bg-kbc-purple-50 text-kbc-purple-700 hover:bg-kbc-purple-100"
              }`}
            >
              All Colleges
            </button>
            {colleges.map((college) => (
              <button
                key={college.id}
                onClick={() => setActiveCollege(college.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCollege === college.id
                    ? "bg-kbc-purple-500 text-white"
                    : "bg-kbc-purple-50 text-kbc-purple-700 hover:bg-kbc-purple-100"
                }`}
              >
                {college.name.replace("College of ", "")}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-96 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prog) => (
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
                    <p className="text-sm text-kbc-dark-600 line-clamp-2 mb-4">
                      {prog.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.professionalRecognition.slice(0, 2).map((rec) => (
                        <span
                          key={rec}
                          className="px-2 py-0.5 bg-kbc-purple-50 text-kbc-purple-700 text-xs rounded"
                        >
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}