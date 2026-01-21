"use client"

import { Heart, AlertCircle, Brain, Activity } from "lucide-react"

const impacts = [
  {
    icon: Heart,
    title: "Heart disease & hypertension",
    description: "Repeated oxygen drops activate stress hormones. CPAP therapy lowers systolic blood pressure by 2–10 mmHg.",
    color: "from-red-500/20 to-red-600/10 border-red-500/30",
  },
  {
    icon: AlertCircle,
    title: "Arrhythmia & stroke",
    description: "OSA increases the risk of atrial fibrillation and stroke 2–4 fold.",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/30",
  },
  {
    icon: Activity,
    title: "Type 2 diabetes",
    description: "Worsens insulin resistance and metabolic dysfunction.",
    color: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30",
  },
  {
    icon: Brain,
    title: "Cognition & mood",
    description: "Impairs attention, memory, and emotional regulation.",
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
  },
]

export default function HealthImpactGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {impacts.map((impact, index) => {
        const Icon = impact.icon
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${impact.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105`}
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-foreground">{impact.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{impact.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
