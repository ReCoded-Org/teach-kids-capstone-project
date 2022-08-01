import React from "react";
import AdminDashboardHeroSection from "../components/AdminDashboardHeroSection/AdminDashboardHeroSection";
import Navbar from "../components/layout/Navbar/Navbar";
function AdminDashboard() {
    return (
        <>
            <Navbar />
            <AdminDashboardHeroSection />
        </>
    );
}

export default AdminDashboard;
