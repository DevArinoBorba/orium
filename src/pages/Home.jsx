import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  BadgeCheck,
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
  ChartColumn,
  Instagram,
  Plus,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SpotlightCard } from '../components/SpotlightCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { Methodology } from '../components/Methodology';
import { TrafficCalculator } from '../components/TrafficCalculator';
import { Testimonials } from '../components/Testimonials';
import {
  stats,
  services,
  serviceCategories,
  benefits,
  clients,
  faqItems,
  getWhatsAppLink,
  getServiceWhatsAppLink,
  trackEvent,
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

export function Home({ onNavigate, onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <main className="overflow-x-clip">
      {/* 1. HERO SECTION */}
      <section id="inicio" className="relative isolate pt-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 50% at 75% 30%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%), radial-gradient(40% 40% at 15% 80%, color-mix(in oklab, var(--primary-deep) 30%, transparent), transparent 70%)',
          }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-0 lg:pt-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
              Estratégia • Tráfego • Conversão • Escala
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Transforme sua presença digital em{' '}
              <span className="text-gradient-purple">
                clientes, autoridade e vendas.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Orium Digital cria estratégias completas de marketing, tráfego
              pago, redes sociais, sites e landing pages para empresas que querem
              crescer com posicionamento, performance e sofisticação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('Lead', { source: 'hero_primary_cta' })}
                className="btn-hero px-7 py-3.5 text-sm sm:text-base"
              >
                Agendar consultoria gratuita
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('/sobre')}
                className="btn-outline-hero px-7 py-3.5 text-sm sm:text-base cursor-pointer"
              >
                Conhecer a Orium
              </button>
            </div>

            {/* Animated Stats */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-4">
                  <p className="font-display text-lg font-bold text-primary-glow sm:text-xl">
                    <AnimatedCounter
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-4/5 rounded-t-full"
              style={{ background: 'var(--gradient-glow)' }}
            />
            <picture>
              <source type="image/webp" srcSet="/assets/ceo-1.webp" />
              <img
                src="/assets/ceo-1.png"
                alt="Moniqui Borges, fundadora da Orium Digital"
                width="450"
                height="550"
                fetchPriority="high"
                decoding="async"
                className="mx-auto w-full max-w-sm drop-shadow-[0_30px_60px_rgba(122,31,255,0.35)] lg:max-w-md transition-transform hover:scale-[1.02] duration-500"
              />
            </picture>
          </Reveal>
        </div>
      </section>

      {/* 2. SERVICES SECTION WITH CATEGORY TABS & SPOTLIGHT */}
      <section id="servicos" className="relative border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Soluções digitais para marcas que{' '}
              <span className="text-gradient-purple">querem crescer</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Da estratégia ao anúncio, da identidade visual à conversão: a Orium
              Digital cuida da presença digital da sua empresa com visão completa
              de crescimento.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'border border-border/80 bg-surface text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Services Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Target;
              return (
                <Reveal key={item.title} delay={(idx % 3) * 80}>
                  <SpotlightCard className="group flex h-full flex-col justify-between hover:border-primary/50 hover:shadow-elegant">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary-glow">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectService && onSelectService(item)}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary-glow transition-colors cursor-pointer"
                        >
                          <Info className="h-3.5 w-3.5" />
                          <span>Ver detalhes</span>
                        </button>
                      </div>

                      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                      <a
                        href={getServiceWhatsAppLink(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('Contact', { service: item.title })}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-glow transition-colors hover:text-foreground"
                      >
                        Quero esse serviço
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY 4 STEPS SECTION */}
      <Methodology />

      {/* 4. TRAFFIC POTENTIAL CALCULATOR */}
      <TrafficCalculator />

      {/* 5. BENEFITS SECTION */}
      <section id="beneficios" className="relative border-t border-border py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(50% 40% at 50% 0%, color-mix(in oklab, var(--primary-deep) 25%, transparent), transparent 70%)',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Por que contratar a{' '}
              <span className="text-gradient-purple">Orium Digital?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nós unimos estratégia, estética premium e performance para fazer
              sua marca ser vista, lembrada, desejada e escolhida.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <Reveal key={benefit} delay={(idx % 3) * 60}>
                <div className="flex items-center gap-3 rounded-2xl glass-panel px-5 py-4 hover:border-primary/40 transition-colors">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-primary-glow" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <a
              href={getWhatsAppLink(
                'Olá, vim pelo site da Orium Digital e quero atrair mais clientes. Quero agendar uma consultoria gratuita.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('Lead', { source: 'benefits_cta' })}
              className="btn-hero px-8 py-4 text-sm sm:text-base"
            >
              Quero atrair mais clientes
              <TrendingUp className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 6. CLIENTS / SUCCESS CASES WITH METRIC BADGES */}
      <section id="clientes" className="border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
              Casos Reais
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Marcas que já fazem parte da{' '}
              <span className="text-gradient-purple">jornada Orium</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A Orium Digital atua com empresas de diferentes segmentos, criando
              presença digital, campanhas, criativos e estratégias de crescimento.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clients.map((client, idx) => (
              <Reveal key={client.name} delay={(idx % 4) * 60}>
                <SpotlightCard className="flex h-full flex-col justify-between text-center hover:border-primary/50">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-glow">
                      <ChartColumn className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                      {client.name}
                    </h3>

                    {/* Metric Tag */}
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-glow">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {client.metric}
                    </div>
                  </div>

                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-hero mt-5 px-5 py-2 text-xs w-full justify-center"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    Ver Instagram
                  </a>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS & REVIEWS */}
      <Testimonials />

      {/* 8. ABOUT FOUNDER OVERVIEW SECTION */}
      <section className="relative border-t border-border py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative order-2 mx-auto w-full max-w-sm lg:order-1">
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full"
              style={{ background: 'var(--gradient-glow)' }}
            />
            <picture>
              <source type="image/webp" srcSet="/assets/ceo-2.webp" />
              <img
                src="/assets/ceo-2.png"
                alt="Moniqui Borges, estrategista de marketing digital e fundadora da Orium Digital"
                width="450"
                height="550"
                loading="lazy"
                decoding="async"
                className="w-full drop-shadow-[0_30px_60px_rgba(122,31,255,0.3)] transition-transform hover:scale-105 duration-500"
              />
            </picture>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              A estratégia por trás de marcas que{' '}
              <span className="text-gradient-purple">querem crescer</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A Orium Digital nasceu de uma história real de coragem, visão e
              transformação. Fundada por Moniqui Borges, estrategista de marketing
              digital, gestora de tráfego pago e empreendedora, a agência surgiu
              para ajudar empresas a comunicarem seu valor com clareza,
              autoridade e estratégia.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Mais do que criar campanhas, a Orium constrói presenças digitais
              fortes, criativos persuasivos, sites estratégicos e experiências
              visuais pensadas para gerar conexão, confiança e conversão.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('/sobre')}
                className="btn-hero px-6 py-3 text-sm cursor-pointer"
              >
                Conheça nossa história
              </button>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-hero px-6 py-3 text-sm"
              >
                Falar com a Orium
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Perguntas <span className="text-gradient-purple">Frequentes</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-3">
            {faqItems.map((item, idx) => (
              <Reveal key={item.q} delay={idx * 40}>
                <details className="group rounded-2xl border border-border bg-card px-5 py-4 transition-colors open:border-primary/50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-semibold sm:text-base [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary-glow transition-transform duration-300 group-open:rotate-45">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground border-t border-border/40 pt-3">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href={getWhatsAppLink(
                'Olá, vim pelo site da Orium Digital e ainda tenho algumas dúvidas. Podem me ajudar?'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero px-8 py-4 text-sm sm:text-base"
            >
              Ainda tem dúvidas? Fale conosco no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Home;
