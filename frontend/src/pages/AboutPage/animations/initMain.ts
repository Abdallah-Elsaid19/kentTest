/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- Ported graphics engine behind a typed React adapter.
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ========================================================================== 
   Kent Business College — "Who We Are" interactions
   - Lenis smooth scroll, wired to GSAP's ticker + ScrollTrigger
   - Nav scroll state + mobile drawer
   - GSAP scroll reveals (.reveal cards, value/leader tiles) + animated
     Impact-section counters (count up once, stay put — see below)
   - Hero: the real 3D character + camera dolly + mouse "grab" rotation +
     cursor "spill" spotlight all live in animations/initHero3d.ts, a separate ES module
   - Cinematic story section: pins #story-cinematic for a long scroll (the
     full company timeline plays out here — see initCinematicScrub()),
     scrubbing the video's playback position 1:1 with scroll and
     crossfading caption cards over it. Both edges are hard cuts, no
     fades — entry hands off from the hero's own extended pin/freeze (see
     initHeroCollapse()), exit into .then-now the same way #partners hands
     off into the fixed footer.
   - Section transitions: landonorris.com-style shrink-out/grow-in scrub
     crossfade applied between every major section
   - Custom cursor + a comfort vignette fixed to the very top/bottom of the
     viewport — see initCustomCursor() and .scroll-vignette in style.css
   ========================================================================== */

// Round 41 (React/Vite port): this used to be a bare
// `document.addEventListener("DOMContentLoaded", () => {...})` — under a
// bundler-free static page, initMain.ts ran as the last classic script in
// <body>, so DOMContentLoaded was still guaranteed to fire *after* this
// listener was registered. In the React app, all of this markup is
// rendered by React itself, and DOMContentLoaded may already have fired
// (or is racing) well before React finishes mounting it — so the listener
// pattern can no longer be relied on. Exported as a plain function instead,
// called once from a useEffect in page.tsx right after the initial
// render (i.e. once every element below is guaranteed to already be in the
// DOM), which is the exact same guarantee DOMContentLoaded used to give.
// Nothing inside this function was changed.
export function initMain() {
  gsap.registerPlugin(ScrollTrigger);
  const existingTriggers = new Set(ScrollTrigger.getAll());
  let tickerCallback = null;

  const isDesktop = () => window.matchMedia("(min-width: 960px)").matches;

  // A global ScrollTrigger.refresh() recalculates every trigger's start/end
  // pixel positions — including any that are *currently pinned and mid-
  // scrub* (e.g. the cinematic video pin). If the page's
  // layout has shifted slightly since that trigger was created (a late-
  // loading font, image, or 3D asset), a refresh can shift its start/end,
  // which changes what scroll progress maps to for the *same* scroll
  // position — visible as a sudden jump in whatever that trigger drives,
  // even though nothing in that trigger's own code changed. Since the
  // handful of refreshes this page needs (video metadata ready, window
  // `load`) aren't time-critical, just skip them entirely while any pin is
  // active rather than risk disrupting it — layout is effectively already
  // settled by the time anything is actively pinned anyway.
  function safeRefresh() {
    if (ScrollTrigger.getAll().some((t) => t.isActive)) return;
    ScrollTrigger.refresh();
  }

  /* ------------------------------- Lenis ---------------------------------
     Smooth scroll wrapper (no custom scroll container needed — it smooths
     the native window scroll in place). Wired to GSAP's ticker so it stays
     perfectly in sync with every ScrollTrigger (hero dolly, the cinematic
     pin, section transitions) instead of drifting out of phase with native
     scroll events. */
  let lenis = null;
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    lenis = new Lenis({
      // Round 8: raised from 1.1 and given a slower-tailed exponential
      // easing (rather than Lenis' default) per feedback that letting go of
      // the scroll should keep gliding a little further before settling —
      // a "slippery" momentum feel — instead of stopping close to
      // immediately. The exponential-out curve is the standard Lenis
      // recipe for this: fast to respond at the start of the ease, but with
      // a long, gentle tail rather than a hard stop.
      //
      // Round 9: pushed further still (1.65 -> 2.1, plus a touch of
      // wheelMultiplier) per feedback asking for a longer, more obvious
      // glide "like premium sites" rather than the more subtle Round 8
      // amount. wheelMultiplier stays modest (1.15, not 1.5+) so a single
      // wheel tick still travels a sensible distance — the extra glide
      // comes from the longer duration/tail, not from over-amplifying raw
      // input.
      duration: 2.1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      syncTouch: false // native touch scroll feel on mobile/tablet
    });
    lenis.on("scroll", ScrollTrigger.update);
    tickerCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis; // exposed so initHero3d.ts / tests can read scroll state if needed
  }

  /* ---------------------------- Nav behaviour ---------------------------- */
  const nav = document.getElementById("nav");
  const drawer = document.getElementById("navDrawer");
  const navToggle = document.getElementById("navToggle");
  const navClose = document.getElementById("navClose");
  const drawerLinks = drawer ? Array.from(drawer.querySelectorAll("a")) : [];
  const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
  const openDrawer = () => drawer?.classList.add("open");
  const closeDrawer = () => drawer?.classList.remove("open");

  if (nav) {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  navToggle?.addEventListener("click", openDrawer);
  navClose?.addEventListener("click", closeDrawer);
  drawerLinks.forEach((link) => link.addEventListener("click", closeDrawer));

  /* ------------------------ Smooth same-page anchor nav -------------------
     Clicking "Our Story" jumps straight to #story-cinematic's own pin start
     ("top top") by default — landing exactly on the video's very first
     frame (progress 0) rather than showing the story actually underway,
     which is a weaker landing spot for a nav link than a few seconds into
     it. Two independent fixes:
       1. SAFE_ANCHOR_OFFSET nudges specific targets (currently just
          #story-cinematic) a bit further into their own pin, so the link
          lands with the video already playing.
       2. Every #anchor click still animates via Lenis' scrollTo (native
          smooth scrollIntoView as the no-Lenis/reduced-motion fallback)
          rather than the browser's default instant jump, so any OTHER
          scroll-linked effect along the way gets its normal incremental
          onUpdate sequence — the same as a real scrolling gesture — instead
          of a single frame-skipping jump. */
  const SAFE_ANCHOR_OFFSET = {
    "story-cinematic": () => window.innerHeight * 0.3
  };

  function initSmoothAnchorNav() {
    function scrollToId(id) {
      const target = document.getElementById(id);
      if (!target) return;
      const offset = SAFE_ANCHOR_OFFSET[id] ? SAFE_ANCHOR_OFFSET[id]() : 0;
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.6, offset });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      if (!id || !document.getElementById(id)) return;
      link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToId(id);
        history.pushState(null, "", `#${id}`);
      });
    });

    // Same hazard applies to a direct deep-link on load (e.g. a bookmarked
    // yoursite.com/#story-cinematic URL) — the browser's own initial
    // hash-jump is just as instant. Re-run the same scroll once everything
    // below has finished setting up its ScrollTriggers.
    if (location.hash && document.getElementById(location.hash.slice(1))) {
      const id = location.hash.slice(1);
      window.scrollTo(0, 0);
      window.addEventListener("load", () => scrollToId(id));
    }
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  initSmoothAnchorNav();

  /* =========================================================================
     HERO COLLAPSE — the landonorris.com-style "shrink into a box, reveal a
     marquee behind it" hand-off, pinned for one deliberate scroll distance
     right at the very top of the page.

     #top (the hero <header>) is the pin target and is NEVER itself
     transformed — see the CSS comment on .hero__inner for why (pinning +
     scaling the same element invites layout jitter). #heroInner (bg +
     ambient scene + the bird/helmet stage) is what actually scales down
     into a rounded, shadowed box; #heroCollapse sits behind it at z-index 0
     and is covered completely at scale(1), so shrinking #heroInner is all
     it takes to reveal it — no separate "reveal" tween needed for that
     part. The marquee TEXT's own opacity is a separate ramp (faint at rest
     -> full strength by SHRINK_END), driven by the exact same progress
     value so the two effects can never drift out of sync with each other.

     Round 9 additions, both still driven by the SAME `eased` value so
     nothing can drift out of sync with the shrink itself:
       - #heroInner's background-color crossfades from --off-white to the
         pale --hero-gold-light as the box shrinks — the hero doesn't just
         get smaller, it visibly "settles" into a warmer, quieter card by
         the time it's done.
       - window.__heroCollapseProgress is written every tick as a plain 0..1
         number so animations/initHero3d.ts's animate() loop (a completely separate
         module, with no direct reference to this ScrollTrigger) can ease
         the bird/helmet's mouse-driven rotation and the cursor spill radius
         both down to zero by the same point, and back up on scroll-up — a
         global was the simplest way to share one continuously-updating
         value across two independent modules without wiring a custom event
         for something read every animation frame anyway.

     Skipped entirely on mobile/tablet, same rationale as
     initCinematicScrub()'s own mobile fallback: a long pin is exactly the
     kind of effect that reads as janky on small/underpowered devices, and
     there's no hover-driven reason it's needed there either — the hero
     just displays normally and #heroCollapse, never revealed, stays inert
     in the DOM. window.__heroCollapseProgress is simply never written in
     that case, which initHero3d.ts's `|| 0` fallback already treats as "no
     collapse in progress."
     ========================================================================= */
  function initHeroCollapse() {
    const pinEl = document.getElementById("top");
    const inner = document.getElementById("heroInner");
    const contentScale = document.getElementById("heroContentScale");
    const goldOverlay = document.getElementById("heroGoldOverlay");
    const collapseEl = document.getElementById("heroCollapse");
    const marquee = collapseEl ? collapseEl.querySelector(".hero-collapse__marquee") : null;
    const scrollCue = document.getElementById("heroScrollCue");
    const cinematicEl = document.getElementById("story-cinematic");
    if (!pinEl || !inner || !contentScale || !marquee) return;

    // Mobile and tablet use a short, unpinned version of the hero hand-off.
    // It keeps the visual motion without the long pinned scroll sequence that
    // is expensive and awkward on touch screens.
    if (!isDesktop()) {
      if (prefersReducedMotion) return;
      gsap.fromTo(inner,
        { scale: 1, y: 0, borderRadius: 0 },
        {
          scale: 0.92,
          y: -20,
          borderRadius: 22,
          ease: "none",
          scrollTrigger: {
            trigger: pinEl,
            start: "top top",
            end: "bottom top",
            scrub: 0.35
          }
        }
      );
      gsap.fromTo(marquee,
        { opacity: 0 },
        {
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: pinEl,
            start: "top top",
            end: "70% top",
            scrub: 0.35
          }
        }
      );
      if (scrollCue) {
        gsap.to(scrollCue, {
          opacity: 0,
          y: 12,
          ease: "none",
          scrollTrigger: {
            trigger: pinEl,
            start: "top top",
            end: "35% top",
            scrub: 0.25
          }
        });
      }
      safeRefresh();
      return;
    }

    // Tuned by eye — see README "Round 8"/"Round 9" if these ever need
    // revisiting: SHRINK_END is the fraction of the PIN's own scroll
    // distance (not the whole page) by which the box has finished shrinking
    // and the marquee is at full strength; everything from there to the
    // pin's end is just a short hold so the fully-revealed state doesn't
    // instantly hand off the moment it arrives. SCALE_END/RADIUS_END are the
    // box's final scale/corner-radius; PIN_LENGTH is how much scrolling the
    // whole hand-off takes — Round 9 stretched this from +=130% to +=240%
    // per feedback that reaching the fully-shrunk state should take
    // noticeably longer/more deliberate scrolling.
    //
    // Round 9 fix: stretching PIN_LENGTH alone didn't actually deliver a
    // longer-feeling shrink — the ease-out-cubic below front-loads almost
    // the entire visual transition into the first ~20-30% of the shrink
    // phase (e.g. at 30% of the way through, it was already 66% shrunk),
    // so the box still snapped down fast and then just sat there holding
    // for the rest of the now-longer scroll. Bumped SHRINK_END up (less
    // dead holding time, more of the pin spent actively transitioning) and
    // swapped the easing for a smoothstep ease-in-out, which spreads the
    // visible change roughly evenly across the whole scroll distance
    // instead of dumping it all at the start.
    //
    // Round 10 fix: SHRINK_END=0.9 still left a static 10% hold (~65-200px of
    // scroll, depending on viewport) where the box sat frozen before the pin
    // actually released into #story-cinematic's own entry blend — exactly the
    // "pause, then starts fresh" feeling reported. Pushed to 1 (no hold at
    // all): the shrink finishes settling EXACTLY as the pin releases, so it
    // flows straight into the next section's own scroll-driven entry with no
    // dead scroll distance in between.
    //
    // Round 27: brought back down to 0.6 so #top sits fully frozen, fixed in
    // place for a beat once the shrink settles — a genuine freeze-frame, per
    // the brief ("لما الهيرو يخلص ويصغر يبقى fixed") — before #story-cinematic
    // rises to cover it (plain document flow — see the PIN_LENGTH comment
    // below for the math).
    //
    // Round 33: pushed to 0.8 per direct feedback that the freeze-then-rise
    // read as a dead, empty stretch of scrolling rather than a deliberate
    // beat — measured live (see the Playwright harness notes in the
    // PIN_LENGTH comment below), the video section's first visible pixel
    // didn't appear until a full extra viewport-height of scroll *after*
    // the shrink had already finished. Raising SHRINK_END (together with
    // shortening PIN_LENGTH below, in the same proportion so the shrink's
    // own absolute scroll distance — and therefore its speed/feel — is
    // unchanged) simply leaves less of the pin *after* SHRINK_END for that
    // gap to hide in.
    const SHRINK_END = 0.8;
    // Round 11: pulled in further (0.4 -> 0.25) specifically to give the new
    // two-phase crop (see CONTENT_FREEZE_SP below) enough room to actually
    // read as a crop. The content freezes at whatever scale the FRAME has
    // reached at the halfway point (0.5 progress -> frame scale 0.625 at
    // this SCALE_END), then the frame keeps shrinking all the way to
    // SCALE_END while the content holds there — so the effective zoom-crop
    // ratio by the end is frameScaleAtHalfway / SCALE_END. At the old 0.4
    // that ratio was only ~1.75x (barely a visible crop — the old value was
    // tuned before this crop mechanic existed, purely for the small box's
    // own resting size); at 0.25 it's ~2.5x, which combined with the
    // top-biased transform-origin on #heroContentScale (see style.css)
    // actually crops down to roughly eye-height by the end, matching the
    // brief's explicit target end state.
    const SCALE_END = 0.25;
    // Round 11: corners are now sharp/hard right angles, not rounded, per
    // direct feedback — was 34.
    const RADIUS_END = 0;
    // Round 27: stretched from +=240% to +=400% to make room for the
    // "hero freezes, #story-cinematic rises to cover it" hand-off (see the
    // SHRINK_END comment above).
    //
    // Round 33: pulled back in to +=300% (paired with SHRINK_END's bump to
    // 0.8 above) — 0.8 * 300% = 240%, the exact same absolute shrink
    // distance +=400%/0.6 used to give, so the shrink itself is untouched.
    // What shrank is the *remainder*: riseP (below) still ramps
    // #story-cinematic's translateY from 0 to -100vh across (1-SHRINK_END)
    // of the pin, but that's now only 20% of a 300% pin (60%, 0.6
    // viewport-heights) instead of 40% of a 400% pin (160%, 1.6
    // viewport-heights) — and the shorter total pin also means
    // #story-cinematic's natural (untransformed) document position sits
    // that much closer to the viewport to begin with, so translateY has
    // less ground to make up. Verified against a live scroll trace
    // (Playwright, stepping scrollY and reading each frame's actual
    // getBoundingClientRect()) rather than by the formula alone: the video
    // section's first visible pixel used to lag a full viewport-height
    // behind the shrink finishing, reading as dead scroll; it now follows
    // within ~0.3 viewport-heights and is fully covering within ~0.6 — much
    // tighter, but still an eased reveal rather than a hard instant cut. If
    // this ever needs retuning again, that live-trace measurement is the
    // thing to repeat, not just eyeballing the constants.
    //
    // The general shape, for whatever these get retuned to next: with #top
    // pinned + pin-spaced for L viewport-heights total, #story-cinematic
    // (the next element in flow, height >= 100vh) starts touching the
    // viewport's bottom edge once the remaining pin distance drops to
    // exactly one viewport height — i.e. at progress 1 - 1/L — and finishes
    // rising fully into place exactly at progress 1, when the pin releases
    // (standard pinSpacing behaviour: the next element's top edge lands
    // exactly at the viewport's top the instant a pin ends). No manual
    // transform needed for the "rise" itself — it's pure normal document
    // flow once #story-cinematic has a higher z-index than the pinned,
    // fixed hero (see .story-cinematic in style.css); riseP below just
    // pulls that natural rise earlier so it isn't hidden entirely behind
    // the still-pinned hero until the last possible moment.
    const PIN_LENGTH = "+=300%";

    // Round 11 — the two-phase zoom-out redesign. Per feedback: the FIRST
    // half of the scroll-driven zoom-out should work exactly as before (the
    // whole section — frame AND content together — shrinks, revealing the
    // marquee behind it); in the SECOND half, only the section's OUTER
    // FRAME (#heroInner) should keep shrinking, while the CONTENT inside
    // (#heroContentScale — the bird, the helmet, everything in the stage)
    // stops shrinking and holds at whatever size it reached at the halfway
    // point, so the still-closing frame reads as a window cropping into
    // now-fixed-size content, ending on just the bird's eye and the top of
    // its head. CONTENT_FREEZE_SP is expressed in the same raw 0..1 scroll-
    // progress fraction as `sp` below (i.e. literally "half of the zoom-out
    // scroll distance"), not the eased value.
    const CONTENT_FREEZE_SP = 0.5;
    // How much of the visible scene the gold tint should cover during the
    // exit, per feedback that it needed to cover the ENTIRE scene — the
    // bird included — not just the backdrop around it (see #heroGoldOverlay
    // in React component markup/style.css, a plain sibling painted over everything
    // inside #heroInner regardless of z-index nesting further down). Capped
    // below 1 so the frozen content is tinted, not fully blotted out, right
    // up to the final crop.
    const GOLD_OVERLAY_MAX_OPACITY = 0.55;

    // Hero-bg -> pale gold background crossfade, in step with the shrink
    // (see --hero-bg / --hero-gold-light in style.css — kept in sync with
    // those exact RGB triples by hand, since CSS custom properties can't be
    // read back as numbers for a JS lerp without an extra getComputedStyle
    // round-trip on every tick). Round 10: BG_FROM is now landonorris.com's
    // own measured background color (252,252,250 — sampled directly off
    // their site) rather than the site's general --off-white, per feedback
    // asking for an exact match.
    const BG_FROM = [252, 252, 250];
    const BG_TO = [231, 211, 163];
    const lerp = (a, b, t) => a + (b - a) * t;

    ScrollTrigger.create({
      trigger: pinEl,
      start: "top top",
      end: PIN_LENGTH,
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate(self) {
        const sp = Math.min(self.progress / SHRINK_END, 1);
        // Smoothstep ease-in-out: gentle at both ends, roughly linear through
        // the middle — the shrink now tracks scroll distance evenly instead
        // of front-loading almost all the visible motion into the first
        // third of the gesture (see the comment on SHRINK_END above).
        const smoothstep = (t) => t * t * (3 - 2 * t);
        const eased = smoothstep(sp);

        // Round 11: the CONTENT's own eased value is the exact same
        // smoothstep curve, just fed a progress input clamped at
        // CONTENT_FREEZE_SP — so up to the halfway point contentEased and
        // eased are identical (continuous, no jump), and past it
        // contentEased holds flat at smoothstep(CONTENT_FREEZE_SP) while
        // `eased` (driving the frame) keeps climbing to 1.
        const contentEased = smoothstep(Math.min(sp, CONTENT_FREEZE_SP));

        const scale = 1 - eased * (1 - SCALE_END);
        inner.style.transform = `scale(${scale})`;
        inner.style.borderRadius = eased * RADIUS_END + "px";
        inner.style.boxShadow =
          `0 ${eased * 40}px ${eased * 90}px rgba(0,0,0,${eased * 0.55}), ` +
          `0 0 0 ${eased * 2}px rgba(255,255,255,${eased * 0.14})`;
        inner.style.backgroundColor =
          `rgb(${Math.round(lerp(BG_FROM[0], BG_TO[0], eased))}, ` +
          `${Math.round(lerp(BG_FROM[1], BG_TO[1], eased))}, ` +
          `${Math.round(lerp(BG_FROM[2], BG_TO[2], eased))})`;

        // Round 11: the actual "window cropping into frozen content" trick —
        // nested CSS transforms compose multiplicatively, so giving the
        // content wrapper a counter-scale of (its own target scale) /
        // (the frame's current scale) makes its EFFECTIVE on-screen size
        // follow contentEased's frozen-after-halfway curve, independent of
        // how far the frame itself has shrunk beyond that point. Guarded
        // against a near-zero frame scale (SCALE_END=0.25 keeps this in
        // practice well clear of zero, but cheap insurance against a
        // divide-by-near-0 spike if that constant ever changes).
        const contentTargetScale = 1 - contentEased * (1 - SCALE_END);
        const counterScale = scale > 0.0001 ? contentTargetScale / scale : 1;
        contentScale.style.transform = `scale(${counterScale})`;

        if (goldOverlay) goldOverlay.style.opacity = String(eased * GOLD_OVERLAY_MAX_OPACITY);

        marquee.style.opacity = String(eased);
        if (scrollCue) scrollCue.style.opacity = String(Math.max(1 - self.progress * 4, 0));

        // Round 11: this now also drives a hard freeze (not just a fade) of
        // the mouse-driven rig rotation, the wireframe reveal/hide cycle,
        // and the cursor spill mask inside initHero3d.ts — see the `frozen`
        // check in that file's animate() — so the whole scene reads as
        // turning into a static photo for the entire zoom-out, not just
        // easing calmer as it goes.
        window.__heroCollapseProgress = eased;

        // Round 27: #story-cinematic rising to cover the now-frozen hero.
        // riseP only starts advancing once the shrink itself (SHRINK_END)
        // is done, so the freeze genuinely registers before anything moves
        // again — then ramps a plain translateY from 0 to -100vh over the
        // rest of this same pin.
        //
        // Why -100vh specifically, and why it's safe regardless of how
        // SHRINK_END/PIN_LENGTH ever get retuned: GSAP's pinSpacing always
        // sizes a pinned element's spacer as (that element's own natural
        // height) + (end - start) — #top is exactly 100vh tall (see
        // .hero in style.css) — so #story-cinematic's natural, undisturbed
        // top position is ALWAYS exactly 100vh below the viewport's top
        // the instant this pin releases (self.progress hits 1), no matter
        // how long PIN_LENGTH is. Cancelling exactly that fixed 100vh gap
        // with this transform is what makes #story-cinematic land flush
        // with the viewport top — fully covering — at the exact instant
        // #top unpins, rather than sitting 100vh short of it. The second
        // ScrollTrigger right below picks up from -100vh and eases that
        // same transform back to 0 over the next real (unpinned) 100vh of
        // scroll, matching #story-cinematic's own natural approach 1:1 —
        // both evaluate to translateY(-100vh) at the exact handoff instant,
        // so there's no seam between the two.
        if (cinematicEl) {
          const riseP = Math.max(0, (self.progress - SHRINK_END) / (1 - SHRINK_END));
          cinematicEl.style.transform = `translateY(${-riseP * 100}vh)`;
        }
      }
    });

    // Round 35: the "continues the exact same rise for the final, natural
    // 100vh of scroll after #top's pin releases" ScrollTrigger that used to
    // live here has moved into initCinematicScrub() below — it now ALSO
    // drives the video/captions during that same range (see the "entry"
    // ScrollTrigger there), instead of leaving the video frozen on frame 0
    // while visibly sliding into view. Kept as one function's responsibility
    // rather than split across two so the video-timeline math (entry share
    // vs. pin share) stays in one place.

    safeRefresh();
  }

  initHeroCollapse();

  /* ------------------------------ Reveals -------------------------------- */
  // Partner logos get their own batched reveal below — excluded here so
  // they don't ALSO get 48 individual ScrollTriggers from this loop.
  gsap.utils.toArray(".reveal:not(.partner-tile)").forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: (i % 3) * 0.05,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

  /* Partners grid — batched + staggered reveal. The loop above would give
     each of the ~48 partner-tile logos its own independent ScrollTrigger +
     tween; since they all sit in the same grid, most cross the "top 90%"
     line within the same couple of scroll frames the first time this
     section comes into view, so ~48 tweens (plus that many lazy-loaded
     images decoding) were firing in a tight burst — that pile-up is what
     read as jank. ScrollTrigger.batch() coalesces whichever tiles cross
     the threshold in the same tick into ONE stagger tween instead, and
     since it still checks each tile's own position, tiles further down
     the grid naturally cross the line — and animate in — a beat later
     than the ones above them, so the whole grid fills top-to-bottom as
     you scroll rather than popping in all at once. `once: true` since
     this only needs to play the first time each tile appears. */
  ScrollTrigger.batch(".partner-tile", {
    start: "top 90%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06
      });
    }
  });

  /* --------------------------- Stat counters ------------------------------
     Counts smoothly from 0 up to the target once the Impact section scrolls
     into view, and — `once: true` below — never restarts: scrolling away
     and back leaves the final number in place rather than re-counting. */
  document.querySelectorAll(".stat__num").forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val) + suffix;
          }
        });
      }
    });
  });

  /* =========================================================================
     CINEMATIC STORY SCRUB — pins #story-cinematic and drives the placeholder
     (later: real AI-generated) video's playback position directly from
     scroll progress, crossfading caption cards (the full company timeline)
     over it in sync. Desktop/tablet: a long pinned scrub, exactly like the
     landonorris.com reference. Mobile: no pin (avoids pin jank on small
     screens) — the video just autoplays/loops muted and captions are static
     stacked cards, consistent with the mobile fallback pattern used
     elsewhere on this page.

     The pin is deliberately LONG (see PIN_LENGTH below) — real scrolling is
     intermittent (a few wheel/trackpad gestures with pauses between), not
     one continuous multi-minute gesture, and this section now carries the
     entire company story (founding through today), so it needs a scroll
     *distance* generous enough that the natural, paused way people actually
     scroll adds up to a proper amount of time here — not a distance tuned
     for someone scrolling through it in one uninterrupted motion.

     Round 27: both edges of this section are now hard cuts, no fades —
     matching how #partners hands off into the fixed footer:
     - Entry: used to be a small/rounded "grow-in" (#cinematicVideoFrame
       scaling + fading up from 35%) crossfaded with a gradient blend
       overlay as the pin engaged. Removed both — the frame now simply
       renders at its natural full-size/full-opacity CSS state from the
       very first frame. The actual hand-off is handled entirely by
       initHeroCollapse() in the HERO COLLAPSE block above: #top is now
       pinned/fixed well past the point its shrink finishes, and
       #story-cinematic — given a higher z-index in style.css — simply
       rises up to cover it via plain document flow once #top's pin-spacer
       runs out, no scale/opacity animation of its own involved at all.
     - Exit (Round 24): likewise just a hard cut — #cinematicFrame stays
       fully opaque for the whole scrub, and .then-now (the next section)
       has its own entrance fade disabled too (see `entrance: false` in the
       initSectionTransitions call below), so nothing fades on either side
       of that boundary either.
     - PIN_LENGTH is a single tunable — see the comment on it below for how
       to adjust once the real video's final length is known.
     ========================================================================= */
  function initCinematicScrub() {
    const pinEl = document.getElementById("cinematicPin");
    const video = document.getElementById("cinematicVideo");
    const captions = gsap.utils.toArray(".story-cinematic__caption");
    const muteBtn = document.getElementById("cinematicMute");
    if (!pinEl || !video) return;

    if (muteBtn) {
      muteBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        if (!video.muted) video.play?.().catch(() => {});
        muteBtn.classList.toggle("is-unmuted", !video.muted);
        muteBtn.setAttribute("aria-pressed", String(!video.muted));
        muteBtn.setAttribute("aria-label", video.muted ? "Unmute the video" : "Mute the video");
      });
    }

    if (!isDesktop()) {
      video.setAttribute("loop", "");
      video.setAttribute("autoplay", "");
      video.play?.().catch(() => {});
      captions.forEach((c) => c.classList.add("is-static"));
      if (!prefersReducedMotion) {
        gsap.fromTo(video,
          { scale: 1.06, opacity: 0.72 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: pinEl, start: "top 88%", once: true }
          }
        );
        captions.forEach((caption, index) => {
          gsap.fromTo(caption,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: Math.min(index * 0.04, 0.16),
              ease: "power3.out",
              scrollTrigger: { trigger: caption, start: "top 88%", once: true }
            }
          );
        });
        safeRefresh();
      }
      return;
    }

    // How much scroll distance the pin spans, as a percentage of one
    // viewport height (GSAP's "+=N%" shorthand). This does NOT need to
    // change when the real video's length changes — video.currentTime is
    // always read live from video.duration below, so any video duration
    // scrubs correctly at whatever pace this distance sets. Tune this
    // purely for *feel* (how much scrolling it takes to get through the
    // story): raise it for a slower scrub, lower it for a faster one. Each
    // 100% is roughly one extra viewport-height of scrolling.
    const PIN_LENGTH = "+=900%";

    function setActiveCaption(progress) {
      // N captions -> N equal slots, with a soft crossfade band at each
      // boundary. Adding/removing .story-cinematic__caption elements in the
      // HTML needs no change here — captions.length drives this.
      const slot = progress * captions.length;
      captions.forEach((c, i) => {
        const dist = Math.abs(slot - (i + 0.5));
        const opacity = Math.max(0, 1 - dist / 0.65);
        c.style.opacity = String(opacity);
        c.classList.toggle("is-active", opacity > 0.5);
      });
    }

    function runScrub() {
      // Round 34: setting video.currentTime is a real (async) seek, not a
      // free property write — the decoder has to walk forward from the
      // nearest earlier keyframe through every frame in between to land on
      // an arbitrary time. story-placeholder.mp4/.webm used to ship with
      // keyframes 4-7.5s apart, so every scroll tick during this scrub
      // could trigger a multi-second decode chain — that's what read as
      // the video stuttering/hanging and falling behind the scroll rather
      // than tracking it. Both files now carry a tight ~0.5s keyframe
      // interval (re-encoded with ffmpeg -g/-keyint_min ~15 at 30fps) so
      // any seek only ever has a handful of frames to walk — any future
      // replacement video needs the same treatment or this regresses.
      // `lastTime` below additionally skips re-issuing a seek to a time
      // that's already (sub-frame) where the video is, since scrub's
      // onUpdate fires on every rAF tick and an identical seek is pure
      // waste; fastSeek (where supported — notably Safari, not Chromium)
      // trades a little precision for a cheaper, less exact seek than
      // currentTime, which is the right trade for a value that's about to
      // be corrected again on the very next tick anyway.
      let lastTime = -1;
      const seek = (t) => {
        if (Math.abs(t - lastTime) < 1 / 60) return;
        lastTime = t;
        if (typeof video.fastSeek === "function") video.fastSeek(t);
        else video.currentTime = t;
      };
      function driveAt(globalProgress) {
        if (video.duration) seek(globalProgress * video.duration);
        setActiveCaption(globalProgress);
      }

      // Round 35: #story-cinematic used to spend the whole hand-off from
      // #top's pin (see initHeroCollapse's translateY comment) visibly
      // sliding into view while the video sat frozen on frame 0 — it only
      // started actually scrubbing once fully pinned ("top top"), which per
      // direct feedback read as the video staying static despite the page
      // clearly still scrolling. Folded that entry range into this same
      // scrubbed timeline instead of leaving it purely cosmetic: this
      // ScrollTrigger (not pinned — #story-cinematic just rides the normal,
      // natural 1:1 scroll for this one viewport-height, "top bottom" to
      // "top top" always spans exactly that by definition) drives the
      // FIRST slice of video/caption progress, sized by ENTRY_SHARE — its
      // proportion of the combined entry+pin scroll distance — so that at
      // the exact instant the pin below engages (entry progress 1), its own
      // starting globalProgress (ENTRY_SHARE) is already exactly where this
      // one left off. No seam, no jump, and the video is already moving
      // before the section has even finished arriving.
      const pinVh = parseFloat(PIN_LENGTH.replace("+=", "")) / 100;
      const ENTRY_SHARE = 1 / (1 + pinVh);
      const cinematicEl = document.getElementById("story-cinematic");
      if (cinematicEl) {
        ScrollTrigger.create({
          trigger: pinEl,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate(self) {
            const p = self.progress;
            cinematicEl.style.transform = p < 1 ? `translateY(${-(1 - p) * 100}vh)` : "";
            driveAt(p * ENTRY_SHARE);
          }
        });
      }

      ScrollTrigger.create({
        trigger: pinEl,
        start: "top top",
        end: PIN_LENGTH,
        pin: true,
        pinSpacing: true,
        scrub: true,
        onUpdate(self) {
          driveAt(ENTRY_SHARE + self.progress * (1 - ENTRY_SHARE));
        }
      });

      safeRefresh();
    }

    if (video.readyState >= 1) {
      runScrub();
    } else {
      video.addEventListener("loadedmetadata", runScrub, { once: true });
    }
  }

  initCinematicScrub();

  /* =========================================================================
     THEN & NOW — a second scroll-pinned/scrubbed reveal, same family as
     CINEMATIC STORY SCRUB above but simpler (no video). Round 37, per
     direct feedback with a reference screenshot: unlike a first pass at
     this (crossfading "Then" out as "Now" faded in), NOTHING disappears
     here — both sides accumulate and stay on screen. Sequence: the ibis (+
     its logo) enters from the left; once it's fully settled, a gold
     "timeline" connector (a node at each end, a line drawn between them)
     forms between the two sides; once THAT finishes, the horse (+ Kent
     crest) enters from the right. The section stays pinned until all of it
     has played, then releases into #vision-mission like any other section
     boundary.

     No entry-share merge is needed here the way initCinematicScrub() needed
     one for the hero hand-off — #story-cinematic's own pin ends flush
     against this section (Round 24's "hard cut", see the HTML comment on
     .then-now), so this section's own pin engages with no dead scroll
     before it, and the ibis begins entering from progress 0 — see PHASES
     below, nothing is gated behind an empty hold at the very start.
     ========================================================================= */
  function initThenNowScrub() {
    const pinEl = document.getElementById("thenNowPin");
    const section = pinEl ? pinEl.closest(".then-now") : null;
    if (!pinEl || !section) return;

    const ibisFigure = section.querySelector(".then-now__side--then .then-now__figure");
    const ibisLogo = section.querySelector(".then-now__side--then .then-now__logo");
    const ibisCopy = section.querySelector(".then-now__copy--then");
    const horseFigure = section.querySelector(".then-now__side--now .then-now__figure");
    const horseLogo = section.querySelector(".then-now__side--now .then-now__logo");
    const horseCopy = section.querySelector(".then-now__copy--now");
    const startNode = section.querySelector(".then-now__node--start");
    const endNode = section.querySelector(".then-now__node--end");
    const connectorLine = section.querySelector(".then-now__connector-line");
    if (!ibisFigure || !horseFigure) return;

    // Mobile: no pin (avoids pin jank on small screens, consistent with
    // every other pinned section on this page) — .is-static switches every
    // element in the CSS above to a plain, fully-revealed, stacked layout.
    if (!isDesktop()) {
      section.classList.add("is-static");
      if (!prefersReducedMotion) {
        const compactBeats = [
          { element: section.querySelector(".then-now__head"), x: 0 },
          { element: section.querySelector(".then-now__side--then"), x: -42 },
          { element: section.querySelector(".then-now__copy--then"), x: -28 },
          { element: section.querySelector(".then-now__connector"), x: 0 },
          { element: section.querySelector(".then-now__side--now"), x: 42 },
          { element: section.querySelector(".then-now__copy--now"), x: 28 }
        ];
        compactBeats.forEach(({ element, x }) => {
          if (!element) return;
          gsap.fromTo(element,
            { opacity: 0, x, y: 24 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true }
            }
          );
        });
        safeRefresh();
      }
      return;
    }

    // Round 37: stretched from +=350% to +=550% per direct feedback that
    // the figure/logo/connector animations should read as slower and more
    // deliberate (more scroll distance per beat) — see the PHASES comment
    // below for how that extra room gets spent. Each 100% is roughly one
    // extra viewport-height of scrolling.
    const PIN_LENGTH = "+=550%";

    const easeSmooth = (t) => t * t * (3 - 2 * t);
    const clamp01 = (t) => Math.max(0, Math.min(1, t));
    const mapRange = (t, inMin, inMax) => clamp01((t - inMin) / (inMax - inMin));

    // PHASES — sequential, not overlapping acts: ibis in (0.00-0.20),
    // connector (0.26-0.52), horse in (0.58-0.80), then a trailing hold to
    // release. Deliberately starts the ibis figure/logo/copy at progress
    // 0.00 (no leading hold) — per direct feedback, stretching PIN_LENGTH
    // for a slower feel must NOT come at the cost of an empty-looking pause
    // right as the section engages. The short gaps between phases (e.g.
    // 0.20-0.26 before the connector starts) are intentional holds so each
    // side visibly *finishes* settling before the next thing starts, not
    // empty scroll — each is under 3% of the total 550%.
    function render(globalP) {
      // logoP/copyP deliberately start at the SAME progress their phase
      // begins (0.00 for ibis, 0.58 for horse) rather than waiting for the
      // figure to finish arriving — the figure has real off-screen travel
      // to cover before it's visible at all (see the clearance comment
      // below), but the logo/copy have no such travel, so starting them
      // immediately is what keeps something visibly changing from the very
      // first pixel of scroll instead of a stretch of nothing.
      const figureIbisP = easeSmooth(mapRange(globalP, 0.00, 0.20));
      const logoIbisP = mapRange(globalP, 0.00, 0.20);
      const copyIbisP = easeSmooth(mapRange(globalP, 0.00, 0.18));

      const startNodeP = mapRange(globalP, 0.26, 0.30);
      const lineP = easeSmooth(mapRange(globalP, 0.26, 0.50));
      const endNodeP = mapRange(globalP, 0.47, 0.52);

      const figureHorseP = easeSmooth(mapRange(globalP, 0.58, 0.80));
      const logoHorseP = mapRange(globalP, 0.58, 0.80);
      const copyHorseP = easeSmooth(mapRange(globalP, 0.58, 0.78));

      // Round 39: both figures now rest at roughly equal, symmetric
      // distance from the true center (see .then-now__scene's grid — that
      // was the whole point of this round), which — unlike the old
      // bottom-flush layout, where ibis sat right at the screen's edge and
      // only the wide horse needed real travel — means BOTH now sit close
      // enough to the middle that either one needs a large, similar
      // clearance distance to fully leave the viewport, regardless of the
      // ibis cutout being much narrower than the horse one. Checked via
      // getBoundingClientRect at the 960px desktop breakpoint
      // (isDesktop()'s own floor, the tightest case) for both figures:
      // (58vw + 10%) clears with a real safety margin (~50-145px) either
      // way. Ibis clears LEFT (negative), horse clears RIGHT (positive) —
      // opposite signs, same distance.
      if (ibisFigure) ibisFigure.style.transform = `translateX(calc(${figureIbisP - 1} * (58vw + 10%)))`;
      if (ibisLogo) ibisLogo.style.opacity = String(logoIbisP * 0.5);
      if (ibisCopy) {
        ibisCopy.style.opacity = String(copyIbisP);
        ibisCopy.style.transform = `translateX(${(1 - copyIbisP) * -24}px)`;
      }

      if (startNode) startNode.style.opacity = String(startNodeP);
      if (connectorLine) connectorLine.style.transform = `scaleX(${lineP})`;
      if (endNode) endNode.style.opacity = String(endNodeP);

      if (horseFigure) horseFigure.style.transform = `translateX(calc(${(1 - figureHorseP)} * (58vw + 10%)))`;
      if (horseLogo) horseLogo.style.opacity = String(logoHorseP * 0.5);
      if (horseCopy) {
        horseCopy.style.opacity = String(copyHorseP);
        horseCopy.style.transform = `translateX(${(1 - copyHorseP) * 24}px)`;
      }
    }

    ScrollTrigger.create({
      trigger: pinEl,
      start: "top top",
      end: PIN_LENGTH,
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate(self) { render(self.progress); }
    });

    safeRefresh();
  }

  initThenNowScrub();

  /* =========================================================================
     SECTION TRANSITIONS — landonorris.com-style "shrink out / grow in".
     Applied between every major section on the page. Deliberately NOT
     pinned: each section gets its own scroll-linked (scrub) scale + opacity
     as it exits at the top of the viewport, and a matching scale-in as the
     next one enters from the bottom. That keeps every #anchor nav link
     (Our Story, Vision & Mission, ...) pointing at a normal, unpinned
     scroll position, adds zero extra scroll distance to the page, and plays
     nicely with Lenis. Runs on both desktop and mobile — it's cheap (no
     pin, no reflow, just transform/opacity).

     Deliberately no `filter: blur()` here (there used to be one) — blurring
     whichever section happened to be exiting/entering meant the blur could
     cover most of the screen, including the middle, depending on section
     height. Viewing-comfort blur now lives only in the always-on
     .scroll-vignette bands fixed to the very top/bottom of the viewport
     (see React component markup + style.css) — the center of the screen stays fully
     sharp no matter what's scrolling through it.

     Important: the transform targets the section's INNER .container, not
     the <section> itself. Sections have solid, often high-contrast
     backgrounds (.then-now is dark purple, the next one is off-white) —
     scaling the section itself shrinks its background too, briefly exposing
     a hard-edged gap around it. Scaling only the content keeps every
     section's background full-bleed and static, so the "zoom" reads as a
     content transition, not a visible seam.
     ========================================================================= */
  function initSectionTransitions(configs) {
    const sections = configs
      .map((cfg) => (typeof cfg === "string" ? { selector: cfg } : cfg))
      .map((cfg) => ({ entrance: true, exit: true, ...cfg, section: document.querySelector(cfg.selector) }))
      .filter((cfg) => cfg.section);

    sections.forEach(({ section, entrance, exit }) => {
      const target = section.querySelector(".container") || section;
      target.classList.add("scene-transition");

      // Exit: as the section's bottom edge approaches/crosses the top of the
      // viewport, scale its content down and fade it away. (Round 3: pushed
      // noticeably further — 0.96 -> 0.90 — per feedback that the
      // landonorris.com-style zoom feel should read more strongly during
      // scroll; opacity/scale only, deliberately no blur here, since blur
      // is being dialled back elsewhere on the page, not added to.)
      //
      // Round 31: start/end pulled way in toward the top edge (was "bottom
      // 90%"->"bottom 20%") — per direct feedback, that old range began
      // fading a section while its bottom edge was still 90% of the way
      // down the viewport, i.e. while the section still filled almost the
      // ENTIRE screen, so a good chunk of it read as washed-out well
      // before it was actually leaving — not an edge effect at all. Now
      // the fade only starts once just the top 35% of the viewport is
      // still this section (the rest already showing whatever's next) and
      // finishes exactly as its bottom edge reaches the very top of the
      // viewport — confined to a real edge sliver, matching how the
      // entrance fade below and the .scroll-vignette bands both stay out
      // of the middle of the screen.
      if (exit) {
        gsap.fromTo(
          target,
          { scale: 1, opacity: 1 },
          {
            scale: 0.9,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "bottom 35%",
              end: "bottom 0%",
              scrub: true
            }
          }
        );
      }

      // Entrance: scale up from noticeably larger-than-life + faded, down to
      // its natural size/opacity as it settles into view. Skippable per
      // section (see .then-now below) — a hard-cut reveal needs the
      // incoming section to just sit there at its natural scale/opacity
      // from frame one, not fade/grow in.
      if (entrance) {
        gsap.fromTo(
          target,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 100%",
              end: "top 60%",
              scrub: true
            }
          }
        );
      }
    });
  }

  function initCompactSectionIntros(selectors) {
    if (prefersReducedMotion) return;
    selectors.forEach((selector) => {
      const section = document.querySelector(selector);
      if (!section) return;
      const heading = section.querySelector(".section-head, .faculty-section__head");
      if (!heading) return;
      gsap.fromTo(heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 88%", once: true }
        }
      );
    });
  }

  // Round 19: "footer" removed from this list — it used to get the same
  // scroll-linked shrink/fade as every other section, back when it was a
  // normal in-flow element you scrolled DOWN to. Now that it's the fixed
  // "reveal" footer (see initFooterReveal() below), its own bounding rect
  // never moves relative to the viewport regardless of scroll position, so
  // ScrollTrigger's "bottom 90%"/"bottom 20%" math against it collapses to
  // an already-passed range — it was landing permanently stuck at this
  // tween's END state (opacity: 0), i.e. a genuinely invisible footer no
  // matter how far you scrolled. The spacer-driven reveal already IS this
  // footer's entrance/exit choreography, so it doesn't need (and can't
  // correctly run) this treatment too.
  // Round 36: ".then-now" removed from this list entirely — now that it's
  // its own scroll-pinned/scrubbed section (see initThenNowScrub() above),
  // it's in the same boat as #story-cinematic (also never in this list):
  // this generic scale/fade treatment targets `.container` (or the section
  // itself), but .then-now's actual visible content lives in
  // .then-now__frame, positioned absolute/fixed while pinned — by the time
  // the exit trigger's "bottom 35%"/"bottom 0%" would fire, `.container`
  // (just the heading now, not the whole card grid it used to wrap) is
  // long scrolled out of view, so the tween would silently animate nothing
  // visible. #vision-mission still gets its own normal entrance fade-in
  // below, same as every other boundary between two normal (non-pinned)
  // sections.
  const transitionSections = [
    "#vision-mission",
    "#values",
    "#leadership",
    "#impact",
    "#partners"
  ];
  if (isDesktop()) initSectionTransitions(transitionSections);
  else initCompactSectionIntros(transitionSections);

  /* =========================================================================
     CUSTOM CURSOR — replaces the OS cursor on desktop/mouse only. A small
     solid dot tracks the pointer 1:1; a larger ring trails it with a light
     damped lag (via gsap.ticker, already running for Lenis) for a premium,
     considered feel. Both pick up the gold/purple brand palette and scale up
     on hover over interactive elements. Left alone entirely on touch devices
     and under reduced-motion (the real OS cursor keeps showing).
     ========================================================================= */
  function initCustomCursor() {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (!dot || !ring) return;
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsFinePointer || reducedMotion) return;

    document.body.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let shown = false;

    window.addEventListener(
      "mousemove",
      (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        if (!shown) {
          shown = true;
          dot.classList.add("is-visible");
          ring.classList.add("is-visible");
        }
      },
      { passive: true }
    );

    const hoverSel = "a, button, .btn, input, textarea, select, [role='button'], .nav__toggle, .hero__stage";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest?.(hoverSel)) {
        ring.classList.add("is-hover");
        dot.classList.add("is-hover");
      }
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest?.(hoverSel)) {
        ring.classList.remove("is-hover");
        dot.classList.remove("is-hover");
      }
    });

    gsap.ticker.add(() => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    });
  }

  // Disabled per feedback — the native OS cursor should show normally.
  // initCustomCursor();

  /* -------------------------- Footer vignette guard ------------------------
     `.scroll-vignette--bottom` is `position: fixed`, pinned to the very
     bottom of the *viewport* — its `backdrop-filter: blur(...)` blurs
     whatever is visually behind it in the composited page, regardless of
     DOM ancestry. Per feedback the footer should be completely clear of any
     blur/vignette.

     Round 19: the footer itself is now ALSO `position: fixed` (see the
     "fixed reveal" footer redesign — initFooterReveal() right below, and
     the matching CSS/React component markup comments), which means observing <footer>
     directly no longer works here: a fixed element's bounding box is always
     inside the viewport from the very first frame, so an IntersectionObserver
     on it would report "intersecting" permanently and hide the vignette for
     the entire page, not just once the footer is actually revealed. Observe
     #footerSpacer instead — a plain, normal-flow element that only enters
     the viewport for real once the page has scrolled into the footer's own
     reveal range, which is exactly the moment this guard needs to fire. */
  function initFooterVignetteGuard() {
    const spacer = document.getElementById("siteFooter") || document.getElementById("footerSpacer") || document.getElementById("globalFooter");
    const vignetteBottom = document.querySelector(".scroll-vignette--bottom");
    if (!spacer || !vignetteBottom) return;
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          vignetteBottom.classList.toggle("is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0 }
    ).observe(spacer);
  }

  initFooterVignetteGuard();

  /* ------------------------------ Footer reveal -----------------------------
     Keeps #footerSpacer's height matched to the fixed footer's real
     rendered height, so the page reserves exactly enough extra scroll
     distance to play out the whole reveal (see the big comment above
     <footer> in React component markup for the full mechanism). A ResizeObserver — not
     just a one-off on `load` — since the footer's own height can still
     settle after that (webfonts finishing, the marquee/video boxes taking
     their final size), and this keeps the spacer correct through any later
     window resize too. */
  function initFooterReveal() {
    const footer = document.getElementById("siteFooter");
    const spacer = document.getElementById("footerSpacer");
    if (!footer || !spacer) return;
    if (footer.dataset.footerManaged === "true") return;
    const syncHeight = () => {
      spacer.style.height = footer.offsetHeight + "px";
    };
    syncHeight();
    if ("ResizeObserver" in window) {
      new ResizeObserver(syncHeight).observe(footer);
    } else {
      window.addEventListener("resize", syncHeight);
    }
  }

  initFooterReveal();

  /* ------------------------- Footer content mask alignment -------------------
     Round 44: .footer-reveal__content (the nav row + sponsor logos — see
     style.css) is masked to the shield shape so nothing in it can ever
     render outside the shield's real edges, but that box only covers the
     part of the panel below the headline, not the panel's full height —
     so its mask-size/mask-position have to be told the panel's actual
     height and this box's actual offset within it (--footer-panel-h /
     --footer-content-top) to line up correctly; there's no way to express
     "this box is some fraction of my ancestor's size" in pure CSS. Same
     ResizeObserver-on-load-and-resize shape as initFooterReveal() above,
     since both numbers can shift after first paint (webfonts, the 5-column
     nav row wrapping to fewer columns at narrower widths, etc). */
  function initFooterContentMask() {
    const panel = document.querySelector(".footer-reveal__panel");
    const content = document.querySelector(".footer-reveal__content");
    const headline = document.querySelector(".footer-reveal__headline");
    if (!panel || !content) return;
    if (panel.closest("[data-footer-managed='true']")) return;
    const sync = () => {
      panel.style.setProperty("--footer-panel-h", `${panel.offsetHeight}px`);
      panel.style.setProperty("--footer-content-top", `${content.offsetTop}px`);
    };
    sync();
    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(sync);
      ro.observe(panel);
      if (headline) ro.observe(headline);
    } else {
      window.addEventListener("resize", sync);
    }
  }

  initFooterContentMask();

  /* ------------------------------ Footer glass glow --------------------------
     Round 22: keeps --glow-x/--glow-y (see .footer-reveal__edgeGlow AND
     .footer-reveal__cursorShine in style.css — both read the same pair)
     glued to the live cursor position, in px relative to the panel's own
     box. Set on the PANEL itself rather than on either glow layer
     individually — custom properties inherit normally down the DOM tree,
     so one assignment here reaches both sibling layers automatically
     instead of needing to update each one separately. Listens on the whole
     fixed footer (not just the panel) so hovering the side margins just
     outside the panel still slides the light toward that nearest edge;
     resets off-canvas on mouseleave so the glow cleanly disappears rather
     than freezing at its last position. */
  function initFooterGlassGlow() {
    const footer = document.querySelector(".footer-reveal");
    const panel = document.querySelector(".footer-reveal__panel");
    if (!footer || !panel) return;
    if (footer.matches("[data-footer-managed='true']")) return;

    function setGlow(clientX, clientY) {
      const r = panel.getBoundingClientRect();
      panel.style.setProperty("--glow-x", `${clientX - r.left}px`);
      panel.style.setProperty("--glow-y", `${clientY - r.top}px`);
    }

    footer.addEventListener("pointermove", (e) => setGlow(e.clientX, e.clientY));
    footer.addEventListener("pointerleave", () => {
      panel.style.setProperty("--glow-x", "-9999px");
      panel.style.setProperty("--glow-y", "-9999px");
    });
  }

  initFooterGlassGlow();

  /* ------------------------- Glass + light-sweep cards -----------------------
     Round 29: same idea as initFooterGlassGlow() above, generalised — any
     element matching .glass-interactive (see style.css) gets --gx/--gy
     glued to the live cursor position, relative to its own PARENT (the
     actual visible card box: .leader-card__photo / .stat), which is what
     the CSS gradient/mix-blend layers on the .glass-interactive div itself
     read via inheritance. One listener pair per card, however many cards
     exist — no per-instance wiring needed beyond adding the div in HTML. */
  function initGlassInteractive() {
    const allGlass = [...document.querySelectorAll(".glass-interactive")];
    const impactGlass = allGlass.filter((glass) => glass.closest("#impact"));
    const hoverGlass = allGlass.filter((glass) => !glass.closest("#impact"));

    function setVarsFor(container, clientX, clientY) {
      const r = container.getBoundingClientRect();
      container.style.setProperty("--gx", `${clientX - r.left}px`);
      container.style.setProperty("--gy", `${clientY - r.top}px`);
    }
    function clearVarsFor(container) {
      container.style.setProperty("--gx", "-9999px");
      container.style.setProperty("--gy", "-9999px");
    }

    // Leader-card photos etc.: reacts only while the pointer is actually
    // over that specific card, not just nearby — deliberately conservative
    // for a real person's photo (one listener pair per card).
    hoverGlass.forEach((glass) => {
      const container = glass.parentElement;
      if (!container) return;
      container.addEventListener("pointermove", (e) => setVarsFor(container, e.clientX, e.clientY));
      container.addEventListener("pointerleave", () => clearVarsFor(container));
    });

    // Round 30: Impact tiles track the cursor across the WHOLE section
    // (not just each tile's own box) — per direct feedback, the light
    // sweep should already be catching a tile's edge as the cursor
    // approaches from outside it (the gaps between tiles, or the
    // section's own padding), not only once it's directly hovering. One
    // shared listener updates every tile's --gx/--gy on every move rather
    // than one listener per tile.
    //
    // Round 34: that listener used to live on `#impact` itself, which meant
    // a `pointerleave` fired — and snapped every tile's glow off instantly
    // via clearVarsFor — the moment the cursor crossed into #partners right
    // below, even though the radial-gradient in .glass-interactive::after
    // already fades itself out smoothly past its own radius. Per direct
    // feedback, that read as an abrupt cut rather than the glow tapering off
    // with distance. Fix: track pointermove on `document` instead (so
    // movement in the section below keeps updating --gx/--gy, and the
    // existing CSS falloff — not a manual clear — is what makes it fade),
    // gated on/off by an IntersectionObserver so this doesn't cost anything
    // while #impact is nowhere near the viewport. Only clears on a real
    // "pointer left the page" event (document pointerleave — the cursor
    // exiting the browser viewport/window entirely), not on crossing a
    // section boundary.
    if (impactGlass.length) {
      const section = document.getElementById("impact");
      if (section) {
        const onMove = (e) => {
          impactGlass.forEach((glass) => {
            const container = glass.parentElement;
            if (container) setVarsFor(container, e.clientX, e.clientY);
          });
        };
        const onLeaveDoc = () => {
          impactGlass.forEach((glass) => {
            const container = glass.parentElement;
            if (container) clearVarsFor(container);
          });
        };
        let tracking = false;
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !tracking) {
                tracking = true;
                document.addEventListener("pointermove", onMove);
                document.addEventListener("pointerleave", onLeaveDoc);
              } else if (!entry.isIntersecting && tracking) {
                tracking = false;
                document.removeEventListener("pointermove", onMove);
                document.removeEventListener("pointerleave", onLeaveDoc);
                onLeaveDoc();
              }
            });
          },
          { rootMargin: "100% 0px 100% 0px", threshold: 0 }
        ).observe(section);
      }
    }
  }

  initGlassInteractive();

  /* ------------------------------ Sponsor marquee ---------------------------
     Round 21: the partner-logos strip used to be a pure CSS
     `animation: ... infinite` loop (see the @keyframes in style.css) — fine
     for a passive decoration, but that leaves no way to pause on hover or
     let a visitor drag through the logos by hand, since a running/paused
     CSS animation always wins the cascade over any transform set from JS
     (setting `style.transform` directly would just get silently overridden
     by the animation's own computed value, even while paused). So this
     disables that CSS animation entirely (`track.style.animation = "none"`)
     and drives the exact same visual motion — a translateX offset that
     wraps every `trackWidth` px — from a single requestAnimationFrame loop
     instead, which both a pointer drag AND the idle auto-scroll can freely
     read/write without fighting each other. */
  function initSponsorMarquee() {
    const wrap = document.querySelector(".footer-reveal__sponsors");
    const tracks = wrap
      ? [...wrap.querySelectorAll(".footer-reveal__sponsors-track")]
      : [];
    if (!wrap || !tracks.length) return;
    if (wrap.closest("[data-footer-managed='true']")) return;

    tracks.forEach((t) => { t.style.animation = "none"; });

    const AUTO_SPEED = 40; // px/s — matches the old animation's rough pace
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let trackWidth = tracks[0].getBoundingClientRect().width;
    window.addEventListener("resize", () => {
      trackWidth = tracks[0].getBoundingClientRect().width;
    });

    let offset = 0;
    // "velocity" is the live px/s scroll rate — normally sits at AUTO_SPEED,
    // but a release-with-momentum flick sets it to whatever speed the drag
    // was actually moving at, and it's eased back toward AUTO_SPEED every
    // frame afterwards (see MOMENTUM_EASE below) rather than snapping
    // straight back — that coast-then-settle is what reads as smooth
    // instead of the motion abruptly changing speed the instant you let go.
    let velocity = AUTO_SPEED;
    let hovering = false;
    let dragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let momentumSamples = []; // recent {t, offset} pointermove samples
    // While true, the momentum coast overrides hover-pause — a released
    // flick has to keep going immediately even though the pointer is still
    // sitting right there over the logos (hovering is otherwise true the
    // instant a drag ends, since the mouse never left). Cleared once
    // velocity has eased back down to ~AUTO_SPEED, at which point plain
    // hover-to-pause takes over again like normal.
    let coasting = false;

    function applyOffset() {
      // Double-mod so a negative offset (dragged past the start) still
      // wraps into [0, trackWidth) instead of producing a negative modulo.
      const x = -(((offset % trackWidth) + trackWidth) % trackWidth);
      tracks.forEach((t) => { t.style.transform = `translateX(${x}px)`; });
    }
    applyOffset();

    const MOMENTUM_EASE = 3; // higher = settles back to AUTO_SPEED sooner
    const MAX_FLICK_SPEED = 700; // px/s cap so a fast flick can't blur past
    const SETTLE_THRESHOLD = 2; // px/s — "close enough" to AUTO_SPEED to end the coast

    let lastTs = null;
    function tick(ts) {
      if (lastTs == null) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      if (!dragging && (!hovering || coasting) && !reduceMotion) {
        offset += velocity * dt;
        velocity += (AUTO_SPEED - velocity) * Math.min(1, MOMENTUM_EASE * dt);
        applyOffset();
        if (coasting && Math.abs(velocity - AUTO_SPEED) < SETTLE_THRESHOLD) {
          coasting = false;
        }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    wrap.addEventListener("mouseenter", () => { hovering = true; });
    wrap.addEventListener("mouseleave", () => { hovering = false; });

    wrap.addEventListener("pointerdown", (e) => {
      dragging = true;
      dragStartX = e.clientX;
      dragStartOffset = offset;
      momentumSamples = [{ t: performance.now(), offset }];
      wrap.setPointerCapture(e.pointerId);
      wrap.style.cursor = "grabbing";
    });
    wrap.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      // Content follows the pointer (drag right -> logos slide right),
      // the standard "grab the strip itself" feel rather than an inverted
      // scrollbar-style drag.
      offset = dragStartOffset - (e.clientX - dragStartX);
      applyOffset();
      const now = performance.now();
      momentumSamples.push({ t: now, offset });
      // Only the last ~120ms matters for "how fast was the flick at
      // release" — older samples would blend in a slower start-of-drag
      // speed and make the momentum feel muted.
      while (momentumSamples.length > 2 && now - momentumSamples[0].t > 120) {
        momentumSamples.shift();
      }
    });
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      wrap.style.cursor = "grab";
      const first = momentumSamples[0];
      const last = momentumSamples[momentumSamples.length - 1];
      const dt = first && last ? (last.t - first.t) / 1000 : 0;
      velocity = dt > 0
        ? Math.max(-MAX_FLICK_SPEED, Math.min(MAX_FLICK_SPEED, (last.offset - first.offset) / dt))
        : AUTO_SPEED;
      momentumSamples = [];
      coasting = true;
    }
    wrap.addEventListener("pointerup", endDrag);
    wrap.addEventListener("pointercancel", endDrag);
  }

  initSponsorMarquee();

  /* Recalculate ScrollTrigger positions once every image has finished
     loading — otherwise triggers computed before images settle can end up
     with stale offsets (a common cause of "reveal never fires"). Uses
     safeRefresh() (see top of file) so this never disrupts a pin the user
     has already scrolled into by the time everything's loaded. */
  window.addEventListener("load", safeRefresh);

  return () => {
    window.removeEventListener("load", safeRefresh);
    window.removeEventListener("scroll", onScroll);
    navToggle?.removeEventListener("click", openDrawer);
    navClose?.removeEventListener("click", closeDrawer);
    drawerLinks.forEach((link) => link.removeEventListener("click", closeDrawer));
    if (tickerCallback) gsap.ticker.remove(tickerCallback);
    lenis?.destroy();
    ScrollTrigger.getAll().forEach((trigger) => {
      if (!existingTriggers.has(trigger)) trigger.kill();
    });
    document.body.classList.remove("has-custom-cursor");
    delete window.__lenis;
    delete window.__heroCollapseProgress;
  };
}
