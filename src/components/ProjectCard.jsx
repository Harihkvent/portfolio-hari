import React from 'react'

export default function ProjectCard({project}){
  return (
    <article className="project-card">
      <h4>{project.title}</h4>
      <p style={{color:'#475569'}}>{project.summary}</p>
      <div style={{marginTop:10}}>
        {project.tech.map(t => <span key={t} className="skill" style={{marginRight:6}}>{t}</span>)}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Repository</a>
    </article>
  )
}