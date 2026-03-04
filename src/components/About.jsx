import React from 'react'

export default function About(){
  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-prompt">~/</span>
        <h2>About Me</h2>
      </div>
      <div className="section-line"></div>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a final-year B.Tech (IT) student at <strong style={{color: 'var(--text)'}}>MVGR College of Engineering, Vizianagaram</strong>,
            passionate about AI/ML, Agentic systems, and building full-stack production-ready software.
            I enjoy working with containerization, CI/CD pipelines, and scaling reliable systems
            that solve real-world problems.
          </p>
          <p>
            My journey in tech is driven by curiosity and a desire to create intelligent solutions
            that make a difference. Whether it's developing AI-powered applications or optimizing
            infrastructure, I'm always eager to learn and grow.
          </p>
          <div className="about-location">
            📍 Vizianagaram, Andhra Pradesh, India
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-value">7.64</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">2</span>
            <span className="stat-label">Internships</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">2026</span>
            <span className="stat-label">Graduation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
