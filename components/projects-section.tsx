import { FolderGit2, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Inventory & Billing Management System",
    tech: "FastAPI + PostgreSQL",
    description:
      "Backend tracking system with normalized schema, categories, and full transactional CRUD operations. Designed for efficient inventory management with complex relational queries.",
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Full Stack To-Do Application",
    tech: "React + Node.js + PostgreSQL",
    description:
      "Complete task tracker with clean UI, state monitoring, and custom backend REST APIs. Features user authentication, task categorization, and real-time updates.",
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "REST API Services",
    tech: "FastAPI",
    description:
      "Microservices focusing on clean architecture, authorization layers, and structured response models. Implements JWT authentication and role-based access control.",
    links: {
      demo: "#",
      code: "#",
    },
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
            <FolderGit2 size={24} className="text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FolderGit2 size={24} className="text-primary" />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.links.demo}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.links.code}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="text-xs font-mono text-primary mb-3">{project.tech}</span>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
