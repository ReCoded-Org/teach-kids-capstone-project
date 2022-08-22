import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ eventPost, org }) => {
    return (
        <div className='relative mb-6 mt-16  w-full min-w-0 max-w-md break-words rounded-xl px-5 xl:max-w-2xl'>
            <div className='card-header mx-4 -mt-6'>
                <Link to={`/event/${eventPost.id}`}>
                    <img
                        className='mx-auto w-auto w-full  rounded-lg 	sm:h-56 md:h-56  xl:h-72'
                        src={eventPost.image}
                        alt={org.name}
                    />
                </Link>
            </div>
            <div className='flex flex-col'>
                <a href='#'>
                    <h2 className='text-SourceSansPro mt-2 h-8 truncate text-center text-lg font-semibold text-black'>
                        {org}
                    </h2>
                </a>
                <p className='mb-4 text-center  text-black '>
                    {eventPost.location}
                </p>
                <a href='#'>
                    <h4 className='text-blue-light-400 mb-3 h-8 truncate text-center font-semibold '>
                        {eventPost.title}
                    </h4>
                </a>
                <div className='flex rounded-md bg-white'>
                    <p className='ml-2 h-fit grow truncate bg-blue-light bg-opacity-10 px-3 pt-1.5 text-black text-opacity-70'>
                        {eventPost.date}
                    </p>
                    <button
                        className='button w-30 flex h-fit grow-0 flex-row justify-center justify-self-end truncate rounded-md bg-blue-light p-2'
                        data-ripple-light='true'
                    >
                        <p className='ml-3  text-white'>Read More</p>
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

export default EventCard;
