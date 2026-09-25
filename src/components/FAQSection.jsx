import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { faqItems, getWhatsAppLink } from '../data/siteData';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-28 border-t border-black/10 dark:border-white/10 bg-[#faf8fd] dark:bg-[#07060a] overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300">
            <HelpCircle className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            Perguntas Frequentes
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Tire todas as suas <span className="text-gradient-purple">dúvidas</span>
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Transparência e clareza desde o primeiro contato. Entenda como trabalhamos para acelerar o seu negócio.
          </p>
        </Reveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 50}>
                <div
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-purple-500/40 bg-purple-50/60 dark:bg-gradient-to-br dark:from-purple-950/30 dark:to-[#0e0d16] shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] dark:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.25)]'
                      : 'border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] hover:border-black/15 dark:hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    data-cursor={isOpen ? 'Fechar' : 'Abrir'}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                      {item.q}
                    </span>
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? 'bg-purple-600 text-white rotate-180 shadow-glow'
                          : 'bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-black/10 dark:border-white/10'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  {/* Answer Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-black/5 dark:border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-14 text-center">
          <Reveal>
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-center sm:text-left">
                <h4 className="font-display text-lg font-bold text-zinc-950 dark:text-white">Ficou com alguma dúvida específica?</h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Nossa equipe responde em poucos minutos no WhatsApp.
                </p>
              </div>
              <MagneticButton
                strength={0.3}
                href={getWhatsAppLink('Olá, li as dúvidas frequentes e gostaria de tirar uma dúvida sobre a Orium.')}
                target="_blank"
                rel="noopener noreferrer"
                dataCursor="WhatsApp"
                className="btn-hero px-7 py-3 text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-glow"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Tirar Dúvida no WhatsApp</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
