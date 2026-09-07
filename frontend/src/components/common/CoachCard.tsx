export interface CoachCardProps {
  name: string;
  image: string;
  bio: string;
  linkedIn: string;
  imageAlt?: string;
}

export function CoachCard({ name, image, bio, linkedIn, imageAlt }: CoachCardProps) {
  return (
    <article className="group flex min-h-full flex-col rounded-2xl border border-kbc-purple-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
      <div className="w-fit rounded-full bg-kbc-purple-50 p-2 transition-colors duration-300 group-hover:bg-kbc-purple-100 motion-reduce:transition-none">
        <img
          src={image}
          alt={imageAlt ?? `${name}, KBC coach`}
          loading="lazy"
          decoding="async"
          className="size-32 rounded-full border-2 border-primary bg-white object-cover object-top p-1 sm:size-36"
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-[var(--color-ink)]">{name}</h3>
        <a
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${name}'s LinkedIn profile`}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-kbc-purple-200 bg-kbc-purple-50 px-4 text-sm font-semibold text-primary transition-colors hover:border-primary/30 hover:bg-primary hover:text-white focus-visible:outline-primary"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">{bio}</p>
    </article>
  );
}
