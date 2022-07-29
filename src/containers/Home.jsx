import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/EventCarousel/Events/Events";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Events />
        </>
    );
}

export default Home;
