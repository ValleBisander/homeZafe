import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Explore = () => {
  const sections = [
    { title: "Overview and Demo", path: "/overview", description: "See the overview and demo of our software innovation." },
    { title: "Design Thinking", path: "/design-thinking", description: "Learn how our innovation uses the three Design Thinking principles." },
    { title: "Background Information", path: "/background", description: "Explore background details about the project and its context." },
    { title: "References", path: "/references", description: "All references and sources used in this project." },
    { title: "Pitch Presentation", path: "/pitch-presentation", description: "A Pitch Presentation showcasing our project." },
    { title: "Pitch Video", path: "/pitch-video", description: "A brief video showcasing our project and its core features in action." },
    { title: "Our usage of Generative AI", path: "/generative-AI", description: "A discussion of how we used generative AI in our Capstone." }
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: '#003366', minHeight: '100vh', color: 'white' }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center', color: '#FFFDD0' }}>
        Explore Our Project
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {sections.map((section) => (
          <Grid item xs={12} md={4}>
            <Card sx={{
              height: '100%',
              backgroundColor:'#005b99',
              color: 'white',
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#004080'
              }
            }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ marginBottom: 2, color: '#FFFDD0' }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" color="white" sx={{ marginBottom: 2 }}>
                  {section.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FFFDD0',
                    color: '#003366',
                    '&:hover': { backgroundColor: '#FFC107' }
                  }}
                  component={Link}
                  to={section.path}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Explore;
