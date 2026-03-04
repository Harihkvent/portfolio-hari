import React from 'react'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <span className="section-prompt">~/</span>
        <h2>Experience</h2>
      </div>
      <div className="section-line"></div>
      <div className="exp-timeline">
        <div className="exp-item">
          <div className="exp-header">
            <div>
              <h3>OmniqAI Pvt Ltd</h3>
              <p className="exp-company">Bengaluru, India</p>
            </div>
            <span className="exp-period">May 2025 – Jul 2025</span>
          </div>
          <span className="exp-role">AI DevOps Intern</span>
          <ul>
            <li>Automated interview workflows by designing and deploying an <strong>MCP-based agent orchestration system</strong> with resume parsing and NLP-driven assessments, reducing manual screening effort by 60%.</li>
            <li>Improved release efficiency by containerizing services with <strong>Docker</strong>, establishing <strong>CI/CD pipelines</strong>, and implementing <strong>Playwright UI automation</strong>.</li>
          </ul>
        </div>

        <div className="exp-item">
          <div className="exp-header">
            <div>
              <h3>OmniqAI Pvt Ltd</h3>
              <p className="exp-company">Bengaluru, India</p>
            </div>
            <span className="exp-period">Dec 2024 – Jan 2025</span>
          </div>
          <span className="exp-role">AI Research Intern</span>
          <ul>
            <li>Built a scalable <strong>Knowledge Graph microservice</strong> for semantic querying in RAG systems.</li>
            <li>Enhanced LLM performance by 20% through advanced <strong>prompt engineering techniques</strong> (Chain-of-Thought, One-shot, Few-shot prompting).</li>
            <li>Conducted KPI analysis and deployed <strong>Prometheus metrics</strong> for real-time observability, improving feature adoption by 15%.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

