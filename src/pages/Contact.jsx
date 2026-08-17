import React, { useState } from 'react';
import { Send, MessageCircle, Instagram, Sparkles } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === 'whatsapp') {
      value = formatPhone(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent('Lead', { source: 'contact_page_form' });
    const msg = `Olá, vim pelo site da Orium Digital e quero agendar uma consultoria gratuita.\n\nNome: ${formData.nome}\nEmpresa: ${formData.empresa || 'Não informado'}\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nServiço de interesse: ${formData.servico}\nMensagem: ${formData.mensagem || 'Sem mensagem adicional'}`;
    
    setTimeout(() => {
      window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 450);
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
                className="glass-panel space-y-5 rounded-3xl p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-nome" className="block text-xs font-semibold text-foreground mb-1.5">
                      Nome completo <span className="text-primary-glow" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-nome"
                      required
                      type="text"
                      placeholder="Seu nome"
                      autoComplete="name"
                      value={formData.nome}
                      onChange={handleChange('nome')}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-empresa" className="block text-xs font-semibold text-foreground mb-1.5">
                      Empresa / Segmento
                    </label>
                    <input
                      id="contact-empresa"
                      type="text"
                      placeholder="Nome da sua empresa"
                      autoComplete="organization"
                      value={formData.empresa}
                      onChange={handleChange('empresa')}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground mb-1.5">
                      E-mail corporativo <span className="text-primary-glow" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      placeholder="seuemail@empresa.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-whatsapp" className="block text-xs font-semibold text-foreground mb-1.5">
                      WhatsApp com DDD <span className="text-primary-glow" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-whatsapp"
                      required
                      type="tel"
                      placeholder="(67) 99999-9999"
                      autoComplete="tel"
                      value={formData.whatsapp}
                      onChange={handleChange('whatsapp')}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-servico" className="block text-xs font-semibold text-foreground mb-1.5">
                    Serviço de interesse principal
                  </label>
                  <select
                    id="contact-servico"
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
                </div>

                <div>
                  <label htmlFor="contact-mensagem" className="block text-xs font-semibold text-foreground mb-1.5">
                    Mensagem ou momento atual do negócio (opcional)
                  </label>
                  <textarea
                    id="contact-mensagem"
                    rows={4}
                    placeholder="Conte um pouco sobre suas metas ou desafios de vendas atuais..."
                    value={formData.mensagem}
                    onChange={handleChange('mensagem')}
                    className={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full px-6 py-3.5 text-sm sm:text-base cursor-pointer disabled:opacity-80 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span>Redirecionando para o WhatsApp...</span>
                      <Sparkles className="h-4 w-4 animate-spin text-primary-glow" />
                    </>
                  ) : (
                    <>
                      <span>Enviar solicitação</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
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
