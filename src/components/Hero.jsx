import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from './MagneticButton';
import { AnimatedCounter } from './AnimatedCounter';
import { getWhatsAppLink, stats } from '../data/siteData';

export function Hero({ onNavigate }) {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const guaranteesRef = useRef(null);
  const statsRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Floating ambient lighting
      if (orb1Ref.current && orb2Ref.current) {
        gsap.to(orb1Ref.current, {
          x: 40,
          y: -30,
          scale: 1.15,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
        gsap.to(orb2Ref.current, {
          x: -50,
          y: 40,
          scale: 1.2,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Smooth staged entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.from(badgeRef.current, { opacity: 0, y: -16, duration: 0.7, delay: 0.1 });
      }
      if (titleRef.current) {
        tl.from(titleRef.current, { opacity: 0, y: 35, duration: 0.9 }, '-=0.4');
      }
      if (descRef.current) {
        tl.from(descRef.current, { opacity: 0, y: 20, duration: 0.7 }, '-=0.5');
      }
      if (ctaRef.current) {
        tl.from(ctaRef.current, { opacity: 0, y: 15, duration: 0.6 }, '-=0.4');
      }
      if (guaranteesRef.current) {
        tl.from(guaranteesRef.current, { opacity: 0, y: 10, duration: 0.5 }, '-=0.3');
      }
      if (statsRef.current) {
        tl.from(statsRef.current, { opacity: 0, y: 25, duration: 0.7 }, '-=0.3');
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 sm:pt-40 pb-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background Mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={orb1Ref}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-purple-600/20 blur-[160px]"
        />
        <div
          ref={orb2Ref}
          className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-fuchsia-600/15 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,7,12,0.92)_100%)]" />

        {/* Subtle Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* ======================================================== */}
        {/* CENTERED HERO HEADLINE & ACTIONS                         */}
        {/* ======================================================== */}
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          {/* Tagline Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.2)] mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-300 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-purple-200">
              Performance & Escala Digital
            </span>
          </div>

          {/* Split Headline with Syne Typography */}
          <div ref={titleRef} className="font-display font-extrabold tracking-tight">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-white">
              Transformamos tráfego em{' '}
              <span className="text-gradient-purple inline-block">faturamento real</span> e previsível.
            </h1>
          </div>

          {/* Subtitle Description */}
          <p
            ref={descRef}
            className="mt-6 text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal"
          >
            Não vendemos apenas cliques sem intenção. Desenhamos e executamos a esteira estratégica completa:
            <strong className="text-white font-medium"> Google Ads, Meta Ads, TikTok Ads e Páginas de Alta Conversão</strong> com foco obsessivo no seu retorno sobre investimento.
          </p>

          {/* Magnetic CTAs */}
          <div
            ref={ctaRef}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              strength={0.3}
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              dataCursor="Consultoria"
              className="btn-hero px-9 py-4 text-base w-full sm:w-auto"
            >
              <span>Agendar Consultoria Gratuita</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              strength={0.25}
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('/', 'servicos');
              }}
              dataCursor="Explorar"
              className="btn-outline-hero px-8 py-4 text-base w-full sm:w-auto"
            >
              <span>Explorar Serviços</span>
            </MagneticButton>
          </div>

          {/* Key Quality Assurances */}
          <div
            ref={guaranteesRef}
            className="mt-9 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-purple-400" />
              <span>Estratégia 100% Personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span>Sem contratos de fidelidade forçada</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-purple-400" />
              <span>Otimização diária de campanhas</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM MACRO METRICS BAR (4 stats)                       */}
        {/* ======================================================== */}
        <div
          ref={statsRef}
          className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full max-w-5xl"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1800}
                />
              </span>
              <span className="mt-2 text-xs sm:text-sm text-zinc-400 font-medium max-w-[180px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
