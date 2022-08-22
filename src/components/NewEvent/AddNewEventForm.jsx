import React, { useState } from "react";

function AddNewEventForm({ setIsHidden, isHidden }) {
    const [formData, setFromData] = useState({
        webAddress: "",
        location: "",
        phoneNumber: "",
        emailAddress: "",
        organizationBio: "",
        name: "",
    });

    function handleFormData(data) {
        setFromData({
            ...formData,
            [data.name]: data.value,
        });
    }

    return (
        <>
            <div className=' a flex h-screen	w-screen items-center justify-center bg-opacity-30 transition duration-700 ease-in-out	 '>
                <div className=' grid w-11/12  rounded-lg  bg-white p-6 shadow-lg sm:w-3/5 lg:w-2/5'>
                    <div className='flex justify-between '>
                        <h1 className='  mb-4 font-quicksand text-2xl'>
                            Edit Intro
                        </h1>
                        <button
                            onClick={() => setIsHidden(!isHidden)}
                            className='my-2 justify-self-end rounded-lg bg-blue-dark py-2 px-8 font-SourceSansPro  text-white shadow-lg'
                        >
                            Close
                        </button>
                    </div>
                    <div className='my-4'>
                        <label>Website Address :</label>
                        <input
                            value={formData.webAddress}
                            name='webAddress'
                            onChange={(e) => handleFormData(e.target)}
                            type='text'
                            className='form-control text-gray-700 border-gray-300 focus:text-gray-700 focus:border-blue-600 mt-1 block w-full rounded border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal
                                transition ease-in-out focus:bg-white focus:outline-none'
                            id='exampleInput8'
                            placeholder=' Website Address'
                        ></input>
                    </div>
                    <div className='my-4'>
                        <label>Name :</label>
                        <input
                            value={formData.name}
                            name='name'
                            onChange={(e) => handleFormData(e.target)}
                            type='text'
                            className='form-control text-gray-700 border-gray-300 focus:text-gray-700 focus:border-blue-600 mt-1 block w-full rounded border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal
                                transition ease-in-out focus:bg-white focus:outline-none'
                            id='name'
                            placeholder=' Name '
                        ></input>
                    </div>
                    <div className='my-3'>
                        <label htmlFor='' className=''>
                            Location :
                        </label>
                        <input
                            type='text'
                            className='form-control text-gray-700 border-gray-300 focus:text-gray-700 focus:border-blue-600 mt-1 block w-full rounded border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal
                                transition ease-in-out focus:bg-white focus:outline-none'
                            value={formData.location}
                            name='location'
                            onChange={(e) => handleFormData(e.target)}
                            placeholder='Location'
                        ></input>
                    </div>
                    <div className='my-3'>
                        <label htmlFor='' className=''>
                            Phone Number :
                        </label>
                        <input
                            type='text'
                            className='form-control text-gray-700 border-gray-300 focus:text-gray-700 focus:border-blue-600 mt-1 block w-full rounded border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal
                                transition ease-in-out focus:bg-white focus:outline-none'
                            value={formData.phoneNumber}
                            name='phoneNumber'
                            onChange={(e) => handleFormData(e.target)}
                            placeholder=' Phone Number '
                        ></input>
                    </div>
                    <div className='my-3'>
                        <label htmlFor='' className=''>
                            Email Address :
                        </label>
                        <input
                            type='text'
                            className='form-control text-gray-700 border-gray-300 focus:text-gray-700 focus:border-blue-600 mt-1 block w-full rounded border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal
                                transition ease-in-out focus:bg-white focus:outline-none'
                            value={formData.emailAddress}
                            name='emailAddress'
                            onChange={(e) => handleFormData(e.target)}
                            placeholder='  Email Address '
                        ></input>
                    </div>
                    <div className='my-3'>
                        <label
                            htmlFor='message'
                            className='text-gray-900 dark:text-gray-400  '
                        >
                            Organization Bio :
                        </label>
                        <textarea
                            value={formData.organizationBio}
                            name='organizationBio'
                            onChange={(e) => handleFormData(e.target)}
                            rows='4'
                            className='text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1 block w-full rounded-lg border p-2.5 text-sm dark:text-white'
                            placeholder='Your message...'
                        ></textarea>
                    </div>

                    <button className='my-2 justify-self-end rounded-lg bg-blue-dark py-2 px-8 font-SourceSansPro  text-white shadow-lg'>
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddNewEventForm;

