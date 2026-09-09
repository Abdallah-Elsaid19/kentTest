import { useCmsBindings } from "@/features/cms/publicContent";
import { ourStoryAsset } from "../assetPath";

// Round 37: persistent scene — the ibis (+ its logo) enters from the left
// and the horse (+ Kent crest) enters from the right, a gold "timeline"
// connector draws itself between the two once the ibis side has fully
// appeared, and the horse side only starts appearing once that connector
// finishes — see initThenNowScrub() in animations/initMain.ts (desktop-only scrub;
// .is-static switches this to the plain stacked mobile fallback via CSS).
export default function ThenNow() {
  const cms = useCmsBindings(["about"]);

  return cms.render((
    <section className="then-now">
      <div className="then-now__pin" id="thenNowPin">
        <div className="then-now__frame">
          <div className="container">
            <div className="section-head center then-now__head">
              <span className="eyebrow">{cms.text("about.pages_about_page_components_then_now_then_now.text_001")}</span>
              <h2>{cms.text("about.pages_about_page_components_then_now_then_now.text_002")}</h2>
              <p>{cms.text("about.pages_about_page_components_then_now_then_now.text_003")}</p>
            </div>
          </div>

          <div className="then-now__captions">
            <div className="then-now__copy then-now__copy--then">
              <span className="badge">{cms.text("about.pages_about_page_components_then_now_then_now.text_004")}</span>
              <h3>{cms.text("about.pages_about_page_components_then_now_then_now.text_005")}</h3>
              <div className="range">{cms.text("about.pages_about_page_components_then_now_then_now.text_006")}</div>
              <p>{cms.text("about.pages_about_page_components_then_now_then_now.text_007")}</p>
            </div>
            <div className="then-now__copy then-now__copy--now">
              <span className="badge">{cms.text("about.pages_about_page_components_then_now_then_now.text_008")}</span>
              <h3>{cms.text("about.pages_about_page_components_then_now_then_now.text_009")}</h3>
              <div className="range">{cms.text("about.pages_about_page_components_then_now_then_now.text_010")}</div>
              <p>{cms.text("about.pages_about_page_components_then_now_then_now.text_011")}</p>
            </div>
          </div>

          <div className="then-now__scene">
            <div className="then-now__side then-now__side--then">
              <img className="then-now__logo" src={ourStoryAsset("images/ibis-consultancy-logo-old.webp")} alt="" aria-hidden="true" />
              <img className="then-now__figure" src={ourStoryAsset("images/ibis-then-now.png")} alt={cms.text("about.pages_about_page_components_then_now_then_now.alt_012")} />
            </div>

            <div className="then-now__connector" aria-hidden="true">
              <span className="then-now__node then-now__node--start"></span>
              <span className="then-now__connector-line"></span>
              <span className="then-now__node then-now__node--end"></span>
            </div>

            <div className="then-now__side then-now__side--now">
              <img className="then-now__logo" src={ourStoryAsset("images/kent-crest-white.png")} alt="" aria-hidden="true" />
              <img className="then-now__figure" src={ourStoryAsset("images/horse-then-now.png")} alt={cms.text("about.pages_about_page_components_then_now_then_now.alt_013")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
}
