import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section className="section" id="projects">
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
