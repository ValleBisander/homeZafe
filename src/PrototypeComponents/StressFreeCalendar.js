import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StressFreeCalendar = ({ onSaveActivity }) => {
  const [activity, setActivity] = useState('');
  const [room, setRoom] = useState('');
  const [timeOfDay, setTimeOfDay] = useState(0);
  const navigate = useNavigate();

  const handleSave = () => {
    if (activity && room) {
      onSaveActivity({ activity, room, timeOfDay });
      navigate('/prototype-home');
    }
  };

  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Plan Your Relaxation
      </Typography>
      <TextField 
        label="Activity" 
        value={activity} 
        onChange={(e) => setActivity(e.target.value)} 
        sx={{ marginBottom: 2, width: '300px' }}
      />
      <Select 
        value={room} 
        onChange={(e) => setRoom(e.target.value)} 
        displayEmpty 
        sx={{ marginBottom: 2, width: '300px' }}
      >
        <MenuItem value="" disabled>Select Room</MenuItem>
        <MenuItem value="Living Room">Living Room</MenuItem>
        <MenuItem value="Kitchen">Kitchen</MenuItem>
        <MenuItem value="Bathroom">Bathroom</MenuItem>
        <MenuItem value="Gaming Room">Gaming Room</MenuItem>
        <MenuItem value="Office">Office</MenuItem>
        <MenuItem value="Bedroom">Bedroom</MenuItem>
      </Select>
      <Select 
        value={timeOfDay} 
        onChange={(e) => setTimeOfDay(e.target.value)} 
        displayEmpty 
        sx={{ marginBottom: 2, width: '300px' }}
      >
        <MenuItem value={0}>Morning</MenuItem>
        <MenuItem value={50}>Midday</MenuItem>
        <MenuItem value={100}>Night</MenuItem>
      </Select>
      <Button variant="contained" onClick={handleSave}>
        Save Activity
      </Button>
    </Box>
  );
};

export default StressFreeCalendar;
