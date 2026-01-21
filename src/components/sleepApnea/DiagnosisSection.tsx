"use client"

import { Car, Stethoscope, CheckCircle2 } from "lucide-react"

export default function DiagnosisSection() {
  return (
    <div className="space-y-8">
      {/* Drowsy Driving */}
      <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-2 border-red-500/20 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/20">
            <Car className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">Drowsy Driving</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Untreated moderate–severe OSA increases motor vehicle crash risk 2–7×.
            </p>
            <p className="text-foreground font-semibold mb-3">Until treated:</p>
            <ul className="space-y-2">
              {["Avoid driving when drowsy", "Limit long or nighttime drives", "Pull over if concentration drops"].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Diagnosis Methods */}
      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-500/20 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20">
            <Stethoscope className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">How Sleep Apnea Is Diagnosed</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diagnosis requires objective testing:
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-background/50 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-1">In-Lab Polysomnography (PSG)</p>
                <p className="text-sm text-muted-foreground">Gold standard</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-1">Home Sleep Apnea Test (HSAT)</p>
                <p className="text-sm text-muted-foreground">Recommended by AASM for uncomplicated adults with suspected moderate–severe OSA</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
              Severity is defined by the Apnea–Hypopnea Index (AHI):
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Mild", value: "5–14 events/hour" },
                { label: "Moderate", value: "15–29" },
                { label: "Severe", value: "≥30" },
              ].map((item, index) => (
                <div key={index} className="bg-background/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
