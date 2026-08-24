import type { ButtonHTMLAttributes, ReactNode } from "react";

import { joinNavigationClasses } from "./linkTarget";

interface NavigationTabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

export function NavigationTabButton({ children, active = false, className, ...props }: NavigationTabButtonProps) {
  return <button className={joinNavigationClasses("inline-flex min-h-12 items-center justify-center rounded-lg border px-5 text-sm font-semibold transition-[color,background-color,border-color,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-500 focus-visible:ring-offset-2 motion-reduce:transition-none", active ? "border-kbc-purple-950 bg-kbc-purple-950 text-white shadow-sm" : "border-kbc-purple-200 bg-white text-kbc-purple-950 hover:border-kbc-purple-300 hover:bg-kbc-purple-50", className)} type="button" {...props}>{children}</button>;
}
