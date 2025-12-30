import React from 'react'

export default function Header(){
  return (
    <header className="header">
      <div>
        <a href="#top">Hari Kiran</a>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume">Resume</a>
      </nav>
    </header>
  )
}
