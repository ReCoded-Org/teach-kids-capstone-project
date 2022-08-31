import React from "react";
import { Link } from "react-router-dom";
// import img from "./images/";
const EventCard = ({ eventPost, org ,number}) => {
    return (
        <div className='relative mb-6 mt-16  w-full min-w-0 max-w-md break-words rounded-xl px-5 xl:max-w-2xl'>
            <div className='card-header mx-4 -mt-6'>
                <Link to={`/event/${eventPost._id}`}>
                <img
                        className='	 mx-auto w-full rounded-lg sm:h-56 	md:h-56 xl:h-72 '
                        src={require(`./images/1 (${number}).jpg`)}
                        alt={eventPost.ngo.name}
                    />
                </Link>
            </div>
            <div className='flex flex-col'>
                <a href='#'>
                    <h2 className='text-SourceSansPro mt-2 h-8 truncate text-center text-lg font-semibold text-black'>
                        {eventPost.title}
                    </h2>
                </a>
                <p className='mb-4 text-center  text-black '>
                    {eventPost.location}
                </p>
                <a href='#'>
                    <h4 className='mb-3 truncate text-center font-semibold uppercase text-black'>
                        {eventPost.tags[0]} | {eventPost.tags[1]}
                    </h4>
                </a>
                <div className='flex rounded-md bg-white'>
                    <p className='ml-2 h-fit grow truncate bg-blue-light bg-opacity-10 px-3 pt-1.5 text-black text-opacity-70'>
                        {eventPost.launchDate}
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