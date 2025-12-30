import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'

import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Hari Kiran. Crafted with ❤️ using React & Vite.
      </footer>
    </div>
  )
}