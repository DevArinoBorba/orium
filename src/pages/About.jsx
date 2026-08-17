import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { aboutParagraphs, getWhatsAppLink } from '../data/siteData';

export function About() {
  return (
    <main className="overflow-x-clip pt-16">
      <section className="relative isolate">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(55% 45% at 50% 0%, color-mix(in oklab, var(--primary-deep) 30%, transparent), transparent 70%)',
          }}
        />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
              Nossa história
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Sobre a <span className="text-gradient-purple">Orium Digital</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Estratégia, tráfego, conversão e escala para marcas que querem
              ocupar um lugar de destaque no digital.
            </p>
          </Reveal>

          {/* Main Content Grid */}
          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* CEO Image Card (Sticky on desktop) */}
            <Reveal className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full"
                style={{ background: 'var(--gradient-glow)' }}
              />
              <picture>
                <source type="image/webp" srcSet="/assets/ceo-2.webp" />
                <img
                  src="/assets/ceo-2.png"
                  alt="Moniqui Borges, fundadora da Orium Digital"
                  width="450"
                  height="550"
                  loading="lazy"
                  decoding="async"
                  className="w-full drop-shadow-[0_30px_60px_rgba(122,31,255,0.3)] transition-transform hover:scale-105 duration-500"
                />
              </picture>
              <div className="glass-panel mt-6 rounded-2xl p-5 text-center">
                <p className="font-display font-semibold text-lg text-foreground">
                  Moniqui Borges
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fundadora e estrategista de marketing digital
                </p>
              </div>
            </Reveal>

            {/* Story Paragraphs */}
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph, idx) => (
                <Reveal key={idx} delay={Math.min(idx * 30, 120)}>
                  <p className="leading-relaxed text-muted-foreground text-base sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action */}
          <Reveal className="mt-20 text-center">
            <p className="font-display text-2xl font-bold text-foreground">
              Orium Digital
            </p>
            <p className="mt-2 tracking-widest text-primary-glow font-medium">
              Estratégia • Tráfego • Conversão • Escala
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero mt-8 px-8 py-4 text-sm sm:text-base"
            >
              Agendar consultoria gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default About;
