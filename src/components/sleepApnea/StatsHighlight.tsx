"use client"

export default function StatsHighlight() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-500/20 rounded-2xl p-6 text-center">
        <div className="text-4xl font-bold text-blue-600 mb-2">1 in 5</div>
        <p className="text-sm text-muted-foreground">Adults have at least mild disease</p>
      </div>
      <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-2 border-purple-500/20 rounded-2xl p-6 text-center">
        <div className="text-4xl font-bold text-purple-600 mb-2">1 in 15</div>
        <p className="text-sm text-muted-foreground">Have moderate–severe disease</p>
      </div>
      <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-2 border-red-500/20 rounded-2xl p-6 text-center">
        <div className="text-4xl font-bold text-red-600 mb-2">80%</div>
        <p className="text-sm text-muted-foreground">Remain undiagnosed</p>
      </div>
    </div>
  )
}
