/* eslint-disable no-console */
import React, { useState } from "react";
import logo from "../../../assets/Logo.png";
import language from "../../../assets/language-svgrepo-com.svg";
import ProfilePic from "../../../assets/Profile.png";
import downArrow from "../../../assets/downArrow.svg";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { func } from "prop-types";
import PendingForm from "./PendingForm";

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
    let NavType = localStorage.getItem("NavType");
    let userId = localStorage.getItem("userId");
    const [t, i18n] = useTranslation();
    const [isHidden, setIsHidden] = useState(true);
    const [lang, setlang] = useState(true);
    const [Profile, setProfile] = useState(true);
    const [showModal, setShowModal] = useState(NavType);
    const [pendingApp, setPendingApp] = useState(false);
    function setProfileType() {
        if (localStorage.getItem("userType") === "Ngo") {
            return "/ngo-admin";
        } else {
            return "/volunteer-profile";
        }
    }
    function setSignOut() {
        if (localStorage.getItem("NavType") === "true") {
            localStorage.clear();
        }
        return "/";
    }
    const ProfileModel = () => (
        <div className='relative right-6 top-2.5 z-20 hidden  items-center rounded  focus:border-0  sm:text-lg md:block'>
            <button
                onClick={() => setProfile(!Profile)}
                type='button'
                className='bg-gray-800 mr-3 flex rounded-full text-sm md:mr-0'
                id='user-menu-button'
                aria-expanded='false'
                data-dropdown-toggle='user-dropdown'
                data-dropdown-placement='bottom'
            >
                <img
                    src={ProfilePic}
                    className=' ml-1 h-6 w-6 rounded-full'
                    alt=''
                />
                <img
                    src={downArrow}
                    className='ml-1 mt-2 inline-block h-4 w-3'
                    alt=''
                />
            </button>
            <div
                className='divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 z-20 my-4 block list-none divide-y rounded bg-red text-base shadow'
                id='user-dropdown'
                data-popper-reference-hidden=''
                data-popper-escaped=''
                data-popper-placement='bottom'
            >
                <ul
                    className={
                        !Profile
                            ? "absolute top-6 -right-1  my-4  transform rounded border-2  border-white  bg-red p-0 py-1   font-semibold text-white shadow-lg transition  duration-200 ease-out"
                            : "hidden"
                    }
                >
                    <div className='divide-y-  divide-gray-100 dark:bg-gray-700  dark:divide-gray-600 block list-none rounded bg-red text-base shadow'>
                        <span className='block py-0.5 px-2 hover:bg-blue-dark'>
                            {localStorage.getItem("userName")}
                        </span>
                        <span className='block py-0.5 px-2 hover:bg-blue-dark'>
                            {localStorage.getItem("userEmail")}
                        </span>
                    </div>
                    <li>
                        <a
                            href={setProfileType()}
                            className='block py-0.5 px-2 hover:bg-blue-dark'
                        >
                            Profile
                        </a>
                    </li>
                    {localStorage.getItem("userType") === "Ngo" ? (
                        <li>
                            <span
                                onClick={() => setPendingApp(true)}
                                className='block py-0.5 px-2 hover:bg-blue-dark'
                            >
                                Pending Application
                                <span className='ml-3 inline-block h-2 w-2 rounded-full bg-blue-dark'></span>
                            </span>
                        </li>
                    ) : (
                        ""
                    )}
                    <li>
                        <a
                            onClick={() => setSignOut()}
                            href={"/"}
                            className='block py-0.5 px-2 hover:bg-blue-dark'
                        >
                            SignOut
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
    const SignUpAndIn = () => (
        <div className='mx-auto'>
            <Link to='/sign-in'>
                <button className='mr-2 w-full transform  rounded border-2 py-1.5 px-6 text-xl font-semibold duration-200 ease-in hover:border-white  hover:bg-white hover:text-red  sm:ml-0 sm:w-44  sm:px-3  sm:text-sm md:w-auto md:text-sm lg:px-6'>
                    {t(`navbar.buttons.${[0]}`)}
                </button>
            </Link>
            <Link to='/register'>
                <button className=' hover:border-1 hover:bg-gray-100 w-full    transform rounded border-2  border-white bg-red  py-1.5 text-xl font-semibold duration-100 ease-in hover:bg-white hover:text-red  rtl:mx-2  sm:w-44 sm:px-3 sm:text-sm    md:w-auto lg:px-6'>
                    {t(`navbar.buttons.${[1]}`)}
                </button>
            </Link>
        </div>
    );
    const animateMenu =
        " transform  p-0 flex  h-12 w-12 flex-col mx-4 my-5 items-center justify-center gap-1.5  bg-red  rounded-full    focus:outline-none md:hidden";
    const animateSpan =
        "transform transition duration-500 ease-in-out block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ";
    return (
        <div className='md:bg-blue-dark'>
            <PendingForm
                userId={userId}
                pendingApp={pendingApp}
                setPendingApp={setPendingApp}
            />
            <nav className=' z-20 mx-auto  items-center text-sm text-white md:flex md:h-16 md:w-9/12 md:justify-around md:bg-blue-dark '>
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
                            ? " ml-12 hidden gap-4  font-light md:ml-2 md:flex md:gap-4 lg:gap-4  xl:gap-8"
                            : "jus flex flex-col gap-6  bg-blue-dark  px-6   pt-8 pb-1 text-xl font-semibold sm:items-center  md:flex-row   md:bg-inherit md:p-0    md:text-sm md:font-light  xl:gap-16  "
                    }
                >
                    <li className='border-gray-700 hover:border-gray-200 lg:text-md w-full transform  border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <NavLink to='/events'>
                            {t(`navbar.pages.${[0]}`)}
                        </NavLink>
                    </li>
                    <li className=' border-gray-700 hover:border-gray-200 lg:text-md w-full border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:hidden md:w-auto md:border-none md:pb-0 lg:block'>
                        <HashLink
                            smooth
                            to='/#contact-us' // in the contact us componant its id="contact-us" should be added
                        >
                            {t(`navbar.pages.${[1]}`)}
                        </HashLink>
                    </li>
                    <li className='border-gray-700 hover:border-gray-200 lg:text-md w-full border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:hidden md:w-auto  md:border-none md:pb-0 lg:block'>
                        <HashLink
                            smooth
                            to='/#about' // in the contact us componant its id="contact-us" should be added
                        >
                            {t(`navbar.pages.${[2]}`)}
                        </HashLink>
                    </li>

                    <li className='border-gray-700 hover:border-gray-200 lg:text-md w-full transform  border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                        <NavLink to='/our-team'>
                            {t(`navbar.pages.${[3]}`)}
                        </NavLink>
                    </li>
                    {!isHidden ? (
                        <>
                            <li className=' border-gray-700 hover:border-gray-200 lg:text-md w-full border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                                <a href={setProfileType()}>Profile</a>
                            </li>
                            <li className=' border-gray-700 hover:border-gray-200 w-full border-b-2 pb-2 font-SourceSansPro text-3xl duration-200 ease-linear hover:text-red sm:text-center sm:text-lg md:w-auto md:border-none md:pb-0'>
                                <a href={setSignOut()}>Sign Out</a>
                            </li>
                        </>
                    ) : (
                        ""
                    )}
                    {/* ============= Start (language dropdown-menu on small size screen section) ============= */}
                    {/* ============= Note: language Events Will be added later ================ */}
                    {!isHidden ? (
                        <select
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                            className='border-gray-700  hover:border-gray-200 mt-0 border-0 border-b-2 bg-transparent py-0 pb-3 text-3xl duration-200  ease-linear focus:border-0 sm:text-lg  md:hidden'
                        >
                            <option
                                value='en'
                                className='bg-blue-dark text-xl text-white'
                            >
                                Language
                            </option>
                            <option
                                value='ar'
                                className='bg-blue-dark text-xl text-white'
                            >
                                Arabic
                            </option>
                            <option
                                value='en'
                                className='bg-blue-dark text-xl text-white'
                            >
                                English
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
                            ? "hidden gap-2  md:flex "
                            : " sm: flex  flex-col  justify-end  gap-3 bg-blue-dark p-6 pt-4 pb-10   sm:flex sm:flex-row sm:pt-4 md:flex   md:flex-row md:justify-end  md:bg-inherit md:p-0 md:font-light "
                    }
                >
                    {!showModal ? <SignUpAndIn /> : null}
                    <div
                        className='relative top-2 z-20 hidden items-center  justify-self-end rounded hover:bg-red hover:text-white focus:border-0 sm:text-lg    md:mx-6  md:inline-block  '
                        onClick={() => setlang(!lang)}
                    >
                        <img
                            src={language}
                            className=' ml-1 inline-block h-6 w-8'
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
                                    ? "w-18 absolute top-8 -left-0.5 z-20   transform rounded border-2 border-white  bg-red p-0 py-1   font-semibold text-white shadow-lg transition  duration-200 ease-out"
                                    : "z-20 hidden"
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
                    {showModal ? <ProfileModel /> : null}
                </div>
                {/* ============= End (sign-in sign-up Buttons section) ============= */}
            </nav>
        </div>
    );
}
export default Navbar;
