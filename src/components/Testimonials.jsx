import React from 'react';
import { Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { testimonials, getWhatsAppLink } from '../data/siteData';

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28 border-t border-black/10 dark:border-white/10 bg-[#f8f6fc] dark:bg-[#08070d] overflow-hidden transition-colors duration-300">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-600 dark:text-purple-400">
            Casos Reais & Depoimentos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Resultados que falam por{' '}
            <span className="text-gradient-purple">si mesmos</span>
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            A satisfação dos nossos clientes é medida pelo faturamento que entra nas contas deles todos os meses.
          </p>
        </Reveal>

        {/* 3D Testimonials Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 100}>
              <SpotlightCard
                tiltStrength={10}
                dataCursor="Depoimento"
                className="h-full flex flex-col justify-between border-black/10 dark:border-white/10 hover:border-purple-500/50 group"
              >
                <div>
                  {/* Rating Stars & Verified Metric Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 dark:bg-purple-500/15 px-3 py-1 text-xs font-bold text-purple-700 dark:text-purple-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                      {item.metric}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed italic relative">
                    <Quote className="h-5 w-5 inline text-purple-600/40 dark:text-purple-400/50 mr-2 -mt-1" />
                    "{item.text}"
                  </p>
                </div>

                {/* Author Profile */}
                <div className="mt-8 pt-5 border-t border-black/5 dark:border-white/10 flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-md">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      {item.role} • <span className="text-purple-600 dark:text-purple-300">{item.company}</span>
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Callout CTA */}
        <Reveal className="mt-16 text-center">
          <MagneticButton
            strength={0.3}
            href={getWhatsAppLink('Olá, vim pelo site da Orium Digital e gostaria de agendar uma consultoria gratuita para ser o próximo case de sucesso!')}
            target="_blank"
            rel="noopener noreferrer"
            dataCursor="Agendar"
            className="btn-hero px-9 py-4 text-sm sm:text-base font-bold shadow-glow"
          >
            <span>Quero ser o próximo case de sucesso</span>
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;
