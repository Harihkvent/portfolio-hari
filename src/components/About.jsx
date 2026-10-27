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
              alt="Hari Kiran Ventrapragada — Software Developer & AI Systems Engineer"
              loading="lazy"
              width="120"
              height="120"
            />
          </div>
          <p>
            I'm <strong>Hari Kiran Ventrapragada</strong>, a Software Development Engineer
            and Information Technology undergraduate at <strong>Maharaj Vijayaram Gajapathi Raj (MVGR) College of Engineering</strong>, Vizianagaram.
            I have hands-on experience building dependable <strong style={{color: 'var(--text)'}}>backend</strong>,{' '}
            <strong style={{color: 'var(--text)'}}>full-stack</strong>,{' '}
            <strong style={{color: 'var(--text)'}}>real-time</strong>, and AI-powered systems using Python, FastAPI, React, WebSockets, Docker, and AWS.
          </p>
          <p>
            At OmniqAI, I delivered production features (including real-time presence systems), investigated complex issues across chat and
            audio/video pipelines with 10+ RCA documents, and built AI agent orchestration proof-of-concepts. I enjoy solving algorithmic challenges and turning
            ambitious system ideas into practical, maintainable software.
          </p>
          <div className="about-location">
            📍 Vizianagaram, Andhra Pradesh, India · MVGR College of Engineering
          </div>
        </div>
        <div className="about-stats">
          <StatCard target={3}  decimals={0} suffix="" label="OmniqAI Roles" />
          <StatCard target={10} decimals={0} suffix="+" label="RCA Documents" />
          <StatCard target={8}  decimals={0} suffix="" label="Projects Showcased" />
          <StatCard target={1}  decimals={0} suffix=" yr" label="Industry Experience" />
        </div>
      </div>
    </section>
  )
}
