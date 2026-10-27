import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section className="section reveal" id="education" ref={ref}>
      <div className="section-header">
        <span className="section-prompt">~/</span>
        <h2>Education</h2>
      </div>
      <div className="section-line"></div>
      <div className="exp-timeline">
        <div className="exp-item">
          <div className="exp-header">
            <div>
              <h3>Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR)</h3>
              <p className="exp-company">Autonomous · Vizianagaram, Andhra Pradesh, India</p>
            </div>
            <span className="exp-period">2022 – 2026</span>
          </div>
          <span className="exp-role">Bachelor of Technology (B.Tech) — Information Technology</span>
          <div style={{ marginTop: '8px', marginBottom: '12px', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            CGPA: <strong>7.76 / 10</strong>
          </div>
          <ul>
            <li>
              <strong>Relevant Coursework:</strong> Data Structures &amp; Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming (Java/Python).
            </li>
            <li>
              Hands-on focus in full-stack architecture, backend microservices, real-time communication systems, and AI agent frameworks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
