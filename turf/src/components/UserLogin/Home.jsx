import React from "react";
import SportsCollection from "./SportsCollection";
import SlidingCards from "./SlidingCards";
import HomeImage from "./HomeImage";

function Home() {
  return (
    <div className="container mx-auto">
      {/* Image Section */}
      <div id="image-turf" className="w-full min-h-[500px] mb-10">
        <HomeImage />
      </div>

      
      <div className="Slider-turf mb-10">
        <div className="first-div" id="cards-turf">
          <SlidingCards />
        </div>
      </div>

      
      <div className="About-info mb-10" id="sports-icons">
        <SportsCollection />
      </div>
    </div>
  );
}

export default Home;
