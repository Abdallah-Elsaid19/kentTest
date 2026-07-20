import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitApplicationMutation, useGetProgrammesQuery } from "@/services/api";
import { Link } from "react-router-dom";

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  programmeId: z.string().min(1, "Please select a programme"),
  employer: z.string().optional(),
  jobTitle: z.string().optional(),
  company_alt: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function Apply() {
  const [submitApplication, { isLoading, isSuccess, isError }] =
    useSubmitApplicationMutation();
  const { data: programmesData } = useGetProgrammesQuery();
  const programmes = programmesData?.data || [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  useEffect(() => {
    document.title = "Apply Now | Kent Business College";
  }, []);

  const onSubmit = async (data: ApplicationForm) => {
    if (data.company_alt && data.company_alt.trim() !== "") {
      return;
    }
    await submitApplication({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      programmeId: data.programmeId,
      employer: data.employer,
      jobTitle: data.jobTitle,
    });
    reset();
  };

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Apply Now
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Start your journey to becoming a chartered professional. Complete the form below and our team will be in touch.
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
                  Application Submitted
                </h3>
                <p className="text-kbc-dark-600 mb-4">
                  Thank you for your application. Our admissions team will review your submission and contact you within 3 working days.
                </p>
                <Link
                  to="/"
                  className="text-kbc-purple-600 hover:underline"
                >
                  Return to homepage
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-kbc-dark-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      {...register("firstName")}
                      id="firstName"
                      type="text"
                      className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                      placeholder="First name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-kbc-dark-700 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      {...register("lastName")}
                      id="lastName"
                      type="text"
                      className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                      placeholder="Last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
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
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
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
                    <p className="mt-1 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="programmeId"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Programme *
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

                <div>
                  <label
                    htmlFor="employer"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Current Employer
                  </label>
                  <input
                    {...register("employer")}
                    id="employer"
                    type="text"
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-kbc-dark-700 mb-1"
                  >
                    Current Job Title
                  </label>
                  <input
                    {...register("jobTitle")}
                    id="jobTitle"
                    type="text"
                    className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    placeholder="Job title"
                  />
                </div>

                <input
                  {...register("company_alt")}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                  className="absolute opacity-0 left-0 top-0 h-0 w-0"
                />

                {isError && (
                  <p className="text-sm text-red-600">
                    There was an error submitting your application. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}