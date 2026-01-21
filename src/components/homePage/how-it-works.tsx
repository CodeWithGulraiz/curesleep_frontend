"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Fast Online Screen",
    description:
      "Answer a few questions using a clinically validated sleep apnea screener to determine if you qualify for fast, physician-reviewed home testing.",
  },
  {
    number: "2",
    title: "Single or Multi-Use Sleep Apnea Testing Kit",
    description:
      "After creating an account, we ship a complete home sleep apnea test to your door with easy video/QR-guided setup. Your test includes the device, physician review and interpretation, clear results, and personalized treatment recommendations including a prescription if indicated.",
  },
  {
    number: "3",
    title: "Sleep in your own bed, no lab required",
    description:
      "Wear the device overnight, sleep normally, and your data is securely uploaded via the app.",
  },
  {
    number: "4",
    title: "Physician diagnosis - Results",
    description:
      "Your study is reviewed and interpreted by a sleep physician delivering a clean diagnosis, actionable results, and defined next steps.",
  },
  {
    number: "5",
    title: "Start therapy",
    description:
      "Start the right treatment for you - APAP/CPAP or oral applicance - with guided setup virtual mask fitting, and ingoing coaching for better outcomes.",
  },
  {
    number: "6",
    title: "Personal Coaching Program",
    description: "You will be assigned a dedicated sleep coach who supports you from teh start of therapy through long-term care. You'll receive real-time insights into your progress, along with personalized tips and recommendations to maximize comfort, adherence, and long-term health benefits.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 px-4 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            How Our At-Home Sleep Testing Works
          </h2>
          <h4 className="text-xl md:text-2xl font-semibold mb-6 text-balance">
            How Our At-Home Sleep Testing Works
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-lg font-semibold text-muted-foreground mb-8">
            <span>Screen</span>
            <ArrowRight className="w-5 h-5" />
            <span>Kit</span>
            <ArrowRight className="w-5 h-5" />
            <span>Sleep</span>
            <ArrowRight className="w-5 h-5" />
            <span>Results</span>
            <ArrowRight className="w-5 h-5" />
            <span>Treatment</span>
            <ArrowRight className="w-5 h-5" />
            <span>Follow-up</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
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
