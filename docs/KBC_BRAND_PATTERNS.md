# KBC brand pattern usage

These are the canonical decorative pattern assets for Kent Business College:

- `/assets/patterns/kbc-horse-growth.png` — horse and upward growth arrow.
- `/assets/patterns/kbc-ibis-wreath.png` — ibis with botanical wreath.
- `/assets/patterns/kbc-gold-leaf.png` — purple and gold leaf branch.

## Approved treatment

When a request says to use the KBC patterns, reproduce the treatment shown in the approved Applied Learning reference:

- Use one pattern per section by default. Do not combine all three unless explicitly requested.
- Place it behind the content as a large decorative watermark, normally entering from the left or another outer edge.
- Crop part of the artwork beyond the section boundary so it feels integrated with the layout rather than placed like a standalone image.
- Keep it very subtle: start around `opacity: 0.04` to `0.07` on light backgrounds and adjust only enough for the artwork to remain faintly visible.
- Preserve the original purple, gold, white, and transparent artwork. Do not recolour or redraw it.
- Keep headings, body copy, controls, and timeline lines above the pattern with strong contrast and uninterrupted readability.
- The pattern must not affect document flow or interaction: use absolute positioning, `pointer-events: none`, `user-select: none`, and decorative/empty alternative text.
- Scale and reposition responsively. Reduce its size or hide it on narrow screens if it competes with the content.
- Avoid tiles, repeated wallpaper, high opacity, full-colour foreground placement, or placing text directly over detailed parts of the artwork.

## Suggested CSS baseline

```css
.kbc-pattern-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.kbc-pattern-section__watermark {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: clamp(-150px, -7vw, -60px);
  width: clamp(300px, 27vw, 520px);
  height: auto;
  opacity: .055;
  pointer-events: none;
  user-select: none;
  transform: translateY(-50%);
}
```

Treat these values as a starting point. Match the section composition while preserving the same faint, oversized, edge-cropped treatment.
