import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { joinNavigationClasses, shouldUseAnchor } from "./linkTarget";

type NavigationButtonVariant = "primary" | "secondary" | "accent" | "inverse" | "projectControls" | "projectControlsInverse" | "marketing" | "marketingInverse";

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
  primary: "bg-kbc-purple-700 text-white hover:bg-kbc-purple-800",
  secondary: "border border-[#d8cec3] bg-transparent text-kbc-purple-950 hover:bg-kbc-purple-50",
  accent: "bg-kbc-gold-500 text-kbc-purple-950 hover:bg-kbc-gold-400",
  inverse: "border border-white/30 bg-transparent text-white hover:bg-white/10",
  projectControls: "rounded-md border border-kbc-gold-500 bg-kbc-gold-500 text-kbc-purple-950 hover:bg-kbc-gold-400",
  projectControlsInverse: "rounded-md border border-white/50 bg-transparent text-white hover:bg-white/10",
  marketing: "rounded-md border border-kbc-gold-500 bg-kbc-gold-500 text-kbc-purple-950 hover:bg-kbc-gold-400",
  marketingInverse: "rounded-md border border-white/50 bg-transparent text-white hover:bg-white/10",
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
    "inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-center text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none",
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  );

  if (shouldUseAnchor(to, external)) {
    return <a href={to} className={classes} aria-label={ariaLabel} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined} onClick={onClick}>{children}</a>;
  }

  return <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>{children}</Link>;
}
