import React from "react";
import NgoProfilePageHeroSection from "../components/NgoProfilePageHeroSection/NgoProfilePageHeroSection";
import GlobalCarousel from "../components/GlobalCarousel/Events/Events";
import { getEvents } from "../services/events.js";

import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import NewEvent from "../components/NewEvent/NewEvent";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";


function NgoProfilePage() {
    let isLoggedAsNgoEvent=false
    const { isLoading, error, data } = useQuery(["events"], () => getEvents());

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <Navbar />
            <BackToTopButton />
            <NgoProfilePageHeroSection />
            <NewEvent isLoggedAsNgoEvent={isLoggedAsNgoEvent} />
            <GlobalCarousel carouselHeader='Previous Events' events={data} />
            <GlobalCarousel
                carouselHeader='Previous Events'
                events={data.data}
            />
            <Footer />
        </>
    );
}

export default NgoProfilePage;
