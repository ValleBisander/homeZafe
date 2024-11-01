import React from 'react';
import { Box, Typography } from '@mui/material';

const GenerativeAI = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Use of Generative AI in Our Capstone Project
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        In our capstone project, we utilized generative AI to enhance our design thinking approach. 
        One major application was creating imaginary user profiles, which helped us empathize with our target audience.
        By understanding their needs and challenges through these personas, we were able to design a solution that better meets their expectations. 
        We ofcourse didn't only empathize with imaginary users, we also spoke to real people in our target audience.

        Additionally, we used generative AI to find helpful articles and resources. 
        This streamlined our research process, allowing us to gather relevant information quickly and ensure our project was based on solid insights. 
        Overall, generative AI played a helpful role in helping us understand users and enhance our project's foundation.
      </Typography>
      
    </Box>
  );
};

export default GenerativeAI;