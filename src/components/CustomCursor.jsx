import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable on devices with fine pointer and no reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Center origin
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dx = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    let hasMoved = false;

    const handlePointerMove = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.4 });
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    const handlePointerLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    const handlePointerEnterWindow = () => {
      if (hasMoved) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
    };

    // Event delegation for hover states: smoothly expand ring on interactive buttons without any text
    const handlePointerOver = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;

      const interactive = target.closest('a, button, input, select, textarea, [data-interactive], [data-cursor], [role="button"]');

      if (interactive) {
        gsap.to(ring, {
          scale: 1.6,
          borderColor: 'rgba(216, 180, 254, 0.85)',
          backgroundColor: 'rgba(168, 85, 247, 0.12)',
          boxShadow: '0 0 25px rgba(168, 85, 247, 0.35)',
          duration: 0.25,
          ease: 'power2.out',
        });
        gsap.to(dot, { scale: 0.3, duration: 0.15 });
      } else {
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(192, 132, 252, 0.45)',
          backgroundColor: 'rgba(168, 85, 247, 0.05)',
          boxShadow: '0 0 20px -3px rgba(168, 85, 247, 0.2)',
          duration: 0.25,
          ease: 'power2.out',
        });
        gsap.to(dot, { scale: 1, duration: 0.15 });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerover', handlePointerOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeaveWindow);
    document.documentElement.addEventListener('mouseenter', handlePointerEnterWindow);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeaveWindow);
      document.documentElement.removeEventListener('mouseenter', handlePointerEnterWindow);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden="true" />
    </>
  );
}

export default CustomCursor;
