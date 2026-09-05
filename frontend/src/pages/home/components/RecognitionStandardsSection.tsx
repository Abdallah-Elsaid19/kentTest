import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const recognitionLogos = [
  {
    name: "Recognition partner 1",
  
    src: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/356aeb204f224be68e62727bcbbb1c75.webp",
  },
  {
    name: "Recognition partner 2",
  
    src: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/c2cd9e7a9c4842ab822c0aac16ffa061.webp",
  },
  {
    name: "Association for Project Management",
    
    src: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/bb930e8a6230490b850425c0f6643aab.webp",
  },
  {
    name: "Recognition partner 3",
   
    src: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/5c4f7558699844a28d0d1fbf308b7b25.webp",
  },
  {
    name: "Institute of Project Controls",
  
    src: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cfc267af22a941a4bf58b79926482616.png",
  },
  {
    name: "Recognition partner 4",
 
    src: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/8ba3636c4a53491f86912fe3fa597438.webp",
  },
] as const;

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="recognition-marquee__group" aria-hidden={duplicate || undefined}>
      {recognitionLogos.map((logo) => (
        <article className="recognition-marquee__item group" key={`${logo.name}-${duplicate ? "copy" : "original"}`}>
          <div className={`recognition-marquee__logo ${"darkBackground" in logo && logo.darkBackground ? "recognition-marquee__logo--dark" : ""}`}>
            <img
              className="transition-transform duration-300 ease-out group-hover:scale-125 motion-reduce:transition-none"
              src={logo.src}
              alt={duplicate ? "" : logo.name}
              loading="lazy"
              decoding="async"
            />
          </div>
        
        </article>
      ))}
    </div>
  );
}

export function RecognitionStandardsSection() {
  return (
    <section className="overflow-hidden bg-[#f8f7fb] py-16 sm:py-20 xl:py-[108px]" aria-labelledby="recognition-standards-title">
      <div className="figma-shell">
        <FigmaSectionHeading
          id="recognition-standards-title"
          eyebrow="Recognition & standards"
          title="Recognised standards, strengthened by professional connections"
          description="Professional standards are built into the KBC learning experience through relevant qualifications, professional-body pathways and recognised programme frameworks."
          align="center"
        />
      </div>

      <div className="recognition-standards__marquees mt-14 space-y-3 sm:mt-16">
        <div className="recognition-marquee" aria-label="Professional bodies and qualification pathways">
          <div className="recognition-marquee__track">
            <LogoGroup />
            <LogoGroup duplicate />
          </div>
        </div>

        <div className="recognition-marquee recognition-marquee--reverse" aria-hidden="true">
          <div className="recognition-marquee__track">
            <LogoGroup duplicate />
            <LogoGroup duplicate />
          </div>
        </div>
      </div>

      <div className="figma-shell">
        <p className="recognition-standards__note mx-auto mt-12 max-w-[720px] text-center text-xs leading-relaxed !text-[#716a78] sm:text-sm">
          Qualifications, memberships, professional-body relationships and recognition vary by programme.
        </p>
      </div>
    </section>
  );
}
