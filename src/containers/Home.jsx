import React from "react";

import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/EventCarousel/Events/Events";

import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
import OurValues from "../components/OurValues/OurValues";

function Home() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <OurValues />
            <Events />
            <ContactUs />
        </>
    );
}

export default Home;
