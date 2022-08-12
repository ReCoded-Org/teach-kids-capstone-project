import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ eventPost }) => {
    return (
        <div className='relative mb-6 mt-16 w-full min-w-0 max-w-md break-words rounded-xl px-5 xl:max-w-2xl'>
            <div className='card-header mx-4 -mt-6'>
                <Link to={`/event/${eventPost.id}`}>
                    <img
                        className='w-auto rounded-lg'
                        src={eventPost.image}
                        alt={eventPost.name}
                    />
                </Link>
            </div>
            <div className='flex flex-col'>
                <a href='#'>
                    <h2 className='font-bold text-center mt-2 text-white text-lg'>{eventPost.name}</h2>
                </a>
                <p className='mb-4 opacity-60 text-center text-white'>{eventPost.location}</p>
                <a href='#'>
                    <h4 className='font-semibold text-center mb-3 text-white'>{eventPost.topic}</h4>
                </a>
                <div className='flex rounded-md bg-white'>
                    <p className='ml-2 grow pt-1.5 opacity-60'>
                        {eventPost.date}
                    </p>
                    <button
                        className='button flex w-30 grow-0 flex-row justify-center justify-self-end rounded-md bg-blue-dark p-2'
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

export default EventCard;
