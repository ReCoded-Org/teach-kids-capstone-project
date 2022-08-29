import React from "react";
import AdminDashboardHeroSection from "../components/AdminDashboardHeroSection/AdminDashboardHeroSection";
import Carousel from "../components/GlobalCarousel/Events/Events";

import { getEvents } from "../services/events.js";

import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function AdminDashboard({ userId }) {
    const { isLoading, error, data } = useQuery(["events"], () => getEvents());

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    // console.log(data.data);
    return (
        <>
            <Navbar />
            <AdminDashboardHeroSection userId={userId} />
            <Carousel carouselHeader='Previous Events' events={data.data} />
            <Footer />
        </>
    );
}

export default AdminDashboard;
