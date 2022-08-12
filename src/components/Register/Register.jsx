import { Link, useNavigate } from "react-router-dom";
import organization from "src/assets/organization.jpg";
import volunteer from "src/assets/volunteer.jpg";
import close from "src/assets/close-menu.svg";
import Logo from "src/assets/Logo.png";

function Register() {
    const navigate = useNavigate();

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
            <div className='p-24 flex flex-col items-center'>
            <h1 className='text-base font-bold text-gray font-quicksand pb-6 md:text-xl'>Would you like to sign up as a:</h1>
            <div className='flex justify-evenly items-center'>
              <img src={volunteer} alt='volunteer'
              className='rounded-xl'/>
                <h4 className='text-xl font-bold text-gray font-quicksand pl-6 pr-6'>or</h4>
                <img src={organization} alt='organization'
                className='rounded-xl' />
            </div>
                <p className='flex flex-row text-base font-bold text-gray font-quicksand pt-6 md:text-xl'>
                    Already have an account?
                    <Link to='/log-in'><p className='text-red pl-2 md:hover:scale-110'>Login here</p>
                    </Link>
                </p>
                <button className='text-base mt-4 h-12 w-72 rounded bg-red font-quicksand md:text-xl font-bold text-gray md:hover:scale-105'>
                Continue signing up 
                </button>
            </div>
        </div>
    );
}

export default Register;
