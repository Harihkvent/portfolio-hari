import React from 'react'

const skillCategories = {
  'Languages': ['Python', 'JavaScript', 'Java', 'SQL'],
  'Frontend': ['React', 'HTML/CSS', 'Vite'],
  'Backend': ['Node.js', 'Express', 'Flask', 'FastAPI'],
  'DevOps & Tools': ['Docker', 'Git', 'MongoDB', 'FAISS'],
  'AI/ML': ['LLMs', 'Generative AI', 'Vector Search', 'Tesseract OCR']
}

export default function Skills(){
  return (
    <section className="section" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h4 className="skill-category-title">{category}</h4>
            <div className="skills">
              {skills.map(s => <span key={s} className="skill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}