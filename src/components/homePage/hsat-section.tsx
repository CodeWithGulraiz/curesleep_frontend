"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const benefits = [
  "A single- or multi-use home sleep test is shipped directly to you within a few days.",
  "Your study is interpreted by a sleep physician, followed by a virtual results visit to review findings and clearly outline next steps.",
  "You receive a clear diagnostic report, personalized treatment recommendations, a prescription when indicated, and a receipt for insurance or health benefits.",
];
const exclusions = [
  "Under 18 years of age",
  "Significant lung or heart disease, or suspected sleep-related hypoventilation",
  "Chronic opioid use or suspected central sleep apnea",
  "Pregnancy, or a previous inconclusive home sleep test",
];

export default function HSATSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6">
              <span className="text-sm font-semibold text-primary">
                Home Sleep Test (HSAT): Our Care Model
              </span>
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-8 text-balance">
              Fast, accurate sleep apnea diagnosis—made simple
            </h2>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => navigate("/take-quiz")}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Get started with at-home sleep testing
              </Button>
              <Button
                onClick={() => {
                  const el = document.getElementById("faqs");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                variant="outline"
              >
                HSAT FAQs
              </Button>
            </div>
          </div>

          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 lg:p-12">
            <div className="space-y-2">
              <div className="flex items-center gap-3">

              <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
              <h3 className="text-2xl block font-bold text-foreground">
                Who HSAT is not for
              </h3>
              </div>
              <h5 className="text-md mt-4 pb-2 font-semibold text-foreground">
                Home sleep testing may not be appropriate if you have any of the following:
              </h5>
            </div>
            <div className="space-y-4">
              {exclusions.map((exclusion, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{exclusion}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground italic">
              If any of these apply, we'll guide you to the most appropriate care option, including in-lab sleep testing when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
