import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="intro">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          Available for opportunities
        </div>
        <h1>
          Hi, I'm{" "}
          <span className="hero-title-accent">Hari Kiran</span>
        </h1>
        <p className="hero-subtitle">AI Engineer · Full-Stack Dev · DevOps</p>
        <p className="hero-desc">
          Final-year B.Tech (IT) student passionate about Generative AI,
          Agentic systems, and building production-ready software. I turn
          complex ideas into intelligent, scalable solutions.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Resume ↗
          </a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="terminal-chrome">
          <span className="t-dot t-red"></span>
          <span className="t-dot t-yellow"></span>
          <span className="t-dot t-green"></span>
          <span className="terminal-title">~/hari-kiran — zsh</span>
        </div>
        <div className="terminal-body">
          <span className="t-line">
            <span className="t-prompt">❯ </span>
            <span className="t-cmd">whoami</span>
          </span>
          <span className="t-line t-output">hari-kiran-ventrapragada</span>
          <span className="t-line">&nbsp;</span>
          <span className="t-line">
            <span className="t-prompt">❯ </span>
            <span className="t-cmd">cat profile.json</span>
          </span>
          <span className="t-line t-comment">{"{"}</span>
          <span className="t-line">
            &nbsp;&nbsp;<span className="t-key">"role"</span>
            <span className="t-comment">: </span>
            <span className="t-string">"AI Engineer"</span><span className="t-comment">,</span>
          </span>
          <span className="t-line">
            &nbsp;&nbsp;<span className="t-key">"focus"</span>
            <span className="t-comment">: </span>
            <span className="t-string">"Agentic AI"</span><span className="t-comment">,</span>
          </span>
          <span className="t-line">
            &nbsp;&nbsp;<span className="t-key">"cgpa"</span>
            <span className="t-comment">: </span>
            <span className="t-val">7.64</span><span className="t-comment">,</span>
          </span>
          <span className="t-line">
            &nbsp;&nbsp;<span className="t-key">"status"</span>
            <span className="t-comment">: </span>
            <span className="t-string">"open_to_work"</span>
          </span>
          <span className="t-line t-comment">{"}"}</span>
          <span className="t-line">&nbsp;</span>
          <span className="t-line">
            <span className="t-prompt">❯ </span>
            <span className="t-cmd">./build-future.sh</span>
          </span>
          <span className="t-line t-val">▶ Initializing AI systems...</span>
          <span className="t-line t-output">
            &nbsp;&nbsp;Building intelligent solutions
            <span className="t-cursor"></span>
          </span>
        </div>
      </div>
    </section>
  );
}

