"use client"

import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { PhoneIcon, Clock } from "lucide-react"

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to wake up refreshed?</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Start with a 2-minute screen or book a quick call. Everything happens from home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={()=> navigate("/take-quiz")} size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Start my sleep quiz
          </Button>
          <Button
          onClick={() => { window.location.href = "tel:+17806651500" }}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Book a 10-min call
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" />
          Most inquiries responded to within 24 hours
        </p>
      </div>
    </section>
  )
}
