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
import axios from "axios";
import Navbar from "../layout/Navbar/Navbar";
import { useEffect } from "react";
function SignIn() {
    const navigate = useNavigate();
    const [name, setnamengo] = useState("");
    const [volunteer, setnamevolunteer] = useState("");
    const navigateHome = () => {
        navigate("/");
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
    const GetNameEmail = useMutation(() => {
        if (localStorage.getItem("userType") === "Ngo") {
            axios
                .get(
                    `https://reach-capstone.herokuapp.com/api/ngos/${localStorage.getItem(
                        "userId"
                    )}`
                )
                .then(function (data) {
                    localStorage.setItem("userName", data.data.data.name);
                    localStorage.setItem("userEmail", data.data.data.email);
                });
        } else if (localStorage.getItem("userType") === "Volunteer") {
            axios
                .get(
                    `https://reach-capstone.herokuapp.com/api/volunteers/${localStorage.getItem(
                        "userId"
                    )}`
                )
                .then(function (data) {
                    localStorage.setItem("userName", data.data.data.name);
                    localStorage.setItem("userEmail", data.data.data.email);
                });
        }
    });
    const SendtoSignIn = useMutation((SignInData) => {
        axios
            .post(
                `https://reach-capstone.herokuapp.com/api/auth/login`,
                SignInData,
                {
                    withCredentials: true,
                }
            )
            .then(function (res) {
                console.log(res.data.data);
                if (res.data.success) {
                    localStorage.setItem("userId", res.data.data._id);
                    localStorage.setItem("userType", res.data.data.type);
                    localStorage.setItem("NavType", true);
                }
                GetNameEmail.mutate();
                navigateHome();
            })
            .catch(function (error) {
                let isArray = Array.isArray(error.response.data.errors);
                if (isArray) {
                    alert(error.response.data.errors[0].msg);
                } else {
                    alert(error.response.data.error);
                }
            });
    });
    return (
        <div className=' bg-blue-dark'>
            <Navbar />
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
                        Sign In
                    </h1>
                    <form
                        className='font-body flex flex-col gap-3 text-lg text-gray'
                        onSubmit={handleSubmit}
                    >
                        <p className=' inline flex-row font-SourceSansPro'>
                            If you don`t have an account register, you can{" "}
                            <Link to='/sign-up' className=''>
                                <p className='ml-1 text-red '>
                                    {" "}
                                    register here!
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
                                Email
                            </label>
                        </div>
                        <input
                            type='email'
                            name='email'
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                                    email: formData.email,
                                    password: formData.password,
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
