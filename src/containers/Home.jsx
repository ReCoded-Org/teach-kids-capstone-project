import React, { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
        </>
    );
}

export default Home;
