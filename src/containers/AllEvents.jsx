import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../App.css";
import EventsGrid from "../components/EventsGrid/EventsGrid/EventsGrid";
import FilterEvents from "../components/EventsGrid/FilterEvents/FilterEvents";

function AllEvents() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [menuTagItems, setMenuTagItems] = useState([]);
    const [tag, setTag] = useState(null);

    //

    const [menuLocationItems, setMenuLocationItems] = useState([]);
    const [location, setLocation] = useState(null);

    //

    useEffect(() => {
        fetch(`http://localhost:3000/events`)
            .then((response) => response.json())
            .then((actualData) => setEvents(actualData));
    }, []);

    useEffect(() => {
        let tagItems = events
            .map((val) => val.tags)
            .reduce((acc, val) => [...acc, ...val], []);
        setMenuTagItems([...new Set(tagItems.map((item) => item))]);

        setFilteredEvents(events);
    }, [events]);

    useEffect(() => {
        const result = events.filter((event) => event.tags.includes(tag));
        setFilteredEvents(result);
    }, [tag]);

    //

    useEffect(() => {
        let locationItems = events.map((val) => val.location);
        setMenuLocationItems([...new Set(locationItems.map((item) => item))]);

        setFilteredEvents(events);
    }, [events]);

    useEffect(() => {
        const result = events.filter((event) =>
            event.location.includes(location)
        );
        setFilteredEvents(result);
    }, [location]);

    //

    return (
        <>
            <Navbar />
            <FilterEvents
                menuTagItems={menuTagItems}
                setTag={setTag}
                menuLocationItems={menuLocationItems}
                setLocation={setLocation}
            />
            <EventsGrid events={filteredEvents} />
        </>
    );
}

export default AllEvents;
