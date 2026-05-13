"use client";

import { ExternalLink } from "lucide-react";
import { homePageSleepStats } from "../homePage/stats-section";
import RevampSection from "./RevampSection";
import statIcon1 from "../../assets/icons/stat1.png";
import statIcon2 from "../../assets/icons/stat2.png";
import statIcon3 from "../../assets/icons/stat3.png";

const statImages = [statIcon1, statIcon2, statIcon3] as const;

export default function RevampStatsSection() {
  return (
    <RevampSection className="bg-white border pb-28 md:py-25 md:pb-42">
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-5xl font-light leading-tight text-primary md:text-7xl">
          Sleep Apnea Is Widespread and Often Undiagnosed
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {homePageSleepStats.map((stat, index) => (
          <article
            key={stat.id}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
          >
            <div className="flex justify-center">
              <img
                src={statImages[index]}
                alt=""
                className="h-auto max-w-[200px] object-contain md:max-w-[200px]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-5 text-base font-normal leading-[25px] text-slate-800">{stat.description}</p>
            {stat.source && (
              <a
                href={stat.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary hover:underline"
              >
                {stat.sourceText}
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              </a>
            )}
          </article>
        ))}
      </div>
    </RevampSection>
  );
}
