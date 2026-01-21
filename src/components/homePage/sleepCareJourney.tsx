"use client"

import { BookOpen, Pill, CheckCircle, Moon } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useNavigate } from "react-router-dom"

const services = [
  {
    id: 1,
    icon: BookOpen,
    title: "Sleep Evaluation",
    subtitle: "Get answers faster—comfortably from home",
    description:
      "The first step to better sleep is an accurate diagnosis. Start with a quick, clinically validated online assessment, followed by a home sleep study reviewed by our sleep clinicians. Within days—not months—you'll receive clear results and guidance, all without an in-person clinic visit.",
    cta: "Start the quiz",
    color: "from-blue-600",
    colorTo: "to-blue-400",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-600",
    link:"/take-quiz"
  },
  {
    id: 2,
    icon: Pill,
    title: "Sleep Apnea Treatment",
    subtitle: "Personalized therapy, guided by sleep experts",
    description:
      "Based on your results, your clinician recommends the most effective treatment for you—often PAP therapy (CPAP/APAP) and/or an oral appliance. We support you through every step, including virtual mask fitting, education, coaching, and pressure adjustments during the critical first 90 days.",
    cta: "Start therapy",
    color: "from-purple-600",
    colorTo: "to-purple-400",
    borderColor: "border-purple-500/50",
    textColor: "text-purple-600",
    link:"/take-quiz"
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Follow-Up Support",
    subtitle: "Ongoing care to keep you comfortable and on track",
    description:
      "Successful treatment doesn't stop at diagnosis. Our clinical team monitors your progress, provides real-time feedback, and fine-tunes your therapy if needed. Having comfort or fit issues? We'll solve them together. Need supplies? Reorder easily through our site—no delays, no hassle.",
    cta: "Learn more",
    color: "from-emerald-600",
    colorTo: "to-emerald-400",
    borderColor: "border-emerald-500/50",
    textColor: "text-emerald-600",
    link:"/categories"
  },
  {
    id: 4,
    icon: Moon,
    title: "Put Your Sleep Apnea to Bed",
    subtitle: "Get the care, support, and expertise you need to breathe better, sleep deeper, and feel your best—starting from home.",
    description:
      "Get the care, support, and expertise you need to breathe better, sleep deeper, and feel your best—starting from home.",
    cta: "Get started",
    color: "from-orange-600",
    colorTo: "to-orange-400",
    borderColor: "border-orange-500/50",
    textColor: "text-orange-600",
    link:"/take-quiz"
  },
]

export default function SleepCareJourney() {
  const navigate = useNavigate()
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Sleep Care Journey</h2>
          <p className="text-xl font-semibold text-foreground mb-4 max-w-3xl mx-auto">
            Everything you need to diagnose, treat, and successfully manage sleep apnea
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our care model integrates three connected services designed to deliver faster answers, effective treatment, and ongoing support—without unnecessary clinic visits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const borderHoverClass = 
              service.id === 1 ? "hover:border-blue-500/50" :
              service.id === 2 ? "hover:border-purple-500/50" :
              service.id === 3 ? "hover:border-emerald-500/50" :
              "hover:border-orange-500/50"
            
            const buttonHoverClass =
              service.id === 1 ? "text-blue-600 hover:text-blue-500" :
              service.id === 2 ? "text-purple-600 hover:text-purple-500" :
              service.id === 3 ? "text-emerald-600 hover:text-emerald-500" :
              "text-orange-600 hover:text-orange-500"

            return (
              <div
                key={service.id}
                className={`group relative bg-card border-2 border-border rounded-2xl overflow-hidden ${borderHoverClass} transition-all duration-300 hover:shadow-2xl`}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${service.color} ${service.colorTo}`} />

                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} ${service.colorTo} mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className={`text-xs font-bold ${service.textColor} uppercase tracking-widest mb-3`}>
                    {["I", "II", "III", "IV"][index]}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className={`text-sm font-semibold ${service.textColor} mb-4`}>{service.subtitle}</p>

                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
