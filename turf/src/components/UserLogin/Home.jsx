import React from "react";
import { Route,Router,Routes } from "react-router-dom";
import SportsCollection from "./SportsCollection";
import SlidingCards from "./SlidingCards";
import About from "./About";

function Home(){
    return (
        <>
        <div className ="Homeimage">
            <div className="  min-w-[1500px] min-h-[500px] max-w-fit max-h-fit border border-black ">
            <img  className="min-w-[100%] min-h-[100%]" src= "https://wallpaperaccess.com/full/1311181.jpg" ></img>

            </div>
        </div>
        <div className="Slider-turf">
            <div className="first-div" id="cards-turf"></div>
            <SlidingCards/>
        </div>
        <div className="About-info">
            <SportsCollection/>
        </div>
        </>
    )
}

export default Home;