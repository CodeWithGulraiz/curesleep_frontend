"use client";

import { Phone, MapPin } from "lucide-react";
import RevampSection from "./RevampSection";

export default function RevampCallServiceBanner() {
  return (
    <RevampSection className="bg-[#4A6FA5] py-10 text-white md:py-12" innerClassName="max-w-6xl">
      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        <div className="flex gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
          <MapPin className="mt-1 h-8 w-8 shrink-0 text-[#4DB6B1]" aria-hidden />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Service areas</p>
            <p className="mt-1 text-lg font-semibold leading-snug">
              Alberta, British Columbia, Manitoba, and Ontario
            </p>
          </div>
        </div>
        <a
          href="tel:+17806651500"
          className="flex gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15"
        >
          <Phone className="mt-1 h-8 w-8 shrink-0 text-[#4DB6B1]" aria-hidden />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Call us to schedule an appointment
            </p>
            <p className="mt-1 text-lg font-semibold">(780) 665-1500</p>
          </div>
        </a>
      </div>
    </RevampSection>
  );
}
