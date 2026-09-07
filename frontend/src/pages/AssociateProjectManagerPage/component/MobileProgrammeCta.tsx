import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { NavigationButton } from "@/components/navigation";

export function MobileProgrammeCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById("apm-title")?.closest("section");
      const finalCta = document.getElementById("apm-final-title")?.closest("section");
      const heroPassed = hero ? hero.getBoundingClientRect().bottom < 0 : false;
      const finalCtaVisible = finalCta ? finalCta.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(heroPassed && !finalCtaVisible);
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div inert={!visible} className={`fixed inset-x-0 bottom-0 z-40 border-t border-kbc-purple-100 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition duration-300 motion-reduce:transition-none sm:hidden ${visible ? "translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-4 opacity-0"}`}>
      <NavigationButton to="/funding-eligibility" variant="accent" fullWidth className="min-h-14 gap-2">
        Check funding eligibility <ArrowRight className="size-4" aria-hidden="true" />
      </NavigationButton>
    </div>
  );
}
