import type { ReactNode } from "react";
import { NavigationButton } from "./NavigationButton";

type HeroAction = {
  label: ReactNode;
  to: string;
  ariaLabel?: string;
  external?: boolean;
  newTab?: boolean;
};

interface HeroActionButtonsProps {
  primary: HeroAction;
  secondary: HeroAction;
  className?: string;
}

export function HeroActionButtons({
  primary,
  secondary,
  className = "",
}: HeroActionButtonsProps) {
  return (
    <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${className}`.trim()}>
      <NavigationButton
        ariaLabel={primary.ariaLabel}
        className="figma-btn !border-[#F5C94F] !bg-[#F5C94F] !text-[#401B8C] hover:!border-[#edca66] hover:!bg-[#edca66] hover:!text-[#401B8C]"
        external={primary.external}
        newTab={primary.newTab}
        to={primary.to}
        variant="accent"
      >
        {primary.label}
      </NavigationButton>

      <NavigationButton
        ariaLabel={secondary.ariaLabel}
        className="figma-btn !border-white/45 !bg-transparent !text-white hover:!border-white hover:!bg-white hover:!text-[#401B8C]"
        external={secondary.external}
        newTab={secondary.newTab}
        to={secondary.to}
        variant="inverse"
      >
        {secondary.label}
      </NavigationButton>
    </div>
  );
}
