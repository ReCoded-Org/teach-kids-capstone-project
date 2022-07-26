/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import EventCardGrid from "../EventCardGrid/EventCardGrid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function EventsGrid({
    events,
    num,
    setnum,
    setShowMoreBtn,
    showMoreBtn,
}) {
    // const [number, setNumber] = useState(1);
    useEffect(() => {
        if (events.length <= (window.innerWidth > 770 ? 12 : 6)) {
            setShowMoreBtn(false);
        }
    });

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
    let number = 1;

    return (
        <div className='flex flex-col justify-end bg-white  '>
            <div className='m-auto flex w-11/12 flex-col items-center justify-center'>
                <div className='  grid gap-4 md:grid-cols-2 lg:grid-cols-3  '>
                    {events
                        .slice(0, (window.innerWidth > 770 ? 12 : 6) * num)
                        ?.map((eventPost) => {
                            number++;
                            // setNumber(number + 1);
                            if (number > 13) number = 1
                            return (
                                <EventCardGrid
                                    eventPost={eventPost}
                                    key={eventPost._id}
                                    number={number}
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
