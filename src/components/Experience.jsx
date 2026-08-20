import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section className="section reveal" id="experience" ref={ref}>
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
            <span className="exp-period">Dec 2025 – Jul 2026</span>
          </div>
          <span className="exp-role">Software Development Intern</span>
          <ul>
            <li>Designed and implemented a production <strong>real-time user presence system</strong> for a chat platform using WebSockets, supporting online, away, offline, and in-call states.</li>
            <li>Performed root-cause analysis across chat, audio/video, and project-management modules; authored <strong>10+ RCA documents</strong> with findings and proposed fixes.</li>
            <li>Built the React frontend and backend integration for a <strong>Secrets &amp; Keys management</strong> feature for secure API-key and credential storage.</li>
          </ul>
        </div>

        <div className="exp-item">
          <div className="exp-header">
            <div>
              <h3>OmniqAI Pvt Ltd</h3>
              <p className="exp-company">Bengaluru, India</p>
            </div>
            <span className="exp-period">May – Jun 2025</span>
          </div>
          <span className="exp-role">AI R&amp;D Intern</span>
          <ul>
            <li>Contributed to an <strong>MCP Agent Orchestration</strong> proof-of-concept integrated with Mailcow for DevOps and AI orchestration.</li>
            <li>Worked with <strong>FastAPI, Docker, Playwright, and SonarQube</strong> to support delivery, automation, and code-quality checks.</li>
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
            <li>Built a <strong>Knowledge Graph microservice</strong> with Neo4j, Python, and Ollama from Slack conversational data to ground a RAG system.</li>
            <li>Containerized and deployed the service with <strong>Docker Swarm and Gitea CI</strong>, with Prometheus monitoring for observability.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

