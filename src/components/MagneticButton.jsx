import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
  dataCursor,
  ariaLabel,
  ...props
}) {
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Only enable magnetic pull on mouse devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const el = buttonRef.current;
    const content = contentRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.45,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      if (content) {
        gsap.to(content, {
          x: x * (strength * 0.5),
          y: y * (strength * 0.5),
          duration: 0.45,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: 'elastic.out(1, 0.35)',
        overwrite: 'auto',
      });

      if (content) {
        gsap.to(content, {
          x: 0,
          y: 0,
          duration: 0.9,
          ease: 'elastic.out(1, 0.35)',
          overwrite: 'auto',
        });
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      aria-label={ariaLabel}
      data-cursor={dataCursor}
      className={`inline-block relative cursor-pointer select-none ${className}`}
      {...props}
    >
      <span ref={contentRef} className="inline-flex items-center justify-center w-full h-full pointer-events-none">
        {children}
      </span>
    </Tag>
  );
}

export default MagneticButton;
