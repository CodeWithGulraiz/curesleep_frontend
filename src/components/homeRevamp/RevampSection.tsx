"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type RevampSectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export default function RevampSection({
  children,
  className,
  innerClassName,
  id,
}: RevampSectionProps) {
  return (
    <section id={id} className={cn("w-full px-4 py-14 md:px-8 md:py-20", className)}>
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}
