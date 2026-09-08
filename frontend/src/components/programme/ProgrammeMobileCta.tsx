import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationButton } from "@/components/navigation";

export function ProgrammeMobileCta({ heroTitleId, finalTitleId, actions }: {
  heroTitleId: string;
  finalTitleId: string;
  actions: readonly { label: string; to: string }[];
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById(heroTitleId)?.closest("section");
      const finalCta = document.getElementById(finalTitleId)?.closest("section");
      setVisible(!!hero && hero.getBoundingClientRect().bottom < 0 && (!finalCta || finalCta.getBoundingClientRect().top >= window.innerHeight));
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [heroTitleId, finalTitleId]);

  return <div inert={!visible} className={`fixed inset-x-0 bottom-0 z-40 border-t border-kbc-purple-100 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition duration-300 motion-reduce:transition-none sm:hidden ${visible ? "translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-4 opacity-0"}`}>
    <div className={`grid gap-2 ${actions.length > 1 ? "grid-cols-2" : ""}`}>{actions.map((action, index) => <NavigationButton key={action.to} to={action.to} variant={index === 0 ? "accent" : "secondary"} fullWidth className="min-h-14 gap-2">
      {action.label}<ArrowRight className="size-4 shrink-0" aria-hidden="true" />
    </NavigationButton>)}</div>
  </div>;
}
