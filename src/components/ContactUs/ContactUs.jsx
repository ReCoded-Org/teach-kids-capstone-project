import { React, useState } from "react";
import Phone from "../../assets/phone.svg";
import Message from "../../assets/email.svg";
import Location from "../../assets/location.svg";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import axios from "axios";

function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
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
        axios.post(`https://reach-capstone.herokuapp.com/api/feedbacks`, ContactUsData);
          })

    const [t] = useTranslation();
console.log(formData)
    return (
        <div
            id='contact-us'
            className='Contact Us before mx-auto flex  w-10/12 items-center justify-between md:w-9/12'
        >
            <div className='container  mx-auto pt-16'>
                <div className='grid gap-6 lg:flex lg:justify-between'>
                    <div className='  py-10'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='conta ctInfo col'>
                                <h1 className='mb-10 font-quicksand text-5xl font-bold text-blue-dark'>
                                    {t("home.contactUs.title")}
                                </h1>
                                <p className='mb-10 text-justify font-SourceSansPro text-lg text-blue-dark md:max-w-lg'>
                                    {t("home.contactUs.description")}
                                </p>
                                <div className='flex pb-20'>
                                    <div className='mr-5 h-5 w-10 grow font-SourceSansPro text-blue-dark'>
                                        <img
                                            src={Location}
                                            alt='Location icon'
                                        />
                                        <p>
                                            9094 Bay Meadows Street Conyers, GA
                                            30012
                                        </p>
                                    </div>
                                    <div className='mr-5 h-5 w-10 grow font-SourceSansPro text-blue-dark'>
                                        <img src={Phone} alt='Phone icon' />
                                        <p>+229-955-5388-336</p>
                                        <p>+229-955-5373-360</p>
                                    </div>
                                    <div className='mr-5 h-5 w-10 grow font-SourceSansPro text-blue-dark'>
                                        <img src={Message} alt='Contact icon' />
                                        <p>support@mail.com</p>
                                        <p>office@mail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-8 rounded-tr lg:w-5/12'>
                        <form
                            id='contact'
                            className='bg-gray-800 rounded-tr font-SourceSansPro'
                            onSubmit={handleSubmit}
                        >
                            <div className='justify-between'>
                                <div className='flex flex-col'>
                                    <label className='mb-2 pt-8 text-lg font-semibold text-blue-dark'>
                                        {t("home.contactUs.fullNameFormTitle")}
                                    </label>
                                    <input
                                        required
                                        id='fullName'
                                        name='fullName'
                                        type='text'
                                        onChange={handleChange}
                                        className='mb-6 rounded border-none bg-gray focus:border focus:border-blue-dark'
                                        placeholder={t(
                                            "home.contactUs.fullNameFormPlaceholder"
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2 text-lg font-semibold text-blue-dark'>
                                    {t("home.contactUs.emailFormTitle")}
                                </label>
                                <input
                                    required
                                    id='email'
                                    name='email'
                                    type='email'
                                    onChange={handleChange}
                                    className='mb-6 rounded border-none bg-gray focus:border focus:border-blue-dark'
                                    placeholder='example@email.com'
                                />
                            </div>
                            <div className='mt-6 w-full'>
                                <div className='flex flex-col'>
                                    <label className='mb-2 text-lg font-semibold text-blue-dark'>
                                        {t("home.contactUs.messageFormTitle")}
                                    </label>
                                    <textarea
                                        placeholder={t(
                                            "home.contactUs.messageFormPlaceholder"
                                        )}
                                        name='message'
                                        className='mb-6 rounded border-none bg-gray'
                                        onChange={handleChange}
                                        rows='9'
                                        id='message'
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='w-56 rounded-md border-2 border-blue-dark bg-blue-dark p-2 font-SourceSansPro font-semibold text-white  duration-300 ease-linear hover:border-blue-dark hover:bg-white hover:text-blue-dark hover:shadow'
                                    onClick={() => {
                                        SendtoContactUs.mutate({
                                            fullName: formData.fullName,
                                            email: formData.email,
                                            message: formData.message,
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
