import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import EventCard from "../EventCard/EventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../SliderArrow/SliderArrow";
import "./Events.css";
import { useTranslation } from "react-i18next";

import { getOrganizations } from "../../../services/events.js";

import { useQuery } from "@tanstack/react-query";

export default function Events({ carouselHeader, events }) {
    events = events.slice(1, events.length);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        arrows: true,
        nextArrow: <SliderArrow leftOrRight={"left"} />,
        prevArrow: <SliderArrow leftOrRight={"right"} />,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [t] = useTranslation();
    let number = 1;
    return (
        <div className='diagonal-box flex flex-col items-center bg-blue-light'>
            <div className='content mx-auto  md:w-9/12  '>
                <h1 className='mt-14 text-center font-quicksand text-3xl font-bold text-white md:text-5xl'>
                    {t("home.ourEvents.title")}
                </h1>
                <Slider {...settings}>
                    {events.map((eventPost) => {
                        number++;
                        number > 4 ? (number = 1) : (number = number);
                        return (
                            <EventCard
                                eventPost={eventPost}
                                key={eventPost.id}
                                number={number}
                            />
                        );
                    })}
                </Slider>
                <button
                    className='w-50 m-auto mt-5 mb-14 flex transform justify-center rounded-md border-2 border-red bg-red p-3 text-white duration-300 ease-linear hover:border-blue-dark hover:bg-blue-light hover:font-bold hover:text-blue-dark hover:shadow'
                    data-ripple-light='true'
                >
                    <p className='ml-5 font-SourceSansPro'>
                        {t("home.ourEvents.btn")}
                    </p>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='ml-2 mt-1 h-5 w-5 -translate-x-2 stroke-white transition duration-300 group-hover:translate-x-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-2
                    >
                        <path d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </div>
    );
}
