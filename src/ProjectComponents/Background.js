import React from 'react';
import {Box, ImageListItem, Typography } from '@mui/material';
//import ChalmersLogo from 'public/Images/ChalmersLogo.png';


const Background = () => {
  return (
    <><Box sx={{ padding: 4 }}>
      <Typography variant="h4">Background information</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
      <img src="/ChalmersLogo.png" alt="Chalmers Logo" style={{ width: '5%', height: 'auto', marginTop: 16 }} />
      TEK830 Digitilization and AI in practice.
      
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        A Beautiful photo of our group:
      </Typography>

    </Box>

    <Box sx={{ padding: 10
     }}>
      <ImageListItem>
        <img
          src="/Team11Valle.png"// Replace with your PNG image path
          alt="The Team"
          style={{ width: '50%', height: 'auto', marginTop: 16 }} // Styling for responsiveness
        />
        </ImageListItem>
      </Box>

     <></> <Box sx={{ padding: 4 }}>
      <Typography variant="body1">From left: Helena Nyguyen, Alfred Pettersson: 0735922500, Hannah Tu, Valdemar Bisander, Tabita Tengblad</Typography>
      </Box></>
  );
};

export default Background;
