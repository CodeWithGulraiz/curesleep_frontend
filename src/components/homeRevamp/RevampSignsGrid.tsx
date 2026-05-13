"use client";

import temp1 from "../../assets/icons/1.png";
import temp2 from "../../assets/icons/2.png";
import temp3 from "../../assets/icons/3.png";
import temp4 from "../../assets/icons/4.png";
import temp5 from "../../assets/icons/5.png";
import temp6 from "../../assets/icons/6.png";
import temp7 from "../../assets/icons/7.png";
import temp8 from "../../assets/icons/8.png";
import temp9 from "../../assets/icons/9.png";
import temp10 from "../../assets/icons/10.png";
import temp11 from "../../assets/icons/11.png";
import temp12 from "../../assets/icons/12.png";
import RevampSection from "./RevampSection";

const signItems = [
  { src: temp1, label: "Difficulty concentrating" },
  { src: temp2, label: "Diminished intimacy" },
  { src: temp3, label: "Waking up gasping for air" },
  { src: temp4, label: "Falling asleep unexpectedly during the day" },
  { src: temp5, label: "Morning headaches or heartburn" },
  { src: temp6, label: "Snoring that wakes you (or your family) up" },
  { src: temp7, label: "Tired or low energy throughout the day" },
  { src: temp8, label: "Falling asleep during movies or TV" },
  { src: temp9, label: "Needing multiple coffees to get going" },
  { src: temp10, label: "Regularly hitting the snooze button more than twice" },
  { src: temp11, label: "Difficulty driving long distances" },
  { src: temp12, label: "Frequent heartburn" },
] as const;

export default function RevampSignsGrid() {
  return (
    <RevampSection className="bg-secondary py-14 md:py-20">
      <div className="mx-auto mb-10 max-w-4xl text-left md:mb-14">
        <h2 className="text-3xl font-light leading-tight text-primary md:text-4xl lg:text-7xl">
          Signs you might have a sleep disorder
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-secondary-foreground md:text-xl">
          We often hear these complaints from our clients. They don&apos;t all necessarily indicate a sleep disorder,
          but if you experience any of the following, pay close attention.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-y-8 sm:gap-y-10 md:gap-y-30">
        {signItems.map(({ src, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <img
              src={src}
              alt=""
              className="h-10 w-10 shrink-0 object-contain md:h-40 md:w-40"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-3 max-w-none px-0.5 text-[10px] font-light leading-snug text-secondary-foreground md:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </RevampSection>
  );
}
