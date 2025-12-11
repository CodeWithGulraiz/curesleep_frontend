"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 34,
      issue: "Chronic Insomnia",
      text: "After 3 years of sleepless nights, I finally found peace. The personalized sleep program transformed my life completely. I now sleep 7-8 hours every night!",
      improvement: "From 2 hours to 8 hours",
      timeline: "3 weeks",
      rating: 5,
    },
    {
      name: "Michael Chen",
      age: 42,
      issue: "Sleep Anxiety",
      text: "The anxiety around bedtime used to consume me. Thanks to the expert guidance, I have reclaimed my nights and my energy. My productivity has doubled!",
      improvement: "From panic to peace",
      timeline: "6 weeks",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      age: 28,
      issue: "Work Stress Insomnia",
      text: "Working night shifts destroyed my sleep cycle. The customized approach helped me establish a healthy routine that works with my schedule.",
      improvement: "Consistent 6+ hours",
      timeline: "4 weeks",
      rating: 5,
    },
  ]

  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay, testimonials.length])

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Stories, Real <span className="text-primary">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">Join thousands who've transformed their sleep health</p>
        </div>

        <div className="relative">
          <div className="bg-background rounded-2xl border border-border p-8 md:p-12">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{testimonials[current].name}</h3>
                <p className="text-muted-foreground text-sm">
                  Age {testimonials[current].age} • {testimonials[current].issue}
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary fill-primary" />
                ))}
              </div>
            </div>

            <p className="text-lg text-foreground italic mb-8 leading-relaxed">"{testimonials[current].text}"</p>

            <div className="grid md:grid-cols-2 gap-4 pt-8 border-t border-border">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Sleep Improvement</p>
                <p className="font-bold text-primary">{testimonials[current].improvement}</p>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                <p className="font-bold text-primary">{testimonials[current].timeline}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-border"}`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
