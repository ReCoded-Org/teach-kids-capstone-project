import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import EventCard from "../EventCard/EventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../SliderArrow/SliderArrow";
import "./Events.css";

import { getOrganizations } from "../../../services/events.js";

import { useQuery } from "@tanstack/react-query";
// import PostData from "@/services/postData";

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

    const { isLoading, error, data } = useQuery(
        ["organizations"],
        getOrganizations
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className='diagonal-box -mt-6 flex flex-col bg-white pb-20 text-blue-light'>
            <div className='content'>
                <h1 className='text-blue-light-400 mt-14 py-6 text-center font-quicksand text-5xl font-bold '>
                    {carouselHeader}
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
                                org={eventPost.ngo.name}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
