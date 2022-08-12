import React from "react";
import SingleEventPageHeroSection from "../components/SingleEventPageHeroSection/SingleEventPageHeroSection";
import Navbar from "../components/layout/Navbar/Navbar";
import Carousel from "../components/GlobalCarousel/Events/Events";
function SingleEventPage() {
    return (
        <>
            <Navbar />
            <SingleEventPageHeroSection />
            <Carousel carouselHeader='Related Events' />
        </>
    );
}

export default SingleEventPage;
