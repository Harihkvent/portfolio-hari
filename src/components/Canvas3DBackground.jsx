import React, { useEffect, useRef } from 'react';

/**
 * Canvas3DBackground - Interactive 3D particle constellation.
 * Reacts dynamically to scroll velocity ("to and fro" motion)
 * and mouse movement with smooth 3D perspective projection across wide displays.
 */
export default function Canvas3DBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D Particles setup - scales dynamically to wide screens
    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 14000), 95);
    const particles = [];
    const focalLength = 400;

    let targetCameraX = 0;
    let targetCameraY = 0;
    let currentCameraX = 0;
    let currentCameraY = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();

    const colors = [
      'rgba(0, 217, 179, ',  // accent cyan
      'rgba(167, 139, 250, ', // purple
      'rgba(88, 166, 255, ',  // blue
    ];

    const xBound = Math.max(width * 0.85, 950);
    const yBound = Math.max(height * 0.85, 950);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * (xBound * 2),
        y: (Math.random() - 0.5) * (yBound * 2),
        z: Math.random() * 800 - 200,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.35,
        baseSize: Math.random() * 2 + 1.2,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const normX = (e.clientX / width - 0.5) * 2;
      const normY = (e.clientY / height - 0.5) * 2;
      targetCameraX = normX * 90;
      targetCameraY = normY * 70;
    };

    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const dt = Math.max(now - lastScrollTime, 8);
      const dy = currentScrollY - lastScrollY;

      const instantVelocity = (dy / dt) * 16;
      scrollVelocity += (instantVelocity - scrollVelocity) * 0.38;
      if (Math.abs(scrollVelocity) > 28) {
        scrollVelocity = Math.sign(scrollVelocity) * 28;
      }

      lastScrollY = currentScrollY;
      lastScrollTime = now;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      currentCameraX += (targetCameraX - currentCameraX) * 0.05;
      currentCameraY += (targetCameraY - currentCameraY) * 0.05;

      scrollVelocity *= 0.92;

      const cx = width / 2;
      const cy = height / 2;

      const currentXBound = Math.max(width * 0.85, 950);
      const currentYBound = Math.max(height * 0.85, 950);

      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles + react to scroll velocity
        p.x += p.vx;
        p.y += p.vy - scrollVelocity * 0.48;
        p.z += p.vz - scrollVelocity * 0.75;

        // Wrap boundaries in 3D box
        if (p.x < -currentXBound) p.x = currentXBound;
        if (p.x > currentXBound) p.x = -currentXBound;
        if (p.y < -currentYBound) p.y = currentYBound;
        if (p.y > currentYBound) p.y = -currentYBound;
        if (p.z < -200) p.z = 600;
        if (p.z > 600) p.z = -200;

        const rx = p.x - currentCameraX;
        const ry = p.y - currentCameraY;
        const rz = p.z + focalLength;

        if (rz <= 10) continue;

        const scale = focalLength / rz;
        const screenX = cx + rx * scale;
        const screenY = cy + ry * scale;
        const size = p.baseSize * scale;
        const alpha = Math.min(Math.max((600 - p.z) / 800, 0.1), 0.8);

        projected.push({ x: screenX, y: screenY, z: p.z, alpha, colorBase: p.colorBase, size });

        // Draw particle
        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(size, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${alpha})`;
        ctx.fill();

        // Subtle glow halo for closer particles
        if (scale > 0.85) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.colorBase}${alpha * 0.16})`;
          ctx.fill();
        }
      }

      // Draw subtle connecting lines between nearby 3D points
      const maxDistance = 95;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.14 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 217, 179, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-3d-bg"
      aria-hidden="true"
    />
  );
}
