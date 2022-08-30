import React, { useState } from "react";
import "flowbite";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
function AddNewEventForm({ setIsHidden, isHidden }) {
    const [formData, setFormData] = useState({
        "avatar": "",
        "title": "",
        "launchDate":"",
        "location":"",
        "description":"",
        "tags":[],
    });
    axios.defaults.withCredentials = true
    // state showing if dropdown is open or closed
    const [dropdown, setDropdown] = useState(false);
    // managing dropdown items (list of dropdown items)
    const [items, setItems] = useState(["English", "Arabic","workshop" ,"programming" ,"Toefl" ,"Building a website", "photoshop",
     "IELTS", "Data Analysis" ,"Mathematics"]);
    // contains selected items
    const [selectedItems, setSelected] = useState([]);


    const toogleDropdown = () => {
        setDropdown(!dropdown)
    };
    // adds new item to multiselect 
    const addTag = (item) => {
        setSelected(selectedItems.concat(item));
        setDropdown(false);
    };
    // removes item from multiselect
    const removeTag = (item) => {
        const filtered = selectedItems.filter((e) => e !== item);
        setSelected(filtered);
    }
    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    const NewEventFormData = useMutation((NewEventData) => {
        axios.post("https://reach-capstone.herokuapp.com/api/events", NewEventData).then(
            function () {
                setIsHidden(!isHidden)
              },
        ).catch(function (error) {
            console.log(error)
            let isArray = Array.isArray(error.response.data.errors);
            if (isArray) {
              alert(error.response.data.errors[0].msg)
            }
            else{
              alert(error.response.data.error);
            };
        });
    });
    console.log(formData)
    console.log(NewEventFormData)
    return (
        <>
            <div className='  fixed  inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
                <div className='relative  my-6   w-full md:w-2/4 '>
                    <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                        <div className='flex h-12 items-center justify-between rounded-t border-b border-solid border-slate-200 '>
                            <h3 className='mx-6 text-2xl font-semibold'>
                                New Event
                            </h3>
                            <button
                                className='float-right mx-6 ml-auto    border-0 bg-transparent  text-2xl font-semibold leading-none text-black opacity-50 outline-none focus:outline-none'
                                onClick={() => setIsHidden(!isHidden)}
                            >
                                <span className='    bg-transparent  text-black outline-none focus:outline-none'>
                                    X
                                </span>
                            </button>
                        </div>
                        <div className='relative h-[27rem] flex-auto  overflow-y-auto p-6 md:h-[40rem] '>
                            <form className='mb-4 rounded bg-white  pt-0 pb-8 ' onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                        Select the Event Photo
                                    </label>
                                    <input
                                        name="avatar"
                                        id="avatar"
                                        onChange={handleChange}
                                        className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                        type='file'
                                        placeholder=''
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                        Event Title
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name='title'
                                        id='title'
                                        className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                        type='text'
                                        placeholder='Starnation'
                                    />
                                </div>
                                <div>
                                <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                    Date
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
                                        id='launchDate'
                                        name="launchDate"
                                        datepicker
                                        datepicker-autohide
                                        type='text'
                                        className='bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 pl-10  focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                                        placeholder='DD-MM-YYYY'
                                    />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                        Location
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name='location'
                                        id='location'
                                        className='text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none'
                                        type='text'
                                        placeholder='Zoom'
                                    />
                                </div>
                                <div className='mb-4'>
                                <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                        Type
                                    </label>
                                <div className="autcomplete-wrapper">
        <div className="autcomplete">
        <div className="w-full flex flex-col items-center mx-auto">
    <div className="w-full">
        <div className="flex flex-col items-center relative">
            <div className="w-full ">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
                    <div className="flex flex-auto flex-wrap">
                        {
                            selectedItems.map((tag, index) => {
                                return (
                                    <div key={index} className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 border border-bg-[#457B9D] ">
                                            <div className="text-xs font-normal leading-none max-w-full flex-initial">{ tag }</div>
                                            <div className="flex flex-auto flex-row-reverse">
                                                <div onClick={() => removeTag(tag)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                                    className="feather feather-x cursor-pointer hover:bg-[#457B9D] rounded-full w-4 h-4 ml-2">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>)
                            })
                        }
                        <div className="flex-1">
                            <input placeholder="" className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"/>
                        </div>
                    </div>
                    <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200" onClick={toogleDropdown}>
                        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-4 h-4">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
         { dropdown  ? 
        <div id="dropdown" className="shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto ">
        <div className="flex flex-col w-full">
            { items.map((item, key) => {
                return <div key={key} 
                className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-[#457B9D]" 
                onClick={() => addTag(item)}>
                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:bg-[#457B9D]" >
                    <div className="w-full items-center flex">
            <   div className="mx-2 leading-6  ">
                { item }
               </div>
              </div>
             </div>
            </div>
            })}
        </div>
    </div>: null }
    </div>
</div>
</div>
    </div>
        </div>
                                <div className=''>
                                    <label className='text-gray-700 mb-2 block text-sm font-bold'>
                                        About the Event
                                    </label>
                                    <div className='form-group'>
                                        <textarea
                                            minLength='50'
                                            name='description'
                                            id='description'
                                            onChange={handleChange}
                                            className='
                    form-control text-gray-700 border-gray-300 focus:text-gray-700 m-0 block w-full rounded border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal transition
                    ease-in-out focus:border-blue-600 focus:bg-white focus:outline-none
                '
                                            rows='7'
                                            placeholder='Description'
                                        ></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='flex items-center justify-end rounded-b border-t border-solid border-slate-200 py-2 px-6'>
                            <button
                                className='background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-black outline-none transition-all duration-150 ease-linear focus:outline-none'
                                type='button'
                                onClick={() =>  setIsHidden(!isHidden)}
                            >
                                Close
                            </button>
                            <button
                                className='mr-1 mb-1 rounded bg-[#457B9D] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:border-2 active:border-[#457B9D] active:bg-white active:text-[#457B9D]'
                                type='button'
                                onClick={() => {
                                    NewEventFormData.mutate({
                                        avatar: formData.avatar,
                                        title: formData.title,
                                        launchDate:formData.launchDate,
                                        location:formData.location,
                                        description:formData.description,
                                        tags:selectedItems
                                    });
                                    console.log(NewEventFormData)
                                }}
                            >
                                Add Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
            </>
         )
        }
        

export default AddNewEventForm;