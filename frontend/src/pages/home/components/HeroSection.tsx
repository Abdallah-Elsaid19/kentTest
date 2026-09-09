import { useHomeSection } from "../contentContext";
import { ArrowRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";
import { versionHeroMedia } from "../heroMedia";
import { HeroBackground } from "./HeroBackground";

export function HeroSection() {
  const content = useHomeSection("hero");
  const poster = versionHeroMedia(content.copy.poster);
  const webm = versionHeroMedia(content.copy.src);
  const mp4 = versionHeroMedia(content.copy.src2);

  return (
    <section className="figma-hero figma-hero--video figma-hero--centered !pb-16 !pt-[140px] sm:!pb-20 sm:!pt-[154px] lg:!pb-24 xl:!pt-44" aria-labelledby="home-hero-heading">
      <HeroBackground key={`${webm}|${mp4}|${poster}`} poster={poster} webm={webm} mp4={mp4} />
      <div className="figma-hero__video-overlay" aria-hidden="true" />
      <div className="figma-shell figma-hero__grid !grid-cols-1 !gap-10">
        <div className="figma-hero__copy">
          <p className="figma-hero__eyebrow !text-xs !font-bold !leading-5 !tracking-widest !uppercase">{content.copy.paragraph}</p>
          <h1 className="!text-5xl !font-medium !leading-none !tracking-tight sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="home-hero-heading">{content.copy.heading}{" "}<span>{content.copy.text}</span></h1>
          <p className="!text-base !leading-relaxed sm:!text-lg">{content.copy.paragraph2}</p>
          <div className="figma-hero__actions !flex-col sm:!flex-row">
            <NavigationButton className="figma-btn figma-btn--gold !w-full sm:!w-auto" to={content.copy.to}>{content.copy.linkLabel}<ArrowRight aria-hidden="true" /></NavigationButton>
            <NavigationButton className="figma-hero__text-action !w-full sm:!w-auto" to={content.copy.to2} variant="inverse">{content.copy.linkLabel2}</NavigationButton>
          </div>
          <div className="figma-hero__proof">
            <div><strong className="!text-sm !font-bold !leading-tight">{content.copy.text2}</strong><span className="!text-xs !leading-relaxed sm:!text-sm">{content.copy.text3}</span></div>
            <div><strong className="!text-sm !font-bold !leading-tight">{content.copy.text4}</strong><span className="!text-xs !leading-relaxed sm:!text-sm">{content.copy.text5}</span></div>
            <div><strong className="!text-sm !font-bold !leading-tight">{content.copy.text6}</strong><span className="!text-xs !leading-relaxed sm:!text-sm">{content.copy.text7}</span></div>
          </div>
        </div>
        <div className="figma-hero__visual !mt-4 !min-h-[420px] sm:!min-h-[500px] lg:!mt-0">
          <div className="figma-hero__domain-card"><span>{content.copy.text8}</span><strong>{content.copy.text9}</strong></div>
          <img src={content.copy.src3} alt={content.copy.alt} loading="lazy" decoding="async" />
          <div className="figma-hero__image-note"><i aria-hidden="true" /><div><span>{content.copy.text10}</span><strong>{content.copy.text11}</strong></div></div>
        </div>
      </div>
    </section>
  );
}
