export function FigmaSectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
}) {
  const isCentered = align === "center";
  const isInverse = tone === "inverse";
  return (
    <div className={`figma-section-heading !max-w-full ${isCentered ? "is-centered !mx-auto !text-center" : ""}`}>
      <span className={`figma-eyebrow after:!bottom-px after:!left-[-14%] after:!h-[10px] after:!w-[128%] after:!translate-x-0 !text-xs !font-bold !leading-5 !tracking-widest !uppercase ${isInverse ? "!text-[#F5C94F]" : "!text-[#401B8C]"} ${isCentered ? "!mx-auto !justify-center" : ""}`}>{eyebrow}</span>
      <h2 className={`!text-2xl !font-semibold !leading-none !tracking-tight sm:!text-5xl xl:!text-4xl ${isInverse ? "!text-white" : ""}`} id={id}>{title}</h2>
      {description && <p className={`!mt-5 !text-sm !leading-relaxed sm:!mt-6 sm:!text-base ${isInverse ? "!text-white/65" : "!text-[#756F79]"} ${isCentered ? "!mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}
