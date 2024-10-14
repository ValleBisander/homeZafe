import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const zones = [
  { name: 'Living Room', color: '#87CEEB', status: 'Focus mode active', icons: [<LightbulbIcon />, <VolumeUpIcon />], path: '/living-room' },
  { name: 'Kitchen', color: '#98FB98', status: 'Cooking mode', icons: [<AcUnitIcon />], path: '/kitchen' },
  { name: 'Bathroom', color: '#FFD700', status: 'Relax mode', icons: [<LightbulbIcon />], path: '/bathroom' },
  { name: 'Gaming Room', color: '#FFD700', status: 'Chill mode', icons: [<VolumeUpIcon />], path: '/gaming-room' },
  { name: 'Office', color: '#FFB6C1', status: 'Work mode', icons: [<LightbulbIcon />, <AcUnitIcon />], path: '/office' },
  { name: 'Bedroom', color: '#FF6347', status: 'Sleep mode', icons: [<LightbulbIcon />], path: '/bedroom' },
];

const HomeScreen = () => {
  return (
    <Box 
      sx={{ 
        padding: 4, 
        backgroundColor: '#f7f7f7', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Typography variant="h4" gutterBottom>
        HomeZafe
      </Typography>
      
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {zones.map((zone, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={zone.path} style={{ textDecoration: 'none' }}>
              <Card 
                sx={{ backgroundColor: zone.color, color: '#333', borderRadius: 2 }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    {zone.name}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    {zone.status}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {zone.icons.map((icon, idx) => (
                      <IconButton key={idx} sx={{ color: '#333' }}>
                        {icon}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeScreen;
