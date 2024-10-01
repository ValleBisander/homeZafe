import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';


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
        Welcome to our IKEA project
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
        This is a website for our IKEA capstone project where we will showcase you the different aspects 
        of our project.
      </Typography>

      {/* Get Started Button */}
      <Button
        component={Link}  // Use Link from react-router-dom
        to="/explore"      // Link to the Explore page
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
