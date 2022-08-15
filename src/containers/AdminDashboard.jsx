import React from "react";
import AdminDashboardHeroSection from "../components/AdminDashboardHeroSection/AdminDashboardHeroSection";
import Carousel from "../components/GlobalCarousel/Events/Events";

import { getEvents } from "../services/events.js";

import { useQuery } from "@tanstack/react-query";

function AdminDashboard() {
    const { isLoading, error, data } = useQuery(["events"], () => getEvents());

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <AdminDashboardHeroSection />
            <Carousel carouselHeader='Previous Events' events={data} />
        </>
    );
}

export default AdminDashboard;
