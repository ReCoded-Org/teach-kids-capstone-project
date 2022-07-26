import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import { useMutation} from "@tanstack/react-query";
import google from "src/assets/google.svg";
import facebook from "src/assets/facebook.svg";
import apple from "src/assets/apple.svg";
import message from "src/assets/message.svg";
import padlock from "src/assets/padlock.svg";
import signup from "src/assets/signup.png";
import { useLocation } from 'react-router-dom'
import axios from "axios";
import Navbar from "../../components/layout/Navbar/Navbar";
function SignUp() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
      };
    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
        "confirmPassword": "",
        "username": ""
    });
    const location = useLocation()
    const Option = location.state
    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    const SignUpFormData = useMutation((SignUpData) => {
        axios.post(`https://reach-capstone.herokuapp.com/api/auth/signup/${Option}`, SignUpData).then(
            function () {
                alert("You have Successfuly Signed Up");
                navigateHome();
              }
        ).catch(function (error) {
            let isArray = Array.isArray(error.response.data.errors);
            if (isArray) {
              alert(error.response.data.errors[0].msg)
            }
            else{
              alert(error.response.data.error);
            };
        });
    });
    return (
        <div className=' bg-blue-dark h-screen w-full'>
            <Navbar />
            <div className='flex w-full justify-evenly p-20'>
                <img
                    src={signup}
                    alt={"a drawing of a young woman working on her desk"}
                    className='w-0 object-contain md:w-0 lg:w-1/3'
                />

                <div className='w-full md:w-5/6 lg:w-1/3'>
                    <h1 className=' pb-5 font-quicksand text-4xl font-bold text-gray'>
                        Sign Up
                    </h1>
                    <form
                        className='flex flex-col gap-3 font-SourceSansPro text-lg text-gray'
                        onSubmit={handleSubmit}
                    >
                        <p className='inline flex-row font-SourceSansPro'>
                            If you already have an account register, you can
                            <Link to='/sign-in'>
                                <p className='ml-1 text-red hover:scale-105'>
                                    login here!
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
                            <label className='font-quicksand font-bold'>
                                Username
                            </label>
                        </div>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            onChange={handleChange}
                            value={formData.username}
                            placeholder='Enter your username address'
                            className='border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <div className='float-right flex gap-4'>
                            <img
                                src={padlock}
                                alt={"padlock icon"}
                                className='w-5'
                            />
                            <label className='font-quicksand font-bold'>
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
                        <div className='float-right flex gap-4'>
                            <img
                                src={padlock}
                                alt={"padlock icon"}
                                className='w-5'
                            />
                            <label className='font-quicksand font-bold'>
                                Confirm Password
                            </label>
                        </div>
                        <input
                            type='password'
                            name='confirmPassword'
                            id='confirmPassword'
                            onChange={handleChange}
                            value={formData.confirmPassword}
                            placeholder='Confirm your password'
                            className='border-0 border-b border-gray bg-blue-dark focus:outline-none'
                        />
                        <button
                            className='mt-4 h-12 w-full rounded bg-red font-quicksand text-2xl font-bold text-gray hover:scale-105'
                            onClick={() => {
                                SignUpFormData.mutate({
                                    "email": formData.email,
                                    "password": formData.password,
                                    "confirmPassword": formData.confirmPassword,
                                    "username":formData.username
                                });
                            }}
                        >
                            Sign Up
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

export default SignUp;
