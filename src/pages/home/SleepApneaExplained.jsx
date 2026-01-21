"use client"

import HeroSection from "../../components/sleepApnea/HeroSection"
import CTASection from "../../components/sleepApnea/CTASection"
import ReferencesSection from "../../components/sleepApnea/ReferencesSection"
import { CheckCircle2, AlertCircle, BookOpen, Users, Heart, Car, Stethoscope, AlertTriangle } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useNavigate } from "react-router-dom"

export default function SleepApneaExplained() {
  const navigate = useNavigate()

  const womenSymptoms = [
    "Persistent fatigue or low energy (even after 7–8 hours of sleep)",
    "Insomnia symptoms (trouble falling asleep or staying asleep)",
    "Morning headaches or waking with a \"heavy\" head",
    "Mood changes: irritability, anxiety, low mood, or feeling overwhelmed",
    "Brain fog: poor focus, forgetfulness, or reduced productivity",
    "Restless or light sleep, frequent awakenings, vivid dreams/night sweats",
    "Nocturia (waking up to urinate), dry mouth, or sore throat",
    "Weight gain or worsening snoring—especially around perimenopause/menopause",
  ]

  const commonSymptoms = [
    "Loud, habitual snoring",
    "Witnessed pauses in breathing, choking, or gasping",
    "Unrefreshing sleep or excessive daytime fatigue",
    "Morning headaches or dry mouth",
    "Difficulty concentrating or memory problems",
    "High or resistant blood pressure",
  ]

  const riskFactors = [
    "Anatomy: a narrow airway, enlarged tonsils, large tongue, or small jaw",
    "Excess weight: fat deposition around the neck and upper airway",
    "Sleeping position: events often worsen when sleeping on the back",
    "Alcohol or sedatives: relax airway muscles further",
    "Nasal obstruction: chronic congestion or structural blockage",
  ]

  const sleepApneaTypes = [
    {
      title: "Obstructive Sleep Apnea (OSA)",
      description: "Collapse or blockage of the upper airway",
      icon: AlertTriangle,
    },
    {
      title: "Central Sleep Apnea (CSA)",
      description: "Reduced brain signaling to breathe",
      icon: BookOpen,
    },
    {
      title: "Mixed Sleep Apnea",
      description: "Combination of both",
      icon: Stethoscope,
    },
  ]

  const healthImpacts = [
    {
      icon: Heart,
      title: "Heart disease & hypertension",
      description: "Repeated oxygen drops activate stress hormones. CPAP therapy lowers systolic blood pressure by 2–10 mmHg.",
    },
    {
      icon: AlertCircle,
      title: "Arrhythmia & stroke",
      description: "OSA increases the risk of atrial fibrillation and stroke 2–4 fold.",
    },
    {
      icon: AlertCircle,
      title: "Type 2 diabetes",
      description: "Worsens insulin resistance and metabolic dysfunction.",
    },
    {
      icon: BookOpen,
      title: "Cognition & mood",
      description: "Impairs attention, memory, and emotional regulation.",
    },
  ]

  const treatments = [
    {
      title: "PAP therapy (CPAP/APAP)",
      description: "First-line for moderate–severe OSA",
    },
    {
      title: "Oral appliances",
      description: "For mild–moderate OSA or CPAP intolerance",
    },
    {
      title: "Lifestyle measures",
      description: "Weight optimization, positional therapy, alcohol reduction",
    },
    {
      title: "Selected surgical options",
      description: "In specific cases",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">1 in 5</div>
              <p className="text-sm text-muted-foreground">Adults have at least mild disease</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">1 in 15</div>
              <p className="text-sm text-muted-foreground">Have moderate–severe disease</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-sm text-muted-foreground">Remain undiagnosed</p>
            </div>
          </div>
        </section>

        {/* Understanding Sleep Apnea */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Understanding Sleep Apnea</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sleep apnea is a chronic sleep-related breathing disorder in which breathing repeatedly stops or becomes shallow during sleep.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              These events—called apneas or hypopneas—can occur dozens or hundreds of times per night, each lasting 10 seconds or longer. The result is repeated oxygen drops and fragmented, non-restorative sleep.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 font-semibold">
              The American Academy of Sleep Medicine (AASM) recognizes three main types:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {sleepApneaTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                )
              })}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-lg">
              OSA is by far the most common. While 1 in 5 adults has at least mild disease and 1 in 15 has moderate–severe disease, up to 80% remain undiagnosed, often for years.
            </p>
          </div>
        </section>

        {/* What Is OSA */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is Obstructive Sleep Apnea (OSA)?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Obstructive sleep apnea (OSA) is the most common form of sleep apnea. It occurs when the muscles of the throat relax during sleep, causing the upper airway to narrow or collapse repeatedly.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Despite continued breathing effort, airflow is reduced or completely blocked, leading to drops in oxygen and brief awakenings from sleep.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                These breathing interruptions can happen dozens or even hundreds of times per night, often without the person being aware. Each event forces the brain to partially wake the body to reopen the airway, preventing deep, restorative sleep.
              </p>
            </div>
          </div>
        </section>

        {/* What Causes the Airway to Collapse */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Causes the Airway to Collapse?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Several factors increase the likelihood of airway obstruction during sleep
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="space-y-4 mb-6">
              {riskFactors.map((factor, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">{factor}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-muted-foreground font-semibold">
                OSA can affect people of all body types and ages—not just those who are overweight.
              </p>
            </div>
          </div>
        </section>

        {/* Women: Signs and Symptoms */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Women: Signs and Symptoms Are Often Different</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Sleep apnea in women is frequently missed or misdiagnosed because symptoms may not look like the "classic" pattern of loud snoring and witnessed pauses. Many women experience sleep fragmentation and fatigue that gets labeled as stress, insomnia, anxiety, or menopause.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                Women may be more likely to report:
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="space-y-3">
                {womenSymptoms.map((symptom, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signs You Shouldn't Ignore */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Signs You Shouldn't Ignore</h2>
            <p className="text-xl text-muted-foreground">Common symptoms include:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {commonSymptoms.map((symptom, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 flex gap-4 items-start hover:border-primary/50 transition-all">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{symptom}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Women often present differently, with fatigue, insomnia, mood changes, or "brain fog," leading to under-recognition and misdiagnosis.
            </p>
            <p className="text-foreground font-bold text-lg">
              If symptoms persist despite "enough sleep," sleep apnea should be considered.
            </p>
          </div>
        </section>

        {/* Why Sleep Apnea Matters */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Why Sleep Apnea Matters</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Untreated sleep apnea has serious health consequences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {healthImpacts.map((impact, index) => {
              const Icon = impact.icon
              return (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{impact.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{impact.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              Both the AASM and American Heart Association recommend screening for OSA in patients with cardiovascular or metabolic disease.
            </p>
          </div>
        </section>

        {/* Safety Risks & Diagnosis */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety Risks & Diagnosis</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Drowsy Driving */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-destructive" />
                <h3 className="text-2xl font-bold">Drowsy Driving</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Untreated moderate–severe OSA increases motor vehicle crash risk 2–7×.
              </p>
              <p className="text-foreground font-semibold mb-3">Until treated:</p>
              <div className="space-y-2">
                {["Avoid driving when drowsy", "Limit long or nighttime drives", "Pull over if concentration drops"].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnosis Methods */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">How Sleep Apnea Is Diagnosed</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diagnosis requires objective testing:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">In-Lab Polysomnography (PSG)</p>
                  <p className="text-sm text-muted-foreground">Gold standard</p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Home Sleep Apnea Test (HSAT)</p>
                  <p className="text-sm text-muted-foreground">Recommended by AASM for uncomplicated adults with suspected moderate–severe OSA</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                Severity is defined by the Apnea–Hypopnea Index (AHI):
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Mild", value: "5–14" },
                  { label: "Moderate", value: "15–29" },
                  { label: "Severe", value: "≥30" },
                ].map((item, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-primary mb-1">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.value} events/hour</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment & Next Steps */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Treatment & Next Steps</h2>
            <h3 className="text-2xl font-semibold mb-6">Effective Treatments</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
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
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Successful PAP adherence</strong> is defined as ≥4 hours/night on ≥70% of nights.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mb-20">
          <CTASection />
        </div>

        {/* References */}
        <ReferencesSection />
      </div>
    </div>
  )
}
