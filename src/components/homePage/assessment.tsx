"use client"

import { BedDouble, Heart, Stethoscope, Clock, Brain, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Assessment() {
  const features = [
    {
      icon: BedDouble,
      title: "At-Home Evaluation",
      description: "No travel, no stress. Everything starts from your bedroom with our user-friendly assessment.",
    },
    {
      icon: Stethoscope,
      title: "Expert Insights",
      description: "Developed and reviewed by board-certified sleep medicine specialists with years of experience.",
    },
    {
      icon: Clock,
      title: "Quick & Easy",
      description: "Complete our assessment in just 5 minutes. Get instant results and personalized recommendations.",
    },
    {
      icon: Shield,
      title: "100% Private",
      description: "Your health information is completely confidential. HIPAA-compliant with end-to-end encryption.",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze responses against thousands of verified sleep study results.",
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Track your sleep quality and monitor improvements over time with detailed metrics.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Find Out if You Have <span className="text-primary">Sleep Apnea</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert care without setting foot in the doctor's office. Our comprehensive assessment helps identify
            symptoms quickly and privately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
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

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-background rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <p className="text-muted-foreground">People assessed</p>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Accuracy rate</p>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">HIPAA</div>
            <p className="text-muted-foreground">Compliant</p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Take the Sleep Quiz Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free assessment • Instant results • No appointment needed
          </p>
        </div>
      </div>
    </section>
  )
}
