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

    const { isLoading, error, data } = useQuery(
        ["organizations"],
        getOrganizations
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className='diagonal-box flex flex-col bg-blue-light'>
            <div className='content'>
                <h1 className='mt-14 text-center text-4xl font-bold text-white'>
                    {t("home.ourEvents.title")}
                </h1>
                <Slider {...settings}>
                    {events.map((eventPost) => {
                        const org = data.find((element) => {
                            return (
                                element.organizationId ===
                                eventPost.organizationId
                            );
                        });
                        return (
                            <EventCard
                                eventPost={eventPost}
                                key={eventPost.id}
                                org={org.name}
                            />
                        );
                    })}
                </Slider>
                <button
                    className='w-50 m-auto mt-5 mb-14 flex justify-center rounded-md bg-red p-3'
                    data-ripple-light='true'
                >
                    <p className='ml-5 text-white'>{t("home.ourEvents.btn")}</p>
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
