import { useEffect } from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: "job-1",
    title: "Marketing Executive Apprentice",
    company: "Virtus Tech",
    location: "Remote / London",
    salary: "£18,000 - £22,000",
    level: "Level 4",
    closingDate: "2026-08-30",
  },
  {
    id: "job-2",
    title: "Associate Project Manager Apprentice",
    company: "Wincanton",
    location: "Maidstone, Kent",
    salary: "£22,000 - £26,000",
    level: "Level 4",
    closingDate: "2026-09-15",
  },
  {
    id: "job-3",
    title: "Project Controls Professional Apprentice",
    company: "BMT",
    location: "Bristol / Hybrid",
    salary: "£28,000 - £35,000",
    level: "Level 6",
    closingDate: "2026-09-01",
  },
  {
    id: "job-4",
    title: "Marketing Manager Apprentice",
    company: "Black White Denim",
    location: "Manchester",
    salary: "£26,000 - £32,000",
    level: "Level 6",
    closingDate: "2026-08-25",
  },
  {
    id: "job-5",
    title: "Strategic Leadership Apprentice",
    company: "Kent County Council",
    location: "Maidstone, Kent",
    salary: "£35,000 - £45,000",
    level: "Level 7",
    closingDate: "2026-09-20",
  },
];

export default function ExploreJobs() {
  useEffect(() => {
    document.title = "Explore Jobs | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Explore Jobs
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Find apprenticeship opportunities with our partner employers across the UK.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-5 border border-kbc-purple-100 hover:border-kbc-gold-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-kbc-dark-500 mb-2">
                      {job.company} &middot; {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-kbc-purple-50 text-kbc-purple-700 text-xs font-medium rounded-full">
                        {job.level}
                      </span>
                      <span className="px-2.5 py-1 bg-kbc-gold-50 text-kbc-gold-700 text-xs font-medium rounded-full">
                        {job.salary}
                      </span>
                      <span className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full">
                        Closes {new Date(job.closingDate).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/apply"
                    className="shrink-0 px-5 py-2.5 bg-kbc-purple-500 text-white text-sm font-medium rounded-lg hover:bg-kbc-purple-600 transition-colors self-start"
                  >
                    Apply Now
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