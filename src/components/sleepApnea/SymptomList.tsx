"use client"

import { CheckCircle2, AlertCircle } from "lucide-react"

interface SymptomListProps {
  items: string[]
  variant?: "check" | "alert"
  columns?: 1 | 2
}

export default function SymptomList({ items, variant = "check", columns = 1 }: SymptomListProps) {
  const Icon = variant === "check" ? CheckCircle2 : AlertCircle
  const gridCols = columns === 2 ? "md:grid-cols-2" : ""

  return (
    <ul className={`grid ${gridCols} gap-3`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 group">
          <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
