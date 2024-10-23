import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { darken } from '@mui/system';
import { Kitchen, Living, Bathroom, SportsEsports, Work, Bed } from '@mui/icons-material';

const RoomPage = ({ roomName, backgroundColor }) => {
  const navigate = useNavigate();

  const getTextColor = (bgColor) => {
   
    if (bgColor === '#FFD700') return '#000'; 
    if (bgColor === '#FF6347') return '#FFF'; 
    return '#333'; 
  };
  const getRoomIcon = (roomName) => {
    switch (roomName) {
      case 'Kitchen':
        return <Kitchen sx={{ fontSize: 50, color: textColor }} />;
      case 'Living Room':
        return <Living sx={{ fontSize: 50, color: textColor }} />;
      case 'Bathroom':
        return <Bathroom sx={{ fontSize: 50, color: textColor }} />;
      case 'Gaming Room':
        return <SportsEsports sx={{ fontSize: 50, color: textColor }} />;
      case 'Office':
        return <Work sx={{ fontSize: 50, color: textColor }} />;
      case 'Bedroom':
        return <Bed sx={{ fontSize: 50, color: textColor }} />;
      default:
        return null;
    }
  };

  const textColor = getTextColor(backgroundColor);

  return (
    <Box
        sx={{
        padding: 4,
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
    >
        {/* Title */}
        <Typography variant="h4" gutterBottom sx={{ color: textColor, fontWeight: 'bold', marginTop: 3, marginBottom: 3 }}>
        {roomName}
        </Typography>

        {/* Dynamic Room Icon based on the roomName */}
        <Box sx={{ marginBottom: 6}}>
            {getRoomIcon(roomName)}
        </Box>

        {/* Info Card for each mode */}
        <Card sx={{ maxWidth: 500, marginBottom: 3, padding: 2, backgroundColor: '#333'}}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ backgroundColor: '#FFB6C1', marginRight: 2, '&:hover': { backgroundColor: darken('#FFB6C1', 0.3) } }}>
                <LaptopChromebookRoundedIcon sx={{ fontSize: 40, color: '#333',  }} />
            </IconButton>
            <Box>
                <Typography sx={{color: '#FFFDD0', fontWeight: 'Bold'}} variant="h6" gutterBottom>
                Focus Mode
                </Typography>
                <Typography sx={{color: '#FFFDD0', fontWeight: 'Bold'}} variant="body1">
                Focus Mode helps create an environment conducive to concentration by adjusting the lighting to a soft, warm hue and minimizing distractions. The background sound is reduced, and white noise is activated to aid concentration, perfect for work or study sessions. It aims to reduce stress by creating a controlled, distraction-free space.
                </Typography>
            </Box>
            </CardContent>
        </Card>

        <Card sx={{ maxWidth: 500, marginBottom: 3, padding: 2, backgroundColor: '#333' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ backgroundColor: '#FFD700', marginRight: 2, '&:hover': { backgroundColor: darken('#FFD700', 0.3) }  }}>
                <SelfImprovementIcon sx={{ fontSize: 40, color: '#333'}} />
            </IconButton>
            <Box>
                <Typography sx={{color: '#FFFDD0', fontWeight: 'Bold'}} variant="h6" gutterBottom>
                Relax Mode
                </Typography>
                <Typography sx={{color: '#FFFDD0', fontWeight: 'Bold'}} variant="body1">
                Relax Mode transforms your home into a tranquil space. It dims the lights to a soft, amber glow, simulating a sunset to encourage winding down. A calming music playlist or nature sounds are gently played in the background. This mode helps relieve stress and anxiety, making it perfect for relaxation after a long day or for meditation sessions.
                </Typography>
            </Box>
            </CardContent>
        </Card>

        <Card sx={{ maxWidth: 500, padding: 2, backgroundColor: '#333' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ backgroundColor: '#FF6347', marginRight: 2, '&:hover': { backgroundColor: darken('#FF6347', 0.3) } }}>
                <CleaningServicesRoundedIcon sx={{ fontSize: 40, color: '#F5F5F5' }} />
            </IconButton>
            <Box>
                <Typography sx={{color: '#FFFDD0', fontWeight: 'Bold'}} variant="h6" gutterBottom>
                Clean Mode
                </Typography>
                <Typography sx={{color: '#FFFDD0', fontWeight: 'Bold'}} variant="body1">
                Clean Mode helps keep your space fresh and tidy, reducing clutter and enhancing your mental well-being. When activated, it brightens the room’s lighting, making it easier to spot areas that need cleaning. It can also play upbeat music to energize you while you clean. This mode is designed to turn tidying up into a stress-relieving activity, creating a cleaner and more comfortable environment.
                </Typography>
            </Box>
            </CardContent>
        </Card>

        {/* Redirect to Home after clicking a zone adjuster */}
        <IconButton
            onClick={() => navigate('/prototype-home')}
            sx={{
                position: 'absolute',
                marginRight: 170,
                marginTop: 5,
                backgroundColor: '#333',
                '&:hover': { backgroundColor: darken('#333', 0.3) },
            }}
        >
            <ArrowBackRoundedIcon
                sx={{
                    color: backgroundColor,
                    fontSize: 50,
                    transition: 'color 1s ease-in-out',
                }}
            />
        </IconButton>

    </Box>
  );
};

export default RoomPage;
