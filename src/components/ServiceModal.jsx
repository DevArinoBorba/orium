import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { getServiceWhatsAppLink } from '../data/siteData';
import { MagneticButton } from './MagneticButton';

export function ServiceModal({ service, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-desc"
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop with heavy blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 dark:bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto overscroll-contain rounded-3xl border border-purple-500/30 dark:border-purple-500/40 bg-white dark:bg-[#0d0c13] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(168,85,247,0.3)] animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do serviço"
          data-cursor="Fechar"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 focus:outline-none cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 pr-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-purple-700 dark:text-purple-300 font-bold px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20">
              Solução Especializada
            </span>
            <h3 id="service-modal-title" className="font-display text-2xl font-bold text-zinc-950 dark:text-white mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        <p id="service-modal-desc" className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          {service.desc}
        </p>

        {/* Deliverables */}
        <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] p-5">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
            O que está incluso neste serviço:
          </h4>
          <ul className="mt-4 space-y-3">
            {service.deliverables &&
              service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <MagneticButton
            strength={0.3}
            href={getServiceWhatsAppLink(service.title)}
            target="_blank"
            rel="noopener noreferrer"
            dataCursor="WhatsApp"
            className="btn-hero flex-1 py-3.5 text-sm font-bold text-center justify-center shadow-glow"
          >
            <span>Quero contratar esse serviço</span>
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <button
            type="button"
            onClick={onClose}
            data-cursor="Voltar"
            className="btn-outline-hero py-3.5 px-6 text-sm font-semibold cursor-pointer"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
