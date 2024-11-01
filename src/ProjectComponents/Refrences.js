import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const References = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        References
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Psychological Safety in Homes: Effects on Health and Well-being</strong> <br />
        <Link href="https://www.dawn.health/blog/establishing-a-bedtime-routine-for-better-sleep" target="_blank" rel="noopener noreferrer">
          Read more at National Library of Medicine
        </Link>
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Establishing a bedtime routine for better sleep:</strong> <br />
        
        <Link href="https://www.dawn.health/blog/establishing-a-bedtime-routine-for-better-sleep" target="_blank" rel="noopener noreferrer">
          Read more at Dawn Health
        </Link>
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Health benefits of having a routine:</strong> <br />
        <Link href="https://www.nm.org/healthbeat/healthy-tips/health-benefits-of-having-a-routine" target="_blank" rel="noopener noreferrer">
          Read more at Northwestern Medicine
        </Link>
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Psychological safety at home: Why it matters:</strong> <br />
        
        <Link href="https://www.leaderfactor.com/learn/psychological-safety-at-home" target="_blank" rel="noopener noreferrer">
          Read more at LeaderFactor
        </Link>
      </Typography>
    </Box>
  );
};

export default References;
