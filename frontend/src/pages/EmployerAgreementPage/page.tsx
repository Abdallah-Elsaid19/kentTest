import { ZohoFormEmbed } from "@/components/forms/ZohoFormEmbed";
import { RouteMeta } from "@/components/seo/RouteMeta";

const formPerma = "wwtOnK14Wvkci7feFFR8fUrRITaPnGwAFLNdQP83hjg";

export default function EmployerAgreementPage() {
  return (
    <div className="kbc-employer-page">
      <RouteMeta
        fallbackTitle="Employer Agreement Form | Kent Business College"
        fallbackDescription="Complete the Kent Business College employer agreement form."
      />
      <main>
        <section className="kbc-employer-hero pt-[78px]" aria-labelledby="employer-agreement-title">
          <h1 id="employer-agreement-title" className="sr-only">Employer Agreement Form</h1>
          <img src="/assets/images/employer-agreement-hero.webp" alt="Employer Agreement Form" loading="lazy" decoding="async" />
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 py-10 md:py-14">
          <ZohoFormEmbed
            formName="EmployerAgreementForm1"
            formPerma={formPerma}
            title="Employer Agreement Form"
            initialHeight={4282}
          />
        </section>
      </main>
    </div>
  );
}
