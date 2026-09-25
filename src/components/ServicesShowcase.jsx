import React, { useState } from 'react';
import {
  Target,
  Search,
  Megaphone,
  Music2,
  Users,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Palette,
  Bot,
  Clapperboard,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import {
  services,
  serviceCategories,
  getServiceWhatsAppLink,
  getWhatsAppLink,
} from '../data/siteData';

const iconMap = {
  Target,
  Search,
  Megaphone,
  Music2,
  Users,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Palette,
  Bot,
  Clapperboard,
};

export function ServicesShowcase({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="relative py-28 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-purple-700/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-600 dark:text-purple-400">
              Soluções Especializadas
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Estratégias construídas para{' '}
              <span className="text-gradient-purple">gerar resultado real</span>
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Cada serviço da Orium Digital é projetado para integrar a esteira de crescimento da sua empresa,
              eliminando gargalos e multiplicando a captação de clientes.
            </p>
          </Reveal>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  data-cursor="Filtrar"
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] scale-105'
                      : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-black/10 dark:border-white/10 hover:border-purple-500/40 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Parallax Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.icon] || Sparkles;

            return (
              <Reveal key={service.id} delay={idx * 70}>
                <SpotlightCard
                  tiltStrength={12}
                  dataCursor="Ver Detalhes"
                  onClick={() => {
                    if (onSelectService) onSelectService(service);
                  }}
                  className="h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon + Category Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-600 dark:text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/25 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-purple-700 dark:text-purple-300/80 font-bold px-2.5 py-1 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200/60 dark:border-white/10">
                        {service.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {service.desc}
                    </p>

                    {/* Deliverables Checklist */}
                    {service.deliverables && (
                      <ul className="mt-6 space-y-2.5 border-t border-black/5 dark:border-white/10 pt-5">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-8 pt-5 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-white flex items-center gap-1.5 transition-colors">
                      Explorar estratégia
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>

                    <a
                      href={getServiceWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="WhatsApp"
                      className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-700 dark:text-white/80 bg-black/[0.04] dark:bg-white/5 hover:bg-purple-600/15 dark:hover:bg-purple-500/20 hover:text-purple-700 dark:hover:text-purple-200 border border-black/10 dark:border-white/10 transition-colors"
                    >
                      Consultar
                    </a>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Global Consultation Callout */}
        <div className="mt-16 text-center">
          <Reveal>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-3xl glass-panel border-purple-500/30 max-w-2xl mx-auto shadow-2xl">
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-zinc-950 dark:text-white">Dúvida sobre qual o melhor canal para sua empresa?</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">Fazemos uma análise gratuita do seu negócio no WhatsApp.</p>
              </div>
              <MagneticButton
                strength={0.3}
                href={getWhatsAppLink('Olá! Gostaria de uma análise para saber qual serviço é mais recomendado para o meu negócio.')}
                target="_blank"
                rel="noopener noreferrer"
                dataCursor="Conversar"
                className="btn-hero px-6 py-2.5 text-xs sm:text-sm whitespace-nowrap shrink-0"
              >
                Falar com Especialista
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ServicesShowcase;
