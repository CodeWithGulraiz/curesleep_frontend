"use client";

import RevampSection from "./RevampSection";
import { ComparisonSplitCard } from "../homePage/comparison";

export default function RevampWhyChooseSection() {
  return (
    <RevampSection className="bg-[#f9f8f5] md:py-25">
      <div className="mb-8 text-center md:mb-10">
        <h2 className="text-7xl font-light text-primary">Why Choose CureSleep?</h2>
        <p className="mx-auto mt-5 max-w-2xl font-normal leading-[25px] text-xl text-slate-600">
          Experience sleep apnea testing reimagined. Skip the clinic.<br/>
          Get answers faster. Take control at home.
        </p>
      </div>

      <ComparisonSplitCard />
    </RevampSection>
  );
}
