import React from "react";
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useLocation, useNavigate } from "react-router-dom";
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import HealingIcon from '@mui/icons-material/Healing';

function Turfbooking() {
    const navigate = useNavigate();
    const location = useLocation();
    const { title } = location.state || { title: 'Default Title' };
    const { description } = location.state || { description: 'Default Place' };
    const { address } = location.state || { address: 'Default Address' };
    const { cost } = location.state || { cost: 'Default Cost' };

    const handleBookNow = () => {
        navigate("/time");
    };

    return (
        <>
            <div className="mt-16 relative flex flex-col h-screen justify-center items-center">
                {/* Images section */}
                <div className="relative mt-16 flex w-[1071px] h-[402px]">
                    <img className="object-cover w-[352px] h-[401px]"
                        src="https://wallpaperaccess.com/full/4058050.jpg"
                        alt="Turf main"
                    />
                    <div className="flex flex-col">
                        <img className="object-cover w-[339px] h-[191px] ml-4 mb-4"
                            src="https://wallpaperaccess.com/full/4058050.jpg"
                            alt="Turf"
                        />
                        <img className="object-cover w-[339px] h-[191px] ml-4"
                            src="https://wallpaperaccess.com/full/4058050.jpg"
                            alt="Turf"
                        />
                    </div>
                    <div className="flex flex-col">
                        <img className="object-cover w-[339px] h-[191px] ml-4 mb-4"
                            src="https://wallpaperaccess.com/full/4058050.jpg"
                            alt="Turf"
                        />
                        <img className="object-cover w-[339px] h-[191px] ml-4"
                            src="https://wallpaperaccess.com/full/4058050.jpg"
                            alt="Turf"
                        />
                    </div>
                </div>

                {/* Booking details */}
                <div className="relative flex flex-col mt-8 w-[1071px] h-[238px] bg-[#9ad5d3]">
                    <div className="flex justify-between w-full">
                        <div className="flex justify-start mt-5 ml-7">
                            <h2 className="text-black font-serif non-italic text-3xl font-bold">{title}</h2>
                        </div>
                        <div className="flex space-x-4 mr-7 mt-5">
                            <button className="flex justify-end h-12 bg-slate-400">
                                <h2 className="text-blue-50 font-serif non-italic text-sm">{cost}</h2>
                            </button>
                            <button className="flex justify-end h-12 bg-blue-500" onClick={handleBookNow}>
                                <h2 className="text-blue-50 font-serif non-italic text-sm">Book Now</h2>
                            </button>
                        </div>
                    </div>

                    <div className="flex mt-3 w-[1071px] border-b border-b-gray-600 border-b-dashed pb-4">
                        <div className="flex justify-start ml-8">
                            <h1 className="text-black font-serif text-xs font-bold">5.0 ⭐⭐⭐⭐✨ (196)</h1>
                        </div>
                        <div className="flex ml-8">
                            <h1 className="text-black font-serif text-xs font-bold">🔒 <span className="text-yellow-600">Closed</span> Opens soon at 9:00am</h1>
                        </div>
                        <div className="flex ml-8">
                            <h1 className="text-black font-serif text-xs font-bold">{description}</h1>
                        </div>
                        <div className="flex ml-56">
                            <h1 className="text-black font-serif text-xs font-bold">📈 15 people booked recently</h1>
                        </div>
                    </div>

                    <div className="flex mt-3 w-[1071px]">
                        <div className="flex ml-4 w-[350px]">
                            <PlaceIcon className="w-[15px] h-[19.5px] mt-2 mr-2" />
                            <h2 className="text-black font-serif text-[16px] font-light">{address}</h2>
                        </div>
                        <div className="flex ml-3 w-[296px]">
                            <ScheduleIcon className="w-[20px] h-[20px] mr-2" />
                            <div>
                                <h2 className="text-black font-serif text-[16px] font-light">Monday - Closed</h2>
                                <h2 className="text-black font-serif text-[16px] font-light">Tue-Sun: 7:00am - 1:00am</h2>
                            </div>
                        </div>
                        <div className="flex w-[257px] ml-4">
                            <PaymentsIcon />
                            <div className="ml-4">
                                <h2 className="text-black font-serif text-[16px] font-light">Mode of Payment</h2>
                                <h2 className="text-black font-serif text-[16px] font-light">Cash, Online, Crypto</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Amenities Section */}
                <div className="relative flex flex-col mt-8 w-[1071px] bg-[#d0e7f2] p-6 rounded-md mb-[150px]">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Amenities</h3>
                    <div className="grid grid-cols-3 gap-6 text-center">
                        {/* Amenity: Wi-Fi */}
                        <div className="flex flex-col items-center">
                            <WifiIcon className="text-blue-500 w-[40px] h-[40px]" />
                            <span className="mt-2 text-sm font-medium">Free Wi-Fi</span>
                        </div>

                        {/* Amenity: Parking */}
                        <div className="flex flex-col items-center">
                            <LocalParkingIcon className="text-blue-500 w-[40px] h-[40px]" />
                            <span className="mt-2 text-sm font-medium">Parking</span>
                        </div>

                        {/* Amenity: Restrooms */}
                        <div className="flex flex-col items-center">
                            <FamilyRestroomIcon  className="text-blue-500 w-[40px] h-[40px]" />
                            <span className="mt-2 text-sm font-medium">Restrooms</span>
                        </div>

                        {/* Amenity: Refreshments */}
                        <div className="flex flex-col items-center">
                            <RoomServiceIcon className="text-blue-500 w-[40px] h-[40px]" />
                            <span className="mt-2 text-sm font-medium">Refreshments</span>
                        </div>

                        {/* Amenity: First Aid */}
                        <div className="flex flex-col items-center">
                            <HealingIcon className="text-blue-500 w-[40px] h-[40px]" />
                            <span className="mt-2 text-sm font-medium">First Aid</span>
                        </div>

                        {/* Amenity: Sports Facilities */}
                        <div className="flex flex-col items-center">
                            <SportsSoccerIcon className="text-blue-500 w-[40px] h-[40px]" />
                            <span className="mt-2 text-sm font-medium">Sports Equipment</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Turfbooking;
