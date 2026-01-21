"use client"

import { ExternalLink } from "lucide-react"

const stats = [
  {
    id: 1,
    percentage: "30%",
    description:
      "Nearly 30% of Canadian adults are at intermediate or high risk for obstructive sleep apnea, based on STOP-BANG screening data from Statistics Canada (2016–2017).",
    source: "https://www150.statcan.gc.ca/n1/en/pub/82-625-x/2018001/article/54979-eng.pdf?st=8OVzNxuJ",
    sourceText: "Statistics Canada",
  },
  {
    id: 2,
    number: "11M+",
    description: "Over 11 million Canadians are estimated to be living with undiagnosed moderate to severe obstructive sleep apnea.",
  },
  {
    id: 3,
    percentage: "27%",
    description:
      "A 2024 analysis of the Canadian Longitudinal Study on Aging found that approximately 27% of Canadians meet criteria for undiagnosed moderate–severe OSA. Applied to Canada's July 1, 2025 population estimate of 41.65 million, this translates to over 11 million Canadians.",
    source: "https://doi.org/10.17269/s41997-024-00911-8",
    sourceText: "Canadian Journal of Public Health",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sleep Apnea Is Widespread—and Often Undiagnosed</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6">
                {stat.percentage ? (
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.percentage}</div>
                ) : (
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.number}</div>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{stat.description}</p>

              {stat.source && (
                <a
                  href={stat.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  {stat.sourceText}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
