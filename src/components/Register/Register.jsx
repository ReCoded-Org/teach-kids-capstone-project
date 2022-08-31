import { React, useState } from "react";
import { Link, useNavigate,Route } from "react-router-dom";
import organization from "src/assets/organization.jpg";
import volunteer from "src/assets/volunteerOption.jpg";
import close from "src/assets/close-menu.svg";
import Logo from "src/assets/Logo.png";
import Navbar from "../../components/layout/Navbar/Navbar";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Option: "",
    });

    const handleChange = event => {
        event.currentTarget.classList.toggle('scale-110');
        const name = event.currentTarget.name;
        let id = event.currentTarget.id;
        setFormData({ [name]: id });
    };
    console.log(formData.Option)
    function handleSubmit(event) {
        event.preventDefault(); 
    }
    return (
        <>
        <div className='h-screen w-full bg-blue-dark'>
            <Navbar />
            <div
                className='flex flex-col items-center p-24'
                onSubmit={handleSubmit}
            >
                <h1 className='pb-12 font-quicksand text-xl font-bold text-white md:text-3xl'>
                    Would you like to sign up as a:
                </h1>
                <div className='flex items-center justify-evenly '>
                    <div className="hover:scale-110">
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
                    <h4 className='pl-6 pr-6 font-quicksand text-xl font-bold text-white'>
                        or
                    </h4>
                    <div className="hover:scale-110">
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
                <p className='flex flex-row pt-12 font-quicksand text-base font-bold text-white md:text-xl'>
                    Already have an account?
                    <Link to='/sign-in'>
                        <p className='pl-2 text-red md:hover:scale-110'>
                            Login here
                        </p>
                    </Link>
                </p>
                <button
                    className='mt-4 h-12 w-5/6 md:w-72 rounded bg-red font-quicksand text-base font-bold text-white md:text-xl md:hover:scale-105'
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