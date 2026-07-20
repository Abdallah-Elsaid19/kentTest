import { useEffect } from "react";

export default function Safeguarding() {
  useEffect(() => {
    document.title = "Safeguarding Handbook | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Safeguarding Handbook
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our commitment to keeping all learners safe, supported, and empowered.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-kbc-dark-600 leading-relaxed">
                Kent Business College is committed to safeguarding and promoting the welfare of children, young people, and vulnerable adults. We expect all staff, visitors, and partners to share this commitment. We have a zero-tolerance approach to abuse, discrimination, and harassment.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                Reporting Concerns
              </h2>
              <p className="text-kbc-dark-600 leading-relaxed mb-4">
                If you have any safeguarding concerns, please contact our Designated Safeguarding Lead immediately. All concerns will be taken seriously and handled confidentially.
              </p>
              <div className="bg-kbc-purple-50 rounded-xl p-6 border border-kbc-purple-100">
                <p className="font-medium text-kbc-dark-900 mb-2">
                  Designated Safeguarding Lead
                </p>
                <p className="text-sm text-kbc-dark-600">
                  Email: safeguarding@kentbusinesscollege.com
                </p>
                <p className="text-sm text-kbc-dark-600">
                  Phone: 01622 123 456
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                Key Policies
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Safeguarding & Child Protection Policy",
                  "Prevent Duty Policy",
                  "Anti-Bullying & Harassment Policy",
                  "Online Safety Policy",
                  "Mental Health & Wellbeing Policy",
                  "Complaints Procedure",
                ].map((policy) => (
                  <div
                    key={policy}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-kbc-purple-100"
                  >
                    <i className="ri-shield-check-line text-kbc-purple-500 text-lg" />
                    <span className="text-sm text-kbc-dark-700">{policy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}