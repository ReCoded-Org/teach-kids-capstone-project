import React, { useState } from "react";
import "../../App.css";
import NGOImage from "../../assets/NGOImage.png";
import EditInfoForm from "../EditInfoForm/EditInfoForm";

function NgoProfilePageHeroSection() {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <>
            {isHidden ? (
                <EditInfoForm setIsHidden={setIsHidden} isHidden={isHidden} />
            ) : (
                ""
            )}
            <section
                className={
                    "flex     justify-around   bg-gray p-6 pb-12 md:px-20  lg:px-10 xl:px-40 "
                }
            >
                <main className='d-flex   md:mr-6'>
                    <div className=' m-auto grid   md:flex-row-reverse'>
                        <div className='m-0 grid w-full   flex-row items-center  justify-center md:mt-16 md:mb-4 md:grid-cols-4 md:justify-start '>
                            <img
                                src={NGOImage}
                                className=' m-0 w-40 justify-self-center  rounded-full  border-8 border-white p-0 md:w-full '
                                alt=''
                            />
                            <h1 className=' my-2 mb-4  justify-self-center font-quicksand text-4xl font-semibold  text-blue-dark sm:ml-6 md:justify-start md:justify-self-start'>
                                Starnation
                            </h1>
                            <button
                                onClick={() => setIsHidden(!isHidden)}
                                href=''
                                className='  absolute  inset-x-3/4 top-16 -ml-0 -mt-8  h-9	w-20 justify-self-center	  rounded   border border-blue-btn bg-blue-btn p-1.5 font-semibold text-white duration-300 ease-linear  hover:rounded hover:border-blue-btn hover:bg-transparent  hover:text-blue-btn hover:shadow sm:mt-4  sm:ml-8 md:w-36    '
                            >
                                Edit
                            </button>{" "}
                        </div>

                        <ul className='mt-4 grid w-full gap-1.5 justify-self-auto text-left font-SourceSansPro text-sm font-semibold text-light-gray'>
                            <div className='text-md my-4 mt-6 sm:text-lg'>
                                <h1 className=' font-quicksand text-3xl text-blue-btn'>
                                    Profile
                                </h1>
                                <li className='my-2'>Location: Istanbul</li>
                                <li className="my-2'">Date: 28-03-2023</li>
                                <li className="my-2'">
                                    Email: helloworld@gmail.com
                                </li>
                                <li className='my-2'>
                                    Website: www.helloworld.com
                                </li>
                                <li className='my-2'>
                                    Phone: +90 535 898 54 45
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className='row2 my-4 grid text-justify'>
                        <h1 className='font-SourceSansnap-proximity text-xl font-semibold text-blue-light'>
                            About Us :
                        </h1>
                        <p className='text-md my-2 font-semibold  text-blue-dark'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here, content here, making it look like readable
                            English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default
                            model text, and a search for lorem ipsum will
                            uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like) It is a long
                            established fact that a reader will be distracted by
                            the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution of letters,
                            as opposed to using Content here, content here It is
                            a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here, content here, making it look like readable
                            English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default
                            model text, and a search for lorem ipsum will
                            uncover many web sites still in their infancy.
                        </p>
                    </div>
                </main>
            </section>
        </>
    );
}

export default NgoProfilePageHeroSection;
