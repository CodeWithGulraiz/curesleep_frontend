"use client"

import { CheckCircle2 } from "lucide-react"

const treatments = [
  {
    title: "PAP therapy (CPAP/APAP)",
    description: "First-line for moderate–severe OSA",
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
  },
  {
    title: "Oral appliances",
    description: "For mild–moderate OSA or CPAP intolerance",
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
  },
  {
    title: "Lifestyle measures",
    description: "Weight optimization, positional therapy, alcohol reduction",
    color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  },
  {
    title: "Selected surgical options",
    description: "In specific cases",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/30",
  },
]

export default function TreatmentOptions() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Effective Treatments</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${treatment.color} border-2 rounded-xl p-5 hover:scale-105 transition-transform`}
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">{treatment.title}</h4>
                <p className="text-sm text-muted-foreground">{treatment.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
        <p className="text-muted-foreground text-sm">
          <strong className="text-foreground">Successful PAP adherence</strong> is defined as ≥4 hours/night on ≥70% of nights.
        </p>
      </div>
    </div>
  )
}
