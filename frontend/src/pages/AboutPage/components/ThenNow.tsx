import { ourStoryAsset } from "../assetPath";

// Round 37: persistent scene — the ibis (+ its logo) enters from the left
// and the horse (+ Kent crest) enters from the right, a gold "timeline"
// connector draws itself between the two once the ibis side has fully
// appeared, and the horse side only starts appearing once that connector
// finishes — see initThenNowScrub() in animations/initMain.ts (desktop-only scrub;
// .is-static switches this to the plain stacked mobile fallback via CSS).
export default function ThenNow() {
  return (
    <section className="then-now">
      <div className="then-now__pin" id="thenNowPin">
        <div className="then-now__frame">
          <div className="container">
            <div className="section-head center then-now__head">
              <span className="eyebrow">Then &amp; Now</span>
              <h2>Same purpose New emblem.</h2>
              <p>The transformation was never about leaving the past behind — it was about giving a decade of expertise a bolder identity.</p>
            </div>
          </div>

          <div className="then-now__captions">
            <div className="then-now__copy then-now__copy--then">
              <span className="badge">Then</span>
              <h3>IBIS Consultancy</h3>
              <div className="range">2016 – 2024</div>
              <p>Wisdom · Knowledge · Contemplation — the ibis, symbol of Thoth, represented deep expertise and considered strategy.</p>
            </div>
            <div className="then-now__copy then-now__copy--now">
              <span className="badge">Now</span>
              <h3>Kent Business College</h3>
              <div className="range">2024 – Present</div>
              <p>Strength · Momentum · Empowerment — the Kent horse carries that same wisdom forward, in motion.</p>
            </div>
          </div>

          <div className="then-now__scene">
            <div className="then-now__side then-now__side--then">
              <img className="then-now__logo" src={ourStoryAsset("images/ibis-consultancy-logo-old.webp")} alt="" aria-hidden="true" />
              <img className="then-now__figure" src={ourStoryAsset("images/ibis-then-now.png")} alt="The IBIS Consultancy mascot" />
            </div>

            <div className="then-now__connector" aria-hidden="true">
              <span className="then-now__node then-now__node--start"></span>
              <span className="then-now__connector-line"></span>
              <span className="then-now__node then-now__node--end"></span>
            </div>

            <div className="then-now__side then-now__side--now">
              <img className="then-now__logo" src={ourStoryAsset("images/kent-crest-white.png")} alt="" aria-hidden="true" />
              <img className="then-now__figure" src={ourStoryAsset("images/horse-then-now.png")} alt="The Kent Business College horse emblem" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
