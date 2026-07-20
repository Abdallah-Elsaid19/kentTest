import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetCollegesQuery } from "@/services/api";

export default function Colleges() {
  const { data: collegesData, isLoading } = useGetCollegesQuery();
  const colleges = collegesData?.data || [];

  useEffect(() => {
    document.title = "Our Colleges | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Our Colleges
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover our specialist colleges designed to provide focused education in key business disciplines.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-80 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {colleges.map((college) => (
                <Link
                  key={college.id}
                  to={`/colleges/${college.slug}`}
                  className="group relative bg-kbc-purple-500 rounded-xl overflow-hidden aspect-[4/3] hover:shadow-xl transition-all"
                >
                  <img
                    src={college.image}
                    alt={college.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                    width={800}
                    height={600}
                  />
                  <div className="relative p-8 h-full flex flex-col justify-end">
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                      {college.name}
                    </h2>
                    <p className="text-sm text-white/80 line-clamp-3 mb-4">
                      {college.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-kbc-gold-400 group-hover:text-kbc-gold-300">
                      Learn More
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                    </span>
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