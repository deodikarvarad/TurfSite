import React from "react";
import Grass from "../../assets/Grass.png"
import Google from "../../assets/Google.png"
import Facebook from "../../assets/Facebook.png"
import Twitter from "../../assets/Twitter.png"
function Loginpage(){
    return(
        <>
        <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
        <img src={Grass} className="w-full h-full object-cover"/>
            
        </div>

          <div className="w-1/2 h-full bg-white flex flex-col p-20 items-center justify-center">
          <h1 className="text-6xl font-bold font-sans text-transparent pb-14 bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">BookMyTurf</h1>

          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-10 items-center justify-center">
            <h3 className="text-5xl font-sans font-semibold mb-4">Login</h3>
            <p className="text-lg mb-2 font-sans">Welcome Back! Before logging in, make sure you login correctly.</p>
            </div>

            <div className="w-full flex flex-col">
                <input 
                type="email" 
                placeholder="Email"
                className="w-full text-black font-sans py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none font-semibold"/>

                <input 
                type="password" 
                placeholder="Password"
                className="w-full text-black font-sans py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none font-semibold"/>
            </div>

            <div className="w-full pt-2 items-center">
                    <div className="w-full flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <p className="text-sm">Remember Me</p>
                    </div>

                    <p className="font-semibold underline-offset-2 font-sans underline cursor-pointer text-sky-600 pt-2">Forgot Password</p> 
                    
                </div>

                

                <div className="w-full flex flex-col pt-8">
                    <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 p-4 font-sans font-semibold text-xl">Log In</button>
                </div>

                <div className="w-full flex items-center justify-center relative pt-8">
                    <div className="w-full h-[0.75px] bg-black"></div>
                    <p className="absolute text-black bg-white text-xl">or</p>
                </div>
                
                <div className="pt-6 items-center justify-center flex flex-row pb-8">
                <button className="rounded-full hover:bg-white"><img src={Google} className="h-10 " alt="" /></button>
                <button className="rounded-full hover:bg-sky-600"><img src={Facebook} className="h-10 " alt="" /></button>
                <button className="rounded-full hover:bg-black"><img src={Twitter} className="h-10 " alt="" /></button>
                </div>
                
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-sans text-black">Don't have an account?<span className="font-semibold underline-offset-2 font-sans underline cursor-pointer text-sky-600">Click to Sign Up</span></p>

          </div>

          </div>
        </div>
        

        </>
    )
}

export default Loginpage;