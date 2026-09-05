import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

type SectionIntroProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  spaced?: boolean;
};

export function SectionIntro({ id, eyebrow, title, copy, align = "center", tone = "default", spaced = true }: SectionIntroProps) {
  const descriptionTone = tone === "inverse" ? "[&_p]:!text-white/65" : "[&_p]:!text-[#756F79]";

  return (
    <div className={`${spaced ? "mb-[clamp(42px,6vw,72px)]" : ""} w-full max-w-[920px] ${align === "center" ? "mx-auto text-center" : ""} ${descriptionTone}`}>
      <FigmaSectionHeading id={id} eyebrow={eyebrow} title={title} description={copy} align={align} tone={tone} />
    </div>
  );
}

export const sectionClass = "relative bg-white py-[clamp(78px,9vw,132px)] max-[780px]:py-[72px]";
export const softSectionClass = `${sectionClass} bg-[#f7f4fa]`;
export const containerClass = "relative z-[1] mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
export const narrowContainerClass = "relative z-[1] mx-auto w-[calc(100%-2.5rem)] max-w-[1020px] max-[600px]:w-[calc(100%-1.75rem)]";
export const eyebrowClass = "text-xs font-bold uppercase tracking-[.25em] text-[#401b8c]";
export const goldEyebrowClass = `${eyebrowClass} text-[#f5c94f]`;
const sectionEyebrowBaseClass = "figma-eyebrow !text-xs !font-bold !uppercase !leading-5 !tracking-widest";
export const sectionEyebrowClass = `${sectionEyebrowBaseClass} !text-[#401b8c]`;
export const goldSectionEyebrowClass = `${sectionEyebrowBaseClass} !text-[#f5c94f]`;
export const actionsClass = "flex flex-wrap items-center gap-3 max-[500px]:w-full [&_a]:max-[500px]:w-full";

const buttonBaseClass = "inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-lg border border-transparent px-[22px] py-[13px] text-sm font-bold no-underline transition-[transform,background,border-color] duration-200 hover:-translate-y-0.5";

export function ArrowLink({ href, children, gold = false, newTab = false }: { href: string; children: ReactNode; gold?: boolean; newTab?: boolean }) {
  const className = `${buttonBaseClass} ${gold ? "bg-[#f5c94f] text-[#24102d] hover:bg-[#ffda69]" : "bg-[#401b8c] text-white hover:bg-[#2f1468]"}`;

  if (href.startsWith("/")) {
    return <Link className={className} to={href}>{children}<ArrowUpRight size={17} /></Link>;
  }

  return <a className={className} href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined}>{children}<ArrowUpRight size={17} /></a>;
}
