import React from 'react'

const skills = ['Python','JavaScript','React','Node.js','Docker','Git','SQL','FAISS','MERN']

export default function Skills(){
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map(s => <span key={s} className="skill">{s}</span>)}
      </div>
    </section>
  )
}