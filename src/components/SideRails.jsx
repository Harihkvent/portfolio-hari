import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

/**
 * SideRails - Ambient technical telemetry HUD on the left and interactive
 * social + scroll progress HUD on the right.
 * Occupies the wide screen flanks on monitors (>= 1200px) so the screen feels
 * intentional, expansive, and high-tech rather than empty on the edges.
 */
export default function SideRails() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
      setScrollProgress(Math.round(progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Left Ambient Telemetry Rail ── */}
      <aside className="side-rail side-rail-left" aria-hidden="true">
        <div className="rail-content">
          <div className="rail-status">
            <span className="rail-dot"></span>
            <span className="rail-status-text">SYS.ONLINE</span>
          </div>
          <div className="rail-text-vertical">
            <span>HARI KIRAN VENTRAPRAGADA</span>
            <span className="rail-divider">/</span>
            <span>AI &amp; SDE</span>
            <span className="rail-divider">/</span>
            <span>17.96° N 83.42° E</span>
          </div>
          <div className="rail-line">
            <div className="rail-line-glow"></div>
          </div>
        </div>
      </aside>

      {/* ── Right Interactive HUD Rail ── */}
      <aside className="side-rail side-rail-right" aria-label="Social links and scroll progress">
        <div className="rail-content">
          {/* Scroll Progress Meter */}
          <div className="rail-progress-meter">
            <span className="progress-number">{scrollProgress}%</span>
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ height: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Social Links */}
          <ul className="rail-socials">
            <li>
              <a
                href="https://github.com/Harihkvent"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="rail-social-link"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hari-kiran-ventrapragada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="rail-social-link"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/harikiran24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                className="rail-social-link"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="mailto:harikiranventrapragada@gmail.com"
                aria-label="Send Email"
                className="rail-social-link"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>

          <div className="rail-line">
            <div className="rail-line-glow"></div>
          </div>
        </div>
      </aside>
    </>
  );
}
