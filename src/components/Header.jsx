import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteData';
import { MagneticButton } from './MagneticButton';
import ThemeToggle from './ThemeToggle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Header({ currentPath = '/', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const bar = progressBarRef.current;
    if (!bar) return;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const handleNavClick = (path, anchor) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path, anchor);
    }
  };

  const navItems = [
    { label: 'Início', path: '/', anchor: 'inicio' },
    { label: 'Serviços', path: '/', anchor: 'servicos' },
    { label: 'Marcas', path: '/', anchor: 'marcas' },
    { label: 'Performance', path: '/', anchor: 'simulador' },
    { label: 'Método', path: '/', anchor: 'metodologia' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className="absolute inset-x-0 top-0 h-[2.5px] origin-left bg-gradient-to-r from-purple-600 via-fuchsia-400 to-indigo-300 shadow-[0_0_12px_rgba(168,85,247,0.9)] z-50 pointer-events-none"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />

      {/* Main Glass Bar */}
      <div className="glass-panel border-x-0 border-t-0 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand Logo with Magnetic Hover */}
          <MagneticButton
            strength={0.25}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/', 'inicio');
            }}
            dataCursor="Orium"
            ariaLabel="Página inicial Orium Digital"
            className="flex shrink-0 items-center cursor-pointer"
          >
            <picture>
              <img
                src="/assets/logo-horizontal.png"
                alt="Orium Digital"
                width="160"
                height="40"
                decoding="async"
                className="h-9 w-auto sm:h-10 transition-transform duration-300 hover:scale-105 hidden dark:block filter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              />
              <img
                src="/assets/logo-horizontal-light-theme.png"
                alt="Orium Digital"
                width="160"
                height="40"
                decoding="async"
                className="h-9 w-auto sm:h-10 transition-transform duration-300 hover:scale-105 block dark:hidden filter drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              />
            </picture>
          </MagneticButton>

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
                  data-cursor="Navegar"
                  className={`relative text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-white cursor-pointer py-1 group ${
                    isActive ? 'text-zinc-950 dark:text-white font-semibold' : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Minimalist Theme Toggle + Magnetic CTA + Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Minimalist Theme Toggle Button */}
            <ThemeToggle />

            {/* Magnetic CTA Button */}
            <MagneticButton
              strength={0.35}
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              dataCursor="WhatsApp"
              className="btn-hero hidden px-6 py-2.5 text-sm md:inline-flex shadow-glow"
            >
              <Sparkles className="h-4 w-4 text-purple-200" />
              Agendar Consultoria
            </MagneticButton>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/10 text-zinc-900 hover:bg-black/5 dark:border-white/10 dark:text-white lg:hidden dark:hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-x-0 border-b border-black/10 dark:border-white/10 px-6 py-6 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.anchor ? `${item.path}#${item.anchor}` : item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path, item.anchor);
                }}
                className={`text-base font-medium py-1 transition-colors hover:text-purple-600 dark:hover:text-purple-300 ${
                  currentPath === item.path && !item.anchor
                    ? 'text-purple-600 dark:text-purple-300 font-bold'
                    : 'text-zinc-700 dark:text-zinc-400'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-black/10 dark:border-white/10">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero w-full py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="h-4 w-4" />
                Agendar Consultoria Gratuita
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
