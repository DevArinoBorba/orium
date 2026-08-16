# 🚀 Orium Digital - Website

Clone e remodelagem do site oficial da **Orium Digital** (`https://www.oriumdigital.com.br/`).

Construído com **React**, **Vite**, **Tailwind CSS** e **Lucide Icons**.

---

## 📁 Estrutura do Projeto

```
orium/
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── logo-horizontal.png
│       ├── ceo-1.png
│       ├── ceo-2.png
│       └── og-preview.png
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho fixo com glassmorphism e menu mobile
│   │   ├── Footer.jsx           # Rodapé com dados de contato e formulário rápido
│   │   ├── FloatingWhatsApp.jsx # Botão flutuante do WhatsApp com efeito glow
│   │   └── Reveal.jsx           # Componente de animação ao rolar a página
│   ├── pages/
│   │   ├── Home.jsx             # Página inicial completa (Hero, Serviços, Benefícios, Clientes, Sobre, FAQ)
│   │   ├── About.jsx            # Página sobre a fundadora e história da agência
│   │   └── Contact.jsx          # Página de contato com formulário integrado ao WhatsApp
│   ├── data/
│   │   └── siteData.js          # Centralização de dados (textos, WhatsApp, Instagram, serviços, clientes)
│   ├── App.jsx                  # Roteamento e layout global
│   ├── index.css                # Estilos globais, Tailwind, tema e glassmorphism
│   └── main.jsx                 # Ponto de entrada React
├── index.html                   # HTML com fontes Google e metadados SEO
├── package.json                 # Dependências e scripts
├── vite.config.js               # Configuração do Vite
└── tailwind.config.js           # Tokens de design do Tailwind CSS
```

---

## 🛠️ Como Rodar Localmente

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará acessível em `http://localhost:3000`.

3. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## 🎨 Como Customizar e Remodelar

- **Textos, Telefone e Links**: Edite o arquivo `src/data/siteData.js` para trocar o número de WhatsApp, link do Instagram, serviços, benefícios e perguntas frequentes.
- **Cores e Estilos**: Edite as variáveis CSS em `src/index.css` e tokens em `tailwind.config.js`.
- **Componentes**: Cada seção está organizada de forma modular na pasta `src/components/` e `src/pages/`.
