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
            I'm a Software Engineer with hands-on expertise in <strong style={{color: 'var(--text)'}}>Generative AI</strong>,{' '}
            <strong style={{color: 'var(--text)'}}>Agentic systems</strong>, and full-stack development.
            I design and ship production-grade applications — from LLM-powered pipelines and
            MCP agent orchestration to containerised microservices and CI/CD workflows.
          </p>
          <p>
            My work sits at the intersection of AI and engineering: building systems that are not
            only intelligent but also reliable, observable, and built to scale. I thrive on
            turning ambitious ideas into real products that solve real problems.
          </p>
          <div className="about-location">
            📍 Vizianagaram, Andhra Pradesh, India
          </div>
        </div>
        <div className="about-stats">
          <StatCard target={5}  decimals={0} suffix="+" label="Projects" />
          <StatCard target={2}  decimals={0} suffix=""  label="Internships" />
          <StatCard target={60} decimals={0} suffix="%" label="Efficiency ↑" />
          <StatCard target={20} decimals={0} suffix="%" label="LLM Gain" />
        </div>
      </div>
    </section>
  )
}

