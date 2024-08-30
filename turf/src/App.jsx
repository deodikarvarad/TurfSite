import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SlidingCards from './components/SlidingCards';
import Turf from './components/Turf'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Router>
      <Navbar className="" /> 
      <Routes>
         <Route path='/' element ={<Home/>}/>
          
        <Route path="/turf" element={<Turf />} /> 
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
