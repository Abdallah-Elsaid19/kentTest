/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- Ported graphics engine behind a typed React adapter.
/* ========================================================================== 
   Kent Business College — real Three.js hero (animations/initHero3d.ts)

   Loaded as a native ES module (see React component markup <script type="module">) so it
   can `import` the three.js core + loader example modules directly, with
   zero bundler/build step. Vendored locally under js/vendor/ — see README
   for versions and how to re-vendor.

   Round 8 — two independent subjects, rigidly linked, in ONE scene:
     1. #heroCanvas   — the ambient decorative background. Round 10: this is
        now a flat 2D flowing line pattern (see initAmbientScene() below), not
        a WebGL scene — the old wireframe icosahedron/ring/particles were
        removed per feedback asking for landonorris.com's own subtle moving
        line pattern instead.
     2. The hero stage (#heroStage) now renders TWO things that share a
        single THREE.Group ("rig") so a mouse-driven rotation applied once
        to the rig moves both by the exact same amount/direction, always in
        sync, with zero manual copying of numbers between them:
          a. The IBIS bird — a depth-mapped photo (color PNG + grayscale
             depth map displacing a subdivided plane, see
             loadDepthPhotoAssets()/buildBirdMesh() below). Fully lit, no
             wireframe, no cursor mask. This is the actual hero portrait,
             standing in for Lando's own photo.

             Round 50/51 — it is no longer the only portrait. A SECOND
             depth-mapped photo (assets/images/ibis/horse-color.png +
             horse-depth.png) shares this rig, at the same size and shifted
             so her EYES sit on the bird's (HORSE_EYE_DX/DY), and it
             renders on its own canvas (#heroHorse, LAYER_HORSE) purely so
             the cursor's fluid blob can reveal HER over the bird: her
             canvas takes the sim's mask at normal polarity while this one
             is never masked at all. That is the old helmet's treatment,
             brought back for a different subject. See the Round 50/51 block
             above HORSE_COLOR_URL, and revealConsumers/publishMask() in
             animations/initFluidMask.ts for the mask itself.
          b. Round 48 — the hex energy shield (assets/models/
             hex_shield_web.glb), which REPLACES the 3D helmet
             (assets/models/helmet.glb) this file used to wear on the bird's
             head. Three things changed with it:
               - It doesn't sit ON the bird. It stands IN FRONT of it,
                 between the bird and the camera, like a raised riot shield
                 — see SHIELD_Z_OFFSET in placeShield().
               - It assembles itself. The model ships a staggered
                 cell-by-cell build animation ("shield_on"), played forward
                 as soon as the page has the model, and a double-click
                 anywhere on the stage runs that same clip backwards to pack
                 it away again — then forwards again on the next one, and so
                 on. See the state machine at the top of initHeroScene().
               - The cursor reveal is inverted. Where the helmet's spill
                 blob REVEALED a fully-lit helmet over a wireframe ghost,
                 the same blob now HIDES the shield: it covers the whole
                 stage and the cursor wipes a hole in it, so the bird shows
                 through. Once a double-click has packed the shield away,
                 the polarity flips and the blob becomes the only place the
                 shield is painted at all. The wireframe ghost layer, and
                 its own #heroHelmetWire canvas, are gone with the helmet.

     Two canvases, ONE shared scene + camera + rig, split purely by
     THREE.Layers (see LAYER_BIRD/LAYER_SHIELD below) so each renderer's
     camera.layers.set(...) call picks out only the objects it should draw
     for that pass — no duplicate geometry, no risk of the bird and shield
     ever drifting out of alignment:
       - #heroBird       (z-index 2): bird only, normal materials, always
         fully opaque.
       - #heroSpillShade (z-index 4): not a canvas — a plain masked DIV that
         darkens the bird/backdrop beneath it, same mask as the layer above.
         Only visible while the shield is packed away and the blob is
         revealing it; see setShieldMode().
       - #heroShieldGL   (top, z-index 5): shield only, with its own
         authored emissive materials, masked by the live cursor spill (see
         animations/initFluidMask.ts, which drives this canvas's mask-image directly and
         flips its polarity on the flag setShieldMode() writes).
   ========================================================================== */

import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = () => window.matchMedia("(max-width: 959px)").matches;

const pageBase = __BASE_PATH__.endsWith("/") ? __BASE_PATH__ : `${__BASE_PATH__}/`;
const publicRoot = `${pageBase}our-story/`;
const SHIELD_URL = `${publicRoot}assets/models/hex_shield_web.glb`;

/* --------------------------------------------------------------------------
   Round 49 — the shield's emissive levels, and the bloom that glows off them.

   The shield's two materials are authored very hot for a renderer with no
   tone mapping at all: emissiveStrength 30 on the hex frame, 3.5 on the
   panels (KHR_materials_emissive_strength). Round 48 dialled both back with
   one blanket 0.06 multiplier, which kept them off the white clip — but
   "not clipped" is not the same as "strongly gold", and it was still pale.
   The reason is ACES itself: the curve desaturates as it brightens, so a
   bright gold input lands close to white no matter how saturated the input
   colour was. You cannot get a strong gold out of it by pushing harder;
   pushing harder is exactly what washes it out.

   So the two levers are now separated:
     - the CORE lines are held at a level ACES still renders as a saturated
       gold (SHIELD_FRAME_EMISSIVE, absolute rather than a multiple of the
       authored 30), keeping the authored emissive HUE untouched;
     - the GLOW is a real bloom post-process (see createShieldBloom()
       below) — a threshold/bright pass, an iterated separable Gaussian, and
       an additive composite, i.e. the same chain Blender's Bloom does in
       post. That is what actually reads as "lit", and it does it without
       touching the core's colour.

   Because the bloom has to add light BEFORE tone mapping to look right, the
   shield's canvas no longer tone maps in the renderer at all — it renders
   linear HDR into a float target and the composite pass applies ACES and
   the sRGB transfer itself. See createShieldBloom() and the renderer setup
   in initHeroScene().
   -------------------------------------------------------------------------- */
// The frame's emissive colour and level, and why they are not the authored
// ones. ACES desaturates as it brightens, and the authored hue
// (1, 0.72, 0.22) has too much green to survive it: pushed through this
// renderer's curve at exposure 1.05 it lands at
//     0.5 -> #c8b571 (sat 0.44)    1.2 -> #eae0b2 (sat 0.24)
//     0.9 -> #e2d49e (sat 0.30)    1.55 -> #f0e7c2 (sat 0.19)
// i.e. every level bright enough to read as "glowing" is also pale cream,
// which is exactly how Round 48 rendered. There is no intensity that fixes
// it, because intensity is what causes it.
//
// Deepening the hue does fix it. The same curve on (1, 0.45, 0.05) gives
//     0.9 -> #e6be58 (sat 0.62)    1.2 -> #efce6e (sat 0.54)
// and for reference the brand gold --gold #C9A24B is itself sat 0.63 — so
// this is a luminous version of the brand's own gold rather than a new
// colour. Set in the renderer's working (linear) space, which is what
// Material.emissive is in.
const SHIELD_FRAME_EMISSIVE_RGB = [1.0, 0.45, 0.05];
const SHIELD_FRAME_EMISSIVE = 1.1;
const SHIELD_PANEL_EMISSIVE = 0.22;
// The frame's base colour is black with roughness 0.35, so everything it
// shows besides its own emissive is white specular off the RoomEnvironment
// — which lands right on top of the gold and dilutes it. Turned down rather
// than off: a little sheen still reads as a physical edge catching light.
const SHIELD_FRAME_ENV_INTENSITY = 0.3;
// Fallback for any material this model gains later that matches neither
// name — scale whatever it was authored with rather than guessing a level.
const SHIELD_EMISSIVE_FALLBACK_SCALE = 0.06;

// Bloom. Threshold/knee are in LINEAR luminance against the values actually
// sitting in the HDR buffer, so they are directly comparable with the
// emissive levels above: the frame lands near 0.8, the panels (already
// premultiplied down by their 0.13 alpha) near 0.03 — hence a threshold
// that takes the frame and leaves the panels, the bird and the backdrop
// alone.
// Nothing but the shield is in this pass (camera.layers is set to
// LAYER_SHIELD before it runs), so the threshold only has to separate the
// frame from the panels — no risk of the bird or the backdrop blooming. The
// frame's linear luminance is ~0.59 and the panels', already premultiplied
// down by their 0.13 alpha, ~0.027, so there is nearly a decade of gap to
// place it in and the frame can bloom at full weight.
const BLOOM_THRESHOLD = 0.2;
const BLOOM_KNEE = 0.28;
// How much of the blurred light gets added back on top of the core.
const BLOOM_STRENGTH = 1.9;
// How much of it also counts as COVERAGE. Without this the halo would be
// mathematically present but fully transparent — invisible over the bird —
// since the glow spreads into pixels the shield itself never covered.
const BLOOM_ALPHA = 1.0;
// Blur reach per octave, in texels of the (downscaled) bloom buffer. Each
// octave blurs the PREVIOUS octave's result, so the reach compounds and
// three passes of a 9-tap kernel cover a wide, smooth falloff cheaply.
const BLOOM_RADIUS = 1.5;
// Falls away faster than an even spread would: the widest octave is what
// turns a glow along the lines into a flat haze over the whole disc.
const BLOOM_OCTAVE_WEIGHTS = [1.0, 0.6, 0.28];
// The bloom chain runs at 1/N of the shield canvas. It is a blur; there is
// nothing in it that a third of the resolution loses, and it keeps four
// float render targets small.
const BLOOM_DOWNSCALE = 3;

// The real ibis asset: a clean front-facing render with a transparent
// background, and a matching grayscale depth map (brightness = distance from
// camera) generated for it — see README "Round 7" for how the depth map was
// produced and its known limitations.
const PHOTO_COLOR_URL = `${publicRoot}assets/images/ibis/ibis-color.png`;
const PHOTO_DEPTH_URL = `${publicRoot}assets/images/ibis/ibis-depth.png`;

/* --------------------------------------------------------------------------
   Round 50/51 — the horse, the ibis's second face.

   A SECOND depth-mapped portrait, built by exactly the same pipeline as the
   ibis (color PNG + grayscale depth map displacing a subdivided plane, the
   depth feathered by the color's own alpha) and parented to the SAME rig, so
   it picks up the identical mouse-driven tilt with no extra wiring.

   Round 51: she sits at the ibis's own size and is shifted so her eyes
   register on its eyes, rather than standing behind it, and the cursor's own
   fluid blob is what reveals her — not a hover test, and not a swap. Both
   portraits render every frame on their own canvases; the mask decides which
   one is seen. The whole treatment, and what Round 50 and Round 51 each
   changed and why, is in the block above `let horseMesh` inside
   initHeroScene().
   -------------------------------------------------------------------------- */
const HORSE_COLOR_URL = `${publicRoot}assets/images/ibis/horse-color.png`;
const HORSE_DEPTH_URL = `${publicRoot}assets/images/ibis/horse-depth.png`;

// THREE.Layers bit indices — see the big header comment above for why the
// bird and helmet are split this way instead of two separate scenes.
const LAYER_BIRD = 1;
const LAYER_SHIELD = 2;
// Round 51 — the horse portrait renders on its OWN canvas (#heroHorse, see
// .hero__horse in style.css), because that canvas is what the fluid cursor
// mask acts on: she is painted only inside the blob. A layer of her own is
// how that pass picks her out of the shared scene, exactly as the bird and
// the shield already do.
const LAYER_HORSE = 3;

/* ==========================================================================
   1. Ambient background pattern (#heroCanvas).
   Round 10: this used to be a small WebGL scene (a gold wireframe
   icosahedron + a purple ring + ~140 drifting particles) — removed entirely
   per feedback: no more "moving background shape" decoration. In its place,
   a plain 2D canvas draws a set of slow, gently undulating contour-style
   lines across the whole hero, matching the faint flowing line pattern
   visible on landonorris.com's own background (see the reference
   screenshot). Plain Canvas2D rather than WebGL/Three.js on purpose — this
   is flat, low-cost decoration with no 3D need, and dropping the second
   WebGL context here is one less GPU context competing with the bird/
   helmet's three canvases.
   ========================================================================== */
function initAmbientScene() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return () => {};
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  // Each line is a horizontal-ish band, y(x) built from a few sine harmonics
  // at irrational-ish frequency ratios (so lines don't all crest/trough in
  // lockstep — reads as organic flow-field/contour art rather than a uniform
  // wave grid) plus a slowly-incrementing phase per harmonic, which is what
  // makes the whole pattern "move on its own" (per the brief) without ever
  // translating/scrolling off-canvas. Amplitudes/frequencies/opacities vary
  // per line for a hand-drawn, unevenly-spaced feel like the reference.
  // Round 11: added a third, faster-shifting harmonic per feedback that this
  // pattern should read as genuinely "fluid" (more turbulent/alive than a
  // clean traveling sine) and move noticeably faster than the Round 10
  // version — speed1/speed2 bumped up ~3x and the new speed3 term runs
  // faster still, on top of it. Still fully independent of the cursor
  // (nothing here reads mouse position), exactly as before.
  const LINE_COUNT = 9;
  const lines = Array.from({ length: LINE_COUNT }, (_, i) => {
    const t = i / (LINE_COUNT - 1);
    return {
      baseFrac: 0.06 + t * 0.9 + (Math.sin(i * 12.9) * 0.02), // spread down the canvas, slightly irregular
      amp1: 26 + (i % 3) * 10,
      amp2: 14 + ((i * 7) % 5) * 5,
      amp3: 7 + ((i * 5) % 4) * 3,
      freq1: 0.0016 + (i % 4) * 0.00035,
      freq2: 0.0031 + (i % 3) * 0.0006,
      freq3: 0.0052 + (i % 5) * 0.0008,
      speed1: (0.00018 + (i % 5) * 0.00004) * 3.2,
      speed2: (-0.00026 - (i % 3) * 0.00005) * 3.2,
      speed3: (0.00041 + (i % 4) * 0.00007) * 3.4,
      phase: i * 1.7,
      alpha: 0.045 + (i % 4) * 0.012,
      width: 1 + (i % 3) * 0.3
    };
  });

  let w = 0, h = 0, dpr = 1;
  function resize() {
    w = canvas.clientWidth || canvas.parentElement.clientWidth || 1;
    h = canvas.clientHeight || canvas.parentElement.clientHeight || 1;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  const STEP = 6; // px between sampled points — coarse enough to be cheap, fine enough to look smooth once stroked
  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    lines.forEach((ln) => {
      const baseY = h * ln.baseFrac;
      ctx.beginPath();
      for (let x = -20; x <= w + 20; x += STEP) {
        const y =
          baseY +
          Math.sin(x * ln.freq1 + ln.phase + t * ln.speed1) * ln.amp1 +
          Math.sin(x * ln.freq2 - ln.phase * 0.6 + t * ln.speed2) * ln.amp2 +
          Math.sin(x * ln.freq3 + ln.phase * 1.3 + t * ln.speed3) * ln.amp3;
        if (x === -20) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      // Canvas2D can't read CSS custom properties, so --ink-rgb (20, 9, 31)
      // is inlined literally here — keep in sync if that token ever changes.
      ctx.strokeStyle = `rgba(20, 9, 31, ${ln.alpha})`;
      ctx.lineWidth = ln.width;
      ctx.stroke();
    });
  }

  let raf = null;
  let observer = null;
  function animate() {
    raf = requestAnimationFrame(animate);
    draw(performance.now());
  }
  draw(0);
  if (!prefersReducedMotion) {
    animate();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (raf) cancelAnimationFrame(raf);
            raf = null;
          } else if (!raf) {
            animate();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);
  }

  return () => {
    window.removeEventListener("resize", resize);
    if (raf) cancelAnimationFrame(raf);
    observer?.disconnect();
  };
}

/* ==========================================================================
   2. Loaders
   ========================================================================== */

// Round 48 — assets/models/hex_shield_web.glb, replacing the old
// assets/models/helmet.glb. Unlike the helmet this one is NOT
// Draco-compressed (its only glTF extension is
// KHR_materials_emissive_strength) and it carries no image textures
// either, so strictly speaking neither decoder is required. The Draco
// wiring is kept anyway: DRACOLoader spins its worker up lazily, so it
// costs nothing until a compressed primitive actually turns up, and it
// means dropping a re-exported/compressed version of this model in place
// keeps working.
//
// Hands the whole gltf to the caller rather than just gltf.scene — the
// entire point of this model is its "shield_on" clip (gltf.animations),
// which the caller drives by hand. See the shield state machine in
// initHeroScene().
function loadShieldModel(onLoad, onError) {
  const loader = new GLTFLoader();

  loader.load(
    SHIELD_URL,
    (gltf) => onLoad(gltf),
    undefined,
    (err) => {
      console.error("[hero3d] failed to load shield model:", SHIELD_URL, err);
      if (onError) onError(err);
    }
  );
}

// A bounding box in `root`'s OWN local space, rather than the world-space
// one THREE.Box3.setFromObject() returns.
//
// placeShield() needs this because it measures the shield in order to
// decide the shield's scale and offset — and by the time it runs, the
// model's ancestors are anything but neutral: the rig carries the live
// mouse-driven tilt, and the slot carries the offset from the previous
// call. A world-space box would fold both of those in, inflating the size
// (a rotated box is bigger than the thing inside it) and returning a
// centre that has already been moved once. Composing each mesh's
// geometry-space box through inverse(root.matrixWorld) * mesh.matrixWorld
// strips every ancestor back out, so the same pose always measures the
// same however the rig happens to be turned at that instant.
function measureLocalBox(root) {
  root.updateWorldMatrix(true, true);

  const toLocal = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const meshToLocal = new THREE.Matrix4();
  const corner = new THREE.Vector3();
  const box = new THREE.Box3();

  root.traverse((obj) => {
    const geometry = obj.geometry;
    if (!geometry) return;
    if (!geometry.boundingBox) geometry.computeBoundingBox();
    const gb = geometry.boundingBox;
    if (!gb) return;

    meshToLocal.multiplyMatrices(toLocal, obj.matrixWorld);
    for (let i = 0; i < 8; i++) {
      corner
        .set(i & 1 ? gb.max.x : gb.min.x, i & 2 ? gb.max.y : gb.min.y, i & 4 ? gb.max.z : gb.min.z)
        .applyMatrix4(meshToLocal);
      box.expandByPoint(corner);
    }
  });

  return box;
}

// The raw depth PNG carries real depth values right up to its very last
// opaque pixel — hair tufts, the glasses rim, the shoulder/collar line all
// sit near-full depth right at the edge of the alpha cutout, with zero
// depth immediately outside it. Displacing those edge vertices while their
// background neighbours stay flat is exactly the "silhouette distorts at
// the edges of rotation" artifact called out in the README (Round 9/13) —
// visually a jagged, torn-looking fringe right at the bird's outline once
// the mouse-driven tilt moves them apart. Feathering the depth by the color
// texture's OWN alpha (blurred, so the ramp is gradual rather than a hard
// mask) makes displacement ease to zero exactly where the cutout itself
// fades out, so there's no longer a displaced/undisplaced cliff sitting
// right at the visible edge for a rotation to expose.
function featherDepthByAlpha(colorTex, depthTex) {
  try {
    const depthImg = depthTex.image;
    const colorImg = colorTex.image;
    const w = depthImg.naturalWidth || depthImg.width;
    const h = depthImg.naturalHeight || depthImg.height;
    if (!w || !h) return depthTex;

    const depthCanvas = document.createElement("canvas");
    depthCanvas.width = w;
    depthCanvas.height = h;
    const dctx = depthCanvas.getContext("2d");
    dctx.drawImage(depthImg, 0, 0, w, h);
    const depthData = dctx.getImageData(0, 0, w, h);

    // Isolate the color photo's alpha channel into its own flat-gray image
    // so the blur below smears transparency only, never color.
    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = w;
    maskCanvas.height = h;
    const mctx = maskCanvas.getContext("2d");
    mctx.drawImage(colorImg, 0, 0, w, h);
    const alphaData = mctx.getImageData(0, 0, w, h);
    for (let i = 0; i < alphaData.data.length; i += 4) {
      const a = alphaData.data[i + 3];
      alphaData.data[i] = a;
      alphaData.data[i + 1] = a;
      alphaData.data[i + 2] = a;
      alphaData.data[i + 3] = 255;
    }
    mctx.putImageData(alphaData, 0, 0);

    // The blur radius IS the feather width, in source-image px — wide
    // enough to visibly ease displacement out well before the cutout edge,
    // not so wide it eats into the depth relief of the face/beak.
    const FEATHER_PX = Math.max(6, Math.round(w * 0.012));
    const blurCanvas = document.createElement("canvas");
    blurCanvas.width = w;
    blurCanvas.height = h;
    const bctx = blurCanvas.getContext("2d");
    bctx.filter = `blur(${FEATHER_PX}px)`;
    bctx.drawImage(maskCanvas, 0, 0);
    const falloffData = bctx.getImageData(0, 0, w, h);

    for (let i = 0; i < depthData.data.length; i += 4) {
      const falloff = falloffData.data[i] / 255;
      depthData.data[i] *= falloff;
      depthData.data[i + 1] *= falloff;
      depthData.data[i + 2] *= falloff;
    }
    dctx.putImageData(depthData, 0, 0);

    const feathered = new THREE.CanvasTexture(depthCanvas);
    feathered.magFilter = THREE.LinearFilter;
    feathered.minFilter = THREE.LinearFilter;
    feathered.generateMipmaps = false;
    return feathered;
  } catch (err) {
    console.error("[hero3d] depth feathering failed, falling back to the raw depth map:", err);
    return depthTex;
  }
}

/* --------------------------------------------------------------------------
   Round 50 — the material both depth-mapped portraits wear.

   Factored out of the bird's own inline material so the horse is guaranteed
   to be lit, displaced and cut out by identical rules.

   `softEdges` is the one thing that differs between the two, and it exists
   because of a measured difference in the ASSETS rather than a stylistic
   choice. Round 12 put this material on transparent:false + alphaTest 0.08
   deliberately: three multiplies the map's alpha into diffuseColor.a, so
   with blending on, every semi-transparent texel renders at its own alpha
   and the subject's supposedly-solid pixels go partly see-through. A hard
   alphaTest cut avoids that — at the cost of a binary edge, since an
   alpha-tested fragment is either fully drawn or discarded, with nothing in
   between and no MSAA help.

   That cost is invisible on ibis-color.png, which carries only ~1.0% of its
   pixels at partial alpha (a 1-2px antialiased perimeter). It is very
   visible on horse-color.png, which carries ~3.1% — the wispy hair down both
   sides. A mid-image scanline through it reads
       11, 68, 85, 86, 29, 1, 15, 110, 194, 236, 251, 255
   i.e. a wide, non-monotonic band, and a 0.08 (=20/255) threshold paints
   68/85/86/110 fully opaque while discarding 11/1/15 — which is precisely
   the frayed, serrated fringe. No depth-map change fixes that; the depth map
   measures clean (0..8 everywhere the colour is transparent).

   So a subject whose cutout is mostly hair gets real alpha blending, with
   alphaTest dropped to "discard only what is actually empty" — hair renders
   soft because it IS soft — and one whose cutout is a clean perimeter keeps
   Round 12's hard cut. Blending is safe for the portraits now in a way it
   was not in Round 12: each portrait is alone on its own canvas, and the
   horse's is composited over the bird's by the browser, so a translucent
   hair pixel blends with the bird and the backdrop behind it — which is
   exactly what soft hair should do.
   -------------------------------------------------------------------------- */
function makeDepthPhotoMaterial(colorTex, depthTex, displacementScale, softEdges) {
  return new THREE.MeshStandardMaterial({
    map: colorTex,
    displacementMap: depthTex,
    displacementScale,
    displacementBias: 0,
    roughness: 0.92,
    metalness: 0.0,
    transparent: !!softEdges,
    // 0.01 still discards the fully-empty background (so it never writes
    // depth), but leaves the antialiased ramp to blend instead of snapping.
    alphaTest: softEdges ? 0.01 : 0.08,
    side: THREE.DoubleSide
  });
}

// Plain images (THREE.TextureLoader) — no Draco/KTX2 decoding needed.
// Round 50: the URLs are arguments rather than the module constants they used
// to read directly, so the horse can come through the same pipeline.
function loadDepthPhotoAssets(colorUrl, depthUrl, onLoad, onError) {
  const loader = new THREE.TextureLoader();
  let color = null;
  let depth = null;
  let failed = false;

  function done() {
    if (failed) return;
    if (color && depth) onLoad(color, featherDepthByAlpha(color, depth));
  }

  loader.load(
    colorUrl,
    (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      color = tex;
      done();
    },
    undefined,
    (err) => {
      failed = true;
      console.error("[hero3d] failed to load depth-photo color texture:", colorUrl, err);
      if (onError) onError(err);
    }
  );

  loader.load(
    depthUrl,
    (tex) => {
      // The depth map is data, not color — must NOT go through sRGB decoding
      // (THREE.NoColorSpace, the texture default) or the displacement values
      // read back gamma-skewed instead of linear.
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      depth = tex;
      done();
    },
    undefined,
    (err) => {
      failed = true;
      console.error("[hero3d] failed to load depth-photo depth map:", depthUrl, err);
      if (onError) onError(err);
    }
  );
}

/* ==========================================================================
   2b. Round 49 — bloom for the shield canvas.

   A small, purpose-built post chain rather than three's EffectComposer +
   UnrealBloomPass: those live in three's examples/jsm, which this project
   does not vendor (see js/vendor/), and pulling in the seven modules they
   depend on to use one of them is a lot of surface for a single blur. What
   Bloom actually is — bright pass, blur, add — is short enough to own.

     rtScene   full res, RGBA16F, WITH depth: the shield rendered normally
               but in LINEAR HDR, no tone mapping (that is the whole point:
               light has to be added while values can still exceed 1).
     rtBright  1/N res: only the parts brighter than BLOOM_THRESHOLD.
     rtPing /  1/N res: separable-Gaussian ping-pong. Each octave blurs the
     rtPong    previous octave's OUTPUT, so reach compounds instead of
               needing a resolution pyramid.
     rtBloom   1/N res: the octaves summed, additively.
     canvas    composite = core + glow, then ACES + sRGB in the shader.

   Two details worth knowing before editing this:

   1. Alpha. This canvas is composited over the bird by the browser, so
      coverage matters as much as colour. Rendering transparent geometry
      onto a transparent target leaves PREMULTIPLIED rgb with correct alpha
      in rtScene, and the blur carries that through unchanged, so the glow
      arrives already weighted by how much light was actually there. The
      composite un-premultiplies before tone mapping (a tone curve belongs
      on surface colour, not on colour that has already been faded by its
      own coverage) and re-premultiplies on the way out, because three
      creates its context with premultipliedAlpha: true.

   2. Tone mapping is applied here, in GLSL, and NOT by the renderer. A
      raw ShaderMaterial gets neither three's tonemapping_fragment nor its
      colorspace_fragment chunk injected, so the composite shader has to do
      both — the functions below are three's own ACES and sRGB transfer,
      transcribed, so this canvas still matches #heroBird's rendering of the
      same scene exactly. And renderer.toneMapping is set once at setup, not
      toggled per frame: changing it invalidates every compiled program.
   ========================================================================== */
const BLOOM_COLOR_GLSL = `
  // three.js ACESFilmicToneMapping (tonemapping_pars_fragment), transcribed.
  vec3 RRTAndODTFit(vec3 v) {
    vec3 a = v * (v + 0.0245786) - 0.000090537;
    vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
  }
  vec3 ACESFilmicToneMapping(vec3 color, float exposure) {
    const mat3 ACESInputMat = mat3(
      vec3(0.59719, 0.07600, 0.02840),
      vec3(0.35458, 0.90834, 0.13383),
      vec3(0.04823, 0.01566, 0.83777)
    );
    const mat3 ACESOutputMat = mat3(
      vec3( 1.60475, -0.10208, -0.00327),
      vec3(-0.53108,  1.10813, -0.07276),
      vec3(-0.07367, -0.00605,  1.07602)
    );
    color *= exposure / 0.6;
    color = ACESInputMat * color;
    color = RRTAndODTFit(color);
    color = ACESOutputMat * color;
    return clamp(color, 0.0, 1.0);
  }
  // three.js sRGBTransferOETF (colorspace_pars_fragment), transcribed.
  vec3 sRGBTransferOETF(vec3 value) {
    return mix(
      pow(value, vec3(0.41666)) * 1.055 - vec3(0.055),
      value * 12.92,
      vec3(lessThanEqual(value, vec3(0.0031308)))
    );
  }
`;

const BLOOM_QUAD_VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

function createShieldBloom(renderer, exposure) {
  // The whole chain depends on render targets that can hold values above 1.
  // That is free on WebGL2 and an optional extension on WebGL1, so where it
  // is missing this returns null and the caller falls back to rendering the
  // shield straight to the canvas with the renderer's own tone mapping —
  // no glow, but a correct picture rather than a clipped one.
  const gl = renderer.getContext();
  const canHDR =
    renderer.capabilities.isWebGL2 || !!gl.getExtension("EXT_color_buffer_half_float");
  if (!canHDR) {
    console.warn("[hero3d] no half-float render targets — shield bloom disabled");
    return null;
  }

  const targetOpts = {
    type: THREE.HalfFloatType, // the whole point: values above 1 must survive
    depthBuffer: false,
    stencilBuffer: false,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter
  };
  const rtScene = new THREE.WebGLRenderTarget(1, 1, { ...targetOpts, depthBuffer: true });
  const rtBright = new THREE.WebGLRenderTarget(1, 1, targetOpts);
  const rtPing = new THREE.WebGLRenderTarget(1, 1, targetOpts);
  const rtPong = new THREE.WebGLRenderTarget(1, 1, targetOpts);
  const rtBloom = new THREE.WebGLRenderTarget(1, 1, targetOpts);

  // One fullscreen triangle-pair, re-materialed per pass. The vertex shader
  // passes position.xy straight through as clip space, so no camera matrices
  // are involved and the same 2x2 plane covers the viewport at any size.
  const quadScene = new THREE.Scene();
  const quadCamera = new THREE.Camera();
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
  quad.frustumCulled = false;
  quadScene.add(quad);

  const brightMaterial = new THREE.ShaderMaterial({
    blending: THREE.NoBlending,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tSrc: { value: null },
      uThreshold: { value: BLOOM_THRESHOLD },
      uKnee: { value: BLOOM_KNEE }
    },
    vertexShader: BLOOM_QUAD_VERTEX,
    fragmentShader: `
      uniform sampler2D tSrc;
      uniform float uThreshold;
      uniform float uKnee;
      varying vec2 vUv;
      void main() {
        vec4 src = texture2D(tSrc, vUv);
        float lum = dot(src.rgb, vec3(0.2126, 0.7152, 0.0722));
        // Soft knee rather than a hard cut, so a line that drifts across the
        // threshold as the rig tilts ramps into the glow instead of popping.
        float w = smoothstep(uThreshold, uThreshold + uKnee, lum);
        gl_FragColor = src * w;
      }
    `
  });

  const blurMaterial = new THREE.ShaderMaterial({
    blending: THREE.NoBlending,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tSrc: { value: null },
      uStep: { value: new THREE.Vector2() }
    },
    vertexShader: BLOOM_QUAD_VERTEX,
    fragmentShader: `
      uniform sampler2D tSrc;
      uniform vec2 uStep;
      varying vec2 vUv;
      void main() {
        // 9-tap Gaussian, run once per axis (uStep carries the axis), with
        // the standard sigma-matched weight set.
        float w[5];
        w[0] = 0.2270270270;
        w[1] = 0.1945945946;
        w[2] = 0.1216216216;
        w[3] = 0.0540540541;
        w[4] = 0.0162162162;
        vec4 sum = texture2D(tSrc, vUv) * w[0];
        for (int i = 1; i < 5; i++) {
          vec2 offset = uStep * float(i);
          sum += texture2D(tSrc, vUv + offset) * w[i];
          sum += texture2D(tSrc, vUv - offset) * w[i];
        }
        gl_FragColor = sum;
      }
    `
  });

  // Straight add of rgb AND alpha — deliberately CustomBlending rather than
  // THREE.AdditiveBlending, which multiplies the source by its own alpha and
  // would swallow exactly the low-coverage haze this is accumulating.
  const addMaterial = new THREE.ShaderMaterial({
    transparent: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneFactor,
    depthTest: false,
    depthWrite: false,
    uniforms: { tSrc: { value: null }, uWeight: { value: 1 } },
    vertexShader: BLOOM_QUAD_VERTEX,
    fragmentShader: `
      uniform sampler2D tSrc;
      uniform float uWeight;
      varying vec2 vUv;
      void main() { gl_FragColor = texture2D(tSrc, vUv) * uWeight; }
    `
  });

  const compositeMaterial = new THREE.ShaderMaterial({
    blending: THREE.NoBlending, // sole draw to the canvas after a clear
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tScene: { value: rtScene.texture },
      tBloom: { value: rtBloom.texture },
      uStrength: { value: BLOOM_STRENGTH },
      uGlowAlpha: { value: BLOOM_ALPHA },
      uExposure: { value: exposure }
    },
    vertexShader: BLOOM_QUAD_VERTEX,
    fragmentShader: `
      uniform sampler2D tScene;
      uniform sampler2D tBloom;
      uniform float uStrength;
      uniform float uGlowAlpha;
      uniform float uExposure;
      varying vec2 vUv;
      ${BLOOM_COLOR_GLSL}
      void main() {
        vec4 base = texture2D(tScene, vUv);  // premultiplied, linear HDR
        vec4 glow = texture2D(tBloom, vUv);  // ditto

        vec3 lit = base.rgb + glow.rgb * uStrength;
        float alpha = clamp(base.a + glow.a * uGlowAlpha, 0.0, 1.0);
        if (alpha <= 0.0) discard;

        // Un-premultiply -> tone map -> re-premultiply. See detail (1) in
        // this section's header for why the curve is applied to the
        // un-premultiplied colour.
        vec3 color = lit / alpha;
        color = ACESFilmicToneMapping(color, uExposure);
        color = sRGBTransferOETF(color);
        gl_FragColor = vec4(color * alpha, alpha);
      }
    `
  });

  let bloomWidth = 1;
  let bloomHeight = 1;

  function draw(material) {
    quad.material = material;
    renderer.render(quadScene, quadCamera);
  }

  return {
    setSize(width, height) {
      const pixelRatio = renderer.getPixelRatio();
      const fullWidth = Math.max(1, Math.round(width * pixelRatio));
      const fullHeight = Math.max(1, Math.round(height * pixelRatio));
      bloomWidth = Math.max(1, Math.round(fullWidth / BLOOM_DOWNSCALE));
      bloomHeight = Math.max(1, Math.round(fullHeight / BLOOM_DOWNSCALE));

      rtScene.setSize(fullWidth, fullHeight);
      rtBright.setSize(bloomWidth, bloomHeight);
      rtPing.setSize(bloomWidth, bloomHeight);
      rtPong.setSize(bloomWidth, bloomHeight);
      rtBloom.setSize(bloomWidth, bloomHeight);
    },

    render(scene, camera) {
      const prevAutoClear = renderer.autoClear;
      // Explicit clears throughout: every quad pass covers the full target
      // with NoBlending and so needs none, and rtBloom specifically must
      // NOT be cleared between the octaves it is accumulating.
      renderer.autoClear = false;

      renderer.setRenderTarget(rtScene);
      renderer.clear(true, true, false);
      renderer.render(scene, camera);

      brightMaterial.uniforms.tSrc.value = rtScene.texture;
      renderer.setRenderTarget(rtBright);
      draw(brightMaterial);

      renderer.setRenderTarget(rtBloom);
      renderer.clear(true, false, false);

      let source = rtBright.texture;
      for (let i = 0; i < BLOOM_OCTAVE_WEIGHTS.length; i++) {
        blurMaterial.uniforms.tSrc.value = source;
        blurMaterial.uniforms.uStep.value.set(BLOOM_RADIUS / bloomWidth, 0);
        renderer.setRenderTarget(rtPing);
        draw(blurMaterial);

        blurMaterial.uniforms.tSrc.value = rtPing.texture;
        blurMaterial.uniforms.uStep.value.set(0, BLOOM_RADIUS / bloomHeight);
        renderer.setRenderTarget(rtPong);
        draw(blurMaterial);

        addMaterial.uniforms.tSrc.value = rtPong.texture;
        addMaterial.uniforms.uWeight.value = BLOOM_OCTAVE_WEIGHTS[i];
        renderer.setRenderTarget(rtBloom);
        draw(addMaterial);

        source = rtPong.texture; // next octave widens this one's result
      }

      renderer.setRenderTarget(null);
      renderer.clear(true, true, false);
      draw(compositeMaterial);

      renderer.autoClear = prevAutoClear;
    },

    dispose() {
      [rtScene, rtBright, rtPing, rtPong, rtBloom].forEach((target) => target.dispose());
      quad.geometry.dispose();
      [brightMaterial, blurMaterial, addMaterial, compositeMaterial].forEach((material) => material.dispose());
    }
  };
}

/* ==========================================================================
   3. The unified hero scene — bird (always visible) + hex shield (assembles
      itself on load, toggled by double-click, hole-punched by the cursor
      spill), rigidly linked by one rotating THREE.Group.
   ========================================================================== */
function initHeroScene() {
  const birdCanvas = document.getElementById("heroBird");
  const fullCanvas = document.getElementById("heroShieldGL");
  // Round 51 — the horse's own canvas. Separate from #heroBird because the
  // fluid cursor mask applies to a whole canvas: she has to be maskable
  // independently of the bird for the blob to reveal her over it.
  const horseCanvas = document.getElementById("heroHorse");
  const shadeEl = document.getElementById("heroSpillShade");
  const stage = document.getElementById("heroStage");
  const loadingEl = document.getElementById("heroLoading");
  const loadNoticeEl = document.getElementById("heroLoadNotice");
  if (!birdCanvas || !stage) return () => {};
  let disposed = false;

  // Both the bird photo and the helmet model load independently and
  // asynchronously — only hide the spinner once BOTH have resolved (success
  // or failure), so it never flickers hidden while one asset is still on the
  // way in.
  let pendingLoads = 2;
  function noteLoadSettled() {
    if (disposed) return;
    pendingLoads = Math.max(0, pendingLoads - 1);
    if (pendingLoads === 0 && loadingEl) loadingEl.classList.add("is-hidden");
  }
  function noteLoadFailed() {
    if (loadNoticeEl) loadNoticeEl.classList.add("is-visible");
  }

  const mobile = isMobile();

  const rendererOpts = { alpha: true, antialias: !mobile, powerPreference: "high-performance" };
  const rendererBird = new THREE.WebGLRenderer({ canvas: birdCanvas, ...rendererOpts });
  const rendererFull = fullCanvas ? new THREE.WebGLRenderer({ canvas: fullCanvas, ...rendererOpts }) : null;
  const rendererHorse = horseCanvas ? new THREE.WebGLRenderer({ canvas: horseCanvas, ...rendererOpts }) : null;

  const TONE_EXPOSURE = 1.05;

  [rendererBird, rendererFull, rendererHorse].forEach((r) => {
    if (!r) return;
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = TONE_EXPOSURE;
  });

  // Round 49: the shield's renderer stops tone mapping in the renderer and
  // hands that job to the bloom chain's composite pass instead — light has
  // to be ADDED while values can still exceed 1, which means the shield
  // pass must land in a linear HDR buffer, unclamped and un-curved. The
  // composite then applies the exact same ACES + sRGB the birds's renderer
  // would have, so the two canvases still match. Set once here, never
  // per-frame: changing renderer.toneMapping invalidates every program it
  // has compiled. (outputColorSpace above is left as-is but is inert for
  // this renderer now — three only injects the colour-space conversion into
  // materials that include its shader chunk, and the composite pass is a
  // raw ShaderMaterial that does the transfer itself.)
  const shieldBloom = rendererFull ? createShieldBloom(rendererFull, TONE_EXPOSURE) : null;
  // Only when the bloom chain is actually there to take the job over — if it
  // bailed out (see createShieldBloom), this renderer has to keep tone
  // mapping itself or the shield would render un-curved and clipped.
  if (shieldBloom) rendererFull.toneMapping = THREE.NoToneMapping;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

  // Real environment lighting via a procedurally-generated room (PMREM) —
  // gives the helmet's gold-metal shell and glossy visor believable
  // reflections/highlights without needing to source/host an external HDRI.
  //
  // Bug fix (Round 9 — this is what was making the cursor-revealed helmet
  // render solid black instead of the lit gold/chrome model): a PMREM
  // environment texture is a WebGLRenderTarget tied to the specific
  // WebGLRenderer/GL context it was generated from. #heroBird and
  // #heroShieldGL are two SEPARATE canvases with two separate
  // WebGLRenderer instances/contexts (that's the whole point of the
  // two-canvas split — see the file header comment) — a texture built
  // from rendererBird's context is not valid inside rendererFull's context,
  // and the helmet's two materials were metallic enough that almost all of
  // their visible appearance came from environment reflections rather than
  // the direct lights below. With no valid environment, they rendered as
  // near-black. Fix:
  // generate ONE PMREM texture per renderer that actually needs it, and
  // swap `scene.environment` to the matching one immediately before each
  // renderer's render() call in the animate() loop below (the same pattern
  // already used for `scene.overrideMaterial` between the passes).
  //
  // Round 48: the shield that replaced the helmet is emissive rather than
  // metallic (see SHIELD_FRAME_EMISSIVE), so a missing environment would
  // not black it out the way it did the helmet. Kept as-is regardless — the
  // bird's own MeshStandardMaterial still reads scene.environment for its
  // ambient, and one PMREM per renderer is the correct arrangement either
  // way.
  const pmremGeneratorBird = new THREE.PMREMGenerator(rendererBird);
  const envTextureBird = pmremGeneratorBird.fromScene(new RoomEnvironment(), 0.04).texture;
  const envTextureFull = rendererFull
    ? new THREE.PMREMGenerator(rendererFull).fromScene(new RoomEnvironment(), 0.04).texture
    : envTextureBird;
  // Round 51: and a third, for the horse's renderer, for exactly the same
  // reason — her MeshStandardMaterial reads scene.environment for its
  // ambient, and a texture built in rendererBird's context is not valid in
  // this one. See the long comment above envTextureBird.
  const envTextureHorse = rendererHorse
    ? new THREE.PMREMGenerator(rendererHorse).fromScene(new RoomEnvironment(), 0.04).texture
    : envTextureBird;
  scene.environment = envTextureBird;

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
  keyLight.position.set(2.4, 3.6, 3.2);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xc9a24b, 1.1); // gold rim, brand accent
  rimLight.position.set(-3, 1.4, -2.2);
  scene.add(rimLight);

  scene.add(new THREE.AmbientLight(0xffffff, 0.65));

  // One rig, two riders — a rotation applied to this Group moves the bird
  // AND the helmet by the exact same amount/direction, every frame, with no
  // manual synchronisation code (see the big header comment above).
  const rig = new THREE.Group();
  scene.add(rig);

  // ---- bird: placeholder until the real photo + depth map load ----
  let birdMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshBasicMaterial({ visible: false }));
  birdMesh.layers.set(LAYER_BIRD);
  rig.add(birdMesh);

  /* ------------------------------------------------------------------
     Round 50/51 — the horse, revealed by the cursor blob.

     Round 50 stood her behind the bird and crossfaded her forward on hover.
     Round 51 first replaced that with an instant full-frame swap, and then —
     on the feedback that the reveal should BE the mouse effect, the way the
     old helmet's was — with this:

       - REGISTERED ON THE EYES. Her plane is built to the bird's own spec
         (PLANE_WIDTH across, PLANE_SEGMENTS grid, its own image aspect for
         height) so the two are the same size on screen, then shifted by
         HORSE_EYE_DX/HORSE_EYE_DY so her EYES land on the bird's.

         Same-size-and-centred is not the same as aligned, which is what the
         first cut of this got wrong: the two assets are both
         head-and-shoulders crops at the same aspect (1312x1199 and
         1311x1200), but they are framed differently inside that crop — the
         horse's head sits markedly lower. Measured on the pupils, her eye
         line was ~95px below the bird's in a 1311px-wide image, which is
         about 8% of the frame: obvious, not subtle.

         The 0.19% aspect difference between the two assets is left alone
         rather than "corrected" by stretching one — it amounts to ~1px of
         height. The interocular distances agree to within measurement error
         too, which is why there is no scale term here: both eyes register at
         the same offset, and a scale error would have shown up as one eye
         landing and the other missing.

         Sharing the rig means one mouse-driven tilt still moves both by
         exactly the same amount with no synchronisation code — the
         arrangement the bird and shield have always had. Being off the rig's
         rotation centre costs her nothing visible: at the tilt's extreme the
         y offset swings her ~0.018 world units in z, which at this camera
         distance is a ~0.5% apparent-size change.

       - THE BLOB IS THE REVEAL. No hover test, no swap: both portraits
         render every frame, each on its own canvas, and the cursor's fluid
         mask decides which one is seen. #heroHorse gets the sim's mask at
         NORMAL polarity (painted only where dye has been stirred) while
         #heroBird is never masked at all, so she appears inside the blob and
         the bird shows everywhere else. animations/initFluidMask.ts owns that entirely —
         see revealConsumers/publishMask() there, and .hero__horse in
         style.css for why this layer fails CLOSED where the shield's layers
         fail open.

         It is also why she needs her own canvas and renderer: a CSS mask
         applies to a whole canvas, so she cannot share #heroBird's and be
         masked separately from it. Hence LAYER_HORSE, rendererHorse, and the
         third pass in animate().
     ------------------------------------------------------------------ */
  let horseMesh = null;

  // The eye-registration offset, as a fraction of PLANE_WIDTH so it is
  // resolution-independent.
  //
  // Measured by compositing the two cutouts and stepping the offset until
  // each iris read as ONE disc rather than two: -7px horizontally and -95px
  // vertically, in ibis-color.png's own 1311px-wide pixel space, hence
  // -7/1311 and 95/1311. Both eyes land at the same offset, checked
  // independently at 4x — see the REGISTERED ON THE EYES note above.
  //
  // Y is POSITIVE where the pixel measurement was negative: image y counts
  // down the page, world y counts up, so "move her up 95px" is +y here.
  //
  // Re-measure both numbers if either asset is ever re-cropped or replaced —
  // they describe where the eyes sit inside these two particular crops, and
  // nothing in the code can derive them.
  const HORSE_EYE_DX = -7 / 1311;
  const HORSE_EYE_DY = 95 / 1311;

  // ---- shield: empty group until the real glb loads ----
  const shieldSlot = new THREE.Group();
  rig.add(shieldSlot);

  /* ------------------------------------------------------------------
     Round 48 — the shield's assemble/disassemble state machine.

     Everything between here and placeShield() below replaces the helmet's
     old treatment wholesale: the dark-charcoal wireframe ShaderMaterial
     (uRevealFront/uHideFront sweeping along the model's real world-space Y)
     and the WIRE_CYCLE_SECONDS timeline that drove it are gone, because the
     shield brings its own build animation and no longer needs a ghost layer
     to be revealed FROM.

     hex_shield_web.glb ships ONE clip, "shield_on": 81 hex cells that each
     hold scale 0.001 (invisible) until their own staggered start time, then
     pop to 1.0 with a small overshoot over ~0.25s. Their translation and
     rotation channels are constant — STEP keyframes carrying the same value
     at both ends — so the clip is purely a staggered "cells materialise
     into place" build, which reverses cleanly by running its time backwards
     exactly as the brief asks.

     The clip is authored 2.5s long but the last cell has settled by ~1.65s;
     everything after that is dead hold time (confirmed by dumping the raw
     keyframes out of the .glb). SHIELD_CLIP_END trims that tail off so a
     reversal doesn't open with a second of nothing happening.

     Rather than lean on AnimationAction's play/loop/timeScale machinery
     (which would have to be coaxed into running backwards, and can mark a
     LoopOnce action finished out from under us), the clip time is driven by
     hand: shieldTime is integrated in animate() and pushed in as
     `action.time` followed by `mixer.update(0)`. A zero-delta update is a
     no-op for the action's own clock — AnimationAction._updateTime returns
     early on deltaTime === 0, so the action can never advance or expire on
     its own — while still re-evaluating every interpolant and re-applying
     it to the nodes. That makes it an exact scrub, forwards or backwards.

     Four modes, cycled by a double-click on the stage (see the dblclick
     listener further down):
       "forming"    — shieldTime rising; the shield builds itself on screen.
       "on"         — settled, fully built. The resting state after load.
       "collapsing" — shieldTime falling; the shield packs itself away.
       "peek"       — packed away. shieldTime is parked back at the built
                      pose and the canvas faded in, because this mode flips
                      the cursor mask's polarity: the shield gets painted
                      ONLY inside the fluid blob, so it exists nowhere else
                      on the stage.

     That polarity flip is the whole point of the present/peek split, and
     it's what turns the existing cursor spill from "reveal the helmet" into
     "hide the shield", per the brief:
       present (forming / on / collapsing) — mask INVERTED: the shield
         covers the whole stage EXCEPT inside the blob, so dragging the
         cursor wipes a hole in it and the bird shows through.
       "peek" — mask NORMAL: the shield is painted only inside the blob, so
         the effect stays entirely within its own area.
     animations/initFluidMask.ts owns the mask itself (it re-encodes the live fluid sim
     as a mask-image data: URL every frame); all it needs from here is the
     window.__heroShieldMaskInverted flag, which it reads once per tick and
     applies as a cheap RGB inversion of its own small mirror canvas — see
     publishMask() in that file.
     ------------------------------------------------------------------ */
  const SHIELD_CLIP_END = 1.72;  // seconds of the clip that actually do anything — see above
  const SHIELD_PEEK_FADE = 0.32; // seconds for the peek layer to fade up once the shield is packed away

  let shieldMixer = null;
  let shieldAction = null;
  let shieldClipEnd = SHIELD_CLIP_END; // refined from the real clip once it loads
  let shieldMode = "forming";
  let shieldTime = 0;
  let peekFade = 0;
  let peekFadeTo = 1;

  function setShieldMode(next) {
    shieldMode = next;
    const peeking = next === "peek";
    if (peeking) {
      shieldTime = shieldClipEnd; // park the built pose; the mask is what hides it now
      peekFade = 0;
      // ...but only where there IS a mask. animations/initFluidMask.ts bails out
      // entirely on mobile, under reduced motion and without WebGL (see
      // window.__heroFluidMaskActive, which it sets once it is committed to
      // running), and its consumers' CSS default is no mask-image at all —
      // deliberately fail-open, so an unmasked layer shows in full. For a
      // shield that is present that fallback is exactly right; for one the
      // visitor has just double-clicked away it is exactly wrong, because
      // it would snap the whole shield straight back into view instead of
      // revealing it inside a blob that is never going to exist. So with no
      // sim running, "packed away" degrades to plain hidden — the toggle
      // still does something sensible, it just has no peek-hole.
      peekFadeTo = window.__heroFluidMaskActive === true ? 1 : 0;
    }
    window.__heroShieldMaskInverted = !peeking;
    // Push the new polarity out immediately rather than waiting for
    // animations/initFluidMask.ts's next tick — it stops ticking entirely once the
    // cursor has been still for a couple of seconds (its SETTLE_MS), which
    // is the normal case right after a double-click. Without this the
    // consumers kept the mask published under the OLD polarity: a shield
    // just packed away would come back in full and then disappear the
    // instant the mouse moved and the loop restarted. Absent whenever the
    // sim never started at all (mobile, reduced motion, no WebGL), which
    // the optional call handles.
    window.__heroPublishShieldMask?.();
    // The spill shade darkens whatever sits behind the blob. That helps the
    // shield read when the blob is REVEALING it (peek), and actively fights
    // the effect when the blob is a hole cut out of the shield to show the
    // bird — a dark smudge over exactly the thing the hole exists to
    // expose. So it only runs in peek mode, and only when there is a real
    // blob for it to be shaped by: unmasked, it would flatly tint the whole
    // stage.
    if (shadeEl) shadeEl.style.opacity = peeking && peekFadeTo > 0 ? "1" : "0";
    if (fullCanvas) fullCanvas.style.opacity = peeking ? "0" : "1";
  }

  // Set before the first paint, and deliberately not only via
  // setShieldMode: animations/initFluidMask.ts publishes an all-black "nothing revealed
  // yet" seed mask before its sim has run a single frame, and before this
  // module has even booted (see the boot order in page.tsx). The shield
  // starts out present, so that seed has to come through inverted — i.e.
  // shield fully visible — or the shield would stay invisible until the
  // visitor first moved their mouse. initFluidMask.ts reads this as
  // `!== false` so an undefined flag defaults to inverted for that reason.
  window.__heroShieldMaskInverted = true;
  setShieldMode("forming");

  // How far the depth map is allowed to push geometry toward/away from the
  // camera, in the same world units as the plane itself (PLANE_WIDTH below).
  // Tuned by eye: enough that the mouse-driven tilt visibly catches light
  // and parallaxes across the face, not so much that the silhouette looks
  // spiky or distorted at the edges of rotation. Round 9: pulled back from
  // 0.62 -> 0.5 alongside the rebuilt depth map (see assets/images/ibis/
  // ibis-depth.png and README "Round 9") as extra headroom against the
  // "eyes drag toward the cursor" warping artifact — most of that bug was
  // the OLD depth map's blurry, anatomically-arbitrary gradient rather than
  // this scale value itself, but a slightly gentler push is cheap insurance
  // now that the beak/face depth actually means something. Round 13: pulled
  // back again, 0.5 -> 0.3, per feedback that the silhouette edges (beak
  // tip, collar/shoulder line) still stretched visibly at the extremes of
  // the mouse-driven tilt.
  const DISPLACEMENT_SCALE = 0.3;
  const PLANE_WIDTH = 2.4;
  // Bumped 160 -> 260: with depth now feathered by alpha near the cutout
  // edge (see featherDepthByAlpha() above), the remaining visible jaggedness
  // at the silhouette boundary (collar/shoulder line) was the mesh's own
  // triangle size — each boundary quad still spans several pixels, so its
  // sliver of eased-but-nonzero displacement reads as a small stair-step
  // rather than a smooth taper. A finer grid shrinks each step below the
  // point it's noticeable, without changing the displacement math itself.
  const PLANE_SEGMENTS = 260;

  // Filled in once the bird photo's real aspect ratio is known — the helmet
  // placement below is expressed relative to this (it needs to sit "on top
  // of" the bird's head, not at a hardcoded world position that would only
  // happen to line up for one particular crop).
  let planeHeight = PLANE_WIDTH; // sane default (square) until the real photo loads

  function computeFrame(aspect) {
    // Camera sits straight-on; distance chosen so the plane's height fills
    // most of the stage vertically — a tight "headshot" crop, like the
    // landonorris.com portrait. Round 9: pulled in from *1.16 to *0.92 (i.e.
    // moved the camera CLOSER) per feedback that the bird should be sized
    // more like Lando's own photo, whose limbs/shoulders bleed off the edge
    // of frame — *1.16 left visible headroom on every side; *0.92 crops the
    // hair tufts/shoulders at the viewport edges instead of floating them
    // inside a margin.
    planeHeight = PLANE_WIDTH / aspect;
    const fovRad = (camera.fov * Math.PI) / 180;
    const distance = (planeHeight / 2 / Math.tan(fovRad / 2)) * 0.92;
    camera.position.set(0, planeHeight * 0.06, distance);
    camera.lookAt(0, planeHeight * 0.06, 0);
    camera.near = Math.max(distance / 100, 0.01);
    camera.far = distance * 20;
    camera.updateProjectionMatrix();
  }

  loadDepthPhotoAssets(
    PHOTO_COLOR_URL,
    PHOTO_DEPTH_URL,
    (colorTex, depthTex) => {
      const img = colorTex.image;
      const aspect = img && img.width && img.height ? img.width / img.height : 1;
      const segH = Math.max(2, Math.round(PLANE_SEGMENTS / aspect));
      const height = PLANE_WIDTH / aspect;

      rig.remove(birdMesh);
      // Round 50: the inline MeshStandardMaterial that used to be written out
      // here now lives in makeDepthPhotoMaterial() — shared with the horse,
      // and fadeable without reopening the Round 12 "solid pixels go
      // see-through" bug. See that function for how.
      birdMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(PLANE_WIDTH, height, PLANE_SEGMENTS, segH),
        makeDepthPhotoMaterial(colorTex, depthTex, DISPLACEMENT_SCALE)
      );
      birdMesh.layers.set(LAYER_BIRD);
      rig.add(birdMesh);

      computeFrame(aspect);
      placeShield(); // re-run in case the shield finished loading first
      noteLoadSettled();
    },
    () => {
      noteLoadSettled();
      noteLoadFailed();
    }
  );

  computeFrame(1); // sane default framing before the real aspect is known

  loadDepthPhotoAssets(
    HORSE_COLOR_URL,
    HORSE_DEPTH_URL,
    (colorTex, depthTex) => {
      const img = colorTex.image;
      const aspect = img && img.width && img.height ? img.width / img.height : 1;
      const segH = Math.max(2, Math.round(PLANE_SEGMENTS / aspect));
      horseMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(PLANE_WIDTH, PLANE_WIDTH / aspect, PLANE_SEGMENTS, segH),
        // softEdges: horse-color.png's cutout is 3.1% partial alpha, nearly
        // all of it the hair down both sides — see makeDepthPhotoMaterial()
        // for the measurements and why a hard alphaTest frays it.
        makeDepthPhotoMaterial(colorTex, depthTex, DISPLACEMENT_SCALE, true)
      );
      horseMesh.layers.set(LAYER_HORSE);
      // The eye-registration shift. Applied to the mesh rather than to a
      // parent group so there is one transform to reason about, and left in
      // the rig so the mouse tilt still carries both portraits together.
      horseMesh.position.set(HORSE_EYE_DX * PLANE_WIDTH, HORSE_EYE_DY * PLANE_WIDTH, 0);
      rig.add(horseMesh);
    },
    // Deliberately NOT wired into pendingLoads/#heroLoadNotice: she is an
    // enhancement living inside the cursor effect, so she must not hold the
    // spinner up or put a "serve this over http(s)" banner on a page whose
    // actual hero loaded fine. If she never arrives the blob reveals nothing
    // and the bird is all there is.
    () => {}
  );

  // ---- shield placement, relative to the bird plane's own measurements ----
  // Round 48: the old helmet was WORN — HELMET_WIDTH_FRAC 0.50 /
  // HELMET_Y_FRAC 0.14 / HELMET_Z_OFFSET 0.22, all tuned to sit it on the
  // bird's crown with the visor at eye height. The shield instead stands IN
  // FRONT of the bird, between it and the camera, so SHIELD_Z_OFFSET is a
  // real distance rather than the helmet's token nudge: far enough that the
  // shield's own curvature (a dome bulging toward the viewer — roughly 0.88
  // deep against 1.51 wide in its own units) clears the bird plane's
  // depth-map displacement (DISPLACEMENT_SCALE above) instead of the beak
  // poking through a cell.
  //
  // That distance also magnifies the shield perspectivally, which would
  // make a plain "fraction of the plane's width" scale factor lie about the
  // size it actually reads at. So both fracs below describe the shield's
  // APPARENT size and position — what it measures against the bird plane's
  // own frame once drawn — and placeShield() divides the magnification back
  // out. Change one and you get exactly the change you asked for on screen,
  // whatever SHIELD_Z_OFFSET happens to be.
  // Round 49: enlarged from 0.72 / 0.03 / 0.75 per direct feedback that the
  // shield should cover the bird's whole visible body rather than sit around
  // its head. At 0.86 the shield's apparent height slightly exceeds the
  // camera's visible height at the bird plane, so it spans the frame
  // top-to-bottom and reads as a full body shield, with background still
  // showing to either side. Z pushed out to match: the dome deepens with
  // the scale, and it has to stay clear of the bird plane's own depth-map
  // displacement (DISPLACEMENT_SCALE) at the rim.
  const SHIELD_WIDTH_FRAC = 0.86; // apparent width, as a fraction of PLANE_WIDTH
  const SHIELD_Y_FRAC = 0.05;     // apparent centre height, as a fraction of planeHeight
  const SHIELD_Z_OFFSET = 0.85;   // world units from the bird plane, toward the camera
  let shieldLoadedModel = null;

  function placeShield() {
    if (!shieldLoadedModel) return;

    // MUST be measured in the fully-built pose. Every cell rests at scale
    // 0.001 until its own staggered start time (see the state machine
    // above), so measuring the model as loaded — or part-way through a
    // build — returns a near-empty box and a correspondingly enormous
    // scale factor.
    const restoreTime = shieldTime;
    shieldLoadedModel.scale.setScalar(1);
    shieldLoadedModel.position.set(0, 0, 0);
    if (shieldAction) {
      shieldAction.time = shieldClipEnd;
      shieldMixer.update(0);
    }

    const box = measureLocalBox(shieldLoadedModel);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    if (!size.x || !isFinite(size.x)) return;

    // Perspective compensation. The camera looks straight down -Z from
    // (0, camY, distance) (see computeFrame() above), so anything pushed
    // SHIELD_Z_OFFSET toward it is drawn distance / (distance - offset)
    // times larger; scaling by the reciprocal is what makes
    // SHIELD_WIDTH_FRAC mean "this fraction of the bird plane's width, as
    // seen" rather than "as modelled".
    const distance = camera.position.z;
    const persp = distance > 0 ? (distance - SHIELD_Z_OFFSET) / distance : 1;
    const scale = (PLANE_WIDTH * SHIELD_WIDTH_FRAC * persp) / size.x;
    shieldLoadedModel.scale.setScalar(scale);
    // Recentre the built shield's own bounding box on the slot's origin, so
    // the slot position below places the shield's centre rather than
    // whatever arbitrary origin it happened to be exported around.
    shieldLoadedModel.position.copy(center).multiplyScalar(-scale);

    // Same compensation on the vertical placement, measured against the
    // camera's own (slightly raised) eye line rather than the plane's
    // centre: a point off that line shifts on screen as it moves toward the
    // camera, and SHIELD_Y_FRAC is meant to be read off the drawn frame.
    const camY = camera.position.y;
    const apparentY = planeHeight * SHIELD_Y_FRAC;
    shieldSlot.position.set(0, camY + (apparentY - camY) * persp, SHIELD_Z_OFFSET);

    if (shieldAction) {
      shieldAction.time = restoreTime;
      shieldMixer.update(0);
    }
  }

  loadShieldModel(
    (gltf) => {
      const model = gltf.scene;

      // Both materials are authored with KHR_materials_emissive_strength
      // (30 on the frame, 3.5 on the panels — the vendored GLTFLoader does
      // honour that extension, folding it into emissiveIntensity). Pushed
      // straight through this renderer's ACES tone mapping at this
      // exposure, anything that hot clips to flat white and loses the
      // frame's gold entirely. Round 49 splits the two apart and sets each
      // an ABSOLUTE level (see SHIELD_FRAME_EMISSIVE / SHIELD_PANEL_EMISSIVE
      // and the long note beside them): the core is held where ACES still
      // renders it as a saturated gold, and the brightness that used to be
      // chased here is bought from the bloom pass instead. The authored
      // emissive COLOURS are never touched — only how hard they are driven.
      //
      // Tracked in a Set and applied ONCE PER MATERIAL: GLTFLoader caches
      // materials, so all 81 cells share these same two instances. The
      // previous cut multiplied inside the per-mesh traversal below, i.e.
      // 81 times over — 0.06^81, no glow whatsoever, which is exactly how
      // it rendered.
      const dialledEmissive = new Set();
      const dialEmissive = (mat) => {
        if (!mat || dialledEmissive.has(mat)) return;
        dialledEmissive.add(mat);
        if (typeof mat.emissiveIntensity !== "number") return;
        const name = mat.name || "";
        if (name.indexOf("Frame") !== -1) {
          mat.emissiveIntensity = SHIELD_FRAME_EMISSIVE;
          // setRGB with no colour space given writes the renderer's working
          // space, which is linear-sRGB — the space emissive is read in.
          if (mat.emissive) mat.emissive.setRGB(...SHIELD_FRAME_EMISSIVE_RGB);
          if (typeof mat.envMapIntensity === "number") {
            mat.envMapIntensity = SHIELD_FRAME_ENV_INTENSITY;
          }
        } else if (name.indexOf("Panel") !== -1) {
          mat.emissiveIntensity = SHIELD_PANEL_EMISSIVE;
        } else {
          mat.emissiveIntensity *= SHIELD_EMISSIVE_FALLBACK_SCALE;
        }
      };

      model.traverse((obj) => {
        if (!obj.isMesh) return;
        obj.layers.set(LAYER_SHIELD);
        obj.castShadow = false;
        obj.receiveShadow = false;
        if (Array.isArray(obj.material)) obj.material.forEach(dialEmissive);
        else dialEmissive(obj.material);
      });

      shieldLoadedModel = model;
      shieldSlot.add(model);

      const clip = gltf.animations && gltf.animations[0];
      if (clip) {
        shieldClipEnd = Math.min(clip.duration, SHIELD_CLIP_END);
        shieldMixer = new THREE.AnimationMixer(model);
        shieldAction = shieldMixer.clipAction(clip);
        shieldAction.setLoop(THREE.LoopOnce, 1);
        shieldAction.clampWhenFinished = true;
        // Activates the action so mixer.update() evaluates it at all. Its
        // own clock is never advanced from here — see the state machine.
        shieldAction.play();
      } else {
        // Every cell's rest pose is scale 0.001, so with no clip to drive
        // there is nothing to see at all. Worth a word in the console
        // rather than a silently empty stage.
        console.warn("[hero3d] shield model has no animation clip — nothing to assemble:", SHIELD_URL);
      }

      placeShield();

      // Per the brief, the shield assembles itself out of nothing the
      // moment the page has the model. Reduced motion gets the finished
      // article handed straight over instead.
      shieldTime = prefersReducedMotion ? shieldClipEnd : 0;
      setShieldMode(prefersReducedMotion ? "on" : "forming");
      if (shieldAction) {
        shieldAction.time = shieldTime;
        shieldMixer.update(0);
      }

      noteLoadSettled();
    },
    () => {
      noteLoadSettled();
      noteLoadFailed();
    }
  );

  // ---- mouse-driven rotation (applied to the whole rig) + mask-reveal ----
  // Per the brief, the helmet must move by the SAME amount/direction as the
  // bird — using one rig.rotation for both (rather than the bird-only
  // pipeline's smaller-angle plane tilt) is what guarantees that, and reads
  // fine at this magnitude since the helmet is a real 3D object, not a flat
  // displaced plane that would show its bare edges at larger angles.
  //
  // Round 9: both coefficients pulled back (0.24/0.14 -> 0.13/0.075) per
  // feedback — a smaller rotation range means any residual depth-map
  // imperfection parallaxes less aggressively across the face, on top of
  // just being the calmer, more "premium" motion that was asked for
  // directly.
  // Round 11: magnitude bumped up ~45% (0.13/0.075 -> 0.19/0.105) per
  // feedback asking for clearer/stronger motion in every direction.
  //
  // Round 13: the damped-spring integration this used to have (carried
  // velocity + stiffness/damping constants) could overshoot its target and
  // oscillate back past it before settling — reads as a "bounce", most
  // noticeable right after pointerleave snaps the target back to 0. Replaced
  // with a plain frame-rate-independent exponential lag (see the rotation
  // update in animate() below): the rig always eases MONOTONICALLY toward
  // wantRotY/X, never past it, so it still visibly lags a beat behind the
  // cursor for a cinematic feel without ever bouncing.
  let targetRotY = 0;
  let targetRotX = 0;
  const ROT_LAG_SECONDS = 0.22; // time constant: larger = more cinematic delay behind the cursor
  function handlePointerMove(e) {
    const rect = stage.getBoundingClientRect();
    const nx = rect.width ? (e.clientX - rect.left) / rect.width - 0.5 : 0;
    const ny = rect.height ? (e.clientY - rect.top) / rect.height - 0.5 : 0;
    targetRotY = nx * 0.19;
    targetRotX = -ny * 0.105;
  }
  function handlePointerLeave() {
    targetRotY = 0;
    targetRotX = 0;
  }
  if (!mobile) {
    stage.addEventListener("pointermove", handlePointerMove);
      // Round 51: the horse used to be swapped in from here, off a per-pixel
      // alpha hit test on the bird's silhouette. She isn't any more — the
      // cursor's own fluid blob is the reveal, and animations/initFluidMask.ts already
      // tracks the pointer for that, so there is nothing for this handler to
      // do about her. See the horse block above.
    stage.addEventListener("pointerleave", handlePointerLeave);
  }

  // Round 48, per the brief: a double-click reverses the same "shield_on"
  // clip that built the shield, packing it away again; another one builds
  // it back. A double-click mid-flight just flips the direction from
  // wherever the build happens to have got to, so it never snaps or
  // restarts — only the peek state (which parks the clip at its end, see
  // setShieldMode) has to rewind to zero to build again.
  //
  // Bound to #heroStage rather than window: the stage is absolutely
  // positioned across the whole hero (inset: 0 — see .hero__stage in
  // style.css) and every canvas inside it is pointer-events: none, so at
  // rest this genuinely is "anywhere on the screen", while a double-click
  // somewhere far down the page can't silently reach in and toggle the
  // hero. Registered on mobile too — unlike the rotation listeners above,
  // a double-tap is something a touch visitor can actually perform.
  function handleDoubleClick() {
    if (shieldMode === "on" || shieldMode === "forming") setShieldMode("collapsing");
    else if (shieldMode === "collapsing") setShieldMode("forming");
    else {
      shieldTime = 0;
      setShieldMode("forming");
    }
  }
  stage.addEventListener("dblclick", handleDoubleClick);

  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    if (!w || !h) return;
    rendererBird.setSize(w, h, false);
    if (rendererFull) rendererFull.setSize(w, h, false);
    if (rendererHorse) rendererHorse.setSize(w, h, false);
    // After setSize, so it reads the ratio the renderer actually settled on.
    if (shieldBloom) shieldBloom.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  // The cursor-follow "spill" blob itself — the mask that decides where
  // #heroShieldGL's shield is and isn't painted — lives entirely in
  // animations/initFluidMask.ts (a real GPU fluid simulation that sets
  // #heroShieldGL/#heroSpillShade's own mask-image directly, including its
  // own mobile/reduced-motion fallback), fully independent of this file.
  // The one thing it takes from here is the polarity flag
  // window.__heroShieldMaskInverted — see setShieldMode() above.

  const clock = new THREE.Clock();
  let raf = null;
  function animate() {
    raf = requestAnimationFrame(animate);
    const elapsed = clock.elapsedTime;
    const clockDelta = clock.getDelta();

    // Round 9: as the hero collapses into its scroll-driven box (see
    // initHeroCollapse() in animations/initMain.ts), the mouse interaction eased out
    // smoothly toward zero as the box shrank. Round 11 replaces that
    // gradual fade with a hard freeze instead — per feedback, the whole
    // scene inside the hero should "stop, as if it turned into a photo"
    // during the zoom-out (the wireframe cycle and the cursor spill named
    // explicitly), which reads as a genuine freeze-frame rather than a slow
    // settle toward a neutral pose. window.__heroCollapseProgress is a
    // plain 0..1 number (0 = hero at rest/full-viewport, 1 = fully
    // collapsed) written every scrub tick — see that function for why a
    // global rather than a callback/event was the simplest wiring here.
    const collapseProgress = Math.min(Math.max(window.__heroCollapseProgress || 0, 0), 1);
    const frozen = collapseProgress > 0.001;

    if (!frozen && !prefersReducedMotion) {
      // A barely-there idle sway so the rig doesn't look frozen when the
      // pointer isn't moving, subtle enough not to fight the mouse-driven
      // tilt above.
      const idleY = Math.sin(elapsed * 0.6) * 0.012;
      const idleX = Math.sin(elapsed * 0.5 + 1.3) * 0.006;
      const wantRotY = targetRotY + idleY;
      const wantRotX = targetRotX + idleX;
      // Round 13: frame-rate-independent exponential lag (see the
      // ROT_LAG_SECONDS comment above the pointermove listener for why this
      // replaced the old damped-spring integration) — monotonic approach to
      // the target, so it can lag behind the cursor but never overshoot/
      // bounce past it.
      const rotLerp = 1 - Math.exp(-clockDelta / ROT_LAG_SECONDS);
      rig.rotation.y += (wantRotY - rig.rotation.y) * rotLerp;
      rig.rotation.x += (wantRotX - rig.rotation.x) * rotLerp;
    }

    // Round 51: the ibis/horse crossfade used to be integrated here. It is
    // gone — the cursor's fluid blob is the reveal now (see the horse block
    // above), so there is no mix to ease and nothing for this loop to do
    // beyond drawing her pass below.

    // Round 48 — advance the shield's own clip time. Like the wireframe
    // reveal/hide cycle it replaces (Round 28), this deliberately keeps
    // running through the hero's scroll zoom-out rather than freezing with
    // the rig rotation and the cursor spill — a build or collapse that is
    // mid-flight when the visitor starts scrolling still finishes instead
    // of stalling half-assembled.
    if (shieldAction) {
      // Reduced motion gets no build animation, just the end state — a
      // step this large always lands on the clamp in one frame, which
      // keeps the transitions below branch-free.
      const step = prefersReducedMotion ? 1e3 : clockDelta;
      if (shieldMode === "forming") {
        shieldTime = Math.min(shieldClipEnd, shieldTime + step);
        if (shieldTime >= shieldClipEnd) setShieldMode("on");
      } else if (shieldMode === "collapsing") {
        shieldTime = Math.max(0, shieldTime - step);
        if (shieldTime <= 0) setShieldMode("peek");
      } else if (shieldMode === "peek" && peekFade < peekFadeTo) {
        peekFade = Math.min(peekFadeTo, peekFade + step / SHIELD_PEEK_FADE);
        if (fullCanvas) fullCanvas.style.opacity = String(peekFade);
      }
      // An `action.time` write plus a zero-delta mixer update, rather than
      // play()/timeScale — see the state machine's own comment for why.
      shieldAction.time = shieldTime;
      shieldMixer.update(0);
    }

    // Pass 1 — bird only, normal materials, always fully opaque. Uses the
    // environment texture generated FOR rendererBird's own context (see the
    // big comment on envTextureBird/envTextureFull above).
    scene.environment = envTextureBird;
    camera.layers.set(LAYER_BIRD);
    rendererBird.render(scene, camera);

    // Pass 2 — the horse, alone on the canvas the fluid mask reveals her
    // through (#heroHorse). Same scene, same camera, same rig, so she is
    // already in perfect registration with the bird drawn above; the only
    // reason this is a second pass at all is that a CSS mask applies to a
    // whole canvas, so she cannot be masked separately while sharing the
    // bird's. Third PMREM for the third context — see envTextureHorse.
    //
    // Unconditional: whether she is VISIBLE is entirely the mask's business
    // (animations/initFluidMask.ts publishes it at normal polarity, so she is painted
    // only inside the blob), and gating the render on the sim's state here
    // would mean this file duplicating that file's notion of where the
    // cursor is.
    if (rendererHorse && horseMesh) {
      scene.environment = envTextureHorse;
      camera.layers.set(LAYER_HORSE);
      rendererHorse.render(scene, camera);
    }

    // Pass 3 — shield only, with its own authored materials (emissive gold
    // frame + translucent panels), on the one canvas the fluid mask acts
    // on. Round 48 deleted the old Pass 2 along with the helmet it drew: a
    // dark-charcoal wireframe override on its own #heroHelmetWire canvas,
    // permanently visible under the cursor reveal. The shield has exactly
    // two states now — present, or peeking through the blob (see the state
    // machine at the top of this function) — and a third always-on ghost
    // layer of it would sit there inside the very hole the blob exists to
    // cut.
    //
    // Still needs the environment texture generated FOR rendererFull's own
    // context: reusing envTextureBird here was the actual cause of the old
    // "spill reveals solid black" bug (see that comment above).
    //
    // Round 49: goes through the bloom chain rather than straight to the
    // canvas — same scene, same camera, same layer, but rendered into a
    // linear HDR target first so the glow can be built and added before
    // tone mapping. See createShieldBloom().
    if (rendererFull) {
      scene.environment = envTextureFull;
      camera.layers.set(LAYER_SHIELD);
      if (shieldBloom) shieldBloom.render(scene, camera);
      else rendererFull.render(scene, camera);
    }

    camera.layers.enableAll();
  }
  animate();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(raf);
          raf = null;
        } else if (!raf) {
          animate();
        }
      });
    },
    { threshold: 0.05 }
  );
  observer.observe(stage);

  return () => {
    disposed = true;
    observer.disconnect();
    window.removeEventListener("resize", resize);
    stage.removeEventListener("pointermove", handlePointerMove);
    stage.removeEventListener("pointerleave", handlePointerLeave);
    stage.removeEventListener("dblclick", handleDoubleClick);
    if (raf) cancelAnimationFrame(raf);
    shieldBloom?.dispose();
    scene.traverse((object) => {
      object.geometry?.dispose?.();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.filter(Boolean).forEach((material) => material.dispose?.());
    });
    new Set([envTextureBird, envTextureFull, envTextureHorse]).forEach((texture) => texture?.dispose?.());
    [rendererBird, rendererFull, rendererHorse].filter(Boolean).forEach((renderer) => {
      renderer.dispose();
      renderer.forceContextLoss();
    });
  };
}

export function initHero3d() {
  const disposeAmbient = initAmbientScene();
  try {
    const disposeHero = initHeroScene();
    return () => {
      disposeHero?.();
      disposeAmbient?.();
    };
  } catch (error) {
    disposeAmbient?.();
    document.getElementById("heroLoading")?.classList.add("is-hidden");
    document.getElementById("heroLoadNotice")?.classList.add("is-visible");
    console.error("[hero3d] failed to initialise the hero:", error);
    return () => {};
  }
}

// Round 41 (React/Vite port): used to self-boot off document.readyState /
// DOMContentLoaded, which was safe under the old static page (this module
// script always ran after the static hero markup had already been parsed).
// Under React, that markup only exists once App.jsx has actually mounted
// it, so boot() is now exposed and invoked explicitly from a useEffect in
// page.tsx after mount instead. initAmbientScene()/initHeroScene() below
// are unchanged.
