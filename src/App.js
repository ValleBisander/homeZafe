import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Pages
import Home from './ProjectPages/Home';
import Explore from './ProjectPages/Explore';
import ProtHome from './PrototypePages/Home';

// Importing Components
import Navbar from './ProjectComponents/NavBar';
import Overview from './ProjectComponents/Overview';
import Background from './ProjectComponents/Background';
import DesignThinking from './ProjectComponents/DesignThinking';
import References from './ProjectComponents/Refrences';
import PitchPresentation from './ProjectComponents/PitchPresentation';
import PitchVideo from './ProjectComponents/PitchVideo';
import GenerativeAI from './ProjectComponents/GenerativeAi';
import StressFreeCalendar from './PrototypeComponents/StressFreeCalendar';
import ZoneAdjustInfo from './PrototypeComponents/ZoneAdjustInfo';
import TimeOfDayInfo from './PrototypeComponents/timeOfDayInfo';
import RoomPage from './PrototypeComponents/RoomPage';
import { rooms } from './PrototypePages/Home';

function App() {
  

  const [activities, setActivities] = useState([]);

  const handleSaveActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  return (
    <Router>
      <Navbar />
      <AppRoutes activities={activities} onSaveActivity={handleSaveActivity} />
    </Router>
  );
}

const AppRoutes = ({ activities, onSaveActivity }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/background" element={<Background />} />
    <Route path="/design-thinking" element={<DesignThinking />} />
    <Route path="/references" element={<References />} />
    <Route path="/pitch-presentation" element={<PitchPresentation />} />
    <Route path="/pitch-video" element={<PitchVideo />} />
    <Route path="/generative-AI" element={<GenerativeAI />} />
    <Route 
      path="/prototype-home" 
      element={<ProtHome activities={activities} />} 
    />
    <Route 
      path="/stress-free-calendar" 
      element={<StressFreeCalendar onSaveActivity={onSaveActivity} />} 
    />
    <Route
      path="zone-adjust-info"
      element={<ZoneAdjustInfo/>}
    />
    <Route
      path="time-of-day-info"
      element={<TimeOfDayInfo/>}
    />

    {/* Dynamically generating routes for each room */}
    {rooms.map((room) => (
      <Route
        key={room.name}
        path={room.path}
        element={<RoomPage roomName={room.name} backgroundColor={room.color} />}
      />
    ))}
    
  </Routes>
);

export default App;
