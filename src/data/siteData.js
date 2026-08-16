export const WHATSAPP_NUMBER = "5567991782883";
export const WHATSAPP_DISPLAY = "(67) 99178-2883";
export const INSTAGRAM_HANDLE = "@oriumdigitaloficial";
export const INSTAGRAM_URL = "https://www.instagram.com/oriumdigitaloficial?igsh=MXMyY3doNHk4NmRsNA%3D%3D&utm_source=qr";

export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined') {
    if (window.fbq) {
      window.fbq('track', eventName, params);
    }
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
    console.log(`[Event Tracked] ${eventName}:`, params);
  }
}

export function getWhatsAppLink(customMessage) {
  const message = customMessage || "Olá, vim pelo site da Orium Digital e quero agendar uma consultoria gratuita.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppLink(serviceTitle) {
  const message = `Olá, vim pelo site da Orium Digital e tenho interesse no serviço de ${serviceTitle}. Quero agendar uma consultoria gratuita.`;
  return getWhatsAppLink(message);
}

export const stats = [
  { value: 30, prefix: "+", suffix: "", label: "empresas posicionadas no digital" },
  { value: 500, prefix: "+R$ ", suffix: " mil", label: "em verba gerenciada" },
  { value: 3, prefix: "", suffix: " canais", label: "Google Ads, Meta Ads e TikTok Ads" },
  { value: 1, prefix: "1:", suffix: "", label: "atendimento estratégico e personalizado" }
];

export const serviceCategories = [
  { id: 'all', label: 'Todos os Serviços' },
  { id: 'trafego', label: 'Tráfego Pago' },
  { id: 'sites', label: 'Sites & Landing Pages' },
  { id: 'social', label: 'Redes Sociais & Conteúdo' },
  { id: 'ia', label: 'Criação & Vídeos com IA' },
  { id: 'branding', label: 'Branding & Estratégia' },
];

export const services = [
  {
    id: 'trafego-pago',
    category: 'trafego',
    icon: "Target",
    title: "Gestão de Tráfego Pago",
    desc: "Google Ads, Meta Ads e TikTok Ads com foco em leads qualificados, vendas e crescimento previsível.",
    deliverables: [
      "Planejamento de campanhas focado no ICP (cliente ideal)",
      "Segmentação avançada e testes A/B contínuos",
      "Otimização diária de orçamento e Custo por Lead (CPL)",
      "Relatórios transparentes com métricas de vendas e ROAS"
    ]
  },
  {
    id: 'google-ads',
    category: 'trafego',
    icon: "Search",
    title: "Google Ads",
    desc: "Campanhas para empresas que querem aparecer no momento certo para clientes que já estão pesquisando pelo serviço.",
    deliverables: [
      "Rede de Pesquisa com palavras-chave de alta intenção",
      "Campanhas de Google Meu Negócio / Maps para negócios locais",
      "Remarketing em Display e YouTube",
      "Configuração precisa de tags de conversão e GA4"
    ]
  },
  {
    id: 'meta-ads',
    category: 'trafego',
    icon: "Megaphone",
    title: "Meta Ads",
    desc: "Anúncios estratégicos no Instagram e Facebook para atrair, engajar e converter clientes.",
    deliverables: [
      "Funis de atração, engajamento e conversão direta",
      "Anúncios em Reels, Stories e Feed de alta persuasão",
      "Públicos personalizados e Lookalike qualificados",
      "Integração direta com WhatsApp e Direct"
    ]
  },
  {
    id: 'tiktok-ads',
    category: 'trafego',
    icon: "Music2",
    title: "TikTok Ads",
    desc: "Campanhas criativas para marcas que querem alcançar novos públicos com vídeos e formatos modernos.",
    deliverables: [
      "Criativos nativos no formato dinâmico do TikTok",
      "Segmentação por comportamento de compra e interesses",
      "Campanhas de engajamento e captação de leads em escala",
      "Estratégia de viralização com apelo comercial"
    ]
  },
  {
    id: 'redes-sociais',
    category: 'social',
    icon: "Users",
    title: "Gestão de Redes Sociais",
    desc: "Planejamento, conteúdo, posicionamento, identidade visual e presença digital profissional.",
    deliverables: [
      "Calendário editorial estratégico alinhado às vendas",
      "Design e copywriting profissional para Feed e Carrosséis",
      "Roteiros estratégicos para Reels e Stories diários",
      "Otimização de perfil e bio orientada à conversão"
    ]
  },
  {
    id: 'sites-lp',
    category: 'sites',
    icon: "MonitorSmartphone",
    title: "Sites e Landing Pages",
    desc: "Páginas modernas, rápidas, responsivas e pensadas para gerar conversão.",
    deliverables: [
      "Design exclusivo, sofisticado e 100% responsivo",
      "Copywriting persuasivo e arquitetura de conversão",
      "Carregamento ultrarrápido com otimização técnica de SEO",
      "Integração nativa com WhatsApp, Pixel e CRMs"
    ]
  },
  {
    id: 'ecommerce',
    category: 'sites',
    icon: "ShoppingBag",
    title: "Ecommerce",
    desc: "Estruturação visual, estratégia comercial, campanhas e otimização para lojas virtuais.",
    deliverables: [
      "Design de vitrines virtuais e páginas de produto atrativas",
      "Campanhas de Catálogo no Meta Ads e Google Shopping",
      "Estratégias de recuperação de carrinho e ticket médio",
      "Análise de taxas de conversão e checkout"
    ]
  },
  {
    id: 'branding',
    category: 'branding',
    icon: "Sparkles",
    title: "Branding e Posicionamento",
    desc: "Construção de marca, identidade, narrativa e comunicação estratégica.",
    deliverables: [
      "Definição de tom de voz, proposta única de valor e narrativa",
      "Manual de identidade visual e aplicações de marca",
      "Posicionamento premium para sair da guerra de preços",
      "Diretrizes de comunicação comercial e institucional"
    ]
  },
  {
    id: 'design-criativos',
    category: 'criativos',
    icon: "Palette",
    title: "Design e Criativos",
    desc: "Artes publicitárias, criativos para anúncios, posts, banners e materiais comerciais.",
    deliverables: [
      "Criativos estáticos e animados para anúncios de alta performance",
      "Banners para campanhas promocionais e lançamentos",
      "Apresentações comerciais e materiais de vendas",
      "Templates padronizados para consistência visual"
    ]
  },
  {
    id: 'videos-ia',
    category: 'ia',
    icon: "Bot",
    title: "Vídeos com IA",
    desc: "Vídeos modernos usando inteligência artificial para campanhas, redes sociais e anúncios.",
    deliverables: [
      "Avatares hiper-realistas para anúncios escaláveis",
      "Locuções neurais profissionais e dublagem de conteúdos",
      "Geração de cenários e elementos visuais com IA",
      "Produção ágil de múltiplos testes criativos"
    ]
  },
  {
    id: 'edicao-videos',
    category: 'criativos',
    icon: "Clapperboard",
    title: "Edição de Vídeos",
    desc: "Edição profissional para Reels, TikTok, anúncios e conteúdos de autoridade.",
    deliverables: [
      "Cortes dinâmicos, legendas modernas e efeitos de retenção",
      "Tratamento de áudio, cor e trilha sonora imersiva",
      "Formatação otimizada para todas as redes sociais",
      "Foco em reter a atenção nos primeiros 3 segundos"
    ]
  }
];

export const benefits = [
  "Mais clientes qualificados",
  "Mais visibilidade no digital",
  "Campanhas com estratégia e dados",
  "Redes sociais com aparência profissional",
  "Criativos mais persuasivos",
  "Sites e landing pages com foco em conversão",
  "Posicionamento mais forte",
  "Comunicação mais clara",
  "Maior autoridade no mercado",
  "Mais oportunidades de venda",
  "Atendimento personalizado",
  "Estratégia completa para crescimento"
];

export const methodologySteps = [
  {
    step: "01",
    title: "Diagnóstico & Análise Estratégica",
    desc: "Analisamos profundamente seu modelo de negócio, histórico de campanhas, público-alvo e concorrentes para mapear as maiores oportunidades de crescimento.",
    icon: "Target"
  },
  {
    step: "02",
    title: "Planejamento, Copywriting & Criativos",
    desc: "Criamos a esteira estratégica: mensagens persuasivas, criativos de alto impacto e estruturação das páginas para gerar máxima conversão.",
    icon: "Palette"
  },
  {
    step: "03",
    title: "Configuração, Anúncios & Lançamento",
    desc: "Implementamos as campanhas no Google, Meta e TikTok com rastreamento avançado, públicos qualificados e segmentações precisas.",
    icon: "Megaphone"
  },
  {
    step: "04",
    title: "Otimização Contínua & Escala",
    desc: "Acompanhamos as métricas diariamente para reduzir custos por lead, aumentar o retorno financeiro (ROAS) e escalar o faturamento da sua empresa.",
    icon: "TrendingUp"
  }
];

export const clients = [
  {
    name: "Black Shark Imports",
    metric: "+240% em Leads",
    tag: "Tráfego & Vendas",
    url: "https://www.instagram.com/black_sharkimports?igsh=MWY4dXptOTZoeWtucg%3D%3D&utm_source=qr"
  },
  {
    name: "Lara Store",
    metric: "Escala no E-commerce",
    tag: "Meta Ads & Catálogo",
    url: "https://www.instagram.com/lara.store.m?igsh=MXdvbTZwbWJ4Zjl6Nw%3D%3D&utm_source=qr"
  },
  {
    name: "Gordinho Celulares Oficial CG",
    metric: "+180% Visibilidade",
    tag: "Negócio Local",
    url: "https://www.instagram.com/gordinhocelularesoficialcg?igsh=MWRwanFnbXB4aDBkbA%3D%3D&utm_source=qr"
  },
  {
    name: "Made In Italy São Paulo",
    metric: "Autoridade Premium",
    tag: "Branding & Criativos",
    url: "https://www.instagram.com/madeinitalysaopaulo?igsh=MWgyMTV1bmRhMWJ2aQ%3D%3D&utm_source=qr"
  },
  {
    name: "Mariana Borges Studio",
    metric: "Agenda Lotada",
    tag: "Captação de Clientes",
    url: "https://www.instagram.com/marianaborgesstudio?igsh=MTVsZjBla3gzbXFkNg%3D%3D"
  },
  {
    name: "Vitrine Traço Fino",
    metric: "Posicionamento Forte",
    tag: "Social Media & Tráfego",
    url: "https://www.instagram.com/vitrinetracofinooficial?igsh=bXBjMXB2MHY1Mmhy&utm_source=qr"
  },
  {
    name: "Gordinho Celular Oficial",
    metric: "Crescimento Constante",
    tag: "Anúncios Segmentados",
    url: "https://www.instagram.com/gordinhocelularoficial?igsh=d2ZvYjNrYXlhd2oy"
  },
  {
    name: "Solucell Tec",
    metric: "Geração Contínua de Leads",
    tag: "Google Ads & WhatsApp",
    url: "https://www.instagram.com/solucell.tec?igsh=dHBhMGUyZWZkaTd5"
  }
];

export const testimonials = [
  {
    name: "Lucas Mendes",
    company: "Black Shark Imports",
    role: "Diretor Comercial",
    rating: 5,
    metric: "+240% em Leads",
    text: "O atendimento da Moniqui e de toda a Orium é diferenciado. Nossas mensagens no WhatsApp multiplicaram e os clientes chegam muito mais conscientes do valor do produto."
  },
  {
    name: "Mariana Borges",
    company: "Mariana Borges Studio",
    role: "Proprietária",
    rating: 5,
    metric: "Agenda 100% Preenchida",
    text: "A presença digital que a Orium construiu elevou o nível do meu estúdio. Deixamos de brigar por preço e passamos a ser referência no nosso segmento."
  },
  {
    name: "Rodrigo Almeida",
    company: "Lara Store",
    role: "Gestor de E-commerce",
    rating: 5,
    metric: "ROAS 4.6x",
    text: "Tráfego assertivo e criativos de altíssimo nível. A Orium entende de verdade o comportamento de compra do cliente online."
  }
];

export const recentActivities = [
  { text: "Empresa de Varejo agendou consultoria gratuita", time: "há 8 minutos", city: "Campo Grande/MS" },
  { text: "Novo cliente iniciou gestão de Google Ads", time: "há 25 minutos", city: "São Paulo/SP" },
  { text: "E-commerce de moda aumentou verba de Meta Ads", time: "há 42 minutos", city: "Curitiba/PR" },
  { text: "Clínica de Estética agendou diagnóstico estratégico", time: "há 1 hora", city: "Brasília/DF" }
];

export const faqItems = [
  {
    q: "A Orium Digital atende empresas de quais segmentos?",
    a: "Atendemos empresas de diversos segmentos, principalmente negócios que desejam atrair mais clientes, fortalecer sua presença digital e vender mais por meio de estratégias online."
  },
  {
    q: "Vocês fazem apenas tráfego pago?",
    a: "Não. A Orium Digital atua de forma completa com tráfego pago, gestão de redes sociais, criativos, sites, landing pages, ecommerce, branding, copywriting, vídeos com IA e estratégias digitais."
  },
  {
    q: "As campanhas são feitas no Google Ads e Meta Ads?",
    a: "Sim. Trabalhamos com Google Ads, Meta Ads e também TikTok Ads, de acordo com a estratégia ideal para cada negócio."
  },
  {
    q: "Vocês criam landing pages para captação de leads?",
    a: "Sim. Criamos landing pages modernas, responsivas e focadas em conversão para captar leads qualificados."
  },
  {
    q: "Como funciona a consultoria gratuita?",
    a: "A empresa entra em contato pelo WhatsApp, entendemos o momento do negócio e indicamos os melhores caminhos para atrair mais clientes no digital."
  },
  {
    q: "A Orium atende empresas de outras cidades?",
    a: "Sim. Atendemos empresas de qualquer cidade de forma online, com comunicação estratégica e acompanhamento personalizado."
  },
  {
    q: "Em quanto tempo começo a ter resultados?",
    a: "Os resultados dependem do segmento, investimento, oferta e estrutura atual da empresa. O foco da Orium é criar uma estratégia consistente, com análise, otimização e evolução contínua."
  }
];

export const serviceOptions = [
  "Gestão de tráfego pago",
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "Gestão de redes sociais",
  "Site ou landing page",
  "Ecommerce",
  "Branding",
  "Design e criativos",
  "Vídeos com IA",
  "Edição de vídeos",
  "Consultoria estratégica"
];

export const aboutParagraphs = [
  "A Orium Digital nasceu de uma história real de coragem, visão e transformação.",
  "Fundada por Moniqui Borges, estrategista de marketing digital, gestora de tráfego pago e empreendedora, a Orium surgiu a partir de uma jornada construída com estudo, prática, desafios e uma decisão clara: transformar conhecimento em resultado para empresas que desejam crescer no digital com posicionamento, autoridade e estratégia.",
  "Antes de criar a Orium, Moniqui mergulhou profundamente no universo do marketing digital, estudando tráfego pago, Google Ads, Meta Ads, TikTok Ads, criação de criativos, copywriting, landing pages, ecommerce, redes sociais, inteligência artificial e vendas online. Ao longo dessa trajetória, percebeu que muitas empresas tinham produtos excelentes, bons serviços e grande potencial, mas não conseguiam comunicar seu valor da forma certa no ambiente digital.",
  "Foi dessa percepção que nasceu a Orium Digital.",
  "Mais do que uma agência, a Orium é uma empresa de estratégia digital criada para posicionar marcas com sofisticação, clareza e intenção. Nosso propósito é construir presenças digitais fortes, campanhas inteligentes e experiências visuais capazes de gerar conexão, confiança e conversão.",
  "Atuamos de forma completa, unindo tráfego pago, gestão de redes sociais, criação de criativos, desenvolvimento de sites e landing pages, copywriting, automações, funis de vendas, ecommerce e inteligência artificial. Cada projeto é pensado de forma personalizada, com olhar estratégico, estética premium e foco em performance.",
  "Acreditamos que uma marca forte não nasce por acaso. Ela é construída com posicionamento, consistência, identidade, dados e comunicação persuasiva. Por isso, cada detalhe desenvolvido pela Orium carrega um objetivo: fazer com que empresas sejam vistas, lembradas, desejadas e escolhidas.",
  "À frente da Orium Digital, Moniqui Borges une sensibilidade criativa, visão comercial e estratégia de crescimento para ajudar negócios a saírem do comum e ocuparem um lugar de destaque no mercado.",
  "A Orium Digital existe para transformar presença digital em autoridade, autoridade em confiança e confiança em vendas."
];
