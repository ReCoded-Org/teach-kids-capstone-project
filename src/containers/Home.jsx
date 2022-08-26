import React from "react";

import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Events from "../components/EventCarousel/Events/Events";

import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
import OurValues from "../components/OurValues/OurValues";

import { getEvents } from "../services/events.js";

import { useQuery } from "@tanstack/react-query";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function Home() {
    const { isLoading, error, data } = useQuery(["events"], () => getEvents());

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    console.log(data.data);

    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <OurValues />
            <Events carouselHeader='Related Events' events={data.data} />
            <ContactUs />
            <Footer />
        </>
    );
}

export default Home;
