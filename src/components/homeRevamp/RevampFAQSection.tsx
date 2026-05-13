"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homePageFaqs } from "../homePage/faq-section";
import RevampSection from "./RevampSection";

export default function RevampFAQSection() {
  const midpoint = Math.ceil(homePageFaqs.length / 2);
  const left = homePageFaqs.slice(0, midpoint);
  const right = homePageFaqs.slice(midpoint);

  return (
    <RevampSection id="faqs" className="bg-white">
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-5xl font-light leading-tight text-primary md:text-7xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-normal text-xl leading-normal text-slate-600">
          Home sleep testing and treatment—quick answers
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {left.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="py-4 text-left text-base font-semibold text-slate-900 hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-600 data-[state=open]:text-primary md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {right.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="py-4 text-left text-base font-semibold text-slate-900 hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-600 data-[state=open]:text-primary md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </RevampSection>
  );
}
