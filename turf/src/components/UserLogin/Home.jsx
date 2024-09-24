import React from "react";
import { Route,Router,Routes } from "react-router-dom";


//import components
import SlidingCards from "./SlidingCards";
import About from "./About";

function Home(){
    return (
        <>
        <div className="Slider-turf">
            <div className="first-div" id="cards-turf"></div>
            <SlidingCards/>
        </div>
        <div className="About-info">
            {/* <div className="second-div" id="info">
                <About/>
            </div> */}
        </div>
        </>
    )
}

export default Home;