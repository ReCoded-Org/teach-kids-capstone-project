/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import EventCardGrid from "../EventCardGrid/EventCardGrid";

export default function EventsGrid({
    events,
    num,
    setnum,
    setShowMoreBtn,
    showMoreBtn,
}) {
    useEffect(() => {
        if (events.length <= (window.innerWidth > 770 ? 12 : 6)) {
            setShowMoreBtn(false);
        }
    });

    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/organizations`)
            .then((response) => response.json())
            .then((actualData) => setOrganizations(actualData));
    }, []);

    function showMoreEvents(num) {
        let subArraiesNumber = Math.floor(
            events.length / (window.innerWidth > 770 ? 12 : 6)
        );
        if (events % (window.innerWidth > 770 ? 12 : 6) !== 0)
            subArraiesNumber++;

        if ((num + 1) * (window.innerWidth > 770 ? 12 : 6) >= events.length) {
            console.log();
            setShowMoreBtn(false);
        } else {
            setShowMoreBtn(true);
        }

        setnum(++num);
    }

    return (
        <div className='flex flex-col justify-end bg-white  '>
            <div className='m-auto flex w-11/12 flex-col items-center justify-center'>
                <h1 className='mt-14 text-center font-quicksand text-4xl font-bold text-black'>
                    Our Events
                </h1>
                <div className='  grid gap-4 md:grid-cols-2 lg:grid-cols-3  '>
                    {events
                        .slice(0, (window.innerWidth > 770 ? 12 : 6) * num)
                        ?.map((eventPost) => {
                            const org = organizations.find((element) => {
                                return (
                                    element.organizationId ===
                                    eventPost.organizationId
                                );
                            });

                            return (
                                <EventCardGrid
                                    eventPost={eventPost}
                                    key={eventPost.id}
                                    org={org.name}
                                />
                            );
                        })}
                </div>
                {showMoreBtn ? (
                    <button
                        onClick={() => {
                            showMoreEvents(num);
                        }}
                        className='w-50 m-auto mt-5 mb-14 flex justify-center rounded-md bg-blue-dark p-3'
                        data-ripple-light='true'
                    >
                        <p className='ml-5 text-white'>Check More</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2 mt-1 h-5 w-5 -translate-x-2 stroke-white transition duration-300 group-hover:translate-x-0'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            stroke-2
                        >
                            <path d='M9 5l7 7-7 7' />
                        </svg>
                    </button>
                ) : (
                    <div className='mb-24'></div>
                )}
            </div>
        </div>
    );
}
