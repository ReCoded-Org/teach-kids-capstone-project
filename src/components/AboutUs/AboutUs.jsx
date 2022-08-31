import Slider from "react-slick";
import "./AboutUs.css";
import aboutUsOne from "src/assets/AboutUs-1.jpg";
import aboutUsTwo from "src/assets/studying.jpg";
import aboutUsThree from "src/assets/AboutUs-3.jpg";
import SliderArrow from "./SliderArrow/SliderArrow";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function AboutUs() {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SliderArrow leftOrRight={"left"} />,
        prevArrow: <SliderArrow leftOrRight={"right"} />,
    };

    const [t] = useTranslation();
    const ImgMap = {
        aboutUsOne: aboutUsOne,
        aboutUsTwo: aboutUsTwo,
        aboutUsThree: aboutUsThree,
    };
    let reverse = "flex-row";
    let reverse1 = "lg:text-left";
    if (t("home.aboutUs.title") !== "About Us") {
        reverse = "flex-row-reverse";
        reverse1 = "lg:text-right";
    }
    return (
        <div id='about' className=''>
            <div className=' w-full bg-blue-light p-8'>
                <p className='text-lg text-blue-light'>1</p>
            </div>
            <div className=' absolute w-full bg-blue-light p-8'>
                <p className='text-lg text-blue-light'>1</p>
            </div>
            <div className='diagonal-box-about     bg-blue-light  '>
                <div className='content-about  mx-auto w-11/12 pb-24 md:w-9/12'>
                    <h2
                        className={`mb-12 text-center font-quicksand text-4xl font-bold text-white  md:text-center md:text-5xl lg:mb-0 lg:pl-10 ${reverse1}`}
                    >
                        {t("home.aboutUs.title")}
                    </h2>
                    <Slider {...settings}>
                        {t("home.aboutUs.texts", { returnObjects: true }).map(
                            function (item) {
                                return (
                                    <div key={item} className='px-2'>
                                        {/* Slider wrapper */}
                                        <div
                                            className={`  flex flex-row-reverse	justify-between font-quicksand text-white  xl:gap-24`}
                                            id='slider-wrapper'
                                        >
                                            <div className='relative my-10 flex w-10/12 md:ml-32 md:mt-8 md:w-3/5 md:justify-center lg:my-12 lg:ml-10 lg:w-2/4'>
                                                <img
                                                    className='w-3/5 rounded-full border-4 border-gray sm:mr-16 md:ml-7 md:mr-72 md:w-11/12 md:border-8 lg:mr-20 lg:w-7/12'
                                                    src={ImgMap[item.image]}
                                                    alt={item.alt}
                                                />
                                                <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark md:right-6 md:w-11/12 lg:w-7/12'></div>
                                            </div>

                                            {/* Text Wrapper */}
                                            <div className=' mt-8 md:break-normal  lg:w-3/4  '>
                                                <h1
                                                    className={`pb-4 ${reverse1} px-4 font-quicksand text-xl	 font-bold tracking-wider text-white  md:text-4xl`}
                                                >
                                                    {item.title}
                                                </h1>
                                                <p className='px-4 pb-12 font-SourceSansPro font-medium text-lg text-white md:text-xl'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
