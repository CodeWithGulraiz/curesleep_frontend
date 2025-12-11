"use client"

import { BookOpen, Pill, CheckCircle } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useNavigate } from "react-router-dom"

const services = [
  {
    id: 1,
    icon: BookOpen,
    title: "Sleep Evaluation",
    subtitle: "Start from home—easy and comfortable.",
    description:
      "The first step to better sleep is a proper diagnosis. We complete your clinical evaluation without a clinic visit: begin with a quick online assessment, then a home sleep study reviewed virtually by our clinicians. In just a few days, you'll have results—what often takes months with in-person clinics.",
    cta: "Start the quiz",
    color: "from-primary",
    link:"/take-quiz"
  },
  {
    id: 2,
    icon: Pill,
    title: "Sleep Apnea Treatment",
    subtitle: "Tailored by true sleep experts.",
    description:
      "After your evaluation, your clinician recommends a plan—often PAP (CPAP/APAP) and/or oral appliance—and we guide you step-by-step. Your first 90 days are fully supported with virtual mask fitting, coaching, and pressure adjustments.",
    cta: "Start therapy",
    color: "from-secondary",
    link:"/take-quiz"
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Follow-Up Support",
    subtitle: "Stay on track with personalized care and easy supplies.",
    description:
      "Our clinical team monitors your progress, shares practical tips, and fine-tunes your settings if anything feels off. Struggling with comfort or fit? We'll adjust your therapy together. Need replacements? Order supplies directly from our site.",
    cta: "Learn more",
    color: "from-accent",
    link:"/categories"
  },
]

export default function ThreeServices() {
  const navigate = useNavigate()
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete sleep care journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three integrated services to evaluate, treat, and support your sleep apnea recovery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${service.color} to-transparent`} />

                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} to-transparent/20 mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-3">
                    {["I", "II", "III"][index]}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm font-semibold text-secondary mb-4">{service.subtitle}</p>

                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <Button onClick={()=> navigate(`${service.link}`)} variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                    {service.cta} →
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
