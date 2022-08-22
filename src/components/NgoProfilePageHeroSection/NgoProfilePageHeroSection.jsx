import React, { useState } from "react";
import "../../App.css";
import NGOImage from "../../assets/NGOImage.png";
import EditInfoForm from "./EditInfoForm";
import { useQuery } from "@tanstack/react-query";

function NgoProfilePageHeroSection() {
    const [info, setInfo] = useState([]); //changed {} to []
    const { isLoading, error, data } = useQuery(["repoData"], () =>
        fetch("https://reach-capstone.herokuapp.com/api/ngos/").then((res) =>
            res.json().then((data) => setInfo(data.data[0]))
        )
    );
    if (isLoading) return "Loading...";

    // if (error) return error.messag;

    return (
        <>
            <section
                className={
                    "flex  justify-around   bg-gray p-6 pb-12 md:px-20  lg:px-10 xl:px-40 "
                }
            >
                <main className='d-flex   md:mr-6'>
                    <EditInfoForm />

                    <div className=' m-auto grid   md:flex-row-reverse'>
                        <div className='m-0 grid w-full   flex-row items-center  justify-center md:mt-16 md:mb-4 md:grid-cols-3 md:justify-start '>
                            <img
                                src={NGOImage}
                                className=' m-0 w-40 justify-self-center rounded-full  border-8  border-white p-0 md:w-full md:justify-self-start '
                                alt=''
                            />
                            <h1 className=' my-2 mb-4  justify-self-start font-quicksand text-4xl font-semibold text-blue-dark  sm:ml-6 md:col-span-2 md:justify-start md:justify-self-start'>
                                {info.name}
                            </h1>
                            {/* <button
                                onClick={() => setIsHidden(!isHidden)}
                                href=''
                                className='  absolute  inset-x-3/4 top-16 -ml-0 -mt-8  h-9	w-20 justify-self-center	  rounded   border border-blue-btn bg-blue-btn p-1.5 font-semibold text-white duration-300 ease-linear  hover:rounded hover:border-blue-btn hover:bg-transparent  hover:text-blue-btn hover:shadow sm:mt-4  sm:ml-8 md:w-36    '
                            >
                                Edit
                            </button>{" "} */}
                        </div>

                        <ul className='mt-4 grid w-full gap-1.5 justify-self-auto text-left font-SourceSansPro text-sm font-semibold text-light-gray'>
                            <div className='text-md my-4 mt-6 sm:text-lg'>
                                <h1 className=' my-6 font-quicksand text-4xl text-blue-btn'>
                                    Profile :
                                </h1>
                                <li className='my-2'>
                                    Location: {info.location}
                                </li>
                                <li className='my-2'>
                                    Date: {info.createdAt.slice(0, 10)}
                                </li>
                                <li className='my-2'>Email: {info.email}</li>
                                <li className='my-2'>
                                    Website: {info.website}
                                </li>
                                <li className='my-2'>Phone: +{info.phone}</li>
                            </div>
                        </ul>
                    </div>
                    <div className='row2 my-4 grid text-justify'>
                        <h1 className='font-SourceSansnap-proximity text-2xl font-semibold text-blue-light'>
                            About Us :
                        </h1>
                        <p className='text-md my-2  pb-32 font-semibold text-blue-dark'>
                            {info.message}
                        </p>
                    </div>
                </main>
            </section>
        </>
    );
}
export default NgoProfilePageHeroSection;
