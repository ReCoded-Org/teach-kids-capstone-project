import React from "react";
import "flowbite";

export default function EditInfoForm({showModal, setShowModal, handleChange, dataSender}) {

    return (
        <>
            <div className='my-6  flex justify-end gap-6 md:justify-end '>
                <button
                    onClick={() => setShowModal(true)}
                    type='button'
                    href=''
                    className='mw-40 w-36 rounded border border-[#457B9D] bg-[#457B9D]  p-1.5 font-semibold text-white  duration-300 ease-linear hover:rounded  hover:border-blue-btn hover:bg-transparent hover:text-[#457B9D] hover:shadow md:w-44'
                >
                    Edit
                </button>
            </div>

            {showModal ? (
                <>
                    <div className=' fixed  inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
                        <div className='relative my-6 mx-auto w-auto max-w-3xl'>
                            {/*content*/}
                            <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                                {/*header*/}
                                <div className='flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5'>
                                    <h3 className='text-3xl font-semibold'>
                                        Edit Pofile
                                    </h3>
                                    <button
                                        className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-50 outline-none focus:outline-none'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className='block h-6 w-6 bg-transparent text-2xl text-black outline-none focus:outline-none'>
                                            X
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='relative h-[27rem] w-[19rem] flex-auto overflow-y-auto p-6 sm:h-[33rem] sm:w-[35rem]'>
                                    {/* START OF FORM */}

                                    <form className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md'>
                                        <div className='mb-4'>
                                            <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                                Select the Event Photo
                                            </label>
                                            <input
                                                className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                                type='file'
                                                placeholder=''
                                            />
                                        </div>
                                        <div>
                                            <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                                Website Address :
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                name='website'
                                                className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                                type='text'
                                                placeholder='www.reach.com'
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='text-gray-700 mt-3 mb-2 block text-sm font-bold'>
                                                Name
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                name='name'
                                                className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                                type='text'
                                                placeholder='John Doe'
                                            />
                                        </div>

                                        <div className='mb-4'>
                                            <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                                Location
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                name='location'
                                                className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                                type='text'
                                                placeholder='Istanbul'
                                            />
                                        </div>

                                        <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                            Date:
                                        </label>
                                        <div className='relative mb-4'>
                                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                                <svg
                                                    aria-hidden='true'
                                                    className='text-gray-500 dark:text-gray-400 h-5 w-5'
                                                    fill='currentColor'
                                                    viewBox='0 0 20 20'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        fillRule='evenodd'
                                                        d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                                                        clipRule='evenodd'
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                onChange={handleChange}
                                                name='date'
                                                datepicker
                                                datepicker-autohide
                                                type='text'
                                                className='bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 pl-10  focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                                                placeholder='DD-MM-YYYY'
                                            />
                                        </div>

                                        <div className='mb-4'>
                                            <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                                Email
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                name='email'
                                                className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                                type='text'
                                                placeholder='john.doe@gamil.com'
                                            />
                                        </div>

                                        <div className='mb-4'>
                                            <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                                Phone Number
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                name='phone'
                                                className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                                type='tel'
                                                placeholder='+90 (545) 121 3333'
                                            />
                                        </div>

                                        <div className=''>
                                            <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                                Your Message
                                            </label>
                                            <div className='form-group'>
                                                <input
                                                    name='message'
                                                    onChange={
                                                        handleChange
                                                    }
                                                    className='
                            form-control text-gray-700 border-gray-300 focus:text-gray-700 m-0 block w-full rounded border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal transition
                            ease-in-out focus:border-blue-600 focus:bg-white focus:outline-none
                        '
                                                    id='exampleFormControlTextarea13'
                                                    rows='3'
                                                    placeholder='Message'
                                                ></input>
                                            </div>
                                        </div>
                                    </form>
                                    {/* END OF FORM */}
                                </div>
                                {/*footer of the form*/}
                                <div className='flex items-center justify-end rounded-b border-t border-solid border-slate-200 py-2 px-6'>
                                    <button
                                        className='background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-black outline-none transition-all duration-150 ease-linear focus:outline-none'
                                        type='button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className='mr-1 mb-1 rounded bg-[#457B9D] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:border-2 active:border-[#457B9D] active:bg-white active:text-[#457B9D]'
                                        type='submit'
                                        onClick={() => {
                                            setShowModal(false);
                                            dataSender();
                                        }}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
                </>
            ) : null}
        </>
    );
}
