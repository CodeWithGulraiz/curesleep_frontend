"use client"

import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { PhoneIcon, Clock } from "lucide-react"

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Wake Up Refreshed?</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          Take the first step toward better sleep—quickly and from home. Start with a 2-minute screening or book a brief call with our team to get personalized guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={()=> navigate("/take-quiz")} size="lg" className="bg-primary hover:bg-primary/80 hover:shadow-lg text-white transition-all">
            Start My Sleep Quiz
          </Button>
          <Button
          onClick={() => { window.location.href = "tel:+17806651500" }}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-colors"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Book a 10-Minute Call
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" />
          Most inquiries are responded to within 24 hours.
        </p>
      </div>
    </section>
  )
}
