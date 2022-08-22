import { React, useState } from "react";
import Phone from "../../assets/phone.svg";
import Message from "../../assets/email.svg";
import Location from "../../assets/location.svg";
import "./ContactUs.css";
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
        <div
            id='contact-us'
            className='ContactUs  flex items-center justify-between'
        >
            <div className='container mx-auto pt-16'>
                <div className='lg:flex '>
                    <div className='py-20 lg:w-4/5 xl:w-4/5'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='contactInfo col'>
                                <h1
                                    className='mb-10 text-6xl '
                                    style={{
                                        color: "#1D3557",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Contact Us
                                </h1>
                                <p
                                    className='text-1xl mb-10 md:max-w-lg'
                                    style={{ color: "#1D3557" }}
                                >
                                    Get the understanding you need to channel
                                    the books of spells you have always been
                                    smitten with, and boost sales which cartoon
                                    rabbits love to steal! Get the understanding
                                    you need to
                                </p>
                                <div className='flex'>
                                    <div className='h-5 w-14 flex-initial grow'>
                                        <img
                                            src={Location}
                                            alt='Location icon'
                                        />
                                        <p style={{ color: "#1D3557" }}>
                                            9094 Bay Meadows Street Conyers, GA
                                            30012
                                        </p>
                                    </div>
                                    <div className='h-5 w-14 flex-initial grow'>
                                        <img src={Phone} alt='Phone icon' />
                                        <p style={{ color: "#1D3557" }}>
                                            +229-955-5388-336
                                        </p>
                                        <p style={{ color: "#1D3557" }}>
                                            +229-955-5373-360
                                        </p>
                                    </div>
                                    <div className='h-5 w-14 flex-initial grow'>
                                        <img src={Message} alt='Contact icon' />
                                        <p style={{ color: "#1D3557" }}>
                                            support@mail.com
                                        </p>
                                        <p style={{ color: "#1D3557" }}>
                                            office@mail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='FormContactUs rounded-tr pt-5 pb-5 lg:w-3/5 xl:w-3/5 xl:pr-5 xl:pl-0'>
                        <form
                            id='contact'
                            className='dark:bg-gray-800 rounded-tr bg-white py-4 px-8'
                            onSubmit={handleSubmit}
                        >
                            <div className='mb-6 block w-full flex-wrap justify-between xl:flex'>
                                <div className='mb-6 w-2/4 max-w-xs xl:mb-0'>
                                    <div className='flex flex-col'>
                                        <label
                                            className='mb-2 text-sm font-semibold'
                                            style={{ color: "#1D3557" }}
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
                                            className='FormTextContactUs h-10 rounded border focus:border focus:border-indigo-700'
                                            style={{
                                                backgroundColor: "#DDDDDD",
                                                borderWidth: 0,
                                                width: "580px",
                                            }}
                                            placeholder='Full Name'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full flex-wrap'>
                                <div className='w-2/4 max-w-xs'>
                                    <div className='flex flex-col'>
                                        <label
                                            className='mb-2 text-sm font-semibold'
                                            style={{ color: "#1D3557" }}
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
                                            className='FormTextContactUs h-10 rounded border focus:border focus:border-indigo-700'
                                            style={{
                                                backgroundColor: "#DDDDDD",
                                                borderWidth: 0,
                                                width: "580px",
                                            }}
                                            placeholder='example@email.com'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 w-full'>
                                <div className='flex flex-col'>
                                    <label
                                        className='mb-2 text-sm font-semibold'
                                        style={{ color: "#1D3557" }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        placeholder='Type Here'
                                        name='Message'
                                        className='FormTextContactUs border-gray-300 mb-4 rounded border'
                                        onChange={handleChange}
                                        value={formData.Message}
                                        rows='9'
                                        id='Message'
                                        style={{
                                            backgroundColor: "#DDDDDD",
                                            borderWidth: 0,
                                            width: "580px",
                                        }}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='w-64 rounded px-8 py-3 text-white focus:border-4'
                                    style={{
                                        backgroundColor: "#1D3557",
                                        borderWidth: 0,
                                    }}
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
            </div>
        </div>
    );
}

export default ContactUs;
