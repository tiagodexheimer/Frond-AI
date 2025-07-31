# Dragon Realm - Plano de Implementação Detalhado

## Fase 1: Configuração Base do Projeto

### 1.1 Inicialização do Projeto
```bash
npm create vite@latest dragon-realm -- --template react-ts
cd dragon-realm
```

### 1.2 Dependências Principais
```bash
# Material UI
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Roteamento
npm install react-router-dom

# Ícones adicionais
npm install @phosphor-icons/react lucide-react

# Utilitários
npm install clsx
```

### 1.3 Dependências de Desenvolvimento
```bash
npm install -D @types/node
npm install -D eslint-plugin-react-hooks
npm install -D prettier eslint-config-prettier
```

## Fase 2: Configuração de Arquivos Base

### 2.1 Configuração do Tailwind (tailwind.config.js)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dragon-blood': '#A30000',
        'elven-gold': '#FFD700',
        'eternal-night': '#1A1A1A',
        'morning-mist': '#E0E0E0',
        'enchanted-forest': '#4CAF50',
        'dragon-fire': '#FF4500',
        'ancient-ice': '#87CEEB',
        'deep-shadow': '#2F2F2F',
        'divine-light': '#F5F5DC',
      },
      fontFamily: {
        'cinzel': ['Cinzel Decorative', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700' },
          '100%': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' },
        }
      }
    },
  },
  plugins: [],
}
```

### 2.2 Configuração do Material UI Theme (src/styles/theme.ts)
```typescript
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A30000',
      light: '#D32F2F',
      dark: '#7B0000',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFEB3B',
      dark: '#FFC107',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2F2F2F',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#FFD700',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FF4500',
    },
    info: {
      main: '#87CEEB',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Cinzel Decorative', 'serif'].join(','),
      fontSize: '3rem',
      fontWeight: 700,
      color: '#FFD700',
    },
    h2: {
      fontFamily: ['Cinzel Decorative', 'serif'].join(','),
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#FFD700',
    },
    h3: {
      fontFamily: ['Cinzel Decorative', 'serif'].join(','),
      fontSize: '2rem',
      fontWeight: 500,
      color: '#E0E0E0',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#E0E0E0',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#E0E0E0',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#B0B0B0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #A30000 30%, #D32F2F 90%)',
          boxShadow: '0 3px 5px 2px rgba(163, 0, 0, .3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #7B0000 30%, #A30000 90%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #FFD700 30%, #FFEB3B 90%)',
          color: '#1A1A1A',
          '&:hover': {
            background: 'linear-gradient(45deg, #FFC107 30%, #FFD700 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2F2F2F',
          borderRadius: '12px',
          border: '1px solid #444',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme;
```

## Fase 3: Estrutura de Dados Mock

### 3.1 Tipos TypeScript (src/types/)

#### character.ts
```typescript
export interface Character {
  id: string;
  name: string;
  class: string;
  race: string;
  level: number;
  description: string;
  imageUrl: string;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  abilities: string[];
  backstory: string;
}
```

#### dragon.ts
```typescript
export interface Dragon {
  id: string;
  name: string;
  type: 'Fire' | 'Ice' | 'Forest' | 'Shadow' | 'Light';
  age: 'Young' | 'Adult' | 'Ancient';
  description: string;
  imageUrl: string;
  location: string;
  dangerLevel: 1 | 2 | 3 | 4 | 5;
  abilities: string[];
  lore: string;
}
```

#### location.ts
```typescript
export interface Location {
  id: string;
  name: string;
  type: 'City' | 'Forest' | 'Mountain' | 'Dungeon' | 'Castle';
  description: string;
  imageUrl: string;
  inhabitants: string[];
  dangerLevel: 1 | 2 | 3 | 4 | 5;
  keyFeatures: string[];
  history: string;
}
```

### 3.2 Dados Mock (src/data/)

#### characters.json
```json
[
  {
    "id": "1",
    "name": "Elara, a Guardiã da Luz",
    "class": "Paladina",
    "race": "Humana",
    "level": 15,
    "description": "Uma guerreira nobre dedicada à proteção dos inocentes e à erradicação das trevas.",
    "imageUrl": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    "stats": {
      "strength": 18,
      "dexterity": 14,
      "constitution": 16,
      "intelligence": 12,
      "wisdom": 17,
      "charisma": 19
    },
    "abilities": ["Cura Divina", "Escudo Sagrado", "Golpe Purificador", "Aura de Proteção"],
    "backstory": "Nascida em uma família de camponeses, Elara descobriu seus poderes divinos quando sua aldeia foi atacada por mortos-vivos. Desde então, dedica sua vida a proteger os fracos e combater as forças das trevas."
  }
]
```

## Fase 4: Componentes Base

### 4.1 Layout Principal (src/layouts/MainLayout.tsx)
```typescript
import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #1A1A1A 0%, #2F2F2F 100%)'
    }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
```

### 4.2 Header Component (src/components/common/Header.tsx)
```typescript
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Personagens', path: '/characters' },
    { label: 'Lore', path: '/lore' },
    { label: 'Contato', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'secondary.main',
              fontFamily: 'Cinzel Decorative',
              fontWeight: 700,
            }}
          >
            Dragon Realm
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    color: location.pathname === item.path ? 'secondary.main' : 'text.primary',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="secondary.main">
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: location.pathname === item.path ? 'secondary.main' : 'text.primary',
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
```

## Fase 5: Páginas Principais

### 5.1 Home Page (src/pages/HomePage.tsx)
```typescript
import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import FeaturedContent from '../components/sections/FeaturedContent';

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <FeaturedContent />
      </Container>
    </Box>
  );
};

export default HomePage;
```

### 5.2 Hero Section (src/components/sections/HeroSection.tsx)
```typescript
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `
          linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)),
          url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop') center/cover
        `,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              animation: 'glow 2s ease-in-out infinite alternate',
            }}
          >
            Dragon Realm
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Adentre um mundo épico de dragões ancestrais, heróis lendários e magia ancestral
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              component={Link}
              to="/characters"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              Conheça os Heróis
            </Button>
            <Button
              component={Link}
              to="/lore"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                borderColor: 'secondary.main',
                color: 'secondary.main',
                '&:hover': {
                  borderColor: 'secondary.light',
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                },
              }}
            >
              Explore o Mundo
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
```

## Fase 6: Otimizações e Finalização

### 6.1 Lazy Loading Setup
```typescript
// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './styles/theme';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy loading das páginas
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CharactersPage = React.lazy(() => import('./pages/CharactersPage'));
const LorePage = React.lazy(() => import('./pages/LorePage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/lore" element={<LorePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

### 6.2 Performance Optimizations
- Implementar React.memo para componentes que não mudam frequentemente
- Usar useCallback e useMemo para otimizar re-renders
- Implementar lazy loading de imagens
- Configurar service worker para cache

### 6.3 Acessibilidade
- Adicionar atributos ARIA apropriados
- Garantir navegação por teclado
- Implementar skip links
- Testar com leitores de tela

## Cronograma de Implementação

### Semana 1: Setup e Base
- Configuração do projeto
- Instalação de dependências
- Configuração de tema e estilos
- Estrutura de pastas

### Semana 2: Componentes Core
- Layout principal
- Header e Footer
- Componentes UI base
- Sistema de roteamento

### Semana 3: Páginas e Conteúdo
- Implementação das páginas principais
- Dados mock
- Integração de componentes

### Semana 4: Polimento e Deploy
- Responsividade
- Otimizações de performance
- Testes
- Deploy

Este plano fornece uma base sólida para implementar o projeto Dragon Realm seguindo as melhores práticas de desenvolvimento React moderno.