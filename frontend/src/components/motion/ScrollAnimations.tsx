import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelector = [
  ".kbc-trusted .kbc-section-heading",
  ".kbc-colleges .kbc-section-heading",
  ".kbc-programmes .kbc-section-heading",
  ".kbc-benefits .kbc-section-heading",
  ".kbc-help .kbc-section-heading",
  ".kbc-heading-row",
  ".kbc-logo-marquee",
  ".kbc-tabs",
  ".kbc-event-tabs",
  ".kbc-centered-actions",
  ".kbc-college-card",
  ".kbc-programme-card",
  ".kbc-benefit-card",
  ".kbc-achiever-card",
  ".kbc-case-card",
  ".kbc-help-card",
  ".kbc-event-card",
  ".kbc-testimonial-card",
  ".kbc-final-cta__inner",
].join(",");

export function ScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = "IntersectionObserver" in window && !reducedMotion
      ? new IntersectionObserver((entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            currentObserver.unobserve(entry.target);
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -55px" })
      : null;

    const prepare = (root: Document | HTMLElement) => {
      root.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        if (element.classList.contains("kbc-scroll-reveal")) return;
        const siblingIndex = element.parentElement
          ? Array.from(element.parentElement.children).indexOf(element)
          : 0;
        element.style.setProperty("--kbc-reveal-delay", `${Math.min(siblingIndex % 4, 3) * 90}ms`);
        element.classList.add("kbc-scroll-reveal");
        if (observer) observer.observe(element);
        else element.classList.add("is-revealed");
      });
    };

    const frame = window.requestAnimationFrame(() => prepare(document));
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(revealSelector)) prepare(node.parentElement ?? document);
            else prepare(node);
          }
        });
      });
    });
    mutationObserver.observe(document.getElementById("main-content") || document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
