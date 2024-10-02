import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './ProjectPages/Home';
import Explore from './ProjectPages/Explore';
import Navbar from './ProjectComponents/NavBar';
import Overview from './ProjectComponents/Overview';
import Background from './ProjectComponents/Background';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/overview" element={<Overview />}/>
        <Route path="/background" element={<Background />}/>
      </Routes>
    </Router>
  );
}

export default App;
