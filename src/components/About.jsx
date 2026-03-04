import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ target, decimals, suffix, label }) {
  const { displayValue, ref } = useCountUp(target, { decimals, suffix })
  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-value">{displayValue}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function About(){
  const ref = useScrollReveal()
  return (
    <section className="section reveal" id="about" ref={ref}>
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
          <StatCard target={7.64} decimals={2} suffix="" label="CGPA" />
          <StatCard target={5}    decimals={0}  suffix="+" label="Projects" />
          <StatCard target={2}    decimals={0}  suffix="" label="Internships" />
          <StatCard target={2026} decimals={0}  suffix="" label="Graduation" />
        </div>
      </div>
    </section>
  )
}

