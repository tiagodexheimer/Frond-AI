import React from 'react';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Sword, Shield, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: `
            linear-gradient(rgba(13, 17, 23, 0.7), rgba(13, 17, 23, 0.7)),
            radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)
          `,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23FFD700" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>')
            `,
            opacity: 0.3,
            animation: 'twinkle 4s ease-in-out infinite alternate',
          },
          '@keyframes twinkle': {
            '0%': { opacity: 0.3 },
            '100%': { opacity: 0.6 },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                animation: 'mystic-glow 3s ease-in-out infinite',
                background: 'linear-gradient(135deg, #FF6B35, #8A2BE2, #00D4AA)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
                color: 'text.primary',
                fontWeight: 300,
              }}
            >
              Adentre um mundo épico de dragões ancestrais, heróis lendários e magia ancestral
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent="center"
              sx={{ mt: 6 }}
            >
              <Button
                component={Link}
                to="/characters"
                variant="contained"
                size="large"
                startIcon={<Sword size={20} />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  animation: 'float-magic 6s ease-in-out infinite',
                  background: 'linear-gradient(135deg, #8A2BE2 0%, #7C3AED 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7C3AED 0%, #8A2BE2 100%)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(138, 43, 226, 0.4)',
                  },
                }}
              >
                Conheça os Heróis
              </Button>
              
              <Button
                component={Link}
                to="/lore"
                variant="outlined"
                size="large"
                startIcon={<Shield size={20} />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: 'secondary.light',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(255, 107, 53, 0.3)',
                  },
                }}
              >
                Explore o Mundo
              </Button>
            </Stack>
          </Box>
        </Container>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '40%': { transform: 'translateX(-50%) translateY(-10px)' },
              '60%': { transform: 'translateX(-50%) translateY(-5px)' },
            },
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 50,
              border: '2px solid rgba(255, 107, 53, 0.8)',
              borderRadius: '15px',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 8,
                left: '50%',
                width: 4,
                height: 8,
                backgroundColor: 'secondary.main',
                borderRadius: '2px',
                transform: 'translateX(-50%)',
                animation: 'scroll 2s infinite',
              },
              '@keyframes scroll': {
                '0%': { top: 8, opacity: 1 },
                '100%': { top: 24, opacity: 0 },
              },
            }}
          />
        </Box>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 8,
            color: 'primary.main',
          }}
        >
          Descubra o Reino
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {/* Feature 1 */}
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: '16px',
              background: 'rgba(33, 38, 45, 0.8)',
              border: '1px solid rgba(138, 43, 226, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(138, 43, 226, 0.3)',
                borderColor: 'primary.main',
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8A2BE2, #7C3AED)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                animation: 'mystic-glow 3s ease-in-out infinite',
              }}
            >
              <Sword size={32} color="white" />
            </Box>
            <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
              Heróis Lendários
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Conheça guerreiros épicos, magos poderosos e aventureiros corajosos que moldaram a história do reino.
            </Typography>
          </Box>

          {/* Feature 2 */}
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: '16px',
              background: 'rgba(33, 38, 45, 0.8)',
              border: '1px solid rgba(255, 107, 53, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(255, 107, 53, 0.3)',
                borderColor: 'secondary.main',
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                animation: 'float-magic 6s ease-in-out infinite',
              }}
            >
              <Shield size={32} color="white" />
            </Box>
            <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
              Dragões Ancestrais
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Descubra criaturas majestosas que dominam os céus e guardam segredos milenares em suas cavernas.
            </Typography>
          </Box>

          {/* Feature 3 */}
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: '16px',
              background: 'rgba(33, 38, 45, 0.8)',
              border: '1px solid rgba(0, 212, 170, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0, 212, 170, 0.3)',
                borderColor: '#00D4AA',
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00D4AA, #10B981)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                animation: 'shimmer 2s infinite',
              }}
            >
              <Sparkles size={32} color="white" />
            </Box>
            <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
              Magia Ancestral
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Explore feitiços antigos, artefatos místicos e poderes que transcendem a compreensão mortal.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 107, 53, 0.1))',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              color: 'text.primary',
              fontFamily: 'Cinzel Decorative',
            }}
          >
            Sua Aventura Começa Agora
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Junte-se aos bravos aventureiros que ousam desafiar dragões, explorar masmorras perigosas e descobrir tesouros lendários.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              background: 'linear-gradient(135deg, #FF6B35, #8A2BE2)',
              '&:hover': {
                background: 'linear-gradient(135deg, #8A2BE2, #FF6B35)',
                transform: 'scale(1.05)',
                boxShadow: '0 15px 35px rgba(138, 43, 226, 0.4)',
              },
            }}
          >
            Comece Sua Jornada
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;