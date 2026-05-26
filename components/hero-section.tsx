"use client"

import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-balance">
          <span className="text-primary neon-glow">Akash Khatale</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 font-mono">
          Software Developer | Backend Specialist | Full Stack Builder
        </p>
        
        {/* Intro */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Backend-focused Software Developer with hands-on experience building scalable APIs, 
          data-driven systems, and full-stack applications. Strong in Python (FastAPI), Node.js, 
          and relational databases.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground neon-border"
          >
            View Work
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/akash-khatale-0b5a73225/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 hover:neon-border"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/AKA2114SH"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 hover:neon-border"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:akashkhatale6067@gmail.com"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 hover:neon-border"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  )
}
