import React from "react";
import { Route,Router,Routes } from "react-router-dom";
import SportsCollection from "./SportsCollection";
import SlidingCards from "./SlidingCards";
import About from "./About";
import HomeImage from "./HomeImage";

function Home(){
    return (
        <>
        <div id="image-turf">
            <HomeImage/>
        </div>
        <div className="Slider-turf">
            <div className="first-div" id="cards-turf"></div>
            <SlidingCards/>
        </div>
        <div className="About-info" id="sports-icons">
            <SportsCollection/>
        </div>
        </>
    )
}

export default Home;