import type { ReactNode } from "react";

export function CollegeHeroSurface({ image, titleId, children, overlay = "default", variant = "college", id, fullHeight = false, patternSide = "right" }: {
  image: string;
  titleId: string;
  children: ReactNode;
  overlay?: "default" | "light" | "clear";
  variant?: "college" | "funding";
  id?: string;
  fullHeight?: boolean;
  patternSide?: "left" | "right";
}) {
  if (variant === "funding") {
    return (
      <section id={id} className={`kbc-page-hero-offset relative isolate grid items-center overflow-hidden bg-primary ${fullHeight ? "min-h-[100svh]" : "min-h-[min(850px,calc(100svh-64px))] max-[780px]:min-h-0"}`} aria-labelledby={titleId}>
        <img className="absolute inset-0 -z-[3] h-full w-full object-cover object-[center_42%] opacity-25 saturate-[.72]" src={image} alt="" aria-hidden="true" fetchPriority="high" />
        <div className="absolute inset-0 -z-[2] h-full w-full bg-[radial-gradient(circle_at_78%_14%,rgba(119,55,154,.34),transparent_24%),radial-gradient(circle_at_16%_84%,rgba(214,176,78,.12),transparent_28%),linear-gradient(rgba(64,27,140,.7),rgba(64,27,140,.7))]" aria-hidden="true" />
        <img className={`pointer-events-none absolute -bottom-[190px] -z-[1] w-[min(680px,44vw)] select-none opacity-[.07] ${patternSide === "left" ? "-left-[90px]" : "-right-[90px]"}`} src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" />
        {children}
      </section>
    );
  }

  const overlayClass = {
    default: "from-primary-dark/95 via-primary-dark/85 to-primary-dark/50",
    light: "from-primary-dark/75 via-primary-dark/40 to-primary-dark/10",
    clear: "from-primary-dark/20 via-transparent to-transparent",
  }[overlay];

  return (
    <section id={id} className="kbc-page-hero-offset relative isolate flex min-h-[100svh] flex-col bg-primary-dark pb-[clamp(16px,3svh,48px)] text-white" aria-labelledby={titleId}>
      <img src={image} alt="" aria-hidden="true" width={1600} height={900} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${overlayClass}`} aria-hidden="true" />
      {children}
    </section>
  );
}
