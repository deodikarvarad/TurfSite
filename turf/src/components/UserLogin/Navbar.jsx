import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "./Context/CardsContext";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setdropdownOpen] = useState(false);
  // const [citydropdownOpen, setcitydropdownOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const defaultCity = "Aurangabad";
  const { cards } = useContext(CardsContext);
  const [query, setQuery] = useState("");
  const profileButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchweather = async () => {
      try {
        const apiKey = "891e271e52818845def9acc363a13392";
        const respone = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`
        );
        setWeather(respone.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };
    fetchweather();
  }, [defaultCity]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const results = cards.filter((card) =>
        card.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCards(results);
    } else {
      setFilteredCards([]);
    }
  };

  const handleCardClick = (card) => {
    navigate("/turfbooking", {
      state: {
        title: card.title,
        description: card.description,
        address: card.address,
        cost: card.cost,
      },
    });
    setFilteredCards([]);
    setQuery("");
  };

  const handleBookTurf = () => {
    navigate("/home");
  };

  const redirectsignup = () => {
    navigate("/usercreate");
  };

  const redirectlogin = () => {
    navigate("/userlogin");
  };

  const redirectprofile = () => {
    navigate("/profile");
  };

  // const mouseonProfile =()=>{
  //   setdropdownOpen(true)
  // }

  // const mouseleaveProfile =()=>{
  //   setdropdownOpen(false)
  // }
  const handleProfile = () => {
    // If the dropdown is already open, don't set the timer and close it
    if (dropdownOpen) {
      clearTimeout(timeoutRef.current);
      setdropdownOpen(false);
    } else {
      // Open the dropdown
      setdropdownOpen(true);
    }
  };

  const closeProfile = () => {
    setdropdownOpen(false);
  };
  // const closeProfile = () => {
  //   setdropdownOpen(false);
  // };

  // const mouseonCity =()=>{
  //   setcitydropdownOpen(true)
  // }

  // const mouseleaveCity =()=>{
  //   setcitydropdownOpen(false)
  // }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        // Set a timeout to close the dropdown after 3 seconds
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setDropdownOpen(false);
        }, 3000);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutRef.current); // Clean up the timeout on unmount
    };
  }, []);

  return (
    <>
      <div className="w-full overflow ">
        <nav className="w-full bg-transparent p-4 top-0 left-0 z-10">
          <div className="container mx-auto flex items-center justify-between px-4">
            <button
              onClick={handleBookTurf}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via bg-red-500 to-yellow-500 ml-0 focus:outline-none"
            >
              BookMyTurf
            </button>

            <div className="flex-grow mx-4 relative">
              <input
                className="w-full p-2 rounded-md text-indigo"
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for Turfs near you..."
              />

              {filteredCards.length > 0 && (
                <div className="absolute z-10 bg-white w-full border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
                  {filteredCards.map((card, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleCardClick(card)}
                    >
                      <p className="text-black font-semibold">{card.title}</p>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-blue-500 flex item-center ">
              {weather ? (
                <div className="">
                  <p>{defaultCity}:</p>
                  <p>{weather.main.temp}°C</p>
                  <p>{weather.weather[0].description}</p>
                </div>
              ) : (
                <p>Weather? It's coming... probably</p>
              )}
            </div>

            <div
              // onMouseEnter={mouseonProfile}
              // onMouseLeave={mouseleaveProfile}

              className="text-white hover:text-black flex space-x-4"
            >
              <button
                className="transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                onClick={handleProfile}
                // onDoubleClick={closeProfile}
              >
                Profile
              </button>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-12 w-48 bg-white shadow-lg rounded-lg py-2 z-10"
                >
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Log In
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Sign Up
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      My Profile
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
