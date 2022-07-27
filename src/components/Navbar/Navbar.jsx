import React, { Component, useState } from "react";
import logo from "../../Assets/Logo.png";
import language from "../../Assets/language-svgrepo-com.svg";
import downArrow from "../../Assets/downArrow.svg";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    const [isHidden, setIsHidden] = useState(true);
    const [lang, setlang] = useState(true);
    const animateMenu =
        " transform  p-0 flex h-8 w-8 flex-col mx-2 items-center justify-center gap-1  bg-red  rounded-full    focus:outline-none md:hidden";
    const animateSpan =
        "transform transition duration-500 ease-in-out block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ";
    return (
        <>
            <nav className=' z-0  items-center  text-sm text-white md:flex md:h-16 md:justify-around md:bg-blue-dark '>
                <div className='flex items-center justify-between '>
                    <Link to='/Home'>
                        <img
                            src={logo}
                            className='  mx-3 mb-0 h-16 pt-2 '
                            alt='Reach Logo'
                        />
                    </Link>
                    {/* ============= Start (burger-menu section (animation +styling)) ============= */}
                    <div
                        onClick={() => {
                            setIsHidden(!isHidden);
                        }}
                        className={
                            !isHidden
                                ? animateMenu
                                : " mx-2 flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-full bg-blue-dark   text-white focus:outline-none md:hidden"
                        }
                    >
                        <span
                            className={
                                isHidden
                                    ? "block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                                    : animateSpan +
                                      " translate-x-0.25 translate-y-1 rotate-45"
                            }
                        ></span>
                        <span
                            className={
                                isHidden
                                    ? "block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                                    : animateSpan + "hidden"
                            }
                        ></span>
                        <span
                            className={
                                isHidden
                                    ? "block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                                    : animateSpan +
                                      "translate-x-0.25 -translate-y-0.5 -rotate-45 "
                            }
                        ></span>
                    </div>
                    {/* ============= End (burger-menu section (animation +styling)) ============= */}
                </div>
                {/* ============= Start (navbar links dropdown-menu on small size screen) ============= */}
                <ul
                    className={
                        isHidden
                            ? " hidden gap-6  font-light md:flex xl:gap-16"
                            : "jus flex flex-col gap-6  bg-blue-dark  px-6   pt-8 pb-1 text-xl font-semibold sm:items-center  md:flex-row   md:bg-inherit md:p-0    md:text-sm md:font-light  xl:gap-16  "
                    }
                >
                    <li className=' w-full transform border-b-2  border-gray-700 pb-2 text-3xl duration-200 ease-linear hover:border-gray-200 hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <NavLink to='/events'>Events</NavLink>
                    </li>
                    <li className=' w-full border-b-2 border-gray-700 pb-2 text-3xl duration-200 ease-linear hover:border-gray-200 hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <NavLink
                            to='contact-us' // in the contact us componant its id="contact-us" should be added
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li className=' w-full border-b-2 border-gray-700 pb-2 text-3xl duration-200 ease-linear hover:border-gray-200 hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <NavLink
                            to='about-us' // in the contact us componant its id="contact-us" should be added
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className=' w-full border-b-2 border-gray-700 pb-2 text-3xl duration-200 ease-linear hover:border-gray-200 hover:text-red sm:text-center sm:text-lg md:hidden md:w-auto md:border-none md:pb-0'>
                        <NavLink
                            to='about-us' // in the contact us componant its id="contact-us" should be added
                        >
                            My Profile
                        </NavLink>
                    </li>
                    {/* ============= Start (language dropdown-menu on small size screen section) ============= */}
                    {/* ============= Note: language Events Will be added later ================ */}
                    {!isHidden ? (
                        <select className='  mt-0 border-0 border-b-2 border-gray-700 bg-transparent py-0 pb-3 text-3xl duration-200 ease-linear	hover:border-gray-200 focus:border-0 sm:text-lg  md:hidden'>
                            <option value='' className='text-xl text-gray-500'>
                                Language
                            </option>
                            <option value='' className='text-xl text-gray-500'>
                                Arabic
                            </option>

                            <option value='' className='text-xl text-gray-500'>
                                English
                            </option>
                            <option value='' className='text-xl text-gray-500'>
                                Turkish
                            </option>
                        </select>
                    ) : (
                        ""
                    )}
                    {/* ============= End (language dropdown-menu on small size screen section) ============= */}
                </ul>
                {/* ============= End (navbar links dropdown-menu on small size screen) ============= */}
                {/* ============= Start (sign-in sign-up Buttons) ============= */}
                <div
                    className={
                        isHidden
                            ? "hidden    md:flex md:gap-3"
                            : " flex flex-col  justify-start gap-3   bg-blue-dark p-6 pt-4 pb-10   sm:flex sm:flex-row sm:justify-center sm:pt-4   md:flex md:flex-row md:gap-2 md:bg-inherit md:p-0 md:font-light  "
                    }
                >
                    <Link to='/sign-in'>
                        <button className=' w-full  transform rounded  border-2 py-1 px-6 text-xl font-semibold duration-200 ease-in hover:bg-gray-100 hover:font-bold hover:text-red  sm:ml-0  sm:w-44 sm:text-sm md:w-28   md:text-sm'>
                            Sign In
                        </button>
                    </Link>
                    <Link to='/sign-up'>
                        <button className='  hover:border-1 w-full   transform rounded bg-red  py-1.5 px-6  text-xl font-semibold duration-100 ease-in hover:bg-gray-100  hover:font-bold hover:text-red sm:w-44   sm:text-sm md:w-28'>
                            Sign Up
                        </button>
                    </Link>
                    <div className='w-1 '></div>
                    <div
                        className='  relative  top-1 z-0 hidden  w-12 rounded     shadow-xl  hover:bg-red   hover:text-white  md:block'
                        onClick={() => setlang(!lang)}
                    >
                        <img
                            src={language}
                            className=' ml-1 inline-block h-6 w-6'
                            alt=''
                        />
                        <img
                            src={downArrow}
                            className=' ml-1 inline-block h-4 w-3'
                            alt=''
                        />
                        {/* ============= Start (language dropdown-menu on big size screen section) ============= */}
                        <ul
                            className={
                                !lang
                                    ? " w-18 absolute top-8 -left-0.5 -z-10    transform rounded border-2   border-white  bg-red p-0 py-1   font-semibold text-white shadow-lg transition  duration-200 ease-out"
                                    : "hidden "
                            }
                        >
                            <li className='py-0.5 px-2 hover:bg-blue-dark'>
                                Arabic
                            </li>
                            <li className='py-0.5 px-2 hover:bg-blue-dark'>
                                Turkish
                            </li>
                            <li className='py-0.5 px-2 hover:bg-blue-dark'>
                                English
                            </li>
                        </ul>
                        {/* ============= End (language dropdown-menu on big size screen section) ============= */}
                    </div>
                </div>
                {/* ============= End (sign-in sign-up Buttons section) ============= */}
            </nav>
        </>
    );
}
export default Navbar;