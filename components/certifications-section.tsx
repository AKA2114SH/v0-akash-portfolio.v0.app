import { Award } from "lucide-react"

const certifications = [
  {
    title: "J.P. Morgan Software Engineering Simulation",
    issuer: "J.P. Morgan",
  },
  {
    title: "Accenture UK Developer Simulation",
    issuer: "Accenture",
  },
  {
    title: "Google Digital Marketing",
    issuer: "Google",
  },
  {
    title: "ChatGPT Prompt Engineering",
    issuer: "OpenAI",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
            <Award size={24} className="text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Certifications</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                <Award size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
