import { React, useState } from "react";
import { Link, useNavigate,Route } from "react-router-dom";
import organization from "src/assets/organization.jpg";
import volunteer from "src/assets/volunteerOption.jpg";
import close from "src/assets/close-menu.svg";
import Logo from "src/assets/Logo.png";
import SignUp from "../SignUp/SignUp";


function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Option: "",
    });

    function handleChange(event) {
        const name = event.currentTarget.name;
        let id = event.currentTarget.id;
        setFormData({ [name]: id });
    }
    console.log(formData.Option)
    function handleSubmit(event) {
        event.preventDefault(); 
    }
    return (
        <>
        <div className='h-screen w-full bg-blue-dark'>
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
            <div
                className='flex flex-col items-center p-24'
                onSubmit={handleSubmit}
            >
                <h1 className='pb-6 font-quicksand text-base font-bold text-gray md:text-xl'>
                    Would you like to sign up as a:
                </h1>
                <div className='flex items-center justify-evenly'>
                    <div>
                        <button
                            id='volunteer'
                            name='Option'
                            onClick={handleChange}
                        >
                            <img
                                src={volunteer}
                                alt='volunteer'
                                className='rounded-xl'
                            />
                        </button>
                    </div>
                    <h4 className='pl-6 pr-6 font-quicksand text-xl font-bold text-gray'>
                        or
                    </h4>
                    <div>
                        <button
                            id='ngo'
                            name='Option'
                            onClick={handleChange}
                        >
                            <img
                                src={organization}
                                alt='organization'
                                className='rounded-xl'
                            />
                        </button>
                    </div>
                </div>
                <p className='flex flex-row pt-6 font-quicksand text-base font-bold text-gray md:text-xl'>
                    Already have an account?
                    <Link to='/sign-in'>
                        <p className='pl-2 text-red md:hover:scale-110'>
                            Login here
                        </p>
                    </Link>
                </p>
                <button
                    className='mt-4 h-12 w-72 rounded bg-red font-quicksand text-base font-bold text-gray md:text-xl md:hover:scale-105'
                    ><Link to="/sign-up" state={formData.Option}>
                    Next Step
                  </Link>
                </button>
            </div>
        </div>
        </>
    );
}

export default Register;
