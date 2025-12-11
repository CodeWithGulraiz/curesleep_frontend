"use client"

import { CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useNavigate } from "react-router-dom"

const benefits = [
  "Disposable kit shipped in 1–3 business days (AB/BC/MB) or 2–3 days (ON).",
  "Physician interpretation & diagnosis with a virtual results visit.",
  "Clear report, treatment recommendation, and receipt for benefits.",
  "If screening suggests complex breathing, we guide you to an in-lab study instead.",
]

const exclusions = [
  "Under 18 years old",
  "Significant lung/heart disease or suspected hypoventilation",
  "Chronic opioid therapy or suspected central sleep apnea",
  "Pregnancy, or prior inconclusive HSAT",
]

export default function HSATSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6">
              <span className="text-sm font-semibold text-primary">Home Sleep Test (HSAT)</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Sleep apnea testing simplified</h2>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button onClick={()=> navigate("/take-quiz")} size="lg" className="bg-primary hover:bg-primary/90">
                Order my home test
              </Button>
              <Button onClick={() => {
    const el = document.getElementById("faqs");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }} size="lg" variant="outline">
                HSAT FAQs
              </Button>
            </div>
          </div>

          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
              <h3 className="text-2xl font-bold text-foreground">Who HSAT is not for</h3>
            </div>
            <div className="space-y-4">
              {exclusions.map((exclusion, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{exclusion}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground italic">
              If any of these apply, we'll guide you to the right care option.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
