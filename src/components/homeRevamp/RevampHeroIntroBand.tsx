"use client";

import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { heroMarketingSlides } from "../homePage/hero-slider";

const intro = heroMarketingSlides[2];

export default function RevampHeroIntroBand() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#4DB6B1] px-4 py-16 text-center text-white md:py-20">
      <div className="mx-auto max-w-6xl space-y-5 lg:max-w-[90rem]">
        <h1 className="text-2xl font-light tracking-tight sm:text-3xl md:text-4xl lg:whitespace-nowrap lg:text-[2.5rem] xl:text-6xl">
          {intro.heading}
        </h1>
        <p className="text-lg font-normal sm:text-xl md:text-4xl lg:whitespace-nowrap">{intro.subheading}</p>
        <p className="text-sm leading-relaxed text-white/95 font-light sm:text-base md:text-2xl lg:whitespace-nowrap">
          {intro.description}
        </p>
        <div className="flex flex-col items-stretch justify-center gap-3 pt-8 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="rounded-[5px] border-0 bg-[#4A6FA5] text-white text-xl shadow-sm hover:bg-[#4A6FA5]/90 hover:text-white"
            onClick={() => navigate("/take-quiz")}
          >
            Take the sleep quiz
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-[5px] border-2 border-white bg-transparent text-xl text-white hover:bg-white/10 hover:text-white"
            onClick={() => {
              const el = document.getElementById("how-it-works");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See How Home Testing Works
          </Button>
        </div>
      </div>
    </section>
  );
}
