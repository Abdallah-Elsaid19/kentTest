import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setActiveMegaMenu } from "@/store/slices/uiSlice";
import type { NavigationItem } from "@/types";

interface DesktopNavigationProps {
  items: NavigationItem[];
}

export default function DesktopNavigation({ items }: DesktopNavigationProps) {
  const dispatch = useAppDispatch();
  const activeMegaMenu = useAppSelector((state) => state.ui.activeMegaMenu);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredItem(id);
    dispatch(setActiveMegaMenu(id));
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    dispatch(setActiveMegaMenu(null));
  };

  return (
    <nav className="hidden lg:flex items-center gap-1" onMouseLeave={handleMouseLeave}>
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isActive = activeMegaMenu === item.id || hoveredItem === item.id;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => hasChildren && handleMouseEnter(item.id)}
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap inline-block"
              >
                {item.label}
              </Link>
            )}

            {hasChildren && isActive && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-lg shadow-xl border-t-2 border-kbc-gold-500 overflow-hidden z-50 animate-fade-in">
                <div className="py-2">
                  {item.children?.map((child) => (
                    <div key={child.id}>
                      {child.external ? (
                        <a
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm text-kbc-dark-800 hover:bg-kbc-purple-50 hover:text-kbc-purple-700 transition-colors"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-kbc-dark-800 hover:bg-kbc-purple-50 hover:text-kbc-purple-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}