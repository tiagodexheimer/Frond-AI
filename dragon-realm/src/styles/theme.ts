import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8A2BE2',      // mystic-purple
      light: '#A855F7',     // mystic-aura
      dark: '#7C3AED',      // arcane-violet
      contrastText: '#F0F6FC',
    },
    secondary: {
      main: '#FF6B35',      // phoenix-fire
      light: '#F59E0B',     // warning-flame
      dark: '#EC4899',      // arcane-energy
      contrastText: '#0D1117',
    },
    background: {
      default: '#0D1117',   // void-black
      paper: '#21262D',     // shadow-slate
    },
    surface: {
      main: '#374151',      // essence-shadow
    },
    text: {
      primary: '#F0F6FC',   // starlight
      secondary: 'rgba(240, 246, 252, 0.8)',
      disabled: 'rgba(240, 246, 252, 0.5)',
    },
    success: {
      main: '#10B981',      // success-magic
      light: '#34D399',
      dark: '#059669',
    },
    warning: {
      main: '#F59E0B',      // warning-flame
      light: '#FBBF24',     // celestial-light
      dark: '#D97706',
    },
    error: {
      main: '#EF4444',      // error-curse
      light: '#F87171',
      dark: '#DC2626',
    },
    info: {
      main: '#3B82F6',      // info-crystal
      light: '#60A5FA',
      dark: '#2563EB',
    },
    // Cores customizadas para o tema mágico
    ethereal: {
      main: '#00D4AA',      // ethereal-teal
      light: '#34D399',
      dark: '#059669',
    },
    mystic: {
      main: '#A855F7',      // mystic-aura
      light: '#C084FC',
      dark: '#9333EA',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Cinzel Decorative', 'serif'].join(','),
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#FF6B35',
      textShadow: '0 0 20px rgba(138, 43, 226, 0.5)',
      lineHeight: 1.1,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:480px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: ['Cinzel Decorative', 'serif'].join(','),
      fontSize: '2.75rem',
      fontWeight: 600,
      color: '#8A2BE2',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: ['Cinzel Decorative', 'serif'].join(','),
      fontSize: '2.25rem',
      fontWeight: 500,
      color: '#F0F6FC',
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.25rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#F0F6FC',
      lineHeight: 1.4,
      '@media (max-width:768px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#F0F6FC',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#F0F6FC',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#F0F6FC',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: 'rgba(240, 246, 252, 0.8)',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: 'rgba(240, 246, 252, 0.6)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #8A2BE2 0%, #7C3AED 100%)',
          boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(138, 43, 226, 0.4)',
            background: 'linear-gradient(135deg, #7C3AED 0%, #8A2BE2 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)',
          color: '#0D1117',
          boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
            background: 'linear-gradient(135deg, #F59E0B 0%, #FF6B35 100%)',
          },
        },
        outlined: {
          borderColor: '#7C3AED',
          color: '#F0F6FC',
          '&:hover': {
            borderColor: '#8A2BE2',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
          },
        },
        text: {
          color: '#F0F6FC',
          '&:hover': {
            backgroundColor: 'rgba(138, 43, 226, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#21262D',
          borderRadius: '12px',
          border: '1px solid #374151',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #8A2BE2, #FF6B35, #00D4AA)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(138, 43, 226, 0.2)',
            borderColor: '#7C3AED',
            '&::before': {
              opacity: 1,
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(13, 17, 23, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #374151',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#21262D',
          borderRight: '1px solid #374151',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#0D1117',
            borderRadius: '8px',
            '& fieldset': {
              borderColor: '#374151',
            },
            '&:hover fieldset': {
              borderColor: '#7C3AED',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8A2BE2',
              boxShadow: '0 0 0 3px rgba(138, 43, 226, 0.2)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(240, 246, 252, 0.7)',
            '&.Mui-focused': {
              color: '#8A2BE2',
            },
          },
          '& .MuiOutlinedInput-input': {
            color: '#F0F6FC',
            '&::placeholder': {
              color: 'rgba(240, 246, 252, 0.5)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#374151',
          color: '#F0F6FC',
          '&:hover': {
            backgroundColor: '#4B5563',
          },
        },
        colorPrimary: {
          backgroundColor: 'rgba(138, 43, 226, 0.2)',
          color: '#A855F7',
          border: '1px solid rgba(138, 43, 226, 0.3)',
        },
        colorSecondary: {
          backgroundColor: 'rgba(255, 107, 53, 0.2)',
          color: '#FF6B35',
          border: '1px solid rgba(255, 107, 53, 0.3)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#21262D',
          color: '#F0F6FC',
          border: '1px solid #374151',
          fontSize: '0.875rem',
        },
        arrow: {
          color: '#21262D',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(13, 17, 23, 0.8)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

// Extensão do tema para incluir cores customizadas
declare module '@mui/material/styles' {
  interface Palette {
    ethereal: Palette['primary'];
    mystic: Palette['primary'];
    surface: Palette['primary'];
  }

  interface PaletteOptions {
    ethereal?: PaletteOptions['primary'];
    mystic?: PaletteOptions['primary'];
    surface?: PaletteOptions['primary'];
  }
}

export default theme;