import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <Box 
      sx={{ 
        padding: 4, 
        backgroundColor: '#f4f4f4', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ marginBottom: 3, fontWeight: 'bold', color: '#333' }}
      >
        Overview and Demo
      </Typography>

      <Card 
        sx={{ 
          maxWidth: 800, 
          width: '100%', 
          backgroundColor: '#fff', 
          borderRadius: 2, 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <CardContent>
          <Typography 
            variant="body1" 
            sx={{ marginBottom: 2, color: '#555' }}
          >
            Our prototype, *HomeZafe*, aims to create a smart home experience that adapts to your daily routines. 
            It offers customized lighting, and sound settings for different areas of your home, ensuring 
            stress relief and comfort. Explore our interactive demo to see how each feature is designed 
            to enhance your living space.
          </Typography>
          
          <img 
            src="/PrototypeFigma.png" 
            alt="Prototype Figma" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px', 
              marginTop: 16 
            }} 
          />
        </CardContent>
      </Card>

      <Button 
        component={Link}
        to="/prototype-home" 
        variant="contained" 
        sx={{ 
          marginTop: 4, 
          backgroundColor: '#0058a3', 
          color: '#fff', 
          paddingX: 3, 
          paddingY: 1.5, 
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#0058a3',
          }
        }}
      >
        Explore Prototype
      </Button>
    </Box>
  );
};

export default Overview;
