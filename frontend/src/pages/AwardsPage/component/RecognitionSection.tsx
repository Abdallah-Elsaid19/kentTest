import { useState } from "react";

import { SplitDetailTabs } from "@/components/common/SplitDetailTabs";
import { NavigationTabButton } from "@/components/navigation/NavigationTabButton";
import { containerClass, sectionClass, SectionIntro } from "@/pages/FundingEligibilityPage/components/shared";

import { awardsIntro, recognitionFilters, recognitionGroups, recognitions, type RecognitionFilter } from "../data";

export function RecognitionSection() {
  const [activeFilter, setActiveFilter] = useState<RecognitionFilter>("all");

  return (
    <section className={sectionClass} aria-labelledby="recognition-record-title">
      <div className={containerClass}>
        <SectionIntro id="recognition-record-title" eyebrow={awardsIntro.eyebrow} title={awardsIntro.title} copy={awardsIntro.description} align="center" spaced={false} />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-[#756F79]">{awardsIntro.note}</p>

        <div className="my-10 grid gap-2 sm:flex sm:flex-wrap sm:justify-center" role="group" aria-label="Filter recognition">
          {recognitionFilters.map((filter) => (
            <NavigationTabButton
              key={filter.key}
              active={activeFilter === filter.key}
              aria-pressed={activeFilter === filter.key}
              aria-controls="recognition-results"
              onClick={() => setActiveFilter(filter.key)}
              className="whitespace-normal px-4 py-3 text-xs leading-5 aria-pressed:!border-primary aria-pressed:!bg-primary"
            >
              {filter.label}
            </NavigationTabButton>
          ))}
        </div>

        <div id="recognition-results" className="space-y-16 sm:space-y-20" aria-live="polite" aria-atomic="false">
          {recognitionGroups.map((group) => {
            const items = recognitions.filter((item) => item.group === group.key && (activeFilter === "all" || item.filterGroup === activeFilter));
            if (!items.length) return null;

            return (
              <section key={group.key} aria-labelledby={`${group.key}-title`}>
                <div className="grid gap-4 border-b border-kbc-purple-100 pb-6 lg:grid-cols-2 lg:gap-12">
                  <h3 id={`${group.key}-title`} className="text-2xl font-semibold leading-snug tracking-tight text-primary-dark sm:text-3xl">{group.title}</h3>
                  <p className="max-w-2xl text-sm leading-7 text-[#756F79]">{group.description}</p>
                </div>
                <div className="mt-6">
                  <SplitDetailTabs label={group.title} items={items.map(({ icon: Icon, ...item }) => ({
                    id: item.id,
                    title: item.title,
                    icon: <Icon size={23} aria-hidden="true" />,
                    eyebrow: item.categoryLabel,
                    content: <p>{item.description}</p>,
                    footer: <p className="font-semibold">{item.awardingBody} <span aria-hidden="true">·</span> <time dateTime={item.year}>{item.year}</time></p>,
                  }))} />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
