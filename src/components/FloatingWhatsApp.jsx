import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/siteData';

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside aria-label="Atendimento rápido no WhatsApp" className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 glass-panel border-primary/40 rounded-full px-4 py-2 text-xs font-medium text-foreground shadow-2xl transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Consultoria Online • Fale conosco</span>
      </div>

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Falar com a Orium no WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-all duration-300 hover:scale-110 hover:brightness-110 active:scale-95 group focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
      >
        {/* Pulsing beacon badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background"></span>
        </span>

        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.594 4.466 1.72 6.412L3.2 28.8l6.564-1.686a12.74 12.74 0 0 0 6.24 1.626h.006c7.058 0 12.798-5.74 12.798-12.8 0-3.42-1.332-6.634-3.75-9.05a12.72 12.72 0 0 0-9.054-3.69zm0 23.386h-.004a10.6 10.6 0 0 1-5.406-1.48l-.388-.23-3.896 1 1.04-3.796-.254-.39a10.58 10.58 0 0 1-1.628-5.69c0-5.866 4.774-10.64 10.644-10.64a10.57 10.57 0 0 1 7.522 3.118 10.57 10.57 0 0 1 3.114 7.526c0 5.868-4.776 10.642-10.744 10.582zm5.834-7.966c-.32-.16-1.892-.934-2.186-1.04-.292-.108-.506-.16-.72.16-.212.32-.826 1.04-1.012 1.252-.186.214-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.586-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.492.14-.652.144-.144.32-.374.48-.56.16-.188.212-.32.32-.534.106-.214.052-.4-.028-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.612-.01c-.214 0-.56.08-.854.4-.292.32-1.118 1.092-1.118 2.666 0 1.574 1.146 3.094 1.306 3.308.16.212 2.254 3.44 5.462 4.824.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.128.614-.092 1.892-.774 2.158-1.52.266-.748.266-1.388.186-1.522-.078-.134-.292-.214-.612-.374z" />
        </svg>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
