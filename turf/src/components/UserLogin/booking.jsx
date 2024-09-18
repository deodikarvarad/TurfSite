import React from "react";


function Turfbooking(){
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
            <div className="relative flex flex-col  mt-8  border border-red-500 w-[1071px] h-[238px] bg-[#9ad5d3]  ">
                <div className="flex justify-between w-full ">
                <div className="flex justify-start  mt-5 ml-7 ">
                <h2 className="text-black font-serif non-italic text-3xl font-bold ">Penalty Box</h2>
                </div>
                <div className=" flex  space-x-4 mr-7 mt-5">
                <button className="flex justify-end h-12 bg-slate-400  ">
                    <h2 className=" text-blue-50 font-serif non-italic text-sm ">Enquire</h2>
                </button>
                <button className="flex justify-end h-12 bg-blue-500">
                    <h2 className=" text-blue-50 font-serif non-italic text-sm">Book Now</h2>
                </button>

                </div>
                </div>
                <div className=" flex mt-1  w-[1071px] h-[20px] align-top justify ">
                <div className="flex justify-start ml-8">
                <h1 className=" text-black font-serif text-xs font-bold ">5.0 ⭐⭐⭐⭐✨ (196)</h1>
                </div>
                <div className="flex ml-8">
                    <h1 className=" text-black font-serif text-xs font-bold">🔒 <span className=" text-yellow-600 ">Closed </span>Opens soon at 9:00am</h1>
                </div>
                <div className="flex ml-8">
                    <h1 className="text-black font-serif text-xs font-bold"> Garkheda,Sambhajinagar.</h1>
                </div>
                <div className="flex ml-56">
                    <h1 className="text-black font-serif text-xs font-bold">📈 15 people booked recently</h1>
                </div>
                 </div>
            </div>
        </div>
        </>
    )

    

}

export default Turfbooking;