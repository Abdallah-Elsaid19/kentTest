import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { StoryCard } from "@/pages/StoriesPage/components/CaseStudiesListing";
import { fallbackStories } from "@/pages/StoriesPage/data";

interface LearnerCaseStudiesSectionProps {
  id: string;
  category?: string;
  title?: string;
  description?: string;
}

export function LearnerCaseStudiesSection({
  id,
  category,
  title = "Professional learning, applied through real responsibility.",
  description = "Explore how KBC learners connect professional theory with their day-to-day workplace responsibilities.",
}: LearnerCaseStudiesSectionProps) {
  const stories = (category
    ? fallbackStories.filter((story) => story.category === category)
    : fallbackStories
  ).slice(0, 3);

  return (
    <section id={id} className="scroll-mt-20 bg-white py-16 sm:scroll-mt-32 sm:py-20 xl:py-[108px]" aria-labelledby={`${id}-title`}>
      <div className="figma-shell">
        <FigmaSectionHeading
          id={`${id}-title`}
          eyebrow="Learner case studies"
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => <StoryCard story={story} key={story.id} />)}
        </div>

        <div className="mt-8 flex justify-end">
          <ArrowLink className="!text-sm !font-semibold !leading-5 !text-primary hover:!text-primary-dark" to="/case-studies" direction="up-right">
            View all case studies
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
