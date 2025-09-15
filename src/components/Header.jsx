import React from 'react'

export default function Header(){
  return (
    <header className="container header">
      <div style={{fontWeight:700}}>
        <a href="#top" style={{textDecoration: "none", color: "inherit"}}>
          Hari Kiran
        </a>
      </div>
      <nav>
        <a href="#projects">Work</a> &nbsp;·&nbsp;
        <a href="#contact">Contact</a> &nbsp;·&nbsp;
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  )
}
