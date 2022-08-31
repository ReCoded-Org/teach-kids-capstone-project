import React from "react";
import "../../App.css";
//import logo from "../../assets/landing_page 1.png";
import logo from "../../assets/herosction.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

function HeroSection() {
    const [t] = useTranslation();

    return (
        <>
            <div className='area  mt-0 h-[62rem] sm:h-[54rem] md:h-[44rem]'>
                <ul className='circles mb-48 flex md:pt-24  lg:pt-16'>
                    <section className='mx-auto grid w-11/12 grid-cols-1 py-8 md:my-4 md:w-9/12 md:grid-cols-2 md:px-12  md:pt-0 lg:pt-4 lg:pb-20'>
                        <main className='row md:mt-20 lg:mt-20'>
                            <h1 className=' mb-6 text-center  font-quicksand text-8xl font-semibold text-blue-dark md:text-start'>
                                {t("home.hero.title")}
                            </h1>
                            <h1 className='my-12 mb-4 text-center font-quicksand text-2xl font-bold leading-5 tracking-wider text-blue-dark md:text-start md:text-4xl'>
                                {t("home.hero.description")}
                            </h1>

                            <p className='my-6 mb-4 text-center font-SourceSansPro text-2xl leading-5 text-blue-dark md:text-start '>
                                <span className='pt-6 text-lg'>
                                    {t("home.hero.description2")}
                                </span>
                            </p>
                            <div className='h-18 my-3 flex items-center justify-center gap-2 py-2 text-center font-SourceSansPro  text-sm  md:justify-start'>
                                <Link to='/volunteer-profile'>
                                    <button
                                        href=''
                                        className='mw-40 w-32 rounded-md border-2 border-blue-light bg-blue-light px-2 py-2 font-semibold text-white duration-300 ease-linear hover:border-blue-dark hover:bg-white  hover:text-blue-dark hover:shadow'
                                    >
                                        {t("home.hero.btn1")}
                                    </button>
                                </Link>
                                <Link to='/events'>
                                    <button
                                        href=''
                                        className='w-32 rounded-md border-2 border-blue-light bg-white py-2 px-2 font-semibold text-blue-light duration-300 ease-linear hover:border-2 hover:bg-blue-light hover:text-white hover:shadow '
                                    >
                                        {t("home.hero.btn2")}
                                    </button>
                                </Link>
                            </div>
                        </main>
                        <div className='flex h-96 justify-center md:my-auto md:h-[35rem]  lg:place-items-end  lg:justify-end'>
                            <img
                                src={logo}
                                className='md:mb-4 lg:h-full'
                                alt='Landing page graphic'
                            />
                        </div>
                    </section>

                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    );
}

export default HeroSection;
