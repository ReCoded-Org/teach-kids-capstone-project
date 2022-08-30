import Home from "./containers/Home";
import AdminDashboard from "./containers/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import SingleEventPage from "./containers/SingleEventPage";
import AllEvents from "./containers/AllEvents";
import SignIn from "./components/SignIn/SignIn";
import NgoProfilePage from "./containers/NgoProfilePage";
import Register from "./components/Register/Register";
import Protected from "./services/Protected";
import OurTeam from "./containers/OurTeam";
import VolunteerPage from "../src/containers/VolunteerPage";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function App() {
    let isLoggedAsVolunteer = false;
    let isLoggedAsNgo = false;
    if (
        localStorage.getItem("userId") !== undefined &&
        localStorage.getItem("userType") === "Volunteer"
    ) {
        isLoggedAsVolunteer = true;
    } else if (
        localStorage.getItem("userId") !== undefined &&
        localStorage.getItem("userType") === "Ngo"
    ) {
        isLoggedAsNgo = true;
    } else {
        isLoggedAsVolunteer = true;
        isLoggedAsNgo = true;
    }

    return (
        <div className=''>
            <Routes>
                <Route path='/events' element={<AllEvents />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/event/:id' element={<SingleEventPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route
                    path='/volunteer-profile'
                    element={
                        <Protected isLoggedIn={isLoggedAsVolunteer}>
                            <VolunteerPage
                                userId={localStorage.getItem("userId")}
                            />
                        </Protected>
                    }
                />
                <Route
                    path='/ngo-admin'
                    element={
                        <Protected isLoggedIn={isLoggedAsNgo}>
                            <AdminDashboard
                                userId={localStorage.getItem("userId")}
                            />
                        </Protected>
                    }
                />
                <Route path='/ngo-profile/:id' element={<NgoProfilePage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/our-team' element={<OurTeam />} />
            </Routes>
        </div>
    );
}

export default App;
