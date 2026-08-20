import React from 'react'

export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="section-header">
        <span className="section-prompt">❯</span>
        <h2>Quick Stats</h2>
      </div>
      <div className="section-line" />

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💼</div>
          <span className="stat-value">1 yr</span>
          <span className="stat-label">Industry Experience</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🧩</div>
          <span className="stat-value">3</span>
          <span className="stat-label">OmniqAI Roles</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🤖</div>
          <span className="stat-value">8</span>
          <span className="stat-label">Projects Showcased</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <span className="stat-value">10+</span>
          <span className="stat-label">RCA Documents Authored</span>
        </div>
      </div>
    </section>
  )
}
