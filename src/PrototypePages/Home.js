import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid, Slider, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { lighten, darken, color } from '@mui/system';
import {  WbTwilight } from '@mui/icons-material';
import { WbSunny } from '@mui/icons-material';
import { Nightlight } from '@mui/icons-material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { Kitchen, Living, Bathroom, SportsEsports, Work, Bed } from '@mui/icons-material';
 

const zones = [
  { name: 'Living Room', color: '#87CEEB', path: '/living-room', icon: <Living /> },
  { name: 'Kitchen', color: '#98FB98', path: '/kitchen', icon: <Kitchen /> },
  { name: 'Bathroom', color: '#FFD700', path: '/bathroom', icon: <Bathroom /> },
  { name: 'Gaming Room', color: '#FFD700', path: '/gaming-room', icon: <SportsEsports /> },
  { name: 'Office', color: '#FFB6C1', path: '/office', icon: <Work /> },
  { name: 'Bedroom', color: '#FF6347', path: '/bedroom', icon: <Bed /> },
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
    return '#E0FFFF'; // Midday
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

const getTimeOfDayIcon = (timeOfDay, iconColor) => {
  if (timeOfDay === 0) {
    return <WbTwilight sx={{ fontSize: 60, color: iconColor, transition: 'color 1s ease-in-out' }} />;
  } else if (timeOfDay === 50) {
    return <WbSunny sx={{ fontSize: 60, color: iconColor, transition: 'color 1s ease-in-out' }} />;
  } else {
    return <Nightlight sx={{ fontSize: 60, color: iconColor, transition: 'color 1s ease-in-out' }} />;
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

  const textColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#4A4A4A ' : '#333'; 
  const iconColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#4A4A4A ' : '#333'; 
  const sliderColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#4A4A4A ' : 'black';

  const timeOfDayIcon = getTimeOfDayIcon(timeOfDay, iconColor);
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
        transition: 'background-color 1s ease-in-out', 
        position: 'relative'
      }}
    >
      {/* Personalized Daily Routine Suggestions */}
      <Card 
          sx={{ 
            backgroundColor: darken(backgroundColor, 0.05),
            transition: 'background-color 1s ease-in-out', 
            textAlign: 'center',
            padding: 2,
            width: '300px',
            position: 'absolute',
            marginLeft: 115,
            marginBottom: 57
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: textColor, transition: 'color 1s ease-in-out', fontWeight: 'bold' }}>
            Daily Routine Suggestions
          </Typography>
          <Typography variant="body1" sx={{ color: textColor, transition: 'color 1s ease-in-out' }}>
            {suggestion}
          </Typography>
      </Card>

      
      
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%', 
          marginBottom: 3
        }}
      > 
      
        <Typography variant="h4" gutterBottom 
          sx={{ color: textColor,
          transition: 'color 1s ease-in-out',
          fontWeight: 'bold'
         }}>
          HomeZafe
        </Typography>
        
        <SelfImprovementIcon 
          sx={{ 
            fontSize: 40, 
            color: iconColor, 
            marginBottom: 1,
            transition: 'color 1s ease-in-out'
          }} 
        />
        {/* Time of Day Slider */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '60%', maxWidth: '300px' }}>
          <WbTwilight sx={{ color: iconColor, fontSize: 35, transition: 'color 1s ease-in-out', marginBottom: 0.5 }} />
          <Slider 
            value={timeOfDay} 
            onChange={handleSliderChange} 
            min={0} 
            max={100} 
            step={50}
            sx={{
              flex: 1,
              color: sliderColor,
              transition: 'color 1s ease-in-out',
              '& .MuiSlider-thumb': {
                backgroundColor: sliderColor,
                transition: 'color 1s ease-in-out' 
              },
              '& .MuiSlider-track': {
                backgroundColor: sliderColor, 
                transition: 'color 1s ease-in-out'
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#ccc',
                transition: 'color 1s ease-in-out'
              },
            }}
          />
          <Nightlight sx={{ color: iconColor, fontSize: 30, transition: 'color 1s ease-in-out' }} />
        </Box>
        
      </Box>
      
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: 2, 
          marginBottom: 3,
          width: '80%'
        }}
      > 
        {/* Time of Day State Box */}
      <Box 
          sx={{ display: 'flex',
            alignItems: 'center', 
            gap: 1,
           
          }}>
          <IconButton onClick={() => navigate('/time-of-day-info')}>
            <InfoOutlinedIcon sx={{ color: iconColor, fontSize: 40, transition: 'color 1s ease-in-out' }} />
          </IconButton>
          <timeOfDayIcon>
            {timeOfDayIcon}
          </timeOfDayIcon>
      </Box>
        {/* Zone Adjusters Buttons */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2 
          }}
        > 
          <IconButton 
            onClick ={() => navigate('/zone-adjust-info')}
            sx={{ 
              marginTop: 0.2
            }}

          >
            <InfoOutlinedIcon sx={{
              color: iconColor,
              fontSize: 40, 
              transition: 'color 1s ease-in-out', 
            }}/>
          </IconButton>
          <IconButton 
            onClick={() => handleModeChange(<LaptopChromebookRoundedIcon />)}
            sx={{ 
              backgroundColor: '#FFB6C1',
              transition: 'background-color 0.2s ease-in-out', 
              borderRadius: '50%',
              width: 60,  
              height: 60,  
              '&:hover': { backgroundColor: '#FFC1CC' } 
            }}
          >
            <LaptopChromebookRoundedIcon sx={{color: '#333'}}/>
          </IconButton>
          <IconButton 
            onClick={() => handleModeChange(<SelfImprovementIcon />)}
            sx={{ 
              backgroundColor: '#FFD700',
              transition: 'background-color 0.2s ease-in-out', 
              borderRadius: '50%', 
              width: 60,  
              height: 60, 
              '&:hover': { backgroundColor: '#FFEA70' } 
            }}
          >
            <SelfImprovementIcon sx={{color: '#333'}} />
          </IconButton>
          <IconButton 
            onClick={() => handleModeChange(<CleaningServicesRoundedIcon />)}
            sx={{ 
              backgroundColor: '#FF6347',
              transition: 'background-color 0.2s ease-in-out', 
              borderRadius: '50%', 
              width: 60, 
              height: 60, 
              '&:hover': { backgroundColor: '#FF7F7F' } 
            }}
          >
            <CleaningServicesRoundedIcon sx={{color: '#333'}} />
          </IconButton>
        </Box>
      </Box>

      {/* Rooms */}
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {zones.map((zone, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={zone.path} style={{ textDecoration: 'none' }}>
              <Card sx={{ 
                backgroundColor: zone.color, color: '#333', 
                borderRadius: 2,
                transition: 'background-color 0.2s ease-in-out',
                '&:hover': { backgroundColor: darken(zone.color, 0.1) }, }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: 1, color: '#333' }}>
                      {zone.icon}
                    </Box>
                    <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
                      {zone.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box variant="body2" sx={{ marginBottom: 2 }}>
                      
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {selectedModeIcon ? (
                        <IconButton sx={{ color: '#333' }}>
                          {selectedModeIcon}
                        </IconButton>
                      ) : (
                        zoneIcons[zone.name] && (
                          <IconButton sx={{ color: '#333' }}>
                            {zoneIcons[zone.name]}
                          </IconButton>
                        )
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
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: 2, 
          marginTop: 5,
          width: '80%'
        }}
      >
        {/* Display current activity if it matches the time of day */}
        {currentActivity && (
          <Card 
            sx={{ 
              backgroundColor: darken(backgroundColor, 0.05), 
              padding: 1, 
              textAlign: 'center', 
              maxWidth: '320px',
              maxHeight: '120px',
              display: 'flex',
              color: textColor,
              transition: 'background-color 1s ease-in-out, color 1s ease-in-out', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flex: 1 
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 'bold' }} variant="h7">StressFree Activity:</Typography>
              <Typography sx={{ fontWeight: 'bold' }} variant="h8">{currentActivity.activity}</Typography>
              <Typography sx={{ fontWeight: 'bold' }} variant="body2">Room: {currentActivity.room}</Typography>
            </Box>
            <Button 
              onClick={() => handleActivateActivity(currentActivity.room)} 
              sx={{ color: textColor, fontWeight: 'bold' }}
            >
              Activate
            </Button>
          </Card>
        )}

        {/* Song Playing Section */}
        <Card 
          sx={{ 
            backgroundColor: darken(backgroundColor, 0.05),
            transition: 'background-color 1s ease-in-out', 
            width: '340px', 
            textAlign: 'center', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 1, 
            padding: 1,
            flex: 1,
            maxWidth: '400px', 
          }}
        >
          <Typography variant="body1" sx={{ color: textColor, transition: 'color 1s ease-in-out', fontWeight: 'bold' }}>
            {songPlayingText}
          </Typography>
          <IconButton sx={{ color: iconColor, transition: 'color 1s ease-in-out' }}>
            <VolumeUpRoundedIcon />
          </IconButton>
          <IconButton sx={{ color: iconColor, transition: 'color 1s ease-in-out' }}>
            <PauseRoundedIcon />
          </IconButton>
        </Card>

        {/* Button to navigate to the stress-free calendar */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 1
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: textColor, 
              textAlign: 'center', 
              fontWeight: 'bold', 
              lineHeight: '1.2' 
            }}
          >
            Stress<br />
            Free<br />
            Calendar
          </Typography>
          
          <IconButton
            variant="contained"
            onClick={() => navigate('/stress-free-calendar')}
            sx={{
              backgroundColor: darken(backgroundColor, 0.1),
              transition: 'background-color 1s ease-in-out', 
              borderRadius: '50%',
              width: 60,  
              height: 60,  
              '&:hover': { backgroundColor: darken(backgroundColor, 0.2) } 
            }}
          >
            <CalendarMonthRoundedIcon sx={{ fontSize: 40, color: iconColor, transition: 'color 1s ease-in-out' }} />
          </IconButton>
        </Box>
      </Box>


    </Box>  
  );
};

export default HomeScreen;
