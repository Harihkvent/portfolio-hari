import { useEffect } from 'react';

/**
 * useScroll3D - Tracks scroll velocity and physics to dynamically inject
 * 3D tilt, sway, and perspective variables onto the document root.
 * Gives the entire website an organic, responsive 3D depth feel as the user scrolls.
 */
export function useScroll3D() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let currentVelocity = 0;
    let currentTilt = 0;
    let currentSway = 0;
    let animationFrameId;

    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastTime, 10);
      const dy = window.scrollY - lastScrollY;

      // Raw velocity normalized (positive = scrolling down, negative = scrolling up)
      const rawVelocity = dy / dt;
      currentVelocity += (rawVelocity - currentVelocity) * 0.4;

      lastScrollY = window.scrollY;
      lastTime = now;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const updatePhysics = () => {
      // Natural spring decay
      currentVelocity *= 0.88;

      // Target tilt: scrolling down pitches slightly forward (-2 to -4 deg), scrolling up pitches back (+2 to +4 deg)
      const targetTilt = Math.max(Math.min(-currentVelocity * 3.5, 4.5), -4.5);
      const targetSway = Math.max(Math.min(currentVelocity * 1.5, 2.5), -2.5);

      // Smooth interpolation (lerp)
      currentTilt += (targetTilt - currentTilt) * 0.15;
      currentSway += (targetSway - currentSway) * 0.15;

      // If tilt is negligible, zero it out to avoid unnecessary repaints
      const effectiveTilt = Math.abs(currentTilt) < 0.05 ? 0 : currentTilt;
      const effectiveSway = Math.abs(currentSway) < 0.03 ? 0 : currentSway;

      document.documentElement.style.setProperty('--scroll-tilt-x', `${effectiveTilt.toFixed(2)}deg`);
      document.documentElement.style.setProperty('--scroll-sway', `${effectiveSway.toFixed(2)}deg`);

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    updatePhysics();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
      document.documentElement.style.removeProperty('--scroll-tilt-x');
      document.documentElement.style.removeProperty('--scroll-sway');
    };
  }, []);
}
