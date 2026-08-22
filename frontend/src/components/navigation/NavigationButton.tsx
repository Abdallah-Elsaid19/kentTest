import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { joinNavigationClasses, shouldUseAnchor } from "./linkTarget";

type NavigationButtonVariant = "primary" | "secondary" | "accent" | "inverse";

interface NavigationButtonProps {
  to: string;
  children: ReactNode;
  variant?: NavigationButtonVariant;
  external?: boolean;
  newTab?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const variantClasses: Record<NavigationButtonVariant, string> = {
  primary: "bg-[#371347] text-white hover:bg-[#260d32]",
  secondary: "border border-[#d8cec3] bg-transparent text-kbc-purple-950 hover:bg-kbc-purple-50",
  accent: "bg-kbc-gold-500 text-kbc-purple-950 hover:bg-kbc-gold-400",
  inverse: "border border-white/30 bg-transparent text-white hover:bg-white/10",
};

export function NavigationButton({
  to,
  children,
  variant = "primary",
  external,
  newTab = false,
  fullWidth = false,
  className,
  ariaLabel,
  onClick,
}: NavigationButtonProps) {
  const classes = joinNavigationClasses(
    "inline-flex min-h-14 items-center justify-center rounded-md px-4 text-center text-sm font-semibold transition-[color,background-color,border-color,transform,box-shadow] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  );

  if (shouldUseAnchor(to, external)) {
    return <a href={to} className={classes} aria-label={ariaLabel} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined} onClick={onClick}>{children}</a>;
  }

  return <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>{children}</Link>;
}
