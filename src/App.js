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
import StressFreeCalendar from './PrototypeComponents/StressFreeCalendar';
import ZoneAdjustInfo from './PrototypeComponents/ZoneAdjustInfo';

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
    
    
  </Routes>
);

export default App;
