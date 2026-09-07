import type { ReactNode } from "react";

import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  inverse = false,
  centered = true,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  id?: string;
  inverse?: boolean;
  centered?: boolean;
}) {
  return (
    <header className={`${centered ? "mx-auto" : ""} max-w-4xl`}>
      <FigmaSectionHeading
        id={id}
        eyebrow={eyebrow}
        title={title}
        description={description}
        align={centered ? "center" : "left"}
        tone={inverse ? "inverse" : "default"}
      />
    </header>
  );
}
