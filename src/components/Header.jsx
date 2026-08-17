import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteData';

export function Header({ currentPath = '/', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path, anchor) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path, anchor);
    }
  };

  const navItems = [
    { label: 'Início', path: '/', anchor: 'inicio' },
    { label: 'Serviços', path: '/', anchor: 'servicos' },
    { label: 'Benefícios', path: '/', anchor: 'beneficios' },
    { label: 'Clientes', path: '/', anchor: 'clientes' },
    { label: 'FAQ', path: '/', anchor: 'faq' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-panel border-x-0 border-t-0">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'inicio');
          }}
          className="flex shrink-0 items-center cursor-pointer"
        >
          <picture>
            <source type="image/webp" srcSet="/assets/logo-horizontal.webp" />
            <img
              src="/assets/logo-horizontal.png"
              alt="Orium Digital"
              width="160"
              height="40"
              decoding="async"
              className="h-9 w-auto sm:h-10 transition-transform hover:scale-105"
            />
          </picture>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive =
              (item.path === currentPath && !item.anchor) ||
              (currentPath === '/' && item.path === '/' && item.anchor === 'inicio');

            return (
              <a
                key={item.label}
                href={item.anchor ? `${item.path}#${item.anchor}` : item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path, item.anchor);
                }}
                className={`text-sm font-medium transition-colors hover:text-foreground cursor-pointer ${
                  currentPath === item.path && !item.anchor
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero hidden px-5 py-2.5 text-sm md:inline-flex"
          >
            Agendar consultoria
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-x-0 border-b border-border/80 px-6 py-6 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.anchor ? `${item.path}#${item.anchor}` : item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path, item.anchor);
                }}
                className={`text-base font-medium py-1 transition-colors hover:text-primary-glow ${
                  currentPath === item.path && !item.anchor
                    ? 'text-primary-glow font-bold'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border/50">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero w-full py-3 text-sm flex items-center justify-center gap-2"
              >
                Agendar consultoria gratuita
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
