"use client"

import { useNavigate } from "react-router-dom"

const comparisonFeatures = [
  {
    title: "Waiting Time",
    typical: "Weeks–months of waiting",
    cureSleep: "Start evaluation immediately",
  },
  {
    title: "Process",
    typical: "Multiple hand-offs before therapy starts",
    cureSleep: "Test at home; diagnosis in days",
  },
  {
    title: "Support",
    typical: "Limited guidance during setup",
    cureSleep: "Begin therapy with concierge support",
  },
  {
    title: "Convenience",
    typical: "Clinic visits required",
    cureSleep: "Everything from home",
  },
  {
    title: "Supplies",
    typical: "Arrange separately",
    cureSleep: "Easy online reorders",
  },
  {
    title: "Getting Started",
    typical: "Complex paperwork & scheduling",
    cureSleep: "Simple online signup in minutes",
  },
]

export default function Comparison() {
  const navigate = useNavigate();
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Choose CureSleep?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience sleep apnea testing reimagined. Skip the clinic. Get answers faster. Take control at home.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-6 px-6 font-bold text-lg text-foreground">Features</th>
                <th className="text-left py-6 px-6 font-semibold text-lg text-muted-foreground">Typical Clinic</th>
                <th className="text-left py-6 px-6 font-bold text-lg text-primary">CureSleep</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors duration-200">
                  <td className="py-6 px-6 font-semibold text-foreground whitespace-nowrap">{feature.title}</td>
                  <td className="py-6 px-6 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-xl mt-0.5 flex-shrink-0">✕</span>
                      <span>{feature.typical}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-foreground font-medium">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5 flex-shrink-0">✓</span>
                      <span>{feature.cureSleep}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Ready to experience the difference?</p>
          <button onClick={()=> navigate("/take-quiz")} className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Start Your Assessment Today
          </button>
        </div>
      </div>
    </section>
  )
}
