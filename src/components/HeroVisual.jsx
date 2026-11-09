import React, { useState, useRef } from 'react';

/**
 * HeroVisual - Flagship 3D Interactive Centerpiece.
 * Features:
 * 1. Kinetic dual-direction 3D marquee ribbons spanning across the full screen width,
 *    gliding smoothly behind Hari Kiran's photo ("names coming and going on the back of my photo").
 * 2. 3D Gyro / Mouse-Tracking Parallax Tilt on the foreground portrait.
 * 3. Moving specular light sheen, cyber corner brackets, and neon aura.
 * 4. Floating holographic 3D chips with deep Z-axis translation.
 * 5. Seamless toggle to the interactive developer terminal.
 */
export default function HeroVisual({ terminalContent }) {
  const [activeTab, setActiveTab] = useState('portrait'); // 'portrait' | 'terminal'
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });

  // Handle interactive 3D mouse parallax
  const handleMouseMove = (e) => {
    if (!cardRef.current || activeTab !== 'portrait') return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalized tilt (-12 to +12 degrees)
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  return (
    <div className="hero-3d-stage">
      {/* Visual Mode Switcher */}
      <div className="hero-stage-tabs" role="tablist" aria-label="Hero visual display options">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'portrait'}
          className={`stage-tab ${activeTab === 'portrait' ? 'active' : ''}`}
          onClick={() => toggleTab('portrait')}
        >
          <span className="stage-tab-icon">✦</span>
          <span>3D Portrait</span>
          <span className="stage-tab-glow"></span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'terminal'}
          className={`stage-tab ${activeTab === 'terminal' ? 'active' : ''}`}
          onClick={() => toggleTab('terminal')}
        >
          <span className="stage-tab-icon">❯_</span>
          <span>Terminal</span>
          <span className="stage-tab-glow"></span>
        </button>
      </div>

      {/* Main 3D Display Canvas */}
      <div className="hero-stage-viewport">
        {activeTab === 'portrait' ? (
          <div
            className="hero-portrait-stage"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* ── KINETIC 3D MARQUEE BEHIND PHOTO (Spans Full Screen Width) ── */}
            <div className="marquee-behind-container" aria-hidden="true">
              {/* Row 1: Leftward drift */}
              <div className="marquee-row marquee-left">
                <div className="marquee-track">
                  <span>HARI KIRAN VENTRAPRAGADA</span>
                  <span className="marquee-star">✦</span>
                  <span>AI SYSTEMS ENGINEER</span>
                  <span className="marquee-star">✦</span>
                  <span>SOFTWARE DEVELOPER</span>
                  <span className="marquee-star">✦</span>
                  <span>FULL STACK ARCHITECT</span>
                  <span className="marquee-star">✦</span>
                  <span>LANGGRAPH &amp; FASTAPI</span>
                  <span className="marquee-star">✦</span>
                  <span>HARI KIRAN VENTRAPRAGADA</span>
                  <span className="marquee-star">✦</span>
                  <span>AI SYSTEMS ENGINEER</span>
                  <span className="marquee-star">✦</span>
                  <span>SOFTWARE DEVELOPER</span>
                  <span className="marquee-star">✦</span>
                  <span>FULL STACK ARCHITECT</span>
                  <span className="marquee-star">✦</span>
                  <span>LANGGRAPH &amp; FASTAPI</span>
                  <span className="marquee-star">✦</span>
                </div>
              </div>

              {/* Row 2: Rightward drift (to-and-fro counter movement) */}
              <div className="marquee-row marquee-right">
                <div className="marquee-track">
                  <span>FASTAPI</span>
                  <span className="marquee-dot">•</span>
                  <span>REACT</span>
                  <span className="marquee-dot">•</span>
                  <span>WEBSOCKETS</span>
                  <span className="marquee-dot">•</span>
                  <span>LANGGRAPH</span>
                  <span className="marquee-dot">•</span>
                  <span>DOCKER</span>
                  <span className="marquee-dot">•</span>
                  <span>AWS</span>
                  <span className="marquee-dot">•</span>
                  <span>MICROSERVICES</span>
                  <span className="marquee-dot">•</span>
                  <span>NEO4J</span>
                  <span className="marquee-dot">•</span>
                  <span>PYTHON</span>
                  <span className="marquee-dot">•</span>
                  <span>FASTAPI</span>
                  <span className="marquee-dot">•</span>
                  <span>REACT</span>
                  <span className="marquee-dot">•</span>
                  <span>WEBSOCKETS</span>
                  <span className="marquee-dot">•</span>
                  <span>LANGGRAPH</span>
                  <span className="marquee-dot">•</span>
                  <span>DOCKER</span>
                  <span className="marquee-dot">•</span>
                </div>
              </div>

              {/* Row 3: Leftward drift */}
              <div className="marquee-row marquee-left marquee-row-3">
                <div className="marquee-track">
                  <span>1 YR OMNIQAI</span>
                  <span className="marquee-star">✦</span>
                  <span>MVGR COLLEGE</span>
                  <span className="marquee-star">✦</span>
                  <span>VIZIANAGARAM</span>
                  <span className="marquee-star">✦</span>
                  <span>AVAILABLE FOR ROLES</span>
                  <span className="marquee-star">✦</span>
                  <span>1 YR OMNIQAI</span>
                  <span className="marquee-star">✦</span>
                  <span>MVGR COLLEGE</span>
                  <span className="marquee-star">✦</span>
                  <span>VIZIANAGARAM</span>
                  <span className="marquee-star">✦</span>
                  <span>AVAILABLE FOR ROLES</span>
                  <span className="marquee-star">✦</span>
                </div>
              </div>
            </div>

            {/* ── FOREGROUND 3D PORTRAIT CARD ── */}
            <div
              ref={cardRef}
              className={`portrait-card-3d ${tilt.isHovered ? 'hovered' : 'floating'}`}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.isHovered ? 1.03 : 1}, ${tilt.isHovered ? 1.03 : 1}, 1)`,
              }}
            >
              {/* Pulsing Backlight Glow */}
              <div className="portrait-backdrop-glow"></div>

              {/* Frame Chrome / Cyber Accents */}
              <div className="portrait-frame-corners">
                <span className="corner c-tl"></span>
                <span className="corner c-tr"></span>
                <span className="corner c-bl"></span>
                <span className="corner c-br"></span>
              </div>

              {/* Image Container with Specular Light Glare */}
              <div className="portrait-image-wrapper">
                <img
                  src="/avatar.png"
                  alt="Hari Kiran Ventrapragada"
                  className="portrait-photo"
                  width="360"
                  height="360"
                  loading="eager"
                />
                {/* Moving Glare sheen on mousemove */}
                <div
                  className="portrait-glare"
                  style={{
                    background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.22) 0%, rgba(0,217,179,0.08) 45%, transparent 70%)`,
                  }}
                ></div>
                <div className="portrait-bottom-gradient"></div>
              </div>

              {/* Holographic Floating 3D Chips */}
              <div className="portrait-badge badge-top-left">
                <span className="badge-pulse-dot"></span>
                <span>Open for Work</span>
              </div>

              <div className="portrait-badge badge-bottom-right">
                <span className="badge-icon">⚡</span>
                <span>OmniqAI Alum</span>
              </div>

              <div className="portrait-badge badge-bottom-tag">
                <span className="badge-icon">🤖</span>
                <span>AI Systems · WebSockets</span>
              </div>

              <div className="portrait-location-tag">
                <span>📍 Vizianagaram · AP, India</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="hero-terminal-container">
            {terminalContent}
          </div>
        )}
      </div>

      <div className="hero-stage-footer-caption">
        <span className="caption-dot"></span>
        <span>Interactive 3D Stage · Hover to tilt portrait · Text streams in 3D depth</span>
      </div>
    </div>
  );
}
