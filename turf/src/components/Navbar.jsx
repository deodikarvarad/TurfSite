import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Navbar() {

  const handleBookTurf = ()=>{
    const mainsec =document.getElementById('cards-turf')
    if (mainsec){
      mainsec.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <>
      <div className="w-full  overflow-x-hidden">
      <nav className="w-full bg-white p-2 fixed top-0 left-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo or Brand */}
          <button onClick={handleBookTurf}
  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition duration-300 "
>
  BookMyTurf
</button>

<div class="flex items-center space-x-24 pl-96 mr-auto m-full">
        <a href="#" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Home</a>
        <a href="#" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Book Now</a>
        <a href="#" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About Us</a>
        <a href="#" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Contact Us</a>
        <a href="#" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Sign up</a>
        <a href="#" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Sign in</a>

      </div>
 
          
          
          
          
          
        </div>
      </nav>

      <div className="pt-24">
        {/* Your other content goes here */}
      </div>
    </div>
    </>
  );
}

export default Navbar;
