import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    icon: '💻',
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C++']
  },
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'React Native', 'Vite']
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'WebSockets']
  },
  {
    icon: '🐳',
    title: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'GitHub Actions', 'Prometheus', 'Linux', 'Gitea CI']
  },
  {
    icon: '🤖',
    title: 'AI / ML',
    skills: ['RAG', 'LangChain', 'LangGraph', 'Embeddings', 'Semantic Search', 'Prompt Engineering']
  },
  {
    icon: '🗄️',
    title: 'Databases',
    skills: ['MongoDB', 'Redis', 'Neo4j', 'FAISS', 'SQL']
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
