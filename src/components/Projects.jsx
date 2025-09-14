import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Selected Projects</h2>
      <div className="project-list">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}