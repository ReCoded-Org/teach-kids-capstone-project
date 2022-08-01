import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/EventCarousel/Events/Events";
import Footer from '../components/layout/Footer/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Events />
            <Footer />
        </>
    );
}

export default Home;
