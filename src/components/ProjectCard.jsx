import React from 'react'

export default function ProjectCard({project}){
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      {project.featured && <div className="featured-badge">⭐ Featured</div>}
      <h4>{project.title}</h4>
      <p style={{color:'#475569'}}>{project.summary}</p>
      <div style={{marginTop:10, marginBottom: 16}}>
        {project.tech.map(t => <span key={t} className="skill" style={{marginRight:6}}>{t}</span>)}
      </div>
      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-link demo-link">
            🚀 Live Demo
          </a>
        )}
        <a href={project.link} target="_blank" rel="noreferrer" className="project-link repo-link">
          📂 Repository
        </a>
      </div>
    </article>
  )
}