# Dragon Realm - Especificações Detalhadas

## Visão Geral do Projeto
Dragon Realm é um site temático de RPG medieval com foco em dragões e magia, desenvolvido com React, Material UI 7 e Tailwind CSS. O projeto visa criar uma experiência imersiva que transporta os usuários para um mundo épico de fantasia.

## Especificações de Design

### Identidade Visual
- **Nome**: Dragon Realm
- **Tagline**: "Adentre um mundo épico de dragões ancestrais, heróis lendários e magia ancestral"
- **Estilo**: Medieval fantasia com elementos modernos
- **Tom**: Épico, misterioso, aventuresco

### Paleta de Cores Expandida
```css
:root {
  /* Cores Principais */
  --dragon-blood: #A30000;      /* Vermelho escuro - Ações principais */
  --elven-gold: #FFD700;        /* Dourado - Destaques e magia */
  --eternal-night: #1A1A1A;     /* Preto - Fundo principal */
  --morning-mist: #E0E0E0;      /* Cinza claro - Texto secundário */
  --enchanted-forest: #4CAF50;  /* Verde - Elementos interativos */
  
  /* Cores Temáticas */
  --dragon-fire: #FF4500;       /* Laranja - Elementos de fogo */
  --ancient-ice: #87CEEB;       /* Azul claro - Elementos de gelo */
  --deep-shadow: #2F2F2F;       /* Cinza escuro - Bordas e sombras */
  --divine-light: #F5F5DC;      /* Bege - Elementos sagrados */
  --mystic-purple: #8A2BE2;     /* Roxo - Magia e mistério */
  --earth-brown: #8B4513;       /* Marrom - Elementos terrestres */
}
```

## Especificações de Conteúdo

### Personagens Principais

#### 1. Elara, a Guardiã da Luz
- **Classe**: Paladina
- **Raça**: Humana
- **Nível**: 15
- **Especialidade**: Cura e proteção divina
- **Armas**: Espada Sagrada "Alvorada" e Escudo da Luz Eterna
- **História**: Órfã criada por clérigos, descobriu seus poderes ao defender sua cidade natal de uma invasão de mortos-vivos

#### 2. Thorin Forjaferro
- **Classe**: Guerreiro/Ferreiro
- **Raça**: Anão
- **Nível**: 18
- **Especialidade**: Forja de armas mágicas e combate corpo a corpo
- **Armas**: Martelo de Guerra "Quebra-Montanhas" forjado por ele mesmo
- **História**: Mestre ferreiro que perdeu sua família em um ataque de dragão, dedica-se a forjar armas para combater as criaturas

#### 3. Lyralei Ventolâmina
- **Classe**: Arqueira/Ranger
- **Raça**: Elfa
- **Nível**: 14
- **Especialidade**: Tiro certeiro e rastreamento
- **Armas**: Arco Élfico "Sussurro do Vento" e adagas gêmeas
- **História**: Guardiã da Floresta dos Sussurros, protege os segredos élficos e guia viajantes perdidos

#### 4. Grimjaw, o Bárbaro
- **Classe**: Bárbaro
- **Raça**: Meio-orc
- **Nível**: 16
- **Especialidade**: Fúria berserker e resistência sobrenatural
- **Armas**: Machado Duplo "Sede de Sangue"
- **História**: Exilado de sua tribo, busca redenção protegendo os fracos apesar de sua natureza selvagem

### Dragões Lendários

#### 1. Pyrothane, o Ancião
- **Tipo**: Dragão Vermelho
- **Idade**: Ancião (mais de 1000 anos)
- **Localização**: Pico do Vulcão Adormecido
- **Poder**: Controle sobre fogo e lava
- **Personalidade**: Orgulhoso e territorial, mas honra acordos
- **Tesouro**: Maior coleção de ouro e gemas do reino

#### 2. Glacius Eternus
- **Tipo**: Dragão de Gelo
- **Idade**: Adulto (500 anos)
- **Localização**: Cavernas Geladas do Norte
- **Poder**: Controle sobre gelo e tempestades de neve
- **Personalidade**: Sábio e contemplativo, raramente interfere nos assuntos mortais
- **Tesouro**: Cristais de gelo eterno e artefatos antigos

#### 3. Verdania, a Protetora
- **Tipo**: Dragão Verde
- **Idade**: Adulta (400 anos)
- **Localização**: Coração da Floresta dos Sussurros
- **Poder**: Controle sobre plantas e venenos
- **Personalidade**: Protetora da natureza, hostil a quem ameaça a floresta
- **Tesouro**: Sementes mágicas e poções raras

#### 4. Umbra Mortis
- **Tipo**: Dragão Sombrio
- **Idade**: Ancião (800 anos)
- **Localização**: Abismo das Almas Perdidas
- **Poder**: Necromancia e controle sobre sombras
- **Personalidade**: Malévolo e manipulador, corrompe tudo que toca
- **Tesouro**: Artefatos amaldiçoados e almas aprisionadas

### Localizações Principais

#### 1. Fortaleza de Pedra Branca
- **Tipo**: Capital do Reino
- **População**: 50.000 habitantes
- **Características**: Muralhas impenetráveis, torres que tocam as nuvens
- **Governante**: Rei Aldric, o Justo
- **Pontos de Interesse**: Palácio Real, Grande Biblioteca, Mercado Central, Academia de Magia

#### 2. Floresta dos Sussurros
- **Tipo**: Floresta Élfica Encantada
- **Habitantes**: Elfos, fadas, espíritos da natureza
- **Características**: Árvores milenares, lagos cristalinos, trilhas que mudam de lugar
- **Perigos**: Criaturas sombrias, ilusões, plantas carnívoras
- **Segredos**: Portal para o Reino das Fadas, Fonte da Juventude Eterna

#### 3. Montanhas do Fim do Mundo
- **Tipo**: Cordilheira Montanhosa
- **Habitantes**: Dragões, gigantes, anões das montanhas
- **Características**: Picos nevados, vulcões ativos, cavernas profundas
- **Perigos**: Avalanches, criaturas antigas, temperaturas extremas
- **Tesouros**: Minas de metais preciosos, cristais mágicos

#### 4. Cavernas Sombrias
- **Tipo**: Complexo de Masmorras
- **Habitantes**: Mortos-vivos, demônios, cultistas
- **Características**: Labirintos escuros, armadilhas mortais, altares profanos
- **Perigos**: Maldições antigas, criaturas aberrantes, gases tóxicos
- **Recompensas**: Artefatos poderosos, conhecimento proibido

## Especificações Técnicas de Componentes

### CharacterCard Component
```typescript
interface CharacterCardProps {
  character: Character;
  variant?: 'default' | 'detailed' | 'compact';
  showStats?: boolean;
  onSelect?: (character: Character) => void;
}

// Funcionalidades:
// - Hover effect com elevação
// - Animação de entrada
// - Modal de detalhes ao clicar
// - Indicadores visuais de classe e nível
// - Barra de progresso para stats
```

### DragonCard Component
```typescript
interface DragonCardProps {
  dragon: Dragon;
  showDangerLevel?: boolean;
  showLocation?: boolean;
  interactive?: boolean;
}

// Funcionalidades:
// - Efeito de brilho baseado no tipo de dragão
// - Indicador de nível de perigo
// - Animação de fogo/gelo/natureza/sombra
// - Som ambiente ao hover (opcional)
```

### LocationCard Component
```typescript
interface LocationCardProps {
  location: Location;
  showInhabitants?: boolean;
  showDangerLevel?: boolean;
  size?: 'small' | 'medium' | 'large';
}

// Funcionalidades:
// - Imagem de fundo parallax
// - Overlay com informações
// - Indicadores de perigo e população
// - Link para página detalhada
```

## Funcionalidades Interativas

### Sistema de Filtros
- **Personagens**: Por classe, raça, nível
- **Dragões**: Por tipo, idade, nível de perigo
- **Localizações**: Por tipo, nível de perigo, população

### Sistema de Busca
- Busca global por nome
- Busca por tags/características
- Sugestões automáticas
- Histórico de buscas

### Modais Informativos
- Detalhes completos de personagens
- Lore expandido de dragões
- Mapas interativos de localizações
- Galeria de imagens

### Animações e Efeitos
- Partículas de fogo para dragões vermelhos
- Cristais de gelo para dragões de gelo
- Folhas flutuantes para dragões verdes
- Sombras dançantes para dragões sombrios

## Responsividade

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Adaptações por Dispositivo
- **Mobile**: Menu hambúrguer, cards em coluna única, texto reduzido
- **Tablet**: Grid 2 colunas, navegação híbrida
- **Desktop**: Grid 3-4 colunas, navegação completa, efeitos avançados

## Otimizações de Performance

### Lazy Loading
- Imagens com intersection observer
- Componentes de página com React.lazy
- Dados com paginação virtual

### Caching
- Service Worker para assets estáticos
- LocalStorage para preferências do usuário
- SessionStorage para estado temporário

### Bundle Optimization
- Code splitting por rotas
- Tree shaking automático
- Compressão de assets

## Acessibilidade (WCAG 2.1 AA)

### Navegação
- Skip links para conteúdo principal
- Navegação por teclado completa
- Focus indicators visíveis
- Breadcrumbs em todas as páginas

### Conteúdo
- Alt text descritivo para imagens
- Headings hierárquicos corretos
- Contraste mínimo 4.5:1
- Texto redimensionável até 200%

### Interatividade
- Estados de foco claros
- Feedback sonoro opcional
- Tempo suficiente para leitura
- Controles de animação

## Métricas de Sucesso

### Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Acessibilidade
- **Lighthouse Accessibility Score**: > 95
- **Compatibilidade com Screen Readers**: 100%
- **Navegação por Teclado**: Completa

### SEO
- **Core Web Vitals**: Todos em verde
- **Meta Tags**: Completas e otimizadas
- **Schema Markup**: Implementado
- **Sitemap**: Gerado automaticamente

Este documento serve como guia completo para a implementação do projeto Dragon Realm, garantindo que todos os aspectos técnicos e criativos sejam cobertos adequadamente.