import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Selected Projects</h2>
      <p style={{color: '#94a3b8', marginBottom: '24px'}}>
        A collection of my recent work showcasing full-stack development, AI systems, and interactive visualizations.
      </p>
      <div className="project-list">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}