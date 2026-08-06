import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { joinNavigationClasses, shouldUseAnchor } from "./linkTarget";

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  direction?: "right" | "up-right" | "down-right";
  external?: boolean;
  newTab?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ArrowLink({
  to,
  children,
  direction = "right",
  external,
  newTab = false,
  className,
  ariaLabel,
  onClick,
}: ArrowLinkProps) {
  const classes = joinNavigationClasses(
    "group inline-flex min-h-11 items-center gap-2 font-semibold text-kbc-purple-700 transition-colors hover:text-kbc-purple-800 motion-reduce:transition-none",
    className,
  );
  const icon = direction === "up-right"
    ? <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
    : direction === "down-right"
      ? <ArrowDownRight className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transition-none" aria-hidden="true" />
      : <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
  const content = <>{children}{icon}</>;

  if (shouldUseAnchor(to, external)) {
    return <a href={to} className={classes} aria-label={ariaLabel} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined} onClick={onClick}>{content}</a>;
  }

  return <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>{content}</Link>;
}
