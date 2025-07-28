import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "./Context/CardsContext";

function SlidingCards() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const { cards } = useContext(CardsContext);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleShowAll = () => {
    navigate("/turf");
  };

  const redirectbooking = (
    cardTitle,
    cardDescription,
    cardAddress,
    costTurf
  ) => {
    navigate("/turfbooking", {
      state: {
        title: cardTitle,
        description: cardDescription,
        address: cardAddress,
        cost: costTurf,
      },
    });
  };

  return (
    <div className="pt-6 relative flex-row mb-10">
      {/* Header Section */}
      <div className="mt-4 flex justify-between items-center px-5">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-600">
          Recommended For You
        </h1>
        <button
          className="h-12 px-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          onClick={handleShowAll}
        >
          Show All
        </button>
      </div>

      {/* Arrow Buttons */}
      {/* <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full text-blue-500 hover:bg-blue-100 transition duration-300"
      >
        &lt;
      </button> */}
      <div
        ref={sliderRef}
        className="flex w-full overflow-x-auto space-x-6 p-4 cursor-pointer scroll-smooth"
      >
        {cards.slice(0, 5).map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-1 hover:bg-indigo-100"
            onClick={() =>
              redirectbooking(
                card.title,
                card.description,
                card.address,
                card.cost
              )
            }
          >
            {/* Card Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {card.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              <div className="mt-3 flex justify-between items-center">
                {/* <span className="text-xl font-semibold text-indigo-600">
                  {card.cost}
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <button
        onClick={scrollRight}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full text-blue-500 hover:bg-blue-100 transition duration-300"
      >
        &gt;
      </button> */}
    </div>
  );
}

export default SlidingCards;
