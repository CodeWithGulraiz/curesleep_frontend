"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "1",
    question: "What is a Home Sleep Apnea Test (HSAT)?",
    answer:
      "HSAT is a simple, at-home test used to diagnose obstructive sleep apnea (OSA). It records breathing, oxygen levels, heart rate, and sleep-related signals while you sleep in your own bed.",
  },
  {
    id: "2",
    question: "Who is a good candidate for HSAT testing?",
    answer:
      "HSAT is best for adults with symptoms suggestive of obstructive sleep apnea (such as snoring, pauses in breathing, or daytime sleepiness) who do not have significant medical conditions affecting breathing during sleep.",
  },
  {
    id: "3",
    question: "How accurate is a home sleep test compared to an in-lab study?",
    answer:
      "For appropriate patients, HSAT is highly accurate for diagnosing moderate to severe obstructive sleep apnea. If results are unclear or suggest more complex breathing issues, an in-lab sleep study may be recommended.",
  },
  {
    id: "4",
    question: "What does the HSAT kit include and how do I set it up?",
    answer:
      "Your kit includes a single- or multi-use sleep testing device with simple video and QR-guided instructions. Most patients complete setup in just a few minutes.",
  },
  {
    id: "5",
    question: "What happens if my home sleep test is negative or inconclusive?",
    answer:
      "If your symptoms persist or results are inconclusive, we will guide you to the next appropriate step, which may include repeat testing or an in-lab sleep study.",
  },
  {
    id: "6",
    question: "Who reviews and interprets my sleep study results?",
    answer:
      "All studies are reviewed and interpreted by a licensed sleep physician, ensuring accurate diagnosis and evidence-based recommendations.",
  },
  {
    id: "7",
    question: "How long does it take to receive my results?",
    answer:
      "Results are typically available within a few days after your test is completed, followed by a virtual results visit to review findings and next steps.",
  },
  {
    id: "8",
    question: "What treatment options are available if I'm diagnosed with sleep apnea?",
    answer:
      "Treatment options may include APAP/CPAP therapy, oral appliance therapy, or other individualized recommendations based on your diagnosis and preferences.",
  },
  {
    id: "9",
    question: "What if I cannot tolerate CPAP or APAP therapy?",
    answer:
      "If CPAP/APAP is not tolerated, we offer alternative options, including oral appliances and personalized coaching to improve comfort and adherence.",
  },
  {
    id: "10",
    question: "How is my treatment monitored and adjusted over time?",
    answer:
      "Your therapy is continuously monitored using device data, with ongoing coaching and adjustments to optimize comfort, effectiveness, and long-term health outcomes.",
  },
  {
    id: "11",
    question: "What happens to my information?",
    answer:
      "RestoraSleep is PIPEDA-compliant, and we treat all patient information with the highest standards of privacy and security. We do not sell or share your personal or health information. Your quiz responses and test data are kept confidential and are used solely to determine the most appropriate care for you.",
  },
]

export default function FAQSection() {
  return (
    <section id="faqs" className="py-20 md:py-32 px-4 md:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions (HSAT)</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our testing and treatment process
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
