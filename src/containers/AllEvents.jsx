import React, { useState, useEffect } from "react";
import "../App.css";
import EventsGrid from "../components/EventsGrid/EventsGrid/EventsGrid";
import FilterEvents from "../components/EventsGrid/FilterEvents/FilterEvents";
import { getEvents } from "../services/events.js";

import { useQuery } from "@tanstack/react-query";

function AllEvents() {
    const [filteredEvents, setFilteredEvents] = useState([]);

    const [menuTagItems, setMenuTagItems] = useState([]);
    const [tag, setTag] = useState(null);

    const [menuLocationItems, setMenuLocationItems] = useState([]);
    const [location, setLocation] = useState(null);

    const { isLoading, error, data } = useQuery(["events"], () => getEvents());
    useEffect(() => setFilteredEvents(data), [data]);

    useEffect(() => {
        if (data) {
            let tagItems = data
                .map((val) => val.tags)
                .reduce((acc, val) => [...acc, ...val], []);
            setMenuTagItems([...new Set(tagItems.map((item) => item))]);
            setFilteredEvents(data);
        }
    }, [data]);

    useEffect(() => {
        if (data) {
            const result = data.filter((event) => event.tags.includes(tag));
            setFilteredEvents(result);
        }
    }, [tag]);

    useEffect(() => {
        if (data) {
            let locationItems = data.map((val) => val.location);
            setMenuLocationItems([
                ...new Set(locationItems.map((item) => item)),
            ]);

            setFilteredEvents(data);
        }
    }, [data]);

    useEffect(() => {
        if (data) {
            const result = data.filter((event) =>
                event.location.includes(location)
            );
            setFilteredEvents(result);
        }
    }, [location]);

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <FilterEvents
                menuTagItems={menuTagItems}
                setTag={setTag}
                menuLocationItems={menuLocationItems}
                setLocation={setLocation}
            />
            <EventsGrid events={filteredEvents} />
        </div>
    );
}

export default AllEvents;
