import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import EventCard from "../EventCard/EventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../SliderArrow/SliderArrow";
import "./Events.css";

const eventPosts = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?w=1380&t=st=1658732121~exp=1658732721~hmac=4802bc78e041b6f29964acefc78ba39a93e6500ae5bc34af4083613c61c1300e",
        name: "Star Nation Organization",
        location: "Istanbul",
        topic: "Teaching English",
        date: "2022-01-03",
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/girl-with-big-smile-classroom_1098-303.jpg?w=1380&t=st=1658732184~exp=1658732784~hmac=a620f9de358d5697277f321feff00130dc978434bb5dbf60091d98d25e2e65c3",
        name: "Wow Organization",
        location: "Ankara",
        topic: "Teaching Turkish",
        date: "2022-02-03",
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/classmates-working-together_1098-2588.jpg?w=1380&t=st=1658732218~exp=1658732818~hmac=e0cfcdb8865d56fc9413f58c93568eebaf80218008db1369e7c057063c9f0e50",
        name: "Wonderland Organization",
        location: "Berlin",
        topic: "Teaching HTML & CSS",
        date: "2022-03-03",
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-photo/cheerful-teen-girl-student-with-classmates_23-2147666634.jpg?t=st=1658732197~exp=1658732797~hmac=a01be4808af115e7e16d1e02f300bcc092da56d3c8453c90edaf48ceda851bef&w=1380",
        name: "Hello There Organization",
        location: "Paris",
        topic: "Teaching French",
        date: "2022-04-03",
    },
];

export default function Events({ carouselHeader }) {
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
    return (
        <div className='diagonal-box -mt-6 flex flex-col bg-white pb-20 text-blue-light'>
            <div className='content'>
                <h1 className='mt-14 py-6 text-center font-quicksand text-5xl font-bold text-blue-light-400 '>
                    {carouselHeader}
                </h1>
                <Slider {...settings}>
                    {eventPosts.map((eventPost) => {
                        return (
                            <EventCard
                                eventPost={eventPost}
                                key={eventPost.id}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
