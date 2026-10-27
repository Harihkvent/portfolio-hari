import React, { useState } from 'react'

export default function ProjectCard({project}){
  const [expanded, setExpanded] = useState(false)
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
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.impact && (
          <div className="project-impact">
            <span className="impact-icon">⚡</span>
            <span>{project.impact}</span>
          </div>
        )}
        {expanded && project.problem && (
          <div className="project-casestudy">
            <div className="casestudy-row">
              <span className="casestudy-label">Problem</span>
              <span className="casestudy-text">{project.problem}</span>
            </div>
            {project.role && (
              <div className="casestudy-row">
                <span className="casestudy-label">My Role</span>
                <span className="casestudy-text">{project.role}</span>
              </div>
            )}
          </div>
        )}
        <div className="project-tech">
          {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
        </div>
        <div className="project-links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo-link"
              aria-label={`View live demo of ${project.title}`}
            >
              ↗ Live Demo
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link repo-link"
              aria-label={`View source code repository for ${project.title}`}
            >
              ⎇ Repository
            </a>
          )}
          {project.problem && (
            <button
              className="project-link case-study-toggle"
              onClick={() => setExpanded(v => !v)}
              aria-expanded={expanded}
              aria-label={expanded ? `Hide case study for ${project.title}` : `Show case study for ${project.title}`}
            >
              {expanded ? '▲ Less' : '▼ Case Study'}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
