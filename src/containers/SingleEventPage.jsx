import React from "react";
import SingleEventPageHeroSection from "../components/SingleEventPageHeroSection/SingleEventPageHeroSection";
import Carousel from "../components/GlobalCarousel/Events/Events";

import { getEvents } from "../services/events.js";

import { useQuery } from "@tanstack/react-query";


import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function SingleEventPage() {
    const { isLoading, error, data } = useQuery(["events"], () => getEvents());

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <Navbar />
            <SingleEventPageHeroSection />
            <Carousel carouselHeader='Related Events' events={data} />
            <Footer />
        </>
    );
}

export default SingleEventPage;
