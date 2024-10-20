import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid, Slider, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { lighten } from '@mui/system';
import { WbTwilight } from '@mui/icons-material';
import NightlightIcon from '@mui/icons-material/Nightlight';  
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

const zones = [
  { name: 'Living Room', color: '#87CEEB', status: 'Focus mode active', path: '/living-room' },
  { name: 'Kitchen', color: '#98FB98', status: 'Cooking mode', path: '/kitchen' },
  { name: 'Bathroom', color: '#FFD700', status: 'Relax mode', path: '/bathroom' },
  { name: 'Gaming Room', color: '#FFD700', status: 'Chill mode', path: '/gaming-room' },
  { name: 'Office', color: '#FFB6C1', status: 'Work mode', path: '/office' },
  { name: 'Bedroom', color: '#FF6347', status: 'Sleep mode', path: '/bedroom' },
];

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
    return '#87CEEB'; // Midday
  } else {
    return '#00468B'; // Night
  }
};

const getSuggestionForTimeOfDay = (timeOfDay) => {
  if (timeOfDay === 0) {
    return 'Good Morning! How about a quick stretch to start the day?';
  } else if (timeOfDay === 50) {
    return 'Midday check-in: Take a moment to hydrate and breathe deeply.';
  } else {
    return 'Evening time: Consider some quiet time to wind down and relax.';
  }
};

const getSongPlayingText = (timeOfDay) => {
  if (timeOfDay === 0) {
    return 'Now Playing: Feel Good Morning';
  } else if (timeOfDay === 50) {
    return 'Now Playing: Jazz Classics';
  } else {
    return 'Now Playing: Relaxing Music';
  }
};

const HomeScreen = ({ activities }) => {
  const [timeOfDay, setTimeOfDay] = useState(getCurrentTimeOfDay());
  const [selectedModeIcon, setSelectedModeIcon] = useState(null);
  const [zoneIcons, setZoneIcons] = useState({});
  const navigate = useNavigate();

  const handleSliderChange = (event, newValue) => {
    setTimeOfDay(newValue);
  };

  const handleModeChange = (icon) => {
    setSelectedModeIcon(icon);
  };

  const handleActivateActivity = (roomName) => {
    setZoneIcons((prev) => ({
      ...prev,
      [roomName]: <SelfImprovementIcon />, 
    }));
  };

  useEffect(() => {
    setTimeOfDay(getCurrentTimeOfDay());
  }, []);
  const backgroundColor = getBackgroundColor(timeOfDay);
  const suggestion = getSuggestionForTimeOfDay(timeOfDay);
  const songPlayingText = getSongPlayingText(timeOfDay);

  const textColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#964B00' : '#333'; 
  const iconColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#964B00' : '#333'; 
  const sliderColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#964B00' : 'black';

  const currentActivity = activities.find(activity => activity.activityTime === timeOfDay);

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
        transition: 'background-color 0.5s ease-in-out', 
        position: 'relative'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: textColor }}>
        HomeZafe
      </Typography>
      
      <SelfImprovementIcon 
        sx={{ 
          fontSize: 40, 
          color: iconColor, 
          marginBottom: 1,
          marginTop: 0.1 
        }} 
      />

      {/* Time of Day Slider */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '60%', maxWidth: '300px', marginBottom: 3 }}>
        <WbTwilight sx={{ color: iconColor, fontSize: 35 }} />
        <Slider 
          value={timeOfDay} 
          onChange={handleSliderChange} 
          min={0} 
          max={100} 
          step={50}
          sx={{
            flex: 1,
            color: sliderColor, 
            '& .MuiSlider-thumb': {
              backgroundColor: sliderColor, 
            },
            '& .MuiSlider-track': {
              backgroundColor: sliderColor, 
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#ccc',
            },
          }}
        />
        <NightlightIcon sx={{ color: iconColor, fontSize: 30 }} />
      </Box>
      
      {/* Zone Adjusters Buttons */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 150, 
          right: 200, 
          display: 'flex', 
          gap: 4 
        }}
      >
        <IconButton 
          onClick={() => handleModeChange(<LaptopChromebookRoundedIcon />)}
          sx={{ 
            backgroundColor: '#FFB6C1', 
            borderRadius: '50%',
            width: 60,  
            height: 60,  
            '&:hover': { backgroundColor: '#FFC1CC' } 
          }}
        >
          <LaptopChromebookRoundedIcon />
        </IconButton>
        <IconButton 
          onClick={() => handleModeChange(<SelfImprovementIcon />)}
          sx={{ 
            backgroundColor: '#FFD700', 
            borderRadius: '50%', 
            width: 60,  
            height: 60, 
            '&:hover': { backgroundColor: '#FFEA70' } 
          }}
        >
          <SelfImprovementIcon />
        </IconButton>
        <IconButton 
          onClick={() => handleModeChange(<CleaningServicesRoundedIcon />)}
          sx={{ 
            backgroundColor: '#FF6347', 
            borderRadius: '50%', 
            width: 60, 
            height: 60, 
            '&:hover': { backgroundColor: '#FF7F7F' } 
          }}
        >
          <CleaningServicesRoundedIcon />
        </IconButton>
      </Box>
      
      {/* Personalized Daily Routine Suggestions */}
      <Card 
        sx={{ 
          position: 'absolute', 
          backgroundColor: backgroundColor,
          top: 120, 
          left: 140, 
          width: '300px', 
          textAlign: 'center', 
          padding: 0.5,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: textColor }}>
          Daily Routine Suggestions
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: textColor }}>
          {suggestion}
        </Typography>
      </Card>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {zones.map((zone, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={zone.path} style={{ textDecoration: 'none' }}>
              <Card sx={{ backgroundColor: zone.color, color: '#333', borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="h6" sx={{ marginBottom: 1 }}>
                        {zone.name}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        {zone.status}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {zoneIcons[zone.name] && (
                        <IconButton sx={{ color: '#333' }}>
                          {zoneIcons[zone.name]}
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>


      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 10,
          marginTop: 4
        }}
      >
        {/* Display current activity if it matches the time of day */}
        {currentActivity && (
        <Card sx={{ 
          backgroundColor: backgroundColor, 
          padding: 1, 
          textAlign: 'center', 
          width: '350px',
          color: textColor,
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between'
        }}>
          <Box>
            <Typography variant="h6">StressFree Activity:</Typography>
            <Typography variant="h7">{currentActivity.activity}</Typography>
            <Typography variant="body2">Room: {currentActivity.room}</Typography>
          </Box>
          <Button 
            onClick={() => handleActivateActivity(currentActivity.room)} 
            sx={{ color: textColor }}
          >
            Activate
          </Button>
        </Card>
        )}

        {/* Song Playing Section */}
        <Card sx={{ 
          backgroundColor: backgroundColor,
          width: '340px', 
          textAlign: 'center', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 1, 
          padding: 1 
        }}>
          <Typography variant="body1" sx={{ color: textColor }}>
            {songPlayingText}
          </Typography>
          <IconButton sx={{ color: iconColor }}>
            <VolumeUpRoundedIcon />
          </IconButton>
          <IconButton sx={{ color: iconColor }}>
            <PauseRoundedIcon />
          </IconButton>
        </Card>

        {/* Button to navigate to the stress-free calendar */}
        <Button 
          variant="contained" 
          onClick={() => navigate('/stress-free-calendar')} 
          sx={{ 
            backgroundColor: backgroundColor,
            '&:hover': { backgroundColor: lighten(backgroundColor, 0.2) },
            height: 'fit-content',
            color: textColor
          }}
        > 
          Open Stress-Free Calendar
        </Button>
      </Box>
    </Box>  
  );
};

export default HomeScreen;
