import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilterEvents.css";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";



export default function FilterEvents() {
  const [events, setEvents] = useState({});
    return (
        <>
            <div className='absolute w-full bg-gray pb-12'>
                <p className='text-lg text-gray'>1</p>
            </div>
            <section className='diagonal-box relative my-10 flex items-center bg-gray p-4 py-8 sm:grid-cols-2 md:px-36'>
                <div className='content flex flex-col'>
                    <h1 className=' my-4 mb-6 text-center font-quicksand text-5xl font-semibold text-blue-dark'>
                        All Events
                    </h1>
                    <div className='h-18 my-3 mb-10 flex items-center justify-around gap-2 p-2 text-center font-SourceSansPro  text-sm  sm:justify-start'>
                        <button
                            href=''
                            className='button mw-40 flex w-40 grow-0 flex-row justify-center justify-self-end rounded-md border bg-blue-light px-2 py-2 text-white duration-300 ease-linear hover:rounded hover:border-blue-dark hover:bg-white  hover:text-blue-dark hover:shadow'
                        >
                            <p className='ml-3'>Topic</p>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-caret-down-fill ml-3 mt-1'
                                viewBox='0 0 16 16'
                            >
                                <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                            </svg>
                        </button>

                        <button
                            href=''
                            className='button mw-40 flex w-40 grow-0 flex-row justify-center justify-self-end rounded-md border border-blue-light bg-white py-1.75 px-1 text-blue-dark duration-300 ease-linear hover:border-2 hover:bg-blue-light hover:text-white hover:shadow '
                        >
                            <p className='ml-3'>Location</p>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-caret-down-fill ml-3 mt-1'
                                viewBox='0 0 16 16'
                            >
                                <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                            </svg>
                        </button>

                        <div className='fixed top-16 w-56 text-right'>
                            <Menu
                                as='div'
                                className='relative inline-block text-left'
                            >
                                <div>
                                    <Menu.Button className='button mw-40 inline-flex w-40 justify-center rounded-md bg-blue-light px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                                        Topic
                                        <ChevronDownIcon
                                            className='ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100'
                                            aria-hidden='true'
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter='transition ease-out duration-100'
                                    enterFrom='transform opacity-0 scale-95'
                                    enterTo='transform opacity-100 scale-100'
                                    leave='transition ease-in duration-75'
                                    leaveFrom='transform opacity-100 scale-100'
                                    leaveTo='transform opacity-0 scale-95'
                                >
                                    <Menu.Items className='divide-gray-100 absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                        <div className='px-1 py-1 '>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active
                                                                ? "bg-blue-light text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {/* Edit */}
                                                        events.map()

                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
