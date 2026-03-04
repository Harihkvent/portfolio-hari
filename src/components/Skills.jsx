import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    icon: '💻',
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'SQL']
  },
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React', 'HTML/CSS', 'Vite', 'Tailwind']
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Flask', 'FastAPI']
  },
  {
    icon: '🐳',
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Git', 'CI/CD', 'AWS', 'Prometheus']
  },
  {
    icon: '🤖',
    title: 'AI / ML',
    skills: ['LLMs', 'Generative AI', 'MCP Agents', 'FAISS', 'Vector Search', 'Tesseract OCR']
  },
  {
    icon: '🗄️',
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'FAISS']
  }
]

export default function Skills(){
  const ref = useScrollReveal()
  return (
    <section className="section reveal" id="skills" ref={ref}>
      <div className="section-header">
        <span className="section-prompt">~/</span>
        <h2>Skills</h2>
      </div>
      <div className="section-line"></div>
      <div className="skills-grid">
        {skillCategories.map(({ icon, title, skills }) => (
          <div key={title} className="skill-category">
            <div className="skill-category-header">
              <span className="skill-category-icon">{icon}</span>
              <span className="skill-category-title">{title}/</span>
            </div>
            <div className="skills">
              {skills.map(s => <span key={s} className="skill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
