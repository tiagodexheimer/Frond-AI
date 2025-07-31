import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CharactersPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            background: 'linear-gradient(135deg, #8A2BE2, #FF6B35)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Heróis Lendários
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Conheça os bravos aventureiros que moldaram a história do Dragon Realm
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          background: 'rgba(33, 38, 45, 0.5)',
          borderRadius: '16px',
          border: '1px solid rgba(138, 43, 226, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          Em desenvolvimento... 🏗️
          <br />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Os heróis estão sendo forjados nas chamas da criação!
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default CharactersPage;