"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import SimpleImageCarousel from "./simple-image-carousel";
import CenteredModal from "../common/CenteredModal";
import hsatSlide1 from "../../assets/1.webp";
import hsatSlide2 from "../../assets/2.webp";
import hsatSlide3 from "../../assets/3.webp";

export const hsatBenefitLines = [
  "A single- or multi-use home sleep test is shipped directly to you within a few days.",
  "Your study is interpreted by a sleep physician, followed by a virtual results visit to review findings and clearly outline next steps.",
  "You receive a clear diagnostic report, personalized treatment recommendations, a prescription when indicated, and a receipt for insurance or health benefits.",
];

export const hsatExclusionLines = [
  "Under 18 years of age",
  "Significant lung or heart disease, or suspected sleep-related hypoventilation",
  "Chronic opioid use or suspected central sleep apnea",
  "Pregnancy, or a previous inconclusive home sleep test",
];

export const hsatCarouselSlides = [
  {
    src: hsatSlide1,
    alt: "Peaceful bedroom setting for overnight home sleep testing",
  },
  {
    src: hsatSlide2,
    alt: "Home sleep testing equipment and supplies",
  },
  {
    src: hsatSlide3,
    alt: "Clinician reviewing sleep health with a patient",
  },
];

export default function HSATSection() {
  const navigate = useNavigate();
  const [exclusionsModalOpen, setExclusionsModalOpen] = useState(false);

  return (
    <section className="px-4 py-20 md:px-8 bg-gradient-to-b from-primary/70 to-secondary/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-white/50 mb-6">
              <span className="text-sm font-semibold text-white">
                Home Sleep Test (HSAT): Our Care Model
              </span>
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-balance text-white">
              Fast, accurate sleep apnea diagnosis—made simple
            </h2>

            <button
              type="button"
              onClick={() => setExclusionsModalOpen(true)}
              aria-expanded={exclusionsModalOpen}
              aria-haspopup="dialog"
              className="group mb-8 w-full max-w-xl rounded-2xl border-2 border-destructive/20 bg-gradient-to-br from-destructive/[0.07] to-destructive/[0.12] px-4 py-4 sm:px-5 sm:py-4 text-left shadow-sm transition-all hover:border-destructive/35 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive/40 focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-destructive ring-1 ring-destructive/20">
                  <AlertCircle className="h-6 w-6" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block font-semibold text-white group-hover:text-white transition-colors">
                    Who HSAT is not for
                  </span>
                  <span className="mt-0.5 block text-sm text-white/85">
                    See when home sleep testing may not be the right choice
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-destructive/70 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>

            <div className="space-y-4 mb-8">
              {hsatBenefitLines.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => navigate("/take-quiz")}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Get started with at-home sleep testing
              </Button>
              <Button
                onClick={() => {
                  const el = document.getElementById("faqs");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                variant="outline"
              >
                HSAT FAQs
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:sticky lg:top-24">
            <SimpleImageCarousel
              slides={hsatCarouselSlides}
              viewportClassName="aspect-[2/3] sm:aspect-[1/1] md:aspect-[10/9]"
            />
          </div>
        </div>
      </div>

      <CenteredModal
        isOpen={exclusionsModalOpen}
        onClose={() => setExclusionsModalOpen(false)}
        title="Who HSAT is not for"
        contentClassName="text-left text-base sm:text-lg"
      >
        <p className="text-slate-600 font-medium mb-6">
          Home sleep testing may not be appropriate if you have any of the
          following:
        </p>
        <ul className="space-y-4 mb-8 text-left">
          {hsatExclusionLines.map((exclusion, index) => (
            <li
              key={index}
              className="flex gap-3 items-start rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive" />
              <span className="text-slate-800 leading-snug">{exclusion}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600 leading-relaxed">
          If any of these apply, we&apos;ll guide you to the most appropriate
          care option, including in-lab sleep testing when needed.
        </div>
      </CenteredModal>
    </section>
  );
}
