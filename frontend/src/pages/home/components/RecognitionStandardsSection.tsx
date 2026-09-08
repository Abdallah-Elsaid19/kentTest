import { useHomeSection } from "../contentContext";
import { SharedHomeSection } from "../SharedHomeSection";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  const content = useHomeSection("recognition");
  const { recognitionLogos } = content;

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

function RecognitionContent() {
  const content = useHomeSection("recognition");

  return (
    <section className="overflow-hidden bg-[#f8f7fb] py-16 sm:py-20 xl:py-[108px]" aria-labelledby="recognition-standards-title">
      <div className="figma-shell">
        <FigmaSectionHeading
          id="recognition-standards-title"
          eyebrow={content.copy.eyebrow}
          title={content.copy.title}
          description={content.copy.description}
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
          {content.copy.paragraph}</p>
      </div>
    </section>
  );
}

export function RecognitionStandardsSection() {
  return <SharedHomeSection section="recognition"><RecognitionContent /></SharedHomeSection>;
}
