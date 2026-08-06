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
  return (
    <div className={`figma-section-heading ${align === "center" ? "is-centered" : ""} !max-w-full`}>
      <span className="figma-eyebrow">{eyebrow}</span>
      <h2 className="!text-4xl sm:!text-5xl xl:!text-[58px]" id={id}>{title}</h2>
      {description && <p className="!text-sm sm:!text-base">{description}</p>}
    </div>
  );
}
