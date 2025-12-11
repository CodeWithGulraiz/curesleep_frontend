"use client"

export default function Partners() {
  const partners = [
    { name: "Partner 1" },
    { name: "Partner 2" },
    { name: "Partner 3" },
    { name: "Partner 4" },
    { name: "Partner 5" },
    { name: "Partner 6" },
  ]

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            In-Network with <span className="text-primary">Major Insurers</span>
          </h2>
          <p className="text-muted-foreground">Trusted by leading healthcare providers nationwide</p>
        </div>

        <div className="relative overflow-hidden bg-background rounded-xl border border-border p-8">
          <div className="marquee flex gap-8">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-20 bg-muted/50 rounded-lg flex items-center justify-center border border-border"
              >
                <span className="text-muted-foreground font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
