import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="app" id="top">
      <ScrollToTop />
      <Header />
      <main className="container">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <span className="footer-prompt">❯</span>
        <span>© {new Date().getFullYear()} Hari Kiran Ventrapragada · Built with React & Vite</span>
      </footer>
    </div>
  )
}
