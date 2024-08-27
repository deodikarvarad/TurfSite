import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SlidingCards from './components/SlidingCards';
import Turf from './components/Turf'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar className="mb-0" /> 
      <Routes>
        <Route path="/" element={<SlidingCards />} />
        <Route path="/turf" element={<Turf />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
