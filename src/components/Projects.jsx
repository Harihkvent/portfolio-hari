import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects(){
  const ref = useScrollReveal()
  return (
    <section className="section reveal" id="projects" ref={ref}>
      <div className="section-header">
        <span className="section-prompt">~/</span>
        <h2>Projects</h2>
      </div>
      <div className="section-line"></div>
      <p className="section-desc">
        A curated collection of my work spanning AI systems, full-stack applications, and DevOps tooling.
      </p>
      <div className="project-list">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
