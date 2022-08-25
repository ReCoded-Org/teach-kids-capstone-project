import React from "react";
import "../../App.css";
import logo from "../../assets/landing_page 1.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HeroSection() {
    const [t] = useTranslation();

    return (
        <>
            <section className='my-3 mx-auto grid w-11/12 grid-cols-1 bg-white py-8 sm:grid-cols-2 md:my-4 md:w-9/12  md:pt-0 lg:py-28'>
                <main className='row md:mt-20 lg:mt-20'>
                    <h1 className='my-4 mb-6 text-center  font-quicksand text-5xl font-semibold text-blue-dark md:text-start'>
                        {t("home.hero.title")}
                    </h1>
                    <p className='my-6 mb-4 text-center font-SourceSansPro text-xl leading-5 text-blue-dark md:text-start'>
                        <span>{t("home.hero.description")}</span>
                        <br />

                        <span className='pt-6 text-sm'>
                            {t("home.hero.description2")}
                        </span>
                    </p>
                    <div className='h-18 my-3 flex items-center justify-center gap-2 py-2 text-center font-SourceSansPro  text-sm  sm:justify-start'>
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
                <div className='flex h-96  justify-center p-2 md:mt-5 md:h-96 md:place-items-end  md:justify-end'>
                    <img src={logo} className='py-2 lg:h-full' alt='' />
                </div>
            </section>
        </>
    );
}
export default HeroSection;
