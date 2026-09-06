import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

import { containerClass } from "./shared";

type FundingTransitionProps = {
  items: readonly string[];
  highlightIndex: number;
  light?: boolean;
};

export function FundingTransition({ items, highlightIndex, light = false }: FundingTransitionProps) {
  return (
    <section className={`py-[22px] ${light ? "bg-[#f5c94f] text-[#2f1468]" : "bg-[#2f1468] text-white"}`}>
      <div className={`${containerClass} flex items-center justify-center gap-5 overflow-x-auto max-[780px]:justify-start`}>
        {items.map((item, index) => (
          <Fragment key={item}>
            {index > 0 && <ArrowRight className="w-[15px] shrink-0 opacity-55" />}
            {index === highlightIndex ? <strong className={`whitespace-nowrap text-xs ${light ? "text-[#2f1468]" : "text-[#f5c94f]"}`}>{item}</strong> : <p className="whitespace-nowrap text-xs">{item}</p>}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
