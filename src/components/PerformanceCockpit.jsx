import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Zap,
  Users,
  Activity,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';
import { getWhatsAppLink } from '../data/siteData';

const CHANNEL_DATA = {
  all: {
    label: 'Todos os Canais',
    leads: '+240%',
    leadsSub: 'Volume total consolidado',
    roas: '4.8x',
    roasSub: 'Retorno Líquido s/ Anúncio',
    revenue: 'R$ 1.8M+',
    revenueSub: '+R$ 185k/mês em Escala Contínua',
    metaEffic: '94%',
    googleEffic: '89%',
    tiktokEffic: '92%',
    curvePath: 'M 0,130 Q 140,120 260,75 T 520,25 T 660,12',
    areaPath: 'M 0,130 Q 140,120 260,75 T 520,25 T 660,12 L 660,160 L 0,160 Z',
    peakValue: 'R$ 185.000 / mês',
    insight: '🎯 Algoritmo de Alocação Dinâmica: o orçamento migra automaticamente para o canal com menor CAC e maior taxa de fechamento no dia.',
  },
  meta: {
    label: 'Meta Ads (Instagram & FB)',
    leads: '+185%',
    leadsSub: 'Leads Direto no WhatsApp',
    roas: '5.2x',
    roasSub: 'Criativos de Alta Retenção',
    revenue: 'R$ 980k+',
    revenueSub: 'Escala em Remarketing Omnichannel',
    metaEffic: '96%',
    googleEffic: '82%',
    tiktokEffic: '85%',
    curvePath: 'M 0,135 Q 150,110 280,65 T 540,20 T 660,8',
    areaPath: 'M 0,135 Q 150,110 280,65 T 540,20 T 660,8 L 660,160 L 0,160 Z',
    peakValue: 'ROAS 5.2x Pico',
    insight: '📸 Criativos em carrossel e Reels gerando volume contínuo de conversas com tomadores de decisão qualificados.',
  },
  google: {
    label: 'Google Ads (Pesquisa & Maps)',
    leads: '+140%',
    leadsSub: 'Fundo de Funil & Alta Intenção',
    roas: '4.6x',
    roasSub: 'Palavras-chave Negativadas Diariamente',
    revenue: 'R$ 640k+',
    revenueSub: 'Clientes Prontos para Compra',
    metaEffic: '88%',
    googleEffic: '95%',
    tiktokEffic: '78%',
    curvePath: 'M 0,125 Q 140,105 270,70 T 530,30 T 660,16',
    areaPath: 'M 0,125 Q 140,105 270,70 T 530,30 T 660,16 L 660,160 L 0,160 Z',
    peakValue: 'Taxa Conv. 14.8%',
    insight: '🔍 Captura precisa de clientes com intenção imediata de contratação no Google Pesquisa e Google Maps regional.',
  },
  tiktok: {
    label: 'TikTok Ads & Vídeos Curtos',
    leads: '+210%',
    leadsSub: 'Menor Custo por Lead do Mercado',
    roas: '4.2x',
    roasSub: 'Ganchos Virais e Roteiros Nativos',
    revenue: 'R$ 380k+',
    revenueSub: 'Volume e Alcance Exponencial',
    metaEffic: '90%',
    googleEffic: '80%',
    tiktokEffic: '97%',
    curvePath: 'M 0,140 Q 160,130 290,80 T 550,22 T 660,10',
    areaPath: 'M 0,140 Q 160,130 290,80 T 550,22 T 660,10 L 660,160 L 0,160 Z',
    peakValue: 'CAC 40% menor',
    insight: '⚡ Conteúdos dinâmicos com linguagem nativa reduzindo o custo por clique e aumentando a velocidade de decisão.',
  },
};

export function PerformanceCockpit() {
  const [selectedChannel, setSelectedChannel] = useState('all');
  const currentData = CHANNEL_DATA[selectedChannel];

  return (
    <section
      id="simulador"
      className="relative py-28 sm:py-36 border-t border-black/10 dark:border-white/10 overflow-hidden"
    >
      {/* Invisible anchor target for #performance as well */}
      <div id="performance" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-purple-600/15 blur-[160px]" />
        <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-5">
              <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-purple-700 dark:text-purple-200">
                Engenharia de Tráfego & Escala
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Nosso Painel de{' '}
              <span className="text-gradient-purple">Performance & ROAS</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Substituímos suposições por inteligência de dados. Veja abaixo como gerenciamos os canais de aquisição, multiplicamos a geração de leads e construímos previsibilidade de receita para os nossos clientes.
            </p>
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* FULL EXPANSIVE COCKPIT SHOWCASE                          */}
        {/* ======================================================== */}
        <Reveal delay={0.3}>
          <div className="relative mx-auto max-w-5xl w-full">
            {/* Ambient Neon Backing */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-purple-600/30 via-fuchsia-600/20 to-purple-600/30 blur-2xl opacity-60 -z-10 pointer-events-none" />

            {/* Main Window */}
            <div className="relative rounded-3xl border border-purple-500/20 dark:border-purple-500/30 bg-white/95 dark:bg-gradient-to-b dark:from-[#13111e]/95 dark:via-[#0e0c17]/95 dark:to-[#08070d]/98 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)] dark:shadow-[0_30px_100px_-20px_rgba(168,85,247,0.35)] overflow-hidden">
              {/* Cockpit Window Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4.5 border-b border-black/10 dark:border-white/10 bg-zinc-100/70 dark:bg-white/[0.02]">
                {/* macOS style window dots + Title */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56] opacity-80" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e] opacity-80" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f] opacity-80" />
                  </div>
                  <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10 mx-1 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white tracking-wide">
                      Cockpit de Escala & Performance Orium
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/15 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/25 dark:border-purple-500/30 font-bold hidden md:inline-block">
                      Live Analytics
                    </span>
                  </div>
                </div>

                {/* Interactive Channel Filter Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {[
                    { id: 'all', label: 'Todos os Canais' },
                    { id: 'meta', label: 'Meta Ads' },
                    { id: 'google', label: 'Google Ads' },
                    { id: 'tiktok', label: 'TikTok Ads' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedChannel(tab.id)}
                      data-cursor="Canal"
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        selectedChannel === tab.id
                          ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                          : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.08] dark:hover:bg-white/[0.08]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}

                  <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10 mx-1 hidden lg:block" />

                  <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Campanhas Ativas</span>
                  </div>
                </div>
              </div>

              {/* Cockpit Main Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* 1. Three Panoramic Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Metric 1 */}
                  <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                      <span className="font-medium">Geração de Leads Qualificados</span>
                      <div className="h-7 w-7 rounded-lg bg-purple-500/15 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                        {currentData.leads}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                        <TrendingUp className="h-3.5 w-3.5" /> +52% vs mês ant.
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{currentData.leadsSub}</p>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                      <span className="font-medium">ROAS Médio de Retorno</span>
                      <div className="h-7 w-7 rounded-lg bg-fuchsia-500/15 dark:bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-300">
                        <Zap className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-gradient-purple tracking-tight">
                        {currentData.roas}
                      </span>
                      <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                        Retorno s/ anúncio
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{currentData.roasSub}</p>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                      <span className="font-medium">Faturamento Total Gerado</span>
                      <div className="h-7 w-7 rounded-lg bg-emerald-500/15 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                        {currentData.revenue}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        Crescimento real
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{currentData.revenueSub}</p>
                  </div>
                </div>

                {/* 2. Dual Panel: High-Res SVG Growth Chart + Active Channel Distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
                  {/* Left: Glowing Exponential Growth Curve */}
                  <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wide">
                          Curva de Escala & Receita Acumulada
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                          Progressão média de faturamento das contas geridas pela Orium
                        </p>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        {currentData.peakValue}
                      </span>
                    </div>

                    {/* SVG Chart */}
                    <div className="relative h-40 sm:h-48 w-full my-2">
                      <svg
                        viewBox="0 0 660 160"
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="cockpitGradientArea" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="cockpitGradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="50%" stopColor="#c084fc" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>

                        {/* Subtle Grid Lines */}
                        <line x1="0" y1="35" x2="660" y2="35" stroke="currentColor" className="text-black/[0.06] dark:text-white/[0.06]" strokeDasharray="4 4" />
                        <line x1="0" y1="80" x2="660" y2="80" stroke="currentColor" className="text-black/[0.06] dark:text-white/[0.06]" strokeDasharray="4 4" />
                        <line x1="0" y1="125" x2="660" y2="125" stroke="currentColor" className="text-black/[0.06] dark:text-white/[0.06]" strokeDasharray="4 4" />

                        {/* Area */}
                        <path d={currentData.areaPath} fill="url(#cockpitGradientArea)" />

                        {/* Stroke */}
                        <path
                          d={currentData.curvePath}
                          fill="none"
                          stroke="url(#cockpitGradientStroke)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />

                        {/* Data Points */}
                        <circle cx="0" cy="130" r="4" fill="#818cf8" />
                        <circle cx="165" cy="105" r="4" fill="#a855f7" />
                        <circle cx="330" cy="65" r="4.5" fill="#c084fc" />
                        <circle cx="495" cy="30" r="5" fill="#ec4899" />

                        {/* Peak Point */}
                        <circle cx="660" cy="12" r="5.5" fill="#ffffff" stroke="#9333ea" strokeWidth="1.5" />
                        <circle cx="660" cy="12" r="10" fill="none" stroke="#ec4899" strokeWidth="2.5" className="animate-ping" />
                      </svg>
                    </div>

                    {/* Timeline labels */}
                    <div className="flex justify-between text-[11px] text-zinc-500 font-medium pt-3 border-t border-black/5 dark:border-white/5">
                      <span>Mês 1 (Auditoria & Setup)</span>
                      <span>Mês 2 (Validação de Oferta)</span>
                      <span>Mês 3 (Tração & Otimização)</span>
                      <span className="text-purple-600 dark:text-purple-300 font-semibold">Mês 6 (Escala Acelerada)</span>
                    </div>
                  </div>

                  {/* Right: Active Channel Breakdown */}
                  <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wide">
                          Distribuição por Canal
                        </h4>
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                          Taxa de Eficiência
                        </span>
                      </div>

                      <div className="space-y-4">
                        {/* Meta Ads */}
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="text-zinc-700 dark:text-zinc-200 font-medium">Meta Ads (Instagram & Facebook)</span>
                            <span className="text-purple-600 dark:text-purple-300 font-bold">{currentData.metaEffic}</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full transition-all duration-500"
                              style={{ width: currentData.metaEffic }}
                            />
                          </div>
                        </div>

                        {/* Google Ads */}
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="text-zinc-700 dark:text-zinc-200 font-medium">Google Ads (Pesquisa & Maps)</span>
                            <span className="text-purple-600 dark:text-purple-300 font-bold">{currentData.googleEffic}</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                              style={{ width: currentData.googleEffic }}
                            />
                          </div>
                        </div>

                        {/* TikTok Ads */}
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="text-zinc-700 dark:text-zinc-200 font-medium">TikTok Ads & Vídeos Curtos</span>
                            <span className="text-purple-600 dark:text-purple-300 font-bold">{currentData.tiktokEffic}</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full transition-all duration-500"
                              style={{ width: currentData.tiktokEffic }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Strategic Insight Callout */}
                    <div className="mt-5 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-950 dark:text-zinc-300 leading-relaxed">
                      {currentData.insight}
                    </div>
                  </div>
                </div>

                {/* 3. Cockpit Bottom Bar with Direct CTA */}
                <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
                  <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-300">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-zinc-900 dark:text-white font-semibold">Garantia de Transparência Total</p>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        Acesso irrestrito às suas contas de anúncio e relatórios semanais com nossos especialistas.
                      </p>
                    </div>
                  </div>

                  <MagneticButton
                    strength={0.3}
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    dataCursor="Quero Escalar"
                    className="btn-hero px-6 py-3.5 text-xs sm:text-sm font-bold w-full md:w-auto shrink-0 shadow-glow"
                  >
                    <span>Quero Escalar Meu Negócio com a Orium</span>
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PerformanceCockpit;
