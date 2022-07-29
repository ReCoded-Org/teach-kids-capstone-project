import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/GlobalCarousel/Events/Events";
import Event from "../components/EventCarousel/Events/Events";
function Home() {
    return (
        <>
            {/* <Navbar />
            <HeroSection /> */}
            <Events carouselHeader='Hello WOrld' />
            <Event />
        </>
    );
}

export default Home;
