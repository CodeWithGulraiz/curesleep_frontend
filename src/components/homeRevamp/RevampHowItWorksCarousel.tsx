"use client";

import RevampSection from "./RevampSection";
import RevampSnapCarousel from "./RevampSnapCarousel";
import { howItWorksSteps } from "../homePage/how-it-works";

export default function RevampHowItWorksCarousel() {
  return (
    <RevampSection
      id="how-it-works"
      className="bg-[#f4f6f8] py-14 md:py-20"
      innerClassName="w-full max-w-none"
    >
      <div className="text-center">
        <h2 className="pb-15 text-5xl font-light text-[#4DB6B1] md:text-7xl">
          How it works
        </h2>
      </div>

      <RevampSnapCarousel
        ariaLabel="How it works steps"
        itemsPerView={3}
        className="px-2 md:px-4 md:max-w-7xl mx-auto"
        itemIds={howItWorksSteps.map((_, i) => `step-${i}`)}
        renderItem={(index) => {
          const step = howItWorksSteps[index];
          return (
            <div className="relative flex h-full min-h-0 flex-col overflow-visible rounded-2xl bg-[#4A6FA5] px-2 py-[50px] text-center text-white shadow-sm md:px-2.5">
              <div
                className="pointer-events-none absolute left-[10%] top-0 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#4DB6B1] text-lg font-bold text-white shadow-md md:h-12 md:w-12 md:text-xl"
                aria-hidden
              >
                {step.number}
              </div>
              <h3 className="mt-0 shrink-0 text-xl font-normal leading-snug text-white md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-5 min-h-0 flex-1 text-[12px] font-light leading-[1.35] text-white/95 md:mt-6 md:text-[14px]">
                {step.description}
              </p>
            </div>
          );
        }}
      />
    </RevampSection>
  );
}
