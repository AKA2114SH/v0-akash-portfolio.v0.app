import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
            <User size={24} className="text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Content */}
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            I am a dedicated Software Developer with nearly 4 years of professional experience 
            at The Baap Company, where I have honed my skills in building robust backend systems 
            and full-stack applications.
          </p>
          <p>
            My expertise lies in <span className="text-primary font-medium">architectural optimization</span>, 
            designing efficient database schemas, and creating scalable RESTful APIs. I have a strong 
            foundation in <span className="text-primary font-medium">database design</span> with hands-on 
            experience in PostgreSQL, MySQL, and MongoDB.
          </p>
          <p>
            I thrive in <span className="text-primary font-medium">Linux environments</span>, handling 
            server management, troubleshooting workflows, and deploying applications on AWS EC2. 
            My approach combines technical precision with a commitment to writing clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
  )
}
