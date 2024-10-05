import React, { useContext,useRef } from "react";
import { useNavigate } from "react-router-dom";

import {CardsContext} from './Context/CardsContext'

function SlidingCards() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const handleShowAll = () => {
    // const defaultTitle = "All Recommended Turfs";
    // const defaultDescription = "Explore all the recommended turfs available for you.";
    navigate("/turf");
  };

  const redirectbooking = (cardTitle, cardDescription, cardAddress) => {
    navigate("/turfbooking", {
      state: {
        title: cardTitle,
        description: cardDescription,
        address: cardAddress,
      },
    });
  };
  const { cards } = useContext(CardsContext);
  

  return (
    <div className="pt-6 relative flex-row overflow-x-auto w-max mb-40">
      <div className="mt-4 flex flex-row h-60 items-center justify-between px-5">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-600">
          Recommended For You
        </h1>
        <button
          className="h-11 px-6 mr-8 bg-gradient-to-r from-blue-300 via via-blue-200 to-blue-100 text-black rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          onClick={handleShowAll}
        >
          Show All
        </button>
      </div>

      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:bg-gray-600"
      >
        &lt;
      </button>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 p-4 cursor-pointer"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 overflow-hidden transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-grey-600 duration-300 p-3 rounded-xl"
            onClick={() =>
              redirectbooking(card.title, card.description, card.address)
            }
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md hover:transform transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold  text-black">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-black hover:text-gray-600">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:bg-gray-600"
      >
        &gt;
      </button>
    </div>
  );
}

export default SlidingCards;
