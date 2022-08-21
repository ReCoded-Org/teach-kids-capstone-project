import React, { useState } from "react";
import "../../App.css";
import NGOImage from "../../assets/NGOImage.png";
import "../../App.css";
import EditInfoForm from "./EditInfoForm";
import { useQuery } from "@tanstack/react-query";

function AdminDashboardHeroSection() {
    const [info, setInfo] = useState([]); //changed {} to []
    const { isLoading, error, data } = useQuery(["repoData"], () =>
        fetch("https://reach-capstone.herokuapp.com/api/ngos").then((res) =>
            res.json().then((data) => setInfo(data.data[0]))
        )
    );
    if (isLoading) return "Loading...";

    // if (error) return error.messag;
    console.log(info);

    return (
        <>
            <section
                className={
                    "flex   flex-col justify-around gap-6  bg-gray p-6 pb-24 md:px-20 lg:flex-row-reverse lg:gap-12 lg:px-10 xl:px-40 "
                }
            >
                <main className='relative md:mr-6 lg:w-2/3 xl:w-2/4 '>
                    <span>
                        <EditInfoForm />
                    </span>
                    <div className='my-6  flex justify-end gap-6 md:justify-end '></div>
                    <div className='row1 grid md:flex md:flex-row-reverse  '>
                        <img
                            src={NGOImage}
                            className=' h-40 w-40 justify-self-center rounded-full border-8 border-white '
                            alt=''
                        />
                        <ul className='mt-4 grid w-full gap-1.5 justify-self-auto text-left font-SourceSansPro text-sm font-semibold text-light-gray'>
                            <h1 className=' my-2 mb-4 justify-self-center  font-quicksand text-4xl font-semibold text-blue-dark md:justify-self-start'>
                                {info.name}
                            </h1>
                            <li>Location: {info.location}</li>
                            <li>Date: {info.createdAt.slice(0, 10)}</li>
                            <li>Email: {info.email}</li>
                            <li>Website: {info.website}</li>
                            <li>Phone: +{info.phone}</li>
                        </ul>
                    </div>
                    <div className='row2 my-4 grid text-justify'>
                        <p className='text-md my-2 font-semibold  text-blue-dark'>
                            {info.message}
                        </p>
                        <a
                            href={"https://" + info.website}
                            className='font-light-gray mx-4 mt-2 mb-4 justify-self-end font-semibold'
                        >
                            Read more on our website ...
                        </a>
                    </div>
                </main>
                <div className='image grid place-items-center  md:p-4'>
                    <img
                        src={NGOImage}
                        className='md:w-4/4  items-center justify-self-center rounded-lg object-contain  lg:justify-self-start	  '
                        alt=''
                    />
                </div>
            </section>
        </>
    );
}

export default AdminDashboardHeroSection;
