import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 28,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: duration,
              delay: delay / 1000,
              ease: 'power3.out',
              clearProps: 'transform',
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.02, rootMargin: '80px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, y]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: `translateY(${y}px)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
