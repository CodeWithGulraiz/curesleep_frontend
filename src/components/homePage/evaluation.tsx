"use client"

import { CheckCircle, Clock, Shield } from "lucide-react"

export default function Evaluation() {
  const steps = [
    {
      number: "1",
      title: "Quick Online Assessment",
      description: "Start with our comprehensive online evaluation from the comfort of your home.",
      icon: CheckCircle,
    },
    {
      number: "2",
      title: "Home Sleep Study",
      description: "Receive professional sleep monitoring equipment delivered to your door.",
      icon: Clock,
    },
    {
      number: "3",
      title: "Virtual Clinical Review",
      description: "Our clinicians analyze your results remotely with the same accuracy as in-person visits.",
      icon: Shield,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Easy and Comfortable <span className="text-primary">At Home</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The first step to better sleep is a diagnosis. We perform a clinical evaluation without you stepping foot in
            a clinic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative p-8 bg-muted/50 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                <div className="mt-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
