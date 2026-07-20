import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContactMutation } from "@/services/api";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website_alt: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitContact, { isLoading, isSuccess, isError }] = useSubmitContactMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    document.title = "Contact Us | Kent Business College";
  }, []);

  const onSubmit = async (data: ContactForm) => {
    if (data.website_alt && data.website_alt.trim() !== "") {
      return;
    }
    await submitContact({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      type: data.subject.toLowerCase().replace(/\s+/g, "_"),
    });
    reset();
  };

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We would love to hear from you. Reach out for enquiries, support, or partnership opportunities.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-kbc-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-kbc-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-kbc-dark-900">Email</p>
                    <p className="text-sm text-kbc-dark-600">
                      info@kentbusinesscollege.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-kbc-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-kbc-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-kbc-dark-900">Phone</p>
                    <p className="text-sm text-kbc-dark-600">01622 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-kbc-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-line text-kbc-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-kbc-dark-900">Address</p>
                    <p className="text-sm text-kbc-dark-600">
                      Kent Business College<br />
                      123 Business Park Way<br />
                      Maidstone, Kent ME15 9JQ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-kbc-purple-50 rounded-2xl p-6 md:p-8 border border-kbc-purple-100">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-2xl text-green-600" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-kbc-dark-900 mb-2">
                    Message Sent
                  </h3>
                  <p className="text-kbc-dark-600 mb-4">
                    Thank you for contacting us. We will be in touch shortly.
                  </p>
                  <button
                    onClick={() => reset()}
                    className="text-kbc-purple-600 hover:underline"
                  >
                    Send another message
                  </button>
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
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                      placeholder="01622 123 456"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-kbc-dark-700 mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      {...register("subject")}
                      id="subject"
                      className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Course Enquiry">Course Enquiry</option>
                      <option value="Employer Enquiry">Employer Enquiry</option>
                      <option value="Support">Support</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-kbc-dark-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-2.5 bg-white border border-kbc-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400 resize-none"
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Honeypot */}
                  <input
                    {...register("website_alt")}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="absolute opacity-0 left-0 top-0 h-0 w-0"
                  />

                  {isError && (
                    <p className="text-sm text-red-600">
                      There was an error sending your message. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}