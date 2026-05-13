"use client";

import RevampSection from "./RevampSection";
import { sleepCareJourneyServices } from "../homePage/sleepCareJourney";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import journey1 from "../../assets/icons/step1.png";
import journey2 from "../../assets/icons/step2.png";
import journey3 from "../../assets/icons/step3.png";
import journey4 from "../../assets/icons/step4.png";

const journeyImages = [journey1, journey2, journey3, journey4] as const;

export default function RevampSleepJourneyCards() {
  const navigate = useNavigate();

  return (
    <RevampSection className="bg-white md:py-15">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-4xl font-normal leading-tight text-primary md:text-5xl lg:text-7xl">
          Complete Sleep Care
        </h2>
        <p className="mx-auto mt-4 max-w-5xl text-lg font-semibold text-slate-900 md:text-2xl">
          Everything you need to diagnose, treat, and successfully manage sleep apnea
        </p>
        <p className="mx-auto mt-2 md:max-w-[1000px] text-pretty text-base font-normal leading-[25px] text-slate-600 md:text-lg">
          Our care model integrates three connected services designed to deliver faster answers, effective treatment,
          and ongoing support, without unnecessary clinic visits.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12 pb-10">
        {sleepCareJourneyServices.map((service, index) => (
          <article
            key={service.id}
            className="grid grid-cols-1 items-start gap-6 rounded-none bg-transparent p-0 sm:grid-cols-[minmax(0,30%)_minmax(0,1fr)] sm:gap-4"
          >
            <div className="flex justify-center sm:justify-start">
              <img
                src={journeyImages[index]}
                alt=""
                className="h-auto max-h-36 w-full max-w-[160px] object-contain sm:max-w-none"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="min-w-0 text-left">
              <h3 className="text-2xl font-normal leading-[50px] text-primary md:text-4xl">{service.title}</h3>
              <p className="mt-2 text-base font-semibold text-slate-900 md:text-xl">{service.subtitle}</p>
              <p className="mt-3 text-sm font-normal leading-[20px] text-slate-600 md:text-base">
                {service.description}
              </p>
              <Button
                variant="default"
                size="lg"
                className="mt-6 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate(service.link)}
              >
                {service.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </RevampSection>
  );
}
