import { useEffect } from "react";
import { useGetPartnersQuery } from "@/services/api";

export default function OurPartners() {
  const { data: partnersData } = useGetPartnersQuery();
  const partners = partnersData?.data || [];

  useEffect(() => {
    document.title = "Our Partners | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Our Partners
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We are proud to work with leading employers and professional bodies across the UK.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl border border-kbc-purple-100 p-6 flex items-center justify-center aspect-[3/2] hover:border-kbc-gold-400 transition-colors"
              >
                <span className="font-heading font-semibold text-kbc-purple-700 text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}