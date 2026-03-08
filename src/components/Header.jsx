import React, { useState } from 'react'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="header">
      <a href="#top" className="header-brand">
        <span className="header-brand-prompt">❯_</span>
        <span className="header-brand-name">hari-kiran</span>
      </a>
      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="main-nav" className={menuOpen ? 'nav-open' : ''}>
        <a href="#about" onClick={handleNavClick}>about</a>
        <a href="#experience" onClick={handleNavClick}>experience</a>
        <a href="#projects" onClick={handleNavClick}>projects</a>
        <a href="#skills" onClick={handleNavClick}>skills</a>
        <a href="#contact" onClick={handleNavClick}>contact</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume" onClick={handleNavClick}>resume ↗</a>
      </nav>
    </header>
  )
}

