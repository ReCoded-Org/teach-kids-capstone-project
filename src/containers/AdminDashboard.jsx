import React from "react";
import AdminDashboardHeroSection from "../components/AdminDashboardHeroSection/AdminDashboardHeroSection";
import Navbar from "../components/layout/Navbar/Navbar";
import Carousel from "../components/GlobalCarousel/Events/Events";

function AdminDashboard() {
    return (
        <>
            <Navbar />
            <AdminDashboardHeroSection />
            <Carousel carouselHeader='Previous Events' />
        </>
    );
}

export default AdminDashboard;
