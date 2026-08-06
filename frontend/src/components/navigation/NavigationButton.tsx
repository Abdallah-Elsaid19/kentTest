import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { joinNavigationClasses, shouldUseAnchor } from "./linkTarget";

type NavigationButtonVariant = "primary" | "secondary";

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
    "inline-flex min-h-14 items-center justify-center px-4 text-center text-sm font-semibold transition-colors motion-reduce:transition-none",
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  );

  if (shouldUseAnchor(to, external)) {
    return <a href={to} className={classes} aria-label={ariaLabel} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined} onClick={onClick}>{children}</a>;
  }

  return <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>{children}</Link>;
}
