import { useEffect } from "react";
import { useGetTeamMembersQuery } from "@/services/api";

export default function OurExperts() {
  const { data: teamData } = useGetTeamMembersQuery();
  const members = teamData?.data || [];

  useEffect(() => {
    document.title = "Our Experts | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Our Experts
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meet the experienced professionals and educators leading Kent Business College.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl border border-kbc-purple-100 overflow-hidden"
              >
                <div className="aspect-square bg-kbc-purple-100 flex items-center justify-center">
                  <div className="w-20 h-20 bg-kbc-purple-200 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-3xl text-kbc-purple-600" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-kbc-gold-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-kbc-dark-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}