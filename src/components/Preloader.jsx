import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const wordRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, finish immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHidden(true);
      if (onComplete) onComplete();
      return;
    }

    const container = containerRef.current;
    const countEl = countRef.current;
    const bar = barRef.current;
    const wordEl = wordRef.current;

    if (!container || !countEl || !bar) return;

    // Safety timeout in case fonts or resources delay
    const safetyTimer = setTimeout(() => {
      if (container) {
        gsap.to(container, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setHidden(true);
            if (onComplete) onComplete();
          },
        });
      }
    }, 4500);

    const counter = { val: 0 };
    const charElements = wordEl ? wordEl.querySelectorAll('.pre-char') : [];

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(safetyTimer);
        setHidden(true);
        if (onComplete) onComplete();
      },
    });

    // Initial state
    gsap.set(bar, { scaleX: 0 });

    // 1. Reveal letters from bottom mask (similar to Thais Borges SplitText)
    if (charElements.length > 0) {
      tl.from(charElements, {
        yPercent: 120,
        stagger: 0.025,
        duration: 1.1,
        ease: 'expo.out',
      });
    }

    // 2. Count 0 -> 100 and scale bar across bottom
    tl.to(
      counter,
      {
        val: 100,
        duration: 1.9,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (countEl) countEl.textContent = Math.round(counter.val);
        },
      },
      charElements.length > 0 ? 0.2 : 0
    )
    .to(
      bar,
      {
        scaleX: 1,
        duration: 1.9,
        ease: 'power2.inOut',
      },
      charElements.length > 0 ? 0.2 : 0
    )
    // 3. Luxurious curtain slide up revealing the hero section
    .to(container, {
      yPercent: -100,
      duration: 1.1,
      ease: 'power4.inOut',
    }, '+=0.15');

    return () => {
      clearTimeout(safetyTimer);
      tl.kill();
    };
  }, [onComplete]);

  if (hidden) return null;

  const phraseWords = [
    { text: 'Escalando', highlight: false },
    { text: 'negócios', highlight: false },
    { text: 'com', highlight: false },
    { text: 'previsibilidade', highlight: true, italic: true },
  ];

  return (
    <div
      ref={containerRef}
      id="preloader"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#08070c] p-6 sm:p-10 text-white overflow-hidden"
      aria-hidden="true"
      style={{ willChange: 'transform' }}
    >
      {/* Top Bar: Brand & Subtitle */}
      <div className="flex items-center justify-between text-zinc-400 text-xs sm:text-sm font-medium tracking-wide">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]" />
          <span className="font-display font-bold tracking-wider text-white text-sm sm:text-base">
            ORIUM DIGITAL
          </span>
        </div>
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400/80 font-semibold hidden xs:inline">
          Estratégia & Performance
        </span>
      </div>

      {/* Center Statement (Awwwards Mask Stagger) */}
      <div className="my-auto py-8">
        <p
          ref={wordRef}
          className="font-display text-center text-[clamp(2.2rem,7.5vw,6.5rem)] font-light leading-[1.05] tracking-tight text-white select-none"
        >
          {phraseWords.map((wordObj, wIdx) => (
            <span key={wIdx} className="inline-block whitespace-nowrap mx-1.5 sm:mx-3">
              {wordObj.text.split('').map((char, cIdx) => (
                <span key={cIdx} className="inline-block overflow-hidden align-top">
                  <span
                    className={`pre-char inline-block ${
                      wordObj.highlight
                        ? 'italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-300 font-normal pr-0.5'
                        : 'text-zinc-100'
                    }`}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>

      {/* Bottom Row: Colossal Counter and Status Label */}
      <div className="relative flex items-end justify-between pb-2 sm:pb-3">
        <div className="flex items-baseline select-none">
          <span
            ref={countRef}
            className="pre-count font-display text-[clamp(4.5rem,18vw,14rem)] font-light leading-[0.75] text-white tracking-tighter tabular-nums"
          >
            0
          </span>
          <span className="text-purple-400 font-display text-2xl sm:text-4xl font-light ml-1 select-none">
            %
          </span>
        </div>
        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-zinc-400 font-medium pb-2 sm:pb-4 select-none">
          carregando ecossistema
        </span>
      </div>

      {/* Bottom Edge Animated Progress Bar */}
      <div
        ref={barRef}
        className="pre-bar absolute bottom-0 left-0 h-1 sm:h-1.5 w-full origin-left bg-gradient-to-r from-purple-600 via-fuchsia-400 to-indigo-400 shadow-[0_0_20px_rgba(168,85,247,0.7)]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

export default Preloader;
