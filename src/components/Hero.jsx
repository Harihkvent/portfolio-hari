import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="intro">
        <h1>Hi — I'm Hari Kiran</h1>
        <p>
          Aspiring Software Engineer with hands-on experience in Generative AI,
          Agentic AI, DevOps, and Full-Stack Development. Skilled in Python,
          Java, JavaScript, and MERN stack. Passionate about building
          intelligent systems and contributing to innovative R&D.
        </p>
        <p>
          <a href="#projects">View My Work</a>
          <a href="#contact">Get In Touch</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Resume
          </a>
        </p>
      </div>
      <div className="avatar">
        <img src="/avatar.png" alt="Hari Kiran's avatar" />
      </div>
    </section>
  );
}
