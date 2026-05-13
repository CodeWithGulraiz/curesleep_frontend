"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import SimpleImageCarousel from "../homePage/simple-image-carousel";
import CenteredModal from "../common/CenteredModal";
import RevampSection from "./RevampSection";
import { hsatBenefitLines, hsatExclusionLines, hsatCarouselSlides } from "../homePage/hsat-section";

export default function RevampHSATSection() {
  const navigate = useNavigate();
  const [exclusionsModalOpen, setExclusionsModalOpen] = useState(false);

  return (
    <RevampSection className="bg-gradient-to-b from-slate-50 via-white to-white py-14 md:py-15">
      <h2 className="mx-auto max-w-4xl text-balance text-center text-4xl font-normal leading-tight text-primary md:text-5xl lg:text-7xl">
        Fast, accurate sleep apnea diagnosis, made simple
      </h2>

      <div className="mt-8 flex justify-center px-2 md:mt-14">
        <button
          type="button"
          onClick={() => setExclusionsModalOpen(true)}
          className="w-full max-w-xl rounded-sm bg-primary px-5 py-5 text-left shadow-md transition hover:opacity-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:px-4 md:py-6"
        >
          <span className="block text-2xl font-bold leading-none text-primary-foreground md:text-3xl lg:text-[2rem]">
            Who HSAT is not for
          </span>
          <span className="mt-1 block font-light leading-snug text-primary-foreground/95 md:mt-1.5 md:text-lg">
            See when home sleep testing may not be the right choice{" "}
            <span className="inline font-light" aria-hidden>
              →
            </span>
          </span>
        </button>
      </div>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <div className="flex min-h-0 min-w-0 flex-col space-y-10">
          {hsatBenefitLines.map((benefit, index) => (
            <div key={index} className="flex gap-5 md:gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-transparent md:h-10 md:w-10">
                <Check
                  className="h-[18px] w-[18px] text-primary md:h-5 md:w-5"
                  strokeWidth={2.25}
                  fill="none"
                  aria-hidden
                />
              </span>
              <p className="text-[15px] font-normal leading-relaxed text-slate-700 md:text-base">{benefit}</p>
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate("/take-quiz")}
            >
              Get started with at-home sleep testing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary bg-white text-primary hover:bg-primary/5"
              onClick={() => {
                const el = document.getElementById("faqs");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              HSAT FAQs
            </Button>
          </div>
        </div>

        <div className="flex w-full min-h-[260px] flex-col lg:h-full lg:min-h-0">
          <SimpleImageCarousel
            slides={hsatCarouselSlides}
            fillStretch
            className="min-h-0 flex-1 border-slate-200/80 shadow-sm ring-1 ring-slate-200/80"
          />
        </div>
      </div>

      <CenteredModal
        isOpen={exclusionsModalOpen}
        onClose={() => setExclusionsModalOpen(false)}
        title="Who HSAT is not for"
        contentClassName="text-left text-base sm:text-lg"
      >
        <p className="mb-6 font-medium text-slate-600">
          Home sleep testing may not be appropriate if you have any of the following:
        </p>
        <ul className="mb-8 space-y-4 text-left">
          {hsatExclusionLines.map((exclusion, index) => (
            <li
              key={index}
              className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
              <span className="leading-snug text-slate-800">{exclusion}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-600">
          If any of these apply, we&apos;ll guide you to the most appropriate care option, including in-lab sleep
          testing when needed.
        </div>
      </CenteredModal>
    </RevampSection>
  );
}
