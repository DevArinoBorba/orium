import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, complete immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHidden(true);
      if (onComplete) onComplete();
      return;
    }

    const container = containerRef.current;
    const countEl = countRef.current;
    const bar = barRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setHidden(true);
        if (onComplete) onComplete();
      },
    });

    // Animate title and count
    tl.fromTo(
      [title, subtitle],
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    )
    .to(
      counter,
      {
        val: 100,
        duration: 1.6,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (countEl) countEl.textContent = `${Math.floor(counter.val)}%`;
        },
      },
      '-=0.4'
    )
    .to(
      bar,
      {
        scaleX: 1,
        duration: 1.6,
        ease: 'power2.inOut',
      },
      '<'
    )
    // Exit curtain animation
    .to([title, subtitle, countEl], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in',
    })
    .to(container, {
      yPercent: -100,
      duration: 0.9,
      ease: 'expo.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#07060a] p-8 md:p-14 text-white overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-purple-300/60 font-semibold">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-ping" />
          Awwwards Standard Digital Agency
        </span>
        <span className="hidden sm:inline">Experiência Imersiva</span>
      </div>

      {/* Center Brand */}
      <div className="flex flex-col items-center justify-center my-auto text-center px-4">
        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-gradient-purple"
        >
          ORIUM DIGITAL
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-zinc-400 font-medium max-w-lg"
        >
          Estratégia • Tráfego Pago • Performance • Escala
        </p>
      </div>

      {/* Bottom Progress */}
      <div className="relative flex items-end justify-between pt-6 border-t border-white/10">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 block mb-1">
            Status do Sistema
          </span>
          <span className="text-xs text-purple-300 font-medium">Carregando ecossistema de alta conversão...</span>
        </div>
        <div
          ref={countRef}
          className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white tabular-nums"
        >
          0%
        </div>

        {/* Progress Line */}
        <div
          ref={barRef}
          className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  );
}

export default Preloader;
