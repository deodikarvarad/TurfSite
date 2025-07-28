import { React, useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useLocation, useNavigate } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HealingIcon from "@mui/icons-material/Healing";

function TurfBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBlinking, setIsBlinking] = useState(true);
  const [bookedRecently, setBookedRecently] = useState(15);

  const { title, description, address, cost } = location.state || {
    title: "Default Title",
    description: "Default Place",
    address: "Default Address",
    cost: "Default Cost",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500); // Blinks every 500ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBookedRecently(Math.floor(Math.random() * 15) + 10);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isOpen = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 7 && hours < 21;
  };

  const handleBookNow = (cardTitle, cardDescription, cardAddress, costTurf) => {
    navigate("/time", {
      state: {
        title: cardTitle,
        description: cardDescription,
        address: cardAddress,
        cost: costTurf,
      },
    });
  };

  return (
    <div className="mt-16 flex flex-col items-center px-4 max-w-screen-lg mx-auto">
      <div className="relative w-full">
        <img
          className="object-cover w-full h-[400px] rounded-lg shadow-lg"
          src="https://wallpaperaccess.com/full/4058050.jpg"
          alt="Turf main"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-extrabold text-shadow-lg">{title}</h1>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Turf Details */}
      <div className="mt-8 w-full bg-[#9ad5d3] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-3xl font-bold">{title}</h2>
          <div className="flex space-x-4">
            <span className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow cursor-default">
              {cost}
            </span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-3 border-b pb-4 border-dashed border-gray-600">
          <span className="text-xs font-bold">5.0 ⭐⭐⭐⭐✨ (196)</span>
          <span
            className={`text-xs font-bold ${
              isOpen() ? "text-green-600" : "text-red-600"
            } ${isOpen() && isBlinking ? "opacity-100" : "opacity-40"}`}
          >
            {isOpen() ? "🟢 Open" : "🔒 Closed - Opens at 7:00am"}
          </span>
          <span className="text-xs font-bold">{description}</span>
          <span className="text-xs font-bold">
            📈 {bookedRecently} people booked recently
          </span>
        </div>
      </div>

      <div className="mt-8 w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <PlaceIcon className="mr-2 text-blue-600" />
            <span className="text-sm">{address}</span>
          </div>
          <div>
            <ScheduleIcon className="mr-2 text-blue-600" />
            <p className="text-sm">Mon: Closed</p>
            <p className="text-sm">Tue-Sun: 7:00am - 1:00am</p>
          </div>
          <div>
            <PaymentsIcon className="mr-2 text-blue-600" />
            <p className="text-sm">Mode of Payment</p>
            <p className="text-sm">Cash, Online, Crypto</p>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full bg-[#d0e7f2] p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <WifiIcon className="text-blue-500 w-[40px] h-[40px]" />
            <span className="mt-2 text-sm font-medium">Free Wi-Fi</span>
          </div>
          <div className="flex flex-col items-center">
            <LocalParkingIcon className="text-blue-500 w-[40px] h-[40px]" />
            <span className="mt-2 text-sm font-medium">Parking</span>
          </div>
          <div className="flex flex-col items-center">
            <FamilyRestroomIcon className="text-blue-500 w-[40px] h-[40px]" />
            <span className="mt-2 text-sm font-medium">Restrooms</span>
          </div>
          <div className="flex flex-col items-center">
            <RoomServiceIcon className="text-blue-500 w-[40px] h-[40px]" />
            <span className="mt-2 text-sm font-medium">Refreshments</span>
          </div>
          <div className="flex flex-col items-center">
            <HealingIcon className="text-blue-500 w-[40px] h-[40px]" />
            <span className="mt-2 text-sm font-medium">First Aid</span>
          </div>
          <div className="flex flex-col items-center">
            <SportsSoccerIcon className="text-blue-500 w-[40px] h-[40px]" />
            <span className="mt-2 text-sm font-medium">Sports Equipment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurfBooking;
