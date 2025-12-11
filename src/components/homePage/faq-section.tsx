"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "1",
    question: "How long does shipping take?",
    answer: "AB/BC/MB: 1–3 business days; ON: 2–3 business days. Remote areas may vary slightly.",
  },
  {
    id: "2",
    question: "Do I need a referral?",
    answer:
      "No. If treatment is indicated, our clinician provides your prescription. You can start your evaluation immediately.",
  },
  {
    id: "3",
    question: "Is this covered by my benefits?",
    answer:
      "Many extended health plans reimburse home sleep testing and CPAP. We provide detailed receipts to support your claims.",
  },
  {
    id: "4",
    question: "What if HSAT is not appropriate for me?",
    answer:
      "We'll arrange an in-lab study when appropriate. Our clinicians assess each case individually to ensure you receive the right care.",
  },
  {
    id: "5",
    question: "I tried CPAP before and struggled. Can you help?",
    answer:
      "Yes. We offer virtual mask fitting, comfort/pressure tuning, and oral appliance options when appropriate. Our team works with you to find what works.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently asked questions</h2>
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
