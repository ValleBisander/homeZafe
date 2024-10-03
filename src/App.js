import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './ProjectPages/Home';
import Explore from './ProjectPages/Explore';
import Navbar from './ProjectComponents/NavBar';
import Overview from './ProjectComponents/Overview';
import DesignThinking from './ProjectComponents/DesignThinking';
import References from './ProjectComponents/Refrences';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/overview" element={<Overview />}/>
        <Route path="/design-thinking" element={<DesignThinking/>}/>
        <Route path="/references" element={<References/>}/>
      </Routes>
    </Router>
  );
}

export default App;
