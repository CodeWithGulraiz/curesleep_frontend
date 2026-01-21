"use client"

import { CheckCircle2, Stethoscope, Clock, Shield } from "lucide-react"

export default function TestingInfoSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">

      {/* Why These Tests Are Trusted */}
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
        <h3 className="text-2xl font-bold mb-6">Why These Tests Are Trusted</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground leading-relaxed">
              AASM-endorsed diagnostic pathways for uncomplicated adults with suspected obstructive sleep apnea
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground leading-relaxed">
              Strong agreement with in-lab PSG in moderate–severe OSA populations
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground leading-relaxed">
              Physician-reviewed results, not automated-only reporting
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground leading-relaxed">
              Fast turnaround, with results typically available within days
            </p>
          </div>
        </div>
      </div>

      {/* Clinical Performance */}
      <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12 mb-12">
        <h3 className="text-2xl font-bold mb-6">Clinical Performance</h3>
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <strong className="text-foreground">SleepImage®</strong> cardiopulmonary coupling–derived REI shows strong correlation with PSG AHI, with published studies demonstrating agreement coefficients commonly in the 0.80–0.90+ range for OSA detection in adults.
            </p>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">EnsoData-supported testing</strong> (used with FDA-cleared HSAT devices) applies advanced AI-assisted signal analysis, with validation studies showing diagnostic accuracy comparable to manual PSG scoring and high inter-scorer reliability.
            </p>
          </div>
        </div>
      </div>

      {/* What This Means for You */}
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold mb-6">What This Means for You</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground leading-relaxed">Reliable diagnosis without spending a night in a sleep lab</p>
          </div>
          <div className="flex items-start gap-3">
            <Stethoscope className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground leading-relaxed">Faster access to treatment</p>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground leading-relaxed">Testing that meets clinical standards for evidence-based care</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-6">
          All studies are reviewed and interpreted by a sleep physician to ensure accuracy and appropriate next steps.
        </p>
      </div>
    </div>
  )
}
