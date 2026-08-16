import React from 'react';
import { Target, Palette, Megaphone, TrendingUp, CheckCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';
import { methodologySteps } from '../data/siteData';

const iconMap = {
  Target,
  Palette,
  Megaphone,
  TrendingUp,
};

export function Methodology() {
  return (
    <section id="metodologia" className="relative border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
            Processo Comprovado
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Como a Orium Digital gera{' '}
            <span className="text-gradient-purple">resultados previsíveis</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma metodologia em 4 passos estruturada para transformar desconhecidos em
            clientes fiéis com dados, criatividade e escala.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodologySteps.map((step, idx) => {
            const IconComp = iconMap[step.icon] || Target;
            return (
              <Reveal key={step.step} delay={idx * 80}>
                <SpotlightCard className="h-full flex flex-col justify-between hover:border-primary/50">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-extrabold text-primary-glow/80">
                        {step.step}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary-glow">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-medium text-primary-glow">
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>Etapa Estratégica</span>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Methodology;
