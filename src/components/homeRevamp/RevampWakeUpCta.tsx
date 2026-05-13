"use client";

import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { PhoneIcon, Clock } from "lucide-react";
import RevampSection from "./RevampSection";

export default function RevampWakeUpCta() {
  const navigate = useNavigate();

  return (
    <RevampSection className="bg-[#4DB6B1] py-16 text-white md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-light text-balance md:text-7xl">Ready to Wake Up Refreshed?</h2>
        <p className="mt-5 text-lg text-white/90 font-normal leading-[25px] md:text-2xl">
          Take the first step toward better sleep—quickly and from home. Start with a 2-minute screening or book a
          brief call with our team to get personalized guidance.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-secondary text-white hover:bg-white/90"
            onClick={() => navigate("/take-quiz")}
          >
            Start My Sleep Quiz
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white/10"
            onClick={() => {
              window.location.href = "tel:+17806651500";
            }}
          >
            <PhoneIcon className="mr-2 h-4 w-4" />
            Book a 10-Minute Call
          </Button>
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-white/90">
          <Clock className="h-4 w-4" />
          Most inquiries are responded to within 24 hours.
        </p>
      </div>
    </RevampSection>
  );
}
