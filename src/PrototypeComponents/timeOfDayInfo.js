import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { WbSunny, WbTwilight} from '@mui/icons-material';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { darken } from '@mui/system';
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

const TimeOfDayInfo = () => {
    const [timeOfDay] = useState(getCurrentTimeOfDay());
    const backgroundColor = getBackgroundColor(timeOfDay);
    const textColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#4A4A4A' : '#333';
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
                    position: 'absolute',
                    marginRight: 170,
                    marginBottom: 90,
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

            <Typography
                variant="h4"
                gutterBottom
                sx={{ marginBottom: 3, color: '#4A4A4A', fontWeight: 'Bold' }}
            >
                Time of Day Automation Info
            </Typography>

            {/* Info Card for Zon Morning */}
            <Card sx={{ maxWidth: 500, marginBottom: 3, padding: 2, backgroundColor: '#FFEBB8' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ backgroundColor: '#FFEBB8', marginRight: 2 }}>
                        <WbTwilight sx={{ fontSize: 40, color: '#333' }} />
                    </IconButton>
                    <Box>
                        <Typography sx={{ color: '#333', fontWeight: 'Bold' }} variant="h6" gutterBottom>
                            Zone Morning
                        </Typography>
                        <Typography sx={{ color: '#333' }} variant="body1">
                            Zone Morning activates every morning to help you wake up peacefully. Curtains open to let in natural light, overhead lights remain off, and other lights gradually turn on. Nature sounds play from speakers, and the kettle starts boiling, easing you into the day stress-free.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Info Card for Zon midday */}
            <Card sx={{ maxWidth: 500, marginBottom: 3, padding: 2, backgroundColor: '#E0FFFF' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ backgroundColor: '#E0FFFF', marginRight: 2 }}>
                        <WbSunny sx={{ fontSize: 40, color: '#333' }} />
                    </IconButton>
                    <Box>
                        <Typography sx={{ color: '#333', fontWeight: 'Bold' }} variant="h6" gutterBottom>
                            Zone Midday
                        </Typography>
                        <Typography sx={{ color: '#333' }} variant="body1">
                            Zone Midday is triggered when you usually leave the apartment. The curtains in your bedroom are closed, other curtains are opened, and the lighting is controlled by wall switches. This creates a stress-free environment by automating routine tasks and saving you time.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Info Card for Zon Night */}
            <Card sx={{ maxWidth: 500, padding: 2, backgroundColor: '#00468B' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ backgroundColor: '#00468B', marginRight: 2 }}>
                        <BedtimeRoundedIcon sx={{ fontSize: 40, color: '#FFFDD0' }} />
                    </IconButton>
                    <Box>
                        <Typography sx={{ color: '#FFFDD0', fontWeight: 'Bold' }} variant="h6" gutterBottom>
                            Zone Night
                        </Typography>
                        <Typography sx={{ color: '#FFFDD0' }} variant="body1">
                            Zone Night activates at bedtime every day. Curtains are drawn, ceiling lights dim slowly to off, and the bedside lamp turns on. After five minutes, the TV and speakers automatically turn off unless overridden, helping you wind down and sleep better.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TimeOfDayInfo;
