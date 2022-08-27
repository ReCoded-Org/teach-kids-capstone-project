import Slider from "react-slick";
import "./AboutUs.css";
import aboutUsOne from "src/assets/AboutUs-1.jpg";
import aboutUsTwo from "src/assets/AboutUs-2.jpg";
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
                <div className='content-about pb-24'>
                    <h2
                        className={`text-center font-quicksand text-5xl font-bold text-white md:text-center ${reverse1} lg:pl-16 `}
                    >
                        {t("home.aboutUs.title")}
                    </h2>
                    <Slider {...settings}>
                        {t("home.aboutUs.texts", { returnObjects: true }).map(
                            function (item) {
                                return (
                                    <div
                                        key={item}
                                        className='w-11/12 md:w-10/12'
                                    >
                                        {/* Slider wrapper */}
                                        <div
                                            className={` flex ${reverse} font-quicksand text-white`}
                                            id='slider-wrapper'
                                        >
                                            {/* Text Wrapper */}
                                            <div className='text-jus tify mt-8   md:break-normal   lg:px-6 lg:pl-14'>
                                                <p className='pb-12 font-SourceSansPro text-xl text-white md:my-12 md:text-2xl'>
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className='relative my-10 flex w-10/12 md:ml-32 md:mt-8 md:w-3/5 md:justify-center lg:my-12 lg:ml-10 lg:w-2/4'>
                                                <img
                                                    className='w-3/5 rounded-full border-4 border-gray sm:mr-16 md:ml-7 md:mr-72 md:w-11/12 md:border-8 lg:mr-20 lg:w-7/12'
                                                    src={ImgMap[item.image]}
                                                    alt={item.alt}
                                                />
                                                <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark md:right-6 md:w-11/12 lg:w-7/12'></div>
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
