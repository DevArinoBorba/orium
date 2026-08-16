import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { getServiceWhatsAppLink } from '../data/siteData';

export function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-primary/30 bg-surface p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary-glow">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Solução Especializada
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {service.desc}
        </p>

        {/* Deliverables */}
        <div className="mt-6 rounded-2xl border border-border/80 bg-card/50 p-5">
          <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">
            O que está incluso neste serviço:
          </h4>
          <ul className="mt-4 space-y-3">
            {service.deliverables &&
              service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-glow mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={getServiceWhatsAppLink(service.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero flex-1 py-3.5 text-sm text-center justify-center"
          >
            Quero contratar esse serviço
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="btn-outline-hero py-3.5 px-6 text-sm"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
