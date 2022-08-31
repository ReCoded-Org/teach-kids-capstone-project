/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import "flowbite";
import axios from "axios";
import img1 from "../../../assets/face1.png";
import img2 from "../../../assets/face2.png";
import img3 from "../../../assets/face3.png";
// import { wordsNumber, isValidEmail } from "../../services/ValidationFunctions";
import {
    useMutation,
    QueryClient,
    useQueryClient,
} from "@tanstack/react-query";

let pendingInfo = [
    {
        img: 1,
        name: "Ahmet Mohammad",
        email: " whitecross@hotmail.com",
        phone: " 595523034382",
        bio: " I love To be part of this",
    },
    {
        img: 2,
        name: "Huda Alahmad",
        email: " whitecross@hotmail.com",
        phone: " 534231235344",
        bio: "  I’ve gotten really interested in helping People ",
    },
    {
        img: 3,
        name: "Ali Su",
        email: " whitecross@hotmail.com",
        phone: " 595538094340",
        bio: " I can spend most of my spare time training and helping. ",
    },
];

function PendingForm({ userId, pendingApp, setPendingApp }) {
    const [info, setInfo] = useState([]);
    const [load, isLoading] = useState(false);
    console.log(pendingInfo[0].img);
    return (
        <>
            {pendingApp ? (
                <>
                    <div className='  fixed  inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
                        <div className='relative  my-6   w-full md:w-2/4 '>
                            {/*content*/}
                            <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                                {/*header*/}
                                <div className='flex h-12 items-center justify-between rounded-t border-b border-solid border-slate-200 '>
                                    <h3 className='mx-6 text-2xl font-semibold'>
                                        Pending Applications{" "}
                                    </h3>
                                    <button
                                        className='float-right mx-6 ml-auto    border-0 bg-transparent  text-2xl font-semibold leading-none text-black opacity-50 outline-none focus:outline-none'
                                        onClick={() => setPendingApp(false)}
                                    >
                                        <span className='    bg-transparent  text-black outline-none focus:outline-none'>
                                            X
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='relative h-[27rem] flex-auto  overflow-y-auto p-6 md:h-[40rem] '>
                                    {/* START OF FORM */}

                                    <form className='mb-4 rounded bg-white pt-0  pb-8 font-SourceSansPro '>
                                        {pendingInfo.map((info) => (
                                            <div className=' mb-6	flex w-full flex-row justify-between border-y border-slate-400 p-4'>
                                                <div className='my-auto border-r border-slate-400'>
                                                    <img
                                                        src={require(`../../../assets/face${info.img}.png`)}
                                                        className='my-auto mr-6  h-28 w-28 rounded-full '
                                                        alt=''
                                                    />
                                                </div>
                                                <div className=' mx-auto  '>
                                                    <h2 className='my-4 text-center font-quicksand text-lg'>
                                                        {info.name}
                                                    </h2>
                                                    <div className='flex flex-row gap-6'>
                                                        <span>
                                                            <span className='font-semibold'>
                                                                Email:
                                                            </span>{" "}
                                                            {info.email}{" "}
                                                        </span>
                                                        <span>
                                                            <span className='font-semibold'>
                                                                Phone:
                                                            </span>
                                                            {info.phone}
                                                        </span>
                                                    </div>
                                                    <div className='mx-auto'>
                                                        <span className='mr-2 font-semibold'>
                                                            Message:
                                                        </span>
                                                        {info.bio}
                                                    </div>
                                                    <div className='text-md  mt-6 mb-2 flex w-full flex-row justify-center gap-4 '>
                                                        <button className='  w-24 rounded-lg border-2 border-white bg-blue-dark py-2 text-white duration-300 ease-linear hover:border-blue-dark hover:bg-white  hover:text-blue-dark hover:shadow '>
                                                            Approve
                                                        </button>
                                                        <button className='  w-24  rounded-lg border-2 border-white bg-blue-dark py-2 text-white duration-300 ease-linear hover:border-blue-dark hover:bg-white hover:text-blue-dark '>
                                                            Profile
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </form>
                                    {/* END OF FORM */}
                                </div>
                                {/*footer of the form*/}
                            </div>
                        </div>
                    </div>
                    <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
                </>
            ) : null}
        </>
    );
}
export default PendingForm;
