import React, { useState } from "react";
import "../../App.css";
import NGOImage from "../../assets/NGOImage.png";
import EditInfoForm from "./EditInfoForm";
import Axios from 'axios';
import SubmitConfirm from "./SubmitConfirm";

function AdminDashboardHeroSection() {
    const [info, setInfo]= useState([]); //changed {} to []
    const [showModal, setShowModal] = React.useState(false);

    const [updated, setUpdated] = useState(false)

    function handleChange(e) {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    function dataSender(){
        Axios.put("http://localhost:8000/adminDashboard/1", info)
        .then((response)=> {
        // console.log(response.data)
        setInfo(() => response.data)
        // console.log('info after dataSender',info)
        setUpdated(true)
        setTimeout(()=> setUpdated(false), 2000)
        });
    }

    React.useEffect(()=> {
      Axios.get('http://localhost:8000/adminDashboard/1')
      .then(res => {
        setInfo(res.data)
        console.log('after useEffect', info)
      })
      .catch(err=> {
        console.log('err', err)
      })
    }, [showModal])


    return (
        <>
            <section
                className={
                    "flex  flex-col justify-around gap-6  bg-gray p-6 pb-12 md:px-20 lg:flex-row-reverse lg:gap-12 lg:px-10 xl:px-40 "
                }
            >
                <main className='md:mr-6 lg:w-2/3 xl:w-2/4 '>
                    <div className='my-6  flex justify-end gap-6 md:justify-end '>

                    <EditInfoForm 
                    handleChange={handleChange} 
                    dataSender={dataSender} 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    />
                    </div>
                    {updated ? 
                        <SubmitConfirm />
                        :
                        null
                    }

                    
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
                            <li>Date: {info.date}</li>
                            <li>Email: {info.email}</li>
                            <li>Website: {info.website}</li>
                            <li>Phone: {info.phone}</li>
                        </ul>
                    </div>
                    <div className='row2 my-4 grid text-justify'>
                        <p className='text-md my-2 font-semibold  text-blue-dark'>
                        {info.message}
                        </p>
                        <a
                            href='#'
                            className='font-light-gray mx-4 mt-2 mb-4 justify-self-end font-semibold'
                        >
                            Read more ...
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
