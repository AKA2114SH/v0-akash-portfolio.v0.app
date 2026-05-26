import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "The Baap Company",
    period: "Nov 2025 - Present",
    description: [
      "Designed and implemented RESTful APIs using FastAPI and Node.js for scalable backend services",
      "Optimized PostgreSQL and MySQL databases, improving query performance and data integrity",
      "Built automated data pipelines with Python and Pandas for efficient data processing",
      "Integrated React frontends with backend services for seamless user experiences",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "The Baap Company",
    period: "Aug 2022 - Nov 2025",
    description: [
      "Developed full-stack features across multiple projects using React and Node.js",
      "Implemented API integrations and handled complex data transformations",
      "Debugged and resolved database system workflow issues",
      "Collaborated with team members on code reviews and best practices",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
            <Briefcase size={24} className="text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 neon-border" />
              
              {/* Content card */}
              <div
                className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-primary font-medium mb-4">{exp.company}</p>
                <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
