import React from 'react'

export default function ProjectCard({project}){
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      {project.featured && <div className="featured-badge">⭐ FEATURED</div>}
      <h4>{project.title}</h4>
      <p>{project.summary}</p>
      <div className="project-tech">
        {project.tech.map(t => <span key={t} className="skill">{t}</span>)}
      </div>
      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-link demo-link">
            🚀 Live Demo
          </a>
        )}
        <a href={project.link} target="_blank" rel="noreferrer" className="project-link repo-link">
          📁 Repository
        </a>
      </div>
    </article>
  )
}