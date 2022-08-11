import {React, useState }from "react";
import { Link, useNavigate} from "react-router-dom";
import organization from "src/assets/organization.jpg";
import volunteer from "src/assets/volunteerOption.jpg";
import close from "src/assets/close-menu.svg";
import Logo from "src/assets/Logo.png";
import {useMutation } from 'react-query';
import { FocusTrap } from "@headlessui/react";
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Option: "",
    });
 
    function handleChange(event) {
        const name = event.currentTarget.name;
        let id = event.currentTarget.id;
        setFormData({[name]: id });
    }
 
    function handleSubmit(event) {
        event.preventDefault();
    }

    const SendtoRegisterOption=useMutation((RegisterOptionData)=>{
        return fetch("http://localhost:3002/RegisterOption",{
            method: "POST",
            headers:{
                Accept:"application/json",
                "content-Type":"application/json"
            },
            body:JSON.stringify(RegisterOptionData),
        })
    });
 
    return (
        <div className='bg-blue-dark w-full h-screen'>
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
            <div className='p-24 flex flex-col items-center' onSubmit={handleSubmit}>
            <h1 className='text-base font-bold text-gray font-quicksand pb-6 md:text-xl'>Would you like to sign up as a:</h1>
            <div className='flex justify-evenly items-center'>
                <div>
                <button id="volunteer" name="Option" onClick={handleChange}>
              <img src={volunteer} alt='volunteer'
              className='rounded-xl'/></button></div>
                <h4 className='text-xl font-bold text-gray font-quicksand pl-6 pr-6'>or</h4>
                <div>
                   <button id="Organization" name="Option" onClick={handleChange}> 
                <img src={organization} alt='organization'
                className='rounded-xl' /></button></div>
            </div>
                <p className='flex flex-row text-base font-bold text-gray font-quicksand pt-6 md:text-xl'>
                    Already have an account?
                    <Link to='/log-in'><p className='text-red pl-2 md:hover:scale-110'>Login here</p>
                    </Link>
                </p>
                <button className='text-base mt-4 h-12 w-72 rounded bg-red font-quicksand md:text-xl font-bold text-gray md:hover:scale-105'onClick={() => {
                    SendtoRegisterOption.mutate({
                        Option:formData.Option,
                    });
                }}>
                Continue signing up 
                </button>
            </div>
        </div>
    );
}

export default Register;
