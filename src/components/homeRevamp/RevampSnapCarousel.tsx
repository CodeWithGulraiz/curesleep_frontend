"use client";

import { useCallback, useRef, useState, useEffect, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type RevampSnapCarouselProps = {
  itemIds: string[];
  renderItem: (index: number) => ReactNode;
  className?: string;
  gapClassName?: string;
  ariaLabel: string;
  /** How many slides fit the viewport width at once (e.g. 3 cards). Default 1. */
  itemsPerView?: number;
};

export default function RevampSnapCarousel({
  itemIds,
  renderItem,
  className,
  gapClassName = "gap-4",
  ariaLabel,
  itemsPerView = 1,
}: RevampSnapCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = itemIds.length;

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = scrollerRef.current;
      if (!el || !count) return;
      const clamped = ((i % count) + count) % count;
      const card = el.children[clamped] as HTMLElement | undefined;
      card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setActive(clamped);
    },
    [count],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) {
          const idx = Array.from(el.children).indexOf(visible.target as Element);
          if (idx >= 0) setActive(idx);
        }
      },
      { root: el, threshold: [0.25, 0.35, 0.45, 0.55, 0.65, 0.75] },
    );
    Array.from(el.children).forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, [count]);

  if (!count) return null;

  /** Three equal columns minus two gap-4 (1rem) gutters — `_/_` escapes `/` for Tailwind. */
  const threeUpSlideClass = cn(
    "flex h-auto min-h-0 snap-start shrink-0 flex-col self-stretch overflow-visible",
    "w-[min(92vw,22rem)] flex-none sm:w-[min(80vw,24rem)]",
    "md:min-w-0 md:w-[calc((100%-2rem)_/_3)]",
  );

  const slideClassName =
    itemsPerView === 3
      ? threeUpSlideClass
      : "min-w-[min(100%,22rem)] shrink-0 snap-center sm:min-w-[24rem] md:min-w-[26rem]";

  return (
    <div className={cn("relative overflow-visible", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          "flex snap-x snap-mandatory items-stretch overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          itemsPerView === 3 && "pt-10",
          gapClassName,
        )}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        {itemIds.map((id, index) => (
          <div
            key={id}
            className={slideClassName}
          >
            {renderItem(index)}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute -left-20 top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-2.5 transition hover:bg-white md:flex"
        aria-label="Previous"
        onClick={() => scrollToIndex(active - 1)}
      >
        <ChevronLeft className="h-15 w-15 text-[#4DB6B1]" />
      </button>
      <button
        type="button"
        className="absolute -right-20 top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-2.5 transition hover:bg-white md:flex"
        aria-label="Next"
        onClick={() => scrollToIndex(active + 1)}
      >
        <ChevronRight className="h-15 w-15 text-[#4DB6B1]" />
      </button>
      <div className="mt-4 flex justify-center gap-1.5">
        {itemIds.map((id, i) => (
          <button
            key={id}
            type="button"
            aria-label={`Slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => scrollToIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === active ? "w-8 bg-[#4DB6B1]" : "w-2 bg-slate-300 hover:bg-slate-400",
            )}
          />
        ))}
      </div>
    </div>
  );
}
