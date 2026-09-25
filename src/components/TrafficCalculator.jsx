import React, { useState } from 'react';
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Users,
  Eye,
  Sparkles,
  Copy,
  Check,
  Zap,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { SpotlightCard } from './SpotlightCard';
import { getWhatsAppLink } from '../data/siteData';

const niches = [
  {
    id: 'local',
    name: 'Serviços Locais, Clínicas & Estética',
    cpm: 18,
    cpc: 1.1,
    leadRate: 0.12,
    roasMin: 3.5,
    roasMax: 5.5,
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Lojas Virtuais',
    cpm: 15,
    cpc: 0.95,
    leadRate: 0.08,
    roasMin: 4.0,
    roasMax: 6.5,
  },
  {
    id: 'imoveis',
    name: 'Imobiliárias & Alto Padrão',
    cpm: 24,
    cpc: 2.2,
    leadRate: 0.09,
    roasMin: 5.0,
    roasMax: 9.0,
  },
  {
    id: 'infoprodutos',
    name: 'Infoprodutos, Mentorias & Cursos',
    cpm: 20,
    cpc: 1.2,
    leadRate: 0.16,
    roasMin: 3.8,
    roasMax: 7.0,
  },
  {
    id: 'b2b',
    name: 'Negócios B2B & Consultoria',
    cpm: 28,
    cpc: 2.8,
    leadRate: 0.11,
    roasMin: 4.5,
    roasMax: 8.0,
  },
];

export function TrafficCalculator() {
  const [budget, setBudget] = useState(3000);
  const [selectedNicheId, setSelectedNicheId] = useState(niches[0].id);
  const [copied, setCopied] = useState(false);

  const niche = niches.find((n) => n.id === selectedNicheId) || niches[0];

  // Mathematical Projections
  const estimatedReach = Math.round((budget / niche.cpm) * 1000);
  const estimatedClicks = Math.round(budget / niche.cpc);
  const estimatedLeads = Math.round(estimatedClicks * niche.leadRate);
  const potentialMin = Math.round(budget * niche.roasMin);
  const potentialMax = Math.round(budget * niche.roasMax);

  const handleWhatsAppShare = () => {
    const msg = `Olá, vim pelo simulador no site da Orium Digital e fiz um cálculo de tráfego:\n\n• Segmento: ${niche.name}\n• Investimento pretendido: R$ ${budget.toLocaleString('pt-BR')}/mês\n• Estimativa de Leads: ${estimatedLeads} leads/mês\n• Potencial de Faturamento: R$ ${potentialMin.toLocaleString('pt-BR')} a R$ ${potentialMax.toLocaleString('pt-BR')}\n\nQuero agendar uma consultoria gratuita para montar esse plano para a minha empresa!`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const handleCopySimulation = () => {
    const text = `Simulação de Tráfego - Orium Digital\n• Segmento: ${niche.name}\n• Investimento: R$ ${budget.toLocaleString('pt-BR')}/mês\n• Alcance Estimado: ~${estimatedReach.toLocaleString('pt-BR')} pessoas\n• Visitas Qualificadas: ~${estimatedClicks.toLocaleString('pt-BR')}\n• Leads/Mês: ~${estimatedLeads}\n• Retorno Estimado: R$ ${potentialMin.toLocaleString('pt-BR')} a R$ ${potentialMax.toLocaleString('pt-BR')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="simulador" className="relative py-28 border-t border-white/10 overflow-hidden">
      {/* Dynamic Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-purple-600/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Calculator className="h-3.5 w-3.5" />
            Simulador de Crescimento & ROI
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Descubra o potencial do seu{' '}
            <span className="text-gradient-purple">Tráfego Pago</span>
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Ajuste seu segmento e orçamento para visualizar uma projeção realista baseada nas métricas de performance e inteligência de dados da Orium.
          </p>
        </Reveal>

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          {/* Controls Card */}
          <Reveal>
            <div className="glass-panel h-full rounded-3xl p-6 sm:p-9 space-y-7 border-white/10 shadow-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label htmlFor="calculator-niche" className="block text-sm font-bold text-white mb-2">
                    1. Segmento da sua empresa
                  </label>
                  <select
                    id="calculator-niche"
                    value={selectedNicheId}
                    onChange={(e) => setSelectedNicheId(e.target.value)}
                    className="w-full rounded-2xl border border-white/15 bg-[#121118] px-4 py-3.5 text-sm text-white focus:border-purple-500 focus:outline-none transition-colors cursor-pointer"
                  >
                    {niches.map((item) => (
                      <option key={item.id} value={item.id} className="bg-[#121118] text-white">
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="calculator-budget" className="text-sm font-bold text-white">
                      2. Investimento mensal em anúncios
                    </label>
                    <span className="font-display text-xl font-extrabold text-gradient-purple tabular-nums">
                      R$ {budget.toLocaleString('pt-BR')}
                    </span>
                  </div>

                  {/* Preset Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[2000, 3000, 5000, 10000, 20000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setBudget(preset)}
                        className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                          budget === preset
                            ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] scale-105'
                            : 'border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        R$ {(preset / 1000).toFixed(0)}k/mês
                      </button>
                    ))}
                  </div>

                  <input
                    id="calculator-budget"
                    aria-label="Orçamento mensal de investimento em tráfego pago"
                    type="range"
                    min={1000}
                    max={30000}
                    step={500}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer h-2 bg-white/10 rounded-lg"
                  />
                  <div className="mt-2 flex justify-between text-[11px] text-zinc-500 font-medium">
                    <span>R$ 1.000</span>
                    <span>R$ 15.000</span>
                    <span>R$ 30.000+</span>
                  </div>
                </div>
              </div>

              {/* Information pill */}
              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  Estratégia Multicanal Orium
                </div>
                <p className="mt-1 text-xs text-zinc-300 leading-relaxed font-normal">
                  Campanhas integradas em Google Ads, Meta Ads e TikTok com páginas de alta conversão para atrair quem realmente tem dinheiro e interesse em comprar.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Results Projection Card */}
          <Reveal delay={120}>
            <SpotlightCard
              tiltStrength={8}
              dataCursor="Resultados"
              className="h-full rounded-3xl p-6 sm:p-9 flex flex-col justify-between border-purple-500/40 bg-gradient-to-br from-purple-950/40 via-[#0e0d15]/90 to-[#07060b] shadow-[0_20px_50px_-15px_rgba(168,85,247,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                    Projeção de Performance
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-200">
                    <Zap className="h-3.5 w-3.5 text-purple-300" />
                    ROAS {niche.roasMin}x – {niche.roasMax}x
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold mt-2 text-white">
                  Métricas Estimadas
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs">
                      <Eye className="h-4 w-4 text-purple-400" />
                      <span>Alcance</span>
                    </div>
                    <p className="font-display text-xl sm:text-2xl font-bold text-white mt-1.5 tabular-nums">
                      {estimatedReach.toLocaleString('pt-BR')}+
                    </p>
                    <span className="text-[11px] text-zinc-500">pessoas impactadas</span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs">
                      <Users className="h-4 w-4 text-purple-400" />
                      <span>Visitas / Cliques</span>
                    </div>
                    <p className="font-display text-xl sm:text-2xl font-bold text-white mt-1.5 tabular-nums">
                      {estimatedClicks.toLocaleString('pt-BR')}+
                    </p>
                    <span className="text-[11px] text-zinc-500">visitas qualificadas</span>
                  </div>

                  {/* Highlights Banner */}
                  <div className="col-span-2 rounded-2xl border border-purple-500/30 bg-purple-500/15 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                        <TrendingUp className="h-4 w-4 text-purple-400" />
                        <span>Estimativa de Leads Qualificados:</span>
                      </div>
                      <span className="font-display text-2xl font-black text-white tabular-nums">
                        ~{estimatedLeads} leads/mês
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-purple-500/20 text-xs text-zinc-300 flex items-center justify-between">
                      <span>Potencial faturamento estimado:</span>
                      <strong className="text-white font-bold text-sm text-gradient-purple">
                        R$ {potentialMin.toLocaleString('pt-BR')} a R$ {potentialMax.toLocaleString('pt-BR')}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 space-y-3">
                <MagneticButton
                  strength={0.3}
                  onClick={handleWhatsAppShare}
                  dataCursor="Alcançar Meta"
                  className="btn-hero w-full py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-glow"
                >
                  <span>Quero alcançar essa meta no WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>

                <button
                  type="button"
                  onClick={handleCopySimulation}
                  data-cursor="Copiar"
                  className="w-full py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Resumo da simulação copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar resumo da simulação</span>
                    </>
                  )}
                </button>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default TrafficCalculator;
