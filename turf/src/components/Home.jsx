import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen overflow-x-hidden" style={{ backgroundColor: color }}>
      <nav className="w-full bg-transparent p-4 fixed top-0 left-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo or Brand */}
          <div className="text-white text-xl font-bold">
            BookMyTurf
          </div>
          
          {/* Search Bar */}
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search for Turfs near you..."
              className="w-full p-2 rounded-md text-black border-black"
            />
          </div>
          
          {/* Location Setter */}
          <div className="text-black mx-4">
            <select className="bg-transparent text-white hover:bg-white hover:text-black p-2 rounded-md hover:delay-100">
              <option value="location">Set Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              {/* Add more locations as needed */}
            </select>
          </div>
          
          {/* Sign In/Sign Up */}
          <div className="text-black flex space-x-4">
            <button className="bg-transparent hover:bg-white hover:text-black hover:delay-100 text-white py-2 px-4 rounded-md">
              Sign In
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black hover:delay-100 text-white py-2 px-4 rounded-md">
              Sign Up
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

export default App;
