/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- Ported graphics engine behind a typed React adapter.
/* ========================================================================== 
   Kent Business College — hero cursor "spill" reveal, take 2

   Replaces the old feTurbulence-wobbled SVG ellipse (see the removed
   #heroSpillShape / #heroSpillWake* markup and DRIFT_DECAY_TAU code that
   used to live in animations/initHero3d.ts) with a real GPU fluid simulation — the same
   Jos Stam stable-fluids pipeline (advection, curl/vorticity confinement,
   divergence, pressure projection via Jacobi iteration, gradient
   subtraction) as the reference demo at
   C:\Users\ASMAA\Downloads\fluidcursordemoV1.html, ported near-verbatim so
   the motion physics genuinely match — same shaders, same formulas,
   including that demo's own splat-radius quirk (divided by 100 before use;
   kept as-is rather than "fixed", since matching its actual behaviour was
   the whole point).

   The one deliberate difference: this version never injects colour. Every
   splat uses plain white (1,1,1) instead of the reference's HSV hue-cycle,
   so the simulated dye density IS a usable luminance mask on its own —
   white where the fluid is dense, black everywhere else. "Auto splats" is
   also always off here — this mask should only ever respond to a real
   cursor, never drift on its own from idle random splats.

   Round 48: what "white" MEANS to the consumers is no longer fixed. The
   hero's 3D helmet was replaced by a hex shield that assembles itself on
   load, and per the brief this blob now HIDES that shield rather than
   revealing a helmet — so animations/initHero3d.ts flips the mask's polarity depending
   on whether the shield is currently present on the stage or packed away.
   All of that decision-making lives over there; the only thing here is
   publishMask(), which reads the one flag it publishes
   (window.__heroShieldMaskInverted) and, when set, inverts the mirror
   canvas's RGB before encoding it. See publishMask() below.

   Round 2: the first version of this piped the live sim into an SVG <mask>
   via a <canvas> inside a <foreignObject>, refreshed by mutating the
   foreignObject's own size every frame — a documented-elsewhere workaround
   for "a WebGL canvas's backing store is invisible to a <mask>'s software
   raster pass". That part still held, but a live A/B test (six different
   DOM-mutation "nudge" tricks, including that one) found Chromium simply
   never re-rasterizes a <mask>'s foreignObject/canvas content after its
   first paint, full stop — no mutation anywhere in that chain moves it.
   Fixed by re-encoding a mirror canvas as a data: URL and reassigning it
   directly as the consumers' own mask-image every frame instead — a
   genuinely different resource each time, which every browser's image
   pipeline reliably treats as dirty.

   Plain classic script (no ES module, no bundler) — its own dedicated
   WebGL context on #heroFluidCanvas, completely independent of
   animations/initHero3d.ts's three-canvas Three.js setup. The two never touch each
   other directly; this only reads window.__heroCollapseProgress (the same
   global initHero3d.ts already writes every scrub tick) so the fluid freezes
   in place during the hero's scroll-collapse instead of fighting it.
   ========================================================================== */
// Round 41 (React/Vite port): was a self-invoking `(function () {...})()`
// that ran immediately when this classic script tag executed — safe under
// the old static page only because this tag sat after all the hero markup
// in the HTML source, so by the time it ran, #heroStage/#heroFluidCanvas
// already existed. Under React that markup is rendered by JS, so this is
// now exported and called explicitly from a useEffect in page.tsx once
// mounted, instead of relying on script position. Logic below is untouched.
export function initFluidMask() {
  const stage = document.getElementById("heroStage");
  const canvas = document.getElementById("heroFluidCanvas");
  if (!stage || !canvas) return () => {};

  // The elements actually masked by the live sim. No mask-image at all is
  // their default CSS state (see .hero__shieldGL / .hero__spillShade in
  // style.css) — "fail open," so every early-return below (no WebGL,
  // reduced-motion, mobile) needs no explicit fallback action: the shield
  // is just already fully visible until/unless a mask-image gets set below.
  const maskConsumers = [
    document.getElementById("heroShieldGL"),
    document.getElementById("heroSpillShade")
  ].filter(Boolean);

  // Round 51 — a second consumer group, on the OPPOSITE side of the blob
  // from the shield's default state.
  //
  // The horse portrait (see .hero__horse in style.css and the horse block in
  // animations/initHero3d.ts) is revealed BY the blob: it is painted only where the
  // cursor has stirred dye, so it wants the mirror canvas as the sim
  // actually rendered it. The shield's group, in its resting state, wants
  // that inverted — the blob is a hole cut out of it. They are only ever the
  // same mask in the shield's "peek" state, and publishMask() below skips
  // the second encode when they coincide.
  //
  // Kept as its own list rather than a flag on each element because the
  // polarity here is fixed: unlike the shield, nothing about the horse's
  // treatment ever flips it.
  const revealConsumers = [document.getElementById("heroHorse")].filter(Boolean);

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 959px)").matches;

  // Phones and tablets do not have a persistent hover position, and running
  // the desktop fluid simulation there costs a fourth WebGL context. Give
  // touch users the same bird -> horse reveal with a lightweight radial
  // mask instead: press or drag across the portrait to move the reveal, and
  // keep the last tap visible briefly so the interaction is easy to notice.
  if (isMobile && !prefersReducedMotion) {
    let activePointerId = null;
    let lastPosition = null;
    let resetTimer = null;

    const setMask = (elements, value) => {
      elements.forEach((element) => {
        element.style.maskImage = value;
        element.style.webkitMaskImage = value;
      });
    };

    const publishTouchMask = () => {
      if (!lastPosition) {
        setMask(revealConsumers, "linear-gradient(#000, #000)");
        setMask(
          maskConsumers,
          window.__heroShieldMaskInverted === false
            ? "linear-gradient(#000, #000)"
            : "linear-gradient(#fff, #fff)"
        );
        return;
      }

      const { x, y } = lastPosition;
      const revealMask = `radial-gradient(circle clamp(110px, 27vmin, 230px) at ${x}% ${y}%, #fff 0%, #fff 52%, #000 78%, #000 100%)`;
      const inverseMask = `radial-gradient(circle clamp(110px, 27vmin, 230px) at ${x}% ${y}%, #000 0%, #000 52%, #fff 78%, #fff 100%)`;

      setMask(revealConsumers, revealMask);
      setMask(
        maskConsumers,
        window.__heroShieldMaskInverted === false ? revealMask : inverseMask
      );
    };

    const updatePosition = (event) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      lastPosition = {
        x: Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100)),
        y: Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100))
      };
      publishTouchMask();
    };

    const cancelReset = () => {
      if (resetTimer !== null) window.clearTimeout(resetTimer);
      resetTimer = null;
    };

    const handlePointerDown = (event) => {
      cancelReset();
      activePointerId = event.pointerId;
      updatePosition(event);
    };

    const handlePointerMove = (event) => {
      if (event.pointerId !== activePointerId) return;
      updatePosition(event);
    };

    const finishInteraction = (event) => {
      if (event.pointerId !== activePointerId) return;
      activePointerId = null;
      cancelReset();
      resetTimer = window.setTimeout(() => {
        lastPosition = null;
        publishTouchMask();
        resetTimer = null;
      }, 1200);
    };

    window.__heroFluidMaskActive = true;
    window.__heroPublishShieldMask = publishTouchMask;
    publishTouchMask();

    stage.addEventListener("pointerdown", handlePointerDown);
    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerup", finishInteraction);
    stage.addEventListener("pointercancel", finishInteraction);

    return () => {
      cancelReset();
      stage.removeEventListener("pointerdown", handlePointerDown);
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerup", finishInteraction);
      stage.removeEventListener("pointercancel", finishInteraction);
      [...maskConsumers, ...revealConsumers].forEach((element) => {
        element.style.removeProperty("mask-image");
        element.style.removeProperty("-webkit-mask-image");
      });
      if (window.__heroPublishShieldMask === publishTouchMask) {
        delete window.__heroPublishShieldMask;
      }
      delete window.__heroFluidMaskActive;
    };
  }

  // Keep the static fallback for visitors who explicitly request reduced
  // motion. The desktop path below retains the full fluid cursor effect.
  if (prefersReducedMotion) return () => {};

  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return () => {}; // no WebGL — fail open, same as above.

  // Small offscreen mirror the WebGL frame gets copied into every tick (see
  // frame() below) purely so encoding it as a mask-image is cheap — never
  // attached to the DOM, doesn't need to be.
  const maskCanvas = document.createElement("canvas");
  const maskCtx = maskCanvas.getContext("2d");
  if (!maskCtx) return () => {};

  // Round 49: a SECOND buffer, and the reason there are now two.
  //
  // maskCanvas is the pristine mirror of the sim — exactly what the fluid
  // rendered, never modified. outCanvas is what actually gets encoded, and
  // is where the shield's polarity inversion is applied (see publishMask()).
  // Keeping them apart is what makes publishMask() idempotent, and that in
  // turn is what lets it be called from OUTSIDE the render loop: the first
  // version inverted maskCanvas in place, so a second call on the same
  // frame would have inverted an already-inverted image back again.
  //
  // That mattered because of a real bug. This sim stops scheduling entirely
  // once nothing has happened for SETTLE_MS (see frame()), so when the
  // visitor double-clicked the shield away and then sat still, initHero3d.ts
  // flipped the polarity flag but nothing was left running to act on it —
  // the consumers kept the last mask published under the OLD polarity,
  // which for a packed-away shield meant "show everywhere". The shield came
  // back in full and then vanished the instant the mouse moved and the loop
  // restarted. initHero3d.ts now calls window.__heroPublishShieldMask() (set
  // below) the moment it changes the flag, and that only works if
  // re-publishing an unchanged sim frame is safe.
  const outCanvas = document.createElement("canvas");
  const outCtx = outCanvas.getContext("2d");
  if (!outCtx) return () => {};

  let halfFloat = gl.getExtension("OES_texture_half_float");
  let halfFloatLinear = gl.getExtension("OES_texture_half_float_linear");
  gl.getExtension("WEBGL_color_buffer_float");
  const texType = halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE;
  const supportLinear = !!halfFloatLinear;

  function compileShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
    }
    return s;
  }
  function createProgram(vsSrc, fsSrc) {
    const vs = compileShader(gl.VERTEX_SHADER, vsSrc);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc);
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(p));
    }
    const uniforms = {};
    const count = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(p, i);
      uniforms[info.name] = gl.getUniformLocation(p, info.name);
    }
    return { program: p, uniforms };
  }

  const baseVertex = `
    precision highp float;
    attribute vec2 aPos;
    varying vec2 vUv;
    varying vec2 vL, vR, vT, vB;
    uniform vec2 texelSize;
    void main () {
      vUv = aPos * 0.5 + 0.5;
      vL = vUv - vec2(texelSize.x, 0.0);
      vR = vUv + vec2(texelSize.x, 0.0);
      vT = vUv + vec2(0.0, texelSize.y);
      vB = vUv - vec2(0.0, texelSize.y);
      gl_Position = vec4(aPos, 0.0, 1.0);
    }`;

  const clearShader = `
    precision mediump float;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () { gl_FragColor = value * texture2D(uTexture, vUv); }`;

  const splatShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
      vec2 p = vUv - point.xy;
      p.x *= aspectRatio;
      vec3 splat = exp(-dot(p, p) / radius) * color;
      vec3 base = texture2D(uTarget, vUv).xyz;
      gl_FragColor = vec4(base + splat, 1.0);
    }`;

  const advectionShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform float dt;
    uniform float dissipation;
    void main () {
      vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
      vec4 result = texture2D(uSource, coord);
      gl_FragColor = dissipation * result;
    }`;

  const divergenceShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).x;
      float R = texture2D(uVelocity, vR).x;
      float T = texture2D(uVelocity, vT).y;
      float B = texture2D(uVelocity, vB).y;
      float div = 0.5 * (R - L + T - B);
      gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }`;

  const curlShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).y;
      float R = texture2D(uVelocity, vR).y;
      float T = texture2D(uVelocity, vT).x;
      float B = texture2D(uVelocity, vB).x;
      float vort = 0.5 * (R - L - T + B);
      gl_FragColor = vec4(vort, 0.0, 0.0, 1.0);
    }`;

  const vorticityShader = `
    precision highp float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curlStrength;
    uniform float dt;
    void main () {
      float L = texture2D(uCurl, vL).x;
      float R = texture2D(uCurl, vR).x;
      float T = texture2D(uCurl, vT).x;
      float B = texture2D(uCurl, vB).x;
      float C = texture2D(uCurl, vUv).x;
      vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
      force /= length(force) + 0.0001;
      force *= curlStrength * C;
      force.y *= -1.0;
      vec2 vel = texture2D(uVelocity, vUv).xy;
      gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }`;

  const pressureShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      float div = texture2D(uDivergence, vUv).x;
      float pressure = (L + R + B + T - div) * 0.25;
      gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }`;

  const gradientSubtractShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      vec2 vel = texture2D(uVelocity, vUv).xy;
      vel -= vec2(R - L, T - B);
      gl_FragColor = vec4(vel, 0.0, 1.0);
    }`;

  const displayShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
      vec3 c = texture2D(uTexture, vUv).rgb;
      c = pow(c, vec3(0.8));
      gl_FragColor = vec4(c, 1.0);
    }`;

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), gl.STATIC_DRAW);

  function blit(target) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, target ? target.fbo : null);
    gl.viewport(0, 0, target ? target.width : gl.drawingBufferWidth, target ? target.height : gl.drawingBufferHeight);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  }

  function createFBO(w, h, type) {
    gl.activeTexture(gl.TEXTURE0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, supportLinear ? gl.LINEAR : gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, supportLinear ? gl.LINEAR : gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, type, null);
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);
    return {
      texture, fbo, width: w, height: h,
      attach(id) {
        gl.activeTexture(gl.TEXTURE0 + id);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        return id;
      }
    };
  }
  function createDoubleFBO(w, h, type) {
    let fbo1 = createFBO(w, h, type);
    let fbo2 = createFBO(w, h, type);
    return {
      get read() { return fbo1; },
      get write() { return fbo2; },
      swap() { const tmp = fbo1; fbo1 = fbo2; fbo2 = tmp; }
    };
  }

  const simRes = 128;
  const dyeRes = 512;
  let velocity = createDoubleFBO(simRes, simRes, texType);
  let dye = createDoubleFBO(dyeRes, dyeRes, texType);
  let divergence = createFBO(simRes, simRes, texType);
  let curlFBO = createFBO(simRes, simRes, texType);
  let pressure = createDoubleFBO(simRes, simRes, texType);

  const progClear = createProgram(baseVertex, clearShader);
  const progSplat = createProgram(baseVertex, splatShader);
  const progAdvection = createProgram(baseVertex, advectionShader);
  const progDivergence = createProgram(baseVertex, divergenceShader);
  const progCurl = createProgram(baseVertex, curlShader);
  const progVorticity = createProgram(baseVertex, vorticityShader);
  const progPressure = createProgram(baseVertex, pressureShader);
  const progGradientSubtract = createProgram(baseVertex, gradientSubtractShader);
  const progDisplay = createProgram(baseVertex, displayShader);

  function bindProgram(p) { gl.useProgram(p.program); return p; }

  // Values below match the slider positions in the settings screenshot
  // (Density / Velocity / Splat size, "Auto splats" unchecked) — adjust
  // here if that read needs correcting; these are the same three sliders,
  // same ranges, as fluidcursordemoV1.html.
  const config = {
    dissipation: 0.955,       // "Density" — range 0.90-0.999 there
    velocityDissipation: 0.90, // "Velocity" — range 0.85-0.999 there
    pressureIterations: 20,
    curl: 22,
    splatRadius: 0.55,        // "Splat size" — range 0.05-0.6 there
    auto: false               // "Auto splats" — unchecked in the screenshot
  };

  // Per feedback the reveal needed to shrink to about a third of the size
  // above alone gives. The radius feeds exp(-dot(p,p)/radius) in the splat
  // shader below — a SQUARED falloff term — so the apparent (linear)
  // on-screen size scales with sqrt(radius): to cut that roughly to a
  // third, the radius itself needs cutting to about a ninth (1/3² ≈ 1/9).
  const SIZE_SCALE = 1 / 9;

  function splat(x, y, dx, dy, color) {
    bindProgram(progSplat);
    gl.uniform1i(progSplat.uniforms.uTarget, velocity.read.attach(0));
    gl.uniform1f(progSplat.uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(progSplat.uniforms.point, x, y);
    gl.uniform3f(progSplat.uniforms.color, dx, dy, 0.0);
    gl.uniform1f(progSplat.uniforms.radius, (config.splatRadius / 10.0 + 0.01) * SIZE_SCALE);
    blit(velocity.write);
    velocity.swap();

    gl.uniform1i(progSplat.uniforms.uTarget, dye.read.attach(0));
    gl.uniform3f(progSplat.uniforms.color, color[0], color[1], color[2]);
    blit(dye.write);
    dye.swap();
  }

  let pointer = { x: 0.5, y: 0.5, dx: 0, dy: 0, moved: false };

  function updatePointer(clientX, clientY) {
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (clientX - rect.left) / rect.width;
    const y = 1.0 - (clientY - rect.top) / rect.height; // WebGL-vs-screen Y flip, same as the reference demo
    pointer.dx = (x - pointer.x) * 6.0;
    pointer.dy = (y - pointer.y) * 6.0;
    pointer.x = x;
    pointer.y = y;
    pointer.moved = Math.abs(pointer.dx) > 0 || Math.abs(pointer.dy) > 0;
  }

  // Round 33: the sim used to run non-stop — a full Navier-Stokes step
  // (curl, vorticity, divergence, a 20-iteration pressure solve, two
  // advection passes) EVERY animation frame, for as long as the hero was
  // anywhere in the viewport, whether or not anyone was actually
  // interacting with it. That was the single biggest contributor to the
  // page feeling heavy, especially right after load, before the cursor
  // has even reached the hero. Now the loop only ever starts in response
  // to a real pointer move (see ensureRunning() below) and stops itself
  // again once nothing's happened for SETTLE_MS — long enough for the
  // dissipating trail to actually fade out first (see the dissipation
  // constants in config above), not freeze mid-fade.
  let lastActivityTime = 0;
  const SETTLE_MS = 2200;
  function ensureRunning() {
    if (!raf) {
      lastTime = null;
      raf = requestAnimationFrame(frame);
    }
  }

  function handlePointerMove(e) {
    updatePointer(e.clientX, e.clientY);
    lastActivityTime = performance.now();
    ensureRunning();
  }
  stage.addEventListener("pointermove", handlePointerMove);

  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    if (!w || !h) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    // The mirror canvas gets re-encoded to a data: URL every tick (see
    // frame() below) — kept small (long edge capped at MASK_MAX_EDGE)
    // purely so that encode stays cheap. The sim's own internal resolution
    // (dyeRes, near the top of this file) is already far below the stage's
    // real size, so nothing softer than that is actually visible anyway;
    // CSS mask-image scales this back up to the consumers' full size same
    // as any other image.
    const MASK_MAX_EDGE = 320;
    const maskScale = Math.min(1, MASK_MAX_EDGE / Math.max(w, h));
    maskCanvas.width = Math.max(1, Math.round(w * maskScale));
    maskCanvas.height = Math.max(1, Math.round(h * maskScale));
    outCanvas.width = maskCanvas.width;
    outCanvas.height = maskCanvas.height;
  }
  window.addEventListener("resize", resize);
  resize();

  // Hand whatever is currently in the mirror canvas to the consumers as a
  // literal mask-image: url(data:...). A genuinely different data: URL
  // every tick is the one refresh signal every browser's image pipeline
  // always treats as dirty — no separate <mask> element, no nudging. (The
  // static half of the mask — mask-size/mask-repeat/mask-mode — is plain
  // CSS on these elements, see .hero__spillShade/.hero__shieldGL in
  // style.css, since only the image itself changes frame to frame.)
  //
  // Round 48 — the polarity flip. animations/initHero3d.ts sets
  // window.__heroShieldMaskInverted to say which way round the blob should
  // read:
  //   true  — the shield is present on the stage, and the blob is a HOLE
  //           cut out of it so the bird shows through. That is the resting
  //           state, and what the brief asked for: the same cursor effect
  //           as before, hiding the shield instead of revealing a helmet.
  //   false — the shield has been packed away by a double-click, and the
  //           blob is the ONLY place it gets painted at all.
  // Read as `!== false` so an undefined flag means inverted: this module
  // boots before initHero3d.ts does (see page.tsx) and publishes the seed
  // mask below before that file has run a line, and the shield starts out
  // present.
  //
  // Inverting the small mirror canvas costs one composited fillRect on a
  // canvas capped at MASK_MAX_EDGE (see resize()) — negligible next to the
  // toDataURL() it feeds, and far cheaper than encoding two polarities.
  // "difference" against solid white is a plain per-channel 255 - x, which
  // is exactly a luminance inversion here: the mirror canvas is fully
  // opaque, and the consumers read it as mask-mode: luminance.
  function applyMask(consumers, value) {
    consumers.forEach((el) => {
      el.style.maskImage = value;
      el.style.webkitMaskImage = value;
    });
  }

  function publishMask() {
    const shieldInverted = window.__heroShieldMaskInverted !== false;

    // Round 51 — the reveal group (see revealConsumers above) always wants
    // the mirror exactly as the sim rendered it, so it can be encoded
    // straight off maskCanvas with no compositing at all. That also makes it
    // the cheap half: outCanvas and the inversion below exist only for the
    // shield.
    let pristineValue = null;
    if (revealConsumers.length || !shieldInverted) {
      pristineValue = `url(${maskCanvas.toDataURL()})`;
      applyMask(revealConsumers, pristineValue);
    }

    if (!shieldInverted) {
      // Shield packed away: it wants the same polarity the reveal group
      // does, so reuse the encode rather than paying for a second one.
      applyMask(maskConsumers, pristineValue);
      return;
    }

    // Copy the pristine mirror across first, so this never depends on what
    // the previous call left behind — see the note on outCanvas above.
    outCtx.globalCompositeOperation = "copy";
    outCtx.drawImage(maskCanvas, 0, 0);
    outCtx.globalCompositeOperation = "source-over";

    outCtx.save();
    outCtx.globalCompositeOperation = "difference";
    outCtx.fillStyle = "#fff";
    outCtx.fillRect(0, 0, outCanvas.width, outCanvas.height);
    outCtx.restore();

    applyMask(maskConsumers, `url(${outCanvas.toDataURL()})`);
  }

  // The hook animations/initHero3d.ts calls straight after it flips
  // window.__heroShieldMaskInverted, so a polarity change lands even while
  // the sim is settled and its rAF loop has stopped. Only defined once this
  // module is committed to running, so initHero3d.ts's optional call is also its
  // "is there a mask at all?" test.
  window.__heroPublishShieldMask = publishMask;

  // Seed the mask right away, before the sim has ever run a single frame.
  // Without this, the consumers' CSS default of "no mask-image at all"
  // (see .hero__shieldGL/.hero__spillShade in style.css — deliberately
  // fail-open for the "sim can't run here at all" cases above) leaves the
  // masked layers showing completely un-masked for however long it takes
  // the visitor to first move their mouse over the hero. All-black here
  // means "no fluid anywhere yet", which publishMask() then turns into
  // whichever polarity the shield's current state calls for — shield fully
  // visible while it is present, fully hidden while it is packed away.
  // frame() overwrites it with the real sim on the first pointermove.
  maskCtx.fillStyle = "#000";
  maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
  publishMask();

  // Round 48: the point past which a real cursor blob definitely exists on
  // this device. Every early return above (reduced motion, mobile, no
  // WebGL, no 2D context) leaves this unset, and animations/initHero3d.ts needs to know
  // the difference: with no mask at all, its masked layers fall back to
  // fully visible — which is the right fallback for a shield that is
  // present, and precisely the wrong one for a shield the visitor has just
  // double-clicked away, since "reveal it inside the blob" has no blob to
  // happen inside. See setShieldMode() over there.
  window.__heroFluidMaskActive = true;

  let lastTime = null;
  let raf = null;
  function frame(now) {
    if (lastTime === null) lastTime = now;
    let dt = Math.min((now - lastTime) / 1000, 1 / 30);
    lastTime = now;

    // Same freeze initHero3d.ts applies to the wireframe cycle/rig rotation
    // during the scroll-collapse ("the whole scene stops, like a photo") —
    // window.__heroCollapseProgress is the same 0..1 global it already
    // writes every scrub tick.
    const collapseProgress = Math.min(Math.max(window.__heroCollapseProgress || 0, 0), 1);
    if (collapseProgress > 0.001) {
      raf = requestAnimationFrame(frame);
      return;
    }

    if (pointer.moved) {
      splat(pointer.x, pointer.y, pointer.dx, pointer.dy, [1, 1, 1]);
      pointer.moved = false;
      lastActivityTime = now;
    } else if (config.auto && Math.random() < 0.02) {
      splat(Math.random(), Math.random(), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, [1, 1, 1]);
      lastActivityTime = now;
    }

    gl.disable(gl.BLEND);

    bindProgram(progCurl);
    gl.uniform2f(progCurl.uniforms.texelSize, 1.0 / simRes, 1.0 / simRes);
    gl.uniform1i(progCurl.uniforms.uVelocity, velocity.read.attach(0));
    blit(curlFBO);

    bindProgram(progVorticity);
    gl.uniform2f(progVorticity.uniforms.texelSize, 1.0 / simRes, 1.0 / simRes);
    gl.uniform1i(progVorticity.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(progVorticity.uniforms.uCurl, curlFBO.attach(1));
    gl.uniform1f(progVorticity.uniforms.curlStrength, config.curl);
    gl.uniform1f(progVorticity.uniforms.dt, dt);
    blit(velocity.write);
    velocity.swap();

    bindProgram(progDivergence);
    gl.uniform2f(progDivergence.uniforms.texelSize, 1.0 / simRes, 1.0 / simRes);
    gl.uniform1i(progDivergence.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergence);

    bindProgram(progClear);
    gl.uniform1i(progClear.uniforms.uTexture, pressure.read.attach(0));
    gl.uniform1f(progClear.uniforms.value, 0.8);
    blit(pressure.write);
    pressure.swap();

    bindProgram(progPressure);
    gl.uniform2f(progPressure.uniforms.texelSize, 1.0 / simRes, 1.0 / simRes);
    gl.uniform1i(progPressure.uniforms.uDivergence, divergence.attach(0));
    for (let i = 0; i < config.pressureIterations; i++) {
      gl.uniform1i(progPressure.uniforms.uPressure, pressure.read.attach(1));
      blit(pressure.write);
      pressure.swap();
    }

    bindProgram(progGradientSubtract);
    gl.uniform2f(progGradientSubtract.uniforms.texelSize, 1.0 / simRes, 1.0 / simRes);
    gl.uniform1i(progGradientSubtract.uniforms.uPressure, pressure.read.attach(0));
    gl.uniform1i(progGradientSubtract.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write);
    velocity.swap();

    bindProgram(progAdvection);
    gl.uniform2f(progAdvection.uniforms.texelSize, 1.0 / simRes, 1.0 / simRes);
    gl.uniform1i(progAdvection.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(progAdvection.uniforms.uSource, velocity.read.attach(0));
    gl.uniform1f(progAdvection.uniforms.dt, dt);
    gl.uniform1f(progAdvection.uniforms.dissipation, config.velocityDissipation);
    blit(velocity.write);
    velocity.swap();

    gl.uniform2f(progAdvection.uniforms.texelSize, 1.0 / simRes, 1.0 / simRes);
    gl.uniform1i(progAdvection.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(progAdvection.uniforms.uSource, dye.read.attach(1));
    gl.uniform1f(progAdvection.uniforms.dissipation, config.dissipation);
    blit(dye.write);
    dye.swap();

    bindProgram(progDisplay);
    gl.uniform1i(progDisplay.uniforms.uTexture, dye.read.attach(0));
    blit(null);

    // Mirror the WebGL canvas's just-rendered frame onto the small 2D
    // canvas, immediately (same tick as blit(null) above, before the
    // browser gets a chance to clear the WebGL canvas's own backing store
    // for the next frame — see the header comment for why this needs to
    // stay synchronous), then publish it. drawImage over the full canvas
    // replaces every pixel, so the previous tick's inversion (if there was
    // one) can't accumulate.
    maskCtx.drawImage(canvas, 0, 0, maskCanvas.width, maskCanvas.height);
    publishMask();

    // Round 33: stop scheduling entirely once nothing's happened for
    // SETTLE_MS instead of looping forever — ensureRunning() (see above)
    // is what starts it back up again on the next real pointer move.
    if (now - lastActivityTime > SETTLE_MS) {
      raf = null;
      return;
    }
    raf = requestAnimationFrame(frame);
  }

  // Pause while the hero is scrolled out of view — matches the same
  // IntersectionObserver initHero3d.ts uses for its own render loop.
  // Deliberately NO auto-resume on re-entering view here — see
  // ensureRunning()/SETTLE_MS above: the sim only ever starts in response
  // to an actual pointer move over the stage, never just because it's
  // visible.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && raf) {
          cancelAnimationFrame(raf);
          raf = null;
          lastTime = null;
        }
      });
    },
    { threshold: 0.05 }
  );
  observer.observe(stage);

  return () => {
    observer.disconnect();
    stage.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("resize", resize);
    if (raf) cancelAnimationFrame(raf);
    if (window.__heroPublishShieldMask === publishMask) delete window.__heroPublishShieldMask;
    delete window.__heroFluidMaskActive;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
  };
}
