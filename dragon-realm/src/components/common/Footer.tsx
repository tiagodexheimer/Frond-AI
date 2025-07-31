import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub />, href: '#', label: 'GitHub' },
    { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <Email />, href: 'mailto:contact@dragonrealm.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Início', href: '/' },
    { label: 'Personagens', href: '/characters' },
    { label: 'Lore', href: '/lore' },
    { label: 'Contato', href: '/contact' },
  ];

  const loreLinks = [
    { label: 'Dragões Lendários', href: '/lore#dragons' },
    { label: 'Heróis Épicos', href: '/characters#heroes' },
    { label: 'Localizações Místicas', href: '/lore#locations' },
    { label: 'História do Reino', href: '/lore#history' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: `
          linear-gradient(135deg, #0D1117 0%, #21262D 50%, #0D1117 100%),
          radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
        `,
        borderTop: '1px solid rgba(138, 43, 226, 0.2)',
        mt: 'auto',
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #8A2BE2, #FF6B35, #00D4AA, transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Logo e Descrição */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Cinzel Decorative',
                fontWeight: 700,
                color: 'secondary.main',
                mb: 2,
                textShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
              }}
            >
              Dragon Realm
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.6,
                maxWidth: '300px',
              }}
            >
              Adentre um mundo épico de dragões ancestrais, heróis lendários e magia ancestral. 
              Explore reinos místicos e descubra aventuras inesquecíveis.
            </Typography>
            
            {/* Redes Sociais */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateY(-2px)',
                      backgroundColor: 'rgba(138, 43, 226, 0.1)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Links Rápidos */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                mb: 2,
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              Navegação
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      textDecoration: 'underline',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Links do Lore */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                mb: 2,
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              Mundo Mágico
            </Typography>
            <Stack spacing={1}>
              {loreLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      textDecoration: 'underline',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Informações de Contato */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                mb: 2,
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              Contato
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
              >
                Email: contact@dragonrealm.com
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
              >
                Reino: Fortaleza de Pedra Branca
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
              >
                Guilda: Aventureiros do Dragon Realm
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Divider 
          sx={{ 
            my: 4, 
            borderColor: 'rgba(138, 43, 226, 0.2)',
            background: 'linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.3), transparent)',
          }} 
        />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.85rem',
            }}
          >
            © {currentYear} Dragon Realm. Todos os direitos reservados. 
            Desenvolvido com magia e tecnologia.
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              Termos de Uso
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;