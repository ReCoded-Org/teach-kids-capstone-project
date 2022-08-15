import React, { useState, useEffect } from "react";
import "../App.css";
import EventsGrid from "../components/EventsGrid/EventsGrid/EventsGrid";
import FilterEvents from "../components/EventsGrid/FilterEvents/FilterEvents";

function AllEvents() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [num, setnum] = useState(1);
    const [showMoreBtn, setShowMoreBtn] = useState(true);

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

    return (
        <>
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
        </>
    );
}

export default AllEvents;
