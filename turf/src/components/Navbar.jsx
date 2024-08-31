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
      <nav className="w-full bg-transparent p-4 fixed top-0 left-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo or Brand */}
          <button onClick={handleBookTurf}
  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition duration-300 "
>
  BookMyTurf
</button>

          
          {/* Search Bar */}
          <div className="flex-grow mx-4 hover: bg-black">
            <input
            className="w-4 p-2 rounded-md text-black border-black hover:border-black shadow-md caret-black"
              type="text"
              placeholder="Search for Turfs near you..."
              
            />
          </div>
          
          {/* Location Setter */}
          <div className="text-white hover:text-black mx-4">
            <select className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-md" >
              <option value="location">Set Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="chatrapati sambhajinagar">Chatrapati Sambhajinagar</option>
              {/* Add more locations as needed */}
            </select>
          </div>
          
          {/* Sign In/Sign Up */}
          <div className="text-white hover:text-black flex space-x-4">
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
              Sign In
            </button>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
              Sign Up
            </button>
            <button>
              Profile
            </button>
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
