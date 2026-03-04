import React from 'react'

export default function Header(){
  return (
    <header className="header">
      <a href="#top" className="header-brand">
        <span className="header-brand-prompt">❯_</span>
        <span className="header-brand-name">hari-kiran</span>
      </a>
      <nav>
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume">resume ↗</a>
      </nav>
    </header>
  )
}

