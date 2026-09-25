import React, { useEffect, useRef } from 'react';
import { Target, Palette, Megaphone, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';
import { methodologySteps } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Target,
  Palette,
  Megaphone,
  TrendingUp,
};

export function Methodology() {
  const lineRef = useRef(null);
  const stepsContainerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Animate progress connector line on scroll
      if (lineRef.current && stepsContainerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: 'top 75%',
              end: 'bottom 70%',
              scrub: 1,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="metodologia" className="relative py-28 border-t border-white/10 bg-[#09080e] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-400">
            Processo Validado
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Como transformamos cliques em{' '}
            <span className="text-gradient-purple">lucro previsível</span>
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Uma esteira de 4 fases contínuas orientada a métricas de conversão reais:
            planejamento, testes agressivos e otimização cirúrgica.
          </p>
        </Reveal>

        {/* Steps Grid with Progress Line */}
        <div ref={stepsContainerRef} className="relative mt-16">
          {/* Connector Line behind cards (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-white/10 -z-0">
            <div
              ref={lineRef}
              className="h-full w-full origin-left bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {methodologySteps.map((step, idx) => {
              const IconComp = iconMap[step.icon] || Target;
              return (
                <Reveal key={step.step} delay={idx * 100}>
                  <SpotlightCard
                    tiltStrength={10}
                    dataCursor={`Passo ${step.step}`}
                    className="h-full flex flex-col justify-between group border-white/10 hover:border-purple-500/50"
                  >
                    <div>
                      {/* Step Number + Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-display text-4xl font-black text-purple-400/90 group-hover:text-purple-300 transition-colors">
                          {step.step}
                        </span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                          <IconComp className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-display text-lg font-bold text-white leading-snug group-hover:text-purple-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    {/* Step Milestone */}
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-300 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-purple-400" />
                        <span>Fase {idx + 1} de 4</span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
