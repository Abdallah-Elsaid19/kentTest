// Round 8: matches the landonorris.com hero composition — a single
// full-bleed subject centered in the viewport, no title/paragraph/CTA copy
// overlaid on it. #heroStage fills the entire hero (see .hero__stage in
// style.css) and #top is what animations/initMain.ts's initHeroCollapse() scales down
// into a bordered box on scroll, crossfading in the marquee section behind
// it (see #heroCollapse below). Real WebGL/Three.js scene lives in
// animations/initHero3d.ts; the cursor "spill" fluid sim lives in animations/initFluidMask.ts —
// both are booted from App.jsx after mount, see that file's useEffect.
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-collapse" id="heroCollapse" aria-hidden="true">
        <div className="hero-collapse__marquee">
          <div className="hero-collapse__row hero-collapse__row--left">
            <span>Kent Business College — Kent Business College — Kent Business College — Kent Business College — </span>
            <span>Kent Business College — Kent Business College — Kent Business College — Kent Business College — </span>
          </div>
          <div className="hero-collapse__row hero-collapse__row--right">
            <span>Kent Business College — Kent Business College — Kent Business College — Kent Business College — </span>
            <span>Kent Business College — Kent Business College — Kent Business College — Kent Business College — </span>
          </div>
        </div>
      </div>

      <div className="hero__inner" id="heroInner">
        <canvas className="hero__canvas" id="heroCanvas"></canvas>
        <div className="hero__glow"></div>
        {/* Round 11: #heroContentScale is a counter-scale wrapper that
            freezes the CONTENT (bird + shield) at whatever size it reached
            at the halfway point, while #heroInner keeps shrinking around it
            — see initHeroCollapse() in animations/initMain.ts. */}
        <div className="hero__contentScale" id="heroContentScale">
          <div className="hero__stage" id="heroStage">
            {/* Two independent-but-linked subjects rendered by animations/initHero3d.ts
                via THREE.Layers — see that file's header comment for the
                full breakdown of heroBird/heroShieldGL. Round 48 dropped
                the third canvas (#heroHelmetWire, a dark-charcoal wireframe
                ghost of the old 3D helmet) along with the helmet itself:
                the hex shield that replaced it assembles itself on load and
                is toggled by a double-click, so there is nothing left for a
                permanent ghost layer to be revealed from. */}
            <canvas className="hero__fluidSim" id="heroFluidCanvas" aria-hidden="true"></canvas>
            <canvas className="hero__bird" id="heroBird" role="img" aria-label="Kent Business College hero portrait — the IBIS bird"></canvas>
            {/* Round 51 — the second depth-mapped portrait, registered
                exactly on top of the bird and revealed ONLY inside the
                cursor's fluid blob, the way the old helmet was: see
                .hero__horse in style.css (which fails CLOSED, unlike the
                shield's layers) and the horse block in animations/initHero3d.ts. */}
            <canvas className="hero__horse" id="heroHorse" aria-hidden="true"></canvas>
            <div className="hero__spillShade" id="heroSpillShade" aria-hidden="true"></div>
            <canvas className="hero__shieldGL" id="heroShieldGL" aria-hidden="true"></canvas>
            <div className="hero__pedestal"></div>
            {/* Visible until both the bird photo+depth map and the shield
                model finish loading — see initHero3d.ts -> noteLoadSettled(). */}
            <div className="hero__loading" id="heroLoading" aria-hidden="true">
              <span className="hero__loading-ring"></span>
              <span className="hero__loading-label">Loading portrait…</span>
            </div>
            {/* Shown only if an asset genuinely fails to load — most
                commonly opening the page via file:// instead of http(s). */}
            <div className="hero__load-notice" id="heroLoadNotice" aria-hidden="true">
              Serve this folder over http(s) to preview the hero portrait — see README
            </div>
          </div>
        </div>
        <div className="hero__goldOverlay" id="heroGoldOverlay" aria-hidden="true"></div>
      </div>
      <div className="hero__scroll" id="heroScrollCue"><span>Scroll</span><span className="line"></span></div>
    </header>
  );
}
