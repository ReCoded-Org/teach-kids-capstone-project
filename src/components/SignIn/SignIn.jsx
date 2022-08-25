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
import Navbar from "../../components/layout/Navbar/Navbar";
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
    }
    const SendtoSignIn = useMutation((SignInData) => {
        return fetch("https://reach-capstone.herokuapp.com/api/auth/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
            body: JSON.stringify(SignInData),
        });
    });
    return (
        <div className=' bg-blue-dark'>
            <Navbar />
            <div className='flex w-full justify-evenly bg-blue-dark p-24'>
                <img
                    src={SigninPic}
                    alt={
                        "a drawing of a little boy in a classroom raising his hand"
                    }
                    className='lg:5/12 w-0 md:w-5/12'
                />

                <div className='w-full pt-16 md:w-4/12'>
                    <h1 className=' font-heading pb-6 text-5xl font-bold text-gray'>
                        Sign In
                    </h1>
                    <form
                        className='font-body flex flex-col gap-3 text-lg text-gray'
                        onSubmit={handleSubmit}
                    >
                        <p className='flex flex-row font-SourceSansPro'>
                            If you don`t have an account register, you can{" "}
                            <Link to='/sign-up'>
                                <p className='ml-1 text-red'> register here!</p>
                            </Link>
                        </p>

                        <div className='float-right flex gap-4'>
                            <img
                                src={message}
                                alt={"email icon"}
                                className='w-5'
                            />
                            <label className='font-heading font-bold'>
                                Email
                            </label>
                        </div>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            value={formData.email}
                            placeholder='Enter your email address'
                            className=' border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <div className='float-right flex gap-4'>
                            <img
                                src={padlock}
                                alt={"padlock icon"}
                                className='w-5'
                            />
                            <label className='font-heading font-bold'>
                                Password
                            </label>
                        </div>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            onChange={handleChange}
                            value={formData.password}
                            placeholder='Enter your password'
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
                                        Remember Me
                                    </label>
                                </div>
                                <p>Forgot password?</p>
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
                            Login
                        </button>
                        <h4 className='flex justify-center'>
                            or continue with
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
