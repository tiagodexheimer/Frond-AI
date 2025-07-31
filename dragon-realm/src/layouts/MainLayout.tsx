import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: `
          linear-gradient(135deg, #0D1117 0%, #21262D 50%, #0D1117 100%),
          radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 10% 20%, rgba(0, 212, 170, 0.05) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 20%)
          `,
          pointerEvents: 'none',
          zIndex: -1,
        },
      }}
    >
      <Header />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, md: 10 }, // Espaço para o header fixo
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
      
      <Footer />
    </Box>
  );
};

export default MainLayout;