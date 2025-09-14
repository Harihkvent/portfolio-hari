import React from 'react'

export default function Header(){
  return (
    <header className="container header">
      <div style={{fontWeight:700}}>Hari Kiran</div>
      <nav>
        <a href="#projects">Work</a> &nbsp;·&nbsp;
        <a href="#contact">Contact</a> &nbsp;·&nbsp;
        <a href="src\components\Hari_Kiran_ventrapragada.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  )
}