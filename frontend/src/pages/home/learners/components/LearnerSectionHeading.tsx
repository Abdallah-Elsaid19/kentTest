export function LearnerSectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="learner-section-heading !flex-col !items-start !gap-5 md:!gap-8 xl:!flex-row xl:!items-end">
      <div className="w-full xl:max-w-[760px]">
        <span className="learner-eyebrow">{eyebrow}</span>
        <h2 className="!text-4xl sm:!text-5xl xl:!text-[68px]" id={id}>{title}</h2>
      </div>
    </div>
  );
}
