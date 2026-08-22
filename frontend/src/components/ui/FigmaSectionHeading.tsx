export function FigmaSectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const isCentered = align === "center";
  return (
    <div className={`figma-section-heading !max-w-full ${isCentered ? "!mx-auto !text-center" : ""}`}>
      <span className={`figma-eyebrow !text-xs !font-bold !leading-5 !tracking-widest !uppercase ${isCentered ? "!mx-auto !justify-center" : ""}`}>{eyebrow}</span>
      <h2 className="!text-4xl !font-semibold !leading-none !tracking-tight sm:!text-5xl xl:!text-6xl" id={id}>{title}</h2>
      {description && <p className={`!text-sm !leading-relaxed sm:!text-base ${isCentered ? "!mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}
