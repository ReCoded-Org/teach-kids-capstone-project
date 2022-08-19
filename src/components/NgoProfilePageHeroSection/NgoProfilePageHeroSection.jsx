import React, { useState } from "react";
import "../../App.css";
import NGOImage from "../../assets/NGOImage.png";
import EditInfoForm from "../AdminDashboardHeroSection/EditInfoForm";
import Axios from "axios";
import SubmitConfirm from "../AdminDashboardHeroSection/SubmitConfirm";

function NgoProfilePageHeroSection() {
    const [info, setInfo] = useState([]); //changed {} to []

    const [updated, setUpdated] = useState(false);

    function handleChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    function dataSender(e) {
        Axios.put("http://localhost:8000/adminDashboard/1", info).then(
            (response) => {
                // console.log(response.data)
                setInfo(() => response.data);
                // console.log('info after dataSender',info)
                setUpdated(true);
                setTimeout(() => setUpdated(false), 2000);
            }
        );
    }

    React.useEffect(() => {
        Axios.get("http://localhost:8000/adminDashboard/1")
            .then((res) => {
                setInfo(res.data);
                // console.log('info after useEffect', info)
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (
        <>
            <section
                className={
                    "flex justify-around bg-gray p-6 pb-12 md:px-20 lg:px-10 xl:px-40 "
                }
            >
                <main className='d-flex md:mr-6'>
                    <EditInfoForm
                        handleChange={handleChange}
                        dataSender={dataSender}
                    />

                    {updated ? <SubmitConfirm /> : null}

                    <div className='m-auto mr-10 grid md:mr-0 md:grid-cols-2 md:gap-14 '>
                        <div className='col-start-1 m-0 w-full '>
                            <img
                                src={NGOImage}
                                className=' col-start-1 ml-4 w-[20rem] min-w-[10rem] rounded-lg border-8 border-white '
                                alt=''
                            />
                        </div>

                        <div className='my-5 ml-5 grid w-full gap-1.5 text-left font-SourceSansPro text-sm font-semibold text-light-gray'>
                            <div className='text-md my-4 mt-6 sm:text-lg'>
                                <h1 className='my-2 mb-4 font-quicksand text-4xl font-semibold  text-blue-dark'>
                                    Name: {info.name}
                                </h1>

                                <li className='my-2'>
                                    Location: {info.location}
                                </li>
                                <li className="my-2'">Date: {info.date}</li>
                                <li className="my-2'">Email: {info.email}</li>
                                <li className='my-2'>
                                    Website: {info.website}
                                </li>
                                <li className='my-2'>Phone: {info.phone}</li>
                            </div>
                            <h1 className='font-SourceSansnap-proximity text-xl font-semibold text-blue-light'>
                                About Us :
                            </h1>
                            <p className='text-md my-2 text-justify font-semibold  text-blue-dark'>
                                {info.message}
                            </p>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default NgoProfilePageHeroSection;
