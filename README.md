# Dragon Realm - Site RPG Medieval

## 🐉 Visão Geral

Dragon Realm é um site temático de RPG medieval focado em dragões e magia, desenvolvido com as mais modernas tecnologias web. O projeto visa criar uma experiência imersiva que transporta os usuários para um mundo épico de fantasia medieval.

## 🛠️ Stack Tecnológica

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Material UI 7
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Material UI Icons + Phosphor Icons
- **Fonts**: Cinzel Decorative (títulos) + Inter (corpo)

## 📁 Estrutura do Projeto

```
dragon-realm/
├── 📄 Documentação
│   ├── dragon-realm-architecture.md     # Arquitetura detalhada
│   ├── implementation-plan.md           # Plano de implementação
│   ├── dragon-realm-specifications.md   # Especificações completas
│   └── README.md                        # Este arquivo
├── 🎨 Design System
│   ├── Paleta: Dragon Blood, Elven Gold, Eternal Night
│   ├── Tipografia: Cinzel Decorative + Inter
│   └── Componentes: Cards, Buttons, Modals, Typography
└── 🏗️ Arquitetura
    ├── Componentes reutilizáveis
    ├── Páginas principais (Home, Characters, Lore, Contact)
    ├── Sistema de roteamento
    └── Dados mock temáticos
```

## 🎯 Funcionalidades Principais

### 🏠 Página Inicial
- **Hero Section**: Banner épico com call-to-actions
- **Conteúdo em Destaque**: Personagens e dragões principais
- **Navegação Intuitiva**: Menu responsivo com tema medieval

### ⚔️ Personagens
- **Galeria de Heróis**: Cards interativos com detalhes
- **Sistema de Filtros**: Por classe, raça, nível
- **Modais Detalhados**: Estatísticas, habilidades, história

### 🐲 Lore do Mundo
- **Dragões Lendários**: Pyrothane, Glacius, Verdania, Umbra
- **Localizações Épicas**: Fortaleza de Pedra Branca, Floresta dos Sussurros
- **História Interativa**: Conteúdo rico e envolvente

### 📞 Contato
- **Formulário Funcional**: Validação e feedback
- **Informações de Suporte**: Links e redes sociais

## 🎨 Design System

### Paleta de Cores Mística
```css
--mystic-purple: #8A2BE2     /* Roxo místico - Ações principais */
--phoenix-fire: #FF6B35      /* Laranja vibrante - Destaques */
--void-black: #0D1117        /* Preto profundo - Fundo principal */
--shadow-slate: #21262D      /* Cinza azulado - Superfícies */
--starlight: #F0F6FC         /* Branco azulado - Texto principal */
--ethereal-teal: #00D4AA     /* Verde-azul etéreo - Efeitos mágicos */
```

### Tipografia
- **Títulos**: Cinzel Decorative (épico, ornamentado)
- **Corpo**: Inter (moderno, legível)
- **Hierarquia**: H1 (48px) → H2 (40px) → H3 (32px) → Body (16px)

## 🚀 Plano de Implementação

### Fase 1: Configuração Base (Semana 1)
- [x] Planejamento e arquitetura
- [ ] Setup do projeto com Vite + TypeScript
- [ ] Instalação de dependências
- [ ] Configuração de tema e estilos

### Fase 2: Componentes Core (Semana 2)
- [ ] Layout principal (Header, Footer, MainLayout)
- [ ] Componentes UI base (Button, Card, Input, Modal)
- [ ] Sistema de roteamento
- [ ] Dados mock temáticos

### Fase 3: Páginas e Conteúdo (Semana 3)
- [ ] Página inicial com Hero Section
- [ ] Página de personagens com filtros
- [ ] Página de lore com dragões e localizações
- [ ] Página de contato com formulário

### Fase 4: Polimento e Deploy (Semana 4)
- [ ] Responsividade completa
- [ ] Otimizações de performance
- [ ] Acessibilidade (WCAG 2.1 AA)
- [ ] Deploy e documentação

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Componentes Adaptativos**: Menu hambúrguer, grids flexíveis
- **Performance**: Lazy loading, code splitting

## ♿ Acessibilidade

- **WCAG 2.1 AA**: Conformidade completa
- **Navegação por Teclado**: Suporte total
- **Screen Readers**: Compatibilidade garantida
- **Contraste**: Mínimo 4.5:1 em todos os elementos

## ⚡ Performance

- **Core Web Vitals**: Otimizado para pontuação máxima
- **Lazy Loading**: Imagens e componentes
- **Code Splitting**: Por rotas e funcionalidades
- **Caching**: Service Worker e estratégias de cache

## 🎮 Conteúdo Temático

### Personagens Principais
1. **Elara, a Guardiã da Luz** - Paladina protetora (Nível 15)
2. **Thorin Forjaferro** - Anão ferreiro guerreiro (Nível 18)
3. **Lyralei Ventolâmina** - Elfa arqueira ranger (Nível 14)
4. **Grimjaw, o Bárbaro** - Meio-orc berserker (Nível 16)

### Dragões Lendários
1. **Pyrothane, o Ancião** - Dragão vermelho de fogo (1000+ anos)
2. **Glacius Eternus** - Dragão de gelo das montanhas (500 anos)
3. **Verdania, a Protetora** - Dragão verde da floresta (400 anos)
4. **Umbra Mortis** - Dragão sombrio das profundezas (800 anos)

### Localizações Épicas
1. **Fortaleza de Pedra Branca** - Capital do reino (50.000 habitantes)
2. **Floresta dos Sussurros** - Território élfico encantado
3. **Montanhas do Fim do Mundo** - Lar dos dragões ancestrais
4. **Cavernas Sombrias** - Masmorras perigosas e misteriosas

## 🔧 Comandos de Desenvolvimento

```bash
# Criar projeto
npm create vite@latest dragon-realm -- --template react-ts

# Instalar dependências
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @phosphor-icons/react
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer

# Executar desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📚 Documentação Adicional

- **[Arquitetura](./dragon-realm-architecture.md)**: Estrutura detalhada do projeto
- **[Implementação](./implementation-plan.md)**: Guia passo a passo de desenvolvimento
- **[Especificações](./dragon-realm-specifications.md)**: Detalhes completos de funcionalidades

## 🎯 Próximos Passos

1. **Revisar o Plano**: Verificar se todas as especificações estão corretas
2. **Iniciar Implementação**: Começar com a configuração base do projeto
3. **Desenvolvimento Iterativo**: Implementar funcionalidades por fases
4. **Testes e Refinamento**: Garantir qualidade e performance
5. **Deploy**: Publicar o projeto finalizado

---

**Dragon Realm** - *Adentre um mundo épico de dragões ancestrais, heróis lendários e magia ancestral* 🐉✨