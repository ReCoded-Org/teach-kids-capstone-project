import React, { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import ContactUs from "@/components/layout/ContactUs";
function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ContactUs />
        </>
    );
}

export default Home;
