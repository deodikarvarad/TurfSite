import React from "react";
import Virat from "../../assets/Virat.png";

function ProfilePage(){
    return(
    <>
    <div className="bg-yellow-100">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via bg-green-500 to-yellow-500 pt-40 pl-36 underline">
            User Profile
        </div>
        <div className="flex flex-row pt-6 pb-6 ml-40 mr-40 justify-between items-center ">
           <div className="flex flex-row justify-between items-center">
           <img src={Virat} className="rounded-ss-full h-28 pl-36 pt-4 border-black" alt="" />
           <h2 className="pt-2 text-3xl pl-2">Virat Kohli</h2>

           <button className="ml-96 transition ease-in-out delay-150 text-white bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Upload New Photo</button>
           <button className="ml-32 transition ease-in-out delay-150 text-white bg-gradient-to-r from-red-500 via-red-900 to-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300">Delete Photo</button>
           </div>
        </div>

        <div className="w-full flex items-center justify-center relative pt-8">
              <div className="w-full h-[0.75px] bg-black ml-40 mr-40"></div>
            </div>

        <div className=" ml-40 mr-40 flex flex-row pt-10 pb-2 ">
            <div>
                <h2 className="ml-40 text-xl">First Name</h2>
                <input type="First Name" 
                className="ml-40 p-2 pr-56 rounded-lg"/>
            </div>

            <div>
                <h2 className="ml-40 text-xl">Last Name</h2>
                <input type="Last Name"
                className="ml-40 p-2 pr-56 rounded-lg" />
            </div>     
            </div>

            <div className="ml-40 mr-40 pt-10">
            <h2 className="ml-40 text-xl">User Name</h2>
                <input type="User Name" 
                className="ml-40 p-2 pr-56 rounded-lg"/>
            </div>  

            <div className="w-full flex items-center justify-center relative pt-8">
              <div className="w-full h-[0.75px] bg-black ml-40 mr-40"></div>
            </div>

            <div className=" ml-40 mr-40 flex flex-row pt-10 pb-2 ">
            <div>
                <h2 className="ml-40 text-xl">Email</h2>
                <input type="email" name="Email" id="" 
                className="ml-40 p-2 pr-56 rounded-lg"/>
            </div>

            <div>
                <h2 className="ml-40 text-xl">Phone No.</h2>
                <input type="Phone No."
                className="ml-40 p-2 pr-56 rounded-lg" />
            </div>     
            </div>

            <div className="w-full flex items-center justify-center relative pt-8">
              <div className="w-full h-[0.75px] bg-black ml-40 mr-40"></div>
            </div>

            <div className="ml-40 mr-40 pt-10 pb-2 ">
                <h2 className="ml-40 text-xl">Loaction</h2>
                <input type="Location"
                className="ml-40 p-2 pr-96 rounded-lg" />
            </div>  

            <div className="w-full flex items-center justify-center relative pt-8">
              <div className="w-full h-[0.75px] bg-black ml-40 mr-40"></div>
            </div>

            
        <div className=" ml-40 mr-40 flex flex-row pt-10 pb-2 ">
            <div>
                <h2 className="ml-40 text-xl">Current Password</h2>
                <input type="password" name="Current Password" id=""
                className="ml-40 p-2 pr-56 rounded-lg" />
            </div>

            <div>
                <h2 className="ml-40 text-xl">New Password</h2>
                <input type="password" name="New Password" id=""
                className="ml-40 p-2 pr-56 rounded-lg" />
            </div>     
            </div>

            <div className="ml-40 mr-40 pt-10 pb-10">
            <h2 className="ml-40 text-xl">Confirm New Password</h2>
            <input type="password" name="Confirm New Password" id=""
                className="ml-40 p-2 pr-56 rounded-lg" />
            </div>  

            <div className="flex flex-row justify-end items-end pb-10">
            
            <button className="mr-5 transition ease-in-out delay-150 text-white bg-gradient-to-r from-red-500 via-red-900 to-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300">Cancel</button>
            <button className="mr-40 transition ease-in-out delay-150 text-white bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Save Changes</button>
            </div>









    </div>

    </>

    )
}

export default ProfilePage;