import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { darken, lighten } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) {
      return 0; // Morning
    } else if (hour >= 11 && hour < 17) {
      return 50; // Midday
    } else {
      return 100; // Night
    }
  };
  
  const getBackgroundColor = (timeOfDay) => {
    if (timeOfDay === 0) {
      return '#FFEBB8'; // Morning
    } else if (timeOfDay === 50) {
      return '#E0FFFF'; // Midday
    } else {
      return '#00468B'; // Night
    }
  };

const ZoneAdjustInfo = () => {
    const [timeOfDay] = useState(getCurrentTimeOfDay());
    const backgroundColor = getBackgroundColor(timeOfDay);
    const textColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#4A4A4A' : '#333';
    const iconColor = textColor;
    const navigate = useNavigate();

    return (
        
        <Box
        sx={{
            padding: 4,
            backgroundColor: backgroundColor,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
        <IconButton 
            onClick={() => navigate('/prototype-home')} 
            sx={{
            position:'absolute',
            marginRight: 170,
            marginBottom: 110,
            backgroundColor: iconColor,
            '&:hover': { backgroundColor: darken(iconColor, 0.3) }
            }}>

            <ArrowBackRoundedIcon sx={{
              color: backgroundColor,
              fontSize: 50, 
              transition: 'color 1s ease-in-out', 
            }}/>
        </IconButton>    
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 3, color: textColor, fontWeight: 'Bold' }}>
            Zone Adjusters Information
        </Typography>
        
        {/* Info Card for each mode */}
        <Card sx={{ maxWidth: 500, marginBottom: 3, padding: 2, backgroundColor: '#FFB6C1'}}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ backgroundColor: '#FFB6C1', marginRight: 2 }}>
                <LaptopChromebookRoundedIcon sx={{ fontSize: 40, color: '#333' }} />
            </IconButton>
            <Box>
                <Typography sx={{color: '#333', fontWeight: 'Bold'}} variant="h6" gutterBottom>
                Focus Mode
                </Typography>
                <Typography sx={{color: '#333', fontWeight: 'Bold'}} variant="body1">
                Focus Mode helps create an environment conducive to concentration by adjusting the lighting to a soft, warm hue and minimizing distractions. The background sound is reduced, and white noise is activated to aid concentration, perfect for work or study sessions. It aims to reduce stress by creating a controlled, distraction-free space.
                </Typography>
            </Box>
            </CardContent>
        </Card>

        <Card sx={{ maxWidth: 500, marginBottom: 3, padding: 2, backgroundColor: '#FFD700' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ backgroundColor: '#FFD700', marginRight: 2 }}>
                <SelfImprovementIcon sx={{ fontSize: 40, color: '#333'}} />
            </IconButton>
            <Box>
                <Typography sx={{color: '#333', fontWeight: 'Bold'}} variant="h6" gutterBottom>
                Relax Mode
                </Typography>
                <Typography sx={{color: '#333', fontWeight: 'Bold'}} variant="body1">
                Relax Mode transforms your home into a tranquil space. It dims the lights to a soft, amber glow, simulating a sunset to encourage winding down. A calming music playlist or nature sounds are gently played in the background. This mode helps relieve stress and anxiety, making it perfect for relaxation after a long day or for meditation sessions.
                </Typography>
            </Box>
            </CardContent>
        </Card>

        <Card sx={{ maxWidth: 500, padding: 2, backgroundColor: '#FF6347' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ backgroundColor: '#FF6347', marginRight: 2 }}>
                <CleaningServicesRoundedIcon sx={{ fontSize: 40, color: '#333' }} />
            </IconButton>
            <Box>
                <Typography sx={{color: '#333', fontWeight: 'Bold'}} variant="h6" gutterBottom>
                Clean Mode
                </Typography>
                <Typography sx={{color: '#333', fontWeight: 'Bold'}} variant="body1">
                Clean Mode helps keep your space fresh and tidy, reducing clutter and enhancing your mental well-being. When activated, it brightens the room’s lighting, making it easier to spot areas that need cleaning. It can also play upbeat music to energize you while you clean. This mode is designed to turn tidying up into a stress-relieving activity, creating a cleaner and more comfortable environment.
                </Typography>
            </Box>
            </CardContent>
        </Card>
        </Box>
    );
};

export default ZoneAdjustInfo;
