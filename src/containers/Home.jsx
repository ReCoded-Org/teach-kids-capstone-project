import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/EventCarousel/Events/Events";
import Footer from "../components/layout/Footer/Footer";
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
            <Footer />
        </>
    );
}

export default Home;
