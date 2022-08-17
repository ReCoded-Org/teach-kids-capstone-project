import react, { useState } from "react";
import logo from "../../../assets/Logo.png";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import PostRequestFunction from "./PostRequestFunction";

export default function Footer() {
    const [subscriptionData, setSubscriptionData] = useState("");
    return (
        <div>
            <div
                data-testid='footer'
                className='jus flex flex-wrap items-center bg-primary px-12 py-10 font-SourceSansPro text-xl text-white md:justify-around lg:justify-between lg:px-36'
            >
                <div className='my-2'>
                    <img className='pb-2' src={logo} alt='Logo' />
                    <h6 className='flex justify-start pt-2'>Events</h6>
                    <h6 className='flex justify-start pt-2'>About Us</h6>
                    <h6 className='flex justify-start pt-2'>Contact Us</h6>
                    <div className='flex pt-8'>
                        <img className='pr-8' src={twitter} alt='twitter' />
                        <img className='pr-8' src={linkedin} alt='linkedin' />
                        <img className='pr-8' src={instagram} alt='instagram' />
                        <img className='pr-8' src={facebook} alt='facebook' />
                        <img className='pr-8' src={youtube} alt='youtube' />
                    </div>
                </div>
                <div className='t-10 flex flex-col lg:mr-6'>
                    <h3 className='mb-5 flex justify-start pt-10 text-lg'>
                        Subscribe to our newsletter
                    </h3>
                    <form>
                        <h4 className='flex justify-start'>E-mail</h4>
                        <input
                            className='rounded-md text-black'
                            type='text'
                            onChange={(e) => {
                                setSubscriptionData(e.target.value);
                            }}
                            value={subscriptionData}
                        />
                        <button
                            className='rounded-md border-2 border-red hover:border-white bg-red p-1.5 hover:bg-blue-light transform duration-300 ease-linear hover:shadow'
                            onClick={(e) => {
                                e.preventDefault();
                                PostRequestFunction(subscriptionData);
                            }}
                        >
                            Submit &#8594;
                        </button>
                    </form>
                </div>
            </div>
            <div className='flex-wrap justify-around bg-secondary pb-2 pt-1 text-white sm:flex'>
                <div className='grid grid-cols-1'>
                    <p className='my-1 justify-self-start pl-5 text-xs'>
                        All right reserved
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:flex sm:justify-between sm:justify-items-stretch'>
                    <div className='my-1 justify-self-start pl-5 text-xs'>
                        Terms and Conditions
                    </div>
                    <div className='my-1 justify-self-start pl-5 text-xs'>
                        Privacy and Cookies
                    </div>
                    <div className='my-1 justify-self-start pl-5 pr-2 text-xs'>
                        Accessability
                    </div>
                </div>
            </div>
        </div>
    );
}
