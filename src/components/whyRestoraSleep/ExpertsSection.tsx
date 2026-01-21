"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Stethoscope, User, Heart, Users } from "lucide-react"

const experts = [
  {
    id: 1,
    name: "Dr. Mohammed Jomha, MD",
    title: "Sleep Medicine",
    icon: Stethoscope,
    description:
      "Dr. Jomha is an American Board of Sleep Medicine (ABSM)–certified sleep physician and a member of the Canadian Sleep Society and the European Sleep Research Society. With over 5 years of dedicated sleep medicine practice, he has diagnosed and managed thousands of patients with sleep disorders.",
    specialization:
      "He specializes in the diagnosis and treatment of obstructive sleep apnea and other sleep-related breathing and behavioral sleep disorders, delivering evidence-based care focused on long-term results.",
  },
  {
    id: 2,
    name: "Hammzah Jomha, MD",
    title: "Family Physician",
    icon: User,
    description:
      "Dr. Hammzah Jomha is a Family Physician with a clinical interest in sleep medicine and metabolic health. He is a member of the European Sleep Research Society and is board certified in obesity management, supporting integrated care where sleep apnea and cardiometabolic health overlap.",
  },
  {
    id: 3,
    name: "Evangeline Bedaiko, CPSGT",
    title: "Polysomnographic Technologist",
    icon: Heart,
    description:
      "Evangeline is a Certified Polysomnographic Technologist (CPSGT) with specialized expertise in sleep study setup, signal quality, data acquisition, and patient support. She plays a key role in ensuring high-quality sleep testing and a smooth patient experience throughout the diagnostic process.",
  },
  {
    id: 4,
    name: "Arshad Siddique, RPSGT",
    title: "Sleep Technologist & Coach",
    icon: Stethoscope,
    description:
      "Arshad is a Registered Polysomnographic Technologist (RPSGT) with extensive experience in sleep apnea education, patient coaching, and PAP therapy optimization. He works closely with patients to improve comfort, adherence, and treatment success with APAP/CPAP therapy.",
  },
  {
    id: 5,
    name: "Monique Españole",
    title: "Administrative Care Coordinator",
    icon: Users,
    description:
      "Monique support patients through scheduling, communication, and care coordination, working closely with the clinical team to ensure a seamless, organized, and patient-centered experience.",
  },
  {
    id: 6,
    name: "Brooklyne Halter",
    title: "Administrative Care Coordinator",
    icon: Users,
    description:
      "Brooklyne support patients through scheduling, communication, and care coordination, working closely with the clinical team to ensure a seamless, organized, and patient-centered experience.",
  },
]

export default function ExpertsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextExpert = () => {
    setCurrentIndex((prev) => (prev + 1) % experts.length)
  }

  const prevExpert = () => {
    setCurrentIndex((prev) => (prev - 1 + experts.length) % experts.length)
  }

  const goToExpert = (index: number) => {
    setCurrentIndex(index)
  }

  const currentExpert = experts[currentIndex]
  const Icon = currentExpert.icon

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Sleep Experts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert care, proven outcomes, and personalized support—at every step
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert, index) => {
            const ExpertIcon = expert.icon
            return (
              <div
                key={expert.id}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ExpertIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{expert.name}</h3>
                <p className="text-sm font-semibold text-primary mb-4">{expert.title}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">{expert.description}</p>
                {expert.specialization && (
                  <p className="text-muted-foreground leading-relaxed text-sm">{expert.specialization}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile: Slideshow */}
        <div className="md:hidden relative">
          <div className="bg-card border border-border rounded-2xl p-6 min-h-[400px]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">{currentExpert.name}</h3>
            <p className="text-sm font-semibold text-primary mb-4">{currentExpert.title}</p>
            <p className="text-muted-foreground leading-relaxed text-sm mb-3">{currentExpert.description}</p>
            {currentExpert.specialization && (
              <p className="text-muted-foreground leading-relaxed text-sm">{currentExpert.specialization}</p>
            )}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevExpert}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition"
            aria-label="Previous expert"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={nextExpert}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition"
            aria-label="Next expert"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {experts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToExpert(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to expert ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
