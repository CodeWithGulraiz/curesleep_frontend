"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const howItWorksSteps = [
  {
    number: "1",
    title: "Take sleep quiz",
    description:
      "Answer a few questions using a clinically validated sleep apnea screener to determine if you qualify for fast, physician-reviewed home testing.",
  },
  {
    number: "2",
    title: "Test at home",
    description:
      "After creating an account, we ship a complete home sleep apnea testing kit to your door. Follow the easy video/QR-guided setup, sleep in your own bed overnight, and securely upload your data via the app.",
  },
  {
    number: "3",
    title: "Get results fast",
    description:
      "Your study is reviewed and interpreted by a sleep physician, delivering a clear diagnosis, actionable results, and defined next steps.",
  },
  {
    number: "4",
    title: "Start treatment",
    description:
      "Start the right treatment for you (APAP/CPAP or oral appliance) with guided setup and virtual mask fitting, plus ongoing coaching. You’ll be supported from the start through long-term care with personalized tips to maximize comfort, adherence, and outcomes.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-4 py-20 md:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            How it works
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-lg font-semibold text-muted-foreground mb-8">
            <span>Take sleep quiz</span>
            <ArrowRight className="w-5 h-5" />
            <span>Test at home</span>
            <ArrowRight className="w-5 h-5" />
            <span>Get results fast</span>
            <ArrowRight className="w-5 h-5" />
            <span>Start treatment</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div
              key={index}
              className={[
                "group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full",
                // Layout: 3 cols x 2 rows
                // Row 1: box1 (1 col) + box2 (2 cols)
                // Row 2: box3 (1 col) + box4 (2 cols)
                index === 0 ? "md:col-span-1" : "",
                index === 1 ? "md:col-span-2" : "",
                index === 2 ? "md:col-span-1" : "",
                index === 3 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
