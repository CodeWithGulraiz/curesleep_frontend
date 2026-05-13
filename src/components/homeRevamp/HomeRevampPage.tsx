"use client";

import { Link } from "react-router-dom";
import RevampHomeNavbar from "./RevampHomeNavbar";
import RevampHeroIntroBand from "./RevampHeroIntroBand";
import RevampHeroImageSlider from "./RevampHeroImageSlider";
import RevampPostHeroDualBand from "./RevampPostHeroDualBand";
import RevampHowItWorksCarousel from "./RevampHowItWorksCarousel";
import RevampSignsGrid from "./RevampSignsGrid";
import RevampHSATSection from "./RevampHSATSection";
import RevampSleepJourneyCards from "./RevampSleepJourneyCards";
import RevampWhyChooseSection from "./RevampWhyChooseSection";
import RevampFAQSection from "./RevampFAQSection";
import RevampWakeUpCta from "./RevampWakeUpCta";
import RevampStatsSection from "./RevampStatsSection";
import Footer from "../homePage/footer";

export default function HomeRevampPage() {
  return (
    <>
      <RevampHomeNavbar />
      <main className="w-full overflow-x-hidden bg-white pt-20 md:pt-20">
      <RevampHeroIntroBand />
      <RevampHeroImageSlider />
      <RevampPostHeroDualBand />
      <RevampHowItWorksCarousel />
      <RevampSignsGrid />
      <RevampHSATSection />
      <div
        aria-hidden
        className="mx-auto mt-12 h-[2px] w-full max-w-7xl bg-slate-200 md:mt-16"
      />
      <RevampSleepJourneyCards />
      <RevampWhyChooseSection />
      <RevampFAQSection />
      <RevampWakeUpCta />
      <div className="relative">
        <RevampStatsSection />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="relative z-10 -mt-16 overflow-hidden rounded-t-3xl shadow-2xl ring-1 ring-slate-200/70 md:-mt-20">
          <Footer />
          <p className="border-t border-border bg-gradient-to-b from-muted to-background px-4 py-3 text-center text-xs text-muted-foreground">
            <Link to="/legacy-home" className="underline hover:text-foreground">
              Open classic homepage layout (backup)
            </Link>
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
