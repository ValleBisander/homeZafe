import React from 'react';
import { Button, Typography, Box } from '@mui/material';

// IKEA-inspired design with sx styling
const Home = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Hero Image */}
      <Box
        component="img"
        src="https://www.ikea.com/images/home-smart-automation.jpg"
        alt="Home Automation"
        sx={{
          width: '100%',
          height: 'auto',
          maxWidth: '1200px',
          marginBottom: '2rem',
          borderRadius: '8px',
        }}
      />

      {/* Heading */}
      <Typography 
        variant="h1" 
        sx={{
          color: '#333333',
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        Welcome to IKEA HomeZafe
      </Typography>

      {/* Description */}
      <Typography 
        variant="body1"
        sx={{
          color: '#666666',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '600px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Automate your home for a stress-free environment. Manage lighting, sound, and 
        climate control with ease. Create your personal zones for work, relaxation, and sleep.
      </Typography>

      {/* Get Started Button */}
      <Button
        sx={{
          backgroundColor: '#0058a3',
          color: '#fff',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#00417a',
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
