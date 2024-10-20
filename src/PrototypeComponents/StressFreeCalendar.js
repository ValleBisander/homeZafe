import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { WbSunny, Nightlight, WbTwilight, Spa, Book, MusicNote, FitnessCenter, SelfCare } from '@mui/icons-material';
import { Kitchen, Living, Bathroom, SportsEsports, Work, Bed } from '@mui/icons-material';
import { lighten } from '@mui/system';

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

const StressFreeCalendar = ({ onSaveActivity }) => {
  const [activity, setActivity] = useState('');
  const [room, setRoom] = useState('');
  const [timeOfDay, setTimeOfDay] = useState(getCurrentTimeOfDay());
  const [activityTime, setActivityTime] = useState('');
  const [activityIcon, setActivityIcon] = useState();
  const navigate = useNavigate();

  const handleSave = () => {
    if (activity && room) {
      onSaveActivity({ activity, room, activityTime });
      navigate('/prototype-home');
    }
  };

  const backgroundColor = getBackgroundColor(timeOfDay);
  const textColor = timeOfDay === 100 ? '#FFFDD0' : timeOfDay === 50 ? '#964B00' : '#333';
  const iconColor = textColor;

  const selectStyle = {
    marginBottom: 2,
    width: '300px',
    color: textColor,
    '& .MuiSelect-outlined': {
      backgroundColor: lighten(backgroundColor, 0.1),
      borderRadius: '8px',
      borderColor: textColor,
      '&:hover': {
        backgroundColor: lighten(backgroundColor, 0.4),
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: textColor,
    },
    '& .MuiSelect-icon': {
      color: textColor,
    },
  };

  const menuProps = {
    PaperProps: {
      style: {
        backgroundColor: lighten(backgroundColor, 0.1),
        borderRadius: '8px',
      },
    },
    MenuListProps: {
      sx: {
        color: textColor,
        '& .MuiMenuItem-root': {
          '&:hover': {
            backgroundColor: lighten(backgroundColor, 0.2),
          },
        },
      },
    },
  };

  return (
    <Box 
      sx={{ 
        padding: 4, 
        backgroundColor: backgroundColor, 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        transition: 'background-color 0.5s ease-in-out'
      }}
    >
      {/* Logo and Icon */}
      <Typography variant="h4" gutterBottom sx={{ color: textColor }}>
        HomeZafe
      </Typography>
      <SelfImprovementIcon 
        sx={{ 
          fontSize: 40, 
          color: iconColor, 
          marginBottom: 3 
        }} 
      />

      <Typography variant="h5" gutterBottom sx={{ color: textColor }}>
        Plan Your Relaxation
      </Typography>
      
      {/* Activity Selection */}
      <Select 
        value={activity} 
        onChange={(e) => setActivity(e.target.value)} 
        displayEmpty 
        sx={selectStyle}
        MenuProps={menuProps}
      >
        <MenuItem value="" disabled>Select Activity</MenuItem>
        <MenuItem value="Meditation"><SelfImprovementIcon sx={{ color: iconColor, marginRight: 1 }} /> Meditation</MenuItem>
        <MenuItem value="Yoga"><Spa sx={{ color: iconColor, marginRight: 1 }} /> Yoga</MenuItem>
        <MenuItem value="Reading"><Book sx={{ color: iconColor, marginRight: 1 }} /> Reading</MenuItem>
        <MenuItem value="Listening to Music"><MusicNote sx={{ color: iconColor, marginRight: 1 }} /> Listening to Music</MenuItem>
        <MenuItem value="Light Stretching"><FitnessCenter sx={{ color: iconColor, marginRight: 1 }} /> Light Stretching</MenuItem>
      </Select>

      {/* Room Selection */}
      <Select 
        value={room} 
        onChange={(e) => setRoom(e.target.value)} 
        displayEmpty 
        sx={selectStyle}
        MenuProps={menuProps}
      >
        <MenuItem value="" disabled>Select Room</MenuItem>
        <MenuItem value="Living Room"><Living sx={{ color: iconColor, marginRight: 1 }} /> Living Room</MenuItem>
        <MenuItem value="Kitchen"><Kitchen sx={{ color: iconColor, marginRight: 1 }} /> Kitchen</MenuItem>
        <MenuItem value="Bathroom"><Bathroom sx={{ color: iconColor, marginRight: 1 }} /> Bathroom</MenuItem>
        <MenuItem value="Gaming Room"><SportsEsports sx={{ color: iconColor, marginRight: 1 }} /> Gaming Room</MenuItem>
        <MenuItem value="Office"><Work sx={{ color: iconColor, marginRight: 1 }} /> Office</MenuItem>
        <MenuItem value="Bedroom"><Bed sx={{ color: iconColor, marginRight: 1 }} /> Bedroom</MenuItem>
      </Select>

      {/* Time of Day Selection */}
      <Select 
        value={activityTime} 
        onChange={(e) => setActivityTime(e.target.value)} 
        displayEmpty 
        sx={selectStyle}
        MenuProps={menuProps}
      >
        <MenuItem value={0}>
          <WbTwilight sx={{ color: iconColor, marginRight: 1, fontSize: 24 }} /> Morning
        </MenuItem>
        <MenuItem value={50}>
          <WbSunny sx={{ color: iconColor, marginRight: 1, fontSize: 24 }} /> Midday
        </MenuItem>
        <MenuItem value={100}>
          <Nightlight sx={{ color: iconColor, marginRight: 1, fontSize: 24 }} /> Night
        </MenuItem>
      </Select>

      {/* Save Button */}
      <Button 
        variant="contained" 
        onClick={handleSave} 
        sx={{ 
          backgroundColor: backgroundColor, 
          '&:hover': { backgroundColor: lighten(backgroundColor, 0.2) }, 
          color: textColor 
        }}
      >
        Save Activity
      </Button>
    </Box>
  );
};

export default StressFreeCalendar;
