import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SigninPic from "../../assets/SigninPic.png";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import message from "../../assets/message.svg";
import padlock from "../../assets/padlock.svg";
import Logo from "../../assets/Logo.png";
import close from "../../assets/close-menu.svg";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Email: "John@gmail.com",
        Password: "124",
        checkedBox: 0,
    });
    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;

        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }
    const SendtoSignIn = useMutation((SignInData) => {
        return fetch("http://localhost:3004/SignIn", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
            body: JSON.stringify(SignInData),
        });
    });

    const [t] = useTranslation();

    return (
        <div className=' bg-blue-dark'>
            <div className='flex justify-between pl-2 pr-2 md:pl-40 md:pr-40 md:pt-2'>
                <Link to='/'>
                    <img src={Logo} alt='Reach' />
                </Link>
                <img
                    src={close}
                    alt='close'
                    className='hover:scale-125 hover:cursor-pointer'
                    onClick={() => navigate(-1)}
                />
            </div>
            <div className='flex w-full content-center justify-evenly bg-blue-dark p-24'>
                <img
                    src={SigninPic}
                    alt={
                        "a drawing of a little boy in a classroom raising his hand"
                    }
                    className='lg:6/12 w-0 object-contain md:w-6/12'
                />

                <div className='w-full pt-16 md:w-4/12'>
                    <h1 className=' font-heading pb-6 text-5xl font-bold text-gray'>
                        {t("signIn.title")}
                    </h1>
                    <form
                        className='font-body flex flex-col gap-3 text-lg text-gray'
                        onSubmit={handleSubmit}
                    >
                        <p className=' inline flex-row font-SourceSansPro'>
                            {t("signIn.description1")}
                            <Link to='/sign-up' className=''>
                                <p className='ml-1 text-red '>
                                    {" "}
                                    {t("signIn.description2")}
                                </p>
                            </Link>
                        </p>

                        <div className='float-right flex gap-4'>
                            <img
                                src={message}
                                alt={"email icon"}
                                className='w-5'
                            />
                            <label className='font-heading font-bold'>
                                {t("signIn.emailFormTitle")}
                            </label>
                        </div>
                        <input
                            type='text'
                            name='Email'
                            onChange={handleChange}
                            value={formData.Email}
                            placeholder='example@gmail.com'
                            className=' border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <div className='float-right flex gap-4'>
                            <img
                                src={padlock}
                                alt={"padlock icon"}
                                className='w-5'
                            />
                            <label className='font-heading font-bold'>
                                {t("signIn.passwordFormTitle")}
                            </label>
                        </div>
                        <input
                            type='password'
                            name='password'
                            onChange={handleChange}
                            value={formData.Password}
                            placeholder={t("signIn.passwordFormPlaceholder")}
                            className='border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <input
                                        type='checkbox'
                                        name='remember'
                                        onChange={handleChange}
                                        className='border-0 border-b border-gray bg-gray focus:outline-none'
                                    />
                                    <label className='font-heading font-bold'>
                                        {" "}
                                        {t("signIn.remember")}
                                    </label>
                                </div>
                                <p>{t("signIn.forget")}</p>
                            </div>
                        </div>
                        <button
                            className='font-heading mt-4 h-12 w-full rounded bg-red text-2xl font-bold text-gray'
                            onClick={() => {
                                SendtoSignIn.mutate({
                                    Email: formData.Email,
                                    Password: formData.Password,
                                    checkedBox: formData.checkedBox,
                                });
                            }}
                        >
                            {t("signIn.loginBut")}
                        </button>
                        <h4 className='flex justify-center'>
                            {t("signIn.continue")}
                        </h4>
                        <div className='flex w-full flex-row justify-center gap-3'>
                            <img
                                src={google}
                                alt={"google icon"}
                                className='hover:scale-125'
                            />
                            <img
                                src={facebook}
                                alt={"facebook icon"}
                                className='hover:scale-125'
                            />
                            <img
                                src={apple}
                                alt={"apple icon"}
                                className='hover:scale-125'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignIn;
