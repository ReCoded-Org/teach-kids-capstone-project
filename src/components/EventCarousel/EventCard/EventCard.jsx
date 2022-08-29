import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/AboutUs-1.jpg";

const EventCard = ({ eventPost }) => {
    return (
        <div className='relative mx-auto mb-6 mt-16 flex w-full  min-w-0 max-w-md flex-col justify-center break-words rounded-xl px-5 xl:max-w-2xl'>
            <div className='card-header mx-4 -mt-6 	'>
                <Link to={`/event/${eventPost._id}`}>
                    <img
                        className='	 mx-auto w-full rounded-lg sm:h-56 	md:h-56 xl:h-72 '
                        src={img}
                        alt={eventPost.ngo.name}
                    />
                </Link>
            </div>
            <div className='flex  flex-col font-SourceSansPro'>
                <a href='#'>
                    <h2 className=' mt-2 h-8 truncate text-center text-lg font-bold uppercase text-white'>
                        {eventPost.ngo.name}
                    </h2>
                </a>
                <p className='mb-4 text-center uppercase text-white opacity-60'>
                    {eventPost.location}
                </p>
                <a href='#'>
                    <h4 className='mb-3 h-8 truncate text-center font-semibold uppercase text-white'>
                        {eventPost.title}
                    </h4>
                </a>
                <div className='flex rounded-md bg-white'>
                    <p className='ml-2 h-fit grow truncate pt-1.5 opacity-60'>
                        {eventPost.date}
                    </p>
                    <button
                        className='button w-30 flex h-fit grow-0 transform flex-row justify-center justify-self-end truncate rounded-md border-2 border-blue-dark bg-blue-dark p-2 text-white duration-300 ease-linear hover:bg-blue-light hover:font-bold hover:text-blue-dark hover:shadow'
                        data-ripple-light='true'
                    >
                        <p className='ml-3'>Read More</p>
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
