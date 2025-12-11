"use client"

import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Fast online screen",
    description: "Answer a few questions—we'll assess and confirm if you're a good fit for home testing.",
  },
  {
    number: "2",
    title: "Disposable HSAT kit",
    description: "We ship WatchPAT® or SleepImage® to your door with a QR-guided setup.",
  },
  {
    number: "3",
    title: "One night at home",
    description: "Wear the sensor, sleep normally, and auto-upload via the app.",
  },
  {
    number: "4",
    title: "Physician diagnosis",
    description: "Your study is interpreted by a sleep physician with clear results and next steps.",
  },
  {
    number: "5",
    title: "Start therapy",
    description: "APAP/CPAP or oral appliance, with virtual mask fitting and coaching.",
  },
  {
    number: "6",
    title: "Ongoing support",
    description: "Data-driven tune-ups and supply reorders—all from home.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">How it works</h2>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-lg font-semibold text-muted-foreground mb-8">
            <span>Screen</span>
            <ArrowRight className="w-5 h-5" />
            <span>Ship</span>
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
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
