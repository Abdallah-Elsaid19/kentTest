import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useGetProgrammesQuery, useSubmitContactMutation } from "@/services/api";

const sessionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  jobTitle: z.string().optional(),
  programmeId: z.string().min(1, "Please select a programme"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().max(500).optional(),
  contact_alt: z.string().optional(),
});

type SessionForm = z.infer<typeof sessionSchema>;

export default function BookSession() {
  const [submitSession, { isLoading, isSuccess, isError }] =
    useSubmitContactMutation();
  const { data: programmesData } = useGetProgrammesQuery();
  const programmes = programmesData?.data || [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SessionForm>({
    resolver: zodResolver(sessionSchema),
  });

  useEffect(() => {
    document.title = "Book an Information Session | Kent Business College";
  }, []);

  const onSubmit = async (data: SessionForm) => {
    if (data.contact_alt && data.contact_alt.trim() !== "") {
      return;
    }
    await submitSession({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: `Session booking request for ${data.preferredDate} at ${data.preferredTime}. Programme: ${data.programmeId}. ${data.message || ""}`,
      type: "general",
    });
    reset();
  };

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Book an Information Session
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Schedule a free one-to-one session with our admissions team to learn more about our programmes.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-kbc-purple-50 rounded-2xl p-6 md:p-8 border border-kbc-purple-100">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-kbc-dark-900 mb-2">
                  Booking Request Received
                </h3>
                <p className="text-kbc-dark-600">
                  Thank you. Our team will confirm your session via email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    placeholder="01622 123 456"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Job Title
                  </label>
                  <input
                    {...register("jobTitle")}
                    id="jobTitle"
                    type="text"
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    placeholder="Current role"
                  />
                </div>

                <div>
                  <label
                    htmlFor="programmeId"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Programme of Interest *
                  </label>
                  <select
                    {...register("programmeId")}
                    id="programmeId"
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                  >
                    <option value="">Select a programme</option>
                    {programmes.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.title} ({prog.level})
                      </option>
                    ))}
                  </select>
                  {errors.programmeId && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.programmeId.message}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium text-kbc-dark-700 mb-1"
                    >
                      Preferred Date *
                    </label>
                    <input
                      {...register("preferredDate")}
                      id="preferredDate"
                      type="date"
                      className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-medium text-kbc-dark-700 mb-1"
                    >
                      Preferred Time *
                    </label>
                    <select
                      {...register("preferredTime")}
                      id="preferredTime"
                      className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.preferredTime.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400 resize-none"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                <input
                  {...register("contact_alt")}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                  className="absolute opacity-0 left-0 top-0 h-0 w-0"
                />

                {isError && (
                  <p className="text-sm text-red-600">
                    There was an error. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Booking..." : "Request Session"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}