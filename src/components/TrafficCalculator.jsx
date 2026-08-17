import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Users, Eye, Sparkles, Copy, Check } from 'lucide-react';
import { Reveal } from './Reveal';
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

  // Calculations
  const estimatedReach = Math.round((budget / niche.cpm) * 1000);
  const estimatedClicks = Math.round(budget / niche.cpc);
  const estimatedLeads = Math.round(estimatedClicks * niche.leadRate);
  const potentialMin = Math.round(budget * niche.roasMin);
  const potentialMax = Math.round(budget * niche.roasMax);

  const handleWhatsAppShare = () => {
    const msg = `Olá, vim pelo site da Orium Digital e fiz uma simulação na Calculadora de Tráfego:\n\n• Segmento: ${niche.name}\n• Investimento pretendido: R$ ${budget.toLocaleString('pt-BR')}/mês\n• Estimativa de Leads: ${estimatedLeads} leads/mês\n• Potencial de Faturamento: R$ ${potentialMin.toLocaleString('pt-BR')} a R$ ${potentialMax.toLocaleString('pt-BR')}\n\nQuero agendar uma consultoria gratuita para montar esse plano para a minha empresa!`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const handleCopySimulation = () => {
    const text = `Simulação de Tráfego - Orium Digital\n• Segmento: ${niche.name}\n• Investimento: R$ ${budget.toLocaleString('pt-BR')}/mês\n• Alcance: ~${estimatedReach.toLocaleString('pt-BR')} pessoas\n• Cliques: ~${estimatedClicks.toLocaleString('pt-BR')} visitas\n• Oportunidades: ~${estimatedLeads} leads/mês\n• Faturamento Estimado: R$ ${potentialMin.toLocaleString('pt-BR')} a R$ ${potentialMax.toLocaleString('pt-BR')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="calculadora" className="relative border-t border-border py-20 sm:py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--primary-deep) 22%, transparent), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-glow">
            <Calculator className="h-3.5 w-3.5" />
            Simulador de Crescimento
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Descubra o potencial de retorno do seu{' '}
            <span className="text-gradient-purple">Tráfego Pago</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selecione o seu segmento e quanto pretende investir para visualizar uma
            estimativa baseada nas médias de performance da Orium Digital.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Controls Card */}
          <Reveal>
            <div className="glass-panel h-full rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <label htmlFor="calculator-niche" className="block text-sm font-semibold text-foreground">
                  1. Qual é o segmento da sua empresa?
                </label>
                <select
                  id="calculator-niche"
                  value={selectedNicheId}
                  onChange={(e) => setSelectedNicheId(e.target.value)}
                  className="mt-2.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors cursor-pointer"
                >
                  {niches.map((item) => (
                    <option key={item.id} value={item.id} className="bg-surface text-foreground">
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="calculator-budget" className="text-sm font-semibold text-foreground">
                    2. Quanto você planeja investir por mês?
                  </label>
                  <span className="font-display text-lg font-bold text-primary-glow">
                    R$ {budget.toLocaleString('pt-BR')}
                  </span>
                </div>

                {/* Quick Budget Presets */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {[2000, 5000, 10000, 20000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBudget(preset)}
                      className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        budget === preset
                          ? 'bg-primary text-primary-foreground shadow-glow'
                          : 'border border-border/80 bg-surface/80 text-muted-foreground hover:text-foreground hover:bg-white/5'
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
                  className="mt-4 w-full accent-primary cursor-pointer h-2 bg-surface rounded-lg"
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>R$ 1.000/mês</span>
                  <span>R$ 15.000/mês</span>
                  <span>R$ 30.000/mês+</span>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary-glow">
                  <Sparkles className="h-4 w-4" />
                  Estratégia personalizada Orium:
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Campanhas combinadas em Google Ads, Meta Ads e criativos de alta
                  conversão para maximizar o número de clientes pagantes.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Results Projection Card */}
          <Reveal delay={120}>
            <div className="glass-panel h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-primary/40 shadow-glow">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
                    Projeção Mensal Estimada
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-accent/60 px-2.5 py-0.5 text-xs font-semibold text-primary-glow">
                    <Sparkles className="h-3 w-3" />
                    ROAS {niche.roasMin}x – {niche.roasMax}x
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mt-1.5 text-foreground">
                  Resultados Esperados
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-card/60 p-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Eye className="h-3.5 w-3.5 text-primary-glow" />
                      <span>Alcance</span>
                    </div>
                    <p className="font-display text-lg font-bold text-foreground mt-1">
                      {estimatedReach.toLocaleString('pt-BR')}+
                    </p>
                    <span className="text-xs text-muted-foreground">pessoas impactadas</span>
                  </div>

                  <div className="rounded-2xl border border-border bg-card/60 p-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Users className="h-3.5 w-3.5 text-primary-glow" />
                      <span>Cliques no anúncio</span>
                    </div>
                    <p className="font-display text-lg font-bold text-foreground mt-1">
                      {estimatedClicks.toLocaleString('pt-BR')}+
                    </p>
                    <span className="text-xs text-muted-foreground">visitas qualificadas</span>
                  </div>

                  <div className="col-span-2 rounded-2xl border border-primary/40 bg-accent/30 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-medium text-primary-glow">
                        <TrendingUp className="h-4 w-4" />
                        <span>Estimativa de Oportunidades / Leads:</span>
                      </div>
                      <span className="font-display text-xl font-bold text-primary-glow">
                        ~{estimatedLeads} leads/mês
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Potencial de faturamento projetado:{' '}
                      <strong className="text-foreground">
                        R$ {potentialMin.toLocaleString('pt-BR')} a R$ {potentialMax.toLocaleString('pt-BR')}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="btn-hero w-full py-3.5 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  Quero alcançar essa meta no WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopySimulation}
                  className="btn-outline-hero w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Resumo da simulação copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copiar resumo da simulação</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default TrafficCalculator;
