import { React, useState } from "react";
import Phone from "../../assets/phone.svg";
import Message from "../../assets/email.svg";
import Location from "../../assets/location.svg";
import { useMutation } from "@tanstack/react-query";

function ContactUs() {
    const [formData, setFormData] = useState({
        Fullname: "",
        email: "",
        Message: "",
    });
 
    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
 
        setFormData({ ...formData, [name]: value });
    }
 
    function handleSubmit(event) {
        event.preventDefault();
    }
    const SendtoContactUs = useMutation((ContactUsData) => {
        return fetch("http://localhost:3004/contactus", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
            body: JSON.stringify(ContactUsData),
        });
    });
    return (
        <div className='px-12 sm:px-12 lg:px-28 flex flex-col md:flex-col lg:flex-row md:justify-around'>
            <div className='pt-32 md:mr-48'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='contactInfo col'>
                                <h1
                                    className='text-5xl font-bold font-quicksand text-blue-dark mb-10'
                                >
                                    Contact Us
                                </h1>
                                <p
                                    className='text-lg text-justify font-SourceSansPro text-blue-dark mb-10 md:max-w-lg'
                                >
                                    Get the understanding you need to channel
                                    the books of spells you have always been
                                    smitten with, and boost sales which cartoon
                                    rabbits love to steal! Get the understanding
                                    you need to
                                </p>
                                <div className='flex pb-20'>
                                    <div className='w-10 mr-5 grow text-blue-dark h-5 font-SourceSansPro'>
                                        <img
                                            src={Location}
                                            alt='Location icon'
                                        />
                                        <p>
                                            9094 Bay Meadows Street Conyers, GA
                                            30012
                                        </p>
                                    </div>
                                    <div className='w-10 mr-5 grow text-blue-dark h-5 font-SourceSansPro'>
                                        <img src={Phone} alt='Phone icon' />
                                        <p>
                                            +229-955-5388-336
                                        </p>
                                        <p>
                                            +229-955-5373-360
                                        </p>
                                    </div>
                                    <div className='w-10 mr-5 grow text-blue-dark h-5 font-SourceSansPro'>
                                        <img src={Message} alt='Contact icon' />
                                        <p>
                                            support@mail.com
                                        </p>
                                        <p>
                                            office@mail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12 my-8 rounded-tr'>
                        <form
                            id='contact'
                            className='bg-gray-800 rounded-tr font-SourceSansPro'
                            onSubmit={handleSubmit}
                        >
                            <div className='justify-between'>
                                    <div className='flex flex-col'>
                                        <label
                                            className='text-lg text-blue-dark pt-8 font-semibold mb-2'
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            id='Fullname'
                                            name='Fullname'
                                            type='text'
                                            onChange={handleChange}
                                            value={formData.Fullname}
                                            className="focus:border focus:border-blue-dark rounded border-none bg-gray mb-6"
                                            placeholder='Full Name'
                                        />
                                    </div>
                                </div>
                                    <div className='flex flex-col'>
                                        <label
                                            className='text-lg text-blue-dark font-semibold mb-2'
                                        >
                                            Email
                                        </label>
                                        <input
                                            required
                                            id='email'
                                            name='email'
                                            type='email'
                                            onChange={handleChange}
                                            value={formData.email}
                                            className="focus:border focus:border-blue-dark rounded border-none bg-gray mb-6"
                                            placeholder='example@email.com'
                                        />
                                    </div>
                            <div className='mt-6 w-full'>
                                <div className='flex flex-col'>
                                    <label
                                        className='text-lg text-blue-dark font-semibold mb-2'
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        placeholder='Type Here'
                                        name='Message'
                                        className="border-none bg-gray mb-6 rounded"
                                        onChange={handleChange}
                                        value={formData.Message}
                                        rows='9'
                                        id='Message'
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className="rounded-md border-2 border-blue-dark text-white p-2 font-SourceSansPro w-56 font-semibold bg-blue-dark  duration-300 ease-linear hover:border-blue-dark hover:bg-white hover:text-blue-dark hover:shadow"
                                    onClick={() => {
                                        SendtoContactUs.mutate({
                                            Fullname: formData.Fullname,
                                            email: formData.email,
                                            Message: formData.Message,
                                        });
                                    }}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
    );
}
 
export default ContactUs;
