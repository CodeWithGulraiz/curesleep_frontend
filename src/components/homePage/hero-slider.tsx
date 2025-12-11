"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import snoringImg from "../../assets/snoring.webp";
import womanSleeping from "../../assets/woman-sleeping.jpg";
import womanMask from "../../assets/woman-withmask.webp";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    id: "A",
    heading: "At-Home Sleep Apnea Testing & Treatment",
    subheading: "Put your sleep apnea to bed.",
    description:
      "Canada-wide home sleep testing and virtual treatment—no lab waitlists. Clinician-led, simple, and fast.",
    image: snoringImg,
  },
  {
    id: "B",
    heading: "Test at Home. Treat from Home.",
    subheading: "Sleep apnea, solved.",
    description:
      "Canada-wide home sleep testing and virtual treatment—no lab waitlists. Clinician-led, simple, and fast.",
    image: womanMask,
  },
  {
    id: "C",
    heading: "Home Sleep Apnea Care - Start to Finish",
    subheading: "Breathe easy. Sleep deeper.",
    description:
      "Canada-wide home sleep testing and virtual treatment—no lab waitlists. Clinician-led, simple, and fast.",
    image: womanSleeping,
  },
];

export default function HeroSlider() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 1000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="relative w-full h-full">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image || "/placeholder.svg"}
              alt={s.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            {slide.heading}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-secondary">
            {slide.subheading}
          </p>
          <p className="text-base md:text-lg text-gray-200">
            {slide.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              onClick={() => navigate("/take-quiz")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Start my sleep quiz
            </Button>
            <Button
              onClick={() => {
                const el = document.getElementById("how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              See how home testing works
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 text-right">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-sm" />
          <div className="relative px-4 py-2 border border-primary/40 rounded-lg bg-black/30 backdrop-blur-sm">
            <p className="text-xs md:text-sm font-medium text-primary/90 tracking-wide uppercase">
              Serving
            </p>
            <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
              Alberta, British Columbia,
              <br />
              Manitoba, and Ontario
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
