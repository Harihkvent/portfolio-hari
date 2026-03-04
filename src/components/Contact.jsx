import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [status, setStatus] = useState("")
  const ref = useScrollReveal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    try {
      const response = await fetch("https://formspree.io/f/myzdaydj", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      })
      if (response.ok) {
        setStatus("✓ Thanks for your message! I'll reply soon.")
        e.target.reset()
      } else {
        setStatus("✗ Something went wrong. Please try again.")
      }
    } catch (err) {
      setStatus("✗ Error submitting form. Try emailing me directly.")
    }
  }

  return (
    <section className="section reveal" id="contact" ref={ref}>
      <div className="section-header">
        <span className="section-prompt">~/</span>
        <h2>Contact</h2>
      </div>
      <div className="section-line"></div>
      <div className="contact-grid">
        <div>
          <p className="contact-info-title">Let's build something together</p>
          <p className="contact-info-text">
            Have a project in mind, want to collaborate, or just want to say hi?
            My inbox is always open. I'll get back to you as soon as possible.
          </p>
          <p className="contact-info-text">
            📧 harikiranventrapragada@gmail.com
          </p>
          <div className="social-links">
            <a href="https://github.com/Harihkvent" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hari-kiran-ventrapragada" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/harihk_24" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/harikiran24" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:harikiranventrapragada@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>// name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>// email</label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>// message</label>
            <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
          </div>
          <button type="submit">send_message() →</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  )
}
