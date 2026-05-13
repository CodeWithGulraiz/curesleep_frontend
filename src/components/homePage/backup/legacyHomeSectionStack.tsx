import Comparison from "../comparison";
import CTASection from "../cta-section";
import FAQSection from "../faq-section";
import HeroSlider from "../hero-slider";
import HowItWorks from "../how-it-works";
import HSATSection from "../hsat-section";
import SleepCareJourney from "../sleepCareJourney";
import StatsSection from "../stats-section";

/**
 * Frozen composition of the original homepage sections (pre-revamp).
 * Kept so the section order and imports stay in one place for `/legacy-home`.
 */
export function LegacyHomeSectionStack() {
  return (
    <>
      <HeroSlider />
      <HowItWorks />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <HSATSection />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <SleepCareJourney />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <Comparison />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <FAQSection />
      <CTASection />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <StatsSection />
    </>
  );
}
