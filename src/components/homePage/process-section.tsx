"use client"

import { Users, Award, Shield, Brain } from "lucide-react"

export default function ProcessSection() {
  const features = [
    {
      icon: Award,
      title: "Expert Insights",
      description: "Developed and reviewed by board-certified sleep medicine specialists",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze responses against thousands of verified sleep studies",
    },
    {
      icon: Shield,
      title: "100% Private",
      description: "Your health information is completely confidential and secure",
    },
    {
      icon: Users,
      title: "Personalized Plans",
      description: "Custom treatment recommendations based on your unique needs",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, professional process to get your personalized sleep assessment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
