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
          <div className="about-avatar">
            <img
              src="/avatar.png"
              alt="Hari Kiran Ventrapragada — Software Engineer"
              loading="lazy"
              width="120"
              height="120"
            />
          </div>
          <p>
            I'm a Software Development Engineer with hands-on experience across{' '}
            <strong style={{color: 'var(--text)'}}>backend</strong>,{' '}
            <strong style={{color: 'var(--text)'}}>full-stack</strong>,{' '}
            <strong style={{color: 'var(--text)'}}>real-time</strong>, and AI-powered systems.
            I work with Python, FastAPI, React, WebSockets, databases, Docker, and AWS to ship dependable features.
          </p>
          <p>
            At OmniqAI, I've delivered production features, investigated issues across chat and
            audio/video systems, and built AI orchestration proof-of-concepts. I enjoy turning
            ambitious product ideas into practical, maintainable software.
          </p>
          <div className="about-location">
            📍 Vizianagaram, Andhra Pradesh, India
          </div>
        </div>
        <div className="about-stats">
          <StatCard target={3}  decimals={0} suffix="" label="OmniqAI Roles" />
          <StatCard target={10} decimals={0} suffix="+" label="RCA Documents" />
          <StatCard target={3}  decimals={0} suffix="" label="Flagship Projects" />
          <StatCard target={1}  decimals={0} suffix=" yr" label="Industry Experience" />
        </div>
      </div>
    </section>
  )
}

