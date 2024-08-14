import React from 'react';

function MainContainer() {
  return (
    <div className="flex flex-col items-center justify-center h-72 pt-auto bg-transparent text-white mt-10 ml-32 mr-32">
      <div className="text-center mb-16">
        <p className="font-semibold text-4xl hover:text-black">
          Welcome to <span className="font-bold text-6xl ">BookMyApp</span>
        </p>
        <p className="mt-4 text-lg font-medium hover:text-black">
          Book any turf in the city from one source.
        </p>
      </div>
      <button class="transition ease-in-out delay-150 border-white bg-black bg-transparent text-white text-lg hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black hover:border-black duration-300 ...">
       Book Now
      </button>
    </div>
  );
}

export default MainContainer;
