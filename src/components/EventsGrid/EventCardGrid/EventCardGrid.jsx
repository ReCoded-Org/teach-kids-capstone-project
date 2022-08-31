import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const EventCardGrid = ({ eventPost, org, number }) => {
    let name = "";
    try {
        name = eventPost.ngo.name;
    } catch {
        name = "Null";
    }
    console.log(eventPost);
    return (
        <div className='cardEffect relative mb-6 mt-16 w-full min-w-0 max-w-md break-words rounded-xl px-5 pb-6 shadow-lg xl:max-w-md'>
            <div className='card-header  mx-4 -mt-6'>
                <Link to={`/event/${eventPost._id}`}>
                    <img
                        className='h-48 w-full rounded-lg md:h-60'
                        src={require(`./images/1 (${number}).jpg`)}
                        alt={org}
                    />
                </Link>
            </div>
            <div className='flex flex-col'>
                <a href='#'>
                    <h2 className='mt-2 text-center text-lg font-bold uppercase text-black'>
                        {eventPost.title}
                    </h2>
                </a>
                <p className='mb-4 text-center text-black opacity-60'>
                    {eventPost.location}
                </p>
                <a href='#'>
                    <h4 className='mb-3 truncate text-center font-semibold uppercase text-black'>
                        {eventPost.tags[0]} | {eventPost.tags[1]}
                    </h4>
                </a>
                <div className='flex rounded-md bg-gray'>
                    <p className='ml-2 grow pt-1.5 opacity-60'>
                        {eventPost.createdAt.slice(0, 10)}
                    </p>
                    <button
                        className='button w-30 flex grow-0 flex-row justify-center justify-self-end rounded-md bg-blue-light p-2'
                        data-ripple-light='true'
                    >
                        <p className='ml-3 text-white'>Read More</p>
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
        </div>
    );
};

export default EventCardGrid;
