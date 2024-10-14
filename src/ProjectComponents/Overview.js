import React from 'react';
import { Box, Typography } from '@mui/material';

const Overview = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Overview and Demo</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
      
        <img src="/PrototypeFigma.png" alt="Prototype Figma" style={{ width: '50%', height: 'auto', marginTop: 16 }} />
      </Typography>
    </Box>
  );
};

export default Overview;
