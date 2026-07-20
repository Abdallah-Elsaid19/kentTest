import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  setMobileMenuOpen,
  toggleMobileMenu,
} from "@/store/slices/uiSlice";
import { toggleMobileItem } from "@/store/slices/navigationSlice";
import type { NavigationItem } from "@/types";

interface MobileNavigationProps {
  items: NavigationItem[];
}

export default function MobileNavigation({ items }: MobileNavigationProps) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const expandedItems = useAppSelector(
    (state) => state.navigation.expandedMobileItems
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        dispatch(setMobileMenuOpen(false));
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => dispatch(setMobileMenuOpen(false))}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl animate-slide-in-right overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-heading font-semibold text-lg text-kbc-purple-700">
            Menu
          </span>
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <i className="ri-close-line text-xl text-kbc-dark-700" />
          </button>
        </div>

        <nav className="p-4">
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItems.includes(item.id);

            return (
              <div key={item.id} className="border-b border-gray-50 last:border-0">
                <div className="flex items-center justify-between py-3">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-kbc-dark-800"
                      onClick={() => dispatch(setMobileMenuOpen(false))}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-base font-medium text-kbc-dark-800"
                      onClick={() => dispatch(setMobileMenuOpen(false))}
                    >
                      {item.label}
                    </Link>
                  )}
                  {hasChildren && (
                    <button
                      onClick={() => dispatch(toggleMobileItem(item.id))}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      aria-label={isExpanded ? "Collapse" : "Expand"}
                      aria-expanded={isExpanded}
                    >
                      <i
                        className={`ri-arrow-down-s-line text-lg text-kbc-dark-500 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <div className="pl-4 pb-3 space-y-1 animate-fade-in">
                    {item.children?.map((child) => (
                      <div key={child.id}>
                        {child.external ? (
                          <a
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-sm text-kbc-dark-600 hover:text-kbc-purple-600"
                            onClick={() => dispatch(setMobileMenuOpen(false))}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            to={child.href}
                            className="block py-2 text-sm text-kbc-dark-600 hover:text-kbc-purple-600"
                            onClick={() => dispatch(setMobileMenuOpen(false))}
                          >
                            {child.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 space-y-3">
          <Link
            to="/apply"
            className="block w-full text-center px-4 py-3 bg-kbc-purple-500 text-white rounded-lg font-medium hover:bg-kbc-purple-600 transition-colors"
            onClick={() => dispatch(setMobileMenuOpen(false))}
          >
            Apply Now
          </Link>
          <Link
            to="/book-session"
            className="block w-full text-center px-4 py-3 border-2 border-kbc-gold-500 text-kbc-gold-700 rounded-lg font-medium hover:bg-kbc-gold-50 transition-colors"
            onClick={() => dispatch(setMobileMenuOpen(false))}
          >
            Book an Information Session
          </Link>
        </div>
      </div>
    </div>
  );
}