import React, { useState } from 'react';
import { Send, MessageCircle, Instagram } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import {
  serviceOptions,
  getWhatsAppLink,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  trackEvent,
} from '../data/siteData';

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length > 10) {
    return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }
  if (digits.length > 6) {
    return digits.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
  }
  if (digits.length > 2) {
    return digits.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
  }
  if (digits.length > 0) {
    return digits.replace(/^(\d{0,2})$/, '($1');
  }
  return '';
}

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    servico: serviceOptions[0],
    mensagem: '',
  });

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === 'whatsapp') {
      value = formatPhone(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent('Lead', { source: 'contact_page_form' });
    const msg = `Olá, vim pelo site da Orium Digital e quero agendar uma consultoria gratuita.\n\nNome: ${formData.nome}\nEmpresa: ${formData.empresa || 'Não informado'}\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nServiço de interesse: ${formData.servico}\nMensagem: ${formData.mensagem || 'Sem mensagem adicional'}`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const inputStyle =
    'w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors';

  return (
    <main className="overflow-x-clip pt-16">
      <section className="relative isolate">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(55% 45% at 50% 0%, color-mix(in oklab, var(--primary-deep) 30%, transparent), transparent 70%)',
          }}
        />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
              Contato
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Vamos criar uma estratégia para o{' '}
              <span className="text-gradient-purple">
                crescimento da sua empresa?
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Preencha o formulário ou fale diretamente pelo WhatsApp para
              agendar sua consultoria gratuita.
            </p>
          </Reveal>

          {/* Grid: Form & Contact Info */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="glass-panel space-y-4 rounded-3xl p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange('nome')}
                    className={inputStyle}
                  />
                  <input
                    type="text"
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={handleChange('empresa')}
                    className={inputStyle}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className={inputStyle}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="WhatsApp"
                    value={formData.whatsapp}
                    onChange={handleChange('whatsapp')}
                    className={inputStyle}
                  />
                </div>

                <select
                  value={formData.servico}
                  onChange={handleChange('servico')}
                  className={inputStyle}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface text-foreground">
                      {opt}
                    </option>
                  ))}
                </select>

                <textarea
                  rows={4}
                  placeholder="Mensagem"
                  value={formData.mensagem}
                  onChange={handleChange('mensagem')}
                  className={inputStyle}
                />

                <button
                  type="submit"
                  className="btn-hero w-full px-6 py-3.5 text-sm sm:text-base cursor-pointer"
                >
                  Enviar solicitação
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>

            {/* Side Cards */}
            <Reveal delay={120} className="space-y-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('Contact', { source: 'contact_whatsapp_card' })}
                className="glass-panel flex items-center gap-4 rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-foreground">
                    Chamar no WhatsApp agora
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Resposta rápida e atendimento estratégico
                  </p>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('Contact', { source: 'contact_instagram_card' })}
                className="glass-panel flex items-center gap-4 rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary-glow">
                  <Instagram className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-foreground">
                    {INSTAGRAM_HANDLE}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Acompanhe a Orium no Instagram
                  </p>
                </div>
              </a>

              <div className="rounded-3xl border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ao enviar o formulário, uma mensagem pronta é gerada com seus
                  dados e o WhatsApp da Orium abre automaticamente para você
                  concluir o envio.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
