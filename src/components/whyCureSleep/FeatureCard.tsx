"use client"

import { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
      {icon && (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
