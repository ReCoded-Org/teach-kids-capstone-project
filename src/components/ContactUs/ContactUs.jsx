import { React, useState } from "react";
import Phone from "../../assets/phone.svg";
import Message from "../../assets/email.svg";
import Location from "../../assets/location.svg";
import "./ContactUs.css";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

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

    const [t] = useTranslation();

    return (
        <div className='ContactUs flex items-center justify-between'>
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
                                    {t("home.contactUs.title")}
                                </h1>
                                <p
                                    className='text-1xl mb-10 md:max-w-lg'
                                    style={{ color: "#1D3557" }}
                                >
                                    {t("home.contactUs.description")}
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
                                            {t("home.contactUs.fullNameFormTitle")}
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
                                            placeholder={t("home.contactUs.fullNameFormPlaceholder")}
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
                                            {t("home.contactUs.emailFormTitle")}
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
                                        {t("home.contactUs.messageFormTitle")}
                                    </label>
                                    <textarea
                                        placeholder={t("home.contactUs.messageFormPlaceholder")}
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
                                    {t("home.contactUs.btn")}
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
