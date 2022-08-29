import React, { useState } from "react";
import "../../App.css";
import NGOImage from "../../assets/theBluesProfile.png";
import NGOEvent from "../../assets/theBluesEvents.jpg";
import "../../App.css";
import EditInfoForm from "./EditInfoForm";
import { useQuery } from "@tanstack/react-query";

function AdminDashboardHeroSection({ userId }) {
    const [info, setInfo] = useState([]); //changed {} to []
    const { isLoading, error, data } = useQuery(["repoData"], () =>
        fetch(`https://reach-capstone.herokuapp.com/api/ngos/${userId}`).then(
            (res) => res.json().then((data) => setInfo(data.data))
        )
    );
    if (isLoading) return "Loading...";

    // if (error) return error.messag;
    return (
        <>
            <section
                className={
                    "-mb-12   flex h-[60rem] flex-col   justify-around  gap-6 bg-gray p-6 pb-12 md:px-20 lg:flex-row-reverse  lg:px-10 xl:px-40 "
                }
            >
                <main className='relative mt-56 md:mr-6 lg:mt-6 lg:w-10/12 xl:w-2/4  '>
                    <span>
                        <EditInfoForm userId={userId} />
                    </span>
                    <div className='my-6  flex justify-end gap-6 md:justify-end '></div>
                    <div className='row1 grid md:flex md:flex-row-reverse  '>
                        <img
                            src={NGOImage}
                            className=' h-40 w-40 justify-self-center rounded-full border-8 border-white '
                            alt=''
                        />
                        <ul className='mt-4 grid w-full gap-1.5 justify-self-auto text-left font-SourceSansPro text-sm font-semibold text-light-gray'>
                            <h1 className=' my-2 mb-4 justify-self-center font-quicksand  text-4xl font-semibold uppercase text-blue-dark md:justify-self-start'>
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
                            {info.message}The goal of Save the Children is to
                            promote global education and the rights of children
                            around the world. To increase the quality of
                            instruction and help ensure lasting education, Save
                            the Children teaches effective teaching strategies
                            to instructors and trains them to engage students.
                            They coach parents and caregivers to help foster
                            learning early on, and offer ways for parents to
                            encourage schoolwork and continued learning outside
                            of the classroom. They also hope to introduce
                            children to artistic expression, encourage learning
                            during and after crisis and invest in the health of
                            children to ensure they don’t fall behind. In 2012,
                            Save the Children reached 9 million children
                        </p>
                        <a
                            href={"https://" + info.website}
                            className='font-light-gray mx-4 mt-2 mb-4 justify-self-end font-semibold'
                        >
                            Read more on our website ...
                        </a>
                    </div>
                </main>
                <div className='image  grid place-items-center  md:p-4'>
                    <img
                        src={NGOEvent}
                        className=' w-3/4 items-center justify-self-center rounded-lg border-black object-contain shadow-lg  md:w-10/12  lg:justify-self-start	  '
                        alt=''
                    />
                </div>
            </section>
        </>
    );
}

export default AdminDashboardHeroSection;
