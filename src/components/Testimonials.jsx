import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';
import { testimonials, getWhatsAppLink } from '../data/siteData';

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative border-t border-border py-20 sm:py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(40% 40% at 20% 50%, color-mix(in oklab, var(--primary-deep) 25%, transparent), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
            Depoimentos Reais
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            O que dizem os parceiros da{' '}
            <span className="text-gradient-purple">Orium Digital</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A satisfação e o crescimento dos nossos clientes são o nosso maior
            compromisso e cartão de visitas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 100}>
              <SpotlightCard className="h-full flex flex-col justify-between hover:border-primary/50">
                <div>
                  {/* Rating Stars & Metric */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-accent/40 px-3 py-1 text-xs font-semibold text-primary-glow">
                      <CheckCircle2 className="h-3 w-3" />
                      {item.metric}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="mt-5 text-sm text-foreground/90 leading-relaxed italic relative">
                    <Quote className="h-4 w-4 inline text-primary-glow mr-1.5 opacity-60" />
                    "{item.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary-glow font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={getWhatsAppLink('Olá, vim pelo site da Orium Digital e gostaria de agendar uma consultoria gratuita para a minha empresa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero px-8 py-4 text-sm sm:text-base"
          >
            Quero ser o próximo case de sucesso
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;
