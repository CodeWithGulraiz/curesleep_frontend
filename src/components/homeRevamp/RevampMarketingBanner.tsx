"use client";

import RevampSection from "./RevampSection";
import { cn } from "@/lib/utils";

type RevampMarketingBannerProps = {
  title: string;
  description?: string;
  className?: string;
  innerClassName?: string;
  align?: "center" | "left";
};

/** Reusable full-width marketing strip (headline + optional subcopy). */
export default function RevampMarketingBanner({
  title,
  description,
  className,
  innerClassName,
  align = "center",
}: RevampMarketingBannerProps) {
  return (
    <RevampSection
      className={cn("bg-slate-50 py-12 md:py-16", className)}
      innerClassName={cn(align === "center" && "text-center", innerClassName)}
    >
      <h2 className="text-2xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-3xl text-lg leading-relaxed text-slate-600",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </RevampSection>
  );
}
