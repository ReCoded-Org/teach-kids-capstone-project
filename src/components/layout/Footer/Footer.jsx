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
                className='flex flex-wrap items-center justify-around bg-[#1D3557] py-10 text-white'
            >
                <div>
                    <img className='pb-2' src={logo} alt='Logo' />
                    <h6 className='flex justify-start pt-1'>Events</h6>
                    <h6 className='flex justify-start pt-1'>About Us</h6>
                    <h6 className='flex justify-start pt-1'>Contact Us</h6>
                    <div className='flex pt-8'>
                        <img className='pr-8' src={twitter} alt='twitter' />
                        <img className='pr-8' src={linkedin} alt='linkedin' />
                        <img className='pr-8' src={instagram} alt='instagram' />
                        <img className='pr-8' src={facebook} alt='facebook' />
                        <img className='pr-8' src={youtube} alt='youtube' />
                    </div>
                </div>

                <div className='t-10 flex flex-col'>
                    <h3 className='mb-5 flex justify-start pt-10 text-lg'>
                        Subscribe to our newsletter
                    </h3>
                    <form>
                        <h4 className='flex justify-start '>E-mail</h4>
                        <input
                            className='rounded-md text-black'
                            type='text'
                            onChange={(e) => {
                                setSubscriptionData(e.target.value);
                            }}
                            value={subscriptionData}
                        />
                        <button
                            className='rounded-md bg-[#F05454] p-2'
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

            <div className='flex-wrap justify-around bg-[#457B9D] py-1 text-white sm:flex'>
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
