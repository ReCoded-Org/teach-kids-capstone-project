import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/EventCarousel/Events/Events";
import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <Events />
           <ContactUs /> 
        </>
    );
}

export default Home;
