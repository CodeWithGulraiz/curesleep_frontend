"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICE_AREAS = "Alberta, British Columbia, Manitoba, and Ontario";

/** Unified vertical padding: ~10% above 1rem / 1.25rem baseline */
const ROW_PAD = "py-[1.1rem] md:py-[1.375rem]";
/** Inner stack gap: ~10% above 0.5rem / 0.625rem */
const ROW_GAP = "gap-y-[0.55rem] md:gap-y-[0.6875rem]";

/**
 * Two stacked rows after the hero image slider:
 * 1) Secondary — “Better Sleep…” + subcopy.
 * 2) ~36% / ~64% — primary “Service areas” + chevron; white strip with phone CTA.
 */
export default function RevampPostHeroDualBand() {
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col">
        {/* Row 1 — secondary */}
        <div
          className={`flex flex-col items-center justify-center overflow-x-auto bg-[#4A6FA5] px-4 text-center text-white md:px-6 ${ROW_PAD} ${ROW_GAP}`}
        >
          <h2 className="w-full max-w-none text-base font-bold leading-tight sm:text-lg md:text-xl lg:text-2xl">
            Better Sleep Starts with Expert Care
          </h2>
          <p className="w-full max-w-none text-base font-medium leading-relaxed text-white/95 sm:text-lg md:text-xl lg:text-2xl md:whitespace-nowrap">
            We focus on diagnosing and treating the source of your sleep problems.
          </p>
        </div>

        {/* Row 2 — wider phone column (9fr / 16fr) so CTA can stay one line */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,9fr)_minmax(0,16fr)]">
          <div className="flex min-w-0 items-stretch">
            <div
              className={`relative flex min-w-0 flex-1 flex-col items-end justify-center bg-[#4DB6B1] pl-4 pr-2 text-right text-white md:pl-5 md:pr-3 ${ROW_PAD} ${ROW_GAP}`}
            >
              <span className="w-full text-right text-base font-normal tracking-wide sm:text-lg md:text-2xl">
                Service Areas
              </span>
              <div
                id="service-areas-expanded"
                role="region"
                aria-labelledby="service-areas-toggle"
                aria-hidden={!areasOpen}
                className={cn(
                  "w-full overflow-hidden text-right transition-all duration-200",
                  areasOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <p className="ml-auto w-full max-w-none text-right text-sm leading-snug text-white/95 sm:text-base md:text-lg md:whitespace-nowrap">
                  {SERVICE_AREAS}
                </p>
              </div>
            </div>
            <button
              type="button"
              id="service-areas-toggle"
              aria-expanded={areasOpen}
              aria-controls="service-areas-expanded"
              onClick={() => setAreasOpen((o) => !o)}
              className={`flex w-14 shrink-0 items-center justify-center bg-[#3da097] text-white transition hover:bg-[#359089] md:w-16 ${ROW_PAD}`}
            >
              <ChevronDown
                className={cn(
                  "h-10 w-10 transition-transform duration-200",
                  areasOpen && "rotate-180",
                )}
                aria-hidden
              />
              <span className="sr-only">Show or hide service areas</span>
            </button>
          </div>

          <a
            href="tel:+17806651500"
            className={`flex min-h-0 min-w-0 flex-row flex-nowrap items-center justify-start gap-3 overflow-x-auto bg-[#ffffff] px-4 text-left text-[#4A6FA5] [scrollbar-width:thin] transition-colors hover:bg-[#ffffff] sm:gap-4 md:gap-5 md:px-6 ${ROW_PAD}`}
          >
            <Phone
              className="h-[2.1rem] w-[2.1rem] shrink-0 sm:h-[2.4rem] sm:w-[2.4rem]"
              aria-hidden
            />
            <span className="shrink-0 whitespace-nowrap text-base font-medium leading-none sm:text-lg md:text-xl lg:text-2xl">
              Call Us to Schedule an Appointment
            </span>
            <span className="shrink-0 whitespace-nowrap text-lg font-bold leading-none sm:text-xl md:text-2xl lg:text-3xl">
              (780) 665-1500
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
