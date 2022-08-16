import React, { useState, useEffect } from "react";
import EventCardGrid from "../EventCardGrid/EventCardGrid";

import { useQuery } from "@tanstack/react-query";
import { getOrganizations } from "../../../services/events";

export default function EventsGrid({ events }) {
    const { isLoading, error, data } = useQuery(
        ["organizations"],
        getOrganizations
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className='flex flex-col bg-white '>
            <div className='container'>
                <h1 className='mt-14 text-center text-4xl font-bold text-black'>
                    Our Events
                </h1>
                <div className='flex grid-rows-3 flex-row flex-wrap justify-center'>
                    {events.map((eventPost) => {
                        const org = data.find((element) => {
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
                <button
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
            </div>
        </div>
    );
}
