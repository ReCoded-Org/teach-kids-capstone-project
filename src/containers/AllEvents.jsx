import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import EventsGrid from "../components/EventsGrid/EventsGrid/EventsGrid";
import FilterEvents from "../components/EventsGrid/FilterEvents/FilterEvents"

function AllEvents() {
    return (
        <>
            <Navbar />
            <FilterEvents />
            <EventsGrid />
            
        </>
    );
}

export default AllEvents;