import React from 'react';
import { Box, Typography } from '@mui/material';

const DesignThinking = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        How Our Innovation Fulfills the Three Design Thinking Principles
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        1. <strong>Usability: Prioritizing User Experience and Ease of Use</strong>
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
      Home Zafe’s design revolves around usability. By deeply understanding users’ stress from work, studies, and daily life, we crafted a solution that focuses on creating stress-free, customizable environments. 
      The Smart Home technology allows users to effortlessly create personalized zones for different activities, ensuring smooth and easy transitions between work and leisure. 
      This intuitive design enhances the user experience, making it simple to manage well-being with minimal effort.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        2. <strong>Viability: A Sustainable and Valuable Solution</strong>
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
      Our ideation phase focused on creating a solution that would not only meet user needs but also remain viable in the long term. We introduced controllable home zones and behavioral nudges that adjust based on real-time data, creating lasting value by encouraging healthier habits. 
      The technology is adaptable across different home environments, ensuring wide market relevance and maintaining the potential for further growth and development over time.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        3. <strong>Feasibility: Real-World Testing and Implementation</strong>
      </Typography>
      <Typography variant="body1">
      Feasibility is central to the continuous improvement of Home Zafe. By testing the system with real users, we gather critical data to optimize the product. 
      The technology’s infrastructure supports smart zone adaptation based on real-life conditions, like sleep patterns and screen usage. This feedback loop ensures that the solution can be realistically implemented in homes, making adjustments where necessary to ensure smooth operation and positive outcomes for users.
      </Typography>
    </Box>
  );
};

export default DesignThinking;
