"use client"

import { Star } from "lucide-react"

export default function Team() {
  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Sleep Specialist",
      credentials: "MD, Sleep Medicine Board Certified",
      bio: "Leading expert in sleep medicine with 15+ years of experience and 10,000+ patients helped.",
      image: "👩‍⚕️",
    },
    {
      name: "Dr. Michael Chen",
      role: "Behavioral Sleep Therapist",
      credentials: "PhD Psychology, CBT-I Certified",
      bio: "Pioneered natural sleep restoration techniques used by thousands worldwide.",
      image: "👨‍⚕️",
    },
    {
      name: "Emma Rodriguez",
      role: "Sleep Wellness Coach",
      credentials: "Certified Sleep Coach",
      bio: "Specializes in creating personalized sleep routines that fit busy lifestyles.",
      image: "👩‍⚕️",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Sleep Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Decades of experience in helping patients achieve better sleep
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-muted/30 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="text-6xl mb-4 text-center">{member.image}</div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground mb-3">{member.credentials}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
