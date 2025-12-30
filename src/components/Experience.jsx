import React from 'react'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>

      <div className="exp-item">
        <h3>OmniqAI Pvt Ltd, Bengaluru</h3>
        <p className="exp-role">AI DevOps Intern</p>
        <p className="exp-period">May 2025 – July 2025</p>
        <ul>
          <li>Automated interview workflows by designing and deploying an <strong>MCP-based agent orchestration system</strong> with resume parsing and NLP-driven assessments, reducing manual screening effort by 60%.</li>
          <li>Improved release efficiency by containerizing services with <strong>Docker</strong>, establishing <strong>CI/CD pipelines</strong>, and implementing <strong>Playwright UI automation</strong>.</li>
        </ul>
      </div>

      <div className="exp-item">
        <p className="exp-role">AI Research Intern</p>
        <p className="exp-period">Dec 2024 – Jan 2025</p>
        <ul>
          <li>Built a scalable <strong>Knowledge Graph microservice</strong> for semantic querying in RAG systems.</li>
          <li>Enhanced LLM performance by 20% through advanced <strong>prompt engineering techniques</strong> (Chain-of-Thought, One-shot, Few-shot prompting).</li>
          <li>Conducted KPI analysis on flagship products and deployed <strong>Prometheus metrics</strong> for real-time observability, improving feature adoption by 15%.</li>
        </ul>
      </div>
    </section>
  )
}
