"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselSlide = { src: string; alt: string };

type SimpleImageCarouselProps = {
  slides: CarouselSlide[];
  className?: string;
  imageClassName?: string;
  viewportClassName?: string;
  autoAdvanceMs?: number;
  /** When true, grows to fill a stretched grid/flex parent (no fixed aspect ratio). */
  fillStretch?: boolean;
};

export default function SimpleImageCarousel({
  slides,
  className,
  imageClassName,
  viewportClassName,
  autoAdvanceMs = 6000,
  fillStretch = false,
}: SimpleImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      if (!count) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count < 2 || !autoAdvanceMs) return;
    const t = window.setInterval(() => go(1), autoAdvanceMs);
    return () => window.clearInterval(t);
  }, [count, autoAdvanceMs, go]);

  if (!count) return null;

  const slide = slides[index];

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border bg-muted shadow-lg",
        fillStretch ? "flex h-full min-h-0 flex-1 flex-col rounded-sm" : "rounded-2xl",
        className,
      )}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image gallery"
    >
      <div
        className={cn(
          fillStretch
            ? "relative min-h-[220px] w-full flex-1 lg:min-h-0"
            : "relative aspect-[4/5] w-full sm:aspect-[5/4] md:aspect-[4/3]",
          viewportClassName,
        )}
      >
        <img
          src={slide.src}
          alt={slide.alt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            imageClassName,
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center px-1 sm:px-2">
        <button
          type="button"
          onClick={() => go(-1)}
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow border border-border hover:bg-background"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-1 sm:px-2">
        <button
          type="button"
          onClick={() => go(1)}
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow border border-border hover:bg-background"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              i === index
                ? "bg-primary w-6"
                : "bg-background/80 hover:bg-background",
            )}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
