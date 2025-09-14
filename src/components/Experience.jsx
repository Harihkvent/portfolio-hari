import React from 'react'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>

      <div className="exp-item">
        <h3>AI Intern — OmniqAI Pvt Ltd</h3>
        <p className="exp-period">May 2024 – Jul 2024</p>
        <ul>
          <li>Developed a standup summary chatbot for daily reporting.</li>
          <li>Implemented CI scripts for automation of builds & deployments.</li>
          <li>Built PR chatbot using <strong>RAG</strong> and <strong>Graph RAG</strong> with LLMs.</li>
        </ul>
      </div>

      <div className="exp-item">
        <h3>Hackathons & Projects</h3>
        <ul>
          <li>Built Docker Automation Dashboard for container management.</li>
          <li>Developed AI-driven Intelligent Customer Support System (ICSS).</li>
          <li>Worked on Receipt OCR + Expense Categorizer (Final Year Project).</li>
        </ul>
      </div>
    </section>
  )
}
