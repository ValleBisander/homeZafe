import React from 'react';
import { Box, Typography } from '@mui/material';

const PitchVideo = () => {
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
        Pitch Video
      </Typography>

      <Box 
        component="video"
        src="/PitchVideo.mp4" 
        controls
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

export default PitchVideo;
