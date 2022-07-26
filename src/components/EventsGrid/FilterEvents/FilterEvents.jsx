import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function FilterEvents({
    menuTagItems,
    setTag,
    menuLocationItems,
    setLocation,
}) {
    return (
        <>
            <div className='absolute w-full   bg-gray pb-12'>
                <p className='text-lg text-gray'>1</p>
            </div>
            <section className=' diagonal-box relative z-50 my-10 flex items-center justify-center bg-gray p-4 py-8 sm:grid-cols-2 md:px-36'>
                <div className='content flex flex-col'>
                    <h1 className=' my-4 mb-6 text-center font-quicksand text-5xl font-semibold text-blue-dark'>
                        All Events
                    </h1>
                    <div className='h-18 my-3 mb-10 flex items-center justify-around gap-2 p-2 text-center font-SourceSansPro  text-sm  sm:justify-start'>
                        <div className='text-right'>
                            <Menu
                                as='div'
                                className='relative inline-block text-left'
                            >
                                <div>
                                    <Menu.Button className='button  mw-40 inline-flex w-40 justify-center rounded-md bg-blue-light px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
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
                                    <Menu.Items className='divide-gray-100 absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y rounded-md bg-white uppercase shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                        <div className='px-1 py-1 '>
                                            {menuTagItems.map((el) => {
                                                return (
                                                    <Menu.Item key={el}>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() =>
                                                                    setTag(el)
                                                                }
                                                                className={`${
                                                                    active
                                                                        ? "bg-blue-light uppercase text-white"
                                                                        : "text-gray-900"
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}
                                                            >
                                                                {el}
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                );
                                            })}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>

                        <div className='text-right'>
                            <Menu
                                as='div'
                                className='relative inline-block text-left'
                            >
                                <div>
                                    <Menu.Button className='button mw-40 inline-flex w-40 justify-center rounded-md border-blue-light bg-white px-4 py-2 text-sm font-medium text-blue-light hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                                        Location
                                        <ChevronDownIcon
                                            className='ml-2 -mr-1 h-5 w-5 text-blue-light hover:text-violet-100'
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
                                    <Menu.Items className='divide-gray-100 absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                        <div className='px-1 py-1 '>
                                            {menuLocationItems.map((el) => {
                                                return (
                                                    <Menu.Item key={el}>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() =>
                                                                    setLocation(
                                                                        el
                                                                    )
                                                                }
                                                                className={`${
                                                                    active
                                                                        ? "bg-blue-light uppercase text-white"
                                                                        : "text-gray-900"
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}
                                                            >
                                                                {el}
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                );
                                            })}
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
