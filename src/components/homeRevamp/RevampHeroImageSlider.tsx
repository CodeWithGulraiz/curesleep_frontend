"use client";

import { useState, useEffect } from "react";
import { heroMarketingSlides } from "../homePage/hero-slider";
import { cn } from "@/lib/utils";

export default function RevampHeroImageSlider() {
  const [index, setIndex] = useState(0);
  const count = heroMarketingSlides.length;

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 4500);
    return () => window.clearInterval(t);
  }, [count]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900" aria-label="Homepage image gallery">
      {/* ~20% shorter than 4/3 and 21/9: height scaled by 0.8 → aspect-[5/3] and [35/12] */}
      <div className="relative aspect-[5/3] w-full md:aspect-[35/12]">
        {heroMarketingSlides.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.image as string}
            alt={slide.heading}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
              i === index ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {heroMarketingSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-10 bg-[#4DB6B1]" : "w-2 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>
    </section>
  );
}
