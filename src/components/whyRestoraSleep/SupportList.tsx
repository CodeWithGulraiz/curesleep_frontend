"use client"

import { CheckCircle2 } from "lucide-react"

const supportItems = [
  "Personalized setup and education",
  "Virtual mask fitting and pressure optimization",
  "Ongoing coaching and data-driven adjustments",
]

export default function SupportList() {
  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <p className="text-muted-foreground leading-relaxed mb-6">
        Success depends on what happens after diagnosis. You'll receive:
      </p>
      <ul className="space-y-3">
        {supportItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground leading-relaxed mt-6">
        This support improves comfort, adherence, and long-term results.
      </p>
    </div>
  )
}
