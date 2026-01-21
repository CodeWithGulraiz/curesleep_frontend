"use client"

import HeroSection from "./HeroSection"
import IntroSection from "./IntroSection"
import FeatureCard from "./FeatureCard"
import SupportList from "./SupportList"
import ExpertsSection from "./ExpertsSection"
import CTASection from "./CTASection"
import { Clock, Stethoscope, Home, Target, Users, Shield, CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Faster Answers, Without the Wait",
    description:
      "Most patients receive testing and results within days—not months. Our streamlined at-home pathway removes long waitlists and unnecessary clinic visits, so you can move from symptoms to solutions quickly.",
    icon: Clock,
  },
  {
    title: "Physician-Led, Evidence-Based Care",
    description:
      "Every study is reviewed by a sleep physician, not automated alone. You receive a clear diagnosis, expert interpretation, and a treatment plan grounded in current sleep medicine guidelines.",
    icon: Stethoscope,
  },
  {
    title: "Comfortable Care—From Home",
    description:
      "From screening and testing to results and follow-up, everything happens from the comfort of home. This leads to more natural sleep during testing and higher treatment engagement.",
    icon: Home,
  },
  {
    title: "Treatment That Actually Works",
    description:
      "We don't believe in one-size-fits-all therapy. Your care plan is tailored to you, whether that means APAP/CPAP, oral appliance therapy, or a guided referral for in-lab testing when needed.",
    icon: Target,
  },
  {
    title: "The Right Test for the Right Patient",
    description:
      "If home testing isn't appropriate, we guide you to the right next step, including in-lab sleep studies—ensuring accuracy and safety come first.",
    icon: CheckCircle2,
  },
  {
    title: "Privacy You Can Trust",
    description:
      "Your information is protected with strict privacy standards. We never sell or share patient data—your information is used solely to deliver the best possible care.",
    icon: Shield,
  },
]

export default function WhyRestoraSleep() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={<Icon className="w-6 h-6 text-primary" />}
              />
            )
          })}
        </div>

        {/* Support Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Support That Improves Outcomes</h2>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <SupportList />
          </div>
        </section>

        {/* Experts Section */}
        <ExpertsSection />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <CTASection />
        </div>
      </div>
    </div>
  )
}
