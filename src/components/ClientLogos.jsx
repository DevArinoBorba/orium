import React from 'react';
import { Reveal } from './Reveal';

// 13 Vectorized, Transparent Luxury Client Brand Logos replicating their Official Marks
export const brandLogos = [
  {
    id: 'grande-homem',
    name: 'Grande Homem',
    category: 'Alfaiataria Masculina',
    url: 'https://grande-homem-nova-identidade.vercel.app/',
    svg: (
      <svg viewBox="0 0 210 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Grande Homem">
        {/* Official Monogram G and H with the horizontal bar */}
        <text x="14" y="37" fontFamily="'Cinzel', 'Playfair Display', serif" fontWeight="800" fontSize="38" letterSpacing="-0.02em" fill="currentColor">
          G
        </text>
        <text x="56" y="37" fontFamily="'Cinzel', 'Playfair Display', serif" fontWeight="800" fontSize="38" letterSpacing="-0.02em" fill="currentColor">
          H
        </text>
        {/* Horizontal banner bar crossing through center with GRANDE HOMEM */}
        <rect x="6" y="17" width="88" height="11" rx="1.5" className="fill-[#faf8fd] dark:fill-[#08070c] transition-colors" stroke="url(#brandPurpleGrad)" strokeWidth="0.9" />
        <text x="50" y="25.5" textAnchor="middle" fontFamily="'Cinzel', 'Syne', serif" fontWeight="700" fontSize="6.8" letterSpacing="0.22em" fill="currentColor">
          GRANDE HOMEM
        </text>
        <text x="108" y="21" fontFamily="'Cinzel', 'Syne', serif" fontWeight="700" fontSize="12" letterSpacing="0.16em" fill="currentColor">
          GRANDE HOMEM
        </text>
        <text x="109" y="33" fontFamily="'Manrope', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.28em" fill="url(#brandPurpleGrad)">
          ALFAIATARIA OFICIAL
        </text>
      </svg>
    ),
  },
  {
    id: 'made-in-italy',
    name: 'Made In Italy Outlet',
    category: 'Alfaiataria Masculina Italiana',
    url: 'https://www.madeinitalyoutlet.com.br/',
    svg: (
      <svg viewBox="0 0 205 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Made In Italy Outlet">
        {/* Official Geometric 3D M Monogram from Made In Italy */}
        <circle cx="22" cy="23" r="16" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.35" />
        <path d="M 13 14 H 19 L 22 23 L 25 14 H 31 V 32 H 27 V 20 L 23 29 H 21 L 17 20 V 32 H 13 Z" fill="url(#brandPurpleGrad)" />
        <text x="46" y="21" fontFamily="'Cinzel', 'Syne', serif" fontWeight="700" fontSize="12.5" letterSpacing="0.14em" fill="currentColor">
          MADE IN ITALY
        </text>
        <text x="47" y="33" fontFamily="'Manrope', sans-serif" fontWeight="600" fontSize="8.5" letterSpacing="0.3em" fill="currentColor" fillOpacity="0.65">
          OUTLET OFICIAL
        </text>
      </svg>
    ),
  },
  {
    id: 'marina-premium',
    name: 'Marina Yachting Brasil',
    category: 'Embarcações & Náutica de Alto Padrão',
    url: 'https://marinapremium.vercel.app/',
    svg: (
      <svg viewBox="0 0 215 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Marina Yachting Brasil">
        {/* Official Spinnaker Sail Silhouette with curved horizontal stripes */}
        <polygon points="21,5 25,10 21,9" fill="url(#brandPurpleGrad)" />
        <path d="M 16 11 C 18 9 24 9 26 11 L 25.5 13.5 C 23.5 12 18.5 12 16.5 13.5 Z" fill="currentColor" />
        <path d="M 15 15 C 18 13.5 24 13.5 27 15 L 26.5 17.5 C 23.5 16 18.5 16 15.5 17.5 Z" fill="url(#brandPurpleGrad)" />
        <path d="M 14 19 C 18 17.5 24 17.5 28 19 L 27.5 21.5 C 23.5 20 18.5 20 14.5 21.5 Z" fill="currentColor" />
        <path d="M 14 23 C 18 21.5 24 21.5 28 23 L 27.5 25.5 C 23.5 24 18.5 24 14.5 25.5 Z" fill="url(#brandPurpleGrad)" />
        <path d="M 13 29 C 17 27.5 25 27.5 29 29" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
        <path d="M 15 32 C 18 31 24 31 27 32" stroke="url(#brandPurpleGrad)" strokeWidth="1" strokeLinecap="round" fill="none" />
        <text x="38" y="21" fontFamily="'Cinzel', 'Syne', serif" fontWeight="700" fontSize="12" letterSpacing="0.14em" fill="currentColor">
          MARINA YACHTING
        </text>
        <text x="39" y="33" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.45em" fill="currentColor" fillOpacity="0.7">
          BRASIL
        </text>
      </svg>
    ),
  },
  {
    id: 'infinity-tech',
    name: 'InfinityTech',
    category: 'Distribuidor de Peças de Celular',
    url: 'https://infinitytech.vercel.app/',
    svg: (
      <svg viewBox="0 0 195 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="InfinityTech">
        {/* Official Microchip Circuit Infinity Loop */}
        <path d="M 12 23 C 12 17 18 14 22 19 C 26 24 30 27 34 23 C 38 19 34 15 30 19 C 26 24 22 27 18 23 C 16 20 17 18 20 18" stroke="url(#brandPurpleGrad)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="19" r="1.5" fill="currentColor" />
        <circle cx="18" cy="25" r="1.2" fill="url(#brandPurpleGrad)" />
        <circle cx="28" cy="21" r="1.2" fill="url(#brandPurpleGrad)" />
        <circle cx="30" cy="26" r="1.5" fill="currentColor" />
        <text x="44" y="21" fontFamily="'Syne', sans-serif" fontWeight="900" fontStyle="italic" fontSize="13" letterSpacing="0.06em" fill="currentColor">
          INFINITY<tspan fill="url(#brandPurpleGrad)">TECH</tspan>
        </text>
        <text x="45" y="33" fontFamily="'Manrope', sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="0.22em" fill="currentColor" fillOpacity="0.6">
          DISTRIBUIDORA DE PEÇAS
        </text>
      </svg>
    ),
  },
  {
    id: 'black-shark',
    name: 'Black Shark Imports',
    category: 'Imports & Eletrônicos',
    url: 'https://www.blacksharkimports.com/',
    svg: (
      <svg viewBox="0 0 200 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Black Shark Imports">
        {/* Official Aggressive Shark Head & Chevron Badge */}
        <path d="M 9 29 C 11 20 19 12 29 11 C 33 16 35 20 39 21 C 34 22 31 25 29 29 C 27 29 23 28 19 30 C 15 31 12 32 9 29 Z" fill="url(#brandPurpleGrad)" />
        <path d="M 19 14 C 23 17 26 21 28 25" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 1.5" fill="none" />
        <circle cx="27" cy="16" r="1.8" fill="#c084fc" />
        <polygon points="28,24 30,26 32,24 34,26 36,24 35,28 29,28" fill="currentColor" />
        <text x="48" y="21" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="12.5" letterSpacing="0.08em" fill="currentColor">
          BLACK SHARK
        </text>
        <text x="49" y="33" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.34em" fill="url(#brandPurpleGrad)">
          IMPORTS
        </text>
      </svg>
    ),
  },
  {
    id: 'solucell-tec',
    name: 'Solucell Tec',
    category: 'Tecnologia & Assistência',
    url: 'https://www.instagram.com/solucell.tec?igsh=dHBhMGUyZWZkaTd5',
    svg: (
      <svg viewBox="0 0 190 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Solucell Tec">
        {/* Official Isometric Smartphone with Planetary Orbit Ring */}
        <path d="M 15 11 L 25 7 L 28 25 L 18 29 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeOpacity="0.6" />
        <path d="M 17 13 L 24 10 L 26 24 L 19 27 Z" fill="url(#brandPurpleGrad)" fillOpacity="0.3" />
        <ellipse cx="22" cy="20" rx="14" ry="5.5" stroke="url(#brandPurpleGrad)" strokeWidth="1.8" fill="none" transform="rotate(-25 22 20)" />
        <circle cx="22" cy="28" r="1.2" fill="url(#brandPurpleGrad)" />
        <text x="44" y="21" fontFamily="'Syne', sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.1em" fill="currentColor">
          SOLU<tspan fill="url(#brandPurpleGrad)">CELL</tspan>
        </text>
        <text x="45" y="33" fontFamily="'Manrope', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.28em" fill="currentColor" fillOpacity="0.6">
          TECNOLOGIA
        </text>
      </svg>
    ),
  },
  {
    id: 'mariana-borges',
    name: 'Mariana Borges Studio',
    category: 'Estética Avançada & Lash Designer',
    url: 'https://www.instagram.com/marianaborgesstudio?igsh=MTVsZjBla3gzbXFkNg%3D%3D',
    svg: (
      <svg viewBox="0 0 205 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Mariana Borges Studio">
        {/* Official Luxury Circular Seal with Serif MB Monogram */}
        <circle cx="22" cy="23" r="16" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.35" />
        <text x="22" y="20.5" textAnchor="middle" fontFamily="'Cinzel', 'Playfair Display', serif" fontWeight="700" fontSize="11" fill="url(#brandPurpleGrad)">
          MB
        </text>
        <line x1="14" y1="24.5" x2="30" y2="24.5" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
        <text x="22" y="31.5" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="5" letterSpacing="0.1em" fill="currentColor">
          STUDIO
        </text>
        <text x="47" y="21" fontFamily="'Cinzel', 'Syne', serif" fontWeight="700" fontSize="12" letterSpacing="0.14em" fill="currentColor">
          MARIANA BORGES
        </text>
        <text x="48" y="33" fontFamily="'Manrope', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.32em" fill="currentColor" fillOpacity="0.65">
          LASH DESIGNER
        </text>
      </svg>
    ),
  },
  {
    id: 'lara-store',
    name: 'Lara Store',
    category: 'Fashion & Moda Feminina',
    url: 'https://www.instagram.com/lara.store.m?igsh=MXdvbTZwbWJ4Zjl6Nw%3D%3D&utm_source=qr',
    svg: (
      <svg viewBox="0 0 185 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Lara Store">
        {/* Official Circular Charm Emblem with Satellite Icons */}
        <circle cx="22" cy="23" r="16" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.35" />
        <circle cx="22" cy="23" r="12" stroke="url(#brandPurpleGrad)" strokeWidth="0.8" strokeDasharray="3 2" fill="none" />
        <circle cx="22" cy="8" r="2" fill="url(#brandPurpleGrad)" />
        <circle cx="34" cy="16" r="1.5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="34" cy="30" r="1.5" fill="url(#brandPurpleGrad)" />
        <circle cx="10" cy="30" r="1.5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="10" cy="16" r="1.5" fill="url(#brandPurpleGrad)" />
        <text x="22" y="27" textAnchor="middle" fontFamily="'Sora', sans-serif" fontWeight="800" fontSize="10" fill="url(#brandPurpleGrad)">
          ♥
        </text>
        <text x="46" y="21" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="13.5" letterSpacing="0.16em" fill="currentColor">
          LARA
        </text>
        <text x="47" y="33" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.38em" fill="url(#brandPurpleGrad)">
          STORE
        </text>
      </svg>
    ),
  },
  {
    id: 'gordinho-celular-oficial',
    name: 'Gordinho Celular Oficial',
    category: 'Assistência Técnica & Celulares',
    url: 'https://www.gordinhocelularoficial.com.br/',
    svg: (
      <svg viewBox="0 0 200 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Gordinho Celular Oficial">
        {/* Official Mascot Silhouette Peeking Above */}
        <circle cx="22" cy="15" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.6" />
        <path d="M 15 14 Q 18 9 22 9 Q 26 9 29 14" fill="url(#brandPurpleGrad)" />
        <circle cx="19" cy="14" r="0.9" fill="currentColor" />
        <circle cx="25" cy="14" r="0.9" fill="currentColor" />
        <path d="M 20 17 Q 22 19 24 17" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
        <path d="M 14 27 C 14 21 30 21 30 27" stroke="url(#brandPurpleGrad)" strokeWidth="1.4" fill="none" />
        <text x="43" y="21" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="12.5" letterSpacing="0.08em" fill="currentColor">
          GORDINHO
        </text>
        <text x="44" y="33" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.22em" fill="currentColor" fillOpacity="0.65">
          CELULAR OFICIAL
        </text>
      </svg>
    ),
  },
  {
    id: 'gordinho-celulares-cg',
    name: 'Gordinho Celulares Oficial CG',
    category: 'Smartphones & Assistência Campo Grande/MS',
    url: 'https://www.gordinhocelularesoficial.com.br/',
    svg: (
      <svg viewBox="0 0 195 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Gordinho Celulares Oficial CG">
        {/* Official Smartphone Frame with Cellular Broadcast Wave */}
        <rect x="13" y="9" width="16" height="26" rx="3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeOpacity="0.5" />
        <path d="M 17 13 H 25" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        <circle cx="21" cy="30" r="1.2" fill="url(#brandPurpleGrad)" />
        <path d="M 32 14 C 35 18 35 24 32 28" stroke="url(#brandPurpleGrad)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M 35 11 C 39 17 39 25 35 31" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
        <text x="45" y="21" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.08em" fill="currentColor">
          GORDINHO
        </text>
        <text x="46" y="33" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.25em" fill="url(#brandPurpleGrad)">
          CELULARES CG
        </text>
      </svg>
    ),
  },
  {
    id: 'gordinho-personalizados',
    name: 'Gordinho Personalizados',
    category: 'Brindes & Personalizados Itajaí/SC',
    url: 'https://gordinhopersonalizados.com.br/',
    svg: (
      <svg viewBox="0 0 205 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Gordinho Personalizados">
        {/* Official Gift Package & Personalized Merch Icon */}
        <rect x="12" y="16" width="19" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" strokeOpacity="0.6" />
        <line x1="21.5" y1="16" x2="21.5" y2="32" stroke="url(#brandPurpleGrad)" strokeWidth="1.4" />
        <line x1="12" y1="23" x2="31" y2="23" stroke="url(#brandPurpleGrad)" strokeWidth="1.4" />
        <path d="M 17 13 C 19 10 21.5 16 21.5 16 C 21.5 16 24 10 26 13" stroke="url(#brandPurpleGrad)" strokeWidth="1.4" fill="none" />
        <text x="43" y="21" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.06em" fill="currentColor">
          GORDINHO
        </text>
        <text x="44" y="33" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.22em" fill="url(#brandPurpleGrad)">
          PERSONALIZADOS
        </text>
      </svg>
    ),
  },
  {
    id: 'thais-borges',
    name: 'Thais Borges',
    category: 'Diretora Mary Kay & Estética',
    url: 'https://www.thaisborgesmk.com.br/',
    svg: (
      <svg viewBox="0 0 190 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Thais Borges">
        {/* Official Mary Kay Executive Director Starburst */}
        <circle cx="22" cy="23" r="16" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.3" />
        <circle cx="22" cy="23" r="12" stroke="url(#brandPurpleGrad)" strokeWidth="0.8" fill="none" />
        <text x="22" y="29.5" textAnchor="middle" fontFamily="'Cinzel', serif" fontWeight="700" fontSize="18" fill="url(#brandPurpleGrad)">
          ✦
        </text>
        <text x="46" y="21" fontFamily="'Cinzel', 'Syne', serif" fontWeight="700" fontSize="12.5" letterSpacing="0.12em" fill="currentColor">
          THAIS BORGES
        </text>
        <text x="47" y="33" fontFamily="'Manrope', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.24em" fill="currentColor" fillOpacity="0.65">
          DIRETORA MARY KAY
        </text>
      </svg>
    ),
  },
  {
    id: 'vitrine-traco-fino',
    name: 'Vitrine Traço Fino',
    category: 'Fine Line & Atelier',
    url: 'https://www.instagram.com/vitrinetracofinooficial?igsh=bXBjMXB2MHY1Mmhy&utm_source=qr',
    svg: (
      <svg viewBox="0 0 195 46" className="h-9 sm:h-10 w-auto fill-current" aria-label="Vitrine Traço Fino">
        {/* Official Diamond Needle & Sacred Geometry Fine-Line */}
        <polygon points="22,7 32,22 22,37 12,22" stroke="url(#brandPurpleGrad)" strokeWidth="1.4" fill="none" />
        <circle cx="22" cy="22" r="2.8" fill="currentColor" />
        <line x1="22" y1="10" x2="22" y2="34" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="15" y1="22" x2="29" y2="22" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        <text x="43" y="21" fontFamily="'Cinzel', 'Syne', serif" fontWeight="700" fontSize="12" letterSpacing="0.16em" fill="currentColor">
          TRAÇO FINO
        </text>
        <text x="44" y="33" fontFamily="'Manrope', sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.32em" fill="currentColor" fillOpacity="0.65">
          VITRINE OFICIAL
        </text>
      </svg>
    ),
  },
];

export function ClientLogos() {
  const doubleList = [...brandLogos, ...brandLogos];

  return (
    <section id="marcas" className="relative py-20 border-y border-black/10 dark:border-white/10 bg-[#f8f6fc] dark:bg-[#08070c] overflow-hidden transition-colors duration-300">
      {/* SVG linear gradient definitions */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="brandPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-600 dark:text-purple-400">
            Marcas & Clientes
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Empresas que escalam com a <span className="text-gradient-purple">Orium Digital</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Negócios posicionados com autoridade, tráfego assertivo e alta conversão no digital.
          </p>
        </Reveal>
      </div>

      {/* Pure CSS Infinite Hardware-Accelerated Marquee */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee-infinite flex items-center gap-10 sm:gap-14 py-4">
          {doubleList.map((brand, idx) => (
            <a
              key={`${brand.id}-${idx}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${brand.name} • ${brand.category}`}
              className="group relative flex items-center justify-center px-6 py-3.5 rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.06] hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.25)] shrink-0 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            >
              <div className="transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                {brand.svg}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center items-center gap-2 text-xs text-zinc-600 dark:text-zinc-500 font-medium tracking-widest uppercase">
        <span className="h-1 w-1 rounded-full bg-purple-500" />
        Toque ou passe o cursor nas marcas para acessar o site oficial
        <span className="h-1 w-1 rounded-full bg-purple-500" />
      </div>
    </section>
  );
}

export default ClientLogos;
