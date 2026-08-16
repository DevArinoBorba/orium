import React, { useState } from 'react';
import { Phone, Instagram, Send } from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getWhatsAppLink,
  serviceOptions,
  trackEvent,
} from '../data/siteData';

export function Footer({ onNavigate }) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: serviceOptions[0],
  });

  const handleNavClick = (path, anchor) => {
    if (onNavigate) {
      onNavigate(path, anchor);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent('Lead', { source: 'footer_form' });
    const msg = `Olá, vim pelo site da Orium Digital e quero agendar uma consultoria gratuita.\n\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nServiço de interesse: ${formData.servico}`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        {/* Brand info */}
        <div>
          <img
            src="/assets/logo-horizontal.png"
            alt="Orium Digital"
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm tracking-widest text-primary-glow font-medium">
            Estratégia • Tráfego • Conversão • Escala
          </p>

          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('Contact', { source: 'footer_whatsapp' })}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-primary-glow" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('Contact', { source: 'footer_instagram' })}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4 shrink-0 text-primary-glow" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="text-sm">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Navegação
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-muted-foreground">
            <li>
              <a
                href="/#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'inicio');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="/#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'servicos');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="/#metodologia"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'metodologia');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Metodologia
              </a>
            </li>
            <li>
              <a
                href="/#calculadora"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'calculadora');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Calculadora
              </a>
            </li>
            <li>
              <a
                href="/#depoimentos"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'depoimentos');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="/#clientes"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/', 'clientes');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                href="/sobre"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/sobre');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/contato"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/contato');
                }}
                className="transition-colors hover:text-foreground cursor-pointer"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Quick Consultation Form */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Agende sua consultoria
          </h3>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <input
              required
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full rounded-xl border border-input bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <input
              required
              type="tel"
              placeholder="WhatsApp"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full rounded-xl border border-input bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <select
              value={formData.servico}
              onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
              className="w-full rounded-xl border border-input bg-surface px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-surface text-foreground">
                  {opt}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="btn-hero w-full px-5 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Agendar consultoria gratuita
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 Orium Digital. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
