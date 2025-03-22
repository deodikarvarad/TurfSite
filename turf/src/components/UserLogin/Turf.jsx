import React, { useState, useContext } from "react";
import { CardsContext } from "./Context/CardsContext";
import { useNavigate } from "react-router-dom";

function Turf() {
  const { cards } = useContext(CardsContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedCost, setSelectedCost] = useState(1600);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleLocationSearch = (e) => setLocationSearch(e.target.value);
  const handleCostChange = (e) => setSelectedCost(parseInt(e.target.value, 10));

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

  const filteredCards = cards.filter((card) => {
    const matchesSearchTerm = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      locationSearch === "" ||
      card.description.toLowerCase().includes(locationSearch.toLowerCase());
    const matchesCost =
      parseInt(card.cost.replace("/hr", ""), 10) <= selectedCost;

    return matchesSearchTerm && matchesLocation && matchesCost;
  });

  return (
    <div className="flex flex-col md:flex-row justify-between mt-8 mx-4 gap-8">
      {/* Sidebar with Filters */}
      <div className="w-full md:w-1/4 bg-slate-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>

        {/* Search Bar for Location */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">Search by Location</h3>
          <input
            type="text"
            placeholder="Enter location..."
            value={locationSearch}
            onChange={handleLocationSearch}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Cost Filter with Slider */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">Filter by Cost</h3>
          <input
            type="range"
            min="1100"
            max="1600"
            step="1"
            value={selectedCost}
            onChange={handleCostChange}
            className="w-full accent-blue-600"
          />
          <p className="text-lg font-semibold mt-2 text-blue-600">
            Cost: ₹{selectedCost}/hr
          </p>
        </div>
      </div>

      {/* Turf Cards Section with Fixed Width & Height */}
      <div className="w-full md:w-[75%] min-w-[400px]">
        <div className="min-h-[500px] w-full flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
          {filteredCards.length === 0 ? (
            // Empty state inside fixed container
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-xl text-gray-600">
                No turfs found with the selected filters.
              </p>
              <p className="text-gray-500 mt-2">
                Try adjusting your filters or searching a different location.
              </p>
            </div>
          ) : (
            // Grid Layout remains consistent in size
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {filteredCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-700">{card.description}</p>
                    <p className="text-gray-500">{card.address}</p>
                    <p className="text-blue-500 mt-2">{card.cost}</p>
                    <button
                      className="w-full mt-4 bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                      onClick={() =>
                        redirectbooking(
                          card.title,
                          card.description,
                          card.address,
                          card.cost
                        )
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Turf;
