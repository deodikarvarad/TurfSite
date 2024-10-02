import React from "react";
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Navigate, useLocation, useNavigate } from "react-router-dom";


function Turfbooking(){
    
    const navigate = useNavigate();
    const location =useLocation();
    const {title} = location.state || {title : 'Default Title'};
    const {description} =location.state || {description: 'Default Place'};
    const {address} =location.state || {description : 'Default Address'}
    const handleBookNow = () => {
        navigate("/time");
    };

    return(
        <>
        <div className="mt-16  relative flex flex-col h-screen justify-center items-center  ">
            <div className="relative  mt-16 flex  w-[1071px] h-[402px]">
            <img className="object-cover w-[352px] h-[401px]"
            src ="https://wallpaperaccess.com/full/4058050.jpg"
            />
            <div className="flex flex-col">
            <img className="object-cover w-[339px] h-[191px] ml-4 mb-4"
            src ="https://wallpaperaccess.com/full/4058050.jpg"
            />
            <img className="object-cover w-[339px] h-[191px] ml-4"
            src ="https://wallpaperaccess.com/full/4058050.jpg"
            />
            </div>
            <div className="flex flex-col">
            <img className="object-cover w-[339px] h-[191px] ml-4 mb-4"
            src ="https://wallpaperaccess.com/full/4058050.jpg"
            />
            <img className="object-cover w-[339px] h-[191px] ml-4"
            src ="https://wallpaperaccess.com/full/4058050.jpg"
            />
            </div>
            </div>
            <div className="relative flex flex-col  mt-8  w-[1071px] h-[238px] bg-[#9ad5d3]  ">
                <div className="flex justify-between w-full  ">
                <div className="flex justify-start  mt-5 ml-7 ">
                <h2 className="text-black font-serif non-italic text-3xl font-bold ">{title}</h2>
                </div>
                <div className=" flex  space-x-4 mr-7 mt-5">
                <button className="flex justify-end h-12 bg-slate-400  ">
                    <h2 className=" text-blue-50 font-serif non-italic text-sm ">Enquire</h2>
                </button>
                <button className="flex justify-end h-12 bg-blue-500">
                    <h2 className=" text-blue-50 font-serif non-italic text-sm"
                    onClick={handleBookNow}
                    >
                    Book Now</h2>
                </button>

                </div>
                </div>
                <div className=" flex mt-3  w-[1071px]  align-top justify  border-b border-b-gray-600 border-b-dashed pb-4">
                <div className="flex justify-start ml-8 ">
                <h1 className=" text-black font-serif text-xs font-bold  ">5.0 ⭐⭐⭐⭐✨ (196)</h1>
                </div>
                <div className="flex ml-8">
                    <h1 className=" text-black font-serif text-xs font-bold">🔒 <span className=" text-yellow-600 ">Closed </span>Opens soon at 9:00am</h1>
                </div>
                <div className="flex ml-8">
                    <h1 className="text-black font-serif text-xs font-bold"> {description}</h1>
                </div>
                <div className="flex ml-56">
                    <h1 className="text-black font-serif text-xs font-bold">📈 15 people booked recently</h1>
                </div>
                 </div>
                 <div className="flex mt-3  w-[1071px]  align-top justify ">
                    <div className="flex ml-4 w-[350px] h-[72px]  ">
                    <PlaceIcon className="w-[15px] h-[19.5px] mt-2 mr-2" />
                    <div>
                        <h2 className="text-black font-serif non-italic text-[16px] font-light ">
                        {address}

                        </h2>
                    </div>
                    </div>
                    <div className="flex ml-3 w-[296px] h-[50px]  justify ">
                    <div className="flex justify-start ml-2 ">
                    <ScheduleIcon className="w-[20px] h-[20px]  mr-2"/>
                    </div>
                    <div>
                    <h2 className="text-black font-serif non-italic text-[16px] font-light">Monday</h2>
                    <h2 className="text-black font-serif non-italic text-[16px] font-light">Tue-Sun</h2>
                    
                    </div>
                    <div className="ml-8">
                    <h2 className="text-black font-serif non-italic text-[16px] font-light">Closed</h2>
                    <h2 className="text-black font-serif non-italic text-[16px] font-light">7:00am-1:00am</h2>
                    </div>
                    </div>
                    <div className="flex w-[257px] h-[70px]  ml-4">
                    <div className="ml-2">
                        <PaymentsIcon/>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-black font-serif non-italic text-[16px] font-light">Mode of Payment</h2>
                        <h2 className="text-black font-serif non-italic text-[16px] font-light">Cash, Online, Crypto</h2>
                        
                    </div>
                    </div>
                 </div>
            </div>
        </div>
        </> 
    )

    

}

export default Turfbooking;