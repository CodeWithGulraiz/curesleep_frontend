"use client";

import { useState } from "react";
import { BookOpen, Pill, CheckCircle, Moon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export const sleepCareJourneyServices = [
  {
    id: 1,
    icon: BookOpen,
    title: "Sleep Evaluation",
    subtitle: "Get answers faster, comfortably from home",
    description:
      "The first step to better sleep is an accurate diagnosis. Start with a quick, clinically validated online assessment, followed by a home sleep study reviewed by our sleep clinicians. Within days, not months, you'll receive clear results and guidance, all without an in-person clinic visit.",
    cta: "Take the sleep quiz",
    color: "from-blue-600",
    colorTo: "to-blue-400",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-600",
    link: "/take-quiz",
    activeStepBg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 2,
    icon: Pill,
    title: "Sleep Apnea Treatment",
    subtitle: "Personalized therapy, guided by sleep experts",
    description:
      "Based on your results, your clinician recommends the most effective treatment for you, often PAP therapy (CPAP/APAP) and/or an oral appliance. We support you through every step, including virtual mask fitting, education, coaching, and pressure adjustments during the critical first 90 days.",
    cta: "Take the sleep quiz",
    color: "from-purple-600",
    colorTo: "to-purple-400",
    borderColor: "border-purple-500/50",
    textColor: "text-purple-600",
    link: "/take-quiz",
    activeStepBg: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Follow-Up Support",
    subtitle: "Ongoing care to keep you comfortable and on track",
    description:
      "Successful treatment doesn't stop at diagnosis. Our clinical team monitors your progress, provides real-time feedback, and fine-tunes your therapy if needed. Having comfort or fit issues? We'll solve them together. Need supplies? Reorder easily through our site—no delays, no hassle.",
    cta: "Learn more",
    color: "from-emerald-600",
    colorTo: "to-emerald-400",
    borderColor: "border-emerald-500/50",
    textColor: "text-emerald-600",
    link: "/categories",
    activeStepBg: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: 4,
    icon: Moon,
    title: "Put Your Sleep Apnea to Bed",
    subtitle:
      "Get the care, support, and expertise you need to breathe better, sleep deeper, and feel your best—starting from home.",
    description:
      "Get the care, support, and expertise you need to breathe better, sleep deeper, and feel your best—starting from home.",
    cta: "Take the sleep quiz",
    color: "from-orange-600",
    colorTo: "to-orange-400",
    borderColor: "border-orange-500/50",
    textColor: "text-orange-600",
    link: "/take-quiz",
    activeStepBg: "bg-orange-600 hover:bg-orange-700",
  },
];

const ROMAN = ["I", "II", "III", "IV"] as const;

export default function SleepCareJourney() {
  const navigate = useNavigate();
  const services = sleepCareJourneyServices;
  const [activeId, setActiveId] = useState(services[0].id);
  const active =
    services.find((s) => s.id === activeId) ?? services[0];
  const activeIndex = services.findIndex((s) => s.id === active.id);
  const ActiveIcon = active.icon;

  return (
    <section className="px-4 py-20 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Sleep Care
          </h2>
          <p className="text-xl font-semibold text-foreground mb-4 max-w-3xl mx-auto">
            Everything you need to diagnose, treat, and successfully manage sleep
            apnea
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our care model integrates three connected services designed to
            deliver faster answers, effective treatment, and ongoing
            support—without unnecessary clinic visits.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-border bg-card overflow-hidden shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[420px]">
            <nav
              className="flex flex-col divide-y divide-border border-b lg:border-b-0 lg:border-r border-border lg:w-[22%] lg:min-w-[200px] lg:max-w-[280px] shrink-0 bg-muted/25"
              aria-label="Care journey steps"
            >
              {services.map((service, index) => {
                const isActive = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    aria-current={isActive ? "step" : undefined}
                    className={cn(
                      "text-left w-full border-l-4 py-4 px-4 transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                      isActive
                        ? cn(
                            service.activeStepBg,
                            "text-white border-l-black/20 shadow-inner",
                          )
                        : "border-transparent text-foreground hover:bg-muted/40",
                    )}
                  >
                    <span
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest mb-1 block",
                        isActive ? "text-white/90" : "text-muted-foreground",
                      )}
                    >
                      {ROMAN[index]}
                    </span>
                    <span
                      className={cn(
                        "font-bold leading-snug",
                        isActive ? "text-white" : "text-foreground/80",
                      )}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div
              className="flex-1 min-w-0 flex flex-col bg-background"
              role="tabpanel"
              aria-labelledby={`journey-step-${active.id}`}
              id={`journey-panel-${active.id}`}
            >
              <div
                className={cn(
                  "h-2 w-full shrink-0 bg-gradient-to-r",
                  active.color,
                  active.colorTo,
                )}
              />
              <div className="p-8 md:p-10 lg:p-12 flex-1">
              <div
                className={cn(
                  "inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br mb-6 shadow-lg",
                  active.color,
                  active.colorTo,
                )}
              >
                <ActiveIcon className="w-8 h-8 text-white" />
              </div>

              <div
                className={cn(
                  "text-xs font-bold uppercase tracking-widest mb-3",
                  active.textColor,
                )}
              >
                {ROMAN[activeIndex]}
              </div>

              <h3
                id={`journey-step-${active.id}`}
                className="text-2xl md:text-3xl font-bold mb-2 text-foreground"
              >
                {active.title}
              </h3>
              <p
                className={cn(
                  "text-sm md:text-base font-semibold mb-6",
                  active.textColor,
                )}
              >
                {active.subtitle}
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 max-w-3xl">
                {active.description}
              </p>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate(active.link)}
              >
                {active.cta}
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
