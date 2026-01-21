"use client"

import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const navigate = useNavigate()

  return (
    <div className="bg-card border-2 border-primary rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Take the First Step</h3>
      <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
        Sleep apnea is highly treatable once identified. If you or a loved one snores loudly, wakes gasping, or struggles with persistent fatigue, testing can change your health trajectory.
      </p>
      <Button
        onClick={() => navigate("/take-quiz")}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
      >
        Start Your 2-Minute Sleep Apnea Risk Quiz
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
      <p className="text-sm text-muted-foreground mt-4">See if home testing is right for you.</p>
    </div>
  )
}
