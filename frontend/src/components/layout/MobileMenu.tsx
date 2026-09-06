import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export interface MobileMenuItem {
  label: string;
  path?: string;
  external?: boolean;
  pending?: boolean;
  navigationParent?: string;
  children?: MobileMenuItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  activeParent?: string;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
  items: MobileMenuItem[];
  footer: ReactNode;
}

function isPathActive(currentPath: string, path?: string) {
  if (!path || path.startsWith("http")) return false;
  if (path.startsWith("#")) return currentPath.endsWith(path);
  const pathname = currentPath.split("#")[0];
  return pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
}

function isGroupActive(currentPath: string, item: MobileMenuItem, activeParent?: string) {
  if (activeParent) return item.label === activeParent;
  return isPathActive(currentPath, item.path) || Boolean(item.children?.some((child) => isPathActive(currentPath, child.path)));
}

function MobileLink({ item, className, onClose }: { item: MobileMenuItem; className: string; onClose: () => void }) {
  if (item.pending) return <span className={`${className} cursor-not-allowed opacity-55`} aria-disabled="true">{item.label}<small className="ml-auto text-[9px] uppercase tracking-wide">Link pending</small></span>;
  if (!item.path) return null;
  return item.external
    ? <a href={item.path} className={className} target="_blank" rel="noreferrer" onClick={onClose}>{item.label}</a>
    : <Link to={item.path} state={item.navigationParent ? { headerNavigationParent: item.navigationParent } : undefined} className={className} onClick={onClose}>{item.label}</Link>;
}

export default function MobileMenu({ isOpen, onClose, currentPath, activeParent, returnFocusRef, items, footer }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousPathRef = useRef(currentPath);
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  useEffect(() => {
    if (previousPathRef.current !== currentPath) {
      previousPathRef.current = currentPath;
      onClose();
    }
  }, [currentPath, onClose]);

  useEffect(() => {
    if (!isOpen) setOpenGroups([]);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const returnFocusElement = returnFocusRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const panel = closeRef.current?.closest("[role=dialog]");
      const focusable = panel?.querySelectorAll<HTMLElement>("a[href],button:not([disabled])");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      returnFocusElement?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  return createPortal(
    <div id="mobile-menu" className={`fixed inset-0 z-[100] transition-opacity duration-300 motion-reduce:transition-none xl:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={!isOpen}>
      <div className="absolute inset-0 bg-kbc-purple-950/80 backdrop-blur-sm" onClick={onClose} />
      <div role="dialog" aria-modal="true" aria-label="Site menu" className={`absolute right-0 top-0 flex h-[100dvh] w-[85%] max-w-sm flex-col bg-white font-body text-kbc-purple-950 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex min-h-[72px] items-center justify-between border-b border-kbc-purple-100 px-5 py-4">
          <span className="font-heading text-lg font-bold text-kbc-purple-950">Menu</span>
          <button ref={closeRef} type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full text-kbc-purple-950 transition-colors hover:bg-kbc-purple-50 motion-reduce:transition-none" aria-label="Close menu"><X size={24} /></button>
        </div>
        <nav className="flex-1 overscroll-contain overflow-y-auto px-5 py-3" aria-label="Mobile navigation">
          {items.map((item) => {
            const isActive = isGroupActive(currentPath, item, activeParent);
            if (item.path) return <MobileLink key={item.label} item={item} onClose={onClose} className={`flex min-h-14 items-center border-b border-kbc-purple-100 py-4 text-lg font-medium transition-colors motion-reduce:transition-none ${isActive ? "text-primary" : "text-kbc-purple-950 hover:text-primary"}`} />;
            const isExpanded = openGroups.includes(item.label);
            const id = `mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <div key={item.label} className="border-b border-kbc-purple-100">
                <button type="button" aria-expanded={isExpanded} aria-controls={id} onClick={() => setOpenGroups((groups) => groups.includes(item.label) ? groups.filter((label) => label !== item.label) : [...groups, item.label])} className={`flex min-h-14 w-full items-center justify-between py-4 text-left text-lg font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-kbc-purple-950"}`}>
                  {item.label}<ChevronDown className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} size={20} />
                </button>
                <div id={id} hidden={!isExpanded} className="pb-2 pl-4">
                  {item.children?.map((child) => <MobileLink key={child.path ?? child.label} item={child} onClose={onClose} className={`block border-b border-kbc-purple-50 py-3 text-sm transition-colors hover:text-primary ${isPathActive(currentPath, child.path) ? "text-primary" : "text-kbc-dark-600"}`} />)}
                </div>
              </div>
            );
          })}
        </nav>
        <div className="border-t border-kbc-purple-100 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:px-5">{footer}</div>
      </div>
    </div>,
    document.body,
  );
}
