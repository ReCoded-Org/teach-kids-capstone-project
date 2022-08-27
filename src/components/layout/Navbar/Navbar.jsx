/* eslint-disable no-console */
import React, { Component, useState } from "react";
import logo from "../../../assets/Logo.png";
import language from "../../../assets/language-svgrepo-com.svg";
import ProfilePic from "../../../assets/Profile.png";
import downArrow from "../../../assets/downArrow.svg";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

const LANG_SPECS = [
    {
        code: "ar",
        name: "العربية",
    },
    {
        code: "en",
        name: "English",
    },
];

function Navbar() {
    const [t, i18n] = useTranslation();
    const [isHidden, setIsHidden] = useState(true);
    const [lang, setlang] = useState(true);
    const [Profile, setProfile] = useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const ProfileModel = () => (

    <div className="focus:border-0 sm:text-lg hidden relative right-6  top-2.5 z-0  rounded  items-center md:block">
            <button onClick={() => setProfile(!Profile)}  type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <img
                            src={ProfilePic}
                            className=' ml-1 rounded-full h-6 w-6'
                            alt=''
                        />
                        <img
                            src={downArrow}
                            className='ml-1 mt-2 inline-block h-4 w-3'
                            alt=''
                        />
                </button>
                <div className="z-50 my-4 text-base list-none bg-red rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block" id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" >
                    <ul className={!Profile ?"my-4 absolute top-6 -right-1 -z-10  transform rounded border-2  border-white  bg-red p-0 py-1   font-semibold text-white shadow-lg transition  duration-200 ease-out": "hidden"}>
                    <div className="text-base  list-none bg-red  rounded divide-y- divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block">
                        <span className="block py-0.5 px-2 hover:bg-blue-dark">Bonnie Green</span>
                            <span className="block py-0.5 px-2 hover:bg-blue-dark">name@flowbite.com</span>
                            </div>
                            <li>
                            <a href="#s" className="block py-0.5 px-2 hover:bg-blue-dark">Profile</a>
                            </li>
                            <li>
                                <a href="#s" className="block py-0.5 px-2 hover:bg-blue-dark">SignOut</a>
                                </li>
                                </ul>
                                </div>
                                </div>)
    const SignUpAndUp=()=>(
    <>
       <Link to='/sign-in'>
        <button className='w-full transform  rounded border-2 py-1.5 px-6 text-xl font-semibold duration-200 ease-in hover:font-bold hover:text-red  sm:ml-0  sm:w-44 sm:text-sm md:w-28 md:text-sm'>
            {t(`navbar.buttons.${[0]}`)}
            </button>
            </Link>
            <Link to='/register'>
                <button className='  hover:border-1 hover:bg-gray-100    w-full transform rounded  bg-red py-1.5  px-6 text-xl font-semibold duration-100 ease-in  hover:font-bold hover:text-red sm:w-44    sm:text-sm md:w-28'>
                    Sign Up
                    </button>
                    </Link>
                    </> )
    const animateMenu =
        " transform  p-0 flex  h-12 w-12 flex-col mx-4 my-5 items-center justify-center gap-1.5  bg-red  rounded-full    focus:outline-none md:hidden";
    const animateSpan =
        "transform transition duration-500 ease-in-out block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ";
    return (
        <>
            <nav className=' z-0  items-center  text-sm text-white md:flex md:h-16 md:justify-around md:bg-blue-dark '>
                <div className='flex items-center justify-between '>
                    <Link to='/'>
                        <img
                            src={logo}
                            className='  mx-3 my-3 mb-0 h-20 pt-1 md:py-2 '
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
                                : " mx-4 my-5  flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-blue-btn   text-white focus:outline-none md:hidden"
                        }
                    >
                        <span
                            className={
                                isHidden
                                    ? "block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out"
                                    : animateSpan +
                                      " translate-x-0.25 translate-y-1 rotate-45"
                            }
                        ></span>
                        <span
                            className={
                                isHidden
                                    ? "block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out"
                                    : animateSpan + "hidden"
                            }
                        ></span>
                        <span
                            className={
                                isHidden
                                    ? "block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out"
                                    : animateSpan +
                                      "translate-x-0.25 -translate-y-1 -rotate-45 "
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
                    <li className='border-gray-700 hover:border-gray-200 w-full transform  border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <NavLink to='/events'>{t(`navbar.pages.${[0]}`)}</NavLink>
                    </li>
                    <li className=' border-gray-700 hover:border-gray-200 w-full border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <HashLink
                            smooth
                            to='/#contact-us' // in the contact us componant its id="contact-us" should be added
                        >
                            {t(`navbar.pages.${[1]}`)}
                        </HashLink>
                    </li>
                    <li className='border-gray-700 hover:border-gray-200 w-full border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <HashLink
                            smooth
                            to='/#about' // in the contact us componant its id="contact-us" should be added
                        >
                            {t(`navbar.pages.${[2]}`)}
                        </HashLink>
                    </li>
                    {/* ============= Start (language dropdown-menu on small size screen section) ============= */}
                    {/* ============= Note: language Events Will be added later ================ */}
                    {!isHidden ? (
                        <select
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                            className='border-gray-700 hover:border-gray-200 mt-0 border-0 border-b-2 bg-transparent py-0 pb-3 text-3xl duration-200  ease-linear focus:border-0 sm:text-lg  md:hidden'
                        >
                            <option
                                value='en'
                                className='bg-blue-dark text-white text-xl'
                            >
                                Language
                            </option>
                            <option
                                value='ar'
                                className='bg-blue-dark text-white text-xl'
                            >
                                Arabic
                            </option>
                            <option
                                value='en'
                                className='bg-blue-dark text-white text-xl'
                            >
                                English
                            </option>
                            {/* <option
                                value='tr'
                                className='text-md bg-blue-dark text-white'
                            >
                                Turkish
                            </option> */}

                        </select>
                    ) : (
                        ""
                    )}
                    {!isHidden ? (
                        <select
                           onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                            className='border-gray-700 hover:border-gray-200 mt-0 border-0 border-b-2 bg-transparent py-0 pb-3 text-3xl duration-200  ease-linear focus:border-0 sm:text-lg  md:hidden'
                        >
                            <option
                                
                                className='bg-blue-dark text-white text-xl'
                            >
                                Profile
                            </option>
                            <option
                                className='bg-blue-dark text-white text-xl'
                            >
                                Sign Out
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
                            ? "hidden md:flex md:gap-3"
                            : " flex flex-col  justify-start  gap-3   bg-blue-dark p-6 pt-4 pb-10   sm:flex sm:flex-row sm:justify-center sm:pt-4   md:flex md:flex-row md:gap-2 md:bg-inherit md:p-0 md:font-light "
                    }
                >
                   
                   { !showModal ? <SignUpAndUp /> : null }
                    <div className='w-1'></div>
                    <div
                        className='relative left-72  top-1 z-0 hidden w-12 rounded  shadow-xl  hover:bg-red   hover:text-white  md:block'
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
                                    ? "w-18 absolute top-8 -left-0.5 -z-10  transform rounded border-2   border-white  bg-red p-0 py-1   font-semibold text-white shadow-lg transition  duration-200 ease-out"
                                    : "hidden "
                            }
                        >
                            <li
                                onClick={() => {
                                    i18n.changeLanguage("ar");
                                }}
                                className='py-0.5 px-2 hover:bg-blue-dark'
                            >
                                العربية
                            </li>
                            <li
                                onClick={() => {
                                    i18n.changeLanguage("en");
                                }}
                                className='py-0.5 px-2 hover:bg-blue-dark'
                            >
                                English
                            </li>
                        </ul>
                        {/* ============= End (language dropdown-menu on big size screen section) ============= */}
                    </div>
                </div>
                {/* ============= End (sign-in sign-up Buttons section) ============= */}
                { showModal ? <ProfileModel /> : null }
            </nav>
        </>
    );
}
export default Navbar;
