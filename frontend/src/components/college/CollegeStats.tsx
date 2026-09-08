export function CollegeStats({ items, surface = "soft", compact = false }: {
  items: readonly { label: string; value: string; description?: string }[];
  surface?: "soft" | "white";
  compact?: boolean;
}) {
  return (
    <dl className={`mt-12 grid gap-x-4 gap-y-8 rounded-2xl px-5 py-8 sm:gap-6 sm:px-8 lg:mt-16 ${items.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"} ${surface === "soft" ? "bg-[var(--color-soft)]" : "bg-white"}`}>
      {items.map((stat) => <div key={stat.label} className="flex min-w-0 flex-col-reverse gap-3 text-center"><dt className="text-xs leading-5 text-[var(--color-muted)] sm:text-sm">{stat.label}{stat.description && <span className="mt-2 block">{stat.description}</span>}</dt><dd className={`font-semibold tracking-tight text-primary ${compact ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"}`}>{stat.value}</dd></div>)}
    </dl>
  );
}
