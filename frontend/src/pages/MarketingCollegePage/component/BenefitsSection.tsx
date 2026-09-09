import { useCmsBindings } from "@/features/cms/publicContent";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { benefitCopy, marketingWhyChooseUs, marketingWhyChooseUsStats } from "../data";
import { card, section, shell } from "./layout";

export function BenefitsSection() {
  const cms = useCmsBindings(["college_marketing"]);
  const cmsValues = cms.resolve({ section, shell, benefitCopy, marketingWhyChooseUs, card, marketingWhyChooseUsStats });

  return cms.render((
    <section id="marketing-benefits" className={`${cmsValues.section} relative isolate overflow-hidden bg-[var(--color-soft)]`} aria-labelledby="marketing-benefits-title">
      <img
        className="pointer-events-none absolute -bottom-32 -right-10 z-0 hidden w-[clamp(380px,34vw,610px)] select-none opacity-[0.055] md:block"
        src={cms.text("college_marketing.pages_marketing_college_page_component_b_benefits_section.src_001")}
        alt=""
        aria-hidden="true"
      />
      <div className={`${cmsValues.shell} relative z-10`}>
        <FigmaSectionHeading id="marketing-benefits-title" eyebrow={cmsValues.benefitCopy.eyebrow} title={cmsValues.benefitCopy.title} description={cmsValues.benefitCopy.description} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cmsValues.marketingWhyChooseUs.map(({ icon: Icon, title, desc }) => (
            <article key={title} className={`${cmsValues.card} group transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none`}>
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none">
                <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{desc}</p>
            </article>
          ))}
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-white px-5 py-8 sm:px-8 lg:mt-16 lg:grid-cols-4">
          {cmsValues.marketingWhyChooseUsStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-3 text-center">
              <dt className="text-xs leading-5 text-[var(--color-muted)] sm:text-sm">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  ));
}
