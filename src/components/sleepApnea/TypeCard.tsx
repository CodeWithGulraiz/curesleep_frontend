"use client"

import { CheckCircle2 } from "lucide-react"

interface TypeCardProps {
  title: string
  description: string
  color: "blue" | "purple" | "emerald"
}

export default function TypeCard({ title, description, color }: TypeCardProps) {
  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
    emerald: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  }

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border-2 rounded-xl p-6 hover:scale-105 transition-transform`}>
      <div className="flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
