import React, { useState, useEffect } from "react";
import "../App.css";
import EventsGrid from "../components/EventsGrid/EventsGrid/EventsGrid";
import FilterEvents from "../components/EventsGrid/FilterEvents/FilterEvents";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AllEvents() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [num, setnum] = useState(1);
    const [showMoreBtn, setShowMoreBtn] = useState(true);

    const [menuTagItems, setMenuTagItems] = useState([]);
    const [tag, setTag] = useState(null);

    //

    const [menuLocationItems, setMenuLocationItems] = useState([]);
    const [location, setLocation] = useState(null);

    //

    const fetchData = async () => {
        const { data } = await axios.get(
            "https://reach-capstone.herokuapp.com/api/events"
        );
        return data;
    };

    const { isLoading, error, data } = useQuery(["even"], fetchData, {
        onSuccess: (data) => {
            setEvents(data.data);
        },
    });
    useEffect(() => {
        let tagItems = events
            .map((val) => val.tags)
            .reduce((acc, val) => [...acc, ...val], []);
        setMenuTagItems([...new Set(tagItems.map((item) => item))]);
        setnum(1);
        setFilteredEvents(events);
        setShowMoreBtn(true);
    }, [events]);

    useEffect(() => {
        const result = events.filter((event) => event.tags.includes(tag));
        setFilteredEvents(result);
        setShowMoreBtn(true);
        setnum(1);
    }, [tag]);

    //

    useEffect(() => {
        let locationItems = events.map((val) => val.location);
        setMenuLocationItems([...new Set(locationItems.map((item) => item))]);
        setnum(1);
        setFilteredEvents(events);
        setShowMoreBtn(true);
    }, [events]);

    useEffect(() => {
        const result = events.filter((event) =>
            event.location.includes(location)
        );
        setnum(1);
        setFilteredEvents(result);
        setShowMoreBtn(true);
    }, [location]);

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    // console.log(menuTagItems);

    return (
        <>
            <Navbar />

            <FilterEvents
                menuTagItems={menuTagItems}
                setTag={setTag}
                menuLocationItems={menuLocationItems}
                setLocation={setLocation}
            />
            <EventsGrid
                events={filteredEvents}
                num={num}
                setnum={setnum}
                setShowMoreBtn={setShowMoreBtn}
                showMoreBtn={showMoreBtn}
            />
            <Footer />
        </>
    );
}

export default AllEvents;
