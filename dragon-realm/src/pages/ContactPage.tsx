import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            background: 'linear-gradient(135deg, #00D4AA, #8A2BE2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Contato
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Entre em contato conosco para iniciar sua jornada épica
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
          border: '1px solid rgba(0, 212, 170, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          Em desenvolvimento... 📧
          <br />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Os corvos mensageiros estão sendo treinados!
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactPage;