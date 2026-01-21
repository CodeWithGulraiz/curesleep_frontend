"use client"

import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const navigate = useNavigate()

  return (
    <div className="bg-card border-2 border-primary rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Put Your Sleep Apnea to Bed</h2>
      <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
        RestoraSleep helps you move from tired, frustrated, and untreated to diagnosed, supported, and sleeping better—faster.
      </p>
      <Button
        onClick={() => navigate("/take-quiz")}
        size="lg"
        variant="default"
        className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
      >
        Get started
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  )
}
