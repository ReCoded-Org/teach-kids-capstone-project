import react, { useState } from "react";
import logo from "../../../assets/Logo.png";
import twitter from "../../../assets/twitter.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebookFooter.svg";
import youtube from "../../../assets/youtube.svg";
import PostRequestFunction from "./PostRequestFunction";
import { isValidEmail } from "../../../services/ValidationFunctions";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
    const [subscriptionData, setSubscriptionData] = useState("");
    const [validationMsg, setValidationMsg] = useState("");
    const [t] = useTranslation();
    return (
        <div className='bg-primary'>
            <div
                data-testid='footer'
                className='mx-auto flex w-9/12 flex-wrap items-center justify-between bg-primary py-10  font-SourceSansPro text-xl text-white md:px-8  lg:justify-between '
            >
                <div className='my-2'>
                    <img className='pb-2' src={logo} alt='Logo' />
                    <Link to='/events'>
                        <h6 className='flex justify-start pt-2'>
                            {t(`footer.pages.${[0]}`)}
                        </h6>
                    </Link>
                    <HashLink smooth to='/#contact-us'>
                        <h6 className='flex justify-start pt-2'>
                            {t(`footer.pages.${[1]}`)}
                        </h6>
                    </HashLink>
                    <HashLink smooth to='/#about'>
                        <h6 className='flex justify-start pt-2'>
                            {t(`footer.pages.${[2]}`)}
                        </h6>
                    </HashLink>
                    <Link to='/our-team'>
                        <h6 className='flex justify-start pt-2'>
                            {t(`footer.pages.${[3]}`)}
                        </h6>
                    </Link>
                    <div className='flex pt-8'>
                        <img className='pr-8' src={twitter} alt='twitter' />
                        <img className='pr-8' src={linkedin} alt='linkedin' />
                        <img className='pr-8' src={instagram} alt='instagram' />
                        <img className='pr-8' src={facebook} alt='facebook' />
                        <img className='pr-8' src={youtube} alt='youtube' />
                    </div>
                </div>
                <div className='t-10 flex flex-col'>
                    <h3 className='mb-5 flex justify-start pt-10 text-2xl'>
                        {t(`footer.newsletter.title`)}
                    </h3>
                    <div className='flex justify-between'>
                        <h4 className=' mx-6 text-red'>{validationMsg}</h4>
                    </div>
                    <form>
                        <h4 className='flex justify-start'>
                            {t(`footer.newsletter.email`)}
                        </h4>
                        <input
                            className='rounded-md text-black'
                            type='text'
                            onChange={(e) => {
                                setSubscriptionData(e.target.value);
                                setValidationMsg("");
                            }}
                            value={subscriptionData}
                        />
                        <button
                            className='transform rounded-md border-2 border-red bg-red p-1.5 duration-300 ease-linear hover:border-white hover:bg-blue-light hover:shadow'
                            onClick={(e) => {
                                e.preventDefault();
                                if (isValidEmail(subscriptionData)) {
                                    PostRequestFunction(subscriptionData);
                                } else {
                                    setValidationMsg("Enter a Valid Email");
                                }
                            }}
                        >
                            {t(`footer.newsletter.btn`)} &#8594;
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-secondary">
            <div className='mx-auto flex w-9/12 flex-col flex-wrap justify-start  pb-2 pt-1 text-white md:flex md:flex-row md:justify-between'>
                <div className='grid grid-cols-1'>
                    <p className='my-1 justify-self-start md:pl-5 text-xs'>
                        {t(`footer.lowerFooter.${[0]}`)}
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:flex sm:justify-between sm:justify-items-stretch'>
                    <div className='my-1 justify-self-start md:pl-5 text-xs'>
                        {t(`footer.lowerFooter.${[1]}`)}
                    </div>
                    <div className='my-1 justify-self-start md:pl-5 text-xs'>
                        {t(`footer.lowerFooter.${[2]}`)}
                    </div>
                    <div className='my-1 justify-self-start md:pl-5 pr-2 text-xs'>
                        {t(`footer.lowerFooter.${[3]}`)}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
