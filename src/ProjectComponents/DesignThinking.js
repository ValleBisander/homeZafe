import React from 'react';
import { Box, Typography } from '@mui/material';

const DesignThinking = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        How Our Innovation Fulfills the Three Design Thinking Principles
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        1. <strong>Empathy: Understanding User Needs</strong>
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        <em>Home Safe</em> is designed with a deep understanding of users' stress, particularly from work, studies, and daily pressures. 
        After discussions with our contacts in Japan, we recognized the need for a stress-free home environment. 
        Our solution uses Smart Home technology to create customized zones for different activities, helping users separate work from leisure and promoting healthier habits—all with minimal effort.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        2. <strong>Ideation: Creative Solutions to Reduce Stress</strong>
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        We brainstormed ideas, focusing on <strong>controllable home zones</strong> that adjust lighting, sounds, and curtains to create the perfect atmosphere for work, relaxation, or chores. 
        We also introduced <strong>time-based zones</strong> to help users maintain a healthy routine, like automatically dimming lights at bedtime. Additionally, the app offers <strong>behavioral nudges</strong> to encourage healthier habits, such as reducing screen time and managing noise levels.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        3. <strong>Experimentation: Testing and Improving</strong>
      </Typography>
      <Typography variant="body1">
        <em>Home Safe</em> is continuously refined through testing and feedback. We gather data from real users to optimize the app, ensuring that smart zones adapt to individual needs. 
        By analyzing smart home data, such as sleep patterns and screen usage, we aim to provide personalized recommendations that help users lead less stressful, healthier lives.
      </Typography>
    </Box>
  );
};

export default DesignThinking;
