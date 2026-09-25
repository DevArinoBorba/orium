import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { getWhatsAppLink } from '../data/siteData';

export function FinalCTA() {
  return (
    <section className="relative py-28 border-t border-white/10 bg-gradient-to-b from-[#08070d] via-[#100a1c] to-[#08070d] overflow-hidden">
      {/* Grand Nebula Orb */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[850px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/25 via-fuchsia-600/20 to-indigo-600/20 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-200 mb-6 shadow-glow">
            <Sparkles className="h-3.5 w-3.5 text-purple-300 animate-spin" style={{ animationDuration: '6s' }} />
            O Próximo Passo do Seu Negócio
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Pronto para transformar cliques em{' '}
            <span className="text-gradient-purple block sm:inline">faturamento real?</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Agende uma consultoria estratégica gratuita de 30 minutos. Entenda o diagnóstico atual do seu mercado e saiba exatamente o que fazer para vender mais.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              strength={0.35}
              href={getWhatsAppLink('Olá! Gostaria de agendar minha consultoria estratégica gratuita com a Orium Digital.')}
              target="_blank"
              rel="noopener noreferrer"
              dataCursor="Agendar Já"
              className="btn-hero px-10 py-5 text-base sm:text-lg font-bold w-full sm:w-auto shadow-[0_0_50px_rgba(168,85,247,0.7)]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Agendar Consultoria Gratuita</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-zinc-400 font-medium">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <span>Resposta em poucos minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span>Sem compromisso ou fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-400" />
              <span>Diagnóstico de oportunidades real</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCTA;
