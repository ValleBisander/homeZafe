import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Explore = () => {
  const sections = [
    { title: "Overview and Demo", path: "/overview", description: "See the overview and demo of our software innovation." },
    { title: "Design Thinking", path: "/design-thinking", description: "Learn how our innovation fulfills the three Design Thinking principles." },
    { title: "Background Information", path: "/background", description: "Explore background details about the project and its context." },
    { title: "Team Members", path: "/team", description: "Meet our team members and learn more about us." },
    { title: "Contact Information", path: "/contact", description: "Get in touch with our team through the contact details provided." },
    { title: "References", path: "/references", description: "All references and sources used in this project." },
    { title: "Chalmers Info", path: "/chalmers-info", description: "Chalmers logo and course name with further details." }
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>
        Explore Our Project
      </Typography>
      
      <Grid container spacing={4}>
        {sections.map((section, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  {section.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
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
