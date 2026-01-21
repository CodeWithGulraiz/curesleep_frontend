import Comparison from "../../components/homePage/comparison";
import CTASection from "../../components/homePage/cta-section";
import FAQSection from "../../components/homePage/faq-section";
import HeroSlider from "../../components/homePage/hero-slider";
import HowItWorks from "../../components/homePage/how-it-works";
import HSATSection from "../../components/homePage/hsat-section";
import SleepCareJourney from "../../components/homePage/sleepCareJourney";
import StatsSection from "../../components/homePage/stats-section";

const Home = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSlider/>
      <HowItWorks />
       <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <HSATSection />
     <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <SleepCareJourney />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Comparison />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <FAQSection />
      <CTASection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <StatsSection />
    </main>
  );
};

export default Home;
