import { useId, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { NavigationTabButton } from "@/components/navigation/NavigationTabButton";

interface SplitDetailItem {
  id: string;
  title: string;
  icon: ReactNode;
  eyebrow: string;
  content: ReactNode;
  footer?: ReactNode;
}

export function SplitDetailTabs({ items, label }: { items: readonly SplitDetailItem[]; label: string }) {
  const instanceId = useId();
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  // A category filter can remove the selected item while keeping this component mounted.
  const activeId = items.some((item) => item.id === selectedId) ? selectedId : items[0]?.id;

  if (!items.length) return null;

  return (
    <div className="grid overflow-hidden rounded-[28px_10px] border border-kbc-purple-200 bg-kbc-purple-50 lg:grid-cols-[.82fr_1.18fr]">
      <div role="tablist" aria-label={label} aria-orientation="vertical" className="flex min-w-0 flex-col [&>button:last-child]:flex-1 [&>button:last-child]:!border-b-0">
        {items.map((item, index) => (
          <NavigationTabButton
            key={item.id}
            id={`${instanceId}-tab-${item.id}`}
            role="tab"
            active={item.id === activeId}
            aria-selected={item.id === activeId}
            aria-controls={`${instanceId}-panel-${item.id}`}
            tabIndex={item.id === activeId ? 0 : -1}
            ref={(button) => {
              if (button) buttons.current.set(item.id, button);
              else buttons.current.delete(item.id);
            }}
            onClick={() => setSelectedId(item.id)}
            onKeyDown={(event) => {
              let nextIndex: number;
              if (event.key === "ArrowDown") nextIndex = (index + 1) % items.length;
              else if (event.key === "ArrowUp") nextIndex = (index - 1 + items.length) % items.length;
              else if (event.key === "Home") nextIndex = 0;
              else if (event.key === "End") nextIndex = items.length - 1;
              else return;
              event.preventDefault();
              const nextId = items[nextIndex].id;
              setSelectedId(nextId);
              buttons.current.get(nextId)?.focus();
            }}
            className={`relative !grid min-h-24 w-full grid-cols-[24px_minmax(0,1fr)_20px] gap-4 !rounded-none !border-0 !border-b !border-solid !border-kbc-purple-200 !px-5 !py-6 text-left !shadow-none focus-visible:z-10 focus-visible:!ring-inset focus-visible:!ring-offset-0 sm:min-h-28 sm:gap-5 sm:!px-7 lg:min-h-32 ${item.id === activeId ? "!bg-primary-dark !text-white" : "!bg-transparent hover:!bg-white"}`}
          >
            <span className={item.id === activeId ? "text-[#F5C94F]" : "text-primary"}>{item.icon}</span>
            <span className="text-sm font-semibold leading-relaxed sm:text-base">{item.title}</span>
            <ArrowRight size={19} aria-hidden="true" />
          </NavigationTabButton>
        ))}
      </div>

      {items.map((item) => (
        <article
          key={item.id}
          id={`${instanceId}-panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`${instanceId}-tab-${item.id}`}
          hidden={item.id !== activeId}
          tabIndex={0}
          className={`${item.id === activeId ? "flex" : "hidden"} relative isolate min-w-0 flex-col overflow-hidden bg-primary-dark p-6 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F5C94F] sm:p-10 lg:min-h-[540px] lg:p-12`}
        >
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-full text-xs font-bold uppercase leading-6 tracking-widest text-[#F5C94F]">{item.eyebrow}</p>
            <span className="shrink-0 text-[#F5C94F] [&_svg]:size-8" aria-hidden="true">{item.icon}</span>
          </div>
          <h4 className="mt-9 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:mt-12 lg:text-5xl">{item.title}</h4>
          <div className="mt-6 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">{item.content}</div>
          {item.footer && <div className="mt-auto pt-10"><div className="border-t border-white/20 pt-6 text-sm leading-7 text-white/90">{item.footer}</div></div>}
        </article>
      ))}
    </div>
  );
}
