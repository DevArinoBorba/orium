---
name: Orium Digital
description: "Estética dark mode de alta precisão com roxo elétrico luminoso, glassmorphism espacial e engenharia de conversão."
colors:
  primary: "oklch(54.5% 0.28 295)"
  primary-glow: "oklch(66% 0.24 296)"
  primary-deep: "oklch(37% 0.2 300)"
  primary-foreground: "oklch(98.5% 0.005 84.6)"
  background: "oklch(13% 0 0)"
  foreground: "oklch(96.2% 0.008 84.6)"
  surface: "oklch(17% 0.01 300)"
  surface-elevated: "oklch(21% 0.02 300)"
  secondary: "oklch(22% 0.03 300)"
  muted: "oklch(22% 0.02 300)"
  muted-foreground: "oklch(68% 0.015 84.6)"
  accent: "oklch(26% 0.06 298)"
  border: "oklch(100% 0 0 / 0.1)"
typography:
  display:
    fontFamily: "Sora, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Sora, system-ui, -apple-system, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Sora, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "12px"
  md: "14px"
  lg: "16px"
  "2xl": "24px"
  "3xl": "28px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-glow}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  chip-badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary-glow}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
---

# Design System: Orium Digital

## Overview

**Creative North Star: "The Nebula Precision" (A Precisão Nebular)**

O sistema visual da Orium Digital foi construído para transmitir a fusão exata entre profundidade estratégica, autoridade de mercado e inovação tecnológica. Inspirado na imensidão e clareza do espaço profundo iluminado por energias nebulares, o design adota uma atmosfera predominantemente escura (*obsidian dark*), pontuada por acentos luminosos em roxo elétrico, painéis translúcidos em *glassmorphism* e micro-interações de alta resposta tátil.

A interface rejeita a poluição visual, pop-ups agressivos e gradientes saturados sem critério. Em vez disso, equilibra a imponência tipográfica geométrica da família **Sora** com a legibilidade cristalina da **Manrope**, guiando o olhar do visitante por meio de cartões com iluminação radial sensível ao cursor (*spotlight effect*), dados de performance destacados e pontos de contato claros e convidativos para conversão via WhatsApp.

**Key Characteristics:**
- **Atmosfera Cósmica Sofisticada:** Fundo escuro profundo (`oklch(13% 0 0)`) com camadas de superfícies translúcidas que criam hierarquia sem peso visual excessivo.
- **Roxo Nebular de Alto Contraste:** Acentos em roxo elétrico (`oklch(54.5% 0.28 295)`) e brilho luminoso (`oklch(66% 0.24 296)`) reservados exclusivamente para pontos focais, CTAs e métricas de impacto.
- **Glassmorphism com Desfoque Óptico:** Painéis com desfoque de 18px (`backdrop-filter: blur(18px) saturate(140%)`) e bordas ultrafinas de 1px em transparência branca (`oklch(100% 0 0 / 0.1)`).
- **Interatividade Tátil e Iluminação Direcionada:** Efeito de *spotlight* radial nos cards, acompanhando o movimento do mouse para conferir sensação de profundidade e vida ao layout.

## Colors

A paleta de cores estrutura-se em torno de uma base escura neutra e pura, enriquecida por tons violeta/púrpura elétricos que simbolizam inteligência, escala e sofisticação digital.

### Primary
- **Electric Nebula Violet** (`oklch(54.5% 0.28 295)`): Cor principal de ação, botões de conversão (CTAs), anéis de foco e elementos de alto destaque.
- **Luminous Violet Glow** (`oklch(66% 0.24 296)`): Variação iluminada usada em estados *hover*, textos com gradiente luminoso e badges de destaque.
- **Deep Violet Plum** (`oklch(37% 0.2 300)`): Tom escuro profundo utilizado na extremidade de gradientes e em sombras de ambientação.
- **Pure Crisp White** (`oklch(98.5% 0.005 84.6)`): Contraste absoluto para textos dentro de botões primários e ícones de alta visibilidade.

### Secondary
- **Charcoal Surface Slate** (`oklch(22% 0.03 300)`): Superfície secundária usada em containers de apoio, divisores sutis e elementos desativados.

### Neutral
- **Obsidian Cosmos Background** (`oklch(13% 0 0)`): Fundo primordial da aplicação, garantindo imersão e reduzindo fadiga visual.
- **Midnight Glass Surface** (`oklch(17% 0.01 300)`): Base tonal para cards, modais e containers com efeito vidro.
- **Elevated Charcoal Violet** (`oklch(21% 0.02 300)`): Camada de elevação para popovers e menus suspensos.
- **Snow White Text** (`oklch(96.2% 0.008 84.6)`): Cor normativa para títulos, rótulos e textos principais de alta legibilidade.
- **Subdued Pewter Gray** (`oklch(68% 0.015 84.6)`): Texto secundário, descrições de apoio e metadados.
- **Glass White Border** (`oklch(100% 0 0 / 0.1)`): Linhas delimitadoras ultrafinas para bordas estruturais em cards e divisores.

### Named Rules
**The 10% Luminous Accent Rule.** O roxo primário e seus brilhos nunca devem cobrir mais de 10% da área útil da viewport. Sua força reside no contraste com a vastidão escura.
**The Ghost Border Rule.** Nenhum card ou container flutuante deve existir sem sua borda perimetral de 1px com transparência de 10% a 15%, garantindo separação tonal perfeita contra o fundo.

## Typography

A tipografia combina o corte contemporâneo e geométrico da **Sora** para títulos e elementos de autoridade com a neutralidade precisa e espaçamento rítmico da **Manrope** para textos de leitura contínua.

**Display Font:** Sora, ui-sans-serif, system-ui, sans-serif
**Body Font:** Manrope, ui-sans-serif, system-ui, sans-serif

**Character:** Autoridade tecnológica executiva, precisão comercial e máxima clareza em telas digitais de qualquer densidade.

### Hierarchy
- **Display** (Bold 700/800, `clamp(2.5rem, 5vw, 4rem)`, line-height 1.15): Título principal do Hero e chamadas de abertura de impacto máximo.
- **Headline** (Bold 700, `2.25rem` / 36px, line-height 1.25): Títulos de seções principais (Serviços, Metodologia, Calculadora, Depoimentos).
- **Title** (SemiBold 600, `1.25rem` a `1.5rem` / 20-24px, line-height 1.4): Títulos de cards de serviço, etapas da metodologia e nomes de clientes.
- **Body** (Regular 400 ou Medium 500, `1rem` / 16px, line-height 1.6, max 68ch): Parágrafos descritivos, respostas do FAQ e textos de proposta de valor.
- **Label** (SemiBold 600, `0.75rem` / 12px, letter-spacing `0.05em`, uppercase): Badges de categoria, tags de métricas e rastreadores de etapa.

### Named Rules
**The Dual-Font Authority Rule.** Todo título estrutural (H1 a H4) utiliza obrigatoriamente a família `Sora`; todo texto de parágrafo, botão, rótulo e metadado utiliza `Manrope`.
**The Gradient Title Accent Rule.** Em cada título principal de seção, apenas uma ou duas palavras-chave recebem o preenchimento em gradiente violeta luminoso (`text-gradient-purple`).

## Layout

O modelo espacial é centralizado e balanceado, estruturado em uma grade flexível de 12 colunas com limites seguros de leitura e respiro vertical generoso.

- **Container Máximo:** `max-w-7xl` (1280px), com preenchimento lateral adaptativo de `px-4 sm:px-6 lg:px-8`.
- **Ritmo Vertical:** Seções principais separadas por `py-20 sm:py-24` (80px a 96px), com divisores horizontais sutis (`border-t border-border`).
- **Espaçamento Modular:** Escala em múltiplos de 4px/8px (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **Grid de Serviços & Cases:** Disposição responsiva em 1 coluna (mobile), 2 colunas (tablets/laptops) e 3 colunas (desktop amplo) com `gap-6` ou `gap-8`.

## Elevation & Depth

O sistema utiliza **profundidade óptica em camadas (tonal layering + glassmorphism)** em vez de sombras pretas tradicionais que escureceriam desnecessariamente a paleta dark mode. A elevação é expressa por desfoque de fundo e halos difusos em tons violeta.

### Shadow Vocabulary
- **Ambient Glow** (`box-shadow: 0 0 60px -12px color-mix(in oklab, var(--primary) 55%, transparent)`): Halo violeta difuso aplicado a botões heróicos e cards de resultado projetado.
- **Hover Superglow** (`box-shadow: 0 0 80px -8px color-mix(in oklab, var(--primary) 65%, transparent)`): Brilho ampliado emitido ao posicionar o cursor sobre o botão principal de conversão.
- **Elegant Drop** (`box-shadow: 0 20px 50px -20px color-mix(in oklab, var(--primary) 35%, transparent)`): Projeção direcional suave aplicada a modais e painéis suspensos.

### Named Rules
**The Luminescence Over Shadow Rule.** A profundidade no tema escuro é criada pela luz emitida (halos roxos) e pela translucidez com desfoque, nunca por sombras pretas opacas.
**The Spotlight Interactive Rule.** Todo card interativo deve responder à posição do mouse com um gradiente radial suave (`radial-gradient(400px circle at X Y, rgba(122, 31, 255, 0.15), transparent 60%)`).

## Shapes

A linguagem de formas é orgânica, moderna e amigável, suavizando a rigidez de um fundo escuro corporativo com cantos amplamente arredondados.

- **Botões de Ação e Badges:** Formato pílula contínua (`rounded-full` / `9999px`), transmitindo fluidez e convite ao clique.
- **Cards e Painéis:** Raios amplos de curvatura (`rounded-3xl` / 24px a 28px) que acolhem o conteúdo e delimitam suavemente os módulos.
- **Campos de Entrada e Dropdowns:** Curvatura moderada (`rounded-xl` / 12px) com bordas de contraste sutil e foco em violeta elétrico.
- **Ícones e Acessórios:** Envoltos em círculos perfeitos (`rounded-full`) com fundo translúcido e ícones em roxo luminoso.

## Components

### Buttons
- **Shape:** Pílula completa (`rounded-full` / `9999px`).
- **Primary Button (`.btn-hero`):** Fundo em gradiente linear (`linear-gradient(135deg, var(--primary), var(--primary-deep))`), texto em branco puro, brilho ambiente violeta (`var(--shadow-glow)`), padding `12px 24px`, fonte `Manrope` peso 600. No hover: elevação de `-2px`, brilho ampliado e aumento de brilho em 12%.
- **Outline Button (`.btn-outline-hero`):** Fundo translúcido a 4% (`oklch(100% 0 0 / 0.04)`), borda de 1px a 22% de branco, texto claro. No hover: borda e fundo transitam suavemente para o roxo primário com elevação de `-2px`.
- **Secondary / Ghost:** Fundo transparente com texto em cinza claro e transição direta para cor primária no hover.

### Spotlight Cards (`SpotlightCard`)
- **Corner Style:** `rounded-3xl` (24px).
- **Background:** Painel de vidro escuro (`bg-card` / `oklch(17% 0.01 300)`) com borda de 1px (`border-border`).
- **Interactive Layer:** Camada interna que calcula coordenadas do mouse e projeta um gradiente radial violeta com opacidade suave.

### Badges e Chips
- **Style:** Fundo em roxo escuro acetinado (`bg-accent/40`), borda fina em roxo primário (`border-primary/40`), texto em roxo luminoso (`text-primary-glow`), formato pílula com ícone proporcional (14px).

### Inputs / Formulários
- **Style:** Fundo em superfície escura (`bg-surface`), borda de 1px translúcida (`border-input`), raio `rounded-xl` (12px), texto claro.
- **Focus:** Borda transita para o roxo primário (`focus:border-primary`) com anel suave (`ring-primary`) e remoção do outline padrão do navegador.

### Header & Navegação
- **Style:** Barra fixa no topo com efeito vidro (`glass-panel`), altura de 64px (`h-16`), logotipo horizontal da Orium alinhado à esquerda, links de navegação centrais e botão CTA direto para WhatsApp à direita. Em mobile: botão hambúrguer circular com menu expansível com animação de fade suave.

### Traffic Calculator (Simulador de Tráfego)
- **Signature Component:** Simulador interativo com seletor de nicho, slider de orçamento mensal e projeções em tempo real de alcance, cliques, leads e faturamento estimado, com botão dinâmico que encaminha os dados preenchidos diretamente para o WhatsApp da consultoria.

## Do's and Don'ts

### Do:
- **Do** manter o fundo estritamente no tom escuro profundo (`oklch(13% 0 0)`) para preservar a assinatura de autoridade e estética cósmica da Orium Digital.
- **Do** utilizar a família tipográfica `Sora` exclusivamente em títulos e chamadas, e `Manrope` para o corpo e elementos funcionais.
- **Do** aplicar o efeito de halo luminoso violeta (`shadow-glow`) apenas em botões principais de ação e pontos de conversão direta.
- **Do** envolver todo card interativo no padrão `SpotlightCard` para manter a coerência de resposta tátil.
- **Do** garantir que todos os links de conversão via WhatsApp incluam parâmetros de mensagem contextualizados com o serviço ou simulação em foco.

### Don't:
- **Don't** utilizar fundos brancos ou cinzas claros em páginas ou seções globais; o sistema é nativamente concebido para o dark mode imersivo.
- **Don't** aplicar gradientes roxos em textos de parágrafo longos; o gradiente `text-gradient-purple` é restrito a palavras de destaque em títulos.
- **Don't** empregar sombras pretas duras e opacas em containers flutuantes; a elevação deve ser criada por translucidez óptica (`glass-panel`) e halos de luz.
- **Don't** utilizar cantos pontiagudos ou retos em botões e cards de destaque; o padrão geométrico da marca adota raios amplos (`rounded-3xl` e `rounded-full`).
- **Don't** remover os atributos semânticos de acessibilidade e foco visível dos elementos interativos.
