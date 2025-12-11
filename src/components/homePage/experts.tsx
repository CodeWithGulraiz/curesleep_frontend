"use client"

import { CheckCircle, Clock } from "lucide-react"

export default function Experts() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The Right Treatment from <span className="text-primary">Sleep Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based on your evaluation, our clinicians will recommend treatment options that work best for you. Our team
              can help you evaluate the choices and get started with everything you need for the first 90 days.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Verified Experts</h4>
                  <p className="text-muted-foreground">Board-certified sleep specialists with years of experience</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">24/7 Availability</h4>
                  <p className="text-muted-foreground">Always available when you need expert guidance and support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">👨‍⚕️</div>
                <p className="text-foreground font-semibold">Expert Healthcare Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
