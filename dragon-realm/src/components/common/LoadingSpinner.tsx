import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Carregando magia...", 
  size = 60 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 3,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          size={size}
          thickness={4}
          sx={{
            color: 'primary.main',
            animationDuration: '2s',
            filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.5))',
          }}
        />
        <CircularProgress
          size={size - 10}
          thickness={2}
          sx={{
            color: 'secondary.main',
            position: 'absolute',
            top: 5,
            left: 5,
            animationDuration: '1.5s',
            animationDirection: 'reverse',
            opacity: 0.7,
          }}
        />
      </Box>
      
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          fontWeight: 500,
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.7 },
            '50%': { opacity: 1 },
          },
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;