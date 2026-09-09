import { useCmsBindings } from "@/features/cms/publicContent";
export default function VisionMission() {
  const cms = useCmsBindings(["about"]);

  return cms.render((
    <section id="vision-mission" className="vm">
      <div className="container">
        <div className="section-head center vm__head">
          <span className="eyebrow">{cms.text("about.pages_about_page_components_vision_missi_vision_mission.text_001")}</span>
          <h2>{cms.text("about.pages_about_page_components_vision_missi_vision_mission.text_002")}</h2>
        </div>
        <div className="vm__grid">
          <div className="vm__card reveal">
            <h3>{cms.text("about.pages_about_page_components_vision_missi_vision_mission.text_003")}</h3>
            <p>{cms.text("about.pages_about_page_components_vision_missi_vision_mission.text_004")}</p>
          </div>
          <div className="vm__card reveal">
            <h3>{cms.text("about.pages_about_page_components_vision_missi_vision_mission.text_005")}</h3>
            <p>{cms.text("about.pages_about_page_components_vision_missi_vision_mission.text_006")}</p>
          </div>
        </div>
      </div>
    </section>
  ));
}
