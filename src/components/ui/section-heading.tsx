import type { ReactNode } from "react";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  eyebrowTone = "violet",
  title,
  description,
  align = "center",
  headingId,
  className,
}: {
  eyebrow?: string;
  eyebrowTone?: BadgeTone;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  headingId?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Badge tone={eyebrowTone} dot>
          {eyebrow}
        </Badge>
      ) : null}
      <h2 id={headingId} className="heading-section text-[#172554]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-[62ch] text-base leading-relaxed text-[#596579] sm:text-[1.0625rem]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
