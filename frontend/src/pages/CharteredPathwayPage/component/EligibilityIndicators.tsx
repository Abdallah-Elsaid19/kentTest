import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleUserRound,
  FileCheck2,
  House,
  Landmark,
  MapPin,
} from 'lucide-react';

const indicatorIcons = [
  BadgeCheck,
  BriefcaseBusiness,
  House,
  Building2,
  Landmark,
  MapPin,
  FileCheck2,
  CircleUserRound,
  ChartNoAxesCombined,
] as const;

export function EligibilityIndicators({ items }: { items: readonly string[] }) {
  return <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
    {items.map((item, index) => {
      const Icon = indicatorIcons[index % indicatorIcons.length];
      return <li key={item} className="flex min-h-16 items-center gap-4 rounded-xl bg-kbc-purple-50 px-4 py-3 text-sm font-medium leading-6 text-primary-dark">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-[18px]" aria-hidden="true" />
        </span>
        <span>{item}</span>
      </li>;
    })}
  </ul>;
}
