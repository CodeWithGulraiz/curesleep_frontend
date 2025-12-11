"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${animated ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                <CheckCircle size={18} className="text-secondary" />
                <span className="text-sm font-medium text-secondary">Trusted by 50,000+ patients</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                At-Home Sleep Apnea Testing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Made Easy
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Professional sleep apnea diagnosis and treatment without ever leaving your home. Get expert care, today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2 text-base">
                  Take Sleep Quiz <ArrowRight size={20} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">22M+</div>
                  <p className="text-sm text-muted-foreground">Americans affected</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">80%</div>
                  <p className="text-sm text-muted-foreground">Undiagnosed cases</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5 min</div>
                  <p className="text-sm text-muted-foreground">Quick assessment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`transition-all duration-1000 delay-200 ${animated ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
                      <CheckCircle size={40} className="text-primary" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Expert Care</p>
                    <p className="text-sm text-muted-foreground">From the comfort of home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
