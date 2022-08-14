import React from "react";
import NgoProfilePageHeroSection from "../components/NgoProfilePageHeroSection/NgoProfilePageHeroSection";
import Navbar from "../components/layout/Navbar/Navbar";
import GlobalCarousel from "../components/GlobalCarousel/Events/Events";
import Footer from "../components/layout/Footer/Footer";

import { getEvents } from "../services/events.js";

import { useQuery } from "@tanstack/react-query";

function NgoProfilePage() {

    const { isLoading, error, data } = useQuery(["events"], () => getEvents());
    
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <Navbar />
            <NgoProfilePageHeroSection />
            <GlobalCarousel carouselHeader='Previous Events' events={data} />
            <Footer />
        </>
    );
}

export default NgoProfilePage;
