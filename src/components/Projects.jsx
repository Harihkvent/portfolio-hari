import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Featured Projects</h2>
      <p className="section-desc">
        A curated collection of my work showcasing full-stack development, AI systems, and innovative solutions.
      </p>
      <div className="project-list">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}