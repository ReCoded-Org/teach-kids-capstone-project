import "../../App.css";
import NGOImage from "../../assets/NGOImage.png";
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
    useMutation,
    QueryClient,
    useQueryClient,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { wordsNumber, isValidEmail } from "../../services/ValidationFunctions";

function SingleEventPageHeroSection() {
    const params = useParams();

    const [notfication, setNotification] = useState(false);
    const [formValidation, setFormValidation] = useState(false);
    const [info, setInfo] = useState([]); //changed {} to []

    /*************Fetch Req Start*********************** */
    const { isLoading, error, data } = useQuery(["repoData"], () =>
        fetch("https://reach-capstone.herokuapp.com/api/events").then((res) =>
            res.json().then((data) => setInfo(data.data[3]))
        )
    );

    /*************fetch Req End*********************** */

    /*************Post Req Start*********************** */

    // the request will be handled later
    // const addComment = useMutation(
    //     (newComment) => {
    //         return axios.patch(
    //             `http://localhost:8000/adminDashboard/1`,
    //             newComment
    //         );
    //     },
    //     {
    //         onSuccess: () => {
    //             setTimeout(() => {
    //                 setNotification(false);
    //             }, 2000);
    //             setTimeout(() => {
    //                 queryClient.invalidateQueries(["repoData"]);
    //             }, 2000);
    //         },
    //     }
    // );
    /*************Post Req End*********************** */

    if (isLoading) return "Loading...";
    return (
        <>
            {" "}
            {notfication ? (
                formValidation ? (
                    <h1
                        className={
                            "absloute   top-1/2 left-1/2 rounded border border-green-500 bg-slate-200 p-4 px-8 text-center   font-SourceSansPro text-xl font-bold text-green-500     "
                        }
                    >
                        Profile Information Updated Successfuly
                    </h1>
                ) : (
                    <h1
                        className={` absloute top-1/2 left-1/2 rounded border border-red bg-slate-100 p-4 px-8 text-center font-SourceSansPro    text-xl font-bold text-red  `}
                    >
                        Enter a valid bio or email
                    </h1>
                )
            ) : (
                ""
            )}
            <section
                className={
                    "flex  flex-col justify-around gap-6  bg-gray p-6 pb-12 md:px-20 lg:flex-row-reverse lg:gap-12 lg:px-10 xl:px-40 "
                }
            >
                <main className='md:mr-6 lg:w-2/3 xl:w-2/4 '>
                    <div className='row1 grid md:flex md:flex-row-reverse  '>
                        <img
                            src={NGOImage}
                            className=' h-40 w-40 justify-self-center rounded-full border-8 border-white '
                            alt=''
                        />
                        <ul className='mt-4 grid w-full gap-1.5 justify-self-auto text-left font-SourceSansPro text-sm font-semibold text-light-gray'>
                            <h1 className=' my-2 mb-4 justify-self-center font-quicksand text-4xl font-semibold uppercase text-blue-dark md:justify-self-start'>
                                <Link to={`/ngo-profile/${info.ngo._id}`}>
                                    {info.ngo.name}
                                </Link>
                            </h1>
                            <li className='uppercase'>
                                Location: {info.location}
                            </li>
                            <li>Date: {info.launchDate.slice(0, 10)}</li>
                            <li>Topic: {info.topic}</li>
                            {/* <li>Website: www.helloworld.com</li>
                            <li>Phone: +90 535 898 54 45</li> */}
                        </ul>
                    </div>
                    <div className='row2 my-4 grid text-justify'>
                        <p className='text-md my-2 font-SourceSansPro font-semibold  text-blue-dark'>
                            {info.description}
                        </p>
                        <a
                            href='#'
                            className=' text-blue-dark mx-4 mt-2 mb-4 justify-self-end font-SourceSansPro'
                        >
                            Read more ...
                        </a>
                    </div>
                    <div className='my-6  flex justify-start gap-6 md:justify-start '>
                        <button
                            // onClick={() => addComment.mutate(info)}
                            href=''
                            className='mw-40 w-36 border border-blue-btn bg-blue-btn  p-1.5 font-SourceSansPro text-white  duration-300 ease-linear hover:rounded  hover:border-blue-btn hover:bg-transparent hover:bg-red hover:text-white  hover:shadow md:w-44'
                        >
                            Apply
                        </button>
                    </div>
                </main>
                <div className='image grid place-items-center  md:p-4'>
                    <img
                        src={NGOImage}
                        className='md:w-4/4  items-center justify-self-center rounded-lg object-contain  lg:justify-self-start    '
                        alt=''
                    />
                </div>
            </section>
        </>
    );
}

export default SingleEventPageHeroSection;
