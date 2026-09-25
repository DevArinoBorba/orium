import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(168, 85, 247, 0.22)',
  onClick,
  tiltStrength = 12,
  dataCursor,
  ...props
}) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check for fine pointer and no reduced motion
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = cardRef.current;
    const glow = glowRef.current;
    const content = contentRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-tiltStrength to +tiltStrength)
      const rotateX = -((y - centerY) / centerY) * tiltStrength;
      const rotateY = ((x - centerX) / centerX) * tiltStrength;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.4,
        overwrite: 'auto',
      });

      if (content) {
        gsap.to(content, {
          z: 28,
          ease: 'power2.out',
          duration: 0.4,
          overwrite: 'auto',
        });
      }

      if (glow) {
        gsap.to(glow, {
          opacity: 1,
          duration: 0.25,
          overwrite: 'auto',
        });
        glow.style.background = `radial-gradient(450px circle at ${x}px ${y}px, ${spotlightColor}, transparent 70%)`;
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out',
        duration: 0.75,
        overwrite: 'auto',
      });

      if (content) {
        gsap.to(content, {
          z: 0,
          ease: 'power3.out',
          duration: 0.75,
          overwrite: 'auto',
        });
      }

      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.5,
          overwrite: 'auto',
        });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [spotlightColor, tiltStrength]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      data-cursor={dataCursor}
      className={`glass-card-interactive rounded-3xl p-6 sm:p-8 cursor-pointer select-none ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {/* 3D Spotlight Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300"
        style={{ willChange: 'background, opacity' }}
      />
      {/* Content wrapper with depth */}
      <div ref={contentRef} className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}

export default SpotlightCard;
