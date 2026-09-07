import type { ReactNode } from "react";

export function CollegeHeroSurface({ image, titleId, children, overlay = "default" }: {
  image: string;
  titleId: string;
  children: ReactNode;
  overlay?: "default" | "light";
}) {
  return (
    <section className="kbc-page-hero-offset relative isolate flex min-h-[100svh] flex-col bg-primary-dark pb-[clamp(16px,3svh,48px)] text-white" aria-labelledby={titleId}>
      <img src={image} alt="" aria-hidden="true" width={1600} height={900} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${overlay === "light" ? "from-primary-dark/75 via-primary-dark/40 to-primary-dark/10" : "from-primary-dark/95 via-primary-dark/85 to-primary-dark/50"}`} aria-hidden="true" />
      {children}
    </section>
  );
}
