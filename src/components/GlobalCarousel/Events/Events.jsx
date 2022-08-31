import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import EventCard from "../EventCard/EventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../SliderArrow/SliderArrow";
import "./Events.css";

import { getOrganizations } from "../../../services/events.js";

import { useQuery } from "@tanstack/react-query";

export default function Events({ carouselHeader, events}) {
    events = events.slice(5, 9);
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
    let number = 1;
    return (
        <div className='diagonal-box flex flex-col items-center bg-white pb-20 text-blue-light'>
            <div className='content mx-auto  md:w-9/12  '>
                <h1 className='text-blue-light-400 mt-14 py-6 text-center font-quicksand text-5xl font-bold '>
                    {carouselHeader}
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
            </div>
        </div>
    );
}
