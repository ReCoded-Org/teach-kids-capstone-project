import React from "react";
import NgoProfilePageHeroSection from "../components/NgoProfilePageHeroSection/NgoProfilePageHeroSection";
import Navbar from "../components/layout/Navbar/Navbar";
import GlobalCarousel from "../components/GlobalCarousel/Events/Events";
import Footer from "../components/layout/Footer/Footer";
function NgoProfilePage() {
    return (
        <>
            <Navbar />
            <NgoProfilePageHeroSection />
            <GlobalCarousel carouselHeader='Previous Events' />
            <Footer />
        </>
    );
}

export default NgoProfilePage;
