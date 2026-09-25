import React, { useState } from 'react';
import { Phone, Instagram, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getWhatsAppLink,
  serviceOptions,
  trackEvent,
} from '../data/siteData';
import { MagneticButton } from './MagneticButton';

export function Footer({ onNavigate }) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: serviceOptions[0],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNavClick = (path, anchor) => {
    if (onNavigate) {
      onNavigate(path, anchor);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent('Lead', { source: 'footer_form' });
    const msg = `Olá, vim pelo site da Orium Digital e quero agendar uma consultoria gratuita.\n\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nServiço de interesse: ${formData.servico}`;

    setTimeout(() => {
      window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-[#f4f1fa] dark:bg-[#07060a] relative overflow-hidden transition-colors duration-300">
      {/* Background Accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-900/10 blur-[150px] -z-10" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        {/* Brand info */}
        <div>
          <img
            src="/assets/logo-horizontal-light-theme.png"
            alt="Orium Digital"
            width="190"
            height="48"
            loading="lazy"
            decoding="async"
            className="h-11 w-auto dark:hidden"
          />
          <picture className="hidden dark:block">
            <source type="image/webp" srcSet="/assets/logo-horizontal.webp" />
            <img
              src="/assets/logo-horizontal.png"
              alt="Orium Digital"
              width="190"
              height="48"
              loading="lazy"
              decoding="async"
              className="h-11 w-auto"
            />
          </picture>

          <p className="mt-4 text-xs tracking-[0.25em] text-purple-700 dark:text-purple-300 font-semibold uppercase">
            Estratégia • Tráfego • Conversão • Escala
          </p>

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
            Agência de marketing digital de alta performance especializada em atrair clientes qualificados e multiplicar o faturamento de empresas em todo o Brasil.
          </p>

          <div className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('Contact', { source: 'footer_whatsapp' })}
              data-cursor="WhatsApp"
              className="flex items-center gap-2.5 transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-300">
                <Phone className="h-4 w-4" />
              </div>
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('Contact', { source: 'footer_instagram' })}
              data-cursor="Instagram"
              className="flex items-center gap-2.5 transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-300">
                <Instagram className="h-4 w-4" />
              </div>
              <span>{INSTAGRAM_HANDLE}</span>
            </a>

            <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-500 text-xs">
              <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>Atendimento Digital para Todo o Brasil & Exterior</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="text-sm">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">
            Navegação Rápida
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 gap-x-4 text-zinc-600 dark:text-zinc-400">
            {[
              { label: 'Início', path: '/', anchor: 'inicio' },
              { label: 'Serviços', path: '/', anchor: 'servicos' },
              { label: 'Marcas', path: '/', anchor: 'marcas' },
              { label: 'Performance', path: '/', anchor: 'simulador' },
              { label: 'Metodologia', path: '/', anchor: 'metodologia' },
              { label: 'Depoimentos', path: '/', anchor: 'depoimentos' },
              { label: 'FAQ', path: '/', anchor: 'faq' },
              { label: 'Sobre a Orium', path: '/sobre' },
              { label: 'Fale Conosco', path: '/contato' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.anchor ? `${link.path}#${link.anchor}` : link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.path, link.anchor);
                  }}
                  data-cursor="Link"
                  className="transition-colors hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 group"
                >
                  <span className="text-xs group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Consultation Form */}
        <div className="p-6 rounded-3xl glass-panel border-black/10 dark:border-white/10 shadow-2xl">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
            Receba um Diagnóstico Gratuito
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Preencha e nossa especialista entrará em contato:
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div>
              <label htmlFor="footer-nome" className="sr-only">
                Seu nome
              </label>
              <input
                id="footer-nome"
                required
                type="text"
                placeholder="Seu nome completo"
                autoComplete="name"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#121118] px-4 py-2.5 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="footer-whatsapp" className="sr-only">
                Seu WhatsApp
              </label>
              <input
                id="footer-whatsapp"
                required
                type="tel"
                placeholder="Seu WhatsApp com DDD"
                autoComplete="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#121118] px-4 py-2.5 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="footer-servico" className="sr-only">
                Serviço de interesse
              </label>
              <select
                id="footer-servico"
                value={formData.servico}
                onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#121118] px-4 py-2.5 text-xs text-zinc-900 dark:text-white focus:border-purple-500 focus:outline-none transition-colors cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-white dark:bg-[#121118] text-zinc-900 dark:text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              data-cursor="Enviar"
              className="btn-hero w-full px-5 py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-glow"
            >
              {isSubmitting ? (
                <>
                  <span>Conectando...</span>
                  <Sparkles className="h-3.5 w-3.5 animate-spin text-purple-200" />
                </>
              ) : (
                <>
                  <span>Enviar e Agendar Diagnóstico</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10 py-6 text-center text-xs text-zinc-500 dark:text-zinc-500">
        © 2026 Orium Digital. Todos os direitos reservados. Feito com tecnologia de alta conversão.
      </div>
    </footer>
  );
}

export default Footer;
