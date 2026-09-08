import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { section, shell } from "@/components/college/layout";
import { governanceMembers } from "../data";

export function GovernanceMembersSection() {
  return (
    <section
      id="governance-board-members"
      className={`${section} bg-white sm:!scroll-mt-64`}
      aria-labelledby="governance-board-members-title"
    >
      <div className={shell}>
        <header className="mx-auto max-w-4xl">
          <FigmaSectionHeading
            id="governance-board-members-title"
            eyebrow="People and roles"
            title={governanceMembers.title}
            description={governanceMembers.description}
            align="center"
          />
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {governanceMembers.items.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-kbc-purple-100 bg-white shadow-[0_16px_44px_rgba(47,20,104,.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(47,20,104,.12)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative aspect-[1.48/1] overflow-hidden bg-kbc-purple-50">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-kbc-purple-950/55 to-transparent" aria-hidden="true" />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-[11px] font-bold uppercase leading-5 tracking-[0.15em] text-kbc-gold-700">
                  {member.role}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-kbc-purple-950">
                  {member.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
