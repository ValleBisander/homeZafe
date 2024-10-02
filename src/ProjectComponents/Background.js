import React from 'react';
import { Box, Icon, Typography } from '@mui/material';

const Background = () => {
  return (
    <><Box sx={{ padding: 4 }}>
      <Typography variant="h4">Background information</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        TEK830 Digitilization and AI in practice.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        A Beautiful photo of our group:
      </Typography>


    </Box>

    <Box sx={{ padding: 4
     }}>
        <img
          src="\src\ProjectComponents\Images\ChalmersLogo.png" // Replace with your PNG image path
          alt="The Team"
          style={{ width: '50%', height: 'auto', marginTop: 16 }} // Styling for responsiveness
        />
      </Box>

     <></> <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Our names are: Alfred Pettersson, Valdemar Bisander, Tabita Tengblad, Helena Nguyen and Hannah Tu</Typography>
      </Box></>
  );
};

export default Background;
