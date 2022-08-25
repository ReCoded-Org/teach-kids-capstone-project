import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import google from "src/assets/google.svg";
import facebook from "src/assets/facebook.svg";
import apple from "src/assets/apple.svg";
import message from "src/assets/message.svg";
import padlock from "src/assets/padlock.svg";
import close from "src/assets/close-menu.svg";
import Logo from "src/assets/Logo.png";
import signup from "src/assets/signup.png";
import { useTranslation } from "react-i18next";

function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const SignUpFormData = useMutation((SignUpData) => {
        return fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
            body: JSON.stringify(SignUpData),
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
            <div className='flex w-full justify-evenly p-20'>
                <img
                    src={signup}
                    alt={"a drawing of a young woman working on her desk"}
                    className='lg:5/12 w-0 md:w-5/12'
                />

                <div className='w-full md:w-4/12'>
                    <h1 className=' pb-5 font-quicksand text-4xl font-bold text-gray'>
                        {t("signUp.title")}
                    </h1>
                    <form
                        className='flex flex-col gap-3 font-SourceSansPro text-lg text-gray'
                        onSubmit={handleSubmit}
                    >
                        <p className='flex flex-row font-SourceSansPro'>
                            {t("signUp.description1")}
                            <Link to='/log-in'>
                                <p className='ml-1 text-red hover:scale-105'>
                                    {t("signUp.description2")}
                                </p>
                            </Link>
                        </p>
                        <div className='float-right flex gap-4'>
                            <img
                                src={message}
                                alt={"email icon"}
                                className='w-5'
                            />
                            <label className='font-quicksand font-bold'>
                                {t("signUp.emailFormTitle")}
                            </label>
                        </div>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            value={formData.email}
                            placeholder='example@gmail.com'
                            className=' border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <div className='float-right flex gap-4'>
                            <img
                                src={padlock}
                                alt={"padlock icon"}
                                className='w-5'
                            />
                            <label className='font-quicksand font-bold'>
                                {t("signUp.usernameFormTitle")}
                            </label>
                        </div>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            onChange={handleChange}
                            value={formData.username}
                            placeholder={t("signUp.usernameFormPlaceholder")}
                            className='border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <div className='float-right flex gap-4'>
                            <img
                                src={padlock}
                                alt={"padlock icon"}
                                className='w-5'
                            />
                            <label className='font-quicksand font-bold'>
                                {t("signUp.passwordFormTitle")}
                            </label>
                        </div>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            onChange={handleChange}
                            value={formData.password}
                            placeholder={t("signUp.passwordFormPlaceholder")}
                            className='border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <div className='float-right flex gap-4'>
                            <img
                                src={padlock}
                                alt={"padlock icon"}
                                className='w-5'
                            />
                            <label className='font-quicksand font-bold'>
                                {t("signUp.ConfirmPasswordFormTitle")}
                            </label>
                        </div>
                        <input
                            type='password'
                            name='confirmPassword'
                            id='confirmPassword'
                            onChange={handleChange}
                            value={formData.confirmPassword}
                            placeholder={t(
                                "signUp.ConfirmPasswordFormPlaceholder"
                            )}
                            className='border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <button
                            className='mt-4 h-12 w-full rounded bg-red font-quicksand text-2xl font-bold text-gray hover:scale-105'
                            onClick={() => {
                                SignUpFormData.mutate({
                                    username: formData.username,
                                    email: formData.email,
                                    password: formData.password,
                                    confirmPassword: formData.confirmPassword,
                                });
                            }}
                        >
                            {t("signUp.signUpBut")}
                        </button>
                        <h4 className='flex justify-center'>
                            {t("signUp.continue")}
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

export default SignUp;
