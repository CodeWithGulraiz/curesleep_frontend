"use client"

const references = [
  "American Academy of Sleep Medicine. ICSD-3. 2023",
  "AASM Clinical Practice Guideline for Diagnostic Testing. J Clin Sleep Med. 2021",
  "Somers VK et al. Circulation. 2021",
  "Bratton DJ et al. JAMA. 2015",
  "Marin JM et al. Lancet. 2005",
  "Punjabi NM. Proc Am Thorac Soc. 2008",
  "NHTSA. Drowsy Driving Report. 2020",
]

export default function ReferencesSection() {
  return (
    <div className="bg-muted/30 border border-border rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Key References</h2>
      <ul className="space-y-2">
        {references.map((ref, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="text-primary font-bold mt-1">{index + 1}.</span>
            <span>{ref}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
