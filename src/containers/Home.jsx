import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/EventCarousel/Events/Events";
import ContactUs from "../components/layout/ContactUs";
function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Events />
           <ContactUs /> 
        </>
    );
}

export default Home;
