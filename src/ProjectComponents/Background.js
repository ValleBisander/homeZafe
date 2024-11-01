import React from 'react';
import { Box, ImageListItem, Typography, Grid } from '@mui/material';

const Background = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Background Information
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2, lineHeight: 1.5 }}>
        <img
          src="/ChalmersLogo.png"
          alt="Chalmers Logo"
          style={{ width: '10%', height: 'auto', marginTop: 16, display: 'block', margin: '0 auto' }}
        />
        TEK830 Digitization and AI in Practice.
      </Typography>
      
      <Typography variant="body1" sx={{ marginTop: 4, fontWeight: 'bold' }}>
        A Beautiful Photo of Our Group:
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <ImageListItem>
          <img
            src="/Team11Valle.png"
            alt="The Team"
            style={{ width: '80%', height: 'auto', borderRadius: 8, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          />
        </ImageListItem>
      </Box>

      <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
        From left: Helena Nyguyen, Alfred Pettersson: 0735922500, Hannah Tu, Valdemar Bisander, Tabita Tengblad
      </Typography>
    </Box>
  );
};

export default Background;

