import React from 'react';
import { Box, Typography } from '@mui/material';

const PitchPresentation = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#e0f7fa',
        padding: 4
      }}
    >
      <Typography variant="h4" gutterBottom>
        Pitch Presentation
      </Typography>

      <Box 
        component="iframe"
        src="https://docs.google.com/presentation/d/e/2PACX-1vQYXEaaa9sICtPXjqiyww8TC_dyTjmbrLymghcXdP4ILO8pbGlxz7qzEEtWgkZ9mQ/embed?start=false&loop=false&delayms=3000"
        allowFullScreen
        frameBorder="0"
        sx={{
          width: '90vw',      
          height: '80vh',      
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          borderRadius: '8px',
          mt: 3
        }}
      />
    </Box>
  );
};

export default PitchPresentation;
