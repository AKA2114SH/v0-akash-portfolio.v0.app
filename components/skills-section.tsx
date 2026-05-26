import { Code2 } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "C"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "REST API Development"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Data & Tools",
    skills: ["Pandas", "NumPy", "Linux", "Docker", "AWS EC2", "Git", "GitHub", "Postman"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
            <Code2 size={24} className="text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Skills Grid */}
        <div className="grid gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
