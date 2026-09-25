import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Quote, ShieldCheck, Award, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { getWhatsAppLink, INSTAGRAM_URL } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

export function AuthorityManifesto() {
  const textRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = textRef.current;
    if (!el) return;

    // Pattern 7: Editorial manifesto scrub animation
    const words = el.querySelectorAll('.word');
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.18, color: '#64748b' },
        {
          opacity: 1,
          color: '#ffffff',
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 55%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const manifestoParagraph =
    'Acreditamos que tráfego sem estratégia é apenas dinheiro jogado fora. O verdadeiro crescimento acontece quando aliamos posicionamento magnético, páginas velozes que convertem e anúncios hipersegmentados direto para o público com poder de compra.';

  return (
    <section id="sobre-nos" className="relative py-28 border-t border-white/10 bg-[#07060b] overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Manifesto & Strategic Vision */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-6">
                <Award className="h-3.5 w-3.5 text-purple-400" />
                Liderança & Manifesto
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Muito além de métricas de vaidade.{' '}
                <span className="text-gradient-purple">Construímos autoridade duradoura.</span>
              </h2>
            </Reveal>

            {/* Scroll-Scrubbed Words Manifesto */}
            <div ref={textRef} className="mt-8 text-xl sm:text-2xl lg:text-3xl font-display font-medium leading-relaxed">
              {manifestoParagraph.split(' ').map((word, index) => (
                <span key={index} className="word inline-block mr-2 transition-colors">
                  {word}
                </span>
              ))}
            </div>

            {/* Founder Quote Card */}
            <Reveal delay={150}>
              <div className="mt-10 p-6 rounded-3xl glass-panel border-purple-500/20 shadow-xl relative">
                <Quote className="h-8 w-8 text-purple-400/30 absolute top-5 right-6 pointer-events-none" />
                <p className="text-sm sm:text-base text-zinc-300 italic leading-relaxed">
                  "Nosso compromisso é tratar cada centavo investido do seu negócio como se fosse nosso. Analisamos os dados diariamente para que sua empresa nunca pare de crescer."
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Moniqui Borges</h4>
                    <p className="text-xs text-purple-300">Fundadora e Estrategista de Marketing Digital</p>
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Instagram"
                    className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                  >
                    <Instagram className="h-4 w-4 text-purple-400" />
                    <span>@oriumdigitaloficial</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <div className="mt-8">
              <MagneticButton
                strength={0.3}
                href={getWhatsAppLink('Olá Moniqui! Vim pelo site da Orium e gostaria de conversar sobre a estratégia da minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                dataCursor="Conversar"
                className="btn-hero px-7 py-3.5 text-sm font-bold shadow-glow"
              >
                <span>Falar diretamente com a Moniqui</span>
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Founder High-Res Portrait Composition */}
          <Reveal delay={100} className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <SpotlightCard
                tiltStrength={8}
                dataCursor="Moniqui Borges"
                className="p-3 border-purple-500/40 bg-gradient-to-b from-purple-950/30 to-[#0e0d16] shadow-2xl overflow-hidden"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <picture>
                    <source type="image/webp" srcSet="/assets/ceo-1.webp" />
                    <img
                      src="/assets/ceo-1.png"
                      alt="Moniqui Borges - Fundadora da Orium Digital"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09080e] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-panel border-white/10 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.25em] font-semibold text-purple-300">
                      Liderança Estratégica
                    </p>
                    <p className="font-display text-lg font-bold text-white mt-0.5">
                      Moniqui Borges
                    </p>
                    <p className="text-xs text-zinc-400">
                      Especialista em Gestão de Tráfego Pago & Escala Digital
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Floating Shield Badge */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl glass-panel border-purple-500/30 shadow-2xl">
                <ShieldCheck className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="text-xs font-bold text-white">+R$ 500k Verba Gerenciada</p>
                  <p className="text-[11px] text-zinc-400">Google, Meta & TikTok Ads</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AuthorityManifesto;
