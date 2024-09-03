import React from 'react';

function MainContainer() {
  return (
    <div className="flex flex-col items-center justify-center h-72 pt-auto bg-transparent text-white mt-10 ml-32 mr-32">
      <div className="text-center mb-16">
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500">
          Welcome to <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">BookMyTurf</span>
        </p>
        <p className="  mt-5 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 via-violet-500 to-indigo-500">
          Book any turf in the city from one source.
        </p>
      </div>
      <button class="transition ease-in-out delay-150 border-black bg-blue-500 text-white text-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white hover:border-black duration-300 ...">
       Book Now
      </button>
    </div>
  );
}

export default MainContainer;