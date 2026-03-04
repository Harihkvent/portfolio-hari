import React from 'react'

export default function ProjectCard({project}){
  const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-card-chrome">
        <div className="project-chrome-dots">
          <span className="t-dot t-red"></span>
          <span className="t-dot t-yellow"></span>
          <span className="t-dot t-green"></span>
        </div>
        <span className="project-card-path">~/projects/{slug}</span>
        {project.featured && <span className="featured-badge">★ featured</span>}
      </div>
      <div className="project-card-body">
        <h4>{project.title}</h4>
        <p>{project.summary}</p>
        <div className="project-tech">
          {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
        </div>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link demo-link">
              ↗ Live Demo
            </a>
          )}
          <a href={project.link} target="_blank" rel="noreferrer" className="project-link repo-link">
            ⎇ Repository
          </a>
        </div>
      </div>
    </article>
  )
}
