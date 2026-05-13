"use client";

import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import comparisonSectionImage from "../../assets/4.webp";

const comparisonHeroImage = {
  src: comparisonSectionImage,
  alt: "Person using CPAP equipment comfortably at home in bed",
} as const;

export const comparisonFeatures = [
  {
    title: "Waiting Time",
    typical: "Weeks-months of waiting",
    cureSleep: "Start evaluation immediately",
  },
  {
    title: "Process",
    typical: "Multiple hand-offs before therapy starts",
    cureSleep: "Test at home; diagnosis in days",
  },
  {
    title: "Support",
    typical: "Limited guidance during setup",
    cureSleep: "Begin therapy with concierge support",
  },
  {
    title: "Convenience",
    typical: "Clinic visits required",
    cureSleep: "Everything from home",
  },
  {
    title: "Supplies",
    typical: "Arrange separately",
    cureSleep: "Ease online reorders",
  },
  {
    title: "Getting Started",
    typical: "Complex paperwork & scheduling",
    cureSleep: "Simple online signup in minutes",
  },
];

/** Image + comparison table (shared by legacy homepage and revamp). */
export function ComparisonSplitCard({ className }: { className?: string }) {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-900/[0.04]",
        className,
      )}
    >
      <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
        <div className="flex min-h-0 flex-col border-b border-slate-200 bg-slate-50/50 lg:col-span-5 lg:h-full lg:border-b-0 lg:border-r lg:border-slate-200">
          <div className="relative aspect-[4/5] w-full min-h-0 overflow-hidden lg:h-full lg:min-h-0 lg:flex-1 lg:aspect-auto">
            <img
              src={comparisonHeroImage.src}
              alt={comparisonHeroImage.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"
              aria-hidden
            />
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 lg:col-span-7 lg:p-10">
          <ul className="space-y-4 md:hidden">
            {comparisonFeatures.map((feature, index) => (
              <li key={index}>
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm">
                  <p className="mb-3 font-semibold text-slate-900">{feature.title}</p>
                  <div className="grid gap-3">
                    <div className="rounded-xl border border-slate-200 bg-slate-100/90 p-4">
                      <p className="mb-2 text-sm font-semibold text-slate-500">Typical Clinic</p>
                      <div className="flex items-start gap-3">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none text-rose-600"
                          aria-hidden
                        >
                          {"\u2715"}
                        </span>
                        <span className="min-w-0 flex-1 text-sm leading-relaxed text-slate-600">{feature.typical}</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
                      <p className="mb-2 text-sm font-semibold text-primary">CureSleep</p>
                      <div className="flex items-start gap-3">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none text-primary"
                          aria-hidden
                        >
                          {"\u2713"}
                        </span>
                        <span className="min-w-0 flex-1 text-sm font-medium leading-relaxed text-slate-800">
                          {feature.cureSleep}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="hidden md:grid md:grid-cols-[minmax(10.5rem,12rem)_minmax(0,1fr)_minmax(0,1fr)] md:items-stretch md:gap-x-4 md:gap-y-4"
            aria-label="Why Choose CureSleep comparison"
          >
            <div className="border-b border-slate-200 pb-3 text-left text-base font-bold text-slate-700">Features</div>
            <div className="border-b border-slate-200 pb-3 text-left text-base font-semibold text-slate-500">
              Typical Clinic
            </div>
            <div className="border-b border-slate-200 pb-3 text-left text-base font-bold text-primary">CureSleep</div>

            {comparisonFeatures.map((feature, index) => {
              const rowSep = index < comparisonFeatures.length - 1 ? "border-b border-slate-200/70" : "";
              return (
                <div key={index} className="contents">
                  <div className={`flex h-full min-h-[4.5rem] items-center py-1 pr-2 ${rowSep}`}>
                    <span className="text-sm font-semibold leading-snug text-slate-900">{feature.title}</span>
                  </div>
                  <div className={`flex h-full min-h-[4.5rem] py-1 ${rowSep}`}>
                    <div className="flex h-full w-full flex-col justify-center rounded-xl border border-slate-200 bg-slate-100/90 p-4">
                      <div className="flex items-start gap-3">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none text-rose-600"
                          aria-hidden
                        >
                          {"\u2715"}
                        </span>
                        <span className="min-w-0 flex-1 text-sm leading-relaxed text-slate-600">{feature.typical}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`flex h-full min-h-[4.5rem] py-1 ${rowSep}`}>
                    <div className="flex h-full w-full flex-col justify-center rounded-xl border border-primary/30 bg-primary/10 p-4">
                      <div className="flex items-start gap-3">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none text-primary"
                          aria-hidden
                        >
                          {"\u2713"}
                        </span>
                        <span className="min-w-0 flex-1 text-sm font-medium leading-relaxed text-slate-800">
                          {feature.cureSleep}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center text-sm text-slate-600 sm:text-left">Ready to experience the difference?</p>
            <button
              type="button"
              onClick={() => navigate("/take-quiz")}
              className="rounded-lg bg-primary px-8 py-3.5 text-center text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:shrink-0"
            >
              Start Your Assessment Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="bg-gradient-to-b from-primary/70 to-secondary/70 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">Why Choose CureSleep?</h2>
          <p className="text-lg leading-relaxed text-white/90">
            Experience sleep apnea testing reimagined. Skip the clinic. Get answers faster. Take control at home.
          </p>
        </div>

        <ComparisonSplitCard />
      </div>
    </section>
  );
}
