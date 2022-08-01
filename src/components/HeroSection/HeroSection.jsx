import React from "react";
import "../../App.css";
import logo from "../../Assets/landing_page 1.png";
import { Link } from "react-router-dom";
function HeroSection() {
    return (
        <>
            <section className='my-3 grid grid-cols-1 bg-white p-4 py-8 sm:grid-cols-2 md:px-36'>
                <main className='row'>
                    <h1 className=' my-4 mb-6  font-quicksand text-5xl font-semibold text-blue-dark'>
                        Reach
                    </h1>
                    <p className='text-md my-6 mb-4  font-SourceSansPro  leading-5 text-blue-dark'>
                        Get the understanding you need to channel the books of
                        spells you have always been smitten with, and boost
                        sales which cartoon rabbits love to steal!
                    </p>
                    <div className='h-18 my-3 flex items-center justify-around gap-2 p-2 text-center font-SourceSansPro  text-sm  sm:justify-start'>
                        <Link to='/volunteer-profile'>
                            <button
                                href=''
                                className='mw-40 w-32 border bg-blue-light px-2 py-2 text-white duration-300 ease-linear hover:rounded hover:border-blue-dark hover:bg-white  hover:text-blue-dark hover:shadow'
                            >
                                volunteer with us
                            </button>
                        </Link>
                        <Link to='/events'>
                            <button
                                href=''
                                className='w-32  rounded-sm border border-blue-light bg-white py-1.75 px-1 text-blue-dark duration-300 ease-linear hover:border-2 hover:bg-blue-light hover:text-white hover:shadow '
                            >
                                upcoming Events
                            </button>
                        </Link>
                    </div>
                </main>
                <div className='flex h-56 justify-center p-2 md:mt-5 md:h-80  md:place-items-end'>
                    <img src={logo} alt='' />
                </div>
            </section>
        </>
    );
}
export default HeroSection;
