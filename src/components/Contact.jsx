import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  const [status, setStatus] = useState("")

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
        setStatus("Thanks for your message! I'll reply soon.")
        e.target.reset()
      } else {
        setStatus("Oops! Something went wrong.")
      }
    } catch (err) {
      setStatus("Error submitting form. Try again later.")
    }
  }

  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea name="message" rows="4" required />

        <button type="submit">Send</button>
      </form>
      {status && <p style={{ marginTop: 12 }}>{status}</p>}

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
      </div>
    </section>
  )
}