import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learningPathways } from "../data";

const pathwayContent = [
  {
    college: "College of Marketing",
    title: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.title_001}}",
    description: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.description_002}}",
    tags: ["{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.tags_003}}", "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.tags_004}}"],
    accent: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.accent_005}}",
  },
  {
    college: "College of Marketing",
    title: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.title_006}}",
    description: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.description_007}}",
    tags: ["{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.tags_008}}", "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.tags_009}}"],
    accent: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.accent_010}}",
  },
  {
    college: "College of Project Controls",
    title: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.title_011}}",
    description: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.description_012}}",
    tags: ["{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.tags_013}}", "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.tags_014}}"],
    accent: "{{cms:case_studies.pages_stories_page_components_learning_p_pathway_content.accent_015}}",
  },
] as const;

export function LearningPathwaysSection() {
  const cms = useCmsBindings(["case_studies"]);
  const cmsValues = cms.resolve({ learningPathways, pathwayContent });

  return cms.render((
    <section className="figma-programmes !bg-kbc-purple-50 !py-16 sm:!py-20 xl:!py-[118px]" aria-labelledby="pathways-title">
      <div className="figma-shell">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)] lg:gap-16">
          <FigmaSectionHeading id="pathways-title" eyebrow={cms.text("case_studies.pages_stories_page_components_learning_p_learning_pathways_section.eyebrow_016")} title={<>{cms.text("case_studies.pages_stories_page_components_learning_p_learning_pathways_section.text_017")}</>} align="left" />
          <p className="max-w-xl text-base leading-7 text-kbc-dark-500">{cms.text("case_studies.pages_stories_page_components_learning_p_learning_pathways_section.text_018")}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cmsValues.learningPathways.map((programme, index) => {
            const content = cmsValues.pathwayContent[index];
            return (
            <article className={`figma-programme-card relative !flex !h-full !flex-col !overflow-hidden !rounded-2xl !border-t-4 ${content.accent}`} key={programme.title}>
              <div className="figma-programme-card__media !h-52"><img src={programme.image} alt="" loading="lazy" /></div>
              <div className="figma-programme-card__body relative z-10 !flex !min-h-80 !flex-1 !flex-col !p-6">
                <span className="min-h-5 text-[10px] font-bold uppercase tracking-[.16em] text-kbc-purple-700">{content.college}</span>
                <h3 className="!mt-5 !min-h-16">{content.title}</h3>
                <p className="!mt-0 !min-h-24">{content.description}</p>
                <div className="figma-programme-card__meta !mt-0 !min-h-10 !items-start">{content.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
                <ArrowLink className="mt-auto" external to={programme.href} direction="up-right">{cms.text("case_studies.pages_stories_page_components_learning_p_learning_pathways_section.text_019")}</ArrowLink>
              </div>
              <span className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full border border-kbc-purple-950/10" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full border border-kbc-purple-950/10" aria-hidden="true" />
            </article>
          );})}
        </div>
      </div>
    </section>
  ));
}
