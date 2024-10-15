import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid, Slider, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';  
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded'
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';

const zones = [
  { name: 'Living Room', color: '#87CEEB', status: 'Focus mode active', icons: [<LightbulbIcon />, <VolumeUpIcon />], path: '/living-room' },
  { name: 'Kitchen', color: '#98FB98', status: 'Cooking mode', icons: [<AcUnitIcon />], path: '/kitchen' },
  { name: 'Bathroom', color: '#FFD700', status: 'Relax mode', icons: [<LightbulbIcon />], path: '/bathroom' },
  { name: 'Gaming Room', color: '#FFD700', status: 'Chill mode', icons: [<VolumeUpIcon />], path: '/gaming-room' },
  { name: 'Office', color: '#FFB6C1', status: 'Work mode', icons: [<LightbulbIcon />, <AcUnitIcon />], path: '/office' },
  { name: 'Bedroom', color: '#FF6347', status: 'Sleep mode', icons: [<LightbulbIcon />], path: '/bedroom' },
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
    return '#ADD8E6'; // Midday
  } else {
    return '#4B0082'; // Night
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

const HomeScreen = () => {
  const [timeOfDay, setTimeOfDay] = useState(getCurrentTimeOfDay());
  const [reminder, setReminder] = useState('');
  const [reminders, setReminders] = useState([]);

  const handleSliderChange = (event, newValue) => {
    setTimeOfDay(newValue);
  };

  const handleAddReminder = () => {
    if (reminder) {
      setReminders([...reminders, reminder]);
      setReminder('');
    }
  };

  useEffect(() => {
    setTimeOfDay(getCurrentTimeOfDay());
  }, []);

  const backgroundColor = getBackgroundColor(timeOfDay);
  const suggestion = getSuggestionForTimeOfDay(timeOfDay);

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
      <Typography  variant="h4" gutterBottom>
        HomeZafe
      </Typography>
      
      <SelfImprovementIcon 
        sx={{ 
          fontSize: 40, 
          color: '#333', 
          marginBottom: 1,
          marginTop: 0.1 
        }} 
      />

      {/* Time of Day Slider */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '60%', maxWidth: '300px', marginBottom: 3 }}>
        <WbSunnyIcon />
        <Slider 
          value={timeOfDay} 
          onChange={handleSliderChange} 
          min={0} 
          max={100} 
          step={50}
          sx={{
            flex: 1,
            color: 'black', 
            '& .MuiSlider-thumb': {
              backgroundColor: 'black', 
            },
            '& .MuiSlider-track': {
              backgroundColor: 'black', 
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#ccc',
            },
          }}
        />
        <NightlightIcon />
      </Box>
      
      {/* Zone Adjusters Buttons */}
      <Typography sx={{ 
          position: 'absolute', 
          top: 110, 
          right: 255, 
          display: 'flex', 
          gap: 4 
        }} variant="h6" gutterBottom>
        Zone Adjusters
        </Typography>
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
          top: 80, 
          left: 140, 
          width: '300px', 
          textAlign: 'center', 
          padding: 0.5,
          
        }}
      >
        <Typography variant="h6" gutterBottom>
        Daily Routine Suggestions
        </Typography>
        <Typography variant="body1" gutterBottom>
          {suggestion}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', marginTop: 2 }}>
          
          <IconButton onClick={handleAddReminder} color="primary">
            <NotificationsIcon />
          </IconButton>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          {reminders.map((rem, index) => (
            <Typography key={index} variant="body2" sx={{ textAlign: 'left', marginTop: 1 }}>
              - {rem}
            </Typography>
          ))}
        </Box>
      </Card>

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

      {/* Song Playing Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="body1">
          Song Playing:
        </Typography>
        <Typography variant="body2">
          “Sexual Healing” by Marvin Gaye
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeScreen;
