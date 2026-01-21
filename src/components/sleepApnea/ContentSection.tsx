"use client"

import { ReactNode } from "react"

interface ContentSectionProps {
  title: string
  children: ReactNode
  icon?: ReactNode
  gradient?: "blue" | "purple" | "emerald" | "orange" | "default"
}

export default function ContentSection({ title, children, icon, gradient = "default" }: ContentSectionProps) {
  const gradientClasses = {
    blue: "from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/20",
    purple: "from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/20",
    emerald: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20",
    orange: "from-orange-500/10 via-orange-500/5 to-transparent border-orange-500/20",
    default: "from-primary/10 via-primary/5 to-transparent border-primary/20",
  }

  return (
    <section className="mb-12">
      <div className={`bg-gradient-to-br ${gradientClasses[gradient]} border-2 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow`}>
        {icon && (
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
            {icon}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{title}</h2>
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
    </section>
  )
}
